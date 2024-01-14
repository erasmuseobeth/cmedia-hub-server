// components/FormButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGoogle,faFacebook,faInstagram, } from '@fortawesome/free-brands-svg-icons';



const FormButton = ( { btnText } ) => {
  return (
    <button type="submit" className="btn"> { btnText } </button>
  );
};

const FormHeading = ( { headingText } ) => {
  return(
    <h2 className="form-heading flex-cc">{ headingText }</h2>
  )
}

const FormLink  = ( { linkPrompt, linkTo, linkToText, } ) => {
  return(
    <p className="flex-cc form-link">{ linkPrompt} &nbsp; <Link to={ linkTo }> { linkToText } </Link> </p>
  )
}


const OtherAuthOptions = ( { formLinkData } ) => {
    return(
        <div className="flex-col form-other-auths">
            <p className="form-or">or</p>
            <div className="other-auth-options">
            <FontAwesomeIcon icon={faGoogle} className='icon social-icon'/>
            <FontAwesomeIcon icon={faFacebook} className='icon social-icon'/>
            <FontAwesomeIcon icon={faInstagram} className='icon social-icon'/>
            </div>
            <FormLink {...formLinkData} />
          </div>
    );
};


export  { FormButton, OtherAuthOptions, FormHeading };
