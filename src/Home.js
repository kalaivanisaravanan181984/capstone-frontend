import "./App.scss";
import "./App.js";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigateTo = useNavigate();
  const [patientsintheER, setPatientsInTheER] = useState("3");
  const [patientsWith911, setPatientsWith911] = useState("9");
  const [patientsAtTheWaitingroom, setPatientsAtTheWaitingRoom] = useState("9");
  const [checkedInPatients, setCheckedInPatients] = useState("9");

  return (
    <div className="container">
      <div className="row" id="navbar">
        <h1 style={{ color: "white" }}>Upstate Medical University Hospital</h1>
        <div className="container text-center"></div>
        <h2>Home Page</h2>
      </div>

      <div className="row hero-banner">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Emergency Room</h5>
              <p className="card-text">ER room Status page</p>
              <Link to="/ER" class="btn btn-primary">
                Go to ER status
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Dispatch</h5>
              <p className="card-text">911 Dispatch status</p>
              <a href="Dispatch status911.html" class="btn btn-primary">
                <Link to="/Dispatch" class="btn btn-primary">
                  Go to dispatch911 status
                </Link>
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Outpatient</h5>
              <p className="card-text">Patients at the waiting room</p>
              <a href="Outpatient.html" class="btn btn-primary">
                <Link to="/OutPatient" class="btn btn-primary">
                  Go to Outpatient status
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <section id="Overall-patients">
          <h2>Overall patients</h2>

          <ol className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">Patients in the ER</div>
              <input
                class="form-control"
                type="number"
                value={patientsintheER}
                onChange={(evt) => {
                  setPatientsInTheER(evt.target.value);
                }}
              />
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">Patients with 911</div>
              <input
                className="form-control"
                type="number"
                value={patientsWith911}
                onChange={(evt) => {
                  setPatientsWith911(evt.target.value);
                }}
              />
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">Patients at the waiting room</div>
              <input
                className="form-control"
                type="number"
                value={patientsAtTheWaitingroom}
                onChange={(evt) => {
                  setPatientsAtTheWaitingRoom(evt.target.value);
                }}
              />
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">Checked-in Patients</div>
              <input
                className="form-control"
                type="number"
                value={checkedInPatients}
                onChange={(evt) => {
                  setCheckedInPatients(evt.target.value);
                }}
              />
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Home;
