import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../Firebase/Firebase.';


export const AuthContex = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const LogIn= (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword (auth,email,password)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged( auth, currentUser =>{
            console.log('current User inside state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();

    }, [])


    const authinfo={user,loading,createUser,LogIn,logOut}
    return (
       <AuthContex.Provider value={authinfo}>
        {children}
       </AuthContex.Provider>
    );
};

export default UserContext;