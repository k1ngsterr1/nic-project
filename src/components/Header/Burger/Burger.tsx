import Hamburger from "hamburger-react";
import React from "react";

import "./styles/burger.css";

interface HamburgerProps {
  burgerClass: string;
  setOpen: any;
  isOpened: any;
}

const Burger: React.FC<HamburgerProps> = (props) => {
  return (
    <div className={props.burgerClass}>
      <Hamburger
        color="#023047"
        size={21}
        toggle={props.setOpen}
        toggled={props.isOpened}
      />
    </div>
  );
};

export default Burger;
