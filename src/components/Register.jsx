import { useState } from "react";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    let payload = { name, email, password, username, mobile, description };
    e.preventDefault();
    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        //  dispatch(loginSuccess(res));
        // setToken(res.token);
      });
    // setIsauth(!isAuth);
  };
  return (
    <div>
      <h4>Registration Form</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Mobile"
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
