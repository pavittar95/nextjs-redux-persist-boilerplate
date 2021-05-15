import React, { useCallback, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { List } from "react-bootstrap-icons";

import Meta from "./meta";
import styles from "../styles/Header.module.scss";

import { loginOut } from "../store/user/actions";
import Sidebar from "./common/sidebar";

export default function Header() {
  const [showSidebar, setshowSidebar] = useState(false);
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch(loginOut());
  }, []);
  const toggleSidebar = useCallback(() => {
    setshowSidebar(!showSidebar);
  }, [showSidebar]);
  return (
    <>
      <Meta />
      <nav className="header-container">
        <div className="brand">Brand Name</div>
        <div className="menu d-none d-md-flex d-xl-flex">
          <ul>
            <li>
              <Link href="/services">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu-button d-flex flex-row">
          <button className="btn btn-primary">
            <Link href="/get-started">
              <a className="text-white text-decoration-none">Get Started</a>
            </Link>
          </button>
          <button
            className="d-block d-md-none d-xs-none btn btn-dark p-1"
            onClick={toggleSidebar}
          >
            <List size="25" color="white" />
          </button>
        </div>
      </nav>
      <Sidebar />
    </>
  );
}
