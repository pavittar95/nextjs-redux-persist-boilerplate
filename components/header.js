import React, { useCallback } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { loginOut } from "../store/user/actions";
import "../styles/Header.module.css";
import Meta from "./meta";

export default function Header() {
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch(loginOut());
  }, []);
  return (
    <>
      <Meta />
      <nav>
        <div className="brand">Brand Name</div>
        <div className="menu">
          <ul>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="other-action"></div>
      </nav>
    </>
  );
}
