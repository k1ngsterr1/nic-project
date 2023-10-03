import React, { useState } from "react";

import "./styles/burger.css";

interface BurgerButtonProps {
  open: () => void;
  opened: boolean;
}

const Burger: React.FC<BurgerButtonProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="burger-menu">
      <button className={`burger-button ${isOpen ? "open" : "closed"}`}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </div>
  );
};

export default Burger;
