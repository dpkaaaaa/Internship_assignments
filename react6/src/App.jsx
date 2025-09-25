import React, { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div >
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2>Welcome to the Modal!</h2>
          <p>This modal popup using React Portal.</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
