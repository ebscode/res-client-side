import { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import axios from "axios";

export const authcontext = createContext(null);
const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const createuser = (email, password) => {
    setloading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      const useremail = currentuser?.email || user?.email;
      const loggedemail = { email: useremail };
      setuser(currentuser);

      setloading(false);
      if (currentuser) {
        axios
          .post(
            "https://restaurant-server-side-three.vercel.app/jwt",
            loggedemail,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });
      } else {
        axios.post(
          "https://restaurant-server-side-three.vercel.app/logout",
          loggedemail,
          { withCredentials: true }
        );
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const login = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setloading(true);
    return signOut(auth);
  };

  const authinfo = {
    user,
    loading,
    createuser,
    login,
    logout,
  };

  return (
    <authcontext.Provider value={authinfo}>{children}</authcontext.Provider>
  );
};

export default Authprovider;
