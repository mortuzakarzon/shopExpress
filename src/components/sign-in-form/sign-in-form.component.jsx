import { useState } from "react";
import Button from "../button/button.component";
import { signInwithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

const defaultFieldsValue = {
  email: "",
  password: "",

}


const SignInForm = () => {

  const [fieldsValues, setFieldValues] = useState(defaultFieldsValue);
  const { email, password } = fieldsValues;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFieldValues({ ...fieldsValues, [name]: value })

  }

  const resetFormFields = () => {
    setFieldValues(defaultFieldsValue);
  }

  const signInWithGoogle = async () => {
    const { user } = await signInwithGooglePopup();

  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Password is incorrect");
      } else if (error.code === "auth/user-not-found") {
        alert("User Not Found! Please sign up first");
      } else {
        console.log(error)
      }
    }
  }

  return (<div className="sign-in-container">
    <h2>Already Have An Account? </h2>
    <span>Sign in with your email and passwor</span>
    <form onSubmit={handleSubmit}>

      <FormInput
        label="Email"
        type="email"
        required
        name="email"
        value={email}
        onChange={handleChange}
      />

      <FormInput
        label="Password"
        type="password"
        required
        name="password"
        value={password}
        onChange={handleChange}
      />
      <div className="buttons-container">
        <Button type="submit">Sign In With Email</Button>
        <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign in</Button>
      </div>

    </form>
  </div>)
}

export default SignInForm;