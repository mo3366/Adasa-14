import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo-GdqARQRt.png"
import "./Navbar.css"

export default function Navbarr() {
  return (
    <>

     <nav className="navbar navbar-expand-lg navbar-dark bg-black navbarr sticky-top z-4"  
>
  <div className="container d-flex justify-content-between align-items-center">

    {/* اللوجو */}
    <Link className="navbar-brand" to="/home">
      <div className="d-flex  text-white">
        <img src={logo} alt="logo" className="logo m-2" />
        <div className="d-flex flex-column text-white">
 <p className="m-0 fs-2 p-0 fw-bold ">عـــــدسـة</p>
        <span className="small main-color fw-ligh  ">عالم التصوير الفوتوغرافي</span>
        </div>
       
      </div>
    </Link>

    {/* القوائم في النص */}
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex bg-dark p-2 rounded-5">
      <li className="nav-item">
        <NavLink className="nav-link px-3" aria-current="page" to="/home">
          الرئيسية
        </NavLink>
      </li>
      <li className="nav-item px-3">
        <NavLink className="nav-link" aria-current="page" to="/blogs">
          المدونة
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link px-3 " aria-current="page" to="/">
          من نحن
        </NavLink>
      </li>
    </ul>

    {/* زر البحث أو أي action */}
    <form className="d-flex" role="search">
      <div className="text-white me-2 d-flex flex-column justify-content-center p-3 bg-dark rounded-4 ms-2"><i class="fa-solid fa-magnifying-glass "></i></div>
      <button className="main-background text-white py-2 px-4 rounded-5 border-0" type="submit">
        ابدأ القراءة
      </button>
    </form>

  </div>
</nav>

    </>
  );
}
