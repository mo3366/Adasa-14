import Footer from "../Footer/Footer"
import Navbarr from "../Navbar/Navbar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
      <Navbarr />
      <Outlet />
      <Footer />

    </>
  )
}
