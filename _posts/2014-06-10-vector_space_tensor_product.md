---
id: 3108
title: "מכפלות טנזוריות (של מרחבים וקטוריים)"
date: 2014-06-10 11:37:08
layout: post
categories: 
  - אלגברה לינארית
tags: 
  - מכפלה טנזורית
---
בסדרת הפוסטים שלי על אלגברה לינארית יש נושא אחד שהזנחתי בצד - <strong>מכפלה טנזורית</strong> של מרחבים וקטוריים. לא הזנחתי אותו במקרה, וזה גם לא מקרה שספרי הלימוד הסטנדרטיים באלגברה לינארית לא מתעסקים בו יותר מדי - לרוב אין בו צורך, והוא קצת קשה לעיכול בשל האבסטרקטיות היחסית שלו. הדרך ה"נכונה" עבור מתמטיקאים להתקל במכפלות טנזוריות היא בהקשרים מתקדמים יותר מאשר קורס בסיסי באלגברה לינארית, ואחרי שמבינים את המושג בהקשרים הללו גם אין בעיה להבין אותו בהקשר הספציפי של מרחבים וקטוריים.

אבל, אני הולך להצטרך את המושג הזה בהמשך, ואני רוצה לתת לו מבוא קל עד כמה שאפשר, שלא יצריך מתמטיקה מתקדמת בכלל, ורק ידע בסיסי באלגברה לינארית (מהם מרחבים וקטוריים ואולי גם קצת מהן טרנספורמציות לינאריות). בנוסף, אני רוצה להציג את המושג הזה בצורה שתהיה ידידותית יחסית ולכן לא אגש ישר להגדרות אלא קודם אנסה לתת מוטיבציה. אחר כך אתן הגדרה שהיא מאוד ישירה, ורק בסוף אתן את ההגדרה שמסתכלת על הכל "ממעוף הציפור" והיא כנראה ההגדרה הנכונה ביותר.

מה שמתמטיקאים אוהבים לעשות, בהינתן אובייקטים מתמטיים, הוא לבנות מהם אובייקטים מתמטיים חדשים. בניה נפוצה אחת שניתן לבצע היא זו: אם יש לנו שתי קבוצות {% equation %}A,B{% endequation %} שהן <strong>זרות</strong>, כלומר אין להן איברים משותפים, אנחנו בונים קבוצה חדשה שהיא <strong>האיחוד הזר</strong> שלהן: {% equation %}C=A\cup B=\left\{ x\ |\ x\in A\vee x\in B\right\} {% endequation %}. הקבוצה הזו כוללת את כל האיברים שנמצאים או ב-{% equation %}A{% endequation %} או ב-{% equation %}B{% endequation %}. אם נחשב את הגודל שלה - מספר האיברים שבה - נקבל שהוא {% equation %}\left|A\cup B\right|=\left|A\right|+\left|B\right|{% endequation %}. כלומר, איחוד זר מתקשר לנו אינטואיטיבית ל"חיבור" של קבוצות.

באופן דומה מוגדרת <strong>מכפלה קרטזית</strong> של קבוצות: {% equation %}A\times B=\left\{ \left(a,b\right)\ |\ a\in A,b\in B\right\} {% endequation %} - אוסף כל הזוגות של איברים שהשמאלי מביניהם שייך ל-{% equation %}A{% endequation %} והימני שייך ל-{% equation %}B{% endequation %}. מתקיים ש-{% equation %}\left|A\times B\right|=\left|A\right|\cdot\left|B\right|{% endequation %}, כך שמכפלה קרטזית אכן מתקשרת לנו אינטואיטיבית ל"כפל" של קבוצות.

כעת, רוב הקבוצות במתמטיקה כוללות <strong>מבנה</strong> כלשהו שמגיע עליהן - מבנה של מרחב וקטורי, או חבורה, או מרחב טופולוגי, או אלף ואחד דברים אחרים. ואם אנחנו בונים מתוך שתי קבוצות בעלות מבנה קבוצה חדשה, אנחנו רוצים להגדיר גם עליה את אותו מבנה, באופן ש"נובע" איכשהו מהמבנה על הקבוצות הקיימות. אנחנו מדברים על מרחבים וקטוריים כאן, ולכן אני אתאר איך זה קורה במקרה שלהם.

בואו ניקח שני מרחבים וקטוריים {% equation %}V,W{% endequation %} מעל שדה {% equation %}\mathbb{F}{% endequation %}, עם ממדים {% equation %}n,m{% endequation %} בהתאמה. אוטומטית, לא ייתכן ש-{% equation %}V,W{% endequation %} הן קבוצות זרות כי שתיהן כוללות את איבר האפס של המרחב הוקטורי. אבל הן יכולות להיות "זרות-פרט-לאפס", כלומר {% equation %}V\cap W=\left\{ 0\right\} {% endequation %}. במקרה הזה, אפשר להגדיר את מה שנקרא <strong>סכום ישר</strong> של שני המרחבים: {% equation %}V\oplus W\triangleq\left\{ v+w\ |\ v\in V,w\in W\right\} {% endequation %}. בהגדרה הזו מובלעת הנחה שאנחנו יודעים איך לחבר את האיברים של {% equation %}V{% endequation %} עם האיברים של {% equation %}W{% endequation %}, אז אפשר להניח לצורך פשטות ש-{% equation %}V,W{% endequation %} הם תת-מרחבים של מרחב גדול יותר; אפשר להסתדר גם בלי ההנחה הזו, כפי שנראה תכף.

כעת, בואו ניקח שני <strong>בסיסים</strong> עבור המרחבים הללו: עבור {% equation %}V{% endequation %} נסמן את אברי הבסיס בתור {% equation %}\left\{ e_{1},\dots,e_{n}\right\} {% endequation %}, ואילו עבור {% equation %}W{% endequation %} נסמן את אברי הבסיס בתור {% equation %}\left\{ f_{1},\dots,f_{m}\right\} {% endequation %}. כעת זה תרגיל לא קשה להראות שהקבוצה {% equation %}\left\{ e_{1},\dots,e_{n},f_{1},\dots,f_{m}\right\} {% endequation %} היא בסיס ל-{% equation %}V\oplus W{% endequation %}, ולכן המימד של {% equation %}V\oplus W{% endequation %} שווה ל-{% equation %}n+m{% endequation %}. אם כן, זו האינטואיציה שלנו ל"סכום" של שני מרחבים וקטוריים. שימו לב שויתרנו על האינטואיציה הנאיבית של "שתי הקבוצות יהיו זרות"; שימו לב שגם ויתרנו על האינטואיציה הנאיבית של "המרחב יהיה מורכב בדיוק מאברי האיחוד הזר" (תחת זאת הוא מורכב מסכומים שלהם). עדיין, התוצאה שקיבלנו היא התאמה די טבעית של רעיון ה"סכום" של שתי קבוצות עבור ההקשר של מרחבים וקטוריים.

מכפלה טנזורית של מרחבים וקטוריים זה אותו דבר, רק עבור - לא מפתיע - כפל.

איך נכפול מרחבים וקטוריים? אני יכול לחשוב מיידית על שתי דרכים אינטואיטיביות נורא לעשות את זה. רק מה, כפי שנראה הראשונה היא לא מעניינת, והשניה היא הדרך הנכונה. הראשונה היא פשוט להסתכל על קבוצת כל הזוגות {% equation %}V\times W=\left\{ \left(v,w\right)\ |\ v\in V,w\in W\right\} {% endequation %} ולהגיד "הנה מרחב וקטורי חדש. איבר האפס שלו הוא {% equation %}\left(0,0\right){% endequation %}. חיבור שני וקטורים הוא בצורה הטבעית, {% equation %}\left(a_{1},b_{1}\right)+\left(a_{2},b_{2}\right)\triangleq\left(a_{1}+a_{2},b_{1}+b_{2}\right){% endequation %}. כפל בסקלר הוא בצורה הטבעית, {% equation %}\lambda\left(a,b\right)=\left(\lambda a,\lambda b\right){% endequation %}".

אוקיי, נחמד, למה אני אומר שזה לא מעניין? כי כרגע הגדרתי מחדש את {% equation %}V\oplus W{% endequation %} בתחפושת. הנה לכם איזומורפיזם בין שני המרחבים הללו: טרנספורמציה לינארית {% equation %}T:V\times W\to V\oplus W{% endequation %} שהיא חח"ע ועל: {% equation %}T\left(\left(a,b\right)\right)=a+b{% endequation %}. וואו, זה היה פשוט. אתם מוזמנים להוכיח שזה גם עובד.

אני חושב שדרך נוחה מאוד להבין את העניין היא דרך מרחבים וקטוריים מעל שדה <strong>סופי</strong>. נאמר, {% equation %}\left|\mathbb{F}\right|=3{% endequation %}. במקרה הזה, אנחנו יודעים בדיוק כמה איברים יש ב-{% equation %}V{% endequation %}: לכל איבר ב-{% equation %}V{% endequation %} יש ייצוג יחיד בצורה {% equation %}\sum\lambda_{i}e_{i}{% endequation %} כך ש-{% equation %}\lambda_{i}\in\mathbb{F}{% endequation %}, כלומר יש 3 אפשרויות לערך של {% equation %}\lambda_{i}{% endequation %} לכל {% equation %}1\le i\le n{% endequation %}, ולכן - קומבינטוריקה פשוטה - {% equation %}\left|V\right|=3^{n}{% endequation %}. בדומה, {% equation %}\left|W\right|=3^{m}{% endequation %}. ולכן: {% equation %}\left|V\times W\right|=\left|V\right|\cdot\left|W\right|=3^{n}3^{m}=3^{n+m}{% endequation %}. כבר מהתוצאה המספרית הזו אנו רואים שהמכפלה הקרטזית תניב לנו מרחב וקטורי שהמימד שלו הוא {% equation %}n+m{% endequation %}. אין עם זה שום בעיה עקרונית, כן? הסכום הישר של מרחבים וקטוריים הוא בניה חשובה ומועילה מאוד.

גישת ה"מכפלה" עוזרת לפייס את מי שלא הבין איך אפשר לקחת סכום ישר של מרחבים וקטוריים שאנחנו לא יודעים איך לחבר את האיברים שלהם: התשובה היא שאנחנו לא באמת מחברים אותם אלא מסתכלים על <strong>סכומים פורמליים</strong> של אבריהם. כלומר, אני כותב {% equation %}v+w{% endequation %}, אבל אני לא מתכוון בכך בהכרח לכך שאפשר לבצע פישוט כלשהו שיניב מ-{% equation %}v+w{% endequation %} איבר {% equation %}u{% endequation %} שהוא "שניהם ביחד"; פשוט אין לי בעיה להשאיר את הביטוי הזה בצורת סכום. כולנו מכירים סכומים פורמליים לפחות במקום אחד - פולינומים! נניח, הפולינום {% equation %}5x^{2}+3x+7{% endequation %} מורכב מסכום פורמלי של שלושה ביטויים ואין לאף אחד בעיה עם זה שהוא כולל פלוסים בתוכו. אני מתעכב על הנקודה הזו כי כפי שאתם ודאי מנחשים, אני תכף הולך להשתמש בסכומים פורמליים למטרה נוספת.

מה הדרך האינטואיטיבית השניה להגדיר את המכפלה של שני המרחבים הוקטוריים? ובכן, שוב, טוב לשאוב השראה מסכומים ישרים: שם מה שקרה הוא שהבסיס של הסכום הישר היה האיחוד הזר של <strong>הבסיסים</strong> של המרחבים. אז אצלנו הבסיס של המכפלה יהיה המכפלה של הבסיסים של המרחבים. שימו לב: מה שנקבל אחרי המכפלה לא יהיה כל המרחב; זה יהיה רק <strong>בסיס</strong> למרחב. אם נתון לנו בסיס, מי הם שאר האיברים?

ובכן, אתם לא תאהבו את התשובה הזו, אבל היא פשוטה מאוד: אברי המרחב יהיו פשוט כל הצירופים הלינאריים הפורמליים של אברי הבסיס. הרי זה הרעיון בבסיס - ש<strong>כל</strong> איבר במרחב יהיה ניתן לייצוג <strong>יחיד</strong> כצירוף לינארי של אברי הבסיס.

זה מוביל אותנו להגדרה הפורמלית הבאה של מכפלה טנזורית: {% equation %}V\otimes W\triangleq\mbox{span}\left\{ e_{i}\otimes f_{j}\ |\ 1\le i\le n,1\le j\le m\right\} {% endequation %}. הסימן {% equation %}\otimes{% endequation %} הוא סימן מיוחד שבא להבהיר לנו ש-{% equation %}V\otimes W{% endequation %} היא מכפלה טנזורית ולא כפל רגיל; וכאשר אני כותב {% equation %}e\otimes f{% endequation %} זה ביטוי פורמלי נטו; הייתי יכול לכתוב גם {% equation %}\left(e,f\right){% endequation %} או {% equation %}e\diamondsuit f{% endequation %} או כל סימן אחר שעדיין היה מאפשר לי לדעת מי הם {% equation %}e,f{% endequation %} ש"תורמים" לאיבר הזה. השימוש בסימן {% equation %}\otimes{% endequation %} כאן הוא פשוט מוסכמה.

ההגדרה די פשוטה. אבל יש מרחק בין להבין אותה ובין "להרגיש" מה קורה פה, אז הכרחי לתת דוגמה קונקרטית עם שני מרחבים פשוטים אבל שיהיו שונים זה מזה. אז ניקח {% equation %}V=\mathbb{R}^{2}{% endequation %} ו-{% equation %}W=\mathbb{R}_{3}\left[x\right]{% endequation %}. כלומר, איבר ב-{% equation %}V{% endequation %} הוא זוג מספרים ממשיים {% equation %}\left(a,b\right){% endequation %} ואילו איבר ב-{% equation %}W{% endequation %} הוא פולינום ממעלה לכל היותר 2, {% equation %}p\left(x\right){% endequation %}. בסיס פשוט של {% equation %}V{% endequation %} הוא {% equation %}\left\{ \left(1,0\right),\left(0,1\right)\right\} {% endequation %} ובסיס פשוט של {% equation %}W{% endequation %} הוא {% equation %}\left\{ 1,x,x^{2}\right\} {% endequation %}. המכפלה הטנזורית של שני המרחבים הללו תהיה מרחק ממימד 6 שנפרש על ידי האיברים הבאים:

{% equation %}V\otimes W=\mbox{span}\left\{ \left(1,0\right)\otimes1,\left(1,0\right)\otimes x,\left(1,0\right)\otimes x^{2},\left(0,1\right)\otimes1,\left(0,1\right)\otimes x,\left(0,1\right)\otimes x^{2}\right\} {% endequation %}

כלומר, איבר לדוגמה במכפלה הטנזורית הוא {% equation %}\pi\left(\left(0,1\right)\otimes x^{2}\right)+17\left(\left(1,0\right)\otimes1\right){% endequation %} (כאן המקדם של אחד מאברי הבסיס הוא {% equation %}\pi{% endequation %}, מקדם של איבר בסיס אחר הוא 17 וכל היתר הם 0).

טוב, שמעו, זה נראה נורא.

מייד עולה מאליה השאלה אם לא ניתן להציג לפחות חלק מהאיברים של המכפלה הטנזורית בצורה נחמדה יותר. שוב, כדי לקבל אינטואיציה כללית אני אסתכל קודם כל על דוגמה פשוטה - הפעם נבחר {% equation %}V=W=\mathbb{R}^{2}{% endequation %}. אז אנחנו יודעים ש-{% equation %}V\otimes W{% endequation %} הוא מרחב ממימד 4 מעל {% equation %}\mathbb{R}{% endequation %} ולכן איזומורפי ל-{% equation %}\mathbb{R}^{4}{% endequation %}. כדי לתאר את האיזומורפיזם מספיק לתאר איך אברי הבסיס של {% equation %}V\otimes W{% endequation %} עוברים לאיברים ב-{% equation %}\mathbb{R}^{4}{% endequation %}. אז בואו נגדיר את זה שרירותית:

{% equation %}\left(1,0\right)\otimes\left(1,0\right)\mapsto\left(1,0,0,0\right){% endequation %}

{% equation %}\left(1,0\right)\otimes\left(0,1\right)\mapsto\left(0,0,1,0\right){% endequation %}

{% equation %}\left(0,1\right)\otimes\left(1,0\right)\mapsto\left(0,1,0,0\right){% endequation %}

{% equation %}\left(0,1\right)\otimes\left(0,1\right)\mapsto\left(0,0,0,1\right){% endequation %}

אם תחשבו על זה לרגע, תראו שההגדרה אינה שרירותית אלא יש בה הגיון כלשהו. הנה נוסחה כללית שמתארת את הטרנספורמציה שביצעתי:

{% equation %}\left(a_{1},a_{2}\right)\otimes\left(b_{1},b_{2}\right)\mapsto\left(a_{1}b_{1},a_{2}b_{1},a_{1}b_{2},a_{2}b_{2}\right){% endequation %}

כשאני רואה את הנוסחה הזו, מדגדג לי להציב בתור הוקטורים הכלליים {% equation %}\left(a_{1},a_{2}\right),\left(b_{1},b_{2}\right){% endequation %} גם וקטורים שאינם אברי בסיס ולשאול - מה יקרה? למשל, עבור {% equation %}\left(1,1\right)\otimes\left(1,0\right){% endequation %}, האיבר הזה יעבור אל {% equation %}\left(1,1,0,0\right){% endequation %}, שלא קשה לראות שהוא התמונה של {% equation %}\left(1,0\right)\otimes\left(1,0\right)+\left(0,1\right)\otimes\left(1,0\right){% endequation %}, אז בעצם קיבלתי את המשוואה הבאה:

{% equation %}\left(1,0\right)\otimes\left(1,0\right)+\left(0,1\right)\otimes\left(1,0\right)=\left(1,1\right)\otimes\left(1,0\right){% endequation %}

ואם אני מנסה להכליל אותה, אני אקבל את זוג המשוואות הבא:

{% equation %}e_{1}\otimes f+e_{2}\otimes f=\left(e_{1}+e_{2}\right)\otimes f{% endequation %}

{% equation %}e\otimes f_{1}+e\otimes f_{2}=e\otimes\left(f_{1}+f_{2}\right){% endequation %}

כלומר, אם אני אנסה להכליל את {% equation %}\otimes{% endequation %} למכפלה של שני איברים כללים ב-{% equation %}V,W{% endequation %}, אז רצוי ש-{% equation %}\otimes{% endequation %} יקיים מעין תכונת אדיטיביות (שמזכירה את זו של מכפלה פנימית, למי שמכיר).

ומה בדבר כפל בסקלר? ובכן, {% equation %}2\left(1,0\right)\otimes\left(0,1\right){% endequation %} הולך לעבור אל {% equation %}\left(2,0,0,0\right){% endequation %}, כלומר אל {% equation %}2\left(\left(1,0\right)\otimes\left(0,1\right)\right){% endequation %}, וכך גם {% equation %}\left(1,0\right)\otimes2\left(0,1\right){% endequation %}, מה שמוביל אותנו לחוק הבא:

{% equation %}\lambda\left(e\otimes f\right)=\lambda e\otimes f=e\otimes\lambda f{% endequation %}

מצויידים בשלושת החוקים הללו, קל לנו להגדיר את {% equation %}v\otimes w{% endequation %} בצורה כללית: פשוט נכתוב {% equation %}v=\sum\lambda_{i}e_{i}{% endequation %} ו-{% equation %}w=\sum\rho_{j}f_{j}{% endequation %}, נשתמש בכללי הפישוט שהגדרתי לעיל, ונקבל:

{% equation %}v\otimes w=\left(\sum\lambda_{i}e_{i}\right)\otimes\left(\sum\rho_{j}f_{j}\right)=\sum_{i,j}\lambda_{i}\rho_{j}\left(e_{i}\otimes f_{j}\right){% endequation %}

הכתיב {% equation %}v\otimes w{% endequation %}, אם כן, משמש אותנו סתם בתור סימון מקוצר כאן. בפועל העסק הרבה פחות שרירותי ממה שנדמה לנו כרגע ואראה את זה בסוף הפוסט, אבל בינתיים אני רוצה שנעכל את הקפיצה אל שימוש בסימונים כמו {% equation %}v\otimes w{% endequation %}. יש שתי טעויות מתבקשות שכולנו עושים כשאנחנו רואים את צורת הסימון הזו: ראשית, אנחנו שוכחים שלאותו איבר של המכפלה הטנזורית יכולים להיות <strong>כמה ייצוגים שונים</strong> בדרך הזו. למשל, כפי שראינו לפני רגע, {% equation %}\left(2,0\right)\otimes\left(0,1\right){% endequation %} ו-{% equation %}\left(1,0\right)\otimes\left(0,2\right){% endequation %} הם <strong>שני ייצוגים שונים לאותו איבר בדיוק</strong>. שנית, אנחנו עלולים לחשוב בטעות ש<strong>כל</strong> איבר ב-{% equation %}V\otimes W{% endequation %} הוא איבר מהצורה {% equation %}v\otimes w{% endequation %} עבור {% equation %}v\in V{% endequation %} ו-{% equation %}w\in W{% endequation %}, וזה <strong>ממש לא נכון</strong>. לאיבר שניתן לכתוב בצורה {% equation %}v\otimes w{% endequation %} קוראים לפעמים "טנזור טהור" כדי להבדיל אותו מהאיברים של {% equation %}V\otimes W{% endequation %} שלא ניתנים לכתיבה בצורה הזו, אבל בהחלט יש כאלו. אז איך כותבים אותם? בתור <strong>סכום</strong> של טנזורים טהורים. והאם אני יכול לתת דוגמה ליצור כזה? בטח.

אנחנו עדיין ב-{% equation %}\mathbb{R}^{2}\otimes\mathbb{R}^{2}{% endequation %}. בואו נסתכל על {% equation %}\left(1,0\right)\otimes\left(1,0\right)+\left(0,1\right)\otimes\left(0,1\right){% endequation %}. האם אתם רואים דרך "לפשט" את הביטוי הזה ולהציג אותו בצורה {% equation %}\left(a_{1},a_{2}\right)\otimes\left(b_{1},b_{2}\right){% endequation %}? אני מניח שלא. אבל זה שאתם לא רואים איך לעשות משהו לא אומר שאי אפשר לעשות אותו; צריך להוכיח שאי אפשר. אז בואו ניקח את הביטוי הכללי {% equation %}\left(a_{1},a_{2}\right)\otimes\left(b_{1},b_{2}\right){% endequation %} ונפרק אותו לסכום אברי בסיס:

{% equation %}\left(a_{1},a_{2}\right)\otimes\left(b_{1},b_{2}\right)=a_{1}b_{1}\left[\left(1,0\right)\otimes\left(1,0\right)\right]+a_{1}b_{2}\left[\left(1,0\right)\otimes\left(0,1\right)\right]+a_{2}b_{1}\left[\left(0,1\right)\otimes\left(1,0\right)\right]+a_{2}b_{2}\left[\left(0,1\right)\otimes\left(0,1\right)\right]{% endequation %}

נשווה את זה עם הביטוי {% equation %}\left(1,0\right)\otimes\left(1,0\right)+\left(0,1\right)\otimes\left(0,1\right){% endequation %} וקיבלנו מערכת של ארבע משוואות בארבעה נעלמים:

{% equation %}a_{1}b_{1}=1{% endequation %}

{% equation %}a_{1}b_{2}=0{% endequation %}

{% equation %}a_{2}b_{1}=0{% endequation %}

{% equation %}a_{2}b_{2}=1{% endequation %}

קל מאוד לראות שאין למערכת הזו פתרון: מכיוון ש-{% equation %}a_{1}b_{2}=0{% endequation %} אחד משניהם חייב להיות 0. אם {% equation %}a_{1}=0{% endequation %} אז {% equation %}1=a_{1}b_{1}=0{% endequation %} וזה בלתי אפשרי; אם {% equation %}b_{2}=0{% endequation %} אז {% equation %}1=a_{2}b_{2}=0{% endequation %} וגם זה בלתי אפשרי. מסקנה: {% equation %}\left(1,0\right)\otimes\left(1,0\right)+\left(0,1\right)\otimes\left(0,1\right){% endequation %} הוא לא טנזור טהור.

כמובן, קל לראות שלא ייתכן שהמכפלה הטנזורית תכיל רק טנזורים טהורים אפילו משיקולים פשוטים יותר: אם נחזור אל המרחבים הוקטוריים מעל השדה הסופי עם שלושה איברים, אז כפי שכבר ראינו אם {% equation %}\left|V\right|=3^{n}{% endequation %} ו-{% equation %}\left|W\right|=3^{m}{% endequation %} אז {% equation %}\left|V\times W\right|=3^{m+n}{% endequation %} וזה גם מספר הטנזורים ה"טהורים", אבל המכפלה הטנזורית היא מרחב ממימד {% equation %}nm{% endequation %} ולכן מכילה {% equation %}3^{mn}{% endequation %} איברים - הרבה יותר מאשר {% equation %}3^{m+n}{% endequation %} עבור כמעט כל הערכים של {% equation %}n,m{% endequation %}.

טוב, אז אני מקווה שאנחנו מבינים מה זו מכפלה טנזורית ברמת ההגדרות ואפשר יהיה להשתמש במושג הזה יחסית בחופשיות בפוסטים שבהם אזדקק לו (מן הסתם מתוכננים כאלו). עכשיו אפשר לעבור לדוגמה כללית יחסית וחשובה מאוד - מכפלה טנזורית של מטריצות. כלומר, {% equation %}V{% endequation %} יהיה מרחב של מטריצות וגם {% equation %}W{% endequation %} יהיה מרחב של מטריצות. אין חשיבות לסדר של המטריצות - הוא יכול להיות שונה בצורה דרסטית. כעת, כדי לתאר את {% equation %}V\otimes W{% endequation %} מספיק לי לתאר איך נראה איבר כללי {% equation %}A\otimes B{% endequation %} עבור {% equation %}A\in V{% endequation %} ו-{% equation %}B\in W{% endequation %}. התיאור הוא פשוט ומקסים: בואו נכתוב בצורה כללית את {% equation %}A{% endequation %}:

{% equation %}A=\left[\begin{array}{cccc}a_{11} &amp; a_{12} &amp; \cdots &amp; a_{1m}\\a_{21} &amp; a_{22} &amp; \cdots &amp; a_{2m}\\\vdots &amp; \vdots &amp; \ddots &amp; \vdots\\a_{n1} &amp; a_{n2} &amp; \cdots &amp; a_{nm}\end{array}\right]{% endequation %}

כעת, {% equation %}A\otimes B{% endequation %} יוגדר כך:

{% equation %}A\otimes B\triangleq\left[\begin{array}{cccc}a_{11}B &amp; a_{12}B &amp; \cdots &amp; a_{1m}B\\a_{21}B &amp; a_{22}B &amp; \cdots &amp; a_{2m}B\\\vdots &amp; \vdots &amp; \ddots &amp; \vdots\\a_{n1}B &amp; a_{n2}B &amp; \cdots &amp; a_{nm}B\end{array}\right]{% endequation %}

הסימון הזה נראה מוזר - כאילו אנחנו דוחפים מטריצה לתוך הכניסות של מטריצה אחרת, ומה זה אומר בכלל. בפועל זה סימון מקובל עבור <strong>מטריצת בלוקים</strong>. הדרך הכי טובה להסביר היא פשוט לתת דוגמה: נבחר {% equation %}A=\left[\begin{array}{cc}1 &amp; 2\\3 &amp; 4\end{array}\right]{% endequation %} ו-{% equation %}B=\left[\begin{array}{cc}5 &amp; 0\\0 &amp; 5\end{array}\right]{% endequation %} ונקבל ש-

{% equation %}A\otimes B=\left[\begin{array}{cccc}5 &amp; 0 &amp; 10 &amp; 0\\0 &amp; 5 &amp; 0 &amp; 10\\15 &amp; 0 &amp; 20 &amp; 0\\0 &amp; 15 &amp; 0 &amp; 20\end{array}\right]{% endequation %}

רואים את ה"בלוקים"?

כמובן, כדי להוכיח שההגדרה שלנו למכפלה הטנזורית באמת עובדת אנחנו צריכים להראות שיש איזומורפיזם בין המרחב שהגדרתי כרגע ובין ההגדרה ה"רגילה" שלי של מכפלה טנזורית - זה כמובן יעבוד ואני משאיר את זה בתור תרגיל למי שמעוניין.

עכשיו, לסיום, אני רוצה להציג נקודת מבט טיפה שונה על ההגדרה של מכפלה טנזורית, שנותנת דרך התבוננות שהיא ככל הנראה נכונה יותר, אם כי גם קשה יותר לעיכול. מילת המפתח פה היא <strong>העתקה בילינארית</strong>. בואו נזכיר מה זה אומר: <strong>העתקה לינארית</strong> (או "טרנספורמציה לינארית" כמו שאני לרוב קורא לה) היא פונקציה {% equation %}T:V\to W{% endequation %} בין שני מרחבים וקטוריים (מעל אותו שדה) שמשמרת את פעולות החיבור והכפל בסקלר, כלומר {% equation %}T\left(a+b\right)=T\left(a\right)+T\left(b\right){% endequation %} ו-{% equation %}T\left(\lambda a\right)=\lambda T\left(a\right){% endequation %} עבור סקלר {% equation %}\lambda{% endequation %}. העתקה בילינארית זה בערך אותו דבר, אבל עבור פונקציה בשני משתנים.

פורמלית, אם {% equation %}V,W,U{% endequation %} הם מרחבים וקטוריים מעל אותו שדה אז {% equation %}f:V\times W\to U{% endequation %} היא העתקה בילינארית אם כאשר ניקח את {% equation %}f{% endequation %} ו"נקפיא" את אחד מהמשתנים שלה, הפונקציה שנקבל במשתנה השני תהיה העתקה לינארית. במילים אחרות, ניקח וקטור {% equation %}w\in W{% endequation %} כלשהו ונגדיר פונקציה חדשה {% equation %}T_{w}:V\to U{% endequation %}, {% equation %}T_{w}\left(v\right)=f\left(v,w\right){% endequation %}, אז אני דורש -{% equation %}T_{w}{% endequation %} תהיה העתקה לינארית. כך גם אם אקח {% equation %}v\in V{% endequation %} ואגדיר {% equation %}S_{v}:W\to U{% endequation %} על ידי {% equation %}S_{v}\left(w\right)=f\left(v,w\right){% endequation %} (הפעולה הזו, של הצבת ערך קבוע בתוך פונקציה בכמה משתנים ועל ידי כך "ייצור" של פונקציה עם משתנה אחד פחות מכונה Currying על שם הלוגיקאי הסקל קרי; זה תעלול מקובל בשפות תכנות מסויימות, למשל הסקל).

העתקה לינארית הוגדרה על ידי שני תנאים, אז אם ננסה לפרוט לפרוטות את התנאים של העתקה בילינארית נראה שהיא מוגדרת על ידי ארבעה, שניים לכל רכיב:
<ol>
	<li>{% equation %}f\left(v_{1}+v_{2},w\right)=f\left(v_{1},w\right)+f\left(v_{2},w\right){% endequation %}</li>
	<li>{% equation %}f\left(\lambda v,w\right)=\lambda f\left(v,w\right){% endequation %}</li>
	<li>{% equation %}f\left(v,w_{1}+w_{2}\right)=f\left(v,w_{1}\right)+f\left(v,w_{2}\right){% endequation %}</li>
	<li>{% equation %}f\left(v,\lambda w\right)=\lambda f\left(v,w\right){% endequation %}</li>
</ol>
נראה מוכר? לא במקרה, כמובן.

ניקח שני מרחבים וקטוריים {% equation %}V,W{% endequation %}. יש כמובן המון פונקציות בילינאריות שניתן להגדיר עליהם, שהולכות למרחבים רבים ושונים. הרעיון במכפלה טנזורית הוא לתאר את המכפלה הבילינארית <strong>הכללית ביותר</strong> שאפשר להגדיר על {% equation %}V\times W{% endequation %}. מה זה אומר? ובכן, בואו נניח שקיים מרחב וקטורי {% equation %}E{% endequation %} ופונקציה בילינארית {% equation %}h:V\times W\to E{% endequation %} שמקיימים את התכונה הבאה: אם {% equation %}U{% endequation %} הוא מרחב וקטורי <strong>כלשהו</strong> ו-{% equation %}f:V\times W\to U{% endequation %} היא פונקציה בילינארית <strong>כלשהי</strong>, אז אפשר לבנות את {% equation %}f{% endequation %} על ידי הרכבה של פונקציה לינארית מתאימה על {% equation %}h{% endequation %}, באופן שהוא <strong>יחיד</strong>. פורמלית, קיימת {% equation %}T:E\to U{% endequation %} <strong>יחידה</strong> כך ש-{% equation %}f=Th{% endequation %} (כלומר, {% equation %}f\left(v,w\right)=T\left(h\left(v,w\right)\right){% endequation %} לכל {% equation %}v\in V,w\in W{% endequation %}). זה אומר ש-{% equation %}h{% endequation %} היא אכן "כללית ביותר" כי היא לא מאבדת שום מידע; אחרי שמפעילים אותה אפשר לבצע "תיקון" ולקבל כל פונקציה בילינארית אחרת. ככה זה נראה בדיאגרמה קומוטטיבית:

<img src="{{site.baseurl}}{{site.post_images}}/2014/06/tensor_product_diagram.png" alt="\xymatrix{ & E\ar[dd]^{T}\\V\times W\ar[ur]^h}\ar[dr]^{f}\\ & U}"/>

הכוונה ב"קומוטטיבית" כאן היא שלא משנה איך הולכים עם החצים - אם הולכים עם {% equation %}f{% endequation %} או אם הולכים עם {% equation %}h{% endequation %} ואז עם {% equation %}T{% endequation %} - בסוף מגיעים לאותו דבר (אם התחלנו מאותו איבר קלט).

התכונה שתיארתי כעת היא דוגמה ל<strong>תכונה אוניברסלית</strong>; לא אכנס כאן להגדרה מדוייקת של מה זו תכונה אוניברסלית כי זה כבר ייקח אותי לתוך תורת הקטגוריות. תחת זאת, אני רוצה לשכנע אתכם שיש בדיוק מרחב {% equation %}E{% endequation %} יחיד (עד כדי איזומורפיזם) שמקיים את התכונה הזו. ההוכחה טריוויאלית למדי: נניח שיש {% equation %}E_{1},E_{2}{% endequation %} עם פונקציות {% equation %}h_{1},h_{2}{% endequation %} שמקיימים את התכונה שלעיל. אז בפרט אם נבחר {% equation %}f=h_{2}{% endequation %} נקבל שקיימת טרנספורמציה לינארית {% equation %}T_{1}:E_{1}\to E_{2}{% endequation %} כך ש-{% equation %}h_{2}=T_{1}h_{1}{% endequation %}. בדומה, קיימת טרנספורמציה לינארית {% equation %}T_{2}:E_{2}\to E_{1}{% endequation %} כך ש-{% equation %}h_{1}=T_{2}h_{2}{% endequation %}. אם כן, נקבל: {% equation %}h_{1}=T_{2}h_{2}=T_{2}T_{1}h_{1}{% endequation %}.

שימו לב מה קיבלנו:

<img src="{{site.baseurl}}{{site.post_images}}/2014/06/tensor_product_diagram2.png" alt="\xymatrix{ & E_{1}\ar[dd]^{T_{2}T_{1}}\\V\times W\ar[ur]^{h_{1}}\ar[dr]^{h_{1}}\\ & E_{1}}"/>

מה שקורה כאן הוא שראינו שאת ההעתקה {% equation %}h_{1}:V\times W\to E_{1}{% endequation %} אפשר לבנות בתור ההרכבה {% equation %}T_{2}T_{1}h_{1}{% endequation %}. אבל מצד שני, אפשר לבנות אותה גם בתור ההרכבה של פונקציית הזהות על {% equation %}h_{1}{% endequation %}. כאן נכנסת לתמונה הדרישה שלי שאופן הבניה הזה יהיה <strong>יחיד</strong> - זה אומר ש-{% equation %}T_{2}T_{1}{% endequation %} היא פונקציית הזהות על {% equation %}E_{1}{% endequation %}, ולכן {% equation %}T_{1}{% endequation %} בפרט הפיכה, ולכן היא איזומורפיזם. הצלחתם לעקוב אחרי הטיעון הזה? (כי אני לא ממש) באלגברה מופשטת זה מה שקורה כל הזמן.

עכשיו כשאנחנו יודעים ש-{% equation %}E{% endequation %} הזה הוא יחיד, בואו נראה שהוא בכלל קיים. אפשר להגדיר את {% equation %}E{% endequation %} להיות {% equation %}V\otimes W{% endequation %} שכבר הגדרתי קודם ולהוכיח שהוא מקיים את תכונת האוניברסליות, אבל איפה הכיף בזה? בואו נבנה אותו בגישה שונה.

ראשית, ברור ש-{% equation %}h:V\times W\to E{% endequation %} חייבת להיות חד-חד-ערכית, כלומר ש-{% equation %}E{% endequation %} יהיה חייב להכיל בתוכו עותק של {% equation %}V\times W{% endequation %}. כי בואו נניח ש-{% equation %}h\left(v_{1},w_{1}\right)=h\left(v_{2},w_{2}\right){% endequation %} עבור {% equation %}\left(v_{1},w_{1}\right)\ne\left(v_{2},w_{2}\right){% endequation %}; במקרה זה נגדיר {% equation %}f{% endequation %} בילינארית שמקיימת {% equation %}f\left(v_{1},w_{1}\right)=f\left(v_{2},w_{2}\right){% endequation %} ואז הלך עלינו - לא משנה איזה {% equation %}T{% endequation %} נבחר, נקבל ש-{% equation %}Th\left(v_{1},w_{1}\right)=Th\left(v_{2},w_{2}\right){% endequation %} ולכן אין סיכוי ש-{% equation %}f=Th{% endequation %}. אז {% equation %}E{% endequation %} חייב לכלול איבר ייחודי שאסמן {% equation %}\delta_{\left(v,w\right)}{% endequation %} לכל {% equation %}\left(v,w\right){% endequation %} (ולמה לא להשתמש בסימון {% equation %}v\otimes w{% endequation %} וחסל? עוד מעט נבין). עכשיו, ה-{% equation %}\delta_{\left(v,w\right)}{% endequation %} לא מרכיבים את כל המרחב לבדם; מכיוון שאנחנו רוצים ש-{% equation %}E{% endequation %} יהיה מרחב וקטורי, אנחנו צריכים להגדיר גם פעולות של חיבור וכפל בסקלר עליהם. כאן אי אפשר סתם לתת הגדרות שרירותיות, כי אז יצוצו בעיות. למשל, נניח שאנו מגדירים שרירותית ש-{% equation %}\lambda\delta_{\left(v_{1},w_{1}\right)}=\delta_{\left(v_{2},w_{2}\right)}{% endequation %}. מה נובע מזה? אם {% equation %}T{% endequation %} היא טרנספורמציה לינארית מ-{% equation %}E{% endequation %}, אז היא תקיים תמיד {% equation %} T\left(\delta_{\left(v_{2},w_{2}\right)}\right)=T\left(\lambda\delta_{\left(v_{1},w_{1}\right)}\right)=\lambda T\left(\delta_{\left(v_{1},w_{1}\right)}\right){% endequation %}. זה אומר שאם ניקח {% equation %}f{% endequation %} שמקיימת {% equation %}f\left(v_{2},w_{2}\right)\ne\lambda f\left(v_{1},w_{1}\right){% endequation %} אז אין {% equation %}T{% endequation %} כך ש-{% equation %}f=Th{% endequation %} ואנחנו שוב בצרות.

במילים אחרות, אנחנו חייבים שבמרחב שלנו יהיו יותר איברים מאשר רק {% equation %}\delta_{\left(v,w\right)}{% endequation %}-ים. אז מה נעשה? איך נדע את מי להוסיף ואת מי לא? אם קודם כשבנינו את המכפלה הטנזורית נקטנו בשיטת Bottom-up - התחלנו מהבסיס של מה שאנחנו רוצים שיהיה לנו (מכפלות טנזוריות של אברי הבסיסים) ובנינו את המרחב מתוך זה, הפעם נעשה מעין Top-down: נתחיל ממרחב גדול מדי, ואז נתקן אותו.

מה שנאמר הוא ש<strong>לכל</strong> צירוף לינארי סופי {% equation %}\sum\lambda_{i}\delta_{\left(v_{i},w_{i}\right)}{% endequation %} יהיה לנו איבר במרחב, והמרחב הזה יהיה <strong>חופשי מיחסים</strong> בין האיברים: שני איברים יהיו שונים אם ורק אם הצירוף הלינארי שמגדיר אותם זהה. לדבר כזה קוראים <strong>מרחב וקטורי חופשי</strong>. הבעיה עם המרחב הזה היא שהוא גדול <strong>מדי</strong>. תחשבו על זה ככה: אם {% equation %}V=W=\mathbb{R}{% endequation %} (מרחבים ממימד 1) אז לכל {% equation %}s,t\in\mathbb{R}{% endequation %} יהיה לנו איבר {% equation %}\delta_{\left(s,t\right)}{% endequation %} שהוא איבר <strong>בסיס</strong> של המרחב החדש; זה אומר שהמרחב החדש שלנו יהיה בעל בסיס לא בן מניה - עצום בגודלו. כמו כן, אם נגדיר את ההעתקה {% equation %}h\left(v,w\right)=\delta_{\left(v,w\right)}{% endequation %} קל לראות שזו <strong>אינה</strong> העתקה בילינארית: הרי {% equation %}h\left(\lambda v,w\right)=\delta_{\left(\lambda v,w\right)}\ne\lambda\delta_{\left(v,w\right)}=\lambda h\left(v,w\right){% endequation %}, כשאי השוויון נובע בדיוק מהחופשיות של המרחב.

במילים אחרות, אם אנחנו רוצים שתהיה לנו תקווה כלשהי לכך ש-{% equation %}h{% endequation %} תהיה בילינארית, אנחנו חייבים לוודא ש-{% equation %}\delta_{\left(\lambda v,w\right)}=\lambda\delta_{\left(v,w\right)}{% endequation %}. איך עושים את זה, למרות שהאיברים הללו כרגע שונים? הטריק הסטנדרטי ביותר בספר: מגדירים <strong>יחס שקילות</strong> על המרחב שלנו, שבו שני איברים הם שקולים אם הם "אמורים להיות שווים", ואז לוקחים את קבוצת המנה (אוסף כל מחלקות השקילות של היחס). אם לא ראיתם את זה מעולם, זה מבלבל נורא: הדוגמה הקלאסית שאני יכול להציע לכם היא מספרים רציונליים; אפשר להגדיר אותם בתור אוסף של זוגות של שלמים, כך ש-{% equation %}\left(a,b\right){% endequation %} מייצג את המספר {% equation %}\frac{a}{b}{% endequation %}; מהר מאוד אנחנו מבינים ש-{% equation %}\left(1,2\right){% endequation %} ו-{% equation %}\left(2,4\right){% endequation %} אמורים לייצג את אותו המספר, אז מגדירים יחס שקילות ש"מזהה" ביניהם.

יחס השקילות שלנו יוגדר על ידי כל התכונות שנדרשות כדי להפוך את {% equation %}h{% endequation %} לבילינארית. פורמלית, מה שעושים הוא לבנות <strong>תת-מרחב וקטורי</strong> של המרחב שלנו, ואז לקחת את <strong>מרחב המנה</strong> - עוד בניה סטנדרטית, שכנראה תהיה מוכרת לכל מי שהתעסק טיפה עם חבורות. תת-המרחב שלנו ייפרש בדיוק על ידי כל האיברים מהצורות הבאות:
<ul>
	<li>{% equation %}\delta_{\left(\lambda v,w\right)}-\lambda\delta_{\left(v,w\right)}{% endequation %}</li>
	<li>{% equation %}\delta_{\left(v,\lambda w\right)}-\lambda\delta_{\left(v,w\right)}{% endequation %}</li>
	<li>{% equation %}\delta_{\left(v_{1}+v_{2},w\right)}-\delta_{\left(v_{1},w\right)}-\delta_{\left(v_{2},w\right)}{% endequation %}</li>
	<li>{% equation %}\delta_{\left(v,w_{1}+w_{2}\right)}-\delta_{\left(v,w_{1}\right)}-\delta_{\left(v,w_{2}\right)}{% endequation %}</li>
</ul>
אחרי שמחלקים בתת-המרחב הזה, כל היוצרים שלו הופכים לשווים לאפס במרחב המנה. לכן, למשל, במרחב המנה המשוואה {% equation %}\delta_{\left(\lambda v,w\right)}-\lambda\delta_{\left(v,w\right)}=0{% endequation %} היא נכונה, כלומר {% equation %}\delta_{\left(\lambda v,w\right)}=\lambda\delta_{\left(v,w\right)}{% endequation %} במרחב הזה.

מה שתיארתי פה הוא בניה סטנדרטית לגמרי באלגברה, שבה בונים אובייקט באמצעות <strong>יוצרים</strong> ו<strong>יחסים</strong>. היוצרים הם ה-{% equation %}\delta{% endequation %}-ות; היחסים הן המשוואות שהגדירו לי את תת-המרחב. אם זו הפעם הראשונה שבה אתם שומעים על המושגים הללו, אני ממליץ לנסות וללמוד אותם דרך תורת החבורות קודם; ככה זה יותר קל לעיכול.

עכשיו אפשר להחזיר לתמונה את הסימון {% equation %}v\otimes w{% endequation %} הידוע לשמצה - זה יהיה האיבר במרחב המנה שמתאים ל-{% equation %}\delta_{\left(v,w\right)}{% endequation %} (<strong>מחלקת השקילות</strong> של {% equation %}\delta_{\left(v,w\right)}{% endequation %}). מכאן ואילך זו עבודה סטנדרטית יחסית להראות שהמרחב הזה אכן מקיים את כל מה שאנחנו רוצים. בהינתן {% equation %}f:V\times W\to U{% endequation %}, מגדירים {% equation %}T\left(v\otimes w\right)=f\left(v,w\right){% endequation %} ומקבלים ש-{% equation %}f=Th{% endequation %} (צריך להוכיח ש-{% equation %}T{% endequation %} היא טרנספורמציה לינארית מוגדרת היטב - זה נובע מכך ש-{% equation %}f{% endequation %} היא בילינארית). היחידות של {% equation %}T{% endequation %} נובעת מכך שמרגע שהגדרנו את {% equation %}T{% endequation %} על כל האיברים מהצורה {% equation %}v\otimes w{% endequation %} אז {% equation %}T{% endequation %} נקבעת באופן יחיד עבור כל יתר המרחב (למעשה, מספיקה ההגדרה של {% equation %}T{% endequation %} על אברי בסיס כפי שהגדרנו אותם בתחילת הפוסט; לא צריך את כל הטנזורים הטהורים), ובהינתן {% equation %}f{% endequation %}, אין לנו בחירה לערכים של {% equation %}T{% endequation %} על טנזורים טהורים - הם חייבים לתת להם בדיוק מה ש-{% equation %}f{% endequation %} נותנת לזוג המתאים. זה מסיים (בנפנוף ידיים, כמובן) את ההוכחה.

קצת ניסיתי בפוסט הזה ללכת בלי ולהרגיש עם - לא לצלול עמוק מדי אל ההקשר האלגברי הרחב יותר, ובכל זאת להזכיר אותו; אני מקווה שהצלחתי כך לתת משהו לכל קורא של הפוסט, ולא סתם שהרגזתי את כולם במידה שווה.

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    TeX: {extensions: ["http://www.gadial.net/libs/xyjax/extensions/TeX/xypic.js"]}
  });
</script>
