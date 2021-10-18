import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    };

    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(res => {
                console.log(res.user);
                setUser(res.user);
            })
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        })
        return () => unsubscribed;
    }, []);

    const logout = () => {
        signOut(auth)
            .then(() => {

            })
    }

    return {
        user,
        error,
        signInWithGoogle,
        signInWithGithub,
        logout
    }
}

export default useFirebase;