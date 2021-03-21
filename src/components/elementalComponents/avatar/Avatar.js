import React from 'react';

const Avatar = ({src="/"}) => {
    return (
        <div className="avatar">
            <img className="image" src={src} alt="User Image" />
        </div>
    );
}

export default Avatar;