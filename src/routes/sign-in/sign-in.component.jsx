import { signInwithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {


  const logGoogleUser = async () => {
    const { user } = await signInwithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }


  return (<div>
    <h1>Sign in page</h1>
    <button onClick={logGoogleUser}>
      Signin in with google popup
    </button>
  </div>)
}

export default SignIn;