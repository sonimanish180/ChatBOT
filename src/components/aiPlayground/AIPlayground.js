import React, { useState } from 'react';
import ChatBotContainer from '../chatBotContainer/ChatBotContainer';
import CodeEditorContainer from '../codeEditorContainer/CodeEditorContainer';
import Header from '../header/Header';


const AIPlayground = () => {
    const [value, setValue] = useState(`function name (param) {return (param);}`);
    const [clicked, setClicked] = useState(false);
    return (
        <div className="ai-playground">
            <div className="header-container">
                <Header />
            </div>
            <div className="body-container">
                <CodeEditorContainer value={value} editorFn ={setValue} clicked={clicked} setClicked={setClicked} />
                <ChatBotContainer value={value} editorFn ={setValue} clicked={clicked} setClicked={setClicked} />
            </div>
        </div>
    );
}


export default AIPlayground;