import React, { useContext } from "react";
import { MyContext } from "../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useContext(MyContext);

  const loginUser = (e) => {
    e.preventDefault();

    axios
      .post(
        "/users/login",
        JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.headers.token);
          setUser(res.data.data);
          navigate("/profile");
        } else {
          alert(res.data.message);
        }
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <label>
          Email: <input type="email" name="email" />{" "}
        </label>
        <br />
        <label>
          Password: <input type="password" name="password" />{" "}
        </label>
        <br />
        <button>login</button>
      </form>
    </div>
  );
}
