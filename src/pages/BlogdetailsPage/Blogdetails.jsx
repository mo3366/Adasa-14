import React from "react";
import { Container, Row, Col, Badge, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

import "./Blogdetails.css";

export default function Blogdetails() {
  const { state } = useLocation();
const navigate = useNavigate();

  if (!state)
    return <div className="text-white text-center mt-5">لا يوجد محتوى</div>;

  function tags() {
    if (!state.tags || state.tags.length === 0) return null;

    return state.tags.map((tag, index) => (
      <button key={index} className="tag-btn">
        {tag}
      </button>
    ));
  }

  // Slider
  function slugify(text) {
    return text
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\u0600-\u06FF\w-]/g, "");
  }

  const markdownComponents = {
    h2: ({ children }) => {
      const text = String(children);
      const id = slugify(text);

      return <h2 id={id}>{children}</h2>;
    },
  };

function getHeadings(content) {
  if (!content) return [];

  return content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const title = line.replace("## ", "").trim();
      return {
        title,
        id: slugify(title),
      };
    });
}




  

// 3 cards
let products=
[
    {
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
    }]

  return (
    <div className="blog-details">
      {/* ===== HERO ===== */}
      <div
        className="blog-hero "
        style={{
          backgroundImage: `url(${state.image})`,
        }}
      >
        <div className="overlay" />

        <Container className="hero-content">
          <Badge bg="warning" className="mb-3">
            {" "}
            {state.category}
          </Badge>

          <h1 className="hero-title">{state.title}</h1>

          <div className="author-box">
            <img src={`${state.author.avatar}`} alt={`${state.author.name}`} />
            <div>
              <h6> {state.author.name}</h6>
              <span> {state.author.role}</span>
            </div>
          </div>
        </Container>
      </div>

      {/* ===== CONTENT ===== */}
      <Container className="mt-5">
        <Row>
          {/* Article */}
          <Col lg={8}>
            <Card className="content-card p-4">
              <Card.Body className="main-color">
                <ReactMarkdown components={markdownComponents}>
                  {state.content}
                </ReactMarkdown>
              </Card.Body>
            </Card>
          </Col>

          {/* Sidebar */}
          <Col lg={4}>
            <div className="sticky-top z-3 top-0">
              <Card className="mb-4 sidebar-card main-color ">
                <Card.Body>
                  <h5>محتويات المقال</h5>

                  <ul className="content-list ">
                    {getHeadings(state.content).map((item, index) => (
                      <li key={index}>
                        <button
                          className="toc-link"
                          onClick={() => {
                            const element = document.getElementById(item.id);
                            if (element) {
                              element.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }
                          }}
                        >
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>

              <Card className="sidebar-card ">
                <Card.Body className="text-white d-flex justify-content-center">
                  <h6 className="px-3 bg-dark rounded-4 py-5">
                    ⏱ {state.readTime}
                  </h6>
                  <h6 className="px-4 bg-dark rounded-4 py-5 me-4">
                    {" "}
                    {state.date}
                  </h6>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>

        {/* tags */}

        <div className="border border-1 border-dark p-4 d-flex flex-column gap-3 my-5">
          <div>
            <span className=" btn btn-outline-warning">
              <i class="fa-solid fa-tags m-1"></i> الوسوم
            </span>{" "}
          </div>
          <div>{tags()}</div>
        </div>
      </Container>

      {/* ===== RELATED ===== */}
      <Container className="mt-5">
        <h3 className="mb-4">مقالات قد تعجبك</h3>

     <div className="row">
    {products.slice(0, 3).map((product) => (
      <div className="col-md-4" key={product.id}>
<article
  className="article-mini-card"
  onClick={() =>
    navigate("/blog-details", { state: product })
  }
  style={{ cursor: "pointer" }}
>
          <div className="article-img-wrapper">
            <img
              src={product.image}
              alt={product.title}
              className="article-img"
            />
            <span className="article-badge">{product.category}</span>
            <div className="article-gradient"></div>
          </div>

          <div className="article-body">
            <div className="article-meta">
              <span>
                <i className="fa-regular fa-clock"></i> {product.readTime || "5 دقائق للقراءة"}
              </span>
              <span className="dot"></span>
              <span>{product.date || "تاريخ غير محدد"}</span>
            </div>

            <h3 className="article-title">{product.title}</h3>

            <p className="article-desc">{product.excerpt}</p>

            <div className="article-footer">
              <div className="author">
                <img src={product.author?.avatar} alt={product.author?.name} />
                <div>
                  <p>{product.author?.name}</p>
                  <span>{product.author?.role}</span>
                </div>
              </div>

              <div className="read-arrow">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
            </div>
          </div>
        </article>
      </div>
    ))}
  </div>
      </Container>
    </div>
  );
}
