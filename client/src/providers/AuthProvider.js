import React, { useState } from "react";
import axios from "axios";

// create and export the context
export const AuthContext = React.createContext();

// export consumer, but with functional component and the useContext we don't need this, would need this without hooks
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  // method to register a new user
  // with async we can use the await
  // use promise in a more linear fansion, eaiser to read

  // user should be {email, password, passwordConfrimation}
  const handleRegister = async (user) => {
    try {
      // axios calls return a promise so use await
      let res = await axios.post("/api/auth", user);
      // res.data.data because that is how devise_token is going to send it back
      // res.data you really don't know for when it someone else api call, so inspect res or look at documentation

      // you don't know what this looks like
      setUser(res.data.data);
    } catch (err) {
      // redo error handling
      const errs = err.response.data.errors.full_messages.reduce(
        (acc, val) => acc + val
      );
      alert(errs);
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, setUser, handleRegister, tacos: "awesome" }}
    >
      {/* nested stuff going here */}
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
