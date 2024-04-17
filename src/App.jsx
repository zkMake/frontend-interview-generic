import React, { useState, useEffect } from "react";

import "./App.css";

// -- Paste Questions Here --
console.log("edclub");

export default function App() {
  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>This is a form</h1>
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="email" />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
