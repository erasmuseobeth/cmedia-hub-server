import React from 'react';
import { Link, Form } from 'react-router-dom';
import { FormButton, OtherAuthOptions, FormHeading } from './FormComponents';


export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  console.log(email,password);

}

const Login = () => {
    return(
        <div className="form-container flex-cc">
            <Form  className="flex-col form">

              <FormHeading headingText="Login" />

              <input type="text" name="username-or-email" id="username-or-email" placeholder="Email or Username" required />
              <input type="password" name="password" id="password" placeholder="Password" required className="password-field" />
              <div className="form-account-recovery flex-sb">
                <p className="form-remember-me flex-cc"><input type="checkbox" name="remember-me" id="remember-me" className="styled-checkbox" />Remember Me</p>
                <Link to="./signup.html" className="form-forgot-password">Forgot Password&nbsp;?</Link>
              </div>

              <FormButton btnText="Login" />
              
              <OtherAuthOptions formLinkData={{ linkPrompt: "Already Have an Account ?", linkTo: "login", linkToText: "Login" }} />
            </Form>
        </div>
    );
};

export default Login ;

