import { getAuth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init"

initializeAuthentication();

const useFb = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => console.log(res.user));
    }

    return {
        googleSignIn
    }
}

export default useFb;