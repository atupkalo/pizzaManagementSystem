import "./SideBarContent.css";
import currentOrder from "../../../data/currentorder.json";
import Image from "next/legacy/image";
import { useState } from "react";

interface MenuButton {
  label: string;
  icon: string;
  isActive: boolean;
}

interface OrderItem {
  label: string;
  value: string;
}

interface SideBarContentProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function SideBarContent({ setActiveSection }: SideBarContentProps) {
  const [menuButtons, setMenuButtons] = useState<MenuButton[]>([
    { label: "PIZZAS", icon: "/pizzas.svg", isActive: true },
    { label: "CUSTOM", icon: "/custom.svg", isActive: false },
    { label: "TOPPINGS", icon: "/toppings.svg", isActive: false },
  ]);

  const handleMenuClick = (index: number): void => {
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
          {currentOrder.map((item: OrderItem, index: number) => (
            <div key={index} className="current-item">
              <p className="strong">{item.label}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="main-menu-container">
        <ul className="main-btn-list">
          {menuButtons.map((item: MenuButton, index: number) => (
            <li
              key={index}
              className={`main-btn-item ${item.isActive ? "main-btn-active" : ""}`}
              onClick={() => handleMenuClick(index)}
            >
              <div className="main-btn-icon-wrap">
                <Image
                  src={item.icon}
                  layout="fill" 
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