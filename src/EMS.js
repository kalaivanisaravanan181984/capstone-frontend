import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const EMS = () => {
  const navigateTo = useNavigate();

  return (
    <div className="container">
      <div className="row" id="navbar"></div>
      <h1>Emergency Medical Services</h1>

      <div className="row">
        <div className="col-sm-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Emergency Room</h5>
              <p className="card-text">ER room Status page</p>
              <select className="form-control">
                <option>Crouse</option>
                <option>Upstate</option>
                <option>St Joe</option>
              </select>
              <a href="911ERlink.html" className="btn btn-primary">
                Go to ER status
              </a>
              <a href="911ERlink.html" className="btn btn-primary">
                Go to Crouse ER status
              </a>
              <a href="911ERlink.html" className="btn btn-primary">
                Go to St Joes ER status
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Patient Status</h5>
              <p className="card-text">Patients information</p>
              <a href="911patient.html" className="btn btn-primary">
                Go to Patient status
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMS;
