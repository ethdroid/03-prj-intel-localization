const BOOTSTRAP_LTR = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
const BOOTSTRAP_RTL = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css";

const translations = {
  en: {
    skip: "Skip to main content",
    brand: "Intel Sustainability",
    heroTitle: "Sustainability Through the Ages",
    heroSubtitle: "Explore Intel's journey through time, discovering how our commitment to innovation has shaped a more sustainable future for technology and our planet.",
    timelineHeading: "Our Sustainability Milestones",
    m1Title: "Intel Founded",
    m1Text: "Robert Noyce and Gordon Moore rename the newly formed company NM Electronics to Intel Corporation, laying the foundation for decades of technological innovation.",
    m2Title: "First Microprocessor",
    m2Text: "Intel debuts the 4004, the world's first commercial microprocessor, igniting the microprocessor revolution and propelling the future of computing devices.",
    m3Title: "8086 Processor",
    m3Text: "Launch of the 8086 processor, establishing the x86 architecture that drives countless PCs and servers in the modern era.",
    m4Title: "386 Processor",
    m4Text: "Intel introduces the 386 processor with 32-bit architecture, ushering in a new era of performance and multitasking for personal computers.",
    m5Title: "Peak GHG Emissions",
    m5Text: "This year marks Intel's highest annual greenhouse gas emissions for operations. Over subsequent years, Intel invests heavily in chemical abatement, renewable energy, and energy-efficient manufacturing to reverse this trend.",
    m6Title: "RISE Strategy",
    m6Text: "Intel launches its RISE (Responsible, Inclusive, Sustainable, Enabling) strategy and 2030 goals, aiming to drive industry-wide progress on climate action, water stewardship, and waste reduction.",
    m7Title: "Net-Zero By 2040",
    m7Text: "Intel announces its commitment to achieve net-zero greenhouse gas emissions (Scope 1 and 2) across its global operations by 2040, building on years of environmental initiatives.",
    m8Title: "Renewable Electricity",
    m8Text: "The company achieves 99% renewable electricity usage worldwide, helping to drastically lower carbon emissions and driving progress toward Intel's long-term sustainability goals.",
    m9Title: "Sustainability Summit",
    m9Text: "Intel hosts its first Sustainability Summit, uniting suppliers, government officials, and industry leaders to collaborate on next-generation sustainable semiconductor manufacturing.",
    focusHeading: "Our Focus Areas",
    card1Title: "Renewable Energy",
    card1Text: "Intel sources renewable electricity across its global operations and invests in on-site solar and wind generation.",
    card2Title: "Water Stewardship",
    card2Text: "Watershed restoration projects return more fresh water to local communities than Intel factories consume.",
    card3Title: "Circular Economy",
    card3Text: "Manufacturing waste is recovered, reused, and recycled to keep material out of landfills.",
    learnMore: "Learn More",
    close: "Close",
    card1ModalTitle: "Renewable Energy",
    card1ModalBody: "Intel reached 99% renewable electricity use worldwide in 2023 and continues to expand on-site solar generation at its largest campuses.",
    card2ModalTitle: "Water Stewardship",
    card2ModalBody: "Through watershed restoration partnerships, Intel funds projects that return fresh water to the communities where it operates.",
    card3ModalTitle: "Circular Economy",
    card3ModalBody: "Intel recovers chemicals and solvents from manufacturing and partners with recyclers to divert waste away from landfills.",
    formTitle: "Subscribe to our sustainability newsletter",
    formText: "Get progress updates delivered to your inbox.",
    labelName: "Full name",
    labelEmail: "Email address",
    emailHelp: "We will never share your email address.",
    labelFrequency: "How often would you like updates?",
    optWeekly: "Weekly",
    optMonthly: "Monthly",
    btnSubscribe: "Subscribe",
    formSuccess: "Thanks for subscribing.",
    footerLine: "Scroll or press Tab to explore the timeline and reveal each milestone.",
    toggleLabel: "العربية"
  },
  ar: {
    skip: "تخطي إلى المحتوى الرئيسي",
    brand: "استدامة إنتل",
    heroTitle: "الاستدامة عبر العصور",
    heroSubtitle: "استكشف رحلة إنتل عبر الزمن، وتعرف على كيفية إسهام التزامنا بالابتكار في بناء مستقبل أكثر استدامة للتكنولوجيا ولكوكبنا.",
    timelineHeading: "محطاتنا في مسيرة الاستدامة",
    m1Title: "تأسيس إنتل",
    m1Text: "قام روبرت نويس وجوردون مور بتغيير اسم الشركة الناشئة من NM Electronics إلى شركة إنتل، واضعين الأساس لعقود من الابتكار التقني.",
    m2Title: "أول معالج دقيق",
    m2Text: "أطلقت إنتل المعالج 4004، وهو أول معالج دقيق تجاري في العالم، مما أشعل ثورة المعالجات ودفع مستقبل أجهزة الحوسبة إلى الأمام.",
    m3Title: "معالج 8086",
    m3Text: "إطلاق معالج 8086 الذي أرسى معمارية x86 التي تشغل عدداً هائلاً من الحواسيب والخوادم في العصر الحديث.",
    m4Title: "معالج 386",
    m4Text: "قدمت إنتل معالج 386 بمعمارية 32 بت، مما فتح عهداً جديداً من الأداء وتعدد المهام في الحواسيب الشخصية.",
    m5Title: "ذروة انبعاثات الغازات الدفيئة",
    m5Text: "شهد هذا العام أعلى مستوى سنوي لانبعاثات الغازات الدفيئة من عمليات إنتل. وفي السنوات التالية استثمرت الشركة بكثافة في معالجة المواد الكيميائية والطاقة المتجددة والتصنيع الموفر للطاقة لعكس هذا الاتجاه.",
    m6Title: "استراتيجية RISE",
    m6Text: "أطلقت إنتل استراتيجية RISE وأهدافها لعام 2030، بهدف دفع التقدم على مستوى القطاع في العمل المناخي وإدارة المياه وتقليل النفايات.",
    m7Title: "صافي انبعاثات صفري بحلول 2040",
    m7Text: "أعلنت إنتل التزامها بتحقيق صافي انبعاثات صفري من الغازات الدفيئة في نطاقيها الأول والثاني عبر عملياتها العالمية بحلول عام 2040، بناءً على سنوات من المبادرات البيئية.",
    m8Title: "الكهرباء المتجددة",
    m8Text: "حققت الشركة نسبة 99% من استخدام الكهرباء المتجددة حول العالم، مما ساعد على خفض الانبعاثات الكربونية بشكل كبير ودفع التقدم نحو أهداف الاستدامة طويلة المدى.",
    m9Title: "قمة الاستدامة",
    m9Text: "استضافت إنتل أول قمة للاستدامة، جمعت الموردين والمسؤولين الحكوميين وقادة القطاع للتعاون على الجيل القادم من تصنيع أشباه الموصلات المستدام.",
    focusHeading: "مجالات تركيزنا",
    card1Title: "الطاقة المتجددة",
    card1Text: "تعتمد إنتل على الكهرباء المتجددة في عملياتها حول العالم وتستثمر في توليد الطاقة الشمسية وطاقة الرياح في مواقعها.",
    card2Title: "إدارة المياه",
    card2Text: "تعيد مشاريع استعادة الأحواض المائية كميات من المياه العذبة إلى المجتمعات المحلية تفوق ما تستهلكه مصانع إنتل.",
    card3Title: "الاقتصاد الدائري",
    card3Text: "يتم استرداد نفايات التصنيع وإعادة استخدامها وتدويرها للحد من إرسال المواد إلى المكبات.",
    learnMore: "اعرف المزيد",
    close: "إغلاق",
    card1ModalTitle: "الطاقة المتجددة",
    card1ModalBody: "بلغت إنتل نسبة 99% من استخدام الكهرباء المتجددة عالمياً في عام 2023، وتواصل توسيع توليد الطاقة الشمسية في أكبر مواقعها.",
    card2ModalTitle: "إدارة المياه",
    card2ModalBody: "من خلال شراكات استعادة الأحواض المائية، تمول إنتل مشاريع تعيد المياه العذبة إلى المجتمعات التي تعمل فيها.",
    card3ModalTitle: "الاقتصاد الدائري",
    card3ModalBody: "تسترد إنتل المواد الكيميائية والمذيبات من عمليات التصنيع وتتعاون مع شركات إعادة التدوير لتحويل النفايات بعيداً عن المكبات.",
    formTitle: "اشترك في نشرتنا حول الاستدامة",
    formText: "احصل على آخر التحديثات في بريدك الإلكتروني.",
    labelName: "الاسم الكامل",
    labelEmail: "البريد الإلكتروني",
    emailHelp: "لن نشارك بريدك الإلكتروني مع أي جهة.",
    labelFrequency: "كم مرة تود أن تصلك التحديثات؟",
    optWeekly: "أسبوعياً",
    optMonthly: "شهرياً",
    btnSubscribe: "اشتراك",
    formSuccess: "شكراً لاشتراكك.",
    footerLine: "مرر أو اضغط Tab لاستكشاف الجدول الزمني وعرض تفاصيل كل محطة.",
    toggleLabel: "English"
  }
};

let currentLang = "en";

function applyLanguage(lang) {
  currentLang = lang;
  const isArabic = lang === "ar";

  document.documentElement.lang = lang;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.getElementById("bootstrap-css").href = isArabic ? BOOTSTRAP_RTL : BOOTSTRAP_LTR;

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.getElementById("lang-toggle").textContent = translations[lang].toggleLabel;
}

// Auto-detect the browser language on first load
const browserLang = (navigator.language || "en").slice(0, 2);
applyLanguage(browserLang === "ar" ? "ar" : "en");

document.getElementById("lang-toggle").addEventListener("click", function () {
  applyLanguage(currentLang === "en" ? "ar" : "en");
});

// Fill the modal based on which Learn More button opened it
document.getElementById("infoModal").addEventListener("show.bs.modal", function (event) {
  const key = event.relatedTarget.getAttribute("data-key");
  document.getElementById("infoModalTitle").textContent = translations[currentLang][key + "ModalTitle"];
  document.getElementById("infoModalBody").textContent = translations[currentLang][key + "ModalBody"];
});

// Confirmation instead of a page reload
document.getElementById("subscribe-form").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("form-status").classList.remove("d-none");
  this.reset();
});