import React, { useState } from "react";
import "./home.css";
import { Link, NavLink } from "react-router-dom";
import Productdetails from "../../components/allproducts/product details/productdetails.jsx";

export default function Home() {
const products = [{
    id: 1,
      slug: "mastering-golden-hour-photography",
      title: "إتقان تصوير الساعة الذهبية: دليل شامل",
      excerpt:
        "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",
      content:
        "الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً ودافئاً وساحراً.\n\n## لماذا الساعة الذهبية؟\n\nالضوء خلال هذا الوقت له صفات فريدة: ظلال طويلة ناعمة، ألوان دافئة ذهبية، وتباين منخفض يجعل كل شيء يبدو أجمل. البورتريهات تكتسب توهجاً طبيعياً والمناظر الطبيعية تتحول إلى لوحات فنية.\n\n## التحضير المسبق\n\nخطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار أفضل زاوية.\n\n## إعدادات الكاميرا\n\nاستخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على ما تريد: f/1.8-f/2.8 للبورتريهات مع خلفية ضبابية، أو f/8-f/11 للمناظر الطبيعية الحادة.\n\n## التكوين الفني\n\nضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية الساحر. أو استخدمها كمصدر جانبي لإبراز الملمس والعمق.\n\n## الخلاصة\n\nالساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا تُنسى تتميز بجمالها الطبيعي.",
      category: "إضاءة",
      author: {
        name: "سالم أحمد",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        role: "مصور محترف",
      },
      image:
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop",
      date: "2026-01-15",
      readTime: "8 دقائق للقراءة",
      featured: true,
      tags: ["إضاءة", "الساعة الذهبية", "تصوير خارجي"],
    },
    {
      id: 2,
      slug: "portrait-photography-secrets",
      title: "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",
      excerpt:
        "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",
      content:
        "تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة. ليس مجرد توثيق الملامح، بل كشف القصة خلف العيون.\n\n## التواصل مع الموضوع\n\nقبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة. الابتسامة الحقيقية والنظرة الطبيعية تأتي فقط عندما يثق بك الموضوع.\n\n## اختيار العدسة المناسبة\n\nعدسات 85mm و 50mm هي الكلاسيكيات لتصوير البورتريه. توفر ضغطاً مثالياً للملامح وخلفية ضبابية جميلة.\n\n## الإضاءة الطبيعية\n\nالنافذة الكبيرة هي أفضل صديق لمصور البورتريه. ضع الموضوع بزاوية 45 درجة من النافذة للحصول على إضاءة ثلاثية الأبعاد رائعة.\n\n## التركيز على العيون\n\nالعيون هي نافذة الروح. تأكد دائماً من أن العيون حادة ومركزة. استخدم نقطة تركيز واحدة على العين الأقرب للكاميرا.\n\n## الخلفية والتكوين\n\nاختر خلفية بسيطة لا تشتت الانتباه. استخدم قاعدة الأثلاث لوضع العيون في النقاط القوية.\n\n## الخلاصة\n\nالبورتريه الناجح يحكي قصة. عندما تجمع بين التقنية والتواصل الإنساني، تخلق صوراً خالدة.",
      category: "بورتريه",
      author: {
        name: "محمد علي",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        role: "مصور بورتريه",
      },
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      date: "2026-01-12",
      readTime: "6 دقائق للقراءة",
      featured: true,
      tags: ["بورتريه", "تصوير أشخاص", "إضاءة طبيعية"],
    },
    {
      id: 3,
      slug: "landscape-photography-guide",
      title: "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",
      excerpt:
        "استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",
      content:
        "تصوير المناظر الطبيعية هو رحلة إلى قلب الطبيعة. إنه فن يتطلب الصبر والتخطيط والعين الفنية لرؤية الجمال في كل مكان.\n\n## المعدات الأساسية\n\nحامل ثلاثي قوي ضروري للحصول على صور حادة. عدسة واسعة الزاوية (16-35mm) مثالية لالتقاط المشاهد الواسعة. فلاتر ND و Polarizer ستفتح لك آفاقاً إبداعية جديدة.\n\n## توقيت التصوير\n\nالساعة الزرقاء والساعة الذهبية هي أفضل الأوقات. الضوء يكون ناعماً والألوان غنية. لا تخف من التصوير في الطقس الدرامي - الغيوم والعواصف تضيف شخصية للصورة.\n\n## التكوين الفني\n\nابحث عن عناصر المقدمة المثيرة للاهتمام. صخرة، زهرة، أو مسار يقود العين نحو الخلفية. استخدم خطوط التوجيه لخلق عمق في الصورة.\n\n## إعدادات الكاميرا\n\nفتحة f/8-f/16 للحصول على حدة من المقدمة للخلفية. ISO منخفض قدر الإمكان. استخدم وضع Live View والتكبير للتركيز اليدوي الدقيق.\n\n## المعالجة اللاحقة\n\nصور بصيغة RAW لأقصى مرونة في التعديل. تعديل الإضاءة والألوان بلطف يبرز جمال المشهد دون إفراط.\n\n## الخلاصة\n\nتصوير المناظر الطبيعية يعلمك التأمل والصبر. كل صورة هي ذكرى من رحلة لا تُنسى.",
      category: "مناظر طبيعية",
      author: {
        name: "إبراهيم حسن",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        role: "مصور طبيعة",
      },
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      date: "2026-01-10",
      readTime: "10 دقائق للقراءة",
      featured: true,
      tags: ["مناظر طبيعية", "تصوير خارجي", "طبيعة"],
    },
     {
      id: 26,
      slug: "self-portrait-photography",
      title: "تصوير البورتريه الذاتي: كن موضوعك الخاص",
      excerpt: "تعلم كيف تصور نفسك بشكل احترافي وإبداعي دون الحاجة لمساعد.",
      content:
        "البورتريه الذاتي فن قديم تجدد بالتصوير الفوتوغرافي. أنت المصور والموديل معاً.\n\n## لماذا البورتريه الذاتي؟\n\nتدريب مجاني متاح دائماً. استكشاف الذات والتعبير الفني. تطوير مهاراتك في الإضاءة والتكوين والتعديل.\n\n## المعدات اللازمة\n\nحامل ثلاثي ثابت. جهاز تحكم عن بعد أو مؤقت ذاتي. مرآة لمراقبة الوضعية. تطبيق التحكم بالكاميرا على الهاتف مفيد جداً.\n\n## التركيز بدونك\n\nضع شيئاً في مكانك للتركيز عليه (كرسي، وسادة). استخدم التركيز اليدوي وثبته. أو استخدم وضع تتبع العين إن كان متاحاً.\n\n## الإضاءة والوضعيات\n\nجرب بحرية. لا أحد ينتظرك. العب مع الضوء والظلال. جرب تعابير وأوضاع لن تطلبها من شخص آخر.\n\n## التعديل والأسلوب\n\nالبورتريه الذاتي مساحة للتجربة. جرب أساليب تعديل جديدة. طور صوتك البصري الخاص.\n\n## الخلاصة\n\nالبورتريه الذاتي رحلة اكتشاف ذات. كل صورة تعلمك شيئاً عن نفسك وعن فنك.",
      category: "بورتريه",
      author: {
        name: "سلطان الراجحي",
        avatar:
          "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face",
        role: "فنان تصوير",
      },
      image:
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&h=400&fit=crop",
      date: "2025-11-05",
      readTime: "7 دقائق للقراءة",
      featured: false,
      tags: ["بورتريه ذاتي", "إبداع", "تعبير"],
    },
    {
      id: 27,
      slug: "lens-guide-beginners",
      title: "دليل العدسات للمبتدئين: كيف تختار عدستك الأولى",
      excerpt:
        "افهم أنواع العدسات المختلفة واختر الأنسب لأسلوب تصويرك واحتياجاتك.",
      content:
        "العدسة أهم من الكاميرا في كثير من الأحيان. فهم العدسات يساعدك على اتخاذ قرارات شراء حكيمة.\n\n## البعد البؤري\n\nيُقاس بالمليمتر (mm). الأرقام الصغيرة = زاوية واسعة. الأرقام الكبيرة = تقريب. 50mm تقريباً ما تراه العين البشرية.\n\n## فتحة العدسة\n\nf/1.8 أكبر من f/4. فتحة أكبر = ضوء أكثر + خلفية أكثر ضبابية. العدسات السريعة (f/1.4-f/2.8) أغلى وأكبر.\n\n## عدسة الـ 50mm\n\nالنيفتي فيفتي (50mm f/1.8) أفضل استثمار للمبتدئين. رخيصة، خفيفة، وتعطي نتائج رائعة. تعلمك الحركة والتكوين.\n\n## العدسات الزوم مقابل الثابتة\n\nالزوم مرنة وعملية. الثابتة (Prime) أخف وأسرع وأحد. للتعلم، الثابتة تجبرك على التفكير أكثر.\n\n## العدسات حسب التخصص\n\nبورتريه: 85mm. مناظر: 16-35mm. ماكرو: عدسة ماكرو مخصصة. حياة برية: 100-400mm.\n\n## الخلاصة\n\nلا تشترِ عدسات لا تحتاجها. ابدأ بعدسة واحدة واتقنها قبل الانتقال للتالية. العدسة الأفضل هي التي تستخدمها.",
      category: "معدات",
      author: {
        name: "فهد السبيعي",
        avatar:
          "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=100&h=100&fit=crop&crop=face",
        role: "مراجع معدات",
      },
      image:
        "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=800&h=400&fit=crop",
      date: "2025-11-02",
      readTime: "9 دقائق للقراءة",
      featured: false,
      tags: ["عدسات", "معدات", "مبتدئين"],
    },
    {
      id: 28,
      slug: "minimalist-photography",
      title: "التصوير البسيط (Minimalist): قوة الفراغ",
      excerpt:
        "اكتشف جمال البساطة في التصوير وكيف تخلق صوراً قوية بعناصر قليلة.",
      content:
        "الأقل هو الأكثر. التصوير البسيط يزيل كل ما هو غير ضروري ليتحدث الجوهر.\n\n## فلسفة البساطة\n\nكل عنصر في الصورة يجب أن يكون له غرض. إذا لم يضف شيئاً، فهو يطرح. الفراغ ليس خالياً - إنه يتنفس.\n\n## المساحة السلبية\n\nالفراغ حول الموضوع يعطيه قوة وهيبة. لا تخف من ترك 80% من الإطار فارغاً. الموضوع الصغير في فراغ كبير يجذب الانتباه.\n\n## الخطوط والأشكال\n\nالتصوير البسيط يعتمد على الهندسة. خط واحد، شكل واحد، نمط متكرر. البساطة في العناصر، القوة في التنفيذ.\n\n## الألوان المحدودة\n\nألوان قليلة أو لون واحد. الأبيض والأسود طبيعي للبساطة. لون واحد مع خلفية محايدة.\n\n## إيجاد المواضيع\n\nالمباني الحديثة، السماء الفارغة، الأشياء اليومية المعزولة. البساطة في كل مكان لمن يعرف كيف ينظر.\n\n## الخلاصة\n\nالتصوير البسيط ليس سهلاً. إزالة العناصر أصعب من إضافتها. لكن النتيجة صور لا تُنسى.",
      category: "تقنيات",
      author: {
        name: "راشد الجاسر",
        avatar:
          "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=100&h=100&fit=crop&crop=face",
        role: "فنان بصري",
      },
      image:
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&h=400&fit=crop",
      date: "2025-10-28",
      readTime: "6 دقائق للقراءة",
      featured: false,
      tags: ["بساطة", "Minimalist", "تكوين"],
    },
   
];

const topThree = products.slice(0, 3);
const bottomThree = products.slice(3, 6);


  return (
    <>
      <div className="container my-5">
        <section>
          <div className="text-center m-auto">
            <span className=" badge-featured text-white py-2 px-4 rounded-4  border border-1  border-secondary">
              <span className="main-color fa-2x "> • </span>مرحباً بك في
              عدسة{" "}
            </span>
            <h1 className="my-5 fa-6x w-75 m-auto fw-bold">
              اكتشف <span className="main-color">فن </span>
              التصوير الفوتوغرافي
            </h1>
            <p className="text-secondary">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>
            <NavLink to="/blogs">
<button className="main-background text-white py-2 px-4 rounded-5 border-0 m-3">
              استكشف المقالات
            </button>
            </NavLink>
              <NavLink to="/blogs">
            <button className=" m-3 py-2 px-4 rounded-5 border border-2 border-white  bg-transparent text-white">
              اعرف المزيد
            </button>
</NavLink>
            <div className="w-50 m-auto">
              <div className="row my-5">
                <div className="col-md-3">
                  <div className="inner main-color p-3 bg-dark rounded-4  border border-1  border-secondary">
                    <i className="fa-solid fa-newspaper fs-3"></i>
                    <p className="fs-3 p-0 m-0 ">+50</p>
                    <span className="text-secondary">مقالة</span>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="inner main-color p-3 bg-dark rounded-4  border border-1 border-secondary">
                    <i className="fa-solid fa-users-line fs-3"></i>
                    <p className="fs-3 p-0 m-0">+10ألف</p>
                    <span className="text-secondary">قارئ</span>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="inner main-color p-3 bg-dark rounded-4  border border-1  border-secondary">
                    <i className="fa-solid fa-folder fs-3"></i>
                    <p className="fs-3 p-0 m-0">4</p>
                    <span className="text-secondary">تصنيفات</span>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="inner main-color p-3 bg-dark rounded-4  border border-1  border-secondary">
                    <i className="fa-solid fa-pen fs-3"></i>
                    <p className="fs-3 p-0 m-0">6</p>
                    <span className="text-secondary">كاتب</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/*==========================================================================*/}
      <section className="featured-articles py-5 position-relative overflow-hidden">
        <div className="gradient-bg position-absolute top-0 end-0 h-100"></div>

        <div className="container position-relative">
          {/* Header */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-5 gap-3">
            <div>
              <span className="badge-featured mb-3 d-inline-flex align-items-center gap-2">
                <span className="dot"></span>
                مميز
              </span>
              <h2 className="text-white fw-bold  fa-4x">مقالات مختارة</h2>
              <p className="text-secondary">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>

            <NavLink to="/blogs" className="btn btn-orange rounded-pill px-4 text-white">
              عرض الكل
              <i className="fa-solid fa-arrow-left ms-2"></i>
            </NavLink>
          </div>

          {/* Article */}
          <div className="row">
             {topThree.map((pro) => (
    <Productdetails
      key={pro.id}
      pro={pro}
      view={{
        col: "col-md-",
        flex: "d-flex gap-4 mb-4",
      }}
    />
  ))}
          </div>
        </div>
      </section>
      {/*==========================================================================*/}

      <section className="blackground-links my-5 py-5">
        <div className="text-center">
          <div className="container">
            <div>
              <span className="badge-featured mb-3 d-inline-flex align-items-center gap-2">
                <span className="dot"></span>
                التصنيفات
              </span>
              <h2 className="text-white fw-bold fa-4x">استكشف حسب الموضوع </h2>
              <p className="text-secondary">
                اعثر على محتوى مصمم حسب اهتماماتك
              </p>
            </div>

            <div className="row g-5 my-4">

           
                          <NavLink className="col-md-3 text-decoration-none " to="/blogs">
                <div className="inner main-color p-4 bg-dark rounded-4  border border-1  border-secondary text-end icon-category icon-category">
                  <span className="badge-featured mb-3 d-inline-flex align-items-center gap-2 rounded-3 ">
                    <i className="fa-solid fa-gear fa-2x"></i>
                  </span>
                  <p className="fs-3 p-0 m-0">إضاءة</p>
                  <span className="text-secondary">3 مقالة</span>
                </div>
              </NavLink>

                          <NavLink className="col-md-3 text-decoration-none " to="/blogs">
                <div className="inner main-color p-4 bg-dark rounded-4  border border-1  border-secondary text-end icon-category">
                  <span className="badge-featured mb-3 d-inline-flex align-items-center gap-2 rounded-3 ">
                    <i className="fa-solid fa-user fa-2x"></i>
                  </span>
                  <p className="fs-3 p-0 m-0">بورتريه</p>
                  <span className="text-secondary">3 مقالة</span>
                </div>
              </NavLink>

                 <NavLink className="col-md-3 text-decoration-none " to="/blogs">
                <div className="inner main-color p-4 bg-dark rounded-4  border border-1  border-secondary text-end icon-category">
                  <span className="badge-featured mb-3 d-inline-flex align-items-center gap-2 rounded-3 ">
                    <i className="fa-solid fa-image  fa-2x"></i>
                  </span>
                  <p className="fs-3 p-0 m-0">مناظر طبيعية</p>
                  <span className="text-secondary">2 مقالة</span>
                </div>
              </NavLink>

                <NavLink className="col-md-3 text-decoration-none " to="/blogs">
                <div to="/blogs" className="inner main-color p-4 bg-dark rounded-4  border border-1  border-secondary text-end icon-category">
                  <span className="badge-featured mb-3 d-inline-flex align-items-center gap-2 rounded-3 ">
                    <i className="fa-solid fa-sliders fa-2x"></i>
                  </span>
                  <p className="fs-3 p-0 m-0">تقنيات</p>
                  <span className="text-secondary">5 مقالة</span>
                </div>
              </NavLink>

                <NavLink className="col-md-3 text-decoration-none " to="/blogs">
                <div className="inner main-color p-4 bg-dark rounded-4  border border-1  border-secondary text-end icon-category">
                  <span className="badge-featured mb-3 d-inline-flex align-items-center gap-2 rounded-3 ">
                    <i className="fa-solid fa-toolbox fa-2x"></i>
                  </span>
                  <p className="fs-3 p-0 m-0">معدات</p>
                  <span className="text-secondary">3 مقالة</span>
                </div>
              </NavLink>

            </div>
          </div>
        </div>
      </section>
      {/*==========================================================================*/}
<section className=" my-5">
     <div className="container ">
    {/* Header */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-5 gap-3">
            <div>
              <span className="badge-featured mb-3 d-inline-flex align-items-center gap-2">
                <span className="dot"></span>
                مميز
              </span>
              <h2 className="text-white fw-bold  fa-4x">أحدث المقالات </h2>
              <p className="text-secondary">محتوى جديد طازج من المطبعة </p>
            </div>

            <NavLink to="/blogs" className="btn btn-orange rounded-pill px-4 text-white">
             عرض جميع المقالات
              <i className="fa-solid fa-arrow-left ms-2"></i>
            </NavLink>
          </div>


<div className="row">

 {bottomThree.map((pro) => (
    <Productdetails
      key={pro.id}
      pro={pro}
      view={{
        col: "col-md-4",
        flex: "",
      }}
    />
  ))}


</div>


 

</div>

</section>
      {/*==========================================================================*/}
<section className="newsletter-section position-relative overflow-hidden">
  <div className="newsletter-glow"></div>

  <div className="container position-relative">
    <div className="newsletter-card text-center mx-auto">
      <div className="newsletter-icon mx-auto mb-4">
        <i className="fa-regular fa-envelope"></i>
      </div>

      <h2 className="newsletter-title">
        اشترك في <span>نشرتنا الإخبارية</span>
      </h2>

      <p className="newsletter-desc">
        احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
      </p>

      <form className="newsletter-form">
        <input
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          required
        />
        <button type="submit">اشترك الآن</button>
      </form>

      <div className="newsletter-footer">
        <div className="avatars">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32" />
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32" />
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32" />
        </div>

        <span>
          انضم لـ <strong>+10,000</strong> مصور
        </span>

        <span className="dot">•</span>
        <span>بدون إزعاج</span>
        <span className="dot">•</span>
        <span>إلغاء الاشتراك في أي وقت</span>
      </div>
    </div>
  </div>
</section>



    </>
  );
}
