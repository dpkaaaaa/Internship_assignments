import React, { useState } from "react";

function Parent() {
  const [text, setText] = useState("");

  // Callback function to update parent state
  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <div>
      {/* Input child */}
      <Child1 text={text} handleTextChange={handleTextChange} />

      {/* Output child */}
      <Child2 text={text} />
    </div>
  );
}

// Child component Child1 (input)
function Child1({ text, handleTextChange }) {
  return (
    <input
      type="text"
      placeholder="Type something..."
      value={text}
      onChange={(e) => handleTextChange(e.target.value)}
    />
  );
}

// Child component Child2 (output)
function Child2({ text }) {
  return <h2>Output: {text}</h2>;
}

export default Parent;
