import React, { Fragment } from "react";
import { Dropdown, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

// imeges
import bit_1 from "../../../images/svg/bitcoin-1.svg";
import bit_2 from "../../../images/svg/ethereum-1.svg";
import bit_3 from "../../../images/svg/ripple-1.svg";
import bit_4 from "../../../images/svg/litecoin-1.svg";

// Chart
import WidgetChart1 from "../Dhrev/Home/chart/WidgetChart1";
import WidetChart2 from "../Dhrev/Home/chart/WidetChart2";
import WidetChart3 from "../Dhrev/Home/chart/WidetChart3";
import WidetChart4 from "../Dhrev/Home/chart/WidetChart4";
import ActivityLine from "../Dhrev/Home/chart/ActivityLine";
import ActivityLine2 from "../Dhrev/Home/chart/ActivityLine2";
import ActivityLine3 from "../Dhrev/Home/chart/ActivityLine3";
import Donut from "../Dhrev/Home/chart/Donut";
import BarChart1 from "./bar1";
// Slider
import CardSlider from "../Dhrev/Home/slider/CardSlider";
import Contacts from "../Dhrev/Home/slider/Contacts";

const Home = () => {
  return (
    <Fragment>
      <>
        <div className="form-head d-flex mb-4 mb-md-5 align-items-start">
          <div className="input-group search-area d-inline-flex">
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="flaticon-381-search-2" />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
          </div>
          {/* <Link to="/" className="btn btn-primary ml-auto">
                  + Add New Cyrpto
               </Link> */}
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-12 col-sm-12">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <h2 className="card-title">Jhone doe</h2>
              </div>
              <div className="card-body pb-0">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex px-0 justify-content-between">
                    <strong>Gender</strong>
                    <span className="mb-0">Male</span>
                  </li>
                  <li className="list-group-item d-flex px-0 justify-content-between">
                    <strong>Education</strong>
                    <span className="mb-0">PHD</span>
                  </li>
                  <li className="list-group-item d-flex px-0 justify-content-between">
                    <strong>Designation</strong>
                    <span className="mb-0">Se. Professor</span>
                  </li>
                  <li className="list-group-item d-flex px-0 justify-content-between">
                    <strong>Operation Done</strong>
                    <span className="mb-0">120</span>
                  </li>
                </ul>
              </div>
              <div className="card-footer pt-0 pb-0 text-center">
                <div className="row">
                  <div className="col-4 pt-3 pb-3 border-right">
                    <h3 className="mb-1 text-primary">150</h3>
                    <span>Projects</span>
                  </div>
                  <div className="col-4 pt-3 pb-3 border-right">
                    <h3 className="mb-1 text-primary">140</h3>
                    <span>Uploads</span>
                  </div>
                  <div className="col-4 pt-3 pb-3">
                    <h3 className="mb-1 text-primary">45</h3>
                    <span>Tasks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-12 col-sm-12">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <h2 className="card-title">Progress</h2>
              </div>
              <div className="card-body pb-0">
                <BarChart1 />
              </div>
            </div>
          </div>
        </div>
      </>
    </Fragment>
  );
};

export default Home;
