import React, { Fragment, useState } from "react";
import PageTitle from "../../layouts/PageTitle";

import {
  Col,
  Badge,
  Button,
  Row,
  Accordion,
  Card,
  Tabs,
  Tab,
  Nav,
} from "react-bootstrap";
import MetisMenu from "metismenujs";

/// images
import { Link } from "react-router-dom";

const defaultAccordion = [
  {
    title: "Accordion Header One",
    text:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    //  bg: "primary",
  },
  {
    title: "Accordion Header Two",
    text:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",

    //  bg: "info",
  },
  {
    title: "Accordion Header Three",
    text:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",

    bg: "success",
  },
];
const tabData = [
  {
    name: "Study Notes",
    icon: "home",
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
  },
  {
    name: "Revision Notes",
    icon: "user",
    content:
      "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
  },
  {
    name: "Explanation Notes",
    icon: "phone",
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
  },
];
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
const UiAccordion = () => {
  const [activeAccordionHeaderBg, setActiveAccordionHeaderBg] = useState(0);

  return (
    <Fragment>
      <PageTitle activeMenu="List" motherMenu="Bookmarks" />
      <Row>
        <Col>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
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
                            // to="/question"
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
                            // to="/question"
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
                        // to="/question"
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
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={9}>
          <div className="card">
            <div className="card-body">
              <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
                <Nav as="ul" className="nav-pills mb-4 justify-content-end">
                  {tabData.map(
                    (data, i) =>
                      i !== tabData.length && (
                        <Nav.Item as="li" key={i}>
                          <Nav.Link eventKey={data.name.toLowerCase()}>
                            {/* Tab {i === 1 ? "One" : i === 2 ? "Two" : "Three"} */}
                            {data.name}
                          </Nav.Link>
                        </Nav.Item>
                      )
                  )}
                </Nav>
                <Tab.Content className="pt-4">
                  {tabData.map(
                    (data, i) =>
                      i !== tabData.length - 1 && (
                        <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                          <p>{data.content}</p>
                          <p>{data.content}</p>
                        </Tab.Pane>
                      )
                  )}
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UiAccordion;
