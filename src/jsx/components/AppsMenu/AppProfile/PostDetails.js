import React, { Fragment, useState } from "react";
import PageTitle from "../../../layouts/PageTitle";
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
  Pagination,
} from "react-bootstrap";
import ChatBox from "../../../layouts/ChatBox";

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
const PostDetails = () => {
  const [activeAccordionHeaderBg, setActiveAccordionHeaderBg] = useState(0);
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
  const [toggle, setToggle] = useState("");
  const onClick = (name) => setToggle(toggle === name ? "" : name);
  return (
    <Fragment>
      <ChatBox onClick={() => onClick("chatbox")} toggle={toggle} />
      <PageTitle activeMenu="List" motherMenu="Questions" />

      <Row>
        <Col lg={9}>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-4">
                    <h4 className="card-title card-intro-title">Question: 1</h4>
                  </div>
                  <h6>
                    Rachel, 18, is at her GP's requesting the combined oral
                    contraceptive pill (COCP). According to the Faculty of
                    Sexual and Reproductive Healthcare (FSRH) guidelines, which
                    of the following is an absolute contra-indication for COCP?
                  </h6>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-12 ">
                  <div className="">
                    <p className="text-muted c-pointer">
                      <Badge as="a" href="" variant="outline-info">
                        1{" "}
                      </Badge>{" "}
                      <span className="ml-2 question_answer">
                        This is an example of muted text. Add class{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-lg-12 ">
                  <div className="">
                    <p className="text-muted c-pointer">
                      <Badge as="a" href="" variant="outline-info">
                        <i className="fa fa-check text-info"></i>
                      </Badge>{" "}
                      <span className="ml-2 question_answer">
                        This is an example of muted text. Add class{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-lg-12 ">
                  <div className="">
                    <p className="text-muted c-pointer">
                      <Badge as="a" href="" variant="outline-info">
                        3{/* <i className='fa fa-check text-info'></i> */}
                      </Badge>{" "}
                      <span className="ml-2 question_answer">
                        This is an example of muted text. Add class{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-lg-12 ">
                  <div className="">
                    <p className="text-muted c-pointer">
                      <Badge as="a" href="" variant="outline-info">
                        4{" "}
                      </Badge>{" "}
                      <span className="ml-2 question_answer">
                        This is an example of muted text. Add class{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="row mt-4 justify-content-end">
                <Button
                  className="py-2 px-3 align-center"
                  variant="outline-info btn-rounded"
                >
                  Submit Answer
                  {/* <i className="fa fa-chevron-right text-info ml-2"></i> */}
                </Button>
              </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="card">
            <div className="card-body">
              <Button
                onClick={() => onClick("chatbox")}
                className="py-1 px-3 align-center mb-2"
                variant="outline-info "
              >
                Refferences
                {/* <i className="fa fa-chevron-right text-info ml-2"></i> */}
              </Button>
              <div class="row">
                <div class="col">
                  <div
                    style={{
                      background: "#d8f3d9e0",
                      border: "1px solid #4caf50",
                      width: "2rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "1.5rem 2rem",
                      borderRadius: "5px",
                    }}
                  >
                    <i className="fa fa-check"></i>
                  </div>
                </div>
                <div class="col">
                  <div
                    style={{
                      background: "#d8f3d9e0",
                      width: "2rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "1.5rem 2rem",
                      borderRadius: "5px",
                    }}
                  >
                    <i className="fa fa-check"></i>
                  </div>
                </div>
                <div class="col">
                  <div
                    style={{
                      background: "#d8f3d9e0",
                      width: "2rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "1.5rem 2rem",
                      borderRadius: "5px",
                    }}
                  >
                    <i className="fa fa-check"></i>
                  </div>
                </div>
              </div>
              <Nav>{pag("sm", true, "", true, true)}</Nav>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title card-intro-title mb-4">
                Answer Description
              </h4>

              <Accordion
                className="accordion accordion-header-bg  "
                defaultActiveKey="0"
              >
                {defaultAccordion.map((d, i) => (
                  <div className="accordion__item" key={i}>
                    <Accordion.Toggle
                      style={{
                        ...(i == 1 && {
                          backgroundColor: "#2bc15530",
                          color: "#2BC155",
                          borderColor: "#2BC155",
                        }),
                      }}
                      as={Card.Text}
                      eventKey={`${i}`}
                      className={`accordion__header ${
                        activeAccordionHeaderBg === i ? "" : "collapsed"
                      } `}
                      //  accordion__header--${d.bg}
                      onClick={() =>
                        setActiveAccordionHeaderBg(
                          activeAccordionHeaderBg === i ? -1 : i
                        )
                      }
                    >
                      {/* <span className="accordion__header--icon"></span> */}
                      <span className="accordion__header--text">{d.title}</span>
                      <span className="accordion__header--indicator"></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={`${i}`}>
                      <div className="accordion__body--text">{d.text}</div>
                    </Accordion.Collapse>
                  </div>
                ))}
              </Accordion>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title card-intro-title mb-4">Notes</h4>

              <Row>
                <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
                  <Col xl={9} style={{ border: "1px solid" }}>
                    <Tab.Content>
                      {tabData.map((data, i) => (
                        <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                          <p>
                            {data.content} {data.content}
                          </p>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Col>
                  <Col xl={3} id="order-2">
                    <Nav as="div" variant="pills" className="flex-column ml-2">
                      {tabData.map((data, i) => (
                        <Nav.Item as="a" key={i}>
                          <Nav.Link eventKey={data.name.toLowerCase()}>
                            {data.name}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Col>
                </Tab.Container>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title card-intro-title mb-4">
                Helpfull Links
              </h4>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default PostDetails;
