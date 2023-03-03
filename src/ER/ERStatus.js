import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ERStatus.scss";

import { useNavigate } from "react-router-dom";
const ERStatus = () => {
  const navigateTo = useNavigate();
  const [numOfPatients, setNumOfPatients] = useState(3);
  const [numOfBeds, setNumOfBeds] = useState(4);
  const [occupiedBeds, setOccupiedBeds] = useState(5);
  const [availableBeds, setAvailableBeds] = useState(5);
  const [numberofpatientsiner, setNumberOfPatientsInER] = useState(5);
  const [numberofdoctorsonduty, setNumberOfDoctorsOnDuty] = useState(5);
  const [numberofdoctorsoncall, setNumberOfDoctorsOnCall] = useState(5);
  const [numberofnurses, setNumberOfNurses] = useState(5);
  const [numberofclinicalstaffs, setNumberOfClinicalStaffs] = useState(5);
  const [numberofadministrativestaffs, setNumberOfAdministrativeStaffs] =
    useState(5);

  return (
    <div className="container" id="erstatus">
      <h1>Upstate Medical University Hospital</h1>

      <section id="Emergency room status">
        <h2>Emergency room status</h2>

        <nav>
          <Link to="/Home" class="btn btn-primary">
            Home Page
          </Link>

          <Link to="/OutPatient" class="btn btn-primary">
            Waiting Room Status
          </Link>

          <Link to="/Dispatch" class="btn btn-primary">
            911 status
          </Link>
        </nav>

        <ol className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Number of patients</div>
            <input
              className="form-control"
              type="number"
              value={numOfPatients}
              onChange={(evt) => {
                setNumOfPatients(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Total number of beds</div>
            <input
              className="form-control"
              type="number"
              value={numOfBeds}
              onChange={(evt) => {
                setNumOfBeds(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Occupied beds</div>
            <input
              className="form-control"
              type="number"
              value={occupiedBeds}
              onChange={(evt) => {
                setOccupiedBeds(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Available beds</div>
            <input
              className="form-control"
              type="number"
              value={availableBeds}
              onChange={(evt) => {
                setAvailableBeds(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Number of patients in ER</div>
            <input
              className="form-control"
              type="number"
              value={numberofpatientsiner}
              onChange={(evt) => {
                setNumberOfPatientsInER(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Number of doctors on duty</div>
            <input
              className="form-control"
              type="number"
              value={numberofdoctorsonduty}
              onChange={(evt) => {
                setNumberOfDoctorsOnDuty(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Number of doctors on call</div>
            <input
              className="form-control"
              type="number"
              value={numberofdoctorsoncall}
              onChange={(evt) => {
                setNumberOfDoctorsOnCall(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Number of nurses</div>
            <input
              className="form-control"
              type="number"
              value={numberofnurses}
              onChange={(evt) => {
                setNumberOfNurses(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Number of clinical staffs</div>
            <input
              className="form-control"
              type="number"
              value={numberofclinicalstaffs}
              onChange={(evt) => {
                setNumberOfClinicalStaffs(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Number of administrative staffs</div>
            <input
              className="form-control"
              type="number"
              value={numberofadministrativestaffs}
              onChange={(evt) => {
                setNumberOfAdministrativeStaffs(evt.target.value);
              }}
            />
          </li>
        </ol>
      </section>
    </div>
  );
};

export default ERStatus;
