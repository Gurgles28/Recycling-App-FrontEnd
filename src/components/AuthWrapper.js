import { createContext, useContext, useState } from "react";
import { RenderRoutes } from "./RenderRoutes";
import axios from "axios";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState({ email: "", isAuthenticated: false });
  const login = (email, password) => {
    // Make a call to the authentication API to check the username

    return new Promise((resolve, reject) => {
      try {
        axios
          .post("http://localhost:8080/api/v1/users/login", {
            email: email,
            password: password,
          })
          .then(
            (res) => {
              console.log(res.data);

              if (res.data.message === "Email not exits") {
                alert("Email not exits");
              } else if (res.data.message === "Login Success") {
                setUser({ email: email, isAuthenticated: true });
                resolve("success");
              } else {
                alert("Incorrect Email and Password not match");
              }
            },
            (fail) => {
              console.error(fail); // Error!
            }
          );
      } catch (err) {
        alert(err);
      }
    });
  };
  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <>
        <RenderRoutes />
      </>
    </AuthContext.Provider>
  );
};
