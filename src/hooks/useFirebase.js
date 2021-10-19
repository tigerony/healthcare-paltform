import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(res => {
                setUser(res.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
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
            setLoading(false);
        })
        return () => unsubscribed;
    }, []);

    const logout = () => {
        setLoading(false);
        signOut(auth)
            .then(() => {

            })
            .finally(() => {
                setLoading(false);
            })
    };

    return {
        user,
        error,
        loading,
        signInWithGoogle,
        signInWithGithub,
        logout
    }
}

export default useFirebase;