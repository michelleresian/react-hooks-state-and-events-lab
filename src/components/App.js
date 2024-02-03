import React, { useState } from "react"; // Import useState from React

import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!isDarkMode);
  }
  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}> {/* Use backticks for string interpolation */}
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button> {/* Fix the onClick attribute */}
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
