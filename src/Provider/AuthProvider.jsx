import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const CreateContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [loader, setLoader] = useState(true);

    // login 
    const login = (email, password) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        login
    }
    return (
        <CreateContext.Provider value={authInfo}>
            {children}
        </CreateContext.Provider>
    );
};

export default AuthProvider;