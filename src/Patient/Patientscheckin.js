import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Patientscheckin = () => {
  const navigateTo = useNavigate();
  const [nearbyhospitalsinmiles, setNearByHospitals] = useState("3.0");
  const [age, setAge] = useState(99);
  const [address, setAddress] = useState("3.0");
  const [phonenumber, setPhoneNumber] = useState(3);
  const [emergencyContactName, setEmergencyContactName] = useState();
  const [emergencyContactPhoneNumber, setEmergencyContactPhoneNumber] =
    useState(3);
  const [medicalIllness, setMedicalIllness] = useState("3.0");
  const [painlevel, setPainlevel] = useState("3.0");
  const [checkInTime, setCheckInTime] = useState("3.0");
  const [priorityNumber, setPriorityNumber] = useState("3.0");
  const [estWaitTime, setEstWaitTime] = useState("3.0");

  return (
    <div className="container">
      <h1>Emergency Department</h1>

      <section id="Emergency room status">
        <h2>Patient's Check-in Page</h2>

        <ol className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Near by hospitals in miles</div>
            <input
              className="form-control"
              type="number"
              value={nearbyhospitalsinmiles}
              onChange={(evt) => {
                setNearByHospitals(evt.target.value);
              }}
            />
            <div class="input-group mb-3"></div>
            <div class="input-group-prepend">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Suny Upstate University Hospital Downtown
                </a>
                <a class="dropdown-item" href="#">
                  Suny Upstate University Hospital Community Campus
                </a>
                <a class="dropdown-item" href="#">
                  Crouse Hospital
                </a>
              </div>
            </div>
            <div>
              {" "}
              <input
                type="text"
                class="form-control"
                aria-label="Text input with dropdown button"
              />
            </div>{" "}
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Average Wait time</div>
            <select className="form-select">
              <option>Average Wait time</option>
            </select>
          </li>
          <div>
            {" "}
            <button className="btn btn-primary" type="submit">
              Back
            </button>
          </div>
          <div>
            <button className="btn btn-primary" type="submit">
              Continue
            </button>
          </div>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Patient's Name</div>
            <select className="form-select">
              <option>Patient's Name</option>
            </select>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Date of Birth</div>
            <input className="form-control" type="date" />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              age ({age <= 18 ? "Pediatric" : "Adult"})
            </div>
            <input
              className="form-control"
              type="number"
              value={age}
              onChange={(evt) => {
                setAge(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Address</div>
            <input
              className="form-control"
              type="text"
              value={address}
              onChange={(evt) => {
                setAddress(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Phone number</div>
            <input
              className="form-control"
              type="number"
              value={phonenumber}
              onChange={(evt) => {
                setPhoneNumber(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Emergency Contact Name</div>
            <input
              className="form-control"
              type="text"
              value={emergencyContactName}
              onChange={(evt) => {
                setEmergencyContactName(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Emergency contact phone number</div>
            <input
              className="form-control"
              type="number"
              value={emergencyContactPhoneNumber}
              onChange={(evt) => {
                setEmergencyContactPhoneNumber(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Medical Illness</div>
            <input className="form-control" type="number" value="4" />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Condition of the patient</div>
            <select className="form-select">
              <option>Stable</option>
              <option>Unstable</option>
            </select>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Pain level of the patient</div>
            <input
              className="form-control"
              type="number"
              value={painlevel}
              onChange={(evt) => {
                setPainlevel(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Check-in time</div>
            <input
              className="form-control"
              type="number"
              value={checkInTime}
              onChange={(evt) => {
                setCheckInTime(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Priority number</div>
            <input
              className="form-control"
              type="number"
              value={priorityNumber}
              onChange={(evt) => {
                setPriorityNumber(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Estimated Wait time</div>
            <input
              className="form-control"
              type="number"
              value={estWaitTime}
              onChange={(evt) => {
                setEstWaitTime(evt.target.value);
              }}
            />
          </li>
        </ol>
      </section>
    </div>
  );
};
export default Patientscheckin;
