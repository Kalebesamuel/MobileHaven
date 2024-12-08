import React from "react";
import Highlighter from "react-highlighter";

// Define a wrapper component
const HighlighterText = (props) => {
  return (
    <Highlighter
      {...props}
      matchStyle={{
        backgroundColor: "#dedcdc",
        borderRadius: 5,
      }}
    />
  );
};

export default HighlighterText;
