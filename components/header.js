import React, { useCallback } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { loginOut } from "../store/user/actions";
import Head from "next/head";
import Meta from "./meta";

export default function Header() {
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch(loginOut());
  }, []);
  return (
    <>
      <Meta />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">Home</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a
                    className="nav-link active text-capitalize"
                    aria-current="page"
                  >
                    How it works
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link text-capitalize" href="#">
                    For employers
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link text-upppercase" href="#">
                    faq
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link text-capitalize" href="#">
                    i need help now
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/login">
                  <a className="nav-link text-capitalize" href="#">
                    Login
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
