import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div class="login flex-cc">
            <form action="#" class="flex-col form login-form">
          <h2 class="form-heading flex-cc">Login</h2>
          <input type="text" name="username-or-email" id="username-or-email" placeholder="Email or Username" required />
          <input type="password" name="password" id="password" placeholder="Password" required class="password-field" />
          <div class="form-account-recovery flex-sb">
            <p class="form-remember-me flex-cc"><input type="checkbox" name="remember-me" id="remember-me" class="styled-checkbox" />Remember Me</p>
            <Link to="./signup.html" class="form-forgot-password">Forgot Password&nbsp;?</Link>
          </div>
          <button type="submit" id="login-form-submit" class="btn">Login</button>
          <div class="flex-col form-other-auths">
            <p class="flex-cc form-or">or</p>
            <div class="form-other-auths-icon">
                <i class="fa-brands fa-google"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
            <p class="flex-cc form-signup-link">Don't have an account ? &nbsp; <Link to="./signup.html"> Signup</Link></p>
          </div>
        </form>
        </div>

    );
};

export default Login ;