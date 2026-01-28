import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <footer className="site-footer position-relative overflow-hidden">
      {/* GLOW */}
      <div className="footer-glow glow-left"></div>
      <div className="footer-glow glow-right"></div>

      <div className="container py-5 position-relative">
        <div className="row gy-5">

          {/* BRAND */}
          <div className="col-lg-3">
            <div className="footer-brand mb-4">
              <div className="logo-icon">ع</div>
              <span className="logo-text">عدسة</span>
            </div>

            <p className="footer-desc">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>

            <div className="social-links">
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-github"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          {/* LINKS */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">استكشف</h5>
            <ul className="footer-links">
              <li><a href="/">الرئيسية</a></li>
              <li><a href="/blog">المدونة</a></li>
              <li><a href="/about">من نحن</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">التصنيفات</h5>
            <ul className="footer-links">
              <li><a href="#">إضاءة</a></li>
              <li><a href="#">بورتريه</a></li>
              <li><a href="#">مناظر طبيعية</a></li>
              <li><a href="#">تقنيات</a></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="col-lg-3">
            <h5 className="footer-title">ابقى على اطلاع</h5>
            <p className="footer-desc small">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            <form className="footer-form">
              <input type="email" placeholder="أدخل بريدك الإلكتروني" />
              <button type="submit">اشترك</button>
            </form>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p>
            © 2026 عدسة. صنع بكل <i className="fa-solid fa-heart"></i>
          </p>

          <div className="footer-bottom-links">
            <a href="/privacy">سياسة الخصوصية</a>
            <a href="/terms">شروط الخدمة</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
