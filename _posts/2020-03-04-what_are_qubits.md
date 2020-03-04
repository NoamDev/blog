---
title: "חישוב קוונטי - מה זה קיוביטים ומה עושים איתם?"
layout: post
categories:
  - פיזיקה
  - תורת הסיבוכיות
tags:
  - חישוב קוונטי
---


<h2>מבוא</h2>

<a href="https://gadial.net/2020/02/28/what_is_a_qubit/">בפוסט הקודם דיברתי על מה זה קיוביט</a>. הפעם אני רוצה לדבר על מה זה קיוביטים. ברבים. כי ברגע שיש לנו יותר מקיוביט אחד במערכת, האקשן האמיתי מתחיל.

כמו במקרה של קיוביט בודד, כדאי להתחיל את הסיפור מסקירת מה שקורה בחישוב קלאסי, שם יחידת המידה הבסיסית היא ביטים. כשיש לנו יותר מביט בודד, נהוג לאגד אותם לקבוצה; הקבוצה הנפוצה והשימושית ביותר היא מה שנקרא <strong>בייט</strong> (byte), שהוא קבוצה של שמונה ביטים יחד. איכשהו יצא שבייט, ולא ביט, הוא יחידת המידה הבסיסית שלנו לאינפורמציה - אנחנו מדברים על דיסקים קשיחים של טרה-בייטים ועל זכרון פנימי של ג'יגה-בייטים של מחשב במקום לדבר ברמת הביט. הדבר נובע בעיקר מסיבות היסטוריות; היום יש קבוצות אחרות שרלוונטיות לא פחות (למשל, המעבדים בימינו הם של 64-ביט; לא חשוב מה המשמעות המדויקת של זה, אלא שקיבוץ של 64 ביטים יחד הפך להיות רלוונטי).

את התוכן של בייט אפשר לתאר בתור סדרה של שמונה אפסים ואחדים, למשל 01001101. אפשר לחשוב על כל סדרה כזו כאילו היא מייצגת מספר בתחום שבין {% equation %}0{% endequation %} ל-{% equation %}255{% endequation %} (הבייט שכתבתי הוא המספר 77). למה דווקא התחום הזה? כי בתחום הזה כלולים 256 ערכים, ו-{% equation %}256=2^{8}{% endequation %} - מספר הערכים השונים האפשריים בבייט הוא מכפלה של מספר הערכים השונים האפשריים (2) בביט זה בזה, כשמספר הפעמים שמבצעים את הכפל הוא כמספר הביטים שמשתתפים בבייט (8).

קיוביט בודד, כזכור, היה ב<strong>סופרפוזיציה</strong> של שני ערכי הבסיס של ביטים. סימנתי אותו בצורה הבאה: {% equation %}\left|\psi\right\rangle =\alpha\left|0\right\rangle +\beta\left|1\right\rangle {% endequation %}, כאשר הדרישה על המספרים המרוכבים {% equation %}\alpha,\beta{% endequation %} היא שמתקיים {% equation %}\left|\alpha\right|^{2}+\left|\beta\right|^{2}=1{% endequation %}. אותו הדבר בדיוק קורה עבור קבוצה של קיוביטים: המערכת הקוונטית שכוללת אותם נמצאת במצב שהוא סופרפוזיציה של כל מצבי הבסיס האפשריים; כלומר, אם היו לנו שמונה קיוביטים היו לנו 256 מצבי בסיס אפשריים והמצב הקוונטי של המערכת היה צירוף לינארי של כולם. כדי לשמור את העניינים פשוטים בואו נדבר רק על מערכת של שני קיוביטים: אז מצבי הבסיס שלה הם דברים כמו {% equation %}\left|0\right\rangle \left|1\right\rangle {% endequation %}, וכדי לשמור על הסימון נחמד, במקום לכתוב {% equation %}\left|0\right\rangle \left|1\right\rangle {% endequation %} אני אכתוב {% equation %}\left|01\right\rangle {% endequation %}.

אם כן, מערכת של שני קיוביטים נמצאת בסופרפוזיציה מהצורה {% equation %}\left|\psi\right\rangle =\alpha_{00}\left|00\right\rangle +\alpha_{01}\left|01\right\rangle +\alpha_{10}\left|10\right\rangle +\alpha_{11}\left|11\right\rangle {% endequation %} כאשר המקדמים מקיימים את אותה משוואה כמו קודם: {% equation %}\sum_{x\in\left\{ 0,1\right\} ^{2}}\left|\alpha_{x}\right|^{2}=1{% endequation %}. שימו לב לאופן שבו אני מקצר עניינים על ידי סימן הסכימה ואינדקס סכימה שרץ על כל הערכים האפשריים של סדרות מאורך 2 של 0 ו-1; אני אמשיך להשתמש בקיצורים הללו בהמשך.

מה שאנחנו רואים פה הוא שכמות האינפורמציה שאנחנו זקוקים לה כדי לייצג מצב קוונטי <strong>גדלה אקספוננציאלית</strong> כתלות במספר הקיוביטים. כדי לייצג את הערך של בייט, אנחנו צריכים שמונה ביטים; כדי לייצר את הערך של "קיובייט", כלומר של מערכת בת שמונה קיוביטים, אנחנו צריכים 256 מספרים מרוכבים (לכאורה כבר מספר מרוכב בודד מכיל אינסוף מידע, אבל בפועל אפשר לדבר על מספר מרוכב כפי שהוא מיוצג במחשב, עם דיוק סופי בהחלט). זו הסיבה הבסיסית שבגללה חישוב קוונטי הוא משהו שקשה למחשב רגיל לעשות: אם נרצה לבצע סימולציה של חישוב קוונטי, יהיה לנו <strong>קל מאוד</strong> לכתוב קוד שעושה את זה; חישוב קוונטי הוא בסך הכל כפל של מטריצות בוקטור ומדי פעם איזו הגרלה של אחת מבין כמה אפשרויות, כשמבצעים מדידה. הקושי פה טמון בכך שהוקטור (והמטריצות שכופלים בו) עשוי להיות <strong>מאוד גדול</strong>; כבר ב-50 קיוביטים זו הופכת למשימה שרק מחשבי-על יכולים להתמודד איתה, ועל דברים כמו סימולציה של מחשב קוונטי עם 70 קיוביטים לא מדברים בכלל. זה כנראה לעולם לא יהיה אפשרי. לא על ידי שמירה מפורשת של הוקטור.

האם קיימות דרכים <strong>אחרות</strong>, יעילות יותר, לבצע סימולציה של חישוב קוונטי גם עבור מספר קיוביטים גבוה? התשובה היא שבאופן כללי לא, אבל ב<strong>מקרים פרטיים</strong> מסויימים אפשר לעשות דברים ממש מגניבים. אני אזכיר את אחד מהמקרים הללו בחטף בהמשך, אם לא אשכח להוסיף אותו לפוסט הזה.

<h2>מכפלות טנזוריות של קיוביטים</h2>

בואו נעבור לפורמליזם המתמטי. הכלי החדש שאנחנו משתמשים בו פה נקרא <strong>מכפלה טנזורית</strong> של מרחבים וקטוריים. <a href="https://gadial.net/2014/06/10/vector_space_tensor_product/">יש לי פוסט על זה</a>, אבל הנה תזכורת רלוונטית: אם {% equation %}V,W{% endequation %} הם שני מרחבים וקטוריים עם בסיסים {% equation %}\left\{ e_{1},\ldots,e_{n}\right\} {% endequation %} ו-{% equation %}\left\{ f_{1},\ldots,f_{m}\right\} {% endequation %} בהתאמה, אז המכפלה הטנזורית {% equation %}V\otimes W{% endequation %} היא מרחב וקטורי שנפרש על ידי קבוצת האיברים {% equation %}\left\{ e_{i}\otimes f_{j}\ |\ 1\le i\le n,1\le j\le m\right\} {% endequation %}. אנחנו חושבים על {% equation %}e_{i}\otimes f_{j}{% endequation %} כעל "אטומים" שיוצרים את המרחב ולא ניתנים לחלוקה בעצמם, וכל איבר אחר במרחב הוא צירוף לינארי שלהם. זו הגדרה שהיא מאוד תלויית-בסיס, אבל אפשר גם לוותר על הגדרות תלויות בסיס לגמרי; זה מה שקורה בפוסט ההוא שלי, אבל הפעם אני לא צריך להיכנס לזה.

במקרה של קיוביטים, המרחבים שאני כופל הם כולם בעלי הבסיס {% equation %}\left\{ \left|0\right\rangle ,\left|1\right\rangle \right\} {% endequation %} ולכן מכפלה של שני מרחבים נפרשת על ידי איברים כמו {% equation %}\left|0\right\rangle \otimes\left|1\right\rangle {% endequation %}, ואת הסימון הזה כבר קיצרתי ל-{% equation %}\left|01\right\rangle {% endequation %} אבל מבחינה פורמלית הכתיב הנכון הוא {% equation %}\left|0\right\rangle \otimes\left|1\right\rangle {% endequation %}. נקודה רלוונטית שבלבלה אותי כשהתחלתי ללמוד על מכפלות טנזוריות היא שאמנם בהחלט אפשר לקחת איבר {% equation %}v\in V{% endequation %} ו-{% equation %}w\in W{% endequation %} ואז לדבר על האיבר {% equation %}v\otimes w\in V\otimes W{% endequation %}, אבל <strong>לא כל האיברים</strong> של {% equation %}V\otimes W{% endequation %} ניתנים לייצוג כזה. הדבר הזה חשוב שבעתיים כשמדברים על קיוביטים, אבל גם יש לנו דרך לקבל אינטואיציה "פיזיקלית" להגיון שמאחורי זה, אז בואו ניכנס לעובי הקורה.

ראשית, בואו ניקח את המצב הקוונטי של קיוביט יחיד בסופרפוזיציה אחידה: {% equation %}\left|+\right\rangle =\frac{\left|0\right\rangle +\left|1\right\rangle }{\sqrt{2}}{% endequation %}. אם אני רוצה להבין מה המשמעות של {% equation %}\left|+\right\rangle \otimes\left|+\right\rangle {% endequation %} אני משתמש בתכונת <strong>הבילינאריות</strong> של האופרטור {% equation %}\otimes{% endequation %} - תכונה שאפשר לתאר כך:

<ol> <li>{% equation %}\left(a+b\right)\otimes c=a\otimes c+b\otimes c{% endequation %}</li>


<li>{% equation %}a\otimes\left(b+c\right)=a\otimes b+a\otimes c{% endequation %}</li>


<li>{% equation %}\lambda a\otimes b=\lambda\left(a\otimes b\right){% endequation %}</li>


<li>{% equation %}a\otimes\lambda b=\lambda\left(a\otimes b\right){% endequation %}</li>

</ol>

עם התכונות הללו, קל לראות ש-{% equation %}\left|+\right\rangle \otimes\left|+\right\rangle {% endequation %} יוצא פשוט {% equation %}\frac{\left|00\right\rangle +\left|01\right\rangle +\left|10\right\rangle +\left|11\right\rangle }{2}{% endequation %} - המצב שהוא הסופרפוזיציה האחידה על ארבעת ערכי הבסיס האפשריים. וזה, אני מניח, לא מפתיע. האינטואיציה פה הוא שכל אחד מהקיוביטים {% equation %}\left|+\right\rangle {% endequation %} חי לו בעצמו בסבבה בסופרפוזיציה שלו, ואז פתאום קירבנו את המערכות של שני הקיוביטים זו לזו והתחלנו לחשוב עליהן בתור מערכת אחת, ואז המערכת האחת הזו מורכבת משתי הסופרפוזיציות הללו ביחד. כמו להטיל שתי קוביות - אפשר להסתכל על כל אחת בנפרד, ולראות התפלגות אחידה בין 1 ל-6; ואפשר להסתכל על שתיהן ביחד ולראות התפלגות מעניינת יותר בין 2 ל-12, אבל כזו שבנויה פשוט מהתפלגות אחידה על כל הזוגות {% equation %}\left(x,y\right){% endequation %} כך ש-{% equation %}1\le x,y\le6{% endequation %} (ואגלה לכם סוד? לא באמת צריך לקרב את המערכות של שני הקיוביטים זו לזו; הן יכולות להיות בקצוות הרחוקים של היקום והמתמטיקה תהיה זהה).

ועכשיו למשהו שונה לגמרי - המצב {% equation %}\frac{\left|00\right\rangle +\left|11\right\rangle }{\sqrt{2}}{% endequation %}. בדיקה זריזה תראה שזה מצב קוונטי חוקי על שני קיוביטים - הנורמה שלו היא 1 והוא צירוף לינארי של אברי בסיס של המכפלה הטנזורית. יש לו גם שם: מצב <strong>בל </strong>(וגם אפשר לקרוא לו "זוג EPR" אבל נעזוב את זה). האם אפשר לכתוב את מצב בל הזה בתור {% equation %}\left|\psi_{1}\right\rangle \otimes\left|\psi_{2}\right\rangle {% endequation %} עבור שני מצבים קוונטיים {% equation %}\left|\psi_{1}\right\rangle ,\left|\psi_{2}\right\rangle {% endequation %} של קיוביט יחיד כל אחד? התשובה היא ש<strong>אי אפשר</strong> בשום פנים ואופן לעשות את זה. המשמעות הפיזיקלית היא ש-{% equation %}\frac{\left|00\right\rangle +\left|11\right\rangle }{\sqrt{2}}{% endequation %} מתאר לנו מערכת פיזיקלית של שני קיוביטים שפשוט לא ניתן לחשוב עליה בתור שתי מערכות נפרדות של קיוביטים, שכל אחת מהן חיה לה בסבבה בלי קשר לשניה; הן קשורות אחרת לשניה בצורה בלתי פריקה. כפי שאומרים הפיזיקאים, הן <strong>שזורות</strong>. השזירה הזו של קיוביטים - היכולת לבנות מהם מצבים קוונטיים שלא פריקים למכפלה של קיוביטים בודדים - היא <strong>חלק מהותי</strong> מהכוח של חישוב קוונטי.

למה אי אפשר לקבל את {% equation %}\frac{\left|00\right\rangle +\left|11\right\rangle }{\sqrt{2}}{% endequation %} כמכפלה טנזורית בודדת של שני איברים? ובכן, אין כאן משהו מעניין מעבר לאלגברה לינארית פשוטה. ניקח שני קיוביטים כלליים, {% equation %}\left|\psi_{1}\right\rangle =\alpha_{1}\left|0\right\rangle +\beta_{1}\left|1\right\rangle {% endequation %} ו-{% equation %}\left|\psi_{2}\right\rangle =\alpha_{2}\left|0\right\rangle +\beta_{2}\left|1\right\rangle {% endequation %}, נכפול אותם טנזורית ונקבל את המצב

{% equation %}\alpha_{1}\alpha_{2}\left|00\right\rangle +\beta_{1}\alpha_{2}\left|10\right\rangle +\alpha_{1}\beta_{2}\left|01\right\rangle +\beta_{1}\beta_{2}\left|11\right\rangle {% endequation %}

את המקדמים של {% equation %}\left|10\right\rangle {% endequation %} ו-{% equation %}\left|01\right\rangle {% endequation %} צריך להשוות לאפס, כך שאנחנו מקבלים

{% equation %}\beta_{1}\alpha_{2}=0{% endequation %}

{% equation %}\alpha_{1}\beta_{2}=0{% endequation %}

עכשיו, אנחנו חיים מעל המספרים המרוכבים. במספרים המרוכבים, {% equation %}\beta_{1}\alpha_{2}=0{% endequation %} גורר שבהכרח או {% equation %}\beta_{1}=0{% endequation %} או {% equation %}\alpha_{2}=0{% endequation %}. אם {% equation %}\beta_{1}=0{% endequation %} אז גם המקדם {% equation %}\beta_{1}\beta_{2}{% endequation %} של {% equation %}\left|11\right\rangle {% endequation %} יהיה אפס. אם {% equation %}\alpha_{2}=0{% endequation %} אז המקדם של {% equation %}\left|00\right\rangle {% endequation %} יהיה אפס. שום דבר מסובך.

אוקיי, אז ראינו ש-{% equation %}\frac{\left|00\right\rangle +\left|11\right\rangle }{\sqrt{2}}{% endequation %} הוא מצב קוונטי "מעניין". הנה לכם שאלה - איך בכלל אפשר להגיע למצב הקוונטי המעניין הזה אם, נאמר, המערכת שלנו מתחילה במצב {% equation %}\left|00\right\rangle {% endequation %}? או, טוב ששאלתם. בואו נדבר עכשיו על הפעולות שאפשר לבצע על מערכות של קיוביטים.

<h2>מכפלות טנזוריות של מטריצות ושערים קוונטיים</h2>

תיארתי מכפלה טנזורית בתור משהו אבסטרקטי למדי, שלוקח שני וקטורי בסיס {% equation %}e_{i},f_{j}{% endequation %} ויוצר מהם איזה איבר חדש {% equation %}e_{i}\otimes f_{j}{% endequation %} שהוא משהו מסוג שלא נראה קודם ואין לנו איך להבין את הבפנוכו שלו. אבל למעשה, אפשר גם לתת תיאור "חישובי" מאוד קונקרטי למכפלות טנזוריות אם במקום לדבר על מרחבים וקטוריים ואופרטורים עליהם אפשר לעבור לדבר על הייצוג החביב עלינו באלגברה לינארית לוקטורים ואופרטורים: מטריצות.

כזכור, אם יש לי מרחב וקטור {% equation %}V{% endequation %} ובסיס {% equation %}B=\left\{ b_{1},\ldots,b_{n}\right\} {% endequation %} עבורו, אז לכל וקטור {% equation %}v\in V{% endequation %} מתאימה מטריצה מסדר {% equation %}n\times1{% endequation %}, מה שנקרא <strong>וקטור עמודה</strong>, של <strong>הקואורדינטות</strong> של {% equation %}v{% endequation %} לפי הבסיס {% equation %}B{% endequation %}. למה הכוונה? מהתכונות של בסיס, ידוע שקיים ל-{% equation %}v{% endequation %} ייצוג <strong>יחיד </strong>מהצורה {% equation %}v=\sum\lambda_{i}b_{i}{% endequation %} והוקטור שמותאם ל-{% equation %}v{% endequation %} בצורה הזו הוא פשוט {% equation %}\left[v\right]_{B}\triangleq\left(\begin{array}{c} \lambda_{1}\\ \vdots\\ \lambda_{n} \end{array}\right){% endequation %}. באופן דומה, אם יש לנו אופרטור לינארי {% equation %}T:V\to V{% endequation %} אז יש לו <strong>מטריצה מייצגת</strong> {% equation %}\left[T\right]_{B}{% endequation %} שהעמודות שלה הן בדיוק וקטורי הקואורדינטות של {% equation %}T\left(b_{1}\right),\ldots,T\left(b_{n}\right){% endequation %}. היופי בוקטורי קואורדינטות ומטריצות מייצגות הוא שמתקיים

{% equation %}\left[T\left(v\right)\right]_{B}=\left[T\right]_{B}\cdot\left[v\right]_{B}{% endequation %}

כלומר, ביצענו מעין רדוקציה של הפעלת הטרנספורמציה הכללית {% equation %}T{% endequation %} על האיבר {% equation %}v{% endequation %} לפעולה הקונקרטית של חישוב כפל מטריצה בוקטור.

בפוסט הקודם על קיוביטים נקטתי בגישה הזו בלי למצמץ; את {% equation %}\left|\psi\right\rangle =\alpha\left|0\right\rangle +\beta\left|1\right\rangle {% endequation %} תיארתי בחופשיות גם בתור {% equation %}\left(\begin{array}{c} \alpha\\ \beta \end{array}\right){% endequation %} ואופרטורים כמו {% equation %}H{% endequation %} תיארתי בחופשיות עם מטריצות, למשל {% equation %}H=\frac{1}{\sqrt{2}}\left(\begin{array}{cc} 1 & 1\\ 1 & -1 \end{array}\right){% endequation %}. אבל איך התיאור הזה מוכלל כשמדברים על מכפלות טנזוריות? כשיש לנו שני קיוביטים אז הבסיס החדש הוא {% equation %}\left|00\right\rangle ,\left|01\right\rangle ,\left|10\right\rangle ,\left|11\right\rangle {% endequation %} אבל האם זה באמת הסדר "הנכון" בין אברי הבסיס? מה הגישה המסודרת לעניין?

ובכן, ביטוי המפתח הטכני לסיפור הזה הוא מה שנקרא <strong>מכפלת קרונקר</strong>, או סתם "מכפלה טנזורית" של מטריצות. אם {% equation %}A,B{% endequation %} הן מטריצות (לאו דווקא מאותו סדר או ריבועיות!) כך ש-{% equation %}A{% endequation %} היא מסדר {% equation %}n\times m{% endequation %}, אז מכפלת קרונקר שלהן מוגדרת בתור

{% equation %}A\otimes B=\left(\begin{array}{ccc} a_{11}B & \ldots & a_{1m}B\\ \vdots &  & \vdots\\ a_{n1}B & \ldots & a_{nm}B \end{array}\right){% endequation %}

כלומר, {% equation %}A\times B{% endequation %} היא <strong>מטריצת בלוקים</strong> שבנויה מהרבה בלוקים של המטריצה {% equation %}B{% endequation %}, כשבכל פעם המטריצה {% equation %}B{% endequation %} הזו מוכפלת בכניסה אחרת של {% equation %}A{% endequation %}. ואני אתן דוגמאות קונקרטיות פשוטות: {% equation %}X\otimes H{% endequation %} ו-{% equation %}Z\otimes H{% endequation %}, כאשר {% equation %}X=\left(\begin{array}{cc} 0 & 1\\ 1 & 0 \end{array}\right){% endequation %} ו-{% equation %}Z=\left(\begin{array}{cc} 1 & 0\\ 0 & -1 \end{array}\right){% endequation %} הן עוד מטריצות שראינו בפוסט הקודם.

{% equation %}X\otimes H=\frac{1}{\sqrt{2}}\left(\begin{array}{cccc} 0 & 0 & 1 & 1\\ 0 & 0 & 1 & -1\\ 1 & 1 & 0 & 0\\ 1 & -1 & 0 & 0 \end{array}\right){% endequation %}

{% equation %}Z\otimes H=\frac{1}{\sqrt{2}}\left(\begin{array}{cccc} 1 & 1 & 0 & 0\\ 1 & -1 & 0 & 0\\ 0 & 0 & -1 & -1\\ 0 & 0 & -1 & 1 \end{array}\right){% endequation %}

עוד נקודה שכדאי לתת עליה את הדעת היא שהמכפלה הטנזורית הזו היא בוודאי לא קומוטטיבית:

{% equation %}X\otimes Z=\left(\begin{array}{cccc} 0 & 0 & 1 & 0\\ 0 & 0 & 0 & -1\\ 1 & 0 & 0 & 0\\ 0 & -1 & 0 & 0 \end{array}\right)\ne\left(\begin{array}{cccc} 0 & 1 & 0 & 0\\ 1 & 0 & 0 & 0\\ 0 & 0 & 0 & -1\\ 0 & 0 & -1 & 0 \end{array}\right)=Z\otimes X{% endequation %}

בואו נעשה את זה עכשיו עבור קיוביטים. ניקח את הקיוביט {% equation %}\left|\psi_{1}\right\rangle =\alpha_{1}\left|0\right\rangle +\beta_{1}\left|1\right\rangle {% endequation %} והקיוביט {% equation %}\left|\psi_{2}\right\rangle =\alpha_{2}\left|0\right\rangle +\beta_{2}\left|1\right\rangle {% endequation %}. הם מיוצגים על ידי הוקטור {% equation %}\left(\begin{array}{c} \alpha_{1}\\ \beta_{1} \end{array}\right),\left(\begin{array}{c} \alpha_{2}\\ \beta_{2} \end{array}\right){% endequation %}, וכעת

{% equation %}\left(\begin{array}{c} \alpha_{1}\\ \beta_{1} \end{array}\right)\otimes\left(\begin{array}{c} \alpha_{2}\\ \beta_{2} \end{array}\right)=\left(\begin{array}{c} \alpha_{1}\alpha_{2}\\ \alpha_{1}\beta_{2}\\ \beta_{1}\alpha_{2}\\ \beta_{1}\beta_{2} \end{array}\right){% endequation %}

בפרט, אנחנו רואים ש-{% equation %}\left|00\right\rangle {% endequation %} מתאים לוקטור {% equation %}\left(\begin{array}{c} 1\\ 0\\ 0\\ 0 \end{array}\right){% endequation %}, {% equation %}\left|01\right\rangle {% endequation %} מתאים לוקטור {% equation %}\left(\begin{array}{c} 0\\ 1\\ 0\\ 0 \end{array}\right){% endequation %}, {% equation %}\left|10\right\rangle {% endequation %} מתאים לוקטור {% equation %}\left(\begin{array}{c} 0\\ 0\\ 1\\ 0 \end{array}\right){% endequation %} ו-{% equation %}\left|11\right\rangle {% endequation %} מתאים לוקטור {% equation %}\left(\begin{array}{c} 0\\ 0\\ 0\\ 1 \end{array}\right){% endequation %}. זה בעצם מלמד אותנו מה הסדר ה"נכון" של הבסיס: הוא צריך להיות {% equation %}\left\{ \left|00\right\rangle ,\left|01\right\rangle ,\left|10\right\rangle ,\left|11\right\rangle \right\} {% endequation %}.

בואו נכליל את זה עכשיו: אם {% equation %}V,W{% endequation %} הם שני מרחבים וקטוריים עם בסיסים {% equation %}E=\left\{ e_{1},\ldots,e_{n}\right\} {% endequation %} ו-{% equation %}F=\left\{ f_{1},\ldots,f_{m}\right\} {% endequation %}, אז אני אסמן את הבסיס למכפלה הטנזורית שלהם בתור {% equation %}E\otimes F\triangleq\left\{ e_{1}\otimes f_{1},e_{1}\otimes f_{2},\ldots,e_{1}\otimes f_{m},\ldots,e_{n}\otimes f_{m}\right\} {% endequation %} ועכשיו אני יכול לכתוב נוסחה שאומרת, מילולית, שמכפלת קרונקר משחקת יפה עם מכפלה טנזורית בכל הנוגע לטרנספורמציות שפועלות על מרחבים שהם מכפלות טנזוריות.

פורמלית, אם {% equation %}T:V\to V{% endequation %} ו-{% equation %}S:W\to W{% endequation %} הם שני אופרטורים ו-{% equation %}v\in V,w\in W{% endequation %} הם וקטורים, אז הנוסחה שלי אומרת ש-

{% equation %}\left[T\left(v\right)\otimes S\left(w\right)\right]_{E\otimes F}=\left(\left[T\right]_{E}\otimes\left[S\right]_{F}\right)\cdot\left(\left[v\right]_{E}\otimes\left[w\right]_{F}\right){% endequation %}

השורה התחתונה של הסיפור היא שאם אנחנו רוצים לבנות אופרטור שפועל על שני קיוביטים מתוך אופרטורים שפועלים על קיוביט יחיד, אנחנו צריכים לבצע מכפלת קרונקר של המטריצות שלהן. בואו נראה דוגמא אחת של זה כדי שהעניין יישב לנו בנוחות.

נניח שאני מסתכל על הקיוביט {% equation %}\left|\psi_{1}\right\rangle =\left|0\right\rangle {% endequation %} והקיוביט הנוסף {% equation %}\left|\psi_{2}\right\rangle =\left|1\right\rangle {% endequation %}. עכשיו אני מתעלל בשניהם, אבל בדרכים אחרות: על {% equation %}\left|\psi_{1}\right\rangle {% endequation %} אני מפעיל את האופרטור {% equation %}X{% endequation %} ומקבל {% equation %}\left|1\right\rangle {% endequation %}; על {% equation %}\left|\psi_{2}\right\rangle {% endequation %} אני מפעיל את האופרטור {% equation %}Z{% endequation %} ומקבל {% equation %}-\left|1\right\rangle {% endequation %} (ששקול ל-{% equation %}\left|1\right\rangle {% endequation %} אבל תזרמו עם הדוגמא, אני מנסה לשמור את הדברים פשוטים). עכשיו, אם אני אסתכל על שני הקיוביטים בתור מערכת משולבת, מה קרה פה? התחלתי מהמצב {% equation %}\left|01\right\rangle {% endequation %} וסיימתי במצב {% equation %}-\left|11\right\rangle {% endequation %}. האם הייתי יכול גם לקבל את זה בתור כפל מטריצות?

המכפלה {% equation %}\left|0\right\rangle \otimes\left|1\right\rangle {% endequation %} מיוצגת על ידי הוקטור {% equation %}\left(\begin{array}{c} 0\\ 1\\ 0\\ 0 \end{array}\right){% endequation %} כפי שכבר ראינו, וגם את המטריצה ל-{% equation %}X\otimes Z{% endequation %} כבר ראינו. נכפול אותן:

{% equation %}\left(\begin{array}{cccc} 0 & 0 & 1 & 0\\ 0 & 0 & 0 & -1\\ 1 & 0 & 0 & 0\\ 0 & -1 & 0 & 0 \end{array}\right)\cdot\left(\begin{array}{c} 0\\ 1\\ 0\\ 0 \end{array}\right)=\left(\begin{array}{c} 0\\ 0\\ 0\\ -1 \end{array}\right){% endequation %}

קיבלנו בדיוק את הוקטור עבור {% equation %}-\left|11\right\rangle {% endequation %}. איזה יופי! דברים עובדים!

עכשיו אנחנו מסוגלים להבין איך עובד מה שנקרא "שער קוונטי" ברמת הפורמליזם. שער קוונטי הוא אופרטור שמופעל על כמות ספציפית של קיוביטים - למשל, שער שפועל על קיוביט יחיד, או על שני קיוביטים, וכדומה. כשיש לנו מערכת עם מספר קיוביטים גדול יותר מאלו שהשער פועל עליהם, הרעיון הוא שלוקחים את השער ומבצעים מכפלת קרונקר שלו עם אופרטורי הזהות, {% equation %}I{% endequation %}, על שאר הקיוביטים. למשל, אם יש לנו מערכת בת 4 קיוביטים ואנחנו רוצים להפעיל שער {% equation %}H{% endequation %} על הקיוביט השלישי, אנחנו מפעילים את האופרטור {% equation %}I\otimes I\otimes H\otimes I{% endequation %} על המערכת כולה.

זה מסביר לנו שערים של קיוביט בודד. אבל מה עם שני קיוביטים? או! זו שאלה טובה!

<h2>שערים קוונטיים של שני קיוביטים</h2>

לפני רגע ראינו שער קוונטי שפועל על שני קיוביטים: {% equation %}X\otimes Z{% endequation %}. גם שער שפועל על קיוביט אחד ולא עושה כלום לקיוביט השני, כמו למשל {% equation %}H\otimes I{% endequation %}, הוא משהו שאפשר לחשוב עליו בתור "שער של שני קיוביטים". השאלה המעניינת היא האם יש יותר מכך - והתשובה היא "בוודאי".

שאלתי קודם את השאלה איך אפשר להגיע למצב השזור {% equation %}\frac{\left|00\right\rangle +\left|11\right\rangle }{\sqrt{2}}{% endequation %} אם מתחילים מהמצב {% equation %}\left|00\right\rangle {% endequation %}. התשובה היא שאי אפשר להגיע אליו עם השערים שכבר ראינו: חייבים שער של שני קיוביטים שלא ניתן לתיאור בתור הפעלה של שני שערי קיוביט בודד. הסיבה לכך היא שכפי שראינו, אי אפשר לכתוב את {% equation %}\frac{\left|00\right\rangle +\left|11\right\rangle }{\sqrt{2}}{% endequation %} בתור מכפלה טנזורית של שני קיוביטים. אם היינו מתחילים מהמכפלה הטנזורית {% equation %}\left|00\right\rangle {% endequation %} ומפעילים על כל קיוביט פעולה שאפשר לחשוב עליה במנותק מהקיוביט השני, היינו מקבלים כתוצאה מכפלה טנזורית של שני קיוביטי התוצאה.

אם כן, צריך סוג חדש של שער על שני קיוביטים - כזה שהוא לא מכפלה טנזורית של שני שערים על קיוביט בודד. יש הרבה שערים כאלו, אבל הנה האחד שהוא הנפוץ ביותר: שער {% equation %}\text{CX}{% endequation %}, או Controlled-X או Controlled-Not, איך שלא תרצו לקרוא לו. הרעיון שלו הוא פשוט כשחושבים איך הוא פועל על מצבי בסיס: בהינתן מצב הבסיס {% equation %}\left|0b\right\rangle {% endequation %}, כאשר {% equation %}b\in\left\{ 0,1\right\} {% endequation %}, הוא לא עושה כלום, כלומר מחזיר את {% equation %}\left|0b\right\rangle {% endequation %}; ובהינתן מצב הבסיס {% equation %}\left|1b\right\rangle {% endequation %} הוא מחזיר את {% equation %}\left|1b^{\prime}\right\rangle {% endequation %} כאשר {% equation %}b^{\prime}=1-b{% endequation %}, כלומר הוא הופך את הקיוביט הזה (Not) או אם תרצו - מפעיל עליו שער X. המילה Controlled מגיעה מכך שהביט הראשון "שולט" על השאלה אם להפעיל את X או לא.

ככה זה נראה כשכותבים זאת במפורש:

{% equation %}\text{CX}\left|00\right\rangle =\left|00\right\rangle {% endequation %}

{% equation %}\text{CX}\left|01\right\rangle =\left|01\right\rangle {% endequation %}

{% equation %}\text{CX}\left|10\right\rangle =\left|11\right\rangle {% endequation %}

{% equation %}\text{CX}\left|11\right\rangle =\left|10\right\rangle {% endequation %}

וככה זה נראה בתור מטריצה:

{% equation %}\text{CX}=\left(\begin{array}{cccc} 1 & 0 & 0 & 0\\ 0 & 1 & 0 & 0\\ 0 & 0 & 0 & 1\\ 0 & 0 & 1 & 0 \end{array}\right){% endequation %}

קחו רגע כדי לשכנע את עצמכם שאי אפשר לכתוב את המטריצה הזו בתור מכפלת קרונקר של שתי מטריצות {% equation %}2\times2{% endequation %}. זה לא קשה; בסך הכל צריך לשים לב לכך שיש ב-{% equation %}\text{CX}{% endequation %} הזו שני בלוקים שבוודאי לא יכולים להתקבל מתוך כפל בסקלרים שונים של אותה מטריצה.

כעת, איך משתמשים ב-{% equation %}\text{CX}{% endequation %} כדי לקבל את מצב בל, {% equation %}\frac{\left|00\right\rangle +\left|11\right\rangle }{\sqrt{2}}{% endequation %}, מתוך {% equation %}\left|00\right\rangle {% endequation %}? זה פשוט למדי. קודם כל מפעילים {% equation %}H{% endequation %} על הקיוביט הראשון, ומקבלים את המצב {% equation %}\frac{\left|00\right\rangle +\left|10\right\rangle }{\sqrt{2}}{% endequation %}; אחר כך מפעילים את {% equation %}\text{CX}{% endequation %} על המצב הזה. מקבלים

{% equation %}\text{CX}\left(\frac{\left|00\right\rangle +\left|10\right\rangle }{\sqrt{2}}\right)=\frac{\text{CX}\left(\left|00\right\rangle \right)+\text{CX}\left(\left|10\right\rangle \right)}{\sqrt{2}}=\frac{\left|00\right\rangle +\left|11\right\rangle }{\sqrt{2}}{% endequation %}

וזה סוגר את הפינה הזו - עכשיו אנחנו מבינים איך כותבים שערים קוונטיים באופן כללי על שני קיוביטים ואפשר להתקדם לשלב הבא... חוץ מבעיה פרקטית קטנה. אמרתי קודם שאני יכול להציג כל שער קוונטי בתור מטריצה גדולה שמוכפלת בוקטור הגדול שמייצג את כל המערכת הקוונטית. אבל זה היה כשכל האופרטורים שלי פעלו על קיוביט בודד ולכן היה אפשר לקבל את המטריצה הגדולה על ידי מכפלות קרונקר של כולן. עם CX אי אפשר לעשות את זה. איך אפשר, למשל, לקבל את CX שמופעלת על מערכת בת <strong>שלושה</strong> קיוביטים כאשר, נניח, קיוביט הבקרה הוא דווקא קיוביט מס' 3 ואילו הקיוביט שהופכים הוא קיוביט מס' 1?

ובכן, הנה דרך מועילה להסתכל על זה מבחינה חישובית. שער CX (ושערים דומים לו שגם הם מהצורה של קיוביט בקרה + קיוביט שעליו פועל שער של קיוביט בודד) הוא אמנם לא מכפלת קרונקר אבל הוא <strong>סכום</strong> של שתי מכפלות קרונקר פשוטות. בואו ניזכר שאני משתמש בסימון {% equation %}\left|0\right\rangle \left\langle 0\right|{% endequation %} כדי לתאר את האופרטור {% equation %}\left(\begin{array}{cc} 1 & 0\\ 0 & 0 \end{array}\right){% endequation %} ובסימון {% equation %}\left|1\right\rangle \left\langle 1\right|{% endequation %} כדי לתאר את האופרטור {% equation %}\left(\begin{array}{cc} 0 & 0\\ 0 & 1 \end{array}\right){% endequation %}. עכשיו קל לראות שמתקיים

{% equation %}\text{CX}=\left|0\right\rangle \left\langle 0\right|\otimes I+\left|1\right\rangle \left\langle 1\right|\otimes X{% endequation %}

עם הביטוי <strong>הזה</strong> אפשר לשחק איך שרוצים כשבאים לשלב אותו במערכת קוונטית גדולה יותר. למשל, בדוגמא שלי, של מערכת של שלושה קיוביטים שבה אני משתמש בקיוביט 3 בתור בקרה ובקיוביט 1 בתור היעד, אופרטור ה-CX ה"מורחב" שלי יהיה

{% equation %}\underset{q_{1}}{\underbrace{I}}\otimes\underset{q_{2}}{\underbrace{I}}\otimes\underset{q_{3}}{\underbrace{\left|0\right\rangle \left\langle 0\right|}}+\underset{q_{1}}{\underbrace{X}}\otimes\underset{q_{2}}{\underbrace{I}}\otimes\underset{q_{3}}{\underbrace{\left|1\right\rangle \left\langle 1\right|}}{% endequation %}

אפשר, כמובן, להתלונן שאני משתמש כאן בתעלול שעובד יפה לשער מהצורה "בקרה/פעולה" כמו CX אבל לא יעבוד לשערים קוונטיים <strong>כלליים</strong> של שני קיוביטים, וזה גם נכון; המתמטיקה של המקרה הכי כללי היא נטולת פתרונות אלגנטיים, אבל מצד שני אנחנו גם לא זקוקים לה על פי רוב ולכן לא אכנס אליה כאן.

<h2>מדידות במערכת של שני קיוביטים</h2>

מה שנשאר לנו לעשות כדי להבין איך מערכות של כמה קיוביטים עובדות הוא להבין איך מתבצעת <strong>מדידה</strong> בהן. למרבה המזל, בעצם כבר ראינו את ההגדרה עבורן בפעם הקודמת - דיברתי אז על מערכת של קיוביט בודד, אבל ההגדרה תקפה לכל מערכת. מדידה, כזכור, הוגדרה באמצעות סדרה של אופרטורים {% equation %}\left\{ M_{m}\right\} {% endequation %} כך ש-{% equation %}\sum M_{m}^{\dagger}M_{m}=I{% endequation %}. ה-{% equation %}m{% endequation %}-ים הקטנים היו התוצאות המספריות האפשריות של המדידה, וביצוע של מדידה על המצב {% equation %}\left|\psi\right\rangle {% endequation %} כלל שני חלקים:

<ol> <li>בחירת התוצאה המספרית {% equation %}m{% endequation %} בהסתברות {% equation %}p\left(m\right)=\left\langle \psi\right|M_{m}^{\dagger}M_{m}\left|\psi\right\rangle {% endequation %}</li>


<li>בהינתן שהתוצאה {% equation %}m{% endequation %} נבחרה, העברה של המערכת הקוונטית למצב {% equation %}\frac{M_{m}\left|\psi\right\rangle }{\sqrt{\left\langle \psi\right|M_{m}^{\dagger}M_{m}\left|\psi\right\rangle }}{% endequation %}</li>

</ol>

ההגדרה הזו עובדת כמו שהיא גם כשהמערכת הקוונטית שלנו מורכבת מיותר מקיוביט אחד, כל עוד האופרטורים {% equation %}M_{m}{% endequation %} מקיימים את התנאי שנדרש מהם.

עוד דבר שראינו בפעם הקודמת היה <strong>מדידה פרוייקטיבית</strong>: זו הייתה דרך "לייצר" סדרת אופרטורים ותוצאות מדידה אפשריות מתוך אופרטור הרמיטי בודד; ערכי המדידה היו <strong>הערכים העצמיים</strong> של האופרטור הבודד הזה, וה-{% equation %}M_{m}{% endequation %}-ים היו <strong>ההטלות</strong> על המרחבים העצמיים שלו (וסימנתי אותן ב-{% equation %}P_{\lambda}{% endequation %} במקום ב-{% equation %}M_{m}{% endequation %}).

גם הרעיון הזה תקף גם כאן, אבל בואו נראה אותו בפעולה בכמה דוגמאות כדי שנרגיש שאנחנו מבינים אותו.

ראשית, אם בקיוביט בודד מדידה "רגילה" הייתה מה שקראתי לו "מדידה בבסיס {% equation %}Z{% endequation %}" כי לקחנו את האופרטור ההרמיטי {% equation %}Z=\left(\begin{array}{cc} 1 & 0\\ 0 & -1 \end{array}\right){% endequation %} והסקנו ממנו את אופרטורי המדידה {% equation %}\left|0\right\rangle \left\langle 0\right|{% endequation %} ו-{% equation %}\left|1\right\rangle \left\langle 1\right|{% endequation %}, מה קורה אם מנסים להסתכל על {% equation %}Z\otimes Z{% endequation %} בתור אופרטור מדידה עבור שני קיוביטים? זה עובד, אבל אולי לא לגמרי בצורה שאנחנו מצפים לה. לכל {% equation %}b_{1},b_{2}\in\left\{ 0,1\right\} {% endequation %}

כל {% equation %}\left|b_{1}b_{2}\right\rangle {% endequation %} הוא וקטור עצמי של {% equation %}Z\otimes Z{% endequation %}, עם הערך העצמי שהוא <strong>המכפלה</strong> של הערכים העצמיים שמתאימים ל-{% equation %}\left|b_{1}\right\rangle {% endequation %} ו-{% equation %}\left|b_{2}\right\rangle {% endequation %}. אני אדגים: 

{% equation %}Z\otimes Z\left(\left|0\right\rangle \otimes\left|1\right\rangle \right)=Z\left|0\right\rangle \otimes Z\left|1\right\rangle =\left(+1\cdot\left|0\right\rangle \right)\otimes\left(-1\cdot\left|1\right\rangle \right){% endequation %}

{% equation %}=\left(+1\right)\cdot\left(-1\right)\left|0\right\rangle \otimes\left|1\right\rangle {% endequation %}

זה נובע מכך שבאופן כללי במכפלה טנזורית יש לנו לינאריות: {% equation %}\left(\lambda_{1}v_{1}\right)\otimes\left(\lambda_{2}v_{2}\right)=\left(\lambda_{1}\lambda_{2}\right)\left(v_{1}\otimes v_{2}\right){% endequation %}. 

כלומר, למרות שיש לנו שני קיוביטים, לאופרטור המדידה {% equation %}Z\otimes Z{% endequation %} עדיין יש רק שני ערכי תצפית אפשריים שונים: {% equation %}+1{% endequation %} ו-{% equation %}-1{% endequation %}. אינטואיטיבית היינו רוצים <strong>ארבעה</strong> ערכי תצפית שונים, כדי לתפוס את ערכי הבסיס {% equation %}\left|00\right\rangle ,\left|01\right\rangle ,\left|10\right\rangle ,\left|11\right\rangle {% endequation %} שמתאימים לחשיבה שלנו "בגישה הנאיבית" על מה זו מדידה.

אחדד: מדידה "בגישה הנאיבית" היא הדבר הבא: בהינתן המצב הקוונטי {% equation %}\left|\psi\right\rangle =\alpha_{00}\left|00\right\rangle +\alpha_{01}\left|01\right\rangle +\alpha_{10}\left|10\right\rangle +\alpha_{11}\left|11\right\rangle {% endequation %}, ומצב בסיס {% equation %}\left|b_{1}b_{2}\right\rangle {% endequation %} עם {% equation %}b_{1},b_{2}\in\left\{ 0,1\right\} {% endequation %} המדידה מחזירה את התוצאה המספרית שמתאימה ל-{% equation %}\left|b_{1}b_{2}\right\rangle {% endequation %} בהסתברות {% equation %}\left|\alpha_{b_{1}b_{2}}\right|^{2}{% endequation %} ומעבירה את המערכת למצב {% equation %}\left|b_{1}b_{2}\right\rangle {% endequation %}.

השאלה, אם כן, היא מה "התוצאה המספרית שמתאימה ל-{% equation %}\left|b_{1}b_{2}\right\rangle {% endequation %}". אם אנחנו רוצים תוצאה מספרית שונה לכל אחד מארבעת הערכים, אפשר לנקוט בתעלול: להשתמש, למשל, באופרטור מדידה כמו {% equation %}2Z\otimes I+I\otimes Z{% endequation %}. כאן {% equation %}\left|00\right\rangle {% endequation %} הוא וקטור עצמי של הערך העצמי 3, {% equation %}\left|01\right\rangle {% endequation %} של הערך העצמי 1, {% equation %}\left|10\right\rangle {% endequation %} של הערך העצמי {% equation %}-1{% endequation %} ו-{% equation %}\left|11\right\rangle {% endequation %} של הערך העצמי {% equation %}-3{% endequation %}.

כל זה קצת מסורבל, אבל בחישוב קוונטי ממילא אנחנו בדרך כלל לא מודדים את כל הקיוביטים בבת אחת, אלא קיוביט אחד בכל פעם. כשיש לנו מערכת של שני קיוביטים, אז מדידה "רגילה" של הקיוביט הראשון מתבצעת באמצעות האופרטור {% equation %}Z\otimes I{% endequation %} ומדידה של הקיוביט השני מתבצעת באמצעות {% equation %}I\otimes Z{% endequation %}.

כדי לקבל תחושה של מה בעצם קורה במדידה "חלקית" שכזו, בואו נסתכל שוב על מצב קוונטי כללי: {% equation %}\left|\psi\right\rangle =\alpha_{00}\left|00\right\rangle +\alpha_{01}\left|01\right\rangle +\alpha_{10}\left|10\right\rangle +\alpha_{11}\left|11\right\rangle {% endequation %}. הוקטורים העצמיים של {% equation %}Z\otimes I{% endequation %} הם {% equation %}\left|00\right\rangle {% endequation %} ו-{% equation %}\left|01\right\rangle {% endequation %} עבור הערך העצמי {% equation %}+1{% endequation %}, ו-{% equation %}\left|10\right\rangle ,\left|11\right\rangle {% endequation %} עבור הערך העצמי {% equation %}-1{% endequation %}. אופרטורי ההטלה הם {% equation %}\left|00\right\rangle \left\langle 00\right|+\left|01\right\rangle \left\langle 01\right|{% endequation %} ו-{% equation %}\left|10\right\rangle \left\langle 10\right|+\left|11\right\rangle \left\langle 11\right|{% endequation %}. לכן נקבל את הדבר הבא:

<ul> <li>בהסתברות {% equation %}\left|\alpha_{00}\right|^{2}+\left|\alpha_{01}\right|^{2}{% endequation %} תוצאת המדידה היא 1{% equation %}+{% endequation %} והמערכת עוברת למצב {% equation %}\frac{\alpha_{00}\left|00\right\rangle +\alpha_{01}\left|01\right\rangle }{\sqrt{\left|\alpha_{00}\right|^{2}+\left|\alpha_{01}\right|^{2}}}{% endequation %}</li>


<li>בהסתברות {% equation %}\left|\alpha_{10}\right|^{2}+\left|\alpha_{11}\right|^{2}{% endequation %} תוצאת המדידה היא 1{% equation %}-{% endequation %} והמערכת עוברת למצב {% equation %}\frac{\alpha_{00}\left|10\right\rangle +\alpha_{01}\left|11\right\rangle }{\sqrt{\left|\alpha_{10}\right|^{2}+\left|\alpha_{11}\right|^{2}}}{% endequation %}</li>

</ul>

זה כבר יותר מסובך ממדידה של קיוביט יחיד - אבל לא באמת כל כך נורא, החשבון הוא יחסית פשוט.

לסיום, אני רוצה שנראה מה קורה אם מודדים שני מצבים קוונטיים שונים על פי הקיוביט הראשון. המצב הראשון יהיה המצב של הסופרפוזיציה "האחידה": {% equation %}\frac{\left|00\right\rangle +\left|01\right\rangle +\left|10\right\rangle +\left|11\right\rangle }{2}{% endequation %}. המקדם של כל מצב בסופרפוזיציה הוא {% equation %}\frac{1}{2}{% endequation %} ולכן אם נבצע את החישוב שהצגתי לפני רגע, נראה שבהסתברות {% equation %}\frac{1}{2}{% endequation %} תוצאת המדידה תהיה {% equation %}+1{% endequation %} והמצב הקוונטי יעבור לסופרפוזיציה {% equation %}\frac{\left|00\right\rangle +\left|01\right\rangle }{\sqrt{2}}{% endequation %} ובהסתברות {% equation %}\frac{1}{2}{% endequation %} התוצאה תהיה {% equation %}-1{% endequation %} והמצב הקוונטי יעבור לסופרפוזיציה {% equation %}\frac{\left|10\right\rangle +\left|11\right\rangle }{\sqrt{2}}{% endequation %}.

שימו לב שהמצב {% equation %}\frac{\left|00\right\rangle +\left|01\right\rangle }{\sqrt{2}}{% endequation %} הוא לא מצב שזור; הוא בעצם שווה ל-{% equation %}\left|0\right\rangle \otimes\frac{\left|0\right\rangle +\left|1\right\rangle }{\sqrt{2}}{% endequation %}. כלומר, אפשר לחשוב על מה שהגענו אליו בתור שתי מערכות נפרדות של קיוביטים, שבהן הקיוביט הראשון נמדד וערכו התקבע על {% equation %}\left|0\right\rangle {% endequation %}, והקיוביט השני נותר בסופרפוזיציה שבה היה קודם וכלום לא השתנה מבחינתו. זה אכן מה שהגיוני לצפות לו פיזיקלית.

עכשיו בואו נעבור למצב השזור {% equation %}\frac{\left|00\right\rangle +\left|11\right\rangle }{\sqrt{2}}{% endequation %} שבו המצב שונה בתכלית. כאן עדיין נקבל {% equation %}+1{% endequation %} בהסתברות {% equation %}\frac{1}{2}{% endequation %}, אבל אז המערכת תעבור למצב הקוונטי {% equation %}\left|00\right\rangle {% endequation %}; ובהסתברות {% equation %}\frac{1}{2}{% endequation %} נקבל {% equation %}-1{% endequation %} והמערכת תעבור למצב הקוונטי {% equation %}\left|11\right\rangle {% endequation %}. גם אלו לא מצבים שזורים, כלומר המדידה "השמידה" את השזירות, אבל תראו מה קרה פה - הקיוביט <strong>השני</strong>, זה שלא נמדד, גם כן הוקרס! הסופרפוזיציה שבה הוא היה קודם (ולא הייתה בלתי תלויה בסופרפוזיציה של הקיוביט הראשון) נעלמה! התופעה הספציפית הזו היא-היא הסיבה לכוח ששזירה מוסיפה לחישובים קוונטיים. נסו לזכור את האינטואיציה הזו.

<h2>דברי סיכום ופרידה</h2>

הגענו לשלב שבו אנחנו מבינים פחות או יותר את כל המודל המתמטי שמאחורי חישוב קוונטי. מרחבים וקטוריים, מטריצות, מכפלות טנזוריות, מכפלות פנימיות, לכסון ספקטרלי של אופרטורים הרמיטיים - זה בערך כל מה שיש פה. כל היתר הם דברים נחמדים שנבנים מעל זה. בפרט, עכשיו אנחנו מסוגלים להבין את האופן שבו נפתר "ריבוע הקסם" של פרס ומרמין, אז זה יהיה הדבר הבא שאני אדבר עליו.

אבל אולי כדאי בכל זאת לומר לרגע בצורה מפורשת - מה זה בעצם חישוב קוונטי? הרעיון הוא שלוקחים {% equation %}n{% endequation %}-קיוביטים, ואז מאתחלים איזה שהוא מצב קוונטי - בדרך כלל {% equation %}\left|0^{n}\right\rangle {% endequation %}, ואז מתחילים להפעיל עליו אופרטורים אוניטריים, מה שבדרך כלל אומר שמפעילים אופרטור של "שער קוונטי" שפועל רק על קיוביט או שניים ומורחב לפעול כמו הזהות על שאר הקיוביטים. בסיום של החישוב מבצעים מדידה של כל הקיוביטים ומקבלים מחרוזת של {% equation %}n{% endequation %} ביטים "קלאסיים" שמגיעה מתוך התפלגות כלשהי. על הניסוי הזה אפשר לחזור מספר רב של פעמים כדי לקבל הערכה טובה להתפלגות הזו (למשל, שקיבלנו {% equation %}00{% endequation %} ב-{% equation %}\frac{1}{2}{% endequation %} מהפעמים, ב-{% equation %}\frac{1}{3}{% endequation %} מהן קיבלנו 01 וב-{% equation %}\frac{1}{6}{% endequation %} מהן קיבלנו 11).

בפועל אפשר לבצע מדידות גם <strong>באמצע</strong> החישוב הקוונטי, ואפילו לשנות את המשך החישוב בהתאם לתוצאת המדידה; ולא חייבים למדוד את <strong>כל</strong> הקיוביטים בסוף. אבל זהו בערך.

האם זה גם מה שקורה במציאות? כן ולא. במציאות קשה מאוד כיום לבצע חישובים שכאלו. לאתחל מצב כמו {% equation %}\left|0^{n}\right\rangle {% endequation %}? זה קשה. מה שמקבלים בפועל הוא סופרפוזיציה של מצבים שאנחנו מקווים ש-{% equation %}\left|0^{n}\right\rangle {% endequation %} דומיננטי בהם מספיק. ולהפעיל אופרטור כמו {% equation %}X{% endequation %}? זה קשה, אנחנו מנסים לכייל את המחשבים ללא הרף כדי שהפעולה שהם מבצעים (במחשבים בני זמננו - על פי רוב באמצעות שליחת פולס אלקטרומנגטי בתדירות מתאימה) תהיה <strong>מספיק קרובה</strong> ל-{% equation %}X{% endequation %}. ולמדוד קיוביטים? זה <strong>ממש</strong> קשה מבחינת זה שיש רעשים במדידה. ובנוסף לקשיים הללו יש גם רעשים שמגיעים מבחוץ ויקלקלו את החישוב אפילו אם ננסה פשוט לשמור את המצב {% equation %}\left|0^{n}\right\rangle {% endequation %} ולא נעשה לו כלום. בקיצור, כל התורה היפה הזו של חישוב קוונטי, כשבאים ליישם אותה בעולם האמיתי, חייבת הרחבה מהותית - חייבים לדבר על <strong>רעש</strong> וההשפעות שלו. זה כבר שייך לתחום שנקרא <strong>אינפורמציה קוונטית</strong> והוא יפה ומעניין בפני עצמו אבל אני לא אדחוף אותו לפוסט הזה. אנחנו מקווים שיום אחד נגיע למצב שבו יש לנו <strong>קודים לתיקון שגיאות</strong> בחישוב קוונטי שעובדים בצורה מספיק טובה כדי שאפשר יהיה לדמיין את המחשבים הקוונטיים כאילו הם עובדים במודל היפה והנקי שהצגתי פה שהוא חסין לרעשים; זה מה שקורה בחישוב קלאסי, שבו יש מנגנונים לטיפול ברעשים שמתכנת ממוצע לא צריך לחשוב עליהם ביומיום שלו.

אבל אני לא יכול לסיים ממש בלי להכניס טיזר למשהו מגניב במיוחד שרמזתי עליו עוד בתחילת הפוסט. בואו נסקור לרגע את השערים שראינו עד כה בחישוב קוונטי: שערי {% equation %}X,Y,Z{% endequation %}; שער {% equation %}H{% endequation %}; שער {% equation %}S{% endequation %} ושער {% equation %}S^{\dagger}{% endequation %}; והפעם ראינו גם את השער {% equation %}\text{CX}{% endequation %} וגם על מדידה אפשר לחשוב בתור שער.

ובכן, אם אני עושה חישוב קוונטי שמתבסס רק על השערים הללו, <strong>אפשר לבצע סימולציה שלו במחשב קלאסי בסיבוכיות לינארית</strong>. מה זה אומר בפועל? זה אומר שכל מה שאפשר לעשות במחשב קוונטי עם השערים הללו אפשר לעשות <strong>בקלי קלות</strong> גם במחשב רגיל; רק צריך להשתמש בשיטת סימולציה שהיא שונה לגמרי מגישת ה"נכפול מטריצה בוקטור". התוצאה הזו נקראת "משפט Gottesman--Knill"; הרעיון מאחוריה היא שאפשר לייצג מצבים קוונטיים מסויימים בעזרת <strong>יוצרים של חבורת המייצבים</strong> שלהם (לא חשוב כרגע מה זה אומר...) והרעיון הזה הוא הבסיס לכמה וכמה עניינים לא טריוויאליים בחישוב קוונטי.

זה אומר שכדי להשלים את התמונה אני צריך להוסיף עוד שער כלשהו למשחק - כזה שמאפשר לייצר חישובים מסובכים יותר שהמשפט לא תופס. השער הזה נקרא {% equation %}T{% endequation %}, והוא בסך הכל שער תמים מאוד שמקיים {% equation %}T^{2}=S{% endequation %} (בדומה לאיך ש-{% equation %}S^{2}=Z{% endequation %}). הוא מוגדר בתור {% equation %}T=\left(\begin{array}{cc} 1 & 0\\ 0 & e^{\frac{i\pi}{4}} \end{array}\right){% endequation %}.

עכשיו הידע הבסיסי שלנו שלם, פחות או יותר, ואפשר לגשת לדבר על הדברים המגניבים באמת. 