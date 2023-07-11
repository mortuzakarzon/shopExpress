import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFieldsValue = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}
const SignUpForm = () => {
  const [fieldsValues, setFieldValues] = useState(defaultFieldsValue);
  const { displayName, email, password, confirmPassword } = fieldsValues;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFieldValues({ ...fieldsValues, [name]: value })

  }
  const resetFormFields = () => {
    setFieldValues(defaultFieldsValue);
  }

  const handleSubmit = async (event) => {
    resetFormFields();
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });


    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("User creation encountered an error", error);
      }
    }

  }



  return (<div>
    <h1>Sign Up with your email and passwor</h1>
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Display Name"
        type="text"
        required
        name="displayName"
        value={displayName}
        onChange={handleChange}
      />

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
      <FormInput
        label="Confirm Password"
        type="password"
        required
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
      />

      <button type="submit">Sign Up</button>
    </form>
  </div>)
}

export default SignUpForm;