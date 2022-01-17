import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginSuccess } from "../redux/user/action";

export const User = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const isAuths = useSelector((state) => state.user.isAuths);
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
  console.log(isAuths);
  if (isAuths) {
    return <Navigate to="/getinfo" />;
  }
  // console.log(isAuth);
  // console.log(info);

  return (
    <div>
      <h4> User Login Form</h4>
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
