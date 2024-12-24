import "./SideBarContent.css";
import currentOrder from "../../../data/currentorder.json";
import Image from "next/image";
import { useState } from "react";

export default function SideBarContent({ setActiveSection }) {
  const [menuButtons, setMenuButtons] = useState([
    { label: "PIZZAS", icon: "/pizzas.svg", isActive: true },
    { label: "CUSTOM", icon: "/custom.svg", isActive: false },
    { label: "TOPPINGS", icon: "/toppings.svg", isActive: false },
  ]);

  const handleMenuClick = (index) => {
 
    const updatedButtons = menuButtons.map((button, i) => ({
      ...button,
      isActive: i === index,
    }));
    setMenuButtons(updatedButtons);

   
    setActiveSection(menuButtons[index].label);
  };

  return (
    <div className="sidebar-inner">
      <div className="currret-container">
        <div className="current-progress">In progress</div>
        <div className="current-inner-box">
          <div className="current-name">Vegetarian</div>
          {currentOrder.map((item, index) => (
            <div key={index} className="current-item">
              <p className="strong">{item.label}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="main-menu-container">
        <ul className="main-btn-list">
          {menuButtons.map((item, index) => (
            <li
              key={index}
              className={`main-btn-item ${item.isActive ? "main-btn-active" : ""}`}
              onClick={() => handleMenuClick(index)} 
            >
              <div className="main-btn-icon-wrap">
                <Image
                  src={item.icon}
                  layout="responsive"
                  width={4}
                  height={4}
                  alt="Pizza icon"
                  className="main-btn-icon"
                />
              </div>
              <div>{item.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}