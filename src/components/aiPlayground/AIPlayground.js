import React from 'react';
import Header from '../header/Header';


const AIPlayground = () => {
    return (
        <div className="ai-playground">
            <div className="header-container">
                <Header />
            </div>
            <div className="body-container">
                <div className="code-editor-container"></div>
                <div className="chatbot-container"></div>
            </div>
        </div>
    );
}


export default AIPlayground;