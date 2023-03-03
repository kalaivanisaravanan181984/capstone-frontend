import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

import DispatchStatus911 from "./Dispatch/DispatchStatus911";
import ERStatus from "./ER/ERStatus";
import OutPatientStatus from "./OutPatient/OutPatientStatus";

import ReactLoginfrontend from "./Login/ReactLoginfrontend";
import Patientscheckin from "./Patient/Patientscheckin";
import EMS from "./EMS";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Dispatch" element={<DispatchStatus911 />} />
          <Route path="/OutPatient" element={<OutPatientStatus />} />
          <Route path="/ER" element={<ERStatus />} />
          <Route path="/EMS" element={<EMS />} />
          <Route path="/" element={<ReactLoginfrontend />} />
          <Route path="/Login" element={<ReactLoginfrontend />} />
          <Route path="/Patient" element={<Patientscheckin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
