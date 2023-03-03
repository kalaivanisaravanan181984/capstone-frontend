import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const loginFormSubmitted = async (evt) => {
    evt.preventDefault();

    const loginResponse = await fetch(`http://localhost:3001/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    const loginData = await loginResponse.json();
    if (loginData.error) {
      alert(loginData.error);
    } else {
      navigateTo("/Home");
    }
  };

  return (
    <div className="container-fluid" id="login">
      <h1>Upstate Medical University Hospital</h1>
      <h2>Login</h2>
      <div className="row">
        <div className="col">
          <form onSubmit={loginFormSubmitted}>
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              onChange={(evt) => {
                setEmail(evt.target.value);
              }}
              value={email}
            />
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(evt) => {
                setPassword(evt.target.value);
              }}
              value={password}
            />
            <label className="form-check-label" for="form1Example3">
              Remember me
            </label>

            <div className="row">
              <div className="col">
                <a href="#!">Forgot username? </a>
                <a href="#!">Forgot password? </a>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <div>
              <a href="https://apple.com">Download on the App Store/</a>
              <a href="https:/google.com">Get it on Google Play Store</a>
            </div>
          </form>
        </div>
        <div className="col">
          <div className="card">Patient</div>
          <div className="card">911</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
