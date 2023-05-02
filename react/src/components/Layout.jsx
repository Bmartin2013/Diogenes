import React from "react"
import { Link, Outlet } from "react-router-dom";
import './Layout.scss'


function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topDeclutters">TopDeclutters</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;