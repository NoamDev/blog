---
title: "מה זה אומר ש-MIP*=RE? (חלק א': מה זה אומר RE?)"
layout: post
categories:
  - תורת הסיבוכיות
tags:
  - מערכת הוכחה אינטראקטיבית
  - חישוב קוונטי
---

ממש לא מזמן התבשרנו על תוצאה בתורת הסיבוכיות שמנוסחת בפשטות בתור {% equation %}\text{MIP}^{*}=\text{RE}{% endequation %}. התגובה הראשונה שלי לתוצאה הייתה "מה?" והתגובה השניה שלי לתוצאה הייתה "מה?!?!". בפוסט הזה אנסה להסביר מה.

ראשית המאמר עצמו זמין <a href="https://arxiv.org/abs/2001.04383">כאן</a> ואפשר לקרוא אותו. אני לא קראתי אותו מלבד את הפתיחה שלו - הוא כולל 165 עמודים ואין לי סיכוי להבין את הפרטים הטכניים שלו לעומק - אבל אני מקווה שאני מבין מספיק טוב את הרקע כדי להסביר בערך מה המשפט אומר ולמה הוא מעניין. בפשטות, הוא אומר ש<strong>מערכת הוכחה</strong> מסויימת שמתבססת בצורה כלשהי על אפקטים קוונטיים, היא חזקה <strong>בצורה מטורפת ממש</strong> ביחס למערכת הוכחה הדומה לה מאוד שאינה מתבססת על אפקטים קוונטיים. זה משהו שהפתיע קצת את אלו שהכירו את התחום וידעו שהמערכת הזו חזקה בצורה מטורפת; אותי, שבכלל לא ידע על כל זה, זה פשוט הדהים.

אז בואו ננסה להבין מה הולך כאן. לאט.

הפעם אני אסביר מה זו {% equation %}\text{RE}{% endequation %}. <a href="https://gadial.net/2007/09/18/r_and_re/">יש לי פוסט על זה</a> מראשית ימי הבלוג, אבל אני אנסה הפעם להציג את המושג מכיוון קצת שונה, שיעזור לנו גם בהמשך כשנדבר על {% equation %}\text{MIP}^{*}{% endequation %}, כך שאני חושב ששווה לנסות לקרוא גם אם כבר מכירים את {% equation %}\text{RE}{% endequation %}.

בואו נתחיל עם משחק הסודוקו שאני מקווה שמוכר ואהוב על כולנו. או לפחות מוכר.

<img src="{{site.baseurl}}{{site.post_images}}/2020/01/Sudoku.jpg" alt=""/>

הרעיון בסודוקו פשוט יחסית: נתון לוח של {% equation %}9\times9{% endequation %} משבצות שמחולק גם ל-9 תת-לוחות, כל אחד של {% equation %}3\times3{% endequation %}. בלוח מופיעים כל מני מספרים בין 1 ל-9, והמטרה היא להשלים את הלוח כך שבכל משבצת יהיה מספר בין 1 ל-9 ובנוסף לכך בכל שורה, עמודה ותת-לוח כל המספרים שמופיעים יהיו שונים זה מזה. זה משחק פאזלים חביב בפני עצמו, אבל אני אוהב אותו מאוד בעיקר בגלל שהוא נותן לנו דוגמא יפה לבעיה מהסוג שאנחנו אוהבים לדבר עליהן במדעי המחשב התיאורטיים: בעיה ש<strong>קשה לפתור</strong> אבל <strong>קל לוודא</strong>.

בסודוקו המטרה היא למצוא את הפתרון של הלוח, אבל גם אפשר להצטמצם לבעיה פשוטה יותר: נותנים לכם לוח סודוקו - כלומר, לוח {% equation %}9\times9{% endequation %} שהוא כבר מלא חלקית במספרים - ושואלים אתכם אם הוא פתיר או לא. <strong>לא כל לוח ממולא חלקית הוא פתיר</strong>! שאלת "כן/לא" כזו נקראת במדעי המחשב <strong>בעיית הכרעה</strong> וזה מה שאנחנו בדרך כלל מעדיפים לדבר עליו, ולא על <strong>בעיית החיפוש</strong> של למצוא את הפתרון, כי על פי רוב אם יש לנו פתרון נחמד לבעיית ההכרעה אפשר גם לבנות בעזרתו פתרון לבעיית החיפוש. במקרה של סודוקו, למשל: בהינתן לוח תבדקו אם הוא פתיר - אם לא פתיר, אפשר לוותר על הכל. אם כן פתיר, אז פשוט תנסו למלא מספרים במשבצות ובכל פעם כזו תשאלו אם הלוח נשאר פתיר גם אחרי המילוי - אם לא, אתם יודעים שהמהלך האחרון שביצעתם היה שגוי וצריך לנסות אחר. זה יוביל אתכם די מהר לפתרון.

עכשיו, להכריע האם לוח סודוקו הוא פתיר יכול להיות עניין קשה לפעמים. יש היוריסטיקות טובות כדי למצוא פתרון, אבל בלוחות "קשים" יהיה צורך להתחיל לנחש איזה ערכים כדאי לשים במשבצות, ואם הניחוש היה לא מוצלח ייתכן שנצטרך לחזור הרבה אחורה בבדיקה שלנו כדי לתקן את זה, וכן הלאה. אז זו בעיית הכרעה ש<strong>קשה לפתור</strong> לעומת זאת, אם מישהי באה אליכם וטוענת שהיא פתרה את הלוח כבר, קל לה מאוד <strong>להוכיח</strong> לכם את זה: היא פשוט תיתן לכם את הלוח הפתור. אתם תסתכלו על הלוח ותבצעו תהליך של <strong>וידוא</strong> שהלוח באמת חוקי (בכל שורה/עמודה/תת-לוח יש את כל המספרים מ-1 עד 9) ושהוא באמת מרחיב את הלוח שיש לכם (כל מספר שהופיע בלוח שלכם מופיע גם בלוח של הפתרון). זה לוקח מעט זמן יחסית. אם כן, <strong>לודא</strong> שמשהו הוא פתרון של הלוח - זה קל.

כשאני אומר "קשה" ו"קל", למה אני מתכוון? עבורי לפתור סודוקו זה כאב ראש במוח - מרוב דברים לזכור או לרשום בצד, המוח שלי מתפוצץ. אבל עבור מחשב אין הרבה מה לרשום בצד ואין בעיה לזכור דברים - ה"משאב" שהמחשב משקיע הוא <strong>זמן</strong>. זה המשאב המרכזי שעליו מדברים בתורת הסיבוכיות - כמה צעדי חישוב בערך נדרשים בשביל לפתור בעיה.

יש עוד נקודה מהותית בהגדרה של "קל/קשה". אם נסתכל על סודוקו של {% equation %}9\times9{% endequation %}, זו כנראה בעיה פתורה וסגורה כבר בימינו. אפילו במקרים הקשים ביותר, מחשב עם אלגוריתם סביר כנראה יוכל לפתור הכל (אני אומר "כנראה" כי אני מנחש, לא בטוח). מה שמעניין אותנו במדעי המחשב התיאורטיים הוא מה קורה <strong>ככל שמגדילים את הבעיה</strong>. קל להגדיל סודוקו - במקום לשחק אותו על לוח של {% equation %}9\times9{% endequation %}, לשחק אותו על לוח {% equation %}n^{2}\times n^{2}{% endequation %} כללי (סודוקו רגיל הוא המקרה {% equation %}n=3{% endequation %}). אותם אלגוריתם שעובדים בלוח {% equation %}9\times9{% endequation %} יעבדו גם בלוחות גדולים יותר, אבל ייקח להם יותר זמן. השאלה <strong>כמה</strong> יותר זמן. אם נכפיל את גודל הלוח פי 10, האם הזמן יגדל פי 10? פי 100? פי {% equation %}2^{10}{% endequation %}? אפשר לתת פונקציה {% equation %}f\left(n\right){% endequation %} שאומרת בערך מה זמן הריצה כפונקציה של גודל הקלט. אם זמן הריצה הוא בערך פולינום, אז אומרים שהאלגוריתם <strong>יעיל</strong>, ואם הוא גדול יותר מפולינום, נניח {% equation %}2^{n}{% endequation %}, אומרים שהוא <strong>לא יעיל</strong>. אפשר להעלות הרבה השגות לגבי הגישה הזו אבל לא ניכנס לזה כאן - גם לא חייבים להבין עד הסוף את מה שאמרתי פה כדי להבין את ההמשך.

אני רוצה להכניס קצת פורמליזם לתמונה. בעיית הכרעה אני מסמן לרוב באות {% equation %}L{% endequation %}, ואת האלגוריתם שמנסה לפתור אותה אני מסמן ב-{% equation %}M{% endequation %}. ל-{% equation %}M{% endequation %} נותנים קלט {% equation %}x{% endequation %} כלשהו והוא עונה עליו "כן/לא", מה שאסמן ב-{% equation %}M\left(x\right)=\text{T}{% endequation %} ו-{% equation %}M\left(x\right)=\text{F}{% endequation %}. כדי לומר ש-{% equation %}M{% endequation %} <strong>פותר</strong> את בעיית ההכרעה {% equation %}L{% endequation %} אני רוצה שיתקיימו שני דברים שאני קורא להם "שלמות" ו"נאותות":

<ol> <li>(שלמות) אם {% equation %}x\in L{% endequation %} אז {% equation %}M\left(x\right)=\text{T}{% endequation %}.</li>


<li>(נאותות) אם {% equation %}x\notin L{% endequation %} אז {% equation %}M\left(x\right)=\text{F}{% endequation %}.</li>

</ol>

אם יש לנו {% equation %}M{% endequation %} יעיל כזה, אומרים שהבעיה שייך ל-P (האות P היא מהמילה Polynomial)

לעומת זאת, <strong>מוודא</strong> {% equation %}V{% endequation %} הוא משהו שקצת יותר קל לו בחיים: הוא מקבל קלט שהוא <strong>זוג</strong> {% equation %}\left(x,\pi\right){% endequation %}. ה-{% equation %}x{% endequation %} הוא כמו קודם, משהו שצריך לבדוק אם {% equation %}x\in L{% endequation %} או לא. אבל {% equation %}\pi{% endequation %} זו ה"הוכחה" לכך ש-{% equation %}x\in L{% endequation %}. {% equation %}\pi{% endequation %} לא חייב להיות כתוב כמו הוכחה; אין שום דרישה על המבנה של {% equation %}\pi{% endequation %}, אבל כן יש דרישה שהוא לא יהיה ארוך מדי - האורך שלו צריך להיות פולינומי באורך של {% equation %}x{% endequation %} אחרת מוודא שרץ בזמן פולינומי לא יוכל לקרוא את כולו ממילא.

כדי להגיד ש-{% equation %}V{% endequation %} הוא מוודא תקין צריך שיתקיימו שני דברים:

<ol> <li>(שלמות) אם {% equation %}x\in L{% endequation %} אז <strong>קיים</strong> {% equation %}\pi{% endequation %} כך ש-{% equation %}V\left(x,\pi\right)=\text{T}{% endequation %}.</li>


<li>(נאותות) אם {% equation %}x\notin L{% endequation %} אז <strong>לכל</strong>{% equation %}\pi{% endequation %} מתקיים {% equation %}V\left(x,\pi\right)=\text{F}{% endequation %}.</li>

</ol>

במילים אחרות, מוודא טוב הוא זה שמשתכנע <strong>מכל הוכחה נכונה</strong> אבל אם הטענה שגויה, <strong>שום הוכחה שקרית לא תשכנע אותו</strong>.

אם יש מוודא יעיל עבור {% equation %}L{% endequation %} אומרים ש-{% equation %}L{% endequation %} שייכת ל-{% equation %}\text{NP}{% endequation %} (האותיות הללו הן מלשון Nondeterministic Polynomial שמגיעות מניסוח שקול ופחות מעניין של הגדרת המחלקה).

אחת השאלות הפתוחות המעניינות במדעי המחשב היא האם P=NP. האמונה של רובנו היא שזה לא נכון, אבל לא ארחיב על זה כאן. <a href="https://gadial.net/2010/08/15/p_vs_np_overview/">יש לי פוסט בנושא</a>, למעוניינים.

עכשיו, אחרי שסיימנו להבין מה זה קל/קשה ומה זה P ו-NP. אני רוצה <strong>לזרוק את זה לפח לרגע</strong>. מה אם אנחנו לא מגבילים את משאבי החישוב שלנו בכלל? יש לנו רק דרישה אחת ויחידה מהאלגוריתם שלנו, אבל אחת שהיא עדיין משמעותית למדי - <strong>שיעצור מתישהו עם תשובה</strong>. כי אלגוריתמים שלא עוצרים בכלל זה עסק קצת בעייתי מבחינתנו. עכשיו, כזכור, מטרת האלגוריתם היא <strong>לוודא</strong> בעיית הכרעה כלשהי.

ההגדרות נשארות זהות למה שאמרתי קודם. אחזור עליהן כדי לחדד. {% equation %}L{% endequation %} היא בעיית הכרעה כלשהי, {% equation %}x{% endequation %} הוא קלט אליה, {% equation %}\pi{% endequation %} הוא "הוכחה" ו-{% equation %}V{% endequation %} הוא מוודא. אני <strong>משמיט</strong> את הדרישות שהזכרתי קודם על הסיבוכיות: {% equation %}V{% endequation %} לא חייב לרוץ בזמן פולינומי, ו-{% equation %}\pi{% endequation %} לא צריך להיות מוגבל באורכו בשום צורה.

עם ההגדרות הללו, כדי להגיד ש-{% equation %}V{% endequation %} הוא מוודא תקין צריך שיתקיימו שני דברים:

<ol> <li>(שלמות) אם {% equation %}x\in L{% endequation %} אז <strong>קיים</strong> {% equation %}\pi{% endequation %} כך ש-{% equation %}V\left(x,\pi\right)=\text{T}{% endequation %}.</li>


<li>(נאותות) אם {% equation %}x\notin L{% endequation %} אז <strong>לכל</strong> {% equation %}\pi{% endequation %} מתקיים {% equation %}V\left(x,\pi\right)=\text{F}{% endequation %}.</li>

</ol>

אם יש מוודא כזה עבור {% equation %}L{% endequation %} אומרים ש-{% equation %}L{% endequation %} שייכת למחלקה {% equation %}\text{RE}{% endequation %}. כן, זו ה-{% equation %}\text{RE}{% endequation %} שבשוויון {% equation %}\text{MIP}^{*}=\text{RE}{% endequation %}. לא הגדרה כל כך קשה, נכון? הנה הגדרה אלטרנטיבית, שהיא אולי הנפוצה יותר: {% equation %}L{% endequation %} שייכת ל-{% equation %}\text{RE}{% endequation %} אם קיים אלגוריתם {% equation %}M{% endequation %} כך ש:

<ol> <li>(שלמות) אם {% equation %}x\in L{% endequation %} אז {% equation %}M\left(x\right)=\text{T}{% endequation %}.</li>


<li>(נאותות חלקית) אם {% equation %}x\notin L{% endequation %} אז או ש-{% equation %}M\left(x\right)=\text{F}{% endequation %} או ש-{% equation %}M{% endequation %} לא עוצרת על {% equation %}x{% endequation %}.</li>

</ol>

שימו לב מה השתנה פה: {% equation %}M{% endequation %} היוא לא מוודא אלא משהו שמנסה לפתור את הבעיה בלי לבדוק "הוכחה" כלשהי; אבל אנחנו מקלים מאוד את החיים של {% equation %}M{% endequation %} בכך שאנחנו <strong>כן</strong> מרשים לו לא לעצור על קלטים מסויימים - כאלו שהתשובה להם היא "לא". אם הייתי דורש נאותות מלאה - כלומר ש-{% equation %}M{% endequation %} תעצור תמיד על קלט {% equation %}x\notin L{% endequation %} ויתקבל {% equation %}\left(x\right)=\text{F}{% endequation %}{% equation %}M{% endequation %}, אז זה היה מגדיר מחלקה אחרת, {% equation %}\text{R}{% endequation %}, שהיא האנלוג של {% equation %}\text{P}{% endequation %} רק ללא דרישות סיבוכיות. 

בניגוד לשאלת P=NP הפתוחה, שאלת R=RE אינה פתוחה כלל - אנחנו <strong>יודעים</strong> שהתשובה שלילית כי למשל טיורינג הוכיח את זה פשוט על ידי הדגמה מפורשת של בעיה ששייכת ל-RE אבל לא שייכת ל-R: "בעיית העצירה".

בבעיית העצירה אנחנו מקבלים בתור קלט אלגוריתם {% equation %}M{% endequation %} כלשהו (תניחו שהוא כתוב בשפת התכנות החביבה שלכם, או מתואר בתור מכונת טיורינג - זה לא משנה) וצריכים לקבוע האם כשמריצים אותו הוא עוצר או לא. רגע אחד, אפשר לשאול - מריצים את {% equation %}M{% endequation %} על מה? בדרך כלל נותנים למשהו כמו {% equation %}M{% endequation %} קלט. ובכן, מספיק לי לדבר על הוריאנט של בעיית העצירה שבו אין קלט (או שהקלט "ריק"). <a href="https://gadial.net/2007/09/26/halting_problem/">יש לי פוסט</a> שמסביר מדוע בעיית העצירה לא שייכת ל-R ולא אחזור על זה כאן, אבל להראות שהיא שייכת ל-RE עם ההגדרה-מבוססת-מוודא שנתתי כאן, זה קל: {% equation %}V{% endequation %} יקבל קלט {% equation %}\left(M,\pi\right){% endequation %}. אם {% equation %}\pi{% endequation %} הוא מספר טבעי {% equation %}n{% endequation %}, אז {% equation %}V{% endequation %} יריץ את {% equation %}M{% endequation %} במשך {% equation %}n{% endequation %} צעדי חישוב. אם בפרק הזמן הזה {% equation %}M{% endequation %} עצרה, נפלא! {% equation %}V{% endequation %} יעצור ויגיד {% equation %}\text{T}{% endequation %}. אם לעומת זאת {% equation %}M{% endequation %} לא עצרה, {% equation %}V{% endequation %} יעצור ויגיד {% equation %}\text{F}{% endequation %}. עכשיו, מה קורה כאן?

אם {% equation %}M{% endequation %} עוצרת, כלומר {% equation %}M\in L{% endequation %}, אז <strong>קיים</strong> {% equation %}n{% endequation %} טבעי שהוא מספר הצעדים שנדרשים ל-{% equation %}M{% endequation %} כדי לעצור. אז <strong>קיים</strong> {% equation %}\pi{% endequation %} כך ש-{% equation %}V\left(x,\pi\right)=\text{T}{% endequation %} - פשוט {% equation %}\pi{% endequation %} שהוא מספר הצעדים {% equation %}n{% endequation %}. לעומת זאת, אם {% equation %}M\notin L{% endequation %} אז <strong>לכל</strong> מספר צעדים שהוא, הרצת {% equation %}V{% endequation %} על {% equation %}M{% endequation %} לא תסתיים ולכן {% equation %}V{% endequation %} תמיד תעצור ותחזיר {% equation %}\text{F}{% endequation %} <strong>לכל</strong> {% equation %}\pi{% endequation %}, כולל {% equation %}\pi{% endequation %}-ים שהם ג'יבריש ולא מספרים.

בואו נקבל שניה אינטואיציה למה בעיית העצירה היא <strong>עד כדי כך</strong> חזקה עד שהגיוני שלא יהיה אפשר לפתור אותה אלגוריתמית. ניקח לדוגמא את השערת גולדבך: לכל מספר זוגי {% equation %}n\ge4{% endequation %} קיימים שני ראשוניים {% equation %}p,q{% endequation %} כך ש-{% equation %}n=p+q{% endequation %}. ההשערה הזו קיימת כבר מאות שנים וטרם נמצאה לה הוכחה או הפרכה. אם היינו יכולים לפתור את בעיית העצירה היינו מסוגלים להשתמש בפתרון הזה כדי לדעת האם השערת גולדבך נכונה או לא: היינו כותבים אלגוריתם {% equation %}M{% endequation %} שפשוט רץ סדרתית על כל ה-{% equation %}n\ge4{% endequation %} הזוגיים, ולכל אחד מהם רץ על כל הראשוניים {% equation %}p<n{% endequation %} ובודק האם {% equation %}n-p{% endequation %} גם ראשוני. אם {% equation %}M{% endequation %} מגלה {% equation %}n{% endequation %} שעבורו <strong>לא קיים</strong> הפירוק {% equation %}n=p+q{% endequation %} הזה, {% equation %}M{% endequation %} עוצר. אחרת הוא עובר ל-{% equation %}n{% endequation %} הבא בתור. כעת, אפשר לתת את {% equation %}M{% endequation %} בתור קלט לבעיית העצירה. אם {% equation %}M\in L{% endequation %} זה אומר ש-{% equation %}M{% endequation %} <strong>עוצר</strong> ולכן השערת גולדבך <strong>לא נכונה</strong> (כי {% equation %}M{% endequation %} מצא לה דוגמא נגדית). אחרת, אם {% equation %}M\notin L{% endequation %}, זה אומר ש-{% equation %}M{% endequation %} <strong>לא עוצר</strong> ולכן השערת גולדבך <strong>נכונה</strong>. באופן דומה אפשר לנצל את בעיית העצירה כדי לפתור עוד בעיות; למעשה, אפשר להראות שכל בעיה ב-{% equation %}\text{RE}{% endequation %} ניתנת לתרגום לא מסובך לבעיית העצירה, כך שאם נוכל לפתור את בעיית העצירה, נוכל לפתור כל בעיה אחרת ב-{% equation %}\text{RE}{% endequation %} (בלשון שאולי אתם מכירים מתורת הסיבוכיות, בעיית העצירה היא {% equation %}\text{RE}{% endequation %}-שלמה, בדומה לבעיות שהן {% equation %}\text{NP}{% endequation %}-שלמות).

למה אני מדבר כל כך הרבה על בעיית העצירה? כי עיקר מה שעושים במאמר של {% equation %}\text{MIP}^{*}=\text{RE}{% endequation %} הוא להוכיח את השייכות של בעיית העצירה ל-{% equation %}\text{MIP}^{*}{% endequation %}, מה שגורר כמעט מיידית את השוויון {% equation %}\text{MIP}^{*}=\text{RE}{% endequation %}. אם כן, הגיע הזמן שנדבר על מהי {% equation %}\text{MIP}^{*}{% endequation %}. זה מה שנעשה בפוסט הבא. 