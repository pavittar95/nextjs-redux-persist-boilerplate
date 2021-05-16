import React from "react";
import Classnames from "classnames";
import Link from "next/link";
import { X, XCircle } from "react-bootstrap-icons";
import "../../styles/Sidebar.module.scss";

export default function Sidebar({ active, toggle }) {
  return (
    <div
      className={Classnames("position-fixed top-0 bottom-0 end-0 z-2 sidebar", {
        "close": !active,
        "open": active,
      })}
    >
      <div className="bg-white px-4 pt-3 pb-4 h-100 row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <Link href="/">
              <a className="h4 m-0">Brand Name</a>
            </Link>
            <button
              className="d-block d-md-none d-xs-none btn btn-dark p-1"
              onClick={toggle}
            >
              <XCircle size="25" color="white" />
            </button>
          </div>
        </div>
        <div className="col-12">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Link href="/">
                <a>About Us</a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/">
                <a>Contact Us</a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/">
                <a>Services</a>
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/">
                <a>About Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-12">
          <ul className="list-group list-group-horizontal list-group-flush justify-content-around">
            <li className="list-group-item border-0">
              <Link href="/">
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li className="list-group-item border-0">
              <Link href="/">
                <a>Terms {"&"} Conditions</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
