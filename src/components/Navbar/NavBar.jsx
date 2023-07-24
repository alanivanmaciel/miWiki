import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="NavBar">
      <h1 className="Logo">miWiki...</h1>
      <div className={isOpen ? "Menu open" : "Menu close"} id="_Menu" >
        <button>Botón</button>
        <button>Botón</button>
        <button>Botón</button>
      </div>
      <button className="Toggle" id="_Toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </header>
  );
}

export default NavBar;
