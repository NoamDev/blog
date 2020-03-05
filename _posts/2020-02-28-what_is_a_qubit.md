---
title: "חישוב קוונטי - מה זה קיוביט ומה עושים איתו?"
layout: post
categories:
  - פיזיקה
  - תורת הסיבוכיות
tags:
  - חישוב קוונטי
---


<h2>מבוא</h2>

בפוסטים הקודמים בבלוג דיברתי על <a href="https://gadial.net/2020/01/31/mermin_peres_magic_square/">ריבוע הקסם של פרס-מרמין</a> ו<a href="https://gadial.net/2020/01/24/what_is_mipstar_equals_re_part_2/">על המשפט</a> שאומר ש-{% equation %}\text{MIP}^{*}=\text{RE}{% endequation %}. אלו שתי תוצאות מרהיבות (אחת פשוטה ואחת מאוד מסובכת) שמתבססות על <strong>קיוביטים</strong>, שהם מושג מתמטי שיש כל מני דרכים לממש במציאות. בפוסט הזה אני רוצה לדבר על המושג המתמטי. זה ייתן לנו בסיס שעליו נוכל להסביר ענייני חישוב קוונטי ואינפורמציה קוונטית בצורה רחבה יותר מאשר <a href="https://gadial.net/2014/07/17/quantum_computing_intro/">עשיתי בבלוג בשעתו בסדרת הפוסטים שלי</a> על חישוב קוונטי. בפעם ההיא המטרה שלי הייתה להגיע כמה שיותר מהר לדברים מגניבים כמו האלגוריתמים של גרובר ושור, והפעם אני בכלל לא הולך להתעניין בתוצאות המחץ הללו אלא אנסה ליהנות מהדרך - מכמה שהמתמטיקה שמעורבת בסיפור היא ממש יפה בזכות עצמה.

המתמטיקה שמעורבת בסיפור היא אלגברה לינארית, ובפרט דברים שבאופן קלאסי נלמדים בקורס שני באלגברה לינארית ולא הגעתי אל כולם בבלוג - מכפלות פנימיות, משפט הלכסון הספקטרלי, דברים כאלה. אני אניח היכרות כלשהי עם הנושאים הללו או לכל הפחות יכולת לעצור ולחפש הסברים עליהם במקומות אחרים, אבל אנסה לא להיות קריפטי לחלוטין רוב הזמן. אני לא רוצה להפחיד - בניגוד לתורת הקוונטים "באופן כללי" שיכולה להיות מאתגרת למדי מתמטית, אפשר לחשוב על קיוביטים בתור מין "צמצום" של תורת הקוונטים לסיטואציה מאוד פשוטה ונשלטת יחסית, והמתמטיקה שלה היא דווקא <strong>פשוטה</strong> בהתאם. זה חלק מהיופי - איך ממתמטיקה פשוטה יוצאים ניסים ונפלאות שכאלו.

עוד הערה אחת לפני שנתחיל: הפוסט הזה מדבר על "קיוביט", ביחיד. הפוסט הבא ידבר על "קיוביטים", ברבים, כי האופן שבו משלבים כמה קיוביטים יחד מערב עוד מתמטיקה, ורק שם יתגלה הכוח האמיתי של כל העסק הזה. אז אם מה שאני מדבר עליו פה ייראה חסר פואנטה, זכרו - יש פואנטה, היא תגיע בהמשך, יקרו ניסים ונפלאות, אבל בואו ניהנה כרגע מהדרך. הרבה יותר קל להבין את המתמטיקה שבהמשך אם מבינים אותה עבור קיוביט בודד.

<h2>מה זה קיוביט?</h2>

ובכן, מה זה קיוביט? מה שעוזר כאן הוא האנלוגיה למושג של <strong>ביט</strong> שאנחנו רגילים מחישוב "רגיל". ביט {% equation %}x{% endequation %} הוא משהו שיכול להיות בעל ערך שנמצא בתוך הקבוצה {% equation %}\mathbb{Z}_{2}=\left\{ 0,1\right\} {% endequation %}. אנחנו עושים עם ביט יחיד שני דברים עיקריים:

<ol> <li>מבצעים עליו <strong>פעולות</strong> כלשהן שמשנות את ערכו, למשל {% equation %}\text{NOT}\left(x\right)=1-x{% endequation %} (כשיש לנו שני ביטים ויותר יש פעולות מעניינות יותר...)</li>


<li><strong>משווים</strong> את הערך שלו לדברים, כלומר בודקים האם {% equation %}x=0{% endequation %} או {% equation %}x=1{% endequation %} ופועלים בהתאם לכך. אם תרצו, אפשר לומר שאנחנו <strong>מודדים</strong> את הערך של הביט.</li>

</ol>

קיוביט זה אותו דבר, פרט לכך שהערכים שקיוביט יכולים לקבל שייכים לקבוצה גדולה ומסובכת יותר, ובהתאם לכך הפעולות שאפשר לבצע על קיוביט הן מסובכות יותר, והמדידות שניתן לבצע הן מסובכות יותר.

היקום שבו קיוביט בודד חי הוא המרחב הוקטורי {% equation %}\mathbb{C}^{2}{% endequation %} עם <strong>המכפלה הפנימית הסטנדרטית</strong> עליו. בואו נזכיר את המרחב הזה. אני מסמן איברים של המרחב בתור <strong>וקטורי עמודה</strong>, כלומר איבר כללי הוא משהו מהצורה {% equation %}v=\left(\begin{array}{c} \alpha\\ \beta \end{array}\right){% endequation %} כך ש-{% equation %}\alpha,\beta\in\mathbb{C}{% endequation %}. על המרחב הזה אני מגדיר <strong>מכפלה פנימית</strong> שהיא פונקציה שלוקחת זוג איברים במרחב ומחזירה סקלר: אם {% equation %}v=\left(\begin{array}{c} \alpha\\ \beta \end{array}\right){% endequation %} ו-{% equation %}u=\left(\begin{array}{c} \gamma\\ \delta \end{array}\right){% endequation %} אז אני מגדיר {% equation %}\left\langle u|v\right\rangle =\alpha\overline{\gamma}+\beta\overline{\delta}{% endequation %} כך שקו מעל מספר מסמן את <strong>הצמוד המרוכב</strong> שלו: {% equation %}\overline{a+bi}=a-bi{% endequation %}.

אם תסתכלו על <a href="https://gadial.net/2012/02/06/inner_products_intro/">הפוסט שלי</a> על מכפלות פנימיות אתם תראו שהשתמשתי בסימונים אחרים: {% equation %}x\cdot y{% endequation %} או {% equation %}\left\langle x,y\right\rangle {% endequation %}, כאשר דווקא {% equation %}y{% endequation %} הוא זה שמצמידים את הכניסות שלו, ואילו אצלי הפעם, בסימון {% equation %}\left\langle u|v\right\rangle {% endequation %} זה דווקא {% equation %}u{% endequation %} השמאלי שמצמידים את הכניסות שלו. מה שקורה פה הוא שאני מאמץ את שיטות הסימון בפיזיקה לעניינים הללו כי יהיה להן יתרון בהמשך וכי זו השפה של התחום בכל מקרה - אני מקווה שזה לא יבלבל אותנו יותר מדי או לפחות שנתרגל מהר.

הנה עוד סימון מועיל ביותר: אם {% equation %}A\in M_{n,m}\left(\mathbb{C}\right){% endequation %} היא מטריצה כלשהי (לאו דווקא ריבועית) עם כניסות שהן מספרים מרוכבים, אז אני מגדיר את המטריצה הצמודה שלה {% equation %}A^{\dagger}{% endequation %} באופן הבא: {% equation %}\left[A^{\dagger}\right]_{ij}=\overline{\left[A\right]_{ji}}{% endequation %}. במילים אחרות, אנחנו משחלפים את {% equation %}A{% endequation %} ומצמידים את הכניסות שלה. גם פה הסימון שלי קצת שונה מבדרך כלל: במתמטיקה כותבים {% equation %}A^{*}{% endequation %} ואילו בפיזיקה משתמשים בכוכבית למטרה אחרת ולכן כותבים {% equation %}A^{\dagger}{% endequation %} (הסימן הזה נקרא "דגר", פגיון).

בסימון הזה קל להבין את המכפלה הפנימית שלנו גם בעזרת כפל מטריצות "רגיל": {% equation %}\left\langle u|v\right\rangle =u^{\dagger}v{% endequation %} (אם חושבים על {% equation %}u,v{% endequation %} בתור וקטורי עמודה). בואו נזכור את הגישה הזו בהמשך, כי פתאום נדבר גם על יצור כמו {% equation %}\left|v\right\rangle \left\langle u\right|=vu^{\dagger}{% endequation %} שהולך בכלל להיות מטריצה {% equation %}2\times2{% endequation %}.

<strong>הנורמה</strong> של איבר {% equation %}v{% endequation %} במרחב מכפלה פנימית מוגדרת בתור {% equation %}\sqrt{\left\langle v|v\right\rangle }=\sqrt{\left|\alpha\right|^{2}+\left|\beta\right|^{2}}{% endequation %} - אפשר לחשוב אותה בתור משהו שמייצג הכללה של מושג <strong>האורך</strong> של וקטור, ומכפלה פנימית היא סוג של משהו שמערב את מכפלת האורכים של שני וקטורים ואת קוסינוס הזווית ביניהם.

מכפלות פנימיות ונורמות מאפשרות לנו לדבר על בסיסים "נחמדים במיוחד" למרחב: בסיסים <strong>אורתונורמליים</strong>. בסיס {% equation %}B=\left\{ b_{1},\ldots,b_{n}\right\} {% endequation %} למרחב מכפלה פנימית כלשהו הוא <strong>אורתונורמלי</strong> אם {% equation %}\left\langle b_{i},b_{j}\right\rangle =\delta_{ij}{% endequation %}, כלומר המכפלה הפנימית של כל שני איברים שונים זה מזה בו היא 0, וכל איבר בו הוא מנורמה 1. הקסם בבסיס כזה הוא שבהינתן איבר {% equation %}v{% endequation %} כלשהו במרחב, קל מאוד לגלות מה המקדמים שלו בצירוף הלינארי {% equation %}v=\sum\alpha_{i}b_{i}{% endequation %}: אם תחשבו את {% equation %}\left\langle b_{i}|v\right\rangle {% endequation %} ותשתמשו בתכונות המכפלה הפנימית ובכך שהבסיס אורתונורמלי תגלו ש-{% equation %}\left\langle b_{i}|v\right\rangle =\alpha_{i}{% endequation %}, כלומר {% equation %}v=\sum\left\langle b_{i}|v\right\rangle b_{i}{% endequation %}. אני קורא לרוב למקדמים {% equation %}\left\langle b_{i}|v\right\rangle {% endequation %} הללו בשם <strong>מקדמי פורייה</strong> של {% equation %}v{% endequation %} על פי הבסיס {% equation %}B{% endequation %}.

עכשיו אפשר להגיד מה זה בעצם קיוביט: זה משהו שהערכים שהוא יכול לקבל הם כל האיברים ב-{% equation %}\mathbb{C}^{2}{% endequation %} <strong>שהם מנורמה </strong><strong>1</strong>. אני מסמן ערך כזה לרוב ב-{% equation %}\left|\psi\right\rangle {% endequation %} - הסימון הזה נקרא ket וכמובן שיש הגיון מאחורי והדמיון שלו לסימונים של מכפלה פנימית לא מקרי, אבל מבחינה יבשה הוא בסך הכל דרך סימון של וקטור ב-{% equation %}\mathbb{C}^{2}{% endequation %}.

עוד הערה אחת על הערכים של קיוביט: אם שני ערכים נבדלים זה מזה רק בכפל בסקלר, אני מתייחס אליהם בתור אותו הערך (בפיזיקאית אני אגיד שהם "רק נבדלים בפאזה").

בואו נעבור לייצוג טיפה יותר קונקרטי של קיוביטים. אני יכול לסמן את הבסיס הסטנדרטי של {% equation %}\mathbb{C}^{2}{% endequation %} עם הסימונים {% equation %}\left|0\right\rangle =\left(\begin{array}{c} 1\\ 0 \end{array}\right),\left|1\right\rangle =\left(\begin{array}{c} 0\\ 1 \end{array}\right){% endequation %} ואז אפשר לכתוב קיוביט כללי בתור {% equation %}\left|\psi\right\rangle =\alpha\left|0\right\rangle +\beta\left|1\right\rangle {% endequation %} כאשר {% equation %}\alpha,\beta\in\mathbb{C}{% endequation %} נקראים <strong>האמפליטודות</strong> של הקיוביט והדרישה של "נורמה 1" מתורגמת לדרישה {% equation %}\left|\alpha\right|^{2}+\left|\beta\right|^{2}=1{% endequation %}. האינטואיציה הפיזיקלית מאחורי ההגדרות הללו היא ש-{% equation %}\left|\psi\right\rangle {% endequation %} נמצא במשהו שנקרא <strong>סופרפוזיציה </strong>של מצבי היסוד {% equation %}\left|0\right\rangle ,\left|1\right\rangle {% endequation %} אבל אני לא אכנס יותר מדי לפיזיקה בפוסט הזה.

עכשיו, אמרתי קודם שעם ביט רגיל אפשר לעשות שני דברים: <strong>פעולות</strong> ו<strong>מדידה</strong>. ואמרתי שעם קיוביט זה אותו דבר, רק מסובך יותר. נתחיל עם פעולות. ההסבר הפיזיקלי לאיך המערכת הקוונטית שקיוביט מתאר מתפתחת עם הזמן דורש כניסה למושגים כמו המילטוניאן וכאלו ואני נמנע מההסבר הזה לחלוטין כי אין בו צורך - השורה התחתונה שאפשר לקפוץ אליה באובייקט פשוט כמו קיוביט היא שהפעולות שאפשר להפעיל על קיוביטים הן <strong>טרנספורמציות לינאריות</strong>. כלומר, לוקחים מטריצה {% equation %}U\in M_{2\times2}\left(\mathbb{C}\right){% endequation %} וכופלים אותה ב-{% equation %}\left|\psi\right\rangle {% endequation %}. רק מה, אמרתי קודם שהערכים שקיוביט מקבל הם <strong>מנורמה </strong><strong>1</strong>. כלומר, גם הפלט צריך להיות מנורמה 1, כלומר אני מצפה מ-{% equation %}U{% endequation %} <strong>לשמר נורמה</strong>. יוצא ש-{% equation %}U{% endequation %} צריכה להיות <strong>טרנספורמציה אוניטרית</strong>, כלומר טרנספורמציה לינארית שמקיימת {% equation %}U^{\dagger}=U^{-1}{% endequation %}. בפרט {% equation %}U{% endequation %} הפיכה - זה קצת מנוגד לאינטואיציה שלנו, כי למשל פעולת ה-AND על שני ביטים קלאסיים היא לא הפיכה (אם הפלט היה 0, מה היה הקלט?).

בואו נראה כמה דוגמאות לטרנספורמציות אוניטריות שכאלו, שיהיו חשובות מאוד בהמשך הדרך: ראשית, המקבילה של פעולת NOT רק בקיוביטים. זו טרנספורמציה שמעבירה את {% equation %}\left|0\right\rangle {% endequation %} ל-{% equation %}\left|1\right\rangle {% endequation %} ואת {% equation %}\left|1\right\rangle {% endequation %} ל-{% equation %}\left|0\right\rangle {% endequation %} ומסומנת ב-{% equation %}X{% endequation %}:

{% equation %}X\left|0\right\rangle =\left|1\right\rangle {% endequation %}

{% equation %}X\left|1\right\rangle =\left|0\right\rangle {% endequation %}

אפשר לתאר את זה במטריצה הבאה, שאני מסמן גם ב-{% equation %}\sigma_{x}{% endequation %} כשיותר נוח לי, מסיבות של "זה הסימון המקובל בפיזיקה"):

{% equation %}X=\left(\begin{array}{cc} 0 & 1\\ 1 & 0 \end{array}\right){% endequation %}

פעולה אחרת, שאין לה מקבילה קלאסית, היא <strong>היפוך פאזה</strong> שמתוארת באות {% equation %}Z{% endequation %} ונראית כך:

{% equation %}Z\left|0\right\rangle =\left|0\right\rangle {% endequation %}

{% equation %}Z\left|1\right\rangle =-\left|1\right\rangle {% endequation %}

{% equation %}Z=\left(\begin{array}{cc} 1 & 0\\ 0 & -1 \end{array}\right){% endequation %}

כלומר, {% equation %}Z{% endequation %} לא עושה כלום למצב {% equation %}\left|0\right\rangle {% endequation %} אבל כופלת את {% equation %}\left|1\right\rangle {% endequation %} במינוס 1. למה זה מעניין בכלל? הרי אמרתי שאני מחשיב שני קיוביטים כזהים אם הם נבדלים בפאזה. ובכן, כן, אבל זכרו שקיוביט "כללי" הוא תערובת של שני מצבי הבסיס הללו. כלומר אם {% equation %}\left|\psi\right\rangle =\alpha\left|0\right\rangle +\beta\left|1\right\rangle {% endequation %} אז {% equation %}Z\left|\psi\right\rangle =\alpha\left|0\right\rangle -\beta\left|1\right\rangle {% endequation %} וזה כבר שינוי של ממש - הפאזה <strong>בין</strong> שני הרכיבים של {% equation %}\left|\psi\right\rangle {% endequation %} השתנתה.

עוד פעולה רלוונטית היא {% equation %}Y{% endequation %}, שהיא סוג של שילוב בין {% equation %}X,Z{% endequation %} ומספרים מרוכבים:

{% equation %}Y=\left(\begin{array}{cc} 0 & -i\\ i & 0 \end{array}\right){% endequation %}

אם תבדקו תגלו ש-{% equation %}ZX=iY{% endequation %}, ובכלל שמתקיים הקשר הנחמד הבא:

{% equation %}XY=iZ{% endequation %}

{% equation %}YZ=iX{% endequation %}

{% equation %}ZX=iY{% endequation %}

שבטח מזכיר את הקווטרניונים לאלו מכם שמכירים אותם.

שלוש המטריצות הללו נקראות <strong>מטריצות פאולי</strong>, ויחד עם מטריצת היחידה הן הבסיס למשהו שנקרא <strong>חבורת פאולי</strong> והוא מאוד שימושי בכל ענייני הקוונטים אבל נגיע לכך בהמשך. לבינתיים הנה הדוגמא האחרונה שלי לטרנספורמציה אוניטרית. עד עכשיות מה שהצגתי היה קצת מוזר כי הטרנספורמציות לא יצרו שום קשר בין {% equation %}\left|0\right\rangle {% endequation %} ובין {% equation %}\left|1\right\rangle {% endequation %} אז לא היה ברור מה ההבדל בין קיוביטים ובין סתם ביטים. אבל הנה משהו שונה, שנקרא <strong>מטריצת הדאמר</strong> (Hadamard):

{% equation %}H\left|0\right\rangle =\frac{\left|0\right\rangle +\left|1\right\rangle }{\sqrt{2}}{% endequation %}

{% equation %}H\left|1\right\rangle =\frac{\left|0\right\rangle -\left|1\right\rangle }{\sqrt{2}}{% endequation %}

{% equation %}H=\frac{1}{\sqrt{2}}\left(\begin{array}{cc} 1 & 1\\ 1 & -1 \end{array}\right){% endequation %}

הטרנספורמציה הזו יוצרת <strong>סופרפוזיציה</strong> של {% equation %}\left|0\right\rangle ,\left|1\right\rangle {% endequation %} מתוך כל אחד ממצבי הבסיס הללו. החלוקה ב-{% equation %}\sqrt{2}{% endequation %} היא כדי להבטיח שהתוצאה עדיין תהיה מנורמה 1. עכשיו, מכיוון שהמצבים של הסופרפוזיציה הזו הם כל כך חשובים, יש להם סימון משל עצמם ועוד נפגוש אותם בהמשך:

{% equation %}\left|+\right\rangle =\frac{\left|0\right\rangle +\left|1\right\rangle }{\sqrt{2}}{% endequation %}

{% equation %}\left|-\right\rangle =\frac{\left|0\right\rangle -\left|1\right\rangle }{\sqrt{2}}{% endequation %}

עכשיו, גם {% equation %}\left|0\right\rangle ,\left|1\right\rangle {% endequation %} וגם {% equation %}\left|+\right\rangle ,\left|-\right\rangle {% endequation %} מהווים <strong>בסיס אורתונורמלי </strong>למרחב {% equation %}\mathbb{C}^{2}{% endequation %}, כלומר הם קבוצות פורשות, בלתי תלויות, של וקטורים מנורמה 1 שאורתוגונליים זה לזה (המכפלה הפנימית של איברים שונים היא 0). צריך להבין שאין בסיס "נכון" למרחב הזה - שני הבסיסיים לגיטימיים באותה מידה. אם גם בפועל אנחנו משתמשים רוב הזמן ב-{% equation %}\left|0\right\rangle ,\left|1\right\rangle {% endequation %}, זו לרוב החלטת סימון שרירותית (כלומר: יש לנו מערכת פיזיקלית "אמיתית" עם שני מצבים מובחנים, ואנחנו בוחרים <strong>לקרוא להם</strong> בשמות {% equation %}\left|0\right\rangle ,\left|1\right\rangle {% endequation %}). על {% equation %}H{% endequation %} אפשר לחשוב בתור מטריצה שמעבירה אותנו מבסיס אחד לבסיס השני, וגם בחזרה; כי {% equation %}HH=I{% endequation %}, כלומר {% equation %}H=H^{-1}{% endequation %}.

<h2>מדידות, גרסה א'</h2>

עד עכשיו כל מה שעשינו היה קצת משחק נחמד באלגברה לינארית אבל עדיין לא ברור מה מוזר פה, בעצם. כדי שהעסק ייעשה מוזר צריך להכניס לתמונה את האופן שבו מתבצעת <strong>מדידה</strong> קוונטית. גם פה אני לא אכנס לשאלה מהי מדידה, מבחינה פיזיקלית; זו <strong>אינטראקציה</strong> כלשהי עם המערכת הפיזיקלית שהיא ברוטלית מספיק כדי לאלץ את המערכת לספר לנו משהו, וזו האינטואיציה שאדבוק בה. מן הסתם במערכות פיזיקליות שונות טיב ההתערבות הוא שונה (במחשבים קוונטיים של זמננו ההתערבות הזו היא פולס אלקטרומגנטי שמפגיז את האובייקט הפיזיקלי שמייצג את הקיוביט), אבל האבסטרקציה המתמטית היא זהה.

אם קיובטים היו מתנהגים כמו בחישוב קלאסי, מה <strong>היינו מצפים</strong> שיקרה כשאנחנו מודדים אותם? לכאורה, הרעיון הוא כזה: יש לי קיוביט עם הערך {% equation %}\left(\begin{array}{c} \alpha\\ \beta \end{array}\right){% endequation %}. אני מביא וקטור משל עצמי של מספרים מרוכבים {% equation %}\left(\begin{array}{c} x\\ y \end{array}\right){% endequation %} ושואל - האם {% equation %}\left(\begin{array}{c} \alpha\\ \beta \end{array}\right)=\left(\begin{array}{c} x\\ y \end{array}\right){% endequation %}? התשובה היא "כן" אם {% equation %}\alpha=x{% endequation %} ו-{% equation %}\beta=y{% endequation %} ו"לא" אחרת. מכיוון שהמספרים המעורבים הם מרוכבים, ייתכן ש"כן" יהיה תלוי ברמת הדיוק שלנו (כלומר נחשיב כלגיטימי את השוויון הלא נכון מתמטית {% equation %}0.999999=1{% endequation %} - שימו לב שכאן אין שלוש נקודות!). אחר כך נמשיך לעבוד עם {% equation %}\left(\begin{array}{c} \alpha\\ \beta \end{array}\right){% endequation %} כמקודם. כך עובד חישוב קלאסי.

חישוב קוונטי <strong>לא עובד כך בכלל</strong>.

בחישוב קוונטי, אין לי "גישה ישירה" לערכים {% equation %}\alpha,\beta{% endequation %}. יותר גרוע מכך - בחישוב קוונטי, אחרי שמדדתי את {% equation %}\left(\begin{array}{c} \alpha\\ \beta \end{array}\right){% endequation %}, המצב הזה <strong>נהרס</strong> ומוחלף במצב אחר, <strong>באופן לא הפיך</strong>. עוד יותר גרוע: התוצאה של המדידה היא <strong>הסתברותית</strong>. ברוכים הבאים לעולם חדש.

אז איך מדידה מוגדרת, פורמלית, מתמטית? יש לזה כמה תשובות, כל אחת מכלילה את הקודמת. בואו נתחיל מהסוג הכי פשוט של מדידה, שהוא גם זה שהכי נפוץ להיתקל בו בתיאורים פופולריים של הנושא. בגישה הזו, "מדידה" היא משהו שלוקח את המצב {% equation %}\left|\psi\right\rangle =\alpha\left|0\right\rangle +\beta\left|1\right\rangle {% endequation %} ומחזיר את המצב {% equation %}\left|0\right\rangle {% endequation %} בהסתברות {% equation %}\left|\alpha\right|^{2}{% endequation %} ואת המצב {% equation %}\left|1\right\rangle {% endequation %} בהסתברות {% equation %}\left|\beta\right|^{2}{% endequation %}. מכאן הדרישה {% equation %}\left|\alpha\right|^{2}+\left|\beta\right|^{2}=1{% endequation %} מגיעה - שהאמפליטודות ייצגו הסתברויות בצורה כלשהי. מדידה כזו היא <strong>הרסנית</strong>: אחרי שמדדנו את המצב, האמפליטודות {% equation %}\alpha,\beta{% endequation %} מתפוגגות ונעלמות - כל מה שנשאר לנו ביד הוא {% equation %}\left|0\right\rangle {% endequation %} או {% equation %}\left|1\right\rangle {% endequation %}.

אני לא אוהב את התיאור הזה גם כי הוא מתאר מקרה פרטי מדי, וגם כי הוא קצת מנפנף בידיים. מה זה אומר "מחזיר את המצב {% equation %}\left|0\right\rangle {% endequation %}"? נאמר, בתיאור הפופולרי של <strong>החתול של שרדינגר</strong>, {% equation %}\left|0\right\rangle {% endequation %} הוא המצב "החתול חי". ה"מדידה" שלנו היא פתיחת הקופסה שבה החתול נמצא. אז מה זה אומר שקיבלנו {% equation %}\left|0\right\rangle {% endequation %}? המדידה שלנו מתבטאת בחתול שמזנק עלינו בזעם ושורט אותנו - השריטות הללו הן לא מצב קוונטי {% equation %}\left|0\right\rangle {% endequation %} אלא איזו שהיא תוצאה של המדידה. בגישה יותר פיזקאית, נגיד שאנחנו מצפים שתוצאה של מדידה תהיה <strong>מספר ממשי</strong> כלשהו. במקרה הנוכחי התוצאות האפשריות של המדידה יהיו המספרים {% equation %}+1{% endequation %} ו-{% equation %}-1{% endequation %}, ואם זה נראה מוזר שזה הם ולא נניח {% equation %}0{% endequation %} ו-{% equation %}1{% endequation %}, תכף אכליל את הסיפור והם ייראו טבעיים יותר.

אם כן, מדידה גרסה א' היא הדבר הבא: בהינתן מצב קוונטי {% equation %}\left|\psi\right\rangle =\alpha\left|0\right\rangle +\beta\left|1\right\rangle {% endequation %} קורה בדיוק אחד משני הדברים הבאים:

<ul> <li>בהסתברות {% equation %}\left|\alpha\right|^{2}{% endequation %}: המדידה מחזירה את הערך {% equation %}+1{% endequation %} והופכת את {% equation %}\left|\psi\right\rangle {% endequation %} למצב {% equation %}\left|0\right\rangle {% endequation %}.</li>


<li>בהסתברות {% equation %}\left|\beta\right|^{2}{% endequation %}: המדידה מחזירה את הערך {% equation %}-1{% endequation %} והופכת את {% equation %}\left|\psi\right\rangle {% endequation %} למצב {% equation %}\left|1\right\rangle {% endequation %}.</li>

</ul>


<h2>מדידות, גרסה ב'</h2>

בואו נעבור עכשיו לדרך כללית הרבה יותר לתאר מדידות בצורה פורמלית. הרעיון הוא שבאופן כללי, מדידה תיוצג על ידי <strong>קבוצה של אופרטורים</strong> {% equation %}\left\{ M_{m}\right\} {% endequation %} כאשר {% equation %}m{% endequation %} הוא אינדקס שרץ על כל התוצאות האפשריות של המדידה (מה שהיה {% equation %}\pm1{% endequation %} בדוגמא הקודמת שלי). כאשר מודדים את {% equation %}\left|\psi\right\rangle {% endequation %} על פי קבוצת האופרטורים הזו, אחת מהתוצאות {% equation %}m{% endequation %} הולכת לעלות בגורל בצורה אקראית והיא תהיה תוצאת המדידה, ואחריה המערכת תעבור למצב {% equation %}M_{m}\left|\psi\right\rangle {% endequation %} כשהוא מנורמל. ומה ההסתברות שהתוצאה {% equation %}m{% endequation %} תעלה בגורל? היא בדיוק הנורמה בריבוע של {% equation %}M_{m}\left|\psi\right\rangle {% endequation %} הזה.

אפשר לחשוב על זה כך: {% equation %}M_{m}{% endequation %} <strong>מטיל</strong> את {% equation %}\left|\psi\right\rangle {% endequation %} לתוך תת-מרחב, וככל שההיטל הזה גדול יותר כך גדול יותר הסיכוי שהוא יעלה בגורל של המדידה; אחר כך אנחנו מעבירים את המערכת לתת-המרחב הזה באמצעות ההטלה אבל חייבים "לנפח" קצת את התוצאה אחרת הנורמה שלה לא תהיה 1.

אם אני אנסה לכתוב מתמטית את התיאור הזה, אני אראה די מהר שהסימונים שלי יוצרים משהו "לא יפה". כי מה זו הנורמה בריבוע של {% equation %}M_{m}\left|\psi\right\rangle {% endequation %}? באופן כללי, אם {% equation %}v{% endequation %} הוא וקטור אז הנורמה בריבוע שלו היא פשוט המכפלה הפנימית שלו בעצמו: {% equation %}\|v\|^{2}=\left\langle v|v\right\rangle {% endequation %}. אבל אם אני אכתוב משהו כמו {% equation %}\left\langle M_{m}\left|\psi\right\rangle |M_{m}\left|\psi\right\rangle \right\rangle {% endequation %} יכה בי עצב גדול. למרבה המזל, שיטת הסימון שאני נוקט בה מיועדת בדיוק כדי להפוך סימונים לפשוטים יותר.

הפיזיקאי אומר כך: ראשית, אם {% equation %}\left|\psi\right\rangle {% endequation %} מסמן וקטור, אז אני אסמן את {% equation %}\left|\psi\right\rangle ^{\dagger}{% endequation %} (שחלוף + הצמדה) שלו בתור {% equation %}\left\langle \psi\right|{% endequation %} (הסימון הזה נקרא bra). זה יוצר לי את האלגנטיות הבאה: אם יש לי שני וקטורים {% equation %}\left|\psi_{1}\right\rangle ,\left|\psi_{2}\right\rangle {% endequation %} ואני רוצה לחשב את המכפלה הפנימית שלהם, על פי הגדרה היא שווה ל-{% equation %}\left|\psi_{2}\right\rangle ^{\dagger}\cdot\left|\psi_{1}\right\rangle {% endequation %} (תעיפו מבט מוקדם יותר בפוסט: כתבתי שם {% equation %}\left\langle u|v\right\rangle =u^{\dagger}v{% endequation %}). על פי הסימון שכרגע הצגתי {% equation %}\left|\psi_{2}\right\rangle ^{\dagger}\cdot\left|\psi_{1}\right\rangle =\left\langle \psi_{2}\right|\cdot\left|\psi_{1}\right\rangle {% endequation %}. כלומר, {% equation %}\left\langle \psi_{2}\right|\cdot\left|\psi_{1}\right\rangle =\left\langle \psi_{2}|\psi_{1}\right\rangle {% endequation %}. מה שקרה פה הוא שהסימון של וקטורים עם הסוגריים המשולשים בא לדמות את האופן שבו אנחנו כותבים מכפלה פנימית, כך שכפל מטריצות רגיל של שני וקטורים שאחד מהם הוא bra והשני הוא ket יוצר מכפלה פנימית (שמסומנת על ידי סוגריים משולשים - מה שנקרא braket באנגלית, ומכאן השמות bra ו-ket).

עכשיו, אם יש לי את הוקטור {% equation %}M_{m}\left|\psi\right\rangle {% endequation %} ואני רוצה לקחת את הצמוד שלו, אני אקבל {% equation %}\left(M_{m}\left|\psi\right\rangle \right)^{\dagger}=\left\langle \psi\right|M_{m}^{\dagger}{% endequation %}, ולכן המכפלה הפנימית של {% equation %}M_{m}\left|\psi\right\rangle {% endequation %} בעצמו היא {% equation %}\left\langle \psi\right|M_{m}^{\dagger}M_{m}\left|\psi\right\rangle {% endequation %}, מה שויזואלית נראה די... נחמד?

עכשיו אני יכול לנסח במפורש איך מדידה על פי קבוצת האופרטורים {% equation %}\left\langle M_{m}\right\rangle {% endequation %} עובדת:

<ul> <li>בהסתברות {% equation %}p\left(m\right)=\left\langle \psi\right|M_{m}^{\dagger}M_{m}\left|\psi\right\rangle {% endequation %} מוחזרת התוצאה {% equation %}m{% endequation %}</li>


<li>אם התוצאה {% equation %}m{% endequation %} נבחרה, המצב הקוונטי החדש של המערכת עובר להיות {% equation %}\frac{M_{m}\left|\psi\right\rangle }{\sqrt{\left\langle \psi\right|M_{m}^{\dagger}M_{m}\left|\psi\right\rangle }}{% endequation %}</li>

</ul>

עכשיו, אי אפשר סתם לתת קבוצה {% equation %}\left\langle M_{m}\right\rangle {% endequation %} אקראית של אופרטורים ולהגיד שהיא מגדירה מדידה. הכיוון הלוגי הוא הפוך: אם יש לנו מערכת פיזקלית, אז כל מדידה שלה תהיה ניתנת לתיאור בצורה המתמטית הנ"ל, אבל זה לא אומר שכל קבוצת אופרטורים תייצג מדידה של המערכת. בפרט, יש קריטריון פשוט שחייב להתקיים עבור {% equation %}\left\langle M_{m}\right\rangle {% endequation %} אם אנחנו רוצים שיהיה בכלל שמץ של סיכוי שהיא תתאר מדידה חוקית: ההסתברויות צריכות להסתכם ל-1.

בואו ניזכר לרגע איך הסתברות קלאסית עובדת: יש לנו ניסוי אקראי כלשהו שמתבצע ויש לו כמה תוצאות שונות {% equation %}m{% endequation %} שלכל אחת מהן הסתברות {% equation %}p\left(m\right){% endequation %}. אנחנו דורשים ראשית כל שיתקיים {% equation %}0\le p\left(m\right){% endequation %} לכל תוצאה {% equation %}m{% endequation %}, ושנית ש-{% equation %}\sum_{m}p\left(m\right)=1{% endequation %}. כך זה באופן כללי בהסתברות, לא רק בחישוב קוונטי.

עכשיו, במקרה שלנו ההסתברות {% equation %}p\left(m\right){% endequation %} הוגדרה באמצעות מכפלה פנימית, ולכן תכונת ה-{% equation %}0\le p\left(m\right){% endequation %} מתקיימת אוטומטית - זו אחת מהאקסיומות של מכפלה פנימית. מה שעדיין חייבים שיתקיים הוא {% equation %}\sum p\left(m\right)=1{% endequation %}, שמוביל לנוסחה הבאה:

{% equation %}1=\sum_{m}\left\langle \psi\right|M_{m}^{\dagger}M_{m}\left|\psi\right\rangle =\left\langle \psi\right|\left(\sum_{m}M_{m}^{\dagger}M_{m}\right)\left|\psi\right\rangle {% endequation %}

ה"הכנסה של הסכום פנימה" הזו אולי נראית חשודה, אבל תזכרו שכל מה שיש בביטוי {% equation %}\left\langle \psi\right|M_{m}^{\dagger}M_{m}\left|\psi\right\rangle {% endequation %} הוא בסך הכל סדרה של מכפלות של מטריצות. כפל מטריצות הוא דיסטריביוטיבי: בפרט {% equation %}AB+AC=A\left(B+C\right){% endequation %}. זה מוביל אל השוויון שביצעתי למעלה בקלילות ואמשיך לבצע. נקודה שצריך לקחת איתנו הלאה: <strong>אלגברה לינארית זה נחמד ולכן המתמטיקה של חישוב קוונטי יוצאת נחמדה</strong>.

עכשיו, כדי שיתקיים {% equation %}\left\langle \psi\right|\left(\sum_{m}M_{m}^{\dagger}M_{m}\right)\left|\psi\right\rangle =1{% endequation %} אפשר לדרוש ש-{% equation %}\sum_{m}M_{m}^{\dagger}M_{m}=I{% endequation %}. במקרה הזה הסכום יהפוך להיות {% equation %}\left\langle \psi|\psi\right\rangle {% endequation %} ששווה 1 כי {% equation %}\left|\psi\right\rangle {% endequation %} מלכתחילה היה איבר מנורמה 1. אז {% equation %}\sum_{m}M_{m}^{\dagger}M_{m}=I{% endequation %} היא הדרישה שתהיה לי מאופרטורי מדידה.

<h2>הטלות</h2>

אחרי שהגדרתי מדידה בצורה סופר-אבסטרקטית, הדבר ההגיוני לעשות הוא לתת דוגמא - בפרט, להראות איך המדידה ה"פשוטה" שהצגתי בהתחלה היא מקרה פרטי של המושג הכללי. אני רוצה לעשות בדיוק את זה, אבל כדי שאוכל לעשות את זה בצורה נחמדה אני רוצה להכניס עוד סימון אחד, שמאפשר לנו לתאר <strong>אופרטורים</strong> בצורה שמתאימה לשיטת הסימון של ה-bra ket.

נתחיל עם מה שאנחנו מכירים מאלגברה לינארית "רגילה". נניח שיש לי שני וקטורים, {% equation %}v=\left(\begin{array}{c} a_{1}\\ b_{1} \end{array}\right){% endequation %} ו-{% equation %}u=\left(\begin{array}{c} a_{2}\\ b_{2} \end{array}\right){% endequation %}. אם אני אסתכל על המכפלה {% equation %}u^{\dagger}v{% endequation %} אני אקבל <strong>מכפלה פנימית</strong>. אבל אני יכול לכפול אותם בסדר ההפוך ולקבל את מה שנקרא <strong>מכפלה חיצונית</strong>:

{% equation %}vu^{\dagger}=\left(\begin{array}{c} a_{1}\\ b_{1} \end{array}\right)\cdot\left(\overline{a_{2}}\ \overline{b_{2}}\right)=\left(\begin{array}{cc} a_{1}\overline{a_{2}} & a_{1}\overline{b_{2}}\\ b_{1}\overline{a_{2}} & b_{1}\overline{b_{2}} \end{array}\right){% endequation %}

זה נובע מחוקי כפל המטריצות הבסיסיים. אם אני כבר בשוונג, שימו לב לכך שה<strong>עקבה</strong> של המכפלה החיצונית שווה למכפלה הפנימית: {% equation %}\text{tr}\left(vu^{\dagger}\right)=u^{\dagger}v{% endequation %}, אבל לא אשתמש בזה הפעם.

עכשיו, איך זה נראה בסימונים של bra ו-ket? התשובה היא ש<strong>יותר נחמד</strong>: אם {% equation %}\left|\psi_{1}\right\rangle ,\left|\psi_{2}\right\rangle {% endequation %} הם שני הוקטורים שלי, אז המכפלה החיצונית שלהם היא {% equation %}\left|\psi_{1}\right\rangle \left\langle \psi_{2}\right|{% endequation %}. למה זה נחמד? כי זה מרמז לי מה קורה כשאני לוקח את האופרטור הזה ו<strong>מפעיל</strong> אותו. בואו ניקח {% equation %}\left|\varphi\right\rangle {% endequation %} תמים כלשהו. אם ניקח את המכפלה החיצונית ונפעיל עליו, נקבל {% equation %}\left|\psi_{1}\right\rangle \left\langle \psi_{2}\right|\cdot\left|\varphi\right\rangle {% endequation %} על פי חוקי כפל המטריצות הרגילים. אבל מה זה {% equation %}\left\langle \psi_{2}\right|\cdot\left|\varphi\right\rangle {% endequation %}? זו בסך הכל המכפלה הפנימית {% equation %}\left\langle \psi_{2}|\varphi\right\rangle {% endequation %} שיוצאת סקלר. אם כן, מה שנקבל בסופו של דבר הוא את הסקלר {% equation %}\left\langle \psi_{2}|\varphi\right\rangle {% endequation %} שמוכפל בוקטור {% equation %}\left|\psi_{1}\right\rangle {% endequation %}.

זה מלמד אותנו מה בעצם האופרטור {% equation %}\left|\psi_{1}\right\rangle \left\langle \psi_{2}\right|{% endequation %} עושה: הוא מחליף את הקלט שלו במשהו שנפרש על ידי {% equation %}\left|\psi_{1}\right\rangle {% endequation %} לבדו, כשהמקדם של {% equation %}\left|\psi_{1}\right\rangle {% endequation %} נקבע על פי המכפלה הפנימית של הקלט עם {% equation %}\left\langle \psi_{2}\right|{% endequation %}. מקרה פשוט במיוחד של זה מתרחש כאשר {% equation %}\left|\psi_{1}\right\rangle =\left|\psi_{2}\right\rangle {% endequation %}; במקרה הזה האופרטור {% equation %}\left|\psi_{1}\right\rangle \left\langle \psi_{1}\right|{% endequation %} הוא פשוט <strong>הטלה</strong> על המרחב שנפרש בידי {% equation %}\left|\psi_{1}\right\rangle {% endequation %}.

עכשיו אפשר לחזור למדידה המקורית שהצגתי. מה שקורה שם הוא שהאופרטורים הם {% equation %}M_{1}=\left|0\right\rangle \left\langle 0\right|{% endequation %} ו-{% equation %}M_{-1}=\left|1\right\rangle \left\langle 1\right|{% endequation %}. קל לראות את זה: בואו ניקח {% equation %}\left|\psi\right\rangle =\alpha\left|0\right\rangle +\beta\left|1\right\rangle {% endequation %} ועכשיו נפעיל עליו את {% equation %}\left|0\right\rangle \left\langle 0\right|{% endequation %}: נקבל

{% equation %}\left|0\right\rangle \left\langle 0\right|\left|\psi\right\rangle =\left[\alpha\left\langle 0|0\right\rangle +\beta\left\langle 0|1\right\rangle \right]\left|0\right\rangle =\alpha\left|0\right\rangle {% endequation %}

כי {% equation %}\left\langle 0|0\right\rangle =1{% endequation %} ו-{% equation %}\left\langle 0|1\right\rangle =0{% endequation %} (זו המשמעות של כך ש-{% equation %}\left|0\right\rangle ,\left|1\right\rangle {% endequation %} הוא בסיס אורתונורמלי).

באופן דומה, {% equation %}\left|1\right\rangle \left\langle 1\right|\left|\psi\right\rangle =\beta\left|1\right\rangle {% endequation %}.

עכשיו אפשר להסיק ש-{% equation %}p\left(1\right)=\left\langle 0\right|\alpha^{\dagger}\alpha\left|0\right\rangle =\left|\alpha\right|^{2}{% endequation %} ובדומה {% equation %}p\left(-1\right)=\left|\beta\right|^{2}{% endequation %}, ואלו אכן ההסתברויות שהיו קיימות בהגדרה המקורית שנתתי. לבסוף, אם התוצאה 1 עלתה בגורל, אז מעבירים את המערכת למצב {% equation %}\frac{\alpha\left|0\right\rangle }{\sqrt{\left|\alpha\right|^{2}}}=\frac{\alpha}{\left|\alpha\right|}\left|0\right\rangle {% endequation %} ובדומה אם 1 עלה בגורל המערכת תעבור למצב {% equation %}\frac{\beta}{\left|\beta\right|}\left|1\right\rangle {% endequation %}. שימו לב שזה <strong>שונה</strong> ממה שאמרתי קודם - קודם אמרתי שהמערכת תעבור <strong>בדיוק</strong> למצבים {% equation %}\left|0\right\rangle {% endequation %} ו-{% equation %}\left|1\right\rangle {% endequation %} וכאן זה מתרחש רק אם {% equation %}\alpha,\beta{% endequation %} הם ממשיים חיוביים; אבל כאמור, שני מצבים קוונטיים שנבדלים זה מזה בכפל בקבוע נחשבים זהים, כך שההבדל הזה לא באמת משנה משהו.

<h2>מדידות פרוייקטיביות</h2>

אחרי שהצגנו את האופן הכללי שבו אני מגדיר מדידה, אני רוצה להצטמצם טיפה ולדבר על תת-קבוצה של מדידות שמוגדרות בצורה שהיא נחמדה במיוחד: מספיק לי לתת מעט מידע כדי לקבל את קבוצת האופרטורים תוך כדי שמובטח לי שהתנאי {% equation %}\sum_{m}M_{m}^{\dagger}M_{m}=I{% endequation %} מתקיים אוטומטית וכל האופרטורים הם הטלות פשוטות.

כדי להבין איך זה הולך, צריך להכניס לתמונה עוד חתיכה של אלגברה לינארית: מטריצות הרמיטיות ומשפט הפירוק הספקטרלי.

ראשית, מטריצה (או טרנספורמציה, או אופרטור; אני לא אבדיל בין המושגים) {% equation %}A{% endequation %} היא <strong>הרמיטית</strong> אם {% equation %}A^{\dagger}=A{% endequation %}. מטריצות הרמיטיות הן דבר נחמד באופן כללי, ובפרט בשני אספקטים שרלוונטיים לי כאן: 

הראשון, <strong>הערכים העצמיים</strong> של מטריצה הרמיטית {% equation %}A{% endequation %} הם מספרים ממשיים (לעומת מטריצה כללית מעל {% equation %}\mathbb{C}{% endequation %} שהערכים העצמיים שלה יכולים להיות מספרים מרוכבים כלליים).

השני, למטריצה הרמיטית יש <strong>פירוק ספקטרלי</strong>. זה אומר שהיא לא סתם לכסינה - היא לכסינה בצורה מאוד נחמדה. יש למרחב שעליו היא פועלת <strong>בסיס אורתונורמלי</strong> של וקטורים עצמיים שלה, ונובע מכך שאפשר לכתוב {% equation %}A=\sum_{\lambda}\lambda P_{\lambda}{% endequation %} כאשר האינדקס {% equation %}\lambda{% endequation %} רץ על הערכים העצמיים של {% equation %}A{% endequation %} ו-{% equation %}P_{\lambda}{% endequation %} היא הטלה אורתוגונלית למרחב העצמי של {% equation %}A{% endequation %} שמתאים לערך העצמי {% equation %}\lambda{% endequation %}. 

עכשיו אפשר להסביר מה זו מדידה פרוייקטיבית: בהינתן אופרטור הרמיטי {% equation %}M{% endequation %}, האופרטור {% equation %}M{% endequation %} הזה מגדיר, כפי שכבר ראינו, קבוצה של אופרטורי הטלה {% equation %}\left\{ P_{\lambda}\right\} {% endequation %}. הרעיון הוא שהקבוצה הזו מגדירה לנו מדידה במובן שראינו קודם, כאשר התוצאות האפשריות של המדידה הן הערכים העצמיים {% equation %}\lambda{% endequation %} הללו. כדי להבין למה התנאי {% equation %}\sum_{\lambda}P_{\lambda}^{\dagger}P_{\lambda}=I{% endequation %} מתקיים במקרה הזה צריך להיזכר בתכונות של הטלות אורתוגונליות שלא אוכיח כאן: הן הרמיטיות, ולכן {% equation %}P_{\lambda}^{\dagger}=P_{\lambda}{% endequation %}; הן הטלות, כלומר {% equation %}P_{\lambda}^{2}=P_{\lambda}{% endequation %}; ומתקיים {% equation %}\sum_{\lambda}P_{\lambda}=I{% endequation %}. אם כן, האופרטור {% equation %}M{% endequation %} לבדו נתן לנו קבוצת אופרטורים שמגדירה מדידה - מדידה שהתוצאות שלה הן בדיוק הספקטרום של {% equation %}M{% endequation %}.

מכיוון שזה מבלבל נורא בואו נראה איך זה עובד עבור המטריצה {% equation %}Z{% endequation %} שהצגתי קודם שבמפתיע (!) היא הרמיטית:

כזכור, {% equation %}Z=\left(\begin{array}{cc} 1 & 0\\ 0 & -1 \end{array}\right){% endequation %}. קל לראות ש-{% equation %}\left|0\right\rangle {% endequation %} הוא וקטור עצמי שלה עם הערך העצמי 1 ואילו {% equation %}\left|1\right\rangle {% endequation %} הוא וקטור עצמי שלה עם הערך העצמי {% equation %}-1{% endequation %}. מעניין איך אפשר לגלות כזה דבר! אולי בגלל ש-{% equation %}Z{% endequation %} היא בעצמה כבר בצורה אלכסונית? לא... בטח הייתה תחבולה כלשהי מעורבת בכך! מכל מקום, גם אם רואים את זה עדיין אולי לא ברור איך כותבים את ההטלות {% equation %}P_{1}{% endequation %} ו-{% equation %}P_{-1}{% endequation %} הרלוונטיות. כאן אפשר לנצל את העובדה ש-{% equation %}\left|0\right\rangle ,\left|1\right\rangle {% endequation %} הם <strong>בסיס אורתונורמלי</strong> למרחב כולו, ולכן אם {% equation %}\left|\psi\right\rangle {% endequation %} הוא וקטור כלשהו אז אנחנו יודעים איך נראים המקדמים שלו בצירוף הלינארי של {% equation %}\left|0\right\rangle ,\left|1\right\rangle {% endequation %} שנותן אותו - זה מה שקראתי לו קודם <strong>מקדמי פורייה</strong>: {% equation %}\left|\psi\right\rangle =\left\langle 0|\psi\right\rangle \left|0\right\rangle +\left\langle 1|\psi\right\rangle \left|1\right\rangle {% endequation %}.

ההטלה של {% equation %}\left|\psi\right\rangle {% endequation %} על תת-המרחב שפורש {% equation %}\left|0\right\rangle {% endequation %} פשוט מוחקת את הרכיב של {% equation %}\left|1\right\rangle {% endequation %} בצירוף הלינארי הזה, כלומר זו הפונקציה {% equation %}\left|\psi\right\rangle \mapsto\left\langle 0|\psi\right\rangle \left|0\right\rangle {% endequation %} שהיא בסך הכל האופרטור {% equation %}\left|0\right\rangle \left\langle 0\right|{% endequation %}. שהוא גם המטריצה {% equation %}\left(\begin{array}{cc} 1 & 0\\ 0 & 0 \end{array}\right){% endequation %} באופן דומה, ההטלה על המרחב העצמי של {% equation %}-1{% endequation %} היא פשוט {% equation %}\left|1\right\rangle \left\langle 1\right|{% endequation %} ולכן הלכסון הספקטרלי של {% equation %}Z{% endequation %} הוא פשוט {% equation %}Z=\left(+1\right)\left|0\right\rangle \left\langle 0\right|+\left(-1\right)\left|1\right\rangle \left\langle 1\right|{% endequation %}.

קיבלנו, אם כן, את אותה קבוצה של אופרטורי מדידה שהצגתי קודם בתור הפורמליזם של מדידה "רגילה": {% equation %}M_{1}=\left|0\right\rangle \left\langle 0\right|\text{ו}-M_{-1}=\left|1\right\rangle \left\langle 1\right|{% endequation %}. למדידה הזו קוראים לפעמים "מדידה בבסיס {% equation %}Z{% endequation %}" בגלל השימוש באופרטור {% equation %}Z{% endequation %} בתור מה ש"מייצר" לנו את אופרטורי המדידה.

בשלב הזה קופצת לראש שאלה שנראית מתבקשת: אנחנו מבינים מה המשמעות של הפעלת ההטלות שהסקנו מ-{% equation %}Z{% endequation %} על הקיוביט {% equation %}\left|\psi\right\rangle {% endequation %}. אבל מה המשמעות של הפעלת {% equation %}Z{% endequation %} עצמה על {% equation %}\left|\psi\right\rangle {% endequation %}? ובאופן כללי, אם אופרטור {% equation %}M{% endequation %} מגדיר לנו מדידה פרוייקטיבית, מה המשמעות של הפעלת {% equation %}M{% endequation %} עצמו על הקיוביט? ובכן, מכיוון שבאופן כללי {% equation %}M=\sum_{\lambda}\lambda P_{\lambda}{% endequation %} אז אפשר לעשות את התעלול הבא:

{% equation %}\left\langle \psi\right|M\left|\psi\right\rangle =\sum_{\lambda}\lambda\left\langle \psi\right|P_{\lambda}\left|\psi\right\rangle =\sum_{\lambda}\lambda p\left(\lambda\right){% endequation %}

מה יש לנו כאן? <strong>סכום משוקלל</strong> שבו כל ערך עצמי {% equation %}\lambda{% endequation %} מוכפל בהסתברות שבה אותו {% equation %}\lambda{% endequation %} יכול להתקבל כתוצאה מהמדידה של {% equation %}\left|\psi\right\rangle {% endequation %}. לסכום משוקלל הסתברותי כזה יש שם: <strong>תוחלת</strong>. בהתאם לכך, לערך המספרי {% equation %}\left\langle \psi\right|M\left|\psi\right\rangle {% endequation %} הזה יש שם - <strong>ערך התצפית</strong> של האופרטור {% equation %}M{% endequation %} על {% equation %}\left|\psi\right\rangle {% endequation %}. לא ארחיב על זה יותר כרגע.

<h2>דוגמאות אחרונות ופרידה</h2>

לסיום בואו נראה עוד שתי דוגמאות - וכפי שאני מניח שברור, אלו לא דוגמאות אקראיות אלא אבני הבניין העיקריות שאני עוד צריך כדי להשלים את סיפור ריבוע הקסם שממנו הגיעה המוטיבציה הראשונית שלי.

הדוגמא הראשונה היא {% equation %}X=\left(\begin{array}{cc} 0 & 1\\ 1 & 0 \end{array}\right){% endequation %}. כאן כבר יותר טריקי לגלות את הערכים והוקטורים העצמיים, אבל זה תרגיל סטנדרטי באלגברה לינארית אז אני פשוט אגלה את הפתרון. הערכים העצמיים הם <strong>שוב</strong> {% equation %}+1{% endequation %} ו-{% equation %}-1{% endequation %} והוקטורים העצמיים הם מצבים שכבר נתתי להם סימון מיוחד קודם: {% equation %}\left|+\right\rangle =\frac{\left|0\right\rangle +\left|1\right\rangle }{\sqrt{2}}{% endequation %} ו-{% equation %}\left|-\right\rangle =\frac{\left|0\right\rangle -\left|1\right\rangle }{\sqrt{2}}{% endequation %} . בדיקה זריזה תראה לכם ש-{% equation %}\sigma_{x}\left|0\right\rangle =\left|1\right\rangle {% endequation %} ו-{% equation %}\sigma_{x}\left|1\right\rangle =\left|0\right\rangle {% endequation %} ולכן {% equation %}\left|+\right\rangle {% endequation %} הוא הוקטור העצמי שמתאים ל-{% equation %}+1{% endequation %} ואילו {% equation %}\left|-\right\rangle {% endequation %} הוא הוקטור העצמי המתאים ל-{% equation %}-1{% endequation %} ולכן הפירוק הספקטרלי הוא {% equation %}X=\left(+1\right)\left|+\right\rangle \left\langle +\right|+\left(-1\right)\left|-\right\rangle \left\langle -\right|{% endequation %}.

הנה נקודה נחמדה שכדאי להתייחס אליה כאן. נניח שאנחנו רוצים לבצע מדידה בבסיס {% equation %}X{% endequation %}, אבל התקן הניסוי שלנו תומך רק בביצוע מדידות בבסיס {% equation %}Z{% endequation %}. מה עושים? בואו נזכור את האופרטור {% equation %}H{% endequation %} שראינו קודם; הוא מקיים {% equation %}H\left|+\right\rangle =\left|0\right\rangle {% endequation %} ו-{% equation %}H\left|-\right\rangle =\left|1\right\rangle {% endequation %} ולכן אם {% equation %}\left|\psi\right\rangle =\alpha\left|+\right\rangle +\beta\left|-\right\rangle {% endequation %} אז {% equation %}H\left|\psi\right\rangle =\alpha\left|0\right\rangle +\beta\left|1\right\rangle {% endequation %} ולכן מדידת {% equation %}H\left|\psi\right\rangle {% endequation %} בבסיס {% equation %}Z{% endequation %} תיתן את אותה התפלגות תוצאות כמו מדידת {% equation %}\left|\psi\right\rangle {% endequation %} בבסיס {% equation %}X{% endequation %}.

לבסוף, הדוגמא האחרונה היא {% equation %}Y=\left(\begin{array}{cc} 0 & -i\\ i & 0 \end{array}\right){% endequation %}. גם פה אני לא חושב שזו תהיה הפתעה לגלות שהערכים העצמיים הם {% equation %}+1{% endequation %} ו-{% equation %}-1{% endequation %} ואפשר לבדוק בקלות שהוקטורים העצמיים הם {% equation %}\frac{i\left|0\right\rangle -\left|1\right\rangle }{\sqrt{2}}{% endequation %} ו-{% equation %}\frac{\left|0\right\rangle -i\left|1\right\rangle }{\sqrt{2}}{% endequation %}. כמקודם, אפשר לשאול איך אפשר למדוד בבסיס {% equation %}Y{% endequation %} אם כל מה שיש לנו הוא מדידה בבסיס {% equation %}Z{% endequation %}, והתשובה דומה - קודם כל נפעיל אופרטורים על {% equation %}\left|\psi\right\rangle {% endequation %} ואז נמדוד בבסיס {% equation %}Z{% endequation %} ונקבל אותה התפלגות הסתברויות כמו שמדידה בבסיס {% equation %}Y{% endequation %} הייתה מניבה. 

זה אומר שאני רוצה איכשהו להעביר את {% equation %}\frac{i\left|0\right\rangle -\left|1\right\rangle }{\sqrt{2}}{% endequation %} אל {% equation %}\left|0\right\rangle {% endequation %}. איך? אם אני אעביר את {% equation %}\frac{i\left|0\right\rangle -\left|1\right\rangle }{\sqrt{2}}{% endequation %} אל {% equation %}i\frac{\left|0\right\rangle +\left|1\right\rangle }{\sqrt{2}}{% endequation %} כל מה שיישאר אחר כך הוא להפעיל {% equation %}H{% endequation %}. בשביל זה אני צריך טרנספורמציה {% equation %}A{% endequation %} שמבצעת את הפעולה הבאה:

{% equation %}A\left|0\right\rangle =\left|0\right\rangle {% endequation %}

{% equation %}A\left|1\right\rangle =-i\left|1\right\rangle {% endequation %}

שימו לב לכך ש-{% equation %}A{% endequation %} תעביר את {% equation %}\frac{\left|0\right\rangle -i\left|1\right\rangle }{\sqrt{2}}{% endequation %} אל {% equation %}\frac{\left|0\right\rangle -\left|1\right\rangle }{\sqrt{2}}{% endequation %} ואחרי {% equation %}H{% endequation %} נגיע אל {% equation %}\left|1\right\rangle {% endequation %} כך שזה מסתדר לנו יפה. רק נשאר לתת שם ל-{% equation %}A{% endequation %} הזו. השם הסטנדרטי הוא דווקא לטרנספורמציה טיפה שונה:

{% equation %}S=\left(\begin{array}{cc} 1 & 0\\ 0 & i \end{array}\right){% endequation %}

שדי מזכירה את {% equation %}Z{% endequation %}, פרט לכך שהיא כופלת ב-{% equation %}i{% endequation %} ולא ב-{% equation %}-1{% endequation %}. למעשה, {% equation %}S{% endequation %} היא פשוט ה"שורש" של {% equation %}Z{% endequation %} במובן זה ש-{% equation %}S^{2}=Z{% endequation %}. כעת, {% equation %}S^{\dagger}=\left(\begin{array}{cc} 1 & 0\\ 0 & -i \end{array}\right){% endequation %} היא הטרנספורמציה שנזקקתי לה.

אם כן, סיימנו להבין איך "עובד" קיוביט יחיד מבחינה מתמטית. כדי להשלים את התמונה נצטרך להבין איך "עובדים" שני קיוביטים ביחד, מה שידרוש הכנסת מתמטיקה חדשה לתמונה - ומשם נמשיך באינדוקציה. 