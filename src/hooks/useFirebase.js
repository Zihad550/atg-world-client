import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

// providers
const googleProvider = new GoogleAuthProvider();

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();

  // states
  const [user, setUser] = useState({});

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // navigate

  // login using google
  const googleLogin = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const user = res.user;
        // setUser(res.user);
        const destination = location?.state?.from?.pathname || "/";
        setUser(user);
        navigate(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // register
  const registerUser = (registerData) => {
    const { name, email, password } = registerData;
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        // set error
        setError("");
        setUser(res.user);
        // setUser({ email, displayName: name });

        // save name
        updateProfile(auth.currentUser, {
          displayName: name,
        }).catch((error) => {
          setError(error.message);
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // login
  const login = (loginData) => {
    const { email, password } = loginData;
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        setError("");
        console.log(res);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  // logout
  const logOut = () => {
    signOut(auth)
      .then(() => {
        //sign-out successfully
      })
      .catch((error) => setError(error.massage))
      .finally(() => setIsLoading(false));
  };

  // reset password
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // observe the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setError("");
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);
  return {
    user,
    error,
    googleLogin,
    registerUser,
    login,
    logOut,
    isLoading,
    setError,
    resetPassword,
  };
};

export default useFirebase;
