import React, { useContext } from "react";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";

const Login = (props) => {
  const { handleLogin } = useContext(AuthContext);
  const email = useFormInput("testx2@test.com", "Email");
  const password = useFormInput("123456", "Email");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.value);
    console.log(password.value);

    //api call here pass {email, password}
    handleLogin({ email: email.value, password: password.value });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>{email.label}</p>
        <input autoFocus {...email} />
        <p>{password.label}</p>
        <input type="password" {...password} />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
