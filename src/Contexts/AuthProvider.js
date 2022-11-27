import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    //  user create
    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // user log in
    const loginWithEmail = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };




    const authInfo = {
        loginWithEmail,
        createUser
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;