
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from './firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



export const AuthContax = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



const AuthContaxProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
console.log(user);

    const createRegister = (email, password, name, photoUrl) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, name, photoUrl)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = async () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then(() => {
                toast.success("Login Successfully");
                
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
    const githubLogin = async() => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
        .then(() => {
            toast.success("Login Successfully");

        })
        .catch((error) => {
            console.error(error.message);
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = { user, logOut, loading, createRegister, loginUser, googleLogin, githubLogin }

    return (
        <AuthContax.Provider value={authInfo}>
            {children}
            <ToastContainer />
        </AuthContax.Provider>

    );
};

AuthContaxProvider.propTypes = {
    children: PropTypes.node

};

export default AuthContaxProvider;