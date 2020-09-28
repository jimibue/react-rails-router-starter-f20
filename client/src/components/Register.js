import React, { useContext } from "react";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";

const Register = (props) => {
  const email = useFormInput("", "Email");
  const password = useFormInput("", "Password");
  const passwordConfrimation = useFormInput("", "password Confrimation");

  const { handleRegister } = useContext(AuthContext);

  const handleSubmit = (e) => {
    //need to do this
    e.preventDefault();

    // maybe check valid email, etc
    if (password.value !== passwordConfrimation.value) {
      alert("passwords don not match");
    } else {
      // regisiter user
      handleRegister({
        email: email.value,
        password: password.value,
        passwordConfrimation: passwordConfrimation.value,
      });
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <p>{email.label}</p>
        <input autoFocus {...email} />
        <p>{password.label}</p>
        <input type="password" {...password} />
        <p>{passwordConfrimation.label}</p>
        <input type="password" {...passwordConfrimation} />
        <button type="submit">register</button>
      </form>
    </div>
  );
};

export default Register;
