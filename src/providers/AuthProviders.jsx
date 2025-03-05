import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const AuthProviders = ({children}) => {

const [user, setUser]= useState(null);

const [loading, setLoading]=useState(true);


const createUser = (email, password)=>{
    setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
};

const sighIn = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
};


const signInWithGoogle =()=>{
  setLoading(true);
 return signInWithPopup(auth, provider)
}


const logOut =()=>{
    setLoading(true);
    return signOut(auth);
};


  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false)
    });

    return ()=> {
        return unSubscribe()}
  },[]);

    const authInfo ={
       user,loading, createUser,sighIn, logOut, signInWithGoogle
    }


  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders