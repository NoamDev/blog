---
title: תורת הקבוצות - יחסי שקילות
layout: post
categories:
  - תורת הקבוצות
tags:
  - תורת הקבוצות
  - יחסים
  - יחסי שקילות
---

<a href="https://gadial.net/2019/10/21/intro_to_relations/">בפוסט הקודם</a> על תורת הקבוצות הצגתי את המושג של <strong>יחס</strong>. פורמלית, יחס מקבוצה {% equation %}A{% endequation %} לקבוצה {% equation %}B{% endequation %} היה תת-קבוצה של זוגות : {% equation %}R\subseteq A\times B{% endequation %}. בפוסט הזה ובבא אחריו אני רוצה לדבר ספציפית על המקרה שבו {% equation %}A=B{% endequation %} (ואז אומרים שהיחס {% equation %}R{% endequation %} הוא "מעל {% equation %}A{% endequation %}") ולדבר על שני סוגים מועילים במיוחד של יחסים - <strong>יחסי שקילות</strong> ו<strong>יחסי סדר</strong>. האינטואיציה מאחוריהם היא פשוטה יחסית - יחס שקילות הוא הכללה של שוויון, שאפשר לתאר בתור "שוויון עד כדי פרטים שלא רלוונטיים לנו", ואילו יחס סדר הוא הכללה של ה"גדול-שווה" שאנחנו מכירים ממספרים.

הפעם נדבר על יחסי שקילות, ולשם כך בואו נתחיל מלהבין מה התכונות של שוויון. ראשית, יש את מה שנקרא בפילוסופיה "חוק הזהות". בניסוח שלנו הוא בסך הכל אומר ש-{% equation %}a=a{% endequation %} לכל איבר {% equation %}a{% endequation %}. שנית, יש לנו את אחת מטענות הבסיס של אוקלידס - "דברים השווים לאותו דבר שווים זה לזה", שאפשר לנסח כך: אם {% equation %}a=b{% endequation %} וגם {% equation %}b=c{% endequation %} אז {% equation %}a=c{% endequation %}. פרט לכך, לשוויון לא אכפת מהסדר שבו כותבים דברים: אם {% equation %}a=b{% endequation %} אז אפשר לכתוב גם {% equation %}b=a{% endequation %}. באופן מעניין למדי, שלוש התכונות הללו הן הדברים המהותיים שנזדקק להם כדי לקבל דברים מעניינים נוספים <strong>שאינם</strong> שוויון.

בואו נגדיר את זה פורמלית, עבור יחס {% equation %}R\subseteq A\times A{% endequation %} כללי:

<ol> <li>{% equation %}R{% endequation %} הוא <strong>רפלקסיבי</strong> אם לכל {% equation %}a\in A{% endequation %} מתקיים {% equation %}\left(a,a\right)\in R{% endequation %}.</li>


<li>{% equation %}R{% endequation %} הוא <strong>סימטרי</strong> אם {% equation %}\left(a,b\right)\in R{% endequation %} גורר {% equation %}\left(b,a\right)\in R{% endequation %}.</li>


<li>{% equation %}R{% endequation %} הוא <strong>טרנזיטיבי</strong> אם {% equation %}\left(a,b\right)\in R{% endequation %} וגם {% equation %}\left(b,c\right)\in R{% endequation %} גורר {% equation %}\left(a,c\right)\in R{% endequation %}.</li>

</ol>

יחס שהוא בו זמנית רפלקסיבי, סימטרי וטרנזיטיבי נקרא <strong>יחס שקילות</strong> מעל {% equation %}A{% endequation %}.

מתבקשת כאן דוגמא. אני אתן אחת שאינה פשוטה במיוחד, אבל היא חשובה מאוד בפני עצמה - אחד מיחסי השקילות המועילים ביותר במתמטיקה. אגדיר אותו על {% equation %}\mathbb{N}{% endequation %} למרות שאפשר גם על {% equation %}\mathbb{Z}{% endequation %}. נתחיל עם מקרה פרטי פשוט: אנחנו יודעים שאפשר לחלק את {% equation %}\mathbb{N}{% endequation %} ל<strong>זוגיים</strong> ו<strong>אי-זוגיים</strong>. מספר זוגי הוא מספר שמתחלק ב-2; מספר אי זוגי הוא מספר שאינו מתחלק ב-2. יחס השקילות שלי ניתן כעת לתיאור בתור "ל-{% equation %}a{% endequation %} ו-{% equation %}b{% endequation %} אותה זוגיות" (כלומר - או שהם שניהם זוגיים, או שהם שניהם אי זוגיים).

הנה מקרה קצת יותר מתוחכם - חלוקה ב-3. כמקודם, אני יכול לפרק לשתי קבוצות של "מתחלקים ב-3" ו"לא מתחלקים ב-3", אבל משתלם לי הרבה יותר לחלק ל-3 קבוצות, על פי <strong>השארית בחלוקה ב-</strong><strong>3</strong> של המספר. הנה דוגמאות: אם נחלק את 13 ב-3, התוצאה תהיה מנה 4 ושארית 1, כלומר {% equation %}4\times3+1=13{% endequation %}. אם נחלק את 15 ב-3 נקבל מנה 5 ושארית 0. אם נחלק את {% equation %}11{% endequation %} ב-3 נקבל שארית 2. שימו לב שהשאריות הן מספרים בין 0 ל-2; שארית גדולה או שווה ל-3 לא ייתכן, כי במקרה כזה אפשר "לגנוב" מהשארית כדי להגדיל עוד קצת את המנה (כלומר- במקום לומר ש-13 זה {% equation %}3\times3+4{% endequation %} אנחנו לוקחים עוד 3 מהשארית ומגדילים את המנה ל-4). את יחס השקילות הזה אני אכנה <strong>שקילות מודולו </strong><strong>3</strong>.

אני יכול כעת לנסח את יחס השקילות שלי בתור {% equation %}\left(a,b\right)\in R{% endequation %} אם ורק אם ל-{% equation %}a{% endequation %} ו-{% equation %}b{% endequation %} אותה שארית בחלוקה ל-3. אבל זה ניסוח קצת מילולי ומסורבל. הנה משהו פשוט יותר. בפוסט הקודם הגדרתי את יחס ה<strong>חלוקה</strong> שעוד נפגוש שוב גם בפוסט הזה. סימנתי אותו {% equation %}a|b{% endequation %}. המשמעות שלו היא זו: קיים {% equation %}d\in\mathbb{Z}{% endequation %} (שימו לב שכאן אני מרשה ל-{% equation %}d{% endequation %} להיות שלילי) כך ש-{% equation %}ad=b{% endequation %}. כעת, בעזרת יחס החלוקה אני יכול להגדיר את היחס החדש שלי: אסמן {% equation %}a\equiv_{3}b{% endequation %} אם ורק אם {% equation %}3|a-b{% endequation %}. למשל, {% equation %}5\equiv_{3}11{% endequation %} כי {% equation %}5-11=-6{% endequation %} ולכן {% equation %}d=-2{% endequation %} יעשה את העבודה.

יחסית פשוט לראות ש-{% equation %}3|a-b{% endequation %} באמת רק אם השארית ש-{% equation %}a,b{% endequation %} משאירים בחלוקה ב-3 היא זהה. כי אפשר לכתוב {% equation %}a=3q_{a}+r_{a}{% endequation %} ו-{% equation %}b=3q_{b}+r_{b}{% endequation %} ואז {% equation %}a-b=3\left(q_{a}-q_{b}\right)+\left(r_{a}-r_{b}\right){% endequation %}. מכיוון ש-3 מחלק את {% equation %}3\left(q_{a}-q_{b}\right){% endequation %} הוא יצטרך לחלק גם את {% equation %}\left(r_{a}-r_{b}\right){% endequation %} וקל לבדוק את כל המקרים (כי כל שארית היא או 0 או 1 או 2) ולראות שרק אם {% equation %}r_{a}=r_{b}{% endequation %} זה אפשרי.

אני רוצה להוכיח ש-{% equation %}\equiv_{3}{% endequation %} הוא יחס שקילות. רפלקסיביות היא מיידית: לכל {% equation %}a{% endequation %} טבעי, {% equation %}a-a=0{% endequation %} וכמובן שזה מתחלק ב-3. גם סימטריה היא ברורה: אם {% equation %}3|a-b{% endequation %}, כלומר קיים {% equation %}d{% endequation %} שלם כך ש-{% equation %}3d=a-b{% endequation %}, אז {% equation %}b-a=3\left(-d\right){% endequation %}. שימו לב שכאן בא לידי ביטוי הצורך שלי ש-{% equation %}d{% endequation %} יהיה שלם ולא סתם טבעי.

טרנזיטיביות היא טיפה יותר מעניינת. אם {% equation %}a\equiv_{3}b{% endequation %} אז {% equation %}a-b=3d_{1}{% endequation %}. אם בנוסף {% equation %}b\equiv_{3}c{% endequation %} אז {% equation %}a-c=3d_{2}{% endequation %}. עכשיו נחבר את שתי המשוואות הללו ונקבל 

{% equation %}a-c=\left(a-b\right)+\left(b-c\right)=3d_{1}+3d_{2}=3\left(d_{1}+d_{2}\right){% endequation %}

וזה מסיים את ההוכחה ואנחנו רואים ש-{% equation %}\equiv_{3}{% endequation %} הוא יחס שקילות.

תכף נחזור לדבר על {% equation %}\equiv_{3}{% endequation %} ספציפית, אבל בואו ננצל את ההזדמנות לראות כמה אפשר להכליל את ההוכחה הזו. ראשית, אין שום קסם במספר 3: לכל {% equation %}n{% endequation %} טבעי ההוכחה ש-{% equation %}\equiv_{n}{% endequation %} הוא יחס שקילות תעבוד באותו אופן בדיוק. שנית, שימו לב באילו תכונות של מספרים שלמים השתמשנו כאן: עבור הרפלקסיביות השתמשנו בכך ש-0 הוא מספר שלם ("קיום איבר אדיש לחיבור"); עבור הסימטריה בכך שאם {% equation %}d{% endequation %} שלם גם {% equation %}-d{% endequation %} שלם ("סגירות לנגדי"); ועבור טרנזיטיביות השתמשנו בכך שאם {% equation %}d_{1},d_{2}{% endequation %} שלמים כך גם {% equation %}d_{1}+d_{2}{% endequation %} ("סגירות לחיבור"). התכונות הללו ניתנות להכללה באופן טבעי במסגרת של <strong>תורת החבורות</strong> וזה מוליד את המושג החשוב של <strong>חבורות מנה</strong> <a href="https://gadial.net/2017/02/08/cosets_and_quotient_groups/">שכבר דיברתי עליו בבלוג</a>; לא אכנס אליו כאן.

עכשיו, בואו נעשה עבור {% equation %}\equiv_{3}{% endequation %} את הדבר הבא: ניקח את 0 ונכתוב את כל מי ששקול ל-0 ביחס הזה. מכיוון ש-0 מתחלק ב-3 ללא שארית, מי ששקולים לו הם בדיוק המספרים שמתחלקים ב-3, כלומר נקבל

{% equation %}\left\{ 0,3,6,9,\dots\right\} {% endequation %}

עכשיו עבור 1. מהדוגמא של 0 אולי כבר קיבלתם את התחושה לפיה כדי לקבל את מי ששקול ל-1 כדאי להוסיף 3 כל הזמן. נקבל:

{% equation %}\left\{ 1,4,7,10,\dots\right\} {% endequation %}

ועבור 2 נקבל

{% equation %}\left\{ 2,5,8,11\dots\right\} {% endequation %}

האם יש עוד קבוצות? ובכן, לא! כל מספר יהיה שקול לאחד משלושת אלו. מדוע? פשוט מאוד. אם {% equation %}a{% endequation %} הוא מספר כלשהו, אז אפשר לחלק אותו ב-3 ולקבל שארית {% equation %}r{% endequation %} - כלומר, {% equation %}a=3q+r{% endequation %} כאשר {% equation %}r\in\left\{ 0,1,2\right\} {% endequation %}. כעת, {% equation %}a-r=3q{% endequation %} ולכן {% equation %}a\equiv_{3}r{% endequation %} - בעצם חזרתי פה על הנימוק הפורמלי לגבי "מחזירים את אותה שארית בחלוקה ב-3". אם כן, מה שקיבלנו הוא <strong>חלוקה</strong> של המספרים הטבעיים לאוסף של תת-קבוצות זרות (בלי איברים משותפים) ומשלימות (האיחוד שלהם הוא כל הטבעיים).

זו סיטואציה כל כך נפוצה וחשובה כשיש לנו יחסי שקילות, שנותנים לה שם. לכל קבוצה כזו של "כל האיברים ששקולים למישהו" קוראים <strong>מחלקת שקילות</strong> של יחס השקילות. לאוסף של <strong>כל</strong> מחלקות השקילות קוראים <strong>קבוצת המנה</strong> של יחס השקילות. בואו נמצא דרך נוחה לסמן את זה. אם יש לי יחס שקילות {% equation %}R{% endequation %} מעל {% equation %}A{% endequation %} ו-{% equation %}a\in A{% endequation %} הוא איבר של {% equation %}A{% endequation %}, אני מסמן בתור {% equation %}\left[a\right]_{R}{% endequation %} את מחלקת השקילות של {% equation %}a{% endequation %}, כלומר את

{% equation %}\left[a\right]_{R}\triangleq\left\{ b\in A\ |\ \left(a,b\right)\in R\right\} {% endequation %}

על פי רוב אני פשוט אכתוב {% equation %}\left[a\right]{% endequation %} כשהיחס ברור מההקשר. בדוגמא של {% equation %}\equiv_{3}{% endequation %}:

{% equation %}\left[0\right]=\left\{ 0,3,6,9,\dots\right\} {% endequation %}

{% equation %}\left[1\right]=\left\{ 1,4,7,10,\dots\right\} {% endequation %}

{% equation %}\left[2\right]=\left\{ 2,5,8,11\dots\right\} {% endequation %}

שימו לב שבאותה מידה גם {% equation %}\left[8\right]=\left\{ 2,5,8,11\dots\right\} {% endequation %}, למשל. <strong>כל</strong> איבר ששייך למחלקת השקילות יכול לתאר אותה ככה. אם אני כותב מחלקת שקילות בתור {% equation %}\left[a\right]{% endequation %}, אני אומר ש-{% equation %}a{% endequation %} הוא <strong>נציג</strong> של המחלקה.

עכשיו קל לתאר את קבוצת המנה. אם {% equation %}A{% endequation %} היא קבוצה ו-{% equation %}R{% endequation %} יחס שקילות מעליה, אז קבוצת המנה היא

{% equation %}A/R\triangleq\left\{ \left[a\right]_{R}\ |\ a\in A\right\} {% endequation %}

שימו לב שזו דוגמא לשימוש בכך שבכתיבת קבוצה אפשר לכתוב את אותו איבר כמה פעמים שונות וזה נספר רק פעם אחת. כי למשל, כשאני משתמש בכתיב הזה כדי לתאר את קבוצת המנה של שקילות מודולו 3 אני מקבל

{% equation %}\mathbb{N}/\equiv_{3}=\left\{ \left[0\right],\left[1\right],\left[2\right],\left[3\right],\left[4\right],\left[5\right],\dots\right\} =\left\{ \left[0\right],\left[1\right],\left[2\right]\right\} {% endequation %}

כלומר, קבוצת המנה אולי נראית אינסופית במבט ראשון, אבל היא בעצם קבוצה סופית של שלושה איברים (זה לא תמיד ככה; קבוצות מנה בהחלט יכולות להיות גם אינסופיות).

נקודה אחרונה לפני שנעבור לשימוש של זה: אני עדיין רוצה להשתכנע שהדבר הזה קיים בכלל. אחרי האסון של הפרדוקס של ראסל, כל בניה של קבוצה חדשה היא משהו שאני מנסה לראות איך הוא נובע ישירות מהאקסיומות של תורת הקבוצות. יחסי שקילות בוודאי קיימים במובן זה שראינו שיחסים באופן כללי קיימים: כלומר, אם {% equation %}A{% endequation %} קיימת גם {% equation %}A\times A{% endequation %} קיימת ולכן גם תת-קבוצות של {% equation %}A\times A{% endequation %} שאני יכול לתאר עם קריטריון ברור קיימות. בנוסף, אם {% equation %}a\in A{% endequation %} הוא איבר אז הקבוצה {% equation %}\left[a\right]_{R}{% endequation %} היא תת-קבוצה של {% equation %}A{% endequation %} שמוגדרת עם קריטריון ברור ולכן גם היא קיימת. אבל מה עם קבוצת המנה, {% equation %}A/R{% endequation %}? ובכן, גם זה קל: {% equation %}A/R{% endequation %} היא אוסף של תת-קבוצות של {% equation %}A{% endequation %}, ולכן היא בעצמה תת-קבוצה של קבוצת החזקה {% equation %}\mathcal{P}\left(A\right){% endequation %}. כלומר, <strong>אקסיומת קבוצת החזקה</strong> עושה את העבודה במקרה הזה.

בואו ניקח את כל זה ונשתמש בו כדי לבנות את המספרים הרציונליים, {% equation %}\mathbb{Q}{% endequation %}. ואני מזהיר שהבניה הזו לוקה בחסר מסויים - אני לא אגדיר את פעולות החשבון על {% equation %}\mathbb{Q}{% endequation %} אלא רק את האיברים עצמם. <a href="https://gadial.net/2018/01/30/rings_of_fractions/">יש לי כבר פוסט</a> שמטפל גם בהיבטים הללו של הבניה בתוך הקשר כללי יותר.

ובכן, בפוסט הקודם אמרתי שאפשר "להגדיר" את הרציונליים כך בצורה שלא עובדת: {% equation %}\mathbb{Q}\triangleq\left\{ \frac{a}{b}\ |\ a,b\in\mathbb{Z},b\ne0\right\} {% endequation %}. הצורה הזו לא עובדת כי הביטוי {% equation %}\frac{a}{b}{% endequation %} לא באמת מוגדר - זה לא אובייקט שקיים בעולם המתמטי שאנחנו מכירים, ויש בו הנחות מובלעות כמו זו ש-{% equation %}\frac{1}{2}=\frac{2}{4}{% endequation %}. אז הנה משהו פורמלי יותר. אני אגדיר את הקבוצה {% equation %}A=\left\{ \left(a,b\right)\ |\ a,b\in\mathbb{Z},b\ne0\right\} {% endequation %} של זוגות סדורים (היא בוודאי קיימת; זו תת קבוצה של {% equation %}\mathbb{Z}\times\mathbb{Z}{% endequation %}). על הקבוצה הזו אגדיר יחס שקילות שיזהה דברים כמו {% equation %}\frac{1}{2}=\frac{2}{4}{% endequation %}. 

לשם כך, בואו נשאל את עצמנו שאלה - באופן כללי, מתי {% equation %}\frac{a}{b}=\frac{c}{d}{% endequation %}? החשבון שלומדים בבית הספר היסודי אומר לנו שאפשר לכפול את שני האגפים ב-{% equation %}bd{% endequation %} ולקבל {% equation %}ad=bc{% endequation %}, אז זה יהיה יחס השקילות שלי: {% equation %}R=\left\{ \left(\left(a,b\right),\left(c,d\right)\right)\ |\ ad=bc\right\} {% endequation %} (שימו לב - זה יחס שקילות על הקבוצה {% equation %}A{% endequation %} שהיא <strong>מראש </strong>קבוצה של זוגות; כלומר, {% equation %}R{% endequation %} הוא אוסף זוגות של זוגות). צריך כמובן להשתכנע בכך ש-{% equation %}R{% endequation %} הוא יחס שקילות. הוא רפלקסיבי כי {% equation %}ab=ba{% endequation %} ולכן {% equation %}\left(\left(a,b\right),\left(a,b\right)\right)\in R{% endequation %}. הוא סימטרי כי אם {% equation %}ad=bc{% endequation %} אז גם {% equation %}cb=da{% endequation %}, והוא טרנזיטיבי כי... כי... טוב, אולי כדאי שאקח עוד פסקה בשביל זה ונעבוד במסודר.

אם {% equation %}\left(a,b\right){% endequation %} שקול ל-{% equation %}\left(c,d\right){% endequation %} אז {% equation %}ad=bc{% endequation %}.

אם {% equation %}\left(c,d\right){% endequation %} שקול ל-{% equation %}\left(x,y\right){% endequation %} אז {% equation %}cy=dx{% endequation %}.

אנחנו רוצים לראות ש-{% equation %}ay=bx{% endequation %}. אז בואו ננסה "לחשב" את זה. מכיוון ש-{% equation %}d\ne0{% endequation %} אפשר לחלק בו ולקבל מ-{% equation %}ad=bc{% endequation %} את {% equation %}a=\frac{bc}{d}{% endequation %}. על כן {% equation %}ay=\frac{bcy}{d}{% endequation %} ומכיוון ש-{% equation %}cy=dx{% endequation %} נקבל {% equation %}\frac{bcy}{d}=\frac{bdx}{d}=bx{% endequation %}, כפי שרצינו. זה מסיים גם את הטרנזיטיביות.

עכשיו אפשר להגדיר {% equation %}\mathbb{Q}\triangleq A/R{% endequation %} וסיימנו את בניית הרציונלים! חוץ מאשר הרמאות הבוטה שבה נקטתי פה ובטח חלקכם כבר זועמים עליה. כשהגדרתי את {% equation %}\mathbb{Z}{% endequation %} הייתי כזה "כן כן אני אגדיר רק את הקבוצה עצמה ולא אגדיר עליה פעולות חשבון, את זה עושים באלגברה" אבל הנה, עכשיו בהגדרה של {% equation %}\mathbb{Q}{% endequation %} <strong>השתמשתי</strong> בפעולת חשבון כזו על {% equation %}\mathbb{Z}{% endequation %} - פעולת הכפל. זו, כמובן, הונאה; יש לי עכשיו חור בהגדרה שאצטרך להשלים בהמשך ולהיזהר ששום דבר לא יהיה מעגלי (ספוילר: אני אצליח).

מה השלב הבא? לבנות את הממשיים, {% equation %}\mathbb{R}{% endequation %}, מתוך {% equation %}\mathbb{Q}{% endequation %}. יש שתי דרכים נפוצות לעשות את זה - הדרך של קנטור והדרך של דדקינד. הדרך של קנטור מקסימה ויפהפיה ובעלת הכללות מרחיקות לכת ומתבססת על יחסי שקילות, ואני... לא הולך להיכנס אליה כאן, כי היא גם מצריכה חדו"א, ומצריכה דיבור על <strong>סדרות</strong> שהן מושג שטרם הגדרתי. תחת זאת אדבר על ההגדרה של דדקינד, שמתבססת על קבוצות ועל <strong>יחסי סדר</strong> שהם הנושא שאדבר עליו בפוסט הבא. 