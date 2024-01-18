import { createContext, useContext, useState, useEffect } from "react";
import { RenderRoutes } from "./RenderRoutes";
import axios from "axios";

const AuthContext = createContext();

export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState({
    email: "",
    role: "",
    isAuthenticated: false,
  });

  const login = (email, password) => {
    return new Promise((resolve) => {
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
              console.error(fail);
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

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/users/getAll", { method: "POST" })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        if (Array.isArray(result) && result.length > 0 && result[0].email) {
          setAllUsers(result);
        } else {
          console.error("Invalid data format:", result);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  const [allCenters, setAllCenters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/centers/getAllCenters", {
      method: "POST",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        if (Array.isArray(result) && result.length > 0) {
          setAllCenters(result);
        }
      });
  }, []);

  const loggedUser = allUsers.filter(
    (allusers) => allusers.email === user.email
  );

  const loggedUserRole = loggedUser.map((loggeduser) => (
    <p>{loggeduser.role}</p>
  ));

  const loggedUserPoints = loggedUser.map((loggeduser) => (
    <p>{loggeduser.points}</p>
  ));

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loggedUserRole,
        loggedUserPoints,
        allCenters,
      }}
    >
      <>
        <RenderRoutes />
      </>
    </AuthContext.Provider>
  );
};
