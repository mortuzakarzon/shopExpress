import { signInwithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";



const SignIn = () => {


  const logGoogleUser = async () => {
    const { user } = await signInwithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef)
  }


  return (<div>
    <h1>Sign in page</h1>
    <button onClick={logGoogleUser}>
      Signin in with google popup
    </button>
    <SignUpForm />

  </div>)
}

export default SignIn;