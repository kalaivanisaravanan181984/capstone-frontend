import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DispatchStatus911.scss";

const DispatchStatus911 = () => {
  const [numOfPatients, setNumOfPatients] = useState(3);
  const [seriousnessOfPatients, setSeriousnessOfPatients] = useState(3);
  const [age, setAge] = useState(99);
  const [painlevel, setPainlevel] = useState("3.0");
  const [temperature, setTemperature] = useState(97.5);
  const [pulserate, setPulseRate] = useState(72);
  const [oxygen, setOxygen] = useState(99);
  const [patientsName, setPatientsName] = useState(99);
  const [bloodpressure, setBloodPressure] = useState(99);
  const [dateofbirth, setDateOfBirth] = useState();
  const [ecg, setEcg] = useState(99);
  const addPatient = (evt) => {
    evt.preventDefault();
    window.prompt("Patient's name?");
  };

  return (
    <div className="container" id="911 Status">
      <h1>Upstate Medical University Hospital</h1>

      <section id="911 Status">
        <h2>911 status</h2>

        <Link to="/Home" class="btn btn-primary">
          Home Page
        </Link>

        <Link to="/OutPatient" class="btn btn-primary">
          Waiting Room Status
        </Link>

        <Link to="/ER" class="btn btn-primary">
          ER Room Status
        </Link>

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
            <div className="ms-2 me-auto">Patient's Name</div>
            <select className="form-select">
              <option>Patient's Name</option>{" "}
            </select>
            <button className="btn btn-primary" onClick={addPatient}>
              +
            </button>
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
            <div className="ms-2 me-auto">Blood Pressure</div>
            <input
              className="form-control"
              type="number"
              value={bloodpressure}
              onChange={(evt) => {
                setBloodPressure(evt.target.value);
              }}
            />

            <span style={{ width: 20 }}> / </span>
            <input
              className="form-control"
              type="number"
              value={bloodpressure}
              onChange={(evt) => {
                setBloodPressure(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Temperature</div>
            <input
              className="form-control"
              type="number"
              value={temperature}
              onChange={(evt) => {
                setTemperature(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Pulse rate</div>
            <input
              className="form-control"
              type="number"
              value={pulserate}
              onChange={(evt) => {
                setPulseRate(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Oxygen</div>
            <input
              className="form-control"
              type="number"
              value={oxygen}
              onChange={(evt) => {
                setOxygen(evt.target.value);
              }}
            />
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">ECG normal/abnormal</div>
            <select className="form-select">
              <option>Normal</option>
              <option>Abnormal</option>
            </select>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              Condition of the patient stable/unstable
            </div>
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
            <div className="ms-2 me-auto">Seriousness of patients</div>
            <input
              className="form-control"
              type="number"
              value={seriousnessOfPatients}
              onChange={(evt) => {
                setSeriousnessOfPatients(evt.target.value);
              }}
            />
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">Need/Don't need hospitalization</div>
            <select className="form-select">
              <option>Need hospitalization</option>
              <option>Don't need hospitalization</option>
            </select>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default DispatchStatus911;
