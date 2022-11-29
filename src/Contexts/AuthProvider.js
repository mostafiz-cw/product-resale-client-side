import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [loader, setLoader] = useState(false);
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);

    //  user create
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // user log in
    const loginWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    // manage user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setuser(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }
    },[])


    // uddate user 
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    };

    // user log out 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    




    const authInfo = {
        loginWithEmail,
        createUser,
        loader,
        setLoader,
        user,
        logOut,
        updateUser,
        loading
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;