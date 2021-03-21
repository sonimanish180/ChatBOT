import React from 'react';
import {ImSpinner11} from 'react-icons/im';

const Button = ({type="button", label="Submit", onClick= ()=>{}}, buttonClass) => {
    return (        
        <button type={type} className={`button ${buttonClass}`} onClick={onClick}>
            <ImSpinner11 />
            {label}
        </button>
    );
}


export default Button;


