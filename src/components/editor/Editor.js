import React from 'react';
import MonacoEditor from 'react-monaco-editor';

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: `function name (param) {return (param);}`,
    }
    this.editorDidMount = this.editorDidMount.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    //   console.log(this.props.clicked);
    //   if (this.props.clicked) {    
        //   console.log(newValue());  
          
        this.props.editorFn(newValue);
    //     this.props.setClicked(false);
    //   }
      this.setState({code : newValue}) 
    console.log('onChange', newValue, e);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <MonacoEditor
        width="100%"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}