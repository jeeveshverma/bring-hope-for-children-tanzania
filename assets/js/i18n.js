// English <-> Kiswahili switch.
// Text nodes are matched by their (whitespace-normalised) English text, so the HTML stays plain English.
(function () {
  var SW = {
    // Navigation
    "About": "Kuhusu",
    "Our Work": "Kazi Zetu",
    "Daycare": "Kituo cha Watoto",
    "Events": "Matukio",
    "Volunteer": "Kujitolea",
    "Contact": "Mawasiliano",
    "Donate": "Changia",

    // Hero
    "Mwanza, Tanzania · Non-profit organisation": "Mwanza, Tanzania · Shirika lisilo la kiserikali",
    "Every child deserves a": "Kila mtoto anastahili utoto wa",
    "joyful, safe": "furaha na usalama",
    "childhood.": ".",
    "Bring Hope for Children Tanzania helps vulnerable and street children in Mwanza get an education, health care and protection, so each of them can reach their full potential.":
      "Bring Hope for Children Tanzania inawasaidia watoto walio katika mazingira hatarishi na watoto wa mitaani jijini Mwanza kupata elimu, huduma za afya na ulinzi, ili kila mmoja afikie ndoto zake.",
    "Support a child": "Msaidie mtoto",
    "Volunteer with us": "Jitolee nasi",
    "“Share Love, Spread Kindness”": "“Shiriki Upendo, Eneza Wema”",
    "Welcome to our family": "Karibu katika familia yetu",

    // Focus strip
    "Education": "Elimu",
    "Health": "Afya",
    "Child Protection": "Ulinzi wa Mtoto",
    "Street Children": "Watoto wa Mitaani",
    "Early Childhood": "Malezi ya Awali",

    // About
    "Who we are": "Sisi ni nani",
    "A beacon of hope for the children of Tanzania": "Mwanga wa matumaini kwa watoto wa Tanzania",
    "We are a dedicated team of members and supporters with one shared commitment: a brighter future for the children of Tanzania. We support the whole child, making sure each one can get a good education, health care and the things they need for a safe, fulfilling and prosperous life.":
      "Sisi ni timu ya wanachama na wafadhili waliojitoa kwa lengo moja: mustakabali bora kwa watoto wa Tanzania. Tunamhudumia mtoto kwa ukamilifu, tukihakikisha kila mmoja anapata elimu bora, huduma za afya na mahitaji muhimu kwa maisha salama, yenye furaha na mafanikio.",
    "We speak up for children's rights and well-being in our communities. We work to break down barriers, build supportive environments and spark positive change for the next generation.":
      "Tunatetea haki na ustawi wa watoto katika jamii zetu. Tunafanya kazi kuondoa vikwazo, kujenga mazingira wezeshi na kuleta mabadiliko chanya kwa kizazi kijacho.",
    "Based in Ilemela, Mwanza, we run the": "Tukiwa Ilemela, Mwanza, tunaendesha",
    ", reach out to street children, and hold events that bring children together to share meals, gifts and joy.":
      ", tunawafikia watoto wa mitaani, na tunaandaa matukio yanayowakutanisha watoto kushiriki chakula, zawadi na furaha.",
    "Our Vision": "Dira Yetu",
    "A future where every child in Tanzania is empowered, nurtured, and equipped with the tools to realise their full potential.":
      "Mustakabali ambapo kila mtoto Tanzania amewezeshwa, amelelewa vyema na ana nyenzo za kufikia uwezo wake kamili.",
    "Our Mission": "Dhamira Yetu",
    "To make sure every child in Mwanza and beyond can get an education, health care and protection, and can grow up free to explore their dreams.":
      "Kuhakikisha kila mtoto Mwanza na kwingineko anapata elimu, huduma za afya na ulinzi, na anakua akiwa huru kufuata ndoto zake.",
    "Our core values": "Maadili yetu ya msingi",
    "Compassion": "Huruma",
    "We meet every child with love, patience and care.": "Tunampokea kila mtoto kwa upendo, uvumilivu na uangalifu.",
    "Integrity": "Uadilifu",
    "We are honest and transparent with every shilling and every promise.": "Sisi ni waaminifu na wawazi kwa kila shilingi na kila ahadi.",
    "Inclusivity": "Ujumuishi",
    "Every child counts, whatever their background, ability or circumstance.": "Kila mtoto ni muhimu, bila kujali historia, uwezo au hali yake.",

    // Programmes
    "What we do": "Tunachofanya",
    "Our programmes": "Programu zetu",
    "We support the whole child: their mind, body, safety and spirit.": "Tunamhudumia mtoto kwa ukamilifu: akili, mwili, usalama na moyo wake.",
    "School bags, uniforms, shoes, exercise books and stationery, plus classroom support, so every child can stay in school and do well.":
      "Mabegi ya shule, sare, viatu, madaftari na vifaa vya kuandikia, pamoja na msaada darasani, ili kila mtoto abaki shuleni na afanye vizuri.",
    "Health & Nutrition": "Afya na Lishe",
    "We help children get health care and learn about hygiene and nutrition. Healthy children can learn, play and grow.":
      "Tunawasaidia watoto kupata huduma za afya na kujifunza kuhusu usafi na lishe. Mtoto mwenye afya anaweza kujifunza, kucheza na kukua.",
    "We speak up for children's rights and work to prevent abuse and trafficking, building safe homes, schools and communities.":
      "Tunatetea haki za watoto na kupambana na ukatili na usafirishaji haramu wa watoto, tukijenga nyumba, shule na jamii salama.",
    "Community Development": "Maendeleo ya Jamii",
    "We work alongside families, local leaders and schools in Mwanza to build support that lasts for children.":
      "Tunashirikiana na familia, viongozi wa mitaa na shule jijini Mwanza kujenga msaada endelevu kwa watoto.",
    "Music, dance and creative arts help children build confidence, express themselves and find joy together.":
      "Muziki, ngoma na sanaa huwasaidia watoto kujiamini, kujieleza na kufurahi pamoja.",
    "Watch on YouTube →": "Tazama YouTube →",
    "Care for Street Children": "Huduma kwa Watoto wa Mitaani",
    "We reach out to children living on the streets of Mwanza with meals, care, essentials and a path back to safety and school.":
      "Tunawafikia watoto wanaoishi mitaani jijini Mwanza kwa chakula, matunzo, mahitaji muhimu na njia ya kurudi kwenye usalama na shule.",

    // Daycare
    "Our daycare": "Kituo chetu cha watoto",
    "A safe, loving and joyful place where little minds grow, learn and shine every day.":
      "Mahali salama, penye upendo na furaha ambapo akili changa hukua, hujifunza na kung'aa kila siku.",
    "Safe and caring environment": "Mazingira salama na yenye malezi bora",
    "Early childhood learning": "Elimu ya awali",
    "Play-based activities": "Kujifunza kupitia michezo",
    "Resting space for children": "Sehemu ya watoto kupumzika",
    "Moral and social development": "Malezi ya maadili na kijamii",
    "Near Ilemela Court, close to Antelope Hotel, Mwanza": "Karibu na Mahakama ya Ilemela, jirani na Antelope Hotel, Mwanza",
    "Register a child": "Sajili mtoto",
    "Visit us": "Tutembelee",
    "We are still receiving children. Contact us for registration.": "Bado tunapokea watoto. Wasiliana nasi kwa usajili.",

    // Events
    "Events & campaigns": "Matukio na kampeni",
    "Bringing children together": "Tukiwaleta watoto pamoja",
    "Through the year we hold special events where children share meals, happiness, love and memorable moments.":
      "Kwa mwaka mzima tunaandaa matukio maalum ambapo watoto hushiriki chakula, furaha, upendo na nyakati zisizosahaulika.",
    "Fundraising now · December 2026": "Tunachangisha sasa · Desemba 2026",
    "Christmas & New Year Charity Event": "Hafla ya Hisani ya Krismasi na Mwaka Mpya",
    "We are raising funds to provide school needs for our vulnerable children and to bring them together for Christmas and New Year celebrations.":
      "Tunachangisha fedha ili kuwapatia watoto wetu walio katika mazingira hatarishi mahitaji ya shule na kuwakutanisha kusherehekea Krismasi na Mwaka Mpya.",
    "You can help with:": "Unaweza kusaidia kwa:",
    "💰 Financial support": "💰 Msaada wa fedha",
    "🎒 School bags": "🎒 Mabegi ya shule",
    "👕 Uniforms & clothes": "👕 Sare na nguo",
    "👟 Shoes": "👟 Viatu",
    "📚 Books & stationery": "📚 Madaftari na vifaa vya kuandikia",
    "🍚 Food & supplies": "🍚 Chakula na mahitaji",
    "Support this event": "Changia tukio hili",
    "Easter 2026": "Pasaka 2026",
    "Easter with 250 street children": "Pasaka pamoja na watoto 250 wa mitaani",
    "We organised a special Easter event for 250 street children at African Orphanage in Ilemela, Mwanza, sharing food, essentials and hope.":
      "Tuliandaa tukio maalum la Pasaka kwa watoto 250 wa mitaani katika African Orphanage, Ilemela, Mwanza, tukishiriki chakula, mahitaji muhimu na matumaini.",

    // Impact
    "“We believe that every child deserves a joyful, safe childhood and the freedom to explore and realise their fullest potential.”":
      "“Tunaamini kwamba kila mtoto anastahili utoto wa furaha na usalama, na uhuru wa kugundua na kufikia uwezo wake kamili.”",
    "A child gets the chance to learn": "Mtoto anapata nafasi ya kujifunza",
    "A family gets support and hope": "Familia inapata msaada na matumaini",
    "A community grows stronger": "Jamii inaimarika",

    // Gallery
    "Moments of joy": "Nyakati za furaha",
    "Life at BHCT": "Maisha BHCT",
    "Follow us on social media for daily stories, photos and dance videos from Mwanza.":
      "Tufuatilie mitandaoni kwa habari, picha na video za ngoma kutoka Mwanza kila siku.",

    // Get involved
    "Get involved": "Shiriki nasi",
    "Ways you can bring hope": "Njia za kuleta matumaini",
    "Wherever you are in the world, you can make a real difference to a child in Mwanza.":
      "Popote ulipo duniani, unaweza kuleta mabadiliko ya kweli kwa mtoto wa Mwanza.",
    "🙋 Volunteer in Mwanza": "🙋 Jitolee Mwanza",
    "Join us on the ground. Help in classrooms, teach English or Maths, lead creative, sports and dance activities, or share your professional skills.":
      "Ungana nasi uwanjani. Saidia darasani, fundisha Kiingereza au Hisabati, ongoza shughuli za sanaa, michezo na ngoma, au changia ujuzi wako wa kitaaluma.",
    "Teaching & tutoring support": "Kufundisha na kusaidia masomo",
    "Arts, music, dance & sports": "Sanaa, muziki, ngoma na michezo",
    "Health & hygiene education": "Elimu ya afya na usafi",
    "Community outreach": "Kufikia jamii",
    "Apply to volunteer": "Omba kujitolea",
    "🤲 Partner with us": "🤲 Shirikiana nasi",
    "Schools, churches, companies and other organisations can partner with BHCT on programmes, supplies, sponsorships or fundraising events.":
      "Shule, makanisa, makampuni na mashirika mengine yanaweza kushirikiana na BHCT katika programu, vifaa, udhamini au matukio ya kuchangisha fedha.",
    "School & supply drives": "Kampeni za vifaa vya shule",
    "Corporate sponsorship": "Udhamini wa makampuni",
    "Joint community projects": "Miradi ya pamoja ya jamii",
    "In-kind donations": "Michango ya vitu",
    "Become a partner": "Kuwa mshirika",
    "📣 Spread the word": "📣 Eneza habari",
    "Not able to give right now? Follow, like and share our stories. Every share helps a child's story reach someone who can help.":
      "Huwezi kuchangia sasa? Tufuatilie, penda na shiriki habari zetu. Kila unaposhiriki, hadithi ya mtoto inamfikia mtu anayeweza kusaidia.",
    "Follow us on Instagram": "Tufuatilie Instagram",
    "Share our videos": "Shiriki video zetu",
    "Tell friends & family": "Waambie marafiki na familia",
    "Fundraise on your birthday": "Changisha fedha siku yako ya kuzaliwa",
    "Follow us": "Tufuatilie",

    // Donate
    "Your kindness changes a child's tomorrow": "Wema wako unabadilisha kesho ya mtoto",
    "Every gift, big or small, goes straight to the children: school materials, health care, meals and safe spaces to play and learn.":
      "Kila mchango, mkubwa au mdogo, unawafikia watoto moja kwa moja: vifaa vya shule, huduma za afya, chakula na sehemu salama za kucheza na kujifunza.",
    "School bags, uniforms & shoes": "Mabegi ya shule, sare na viatu",
    "Exercise books & stationery": "Madaftari na vifaa vya kuandikia",
    "Meals & food supplies": "Chakula na mahitaji ya chakula",
    "How to give": "Jinsi ya kuchangia",
    "Bank transfer": "Kupitia benki",
    "Bank": "Benki",
    "Account name": "Jina la akaunti",
    "Account no.": "Namba ya akaunti",
    "Copy": "Nakili",
    "Mobile money & in-kind gifts": "Pesa kwa simu na michango ya vitu",
    "Want to send mobile money, or give food, clothes or school supplies? Message us and we'll arrange it.":
      "Ungependa kutuma pesa kwa simu, au kutoa chakula, nguo au vifaa vya shule? Tutumie ujumbe nasi tutapanga.",
    "Message us on WhatsApp to give": "Tutumie ujumbe WhatsApp kuchangia",
    "Thank you, asante sana! 💙": "Asante sana! 💙",

    // Contact
    "Let's talk": "Tuongee",
    "Have a question, want to volunteer, or want to visit us in Mwanza? We'd love to hear from you.":
      "Una swali, ungependa kujitolea, au kututembelea Mwanza? Tungependa kusikia kutoka kwako.",
    "Location": "Mahali",
    "Daycare: near Ilemela Court, close to Antelope Hotel": "Kituo cha watoto: karibu na Mahakama ya Ilemela, jirani na Antelope Hotel",
    "Postal address": "Anwani ya posta",
    "P.O. Box 5134, Mwanza, Tanzania": "S.L.P. 5134, Mwanza, Tanzania",
    "Phone / WhatsApp": "Simu / WhatsApp",
    "Social": "Mitandao ya kijamii",
    "Send us a message": "Tutumie ujumbe",
    "Your name": "Jina lako",
    "Email": "Barua pepe",
    "I'm interested in": "Ninavutiwa na",
    "General enquiry": "Swali la jumla",
    "Volunteering": "Kujitolea",
    "Donating": "Kuchangia",
    "Partnership": "Ushirikiano",
    "Visiting": "Kutembelea",
    "Message": "Ujumbe",
    "Send via WhatsApp": "Tuma kupitia WhatsApp",

    // Footer
    "Bring Hope for Children Tanzania: a non-profit in Ilemela, Mwanza working for the education, health and protection of vulnerable and street children.":
      "Bring Hope for Children Tanzania: shirika lisilo la kiserikali lililopo Ilemela, Mwanza, linalofanya kazi kwa ajili ya elimu, afya na ulinzi wa watoto walio katika mazingira hatarishi na watoto wa mitaani.",
    "P.O. Box 5134, Mwanza.": "S.L.P. 5134, Mwanza.",
    "Share Love, Spread Kindness": "Shiriki Upendo, Eneza Wema",
    "Explore": "Gundua",
    "About us": "Kuhusu sisi",
    "Our work": "Kazi zetu",
    "Daycare Academy": "Kituo cha Watoto",
    "Gallery": "Picha",
    "Connect": "Wasiliana",
    "All rights reserved.": "Haki zote zimehifadhiwa.",
    "Website by Jeevesh": "Tovuti na Jeevesh"
  };

  var SW_JS = {
    "Please fill in your name, a valid email and a message.": "Tafadhali jaza jina lako, barua pepe sahihi na ujumbe.",
    "Copied!": "Imenakiliwa!"
  };

  var SW_ATTR = {
    "Open menu": "Fungua menyu",
    "Close menu": "Funga menyu"
  };

  var STORAGE_KEY = "bhct-lang";
  var nodes = [];

  function norm(s) { return s.replace(/\s+/g, " ").trim(); }

  // Collect every translatable text node once, remembering its original English.
  function collect() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || /^(SCRIPT|STYLE|TEXTAREA)$/.test(p.nodeName)) return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest("[data-no-i18n]")) return NodeFilter.FILTER_REJECT;
        return SW.hasOwnProperty(norm(n.nodeValue)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n;
    while ((n = walker.nextNode())) {
      var raw = n.nodeValue;
      var key = norm(raw);
      var lead = raw.match(/^\s*/)[0] && !/^[.,;:!?]/.test(SW[key]) ? " " : "";
      var trail = raw.match(/\s*$/)[0] ? " " : "";
      nodes.push({ node: n, en: raw, sw: lead + SW[key] + trail });
    }
  }

  function apply(lang) {
    nodes.forEach(function (o) { o.node.nodeValue = lang === "sw" ? o.sw : o.en; });
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.lang === lang);
    });
    window.BHCT_LANG = lang;
    document.dispatchEvent(new CustomEvent("bhct:lang", { detail: lang }));
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  window.BHCT_T = function (en) {
    if (window.BHCT_LANG !== "sw") return en;
    return SW[en] || SW_ATTR[en] || SW_JS[en] || en;
  };

  collect();
  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.dataset.lang); });
  });

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  var param = new URLSearchParams(location.search).get("lang");
  apply(param === "sw" || param === "en" ? param : saved || "en");
})();
