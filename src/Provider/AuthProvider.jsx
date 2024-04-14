import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from '../firebase/firebase.config'



export const CreateContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [loader, setLoader] = useState(true);


    // login 
    const register = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Google Log in method
    const logInWithMedia = () =>{
        const googleProvider = new GoogleAuthProvider();
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }


    const authInfo = {
        register,
        logInWithMedia
    }
    return (
        <CreateContext.Provider value={authInfo}>
            {children}
        </CreateContext.Provider>
    );
};

export default AuthProvider;