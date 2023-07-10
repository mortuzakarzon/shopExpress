import { signInwithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {


  const logGoogleUser = async () => {
    const response = await signInwithGooglePopup();
    console.log(response)
  }


  return (<div>
    <h1>Sign in page</h1>
    <button onClick={logGoogleUser}>
      Signin in with google popup
    </button>
  </div>)
}

export default SignIn;