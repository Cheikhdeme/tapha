const content = {
    fr: {
        title: "Serigne Moustapha Deme",
        home: "Accueil",
        about: "À propos",
        blog: "Blog",
        contact: "Contact",
        articleTitle: "La place de Hazoura (Tamkharit) dans l'Islam",
        articleMeta: "Publié le : 17 juillet 2024 par Serigne Moustapha Deme",
        articleContent: "Hazoura, également connue sous le nom de Tamkharit, est une célébration importante dans l'Islam. Elle marque le début de la nouvelle année musulmane et est observée le 10e jour de Muharram, le premier mois du calendrier islamique. Cette journée est également connue sous le nom de Ashura.",
        aboutMeTitle: "À propos de moi",
        aboutMeContent: "Bonjour! Je suis Serigne Moustapha Deme, passionné par le développement web et le partage de connaissances à travers mon blog. Bienvenue sur mon site!",
        recentArticlesTitle: "Articles récents",
        article1: "L'importance du mois de Ramadan",
        article2: "Les cinq piliers de l'Islam",
        article3: "Comment faire la prière",
        article4: "Les bienfaits du jeûne"
    },
    en: {
        title: "Serigne Moustapha Deme",
        home: "Home",
        about: "About",
        blog: "Blog",
        contact: "Contact",
        articleTitle: "The Significance of Hazoura (Tamkharit) in Islam",
        articleMeta: "Published on: July 17, 2024 by Serigne Moustapha Deme",
        articleContent: "Hazoura, also known as Tamkharit, is an important celebration in Islam. It marks the beginning of the Islamic new year and is observed on the 10th day of Muharram, the first month of the Islamic calendar. This day is also known as Ashura.",
        aboutMeTitle: "About Me",
        aboutMeContent: "Hello! I am Serigne Moustapha Deme, passionate about web development and sharing knowledge through my blog. Welcome to my site!",
        recentArticlesTitle: "Recent Articles",
        article1: "The Importance of Ramadan",
        article2: "The Five Pillars of Islam",
        article3: "How to Pray",
        article4: "The Benefits of Fasting"
    },
    ar: {
        title: "سرين مصطفى ديم",
        home: "الصفحة الرئيسية",
        about: "حول",
        blog: "مدونة",
        contact: "اتصل بنا",
        articleTitle: "مكانة حضورة (تامخاريت) في الإسلام",
        articleMeta: "نشر في: 17 يوليو 2024 بواسطة سرين مصطفى ديم",
        articleContent: "حضورة، المعروفة أيضًا باسم تامخاريت، هي احتفال مهم في الإسلام. إنها تشير إلى بداية السنة الهجرية الجديدة وتُحتفل في اليوم العاشر من محرم، الشهر الأول من التقويم الإسلامي. هذا اليوم يُعرف أيضًا باسم عاشوراء.",
        aboutMeTitle: "حول",
        aboutMeContent: "مرحباً! أنا سرين مصطفى ديم، شغوف بتطوير الويب ومشاركة المعرفة من خلال مدونتي. مرحباً بكم في موقعي!",
        recentArticlesTitle: "مقالات حديثة",
        article1: "أهمية شهر رمضان",
        article2: "أركان الإسلام الخمسة",
        article3: "كيفية الصلاة",
        article4: "فوائد الصيام"
    },
    wo: {
        title: "Serigne Moustapha Deme",
        home: "Ndekki",
        about: "Bu ñu mën a dégg",
        blog: "Blog",
        contact: "Jox nekk",
        articleTitle: "Hazoura (Tamkharit) ci Islam",
        articleMeta: "Lañu ko yóbbu ci: 17 Sulet 2024 ci Serigne Moustapha Deme",
        articleContent: "Hazoura, tamit mooy Tamkharit, mooy jaar-jaar bu am solo ci Islam. Mu méngoo ak fukkeelu fan yu des ci fanweeri alxames, bés bu njëkk ci jal bi am ci fanweeri alxames bu nuy jëfandikoo. Bés bii tamit mooy Ashura.",
        aboutMeTitle: "Ci sama bopp",
        aboutMeContent: "Asalamaaleykum! Maa ngi tudde Serigne Moustapha Deme, maa ngi def njàngal ci web ak yow ba ñu mën a wax xibaar ci sama blog. Jox nekk sama xel!",
        recentArticlesTitle: "Artikile yu bees",
        article1: "Solo su weesu Ramadan",
        article2: "Rëru Islam",
        article3: "Naka la nu taxawlu",
        article4: "Solo su weesu xayma"
    }
};

function changeLanguage(lang) {
    document.getElementById("title").textContent = content[lang].title;
    document.getElementById("home").textContent = content[lang].home;
    document.getElementById("about").textContent = content[lang].about;
    document.getElementById("blog").textContent = content[lang].blog;
    document.getElementById("contact").textContent = content[lang].contact;
    document.getElementById("article-title").textContent = content[lang].articleTitle;
    document.getElementById("article-meta").textContent = content[lang].articleMeta;
    document.getElementById("article-content").textContent = content[lang].articleContent;
    document.getElementById("about-me-title").textContent = content[lang].aboutMeTitle;
    document.getElementById("about-me-content").textContent = content[lang].aboutMeContent;
    document.getElementById("recent-articles-title").textContent = content[lang].recentArticlesTitle;
    document.getElementById("article1").textContent = content[lang].article1;
    document.getElementById("article2").textContent = content[lang].article2;
    document.getElementById("article3").textContent = content[lang].article3;
    document.getElementById("article4").textContent = content[lang].article4;
}
