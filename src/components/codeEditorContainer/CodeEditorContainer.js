import React, { useEffect, useState } from "react";
import Button from "../elementalComponents/button/Button";
import Editor from "../editor/Editor";


const CodeEditorContainer = ({setClicked, value, clicked, editorFn}) => {
  const [countTab, setCountTab] = useState(0);
  let [tabList, setTabList] = useState([]);

  let handleAddTab = () => {
    //   console.log("clicked");
      setCountTab(countTab+1);
      setTabList([...tabList, {name:`newTab${countTab+1}`, id:{countTab} }]);
  };

  const handleCloseTab = (id) => {
    setTabList(tabList.filter(tab => tab.id !== id));
  }

  const handleAddFunction = () => {
    //   setClicked(!clicked);
    //   let x = eval(value);
    //   console.log(x);
    // editorFn((new Function(`return ${value}`)())()); 
    console.log("clicked");
  }

//   useEffect(() => {
//       setTabList(tabListInit);
//       console.log(tabListInit);
//   }, [])

  return (
    <div className="code-editor-container">
      <div className="code-editor-header">
        <div className="tabContainer">
          <div className="main-tab-title">
            <p>Script.js</p>
          </div>
          {!!countTab && tabList.map((tab) => {
                return (<div key={tab.id} className="main-tab-title">
                    <p>{tab.name}</p>                    
                    <span onClick={() => handleCloseTab(tab.id)} className="close-tab">x</span>
                </div>)
          })}
          <button onClick={handleAddTab} className="add-tab">
            <p>+</p>
          </button>
        </div>
        <Button label="Apply Changes" onClick={handleAddFunction}/>
      </div>
      <div className="playground">
          <Editor editorFn={editorFn} setClicked={setClicked} clicked={clicked}/>
      </div>
    </div>
  );
};

export default CodeEditorContainer;
