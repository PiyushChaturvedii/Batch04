// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import {
    // auth,
    signInWithGooglePopup,
    // signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../utils/fireebase/firebase.utils";

const SignIn = () => {
//     // useEffect(() => {
//     //     const asyncFn = async () => {
//     //         const response = await getRedirectResult(auth);
//     //         console.log(response)
//     //     };
//     //     asyncFn()
//     // }, []);

// useEffect(async () => {

//     const response = await getRedirectResult(auth);
//     // console.log(response);
//     if (response) {
        
//         const userDocRef = await createUserDocumentFromAuth(response.user);
//     }
// },[])
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>
                Sign In Page.
            </h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
<SignUpForm/>
        </div>
    )
}


export default SignIn;