import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OutPatientStatus = () => {
  const [numOfPatients, setNumOfPatients] = useState(3);
  const [age, setAge] = useState(14);
  const [temperature, setTemperature] = useState(97.5);
  const [pulserate, setPulseRate] = useState(72);
  const [oxygen, setOxygen] = useState(99);
  const [painlevel, setPainlevel] = useState(10);
  const [checkInTime, setCheckInTime] = useState("01:00");
  const [estWaitTime, setEstWaitTime] = useState(0);
  const [priorityNumber, setPriorityNumber] = useState(1);
  const [patientsName, setPatientsName] = useState("");
  const [bloodpressure, setBloodPressure] = useState(99);
  const [dateofbirth, setDateOfBirth] = useState();
  const [patients, setPatients] = useState([]);

  const getPatientsNames = async () => {
    const response = await fetch(`http://localhost:3001/patientdata`);
    const data = await response.json();
    setPatients(data.patientsdata);
  };
  useEffect(() => {
    getPatientsNames();
  }, []);

  const addPatient = async (evt) => {
    evt.preventDefault();
    const patientName = window.prompt("Patient's name?");
    const response = await fetch(`http://localhost:3001/patientdata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ patientName }),
    });
    getPatientsNames();
  };

  // const num1 = 1;
  // const str1 = "1";
  // console.log(num1 == str1); //true;
  // console.log(num1 === str1); //false

  const updatePatientData = (selectedID) => {
    const selectedPatient = patients.find(
      (patient) => patient.id == selectedID
    );
    setAge(selectedPatient.patientage);
  };

  return (
    <div className="container">
      <h1>Upstate Medical University Hospital</h1>

      <Link to="/Home" class="btn btn-primary">
        Home Page
      </Link>

      <Link to="/Dispatch" class="btn btn-primary">
        911 Status
      </Link>

      <Link to="/ER" class="btn btn-primary">
        ER Room Status
      </Link>

      <section id="Outpatient Status">
        <h2>OutPatient Status</h2>

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
            <select
              className="form-select"
              onChange={(evt) => {
                setPatientsName(evt.target.value);

                updatePatientData(evt.target.value);
              }}
              value={patientsName}
            >
              <option>Patient's Name</option>{" "}
              {patients.map((patient) => {
                return (
                  <option key={patient.id} value={patient.id}>
                    {patient.patientname}
                  </option>
                );
              })}
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
              Age ({age <= 18 ? "Pediatric" : "Adult"})
            </div>
            <input
              className="form-control"
              type="number"
              value={age}
              onChange={(evt) => {
                setAge(evt.target.value);
              }}
              onBlur={async () => {
                await fetch(
                  `http://localhost:3001/patientdata/${patientsName}`,
                  {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ patientage: age }),
                  }
                );
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
              type="time"
              value={checkInTime}
              onChange={(evt) => {
                setCheckInTime(evt.target.value);
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

export default OutPatientStatus;
