import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return(
        <>
        <div class="signup flex-cc">
        <form action="#" class="flex-col form signup-form">
          <h2 class="form-heading flex-cc">Signup</h2>
          <input type="text" name="username-or-email" id="username-or-email" placeholder="Email or Username" required />
          <input type="password" name="password" id="password" placeholder="Password" required class="password-field" /> 
          <div class="agreement flex-cc">
            <input type="checkbox" name="agreement" id="agreement" />Terms and Policies
          </div>
         
          <button type="submit" id="signup-form-submit" class="btn">Signup</button>
          <div class="flex-col form-other-auths">
            <p class="flex-cc form-or">or</p>
            <div class="form-other-auths-icon">
                <i class="fa-brands fa-google"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
            <p class="flex-cc form-login-link">Already have an account ? &nbsp; <Link to="./login.html">Login</Link></p>
          </div>
        </form>
      </div>
      </>


    );
};

export default Signup ;