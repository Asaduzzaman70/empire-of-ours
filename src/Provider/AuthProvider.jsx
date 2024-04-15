import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config'
import { updateProfile as updateUserProfile } from "firebase/auth";




export const CreateContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);


    // register
    const register = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // update profile
    const upProfile = async (name, photoUrl) => {
        setLoader(true);
        try {
            await updateUserProfile(auth.currentUser, { displayName: name, photoURL: photoUrl });
            setLoader(false);
            console.log("Profile updated successfully.");
        } catch (error) {
            setLoader(false);
            console.error("Error updating profile:", error);
        }
    };


    // Google Log in method
    const logInWithMedia = () => {
        const googleProvider = new GoogleAuthProvider();
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Sign Out
    const logOut = () =>{
        return signOut(auth);
    }

    // Get User information
    useEffect(()=>{
        onAuthStateChanged(auth, (data)=>{
            setUser(data);
            console.log(data);
        })
    },[])


    const authInfo = {
        user,
        register,
        logInWithMedia,
        upProfile,
        logOut
    }
    return (
        <CreateContext.Provider value={authInfo}>
            {children}
        </CreateContext.Provider>
    );
};

export default AuthProvider;