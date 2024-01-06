import React from 'react';
import { Form } from 'react-router-dom';
import { FormButton, OtherAuthOptions, FormHeading } from './FormComponents';

const Signup = () => {
    return(
        <div class="form-container flex-cc">
          <Form action="#" class="flex-col form">

            <FormHeading headingText="Signup" />
            
            <input type="text" name="username-or-email" id="username-or-email" placeholder="Email or Username" required />
            <input type="password" name="password" id="password" placeholder="Password" required class="password-field" /> 
            <div class="agreement flex-cc">
              <input type="checkbox" name="agreement" id="agreement" />Terms and Policies
            </div> 

            <FormButton btnText="Signup" />
            
            <OtherAuthOptions formLinkData={{ 
              linkPrompt: "Already Have an Account ?", 
              linkTo: "login", 
              linkToText: "Login" }} />

          </Form>
        </div>
    );
};

export default Signup ;