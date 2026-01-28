import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbarr from "../../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function Productdetails({ pro = {}, view }) {
  const {
    id,
    slug,
    title,
    excerpt,
    content,
    category,
    author,
    image,
    date,
    readTime,
    featured,
    tags,
  } = pro;



//ايعته علشان يطيع البيانات
const navigate = useNavigate();

function detailsPage() {
  navigate("/blog-details", {
    state: pro, 
  });
}




  return (
    <>

      <div className={view.col}>
        <article className={`article-mini-card  ${view.flex}`}  onClick={() => detailsPage(id)}>
          <div className="article-img-wrapper">
            <img src={`${image}`} alt={`${title}`} className="article-img" />

            <span className="article-badge">{category}</span>
            <div className="article-gradient"></div>
          </div>

          <div className="article-body">
            <div className="article-meta">
              <span>
                <i className="fa-regular fa-clock"></i> {readTime}
              </span>
              <span className="dot"></span>
              <span>{date}</span>
            </div>

            <h3 className="article-title">{title}</h3>

            <p className="article-desc">{excerpt}</p>

            <div className="article-footer">
              <div className="author">
                <img src={`${author.avatar}`} alt={`${author.name}`} />
                <div>
                  <p>{author.name} </p>
                  <span> {author.role}</span>
                </div>
              </div>

              <div className="read-arrow">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
