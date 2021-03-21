import React from 'react';

const Button = ({type="button", label="Submit", onClick= ()=>{}}, buttonClass) => {
    return (        
        <button type={type} className={`button ${buttonClass}`} onClick={onClick}>{label}</button>
    );
}


export default Button;


