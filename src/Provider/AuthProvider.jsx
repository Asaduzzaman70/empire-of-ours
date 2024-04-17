import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config'
import { updateProfile as updateUserProfile } from "firebase/auth";




export const CreateContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // loader
    const [loader, setLoader] = useState(true);
    const [loadPropertyData, setLoadPropertyData] = useState([]);
    // slider data
    const [sliderData, setSliderData] = useState([]);



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

    // login with password
    const logIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Log in method
    const logInWithMedia = (arg) => {
        if (arg === 'google') {
            const googleProvider = new GoogleAuthProvider();
            setLoader(true);
            return signInWithPopup(auth, googleProvider);
        }
        else if (arg == 'gitHub') {
            const gitHubProvider = new GithubAuthProvider();
            setLoader(true);
            return signInWithPopup(auth, gitHubProvider);
        }
    }

    // Sign Out
    const logOut = () => {
        return signOut(auth);
    }

    // Get User information
    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            setUser(data);
            console.log(data);
        })
    }, [])

    // Fetch Slider data
    useEffect(() => {
        setLoader(true);
        fetch('https://api.jsonbin.io/v3/b/661f6540ad19ca34f85b4e5d')
            .then(res => res.json())
            .then(data => setSliderData(data.record))
    }, [])

    // Load Property Data from JSON Bin
    useEffect(() => {
        setLoader(true);
        fetch('https://api.jsonbin.io/v3/b/661f5a1fe41b4d34e4e595e0')
            .then(res => res.json())
            .then(data => setLoadPropertyData(data.record))
    }, [])


    const authInfo = {
        user,
        loadPropertyData,
        sliderData,
        register,
        logIn,
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