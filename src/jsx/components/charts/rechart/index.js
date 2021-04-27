import React, { Fragment } from "react";
import PageTitle from "../../../layouts/PageTitle";
import { Dropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
import { Row, Card, Nav, Col, Pagination } from "react-bootstrap";

import MetisMenu from "metismenujs";
class MM extends React.Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
    //  this.mm("dispose");
    // console.log(this.mm);
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}
const RechartJs = () => {
  const active = 1;
  let items = [];

  for (let number = 1; number <= 4; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  const pag = (size, gutter, variant, bg, circle) => (
    <Pagination
      size={size}
      className={`mt-4  ${gutter ? "pagination-gutter" : ""} ${
        variant && `pagination-${variant}`
      } ${!bg && "no-bg"} ${circle && "pagination-circle"}`}
    >
      <li className="page-item page-indicator">
        <Link className="page-link" to="#">
          <i className="la la-angle-left" />
        </Link>
      </li>
      {items}
      <li className="page-item page-indicator">
        <Link className="page-link" to="#">
          <i className="la la-angle-right" />
        </Link>
      </li>
    </Pagination>
  );

  const drop = (
    <Dropdown>
      <Dropdown.Toggle variant="" className="table-dropdown i-false">
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect x="0" y="0" width="24" height="24"></rect>
            <circle fill="#000000" cx="5" cy="12" r="2"></circle>
            <circle fill="#000000" cx="12" cy="12" r="2"></circle>
            <circle fill="#000000" cx="19" cy="12" r="2"></circle>
          </g>
        </svg>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#">Edit</Dropdown.Item>

        <Dropdown.Item href="#" className="text-danger">
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const chackbox = document.querySelectorAll(".customer_shop_single input");
  const motherChackBox = document.querySelector(".customer_shop input");
  // console.log(document.querySelectorAll(".publish_review input")[0].checked);
  const chackboxFun = (type) => {
    for (let i = 0; i < chackbox.length; i++) {
      const element = chackbox[i];
      if (type === "all") {
        if (motherChackBox.checked) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      } else {
        if (!element.checked) {
          motherChackBox.checked = false;
          break;
        } else {
          motherChackBox.checked = true;
        }
      }
    }
  };

  const chack = (i) => (
    <div className={`custom-control custom-checkbox ml-2`}>
      <input
        type="checkbox"
        className="custom-control-input "
        id={`checkAll${i}`}
        required=""
        onClick={() => chackboxFun()}
      />
      <label className="custom-control-label" htmlFor={`checkAll${i}`}></label>
    </div>
  );

  return (
    <Fragment>
      <PageTitle activeMenu="List" motherMenu="Questions" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <MM className="metismenu" id="menu">
                <li
                  className="  border p-2 my-2"

                  // className={`${deshBoard.includes(path) ? "mm-active" : ""}`}
                >
                  <Link
                    className="  d-flex align-items-center justify-content-between  "
                    to="#"
                  //   to="/"
                    aria-expanded="false"
                  >
                    <h4 className=" ml-2">1. topic</h4>
                    <i
                      class="fa fa-chevron-circle-down fa-1x"
                      aria-hidden="true"
                    ></i>
                  </Link>
                  <ul aria-expanded="false">
                    <li>
                      <Link
                        className=" mx-4 d-flex align-items-center justify-content-between border-bottom pb-2"
                        // className={`${path === "" ? "mm-active" : ""}`}
                        to="/question"
                        // onClick={() => this.props.onClick3()}
                      >
                        <h4 className=" ml-2">1. sub topic</h4>
                        <i
                          class="fa fa-chevron-right fa-1x"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=" mx-4 d-flex align-items-center justify-content-between border-bottom py-2"
                        // className={`${path === "" ? "mm-active" : ""}`}
                        to="/question"
                        // onClick={() => this.props.onClick3()}
                      >
                        <h4 className=" ml-2">1. sub topic</h4>
                        <i
                          class="fa fa-chevron-right fa-1x"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className="  border p-2 my-2"

                  // className={`${deshBoard.includes(path) ? "mm-active" : ""}`}
                >
                  <Link
                    className="  d-flex align-items-center justify-content-between  "
                    // to="#"
                    to="/question"
                    aria-expanded="false"
                  >
                    <h4 className=" ml-2">1. topic</h4>
                    <i
                      class="fa fa-chevron-right fa-1x"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </li>
                <li
                  className="  border p-2 my-2"

                  // className={`${deshBoard.includes(path) ? "mm-active" : ""}`}
                >
                  <Link
                    className="  d-flex align-items-center justify-content-between  "
                    // to="#"
                    to="/question"
                    aria-expanded="false"
                  >
                    <h4 className=" ml-2">1. topic</h4>
                    <i
                      class="fa fa-chevron-right fa-1x"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </li>
                <li
                  className="  border p-2 my-2"

                  // className={`${deshBoard.includes(path) ? "mm-active" : ""}`}
                >
                  <Link
                    className="  d-flex align-items-center justify-content-between  "
                    // to="#"
                    to="/question"
                    aria-expanded="false"
                  >
                    <h4 className=" ml-2">1. topic</h4>
                    <i
                      class="fa fa-chevron-right fa-1x"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </li>
                <li
                  className="  border p-2 my-2"

                  // className={`${deshBoard.includes(path) ? "mm-active" : ""}`}
                >
                  <Link
                    className="  d-flex align-items-center justify-content-between  "
                    // to="#"
                    to="/question"
                    aria-expanded="false"
                  >
                    <h4 className=" ml-2">1. topic</h4>
                    <i
                      class="fa fa-chevron-right fa-1x"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </li>
                <li
                  className="  border p-2 my-2"

                  // className={`${deshBoard.includes(path) ? "mm-active" : ""}`}
                >
                  <Link
                    className="  d-flex align-items-center justify-content-between  "
                    // to="#"
                    to="/question"
                    aria-expanded="false"
                  >
                    <h4 className=" ml-2">1. topic</h4>
                    <i
                      class="fa fa-chevron-right fa-1x"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </li>
              </MM>

              <Nav>{pag("", true, "info", false, false)}</Nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RechartJs;
