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
            <p className="flex-cc form-or">or</p>
            <div className="form-other-auths-icon">
            <FontAwesomeIcon icon={faGoogle} className='icon'/>
            <FontAwesomeIcon icon={faFacebook} className='icon'/>
            <FontAwesomeIcon icon={faInstagram} className='icon'/>

            </div>
            <FormLink {...formLinkData} />
          </div>
    );
};


export  { FormButton, OtherAuthOptions, FormHeading };
