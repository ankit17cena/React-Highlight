import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { themes } from "prism-react-renderer";
import './styles.css'; 

const LiveCodeEditor = () => {
  return (
    <div className="container">
      <div className="title">Live Code Syntax Highlighting</div>
      <div className="box">
        <LiveProvider code="" theme={themes.shadesOfPurple}>
          <LiveEditor contentEditable={false} style={{ whiteSpace: 'pre-wrap' }} />
          <LiveError style={{ display: 'none' }} />
          <LivePreview />
        </LiveProvider>
      </div>
    </div>
  );
};

export default LiveCodeEditor;

