import React from "react";
import "../styles.css";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

export default function App() {
  return (
    <div className="App">
      <h1>I am app component</h1>
      <CommentBox />
      <CommentList />
    </div>
  );
}
