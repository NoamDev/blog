dojo.require("dojo._base.html");
dojo.require("dijit.form.Textarea");
dojo.require("dijit.InlineEditBox");
dojo.require("dojo.fx")
dojo.require("dijit.layout.BorderContainer");
dojo.require("dijit.layout.ContentPane");
dojo.require("dijit.layout.AccordionContainer");
dojo.require("dojox.data.XmlStore");
dojo.require("dojox.charting.Chart2D");
dojo.require("dojox.charting.themes.PlotKit.green");
dojo.require("dojox.charting.themes.Adobebricks");
dojo.require("dojox.charting.action2d.Tooltip");
dojo.require("dojox.charting.action2d.Magnify");
dojo.require("dojox.charting.action2d.MoveSlice");

var FacultyNames = new Object();
FacultyNames[32] = "הומניסטיים";
FacultyNames[39] = "ספורט";
FacultyNames[23] = "מדמ\"ח";
FacultyNames[10] = "מתמטיקה";
FacultyNames[11] = "פיזיקה";
FacultyNames[9] = "תעו\"ן";
FacultyNames[12] = "כימיה";
FacultyNames[4] = "חשמל";
FacultyNames[1] = "אזרחית";
FacultyNames[5] = "ה. כימית";
FacultyNames[3] = "מכונות";
FacultyNames[20] = "ארכיטקטורה";
FacultyNames[13] = "ביולוגיה";
FacultyNames[21] = "הוראת המדעים";
FacultyNames[33] = "ביורפואה";
FacultyNames[7] = "חקלאית";
FacultyNames[8] = "אווירונאוטיקה";
FacultyNames[6] = "ביוטכנולוגיה";
FacultyNames[31] = "חומרים";
FacultyNames[27] = "רפואה";



var semesterCount = 0;
var semesterData = new Object();
var PlotFunction = 0;
var chart = 0;
var GradesPerFaculty = new Object();
var BinaryPerFaculty = new Object();
var PointsPerFaculty = new Object();
var BINARY="בינארי";
var needToLoadCourseList=true;
var addToSemester;

String.prototype.reverse = function(){
    splitext = this.split("");
    revertext = splitext.reverse();
    reversed = revertext.join("");
    return reversed;
}


function roundBy(num, decimals) {
    var v = Math.pow(10,decimals);
    return Math.round(num*v)/v;
}


function addCourseFromList(num, points, name) {
    addCourse(addToSemester, num, points, name, "-");
}

function addCourse(container, num, points, name, grade) {
    var class_name="course";
    if (grade == "-") {class_name="non-complete"; grade="";}
    if (grade == "לא השלים") {class_name="non-complete"; grade="";}
    if (grade == "עבר") {grade=BINARY;}
    var ul = dojo.create("ul", {class:class_name});
    if ((container == dojo.byId("courseList"))) {dojo.create("li", { innerHTML: "<a href=\"javascript:addCourseFromList('"+num+"', '"+points+"','"+name+"');\">+</a>", class:"plus" }, ul);}
    dojo.place(ul, container, "last");
   var num_li = dojo.create("li", { innerHTML: "<span>"+num+"</span>"}, ul);
    dojo.create("a", {href:"javascript:void();", onclick: function() {
	container.removeChild(ul);
	updateSemester(container);
    }, innerHTML:"x "}, num_li);
    dojo.create("li", { innerHTML: name}, ul);
    dojo.create("li", { innerHTML: points}, ul);
    var grade_li = dojo.create("li", {class: "grade-li"}, ul);
    var grade_span = dojo.create("span", {class : "grade" , innerHTML: grade}, grade_li);
    new dijit.InlineEditBox({autoSave: true, onChange : function(value) {
            if ((value=="-") || (value == "")) ul.className="non-complete";
            else ul.className="course";
            updateSemester(container);
        }}, grade_span);
    //var m = new dojo.dnd.Moveable(ul, {type:["course"]});

    if ((container != dojo.byId("ptorim")) && (container != dojo.byId("courseList"))) updateSemester(container);
}


function loadXML(XMLnum) {
	var percent=Math.round(100*XMLnum/13)+1;
	dojo.byId("courseListMsg").innerHTML='טוען... '+percent+'%';
	var ul = dojo.byId("courseList");
	var store = new dojox.data.XmlStore({url: "course"+XMLnum+".xml", rootItem: "course"});
	var gotCourse = function(items, request){
	    var s="";
	    for (var i = 0; i < items.length; i++){
		var item = items[i];
		addCourse(ul, store.getValue(item, "num"), store.getValue(item, "points"), String(store.getValue(item, "name")).reverse(), "-");
	    }
	};
	var request = store.fetch({onComplete: gotCourse});
	if (XMLnum <12 ) {
		XMLnum++;
	    	setTimeout("loadXML("+XMLnum+");",50);
	}
	else {
	    //dijit.byId("courseList").startup();
	    dojo.byId("courseListMsg").innerHTML="";
	} 
}

function showAddCourseDialog(sem) {
    addToSemester=sem;
    showCL();
    if (needToLoadCourseList) {
	loadXML(0);
	needToLoadCourseList=false;
    }
}


function addSemester() {
    var sem = dojo.create("li", {class:"semester"}, semesters, "last");
    dojo.create("input", {type:"hidden", value:semesterCount, class:"semesterNumber"}, sem, "last");
    semesterCount++;
    var title = dojo.create("ul", {class:"semesterTitle"}, sem, "last");
    dojo.create("li", { innerHTML: "מס' קורס", style:"width:80px;"}, title);
    dojo.create("li", { innerHTML: "שם הקורס"}, title);
    dojo.create("li", { innerHTML: "נק'", style:"width:60px;"}, title);
    dojo.create("li", { innerHTML: "ציון", style:"width:50px;" }, title);
  
  
    //var dndSem = new dojo.dnd.Target(sem, {accept: ["course"]});
    updateSemester(sem);
    return sem;
}


function parseCourse(item) {
    var data=new Object();
    if (item) {
        data.points=item[2].innerHTML*1
        data.number=dojo.query("span",item[0])[0].innerHTML*1;
        data.grade=dojo.query(".grade",item[3])[0].innerHTML;
    }
    return data;
}


function updateSemester(sem) {
    var num=dojo.query(".semesterNumber", sem)[0].value;

    var sum=dojo.query(".semesterSum", sem)[0];
    if (sum != undefined) {dojo.destroy(sum);}
    var CourseByNum = new Object();
    
    
  
  
    var points=0; var grades=0; var binary=0; var fail=0;
    var courses=dojo.query("ul.course", sem);
    for (var i=0; i<courses.length; i++) {
        var data = parseCourse(dojo.query("li",courses[i]));
        CourseByNum[data.number]=data;
    }
  
  
    for (var i in CourseByNum) {
        var course=CourseByNum[i];
        if (course.grade==BINARY) {
            binary+=course.points;
        }
        else {
            grades+=course.grade*course.points;
            points+=course.points;
            if (course.grade*1<55) {
		fail+=course.points;
            }
        }
    }
  
  
    var points2=points;
    var NC=dojo.query("ul.non-complete", sem);
    for (var i=0; i<NC.length; i++) {
        var data=parseCourse(dojo.query("li", NC[i]));
        if (!(CourseByNum[data.number])) points2+=data.points;;
    }
  
    if (points==0) {grades=0;}
    else {grades=roundBy(grades/points,2);}
    points-=fail;
    if (points2>points) {points=""+(points+binary)+"/"+(points2+binary);}
    else {points+=binary;}
    var data=new Object();
    data.points=points2;
    data.grades=grades;
    semesterData[num]=data;


    sum = dojo.create("ul", {class:"semesterSum"}, sem, "last");
    var plus = dojo.create("li", { class: "plus"}, sum);
    var a =  dojo.create("a", {href:"javascript:var n='';", innerHTML:"+", onclick:function(){showAddCourseDialog(sem)}} , plus); 
    dojo.create("li", { innerHTML: "סה\"כ"}, sum);
    dojo.create("li", { innerHTML: points}, sum);
    dojo.create("li", { innerHTML: grades }, sum);
  
  
    dojo.style(sum, "opacity", "0");
    dojo.fadeIn({node:sum, duration:1000}).play();
    
  
  
    sumTotal();
}


function parseInput() {
    try
    {
        dojo.byId("inputDiv").style.display="none";
        
        var sem=undefined; var count=0;
        var prev_line="";
      
      
        var semesterRE=/ציון\s+\נק.\s+מקצוע/;
        var englishRE=/פטור עם ניקוד\s+3.0\s+אנגלית טכנית/;
        var courseRE=/^(\d+|-|עבר|לא השלים)\s+\*?\s*(\d+\.\d)\s+(.+)\s+(\d+)$/;
        var ptorRE=/^(פטור עם ניקוד)\s+\*?\s*(\d+\.\d)\s+(.+)\s+(\d+)$/;  
        var zikuyimRE=/זיכויים/;
      
        var input = dojo.byId("mainIn").value.split("\n");
        if(input.length == 0) return;
        for (var i=0; i<input.length; i++) {
            var line=input[i];
            if (i > 0) {
              prev_line = input[i-1];
            }
            if (semesterRE.test(line) && !zikuyimRE.test(prev_line)) {
                if ((sem != undefined) && (count==0)) {dojo.destroy(sem);}
                sem=addSemester(); 
                continue;
            }
            last_zik = false;
            if ((sem != undefined) && (courseRE.test(line))) {
                var data = courseRE.exec(line);
                addCourse(sem, data[4], data[2], data[3], data[1]);
                count++;
                continue;
            }
            if ((ptorRE.test(line)) || (courseRE.test(line))) {
                var ptorim=dojo.byId("ptorim");
                if (!(ptorim)) {
                      if (sem) {
                          dojo.destroy(sem);
                          sem=undefined;
                      }
                      ptorim = dojo.create("li", {class:"semester", id:"ptorim"}, semesters, "last");
                      var title = dojo.create("ul", {class:"semesterTitle"}, ptorim, "last");
                      dojo.create("li", { innerHTML: "-", class:"hide"}, title);		
                      dojo.create("li", { innerHTML: "זיכויים"}, title);	
                      var title = dojo.create("ul", {class:"semesterTitle"}, ptorim, "last");
                      dojo.create("li", { innerHTML: "מס' קורס"}, title);
                      dojo.create("li", { innerHTML: "שם הקורס"}, title);
                      dojo.create("li", { innerHTML: "נק'"}, title);
                      dojo.create("li", { innerHTML: "ציון" }, title);	
                }
                if (ptorRE.test(line)) {
                  var data = ptorRE.exec(line);
                  addCourse(ptorim, data[4], data[2], data[3], "עבר");
                } else {
                  var data = courseRE.exec(line);
                  addCourse(ptorim, data[4], data[2], data[3], data[1]);
                }
                count++;
                continue;
            }
        }


        if (count) {
            new dijit.layout.ContentPane({title:"אפשרויות", content:"\t<span style=\"width:100%; align:right; text-align:right; direction:RTL;\"><input type=\"checkbox\" id=\"cleanSheet\" onclick=\"cleanSheet();\" \/> \u05D2\u05DC\u05D9\u05D5\u05DF \u05E6\u05D9\u05D5\u05E0\u05D9\u05DD \u05E0\u05E7\u05D9<\/span>\r\n\t<p><!--input  type=\"button\" value=\"\u05D4\u05D3\u05E4\u05E1\u05D4 (alpha)\" onclick=\"printContent(\\\'semesters\\\',\\ \\\'CM\\\');\" \/--><\/p>\r\n\t<p><\/p>\r\n\t<p>\r\n\t\u05D1\u05EA\u05D5\u05D0\u05E8 \u05E9\u05DC\u05D9 \u05D9\u05E9 \u05D1\u05E1\u05DA \u05D4\u05DB\u05DC <input id=\"TotalPoint\" value=\"120\" size=\"4\" onChange=\"sumTotal()\" \/> \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA. <br>\r\n\t\u05D0\u05DD \u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DE\u05DE\u05D5\u05E6\u05E2 <input onChange=\"sumTotal()\" size=\"3\" id=\"want\" value=\"85\"\/>. \u05DE\u05E2\u05DB\u05E9\u05D9\u05D5 \u05E6\u05E8\u05D9\u05DA \u05DC\u05E9\u05DE\u05D5\u05E8 \u05E2\u05DC \u05DE\u05DE\u05D5\u05E6\u05E2 - <span id=\"fromNow\" style=\"font-weight:bold;\"><\/span><br>\r\n\u05DC\u05E2\u05D5\u05DE\u05EA \u05D6\u05D0\u05EA, \u05D0\u05DD \u05DE\u05E2\u05DB\u05E9\u05D9\u05D5 \u05D0\u05E0\u05D9 \u05D0\u05E9\u05DE\u05D5\u05E8 \u05E2\u05DC \u05DE\u05DE\u05D5\u05E6\u05E2 <input onChange=\"sumTotal()\" size=\"3\" id=\"fromNowIn\" value=\"85\"\/>, \u05D1\u05E1\u05D5\u05E3 \u05D4\u05EA\u05D5\u05D0\u05E8 \u05D9\u05D4\u05D9\u05D4 \u05DC\u05D9 \u05DE\u05DE\u05D5\u05E6\u05E2 <span id=\"finalWish\" style=\"font-weight:bold;\"><\/span>\r\n<\/p>", id:"options"}).placeAt("bottomLeftOptions").startup();        
            new dijit.layout.ContentPane({title:"גרפים", content:"<span id=\"chartHide\" style=\"position: absolute; left:16px; z-index:11; top:14px; font-weight:bold; display:none;\"><a href=\"javascript:hideGraph()\">\u05D2\u05E8\u05E3 \u05D0\u05D7\u05E8<\/a><\/span>\r\n<span id=\"chartTitle\" style=\"position: absolute; left:auto; right:auto; z-index:10; top:12px; font-size:16px; width:100%; text-align:center; font-weight:bold; display:none;\">\u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05D0\u05E7\u05D3\u05DE\u05D9\u05D5\u05EA \u05DC\u05E4\u05D9 \u05E4\u05E7\u05D5\u05DC\u05D8\u05D4<\/span>\r\n  <div style=\"width:100%; height:100%; direction:ltr; display:none;\" id=\"chartMain\"><\/div>\r\n  \r\n<div style=\"text-align:center; \" id=\"chratMenu\">\r\n  <div style=\"margin:15px; width:130px; display:inline-block;\"><!--a href=\"javascript:void(0)\" onClick=\"showGraph(PlotPointsPerFaculty);\">\u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05D0\u05E7\u05D3\u05DE\u05D9\u05D5\u05EA \u05DC\u05E4\u05D9 \u05E4\u05E7\u05D5\u05DC\u05D8\u05D4<br \/><img src=\"graph2.jpeg\"><\/a--><\/div>\r\n  <div style=\"margin:15px; width:130px; display:inline-block;\"><!-- a href=\"javascript:void(0)\" onClick=\"showGraph(PlotAverageToPoints);\">\u05DE\u05DE\u05D5\u05E6\u05E2 \u05E1\u05DE\u05E1\u05D8\u05E8\u05D9\u05D0\u05DC\u05D9 \u05DC\u05E4\u05D9 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05E7\'<br \/><img src=\"graph1.jpeg\"><\/a--><\/div>\r\n<\/div>\r\n", id:"charts"}).placeAt("bottomLeftGraphs").startup();;
            createSum();
            sumTotal();
            displayHint();
            //var dndCL = new dojo.dnd.Source(dojo.byId("CourseList"), {copyOnly:true});
            document.getElementById("mamilama").style.display="none";
        }
        else dojo.byId("inputDiv").style.display="block";
        
    }
    catch(err) { }
}


function createSum() {
    var div=dojo.doc.createElement('div');
    div.innerHTML=/* Totals */'<span style="display:table; margin: 0 auto;" class="totals"><ul class="TotalTitle"><li>ממוצע כללי</li><li>סה"כ נקודות</li></ul><ul class="Total"><li id="TotalAvarage">1</li><li id="TotalPoints">1</li></ul></span>';
    content.appendChild(div);
    //dijit.byId("content").domNode.appendChild(div);
    new dijit.layout.ContentPane({region:'top', id: 'topLeft'}, div).placeAt("contentPanel").startup();;
    //dijit.byId("content").addChild(Panel);
}


function cleanSheet() {
    var cb_clean=dojo.byId("cleanSheet");
    if (! cb_clean) {return 0;}
    var CourseByNum = new Object();
    var courses=dojo.query("ul.course");
    var team_count=0;
    for (var i=courses.length-1; i>=0; i--) {
	var data = parseCourse(dojo.query("li",courses[i]));
	if (Math.floor(data.number/10000) == 39) {
	    data.number=data.number+"-"+team_count;
	    team_count++;
	}
	if ((cb_clean.checked) && (CourseByNum[data.number])) {
	    courses[i].style.display="none";
	}
	else {
	    courses[i].style.display="table-row";
	    CourseByNum[data.number]=data;
	}
    }
}

function twoDigits(num) {
    var str = new String(" " + num);
    if (str.length > 7) {
	return str.substr(1,2);
    }
    return Math.floor((num)/10000);
}

function sumTotal() {
    var avarage=dojo.byId("TotalAvarage");
    if (!(avarage)) return;
    var CourseByNum = new Object();
    var total=dojo.byId("TotalPoints");	
    var points=0; var grades=0; var binary=0; var fail=0;
    var courses=dojo.query("ul.course");
    var team_count=0;
    for (var i=0; i<courses.length; i++) {
        var data = parseCourse(dojo.query("li",courses[i]));
        
        if (Math.floor(data.number/10000) == 39) {
            data.number=data.number+"-"+team_count;
            team_count++;
        }
        CourseByNum[data.number]=data;
    }
  
    BinaryPerFaculty = new Object();
    GradesPerFaculty = new Object();
    PointsPerFaculty = new Object();
    for (var i in CourseByNum) {
        var course = CourseByNum[i];
	if (!PointsPerFaculty[twoDigits(course.number)]) {
	  PointsPerFaculty[twoDigits(course.number)]=0;
	  BinaryPerFaculty[twoDigits(course.number)]=0;
	  GradesPerFaculty[twoDigits(course.number)]=0;
	}
	PointsPerFaculty[twoDigits(course.number)]+=  course.points;
        if (course.grade==BINARY) {
	    BinaryPerFaculty[twoDigits(course.number)]+=  course.points;
            binary+=course.points;
        }
        else {
	    GradesPerFaculty[twoDigits(course.number)] += course.grade*course.points;
            grades+=course.grade*course.points;
            points+=course.points;
            if (course.grade*1<55) {
		fail+=course.points;
            }
        }
    }
 
    cleanSheet();

   avarage.innerHTML=roundBy(grades/points,2);
   total.innerHTML=points-fail+binary;	

    var Want = dojo.byId("want").value;
    var TPoints = dojo.byId("TotalPoint").value;
    if (TPoints*1 < total.innerHTML*1) {
      TPoints = total.innerHTML;
      dojo.byId("TotalPoint").value = TPoints;
    }
    var T=(Want*(TPoints - binary) - grades)/(TPoints-binary-points);
    dojo.byId("fromNow").innerHTML=roundBy(T,2);
    var fromN = dojo.byId("fromNowIn").value;
    dojo.byId("finalWish").innerHTML= roundBy((grades+fromN*(TPoints-binary-points))/(TPoints-binary),2);
   
  
  
    dojo.style(avarage, "opacity", "0");
    dojo.fadeIn({node:avarage, duration:1000}).play();
    dojo.style(total, "opacity", "0");
    dojo.fadeIn({node:total, duration:1000}).play();
    
    makeCharts();
}


function displayHint() {
    var hint=dojo.byId("hint");
    dojo.style(hint, "opacity", "0");
    dojo.style(hint, "display", "block");
    hint.innerHTML="כדי לשנות ציון בקורס - ללחוץ על הציון";
    hint.innerHTML+="<p>";
    hint.innerHTML+="אפשרויות נוספות - משמאל למטה";
    hint.innerHTML+="</p>";    
    dojo.fadeIn({node:hint, duration:1000}).play(1000);  
    dojo.animateProperty({node:hint, properties: {height: 0, padding: {start:12, end:0, units:"px"}, opacity:{start:1, end:0}, duration:1000}}).play(10000);
    /*var op=dijit.byId("options");
    dijit.byId("bottomLeft").selectChild(op);*/
}


function hideCL() {
    var clFrame=dojo.byId("courseListFrame");
    dojo.style(clFrame, "top", "120%");
    dojo.fadeOut({node:clFrame, duration:10}).play();
}

function showCL() {
    var clFrame=dojo.byId("courseListFrame");
    dojo.style(clFrame, "top", "30px");
    dojo.fadeIn({node:clFrame, duration:1000}).play();
}


function makeCharts() {
   
    if (PlotFunction != 0) {
      PlotFunction();
    }
}

var PlotPointsPerFaculty = function() {
    dojo.byId('chartTitle').innerHTML="נקודות אקדמיות לפי פקולטה";
    if (dijit.byId("bottomLeft").selectedChildWidget != dijit.byId("charts")) {return 0;}
    if (! chart) {
	chart = new dojox.charting.Chart2D("chartMain");
    }
    chart.addPlot("default", {
	type: "Pie", labelOffset: -30, font: "normal normal 9pt Tahoma", fontColor: "black"
    });
    var Cdata = new Array();
    for (var i in PointsPerFaculty) {
	var avg = "בינארי";
	if (PointsPerFaculty[i] > BinaryPerFaculty[i]) {
	  avg = roundBy( GradesPerFaculty[i] / (PointsPerFaculty[i] - BinaryPerFaculty[i])  ,2);
	}
	Cdata.push({y:PointsPerFaculty[i], text: FacultyNames[i], tooltip: "" + PointsPerFaculty[i] + " נק'" + "<br \>" + "ממוצע - " + avg});
    }
   chart.addSeries("Series 1", Cdata);
    chart.setTheme(dojox.charting.themes.PlotKit.green);
    var chrtAnim = new dojox.charting.action2d.Tooltip(chart, "default");
    var chrtAnim = new dojox.charting.action2d.MoveSlice(chart, "default");
    chart.render();
}

var PlotAverageToPoints = function() {
    dojo.byId('chartTitle').innerHTML="ממוצע סמסטריאלי לפי מספר נק'";
    if (dijit.byId("bottomLeft").selectedChildWidget != dijit.byId("charts")) {return 0;}
    if (! chart) {
	chart = new dojox.charting.Chart2D("chartMain");
    }
    chart.addPlot("default", {type: "Bubble", shadows: {dx: 2, dy: 2, dw: 2}});
    var Cdata = new Array();
    var minGrade=100, maxGrade=0, minPoints=29, maxPoints=0;    
    for (var i=1; i<semesterCount; i++) {
	if ((semesterData[i].grades == 0) || (semesterData[i].points == 0)) {break;}
	//alert(semesterData[i].points);
	minGrade = Math.min(minGrade, semesterData[i].grades);
	maxGrade = Math.max(maxGrade, semesterData[i].grades);
	minPoints = Math.min(minPoints, semesterData[i].points);
	maxPoints = Math.max(maxPoints, semesterData[i].points);	
	Cdata.push({y:semesterData[i].grades, x:semesterData[i].points, size:0.2, tooltip: "סמסטר "+i});
    }
   chart.addSeries("Series 1", Cdata);
    chart.addAxis("x", {
      majorTickStep: 0.5, min:(minPoints-1), max:(maxPoints+1)
    });
    chart.addAxis("y", {
      majorTickStep: 0.5, minorTicks: true, minorLabels: false, minorTickStep: 0.1, vertical: true, leftBottom: false, min:(minGrade-1), max:(maxGrade+1)
    });   
   chart.setTheme(dojox.charting.themes.Adobebricks);
   var chrtAnim = new dojox.charting.action2d.Tooltip(chart, "default");   
   var chrtAnim2 = new dojox.charting.action2d.Magnify(chart, "default", {scale: 1.5});   
   chart.render();
}


function showGraph(func) {
    dojo.byId('chratMenu').style.display='none';
    dojo.byId('chartHide').style.display='block';
    dojo.byId('chartTitle').style.display='block';
    dojo.byId('chartMain').style.display='block';
    PlotFunction=func;
    makeCharts();
}

function hideGraph() {
    dojo.byId('chratMenu').style.display='block';
    dojo.byId('chartHide').style.display='none';
    dojo.byId('chartTitle').style.display='none';
    dojo.byId('chartMain').style.display='none';
    PlotFunction=0;    
}

dojo.addOnLoad(function(){
    hideCL();
 
    dojo.byId("loading").style.display="none";
    dojo.byId("mainIn").focus();
});
