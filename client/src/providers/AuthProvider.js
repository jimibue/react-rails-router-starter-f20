import React, { useState } from "react";
import axios from "axios";

// create and export the context
export const AuthContext = React.createContext();

// export consumer, but with functional component and the useContext we don't need this, would need this without hooks
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [authErrors, setAuthErrors] = useState(null);

  // method to register a new user
  // with async we can use the await
  // use promise in a more linear fansion, eaiser to read

  // user should be {email, password, passwordConfrimation}
  const handleRegister = async (user, history) => {
    try {
      setAuthLoading(true);
      setAuthErrors(null); // when do you want to clear the error before or after the axios call

      // it is a lot of prefence and opinions

      // this will block my code exuection for 5 seconds
      // this is good if you need some thing from this call below
      // bad if you don't

      // axios calls return a promise so use await
      let resw = await axios.get("https://reqres.in/api/users?delay=2");

      console.log("now registering");
      let res = await axios.post("/api/auth", user);

      console.log(res);
      // res.data.data because that is how devise_token is going to send it back
      // res.data you really don't know for when it someone else api call, so inspect res or look at documentation

      // you don't know what this looks like
      setUser(res.data.data);

      history.push("/");
    } catch (err) {
      // redo error handling
      // err.response.data.errors.full_messages is an array
      setAuthErrors(err.response.data.errors.full_messages);
      // alert(err); should avoid alerts in production bad UX
    } finally {
      setAuthLoading(false);
    }
  };

  // I am expecting user to be {email, password}
  const handleLogin = async (user, history) => {
    try {
      setAuthLoading(true);
      setAuthErrors(null);
      let res = await axios.post("api/auth/sign_in", user);

      setUser(res.data.data);
      history.push("/");
    } catch (err) {
      setAuthErrors(err.response.data.errors);
      // you can't be sure what this will look like
    } finally {
      setAuthLoading(false);
    }
  };

  //React Hook "useAxios" is called in function "handleLoginHook" which is neither a React function component or a custom React Hook function

  // const handleLoginHook = (user, history) => {
  //   let { data, loading, error } = useAxios("api/auth/sign_in", {
  //     method: "post",
  //     data: user,
  //   });
  //   console.log(data);
  //   console.log(loading);
  //   console.log(error);

  //   setUser(data.data);
  //   history.push("/");
  // };

  const handleLogout = async (history) => {
    try {
      // await block until done
      let res = await axios.delete("/api/auth/sign_out");
      setUser(null);
      history.push("/login");
    } catch (err) {
      debugger;
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: user !== null,
        authLoading,
        authErrors,
        setUser,
        handleRegister,
        handleLogout,
        handleLogin,
        tacos: "awesome",
      }}
    >
      {/* nested stuff going here */}
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
