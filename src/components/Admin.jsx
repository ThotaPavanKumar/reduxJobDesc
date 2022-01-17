import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginSuccess } from "../redux/admin/action";

export const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  // const user = useSelector((state) => state.auth.user);

  const handleSubmit = (e) => {
    let payload = { username, password };
    e.preventDefault();
    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        dispatch(loginSuccess(res));
      });
  };
  console.log(isAuth);
  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }
  // console.log(isAuth);
  // console.log(info);

  return (
    <div>
      <h4> Admin Login Form</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
      <div></div>
    </div>
  );
};
