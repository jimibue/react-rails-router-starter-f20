import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";

const Login = (props) => {
  const history = useHistory();
  const { handleLogin, setUser, authLoading, authErrors } = useContext(
    AuthContext
  );
  const email = useFormInput("testx2@test.com", "Email");
  const password = useFormInput("123456", "Email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email.value);
    console.log(password.value);

    //api call here pass {email, password}
    handleLogin({ email: email.value, password: password.value }, history);

    // could put login fucntionalty here in Login as long as a use the setUser function from my provider, to set the user

    // try {
    //   let res = await axios.post("api/auth/sign_in", {
    //     email: email.value,
    //     password: password.value,
    //   });

    //   setUser(res.data.data);
    //   history.push("/");
    // } catch (err) {
    //   alert("error in logging in");
    //   debugger;
    // }
  };
  return (
    <div>
      {authErrors && (
        <>
          {authErrors.map((err) => (
            <p>{err}</p>
          ))}
        </>
      )}
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>{email.label}</p>
        <input autoFocus {...email} />
        <p>{password.label}</p>
        <input type="password" {...password} />
        {authLoading ? (
          <button disabled> spinner goes here</button>
        ) : (
          <button type="submit">login</button>
        )}
      </form>
    </div>
  );
};

export default Login;
