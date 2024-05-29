import React from 'react';

function Featureprops({ src, title, description }) {
    return (
        <div className="feature-item" >
            <img src={src} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Featureprops;

