import { useState } from "react";
import "./PizzaSize.css";

export default function PizzaSize() {
  const [activeSize, setActiveSize] = useState("Large"); 

  const handleSizeClick = (size: string) => {
    setActiveSize(size); // Update active size
  };

  return (
    <div className="pizzas-size">
      {["Large", "Small"].map((size) => (
        <div
          key={size}
          className={`size-item ${activeSize === size ? "size-item-active" : ""}`}
          onClick={() => handleSizeClick(size)} // Set active on click
        >
          <div className={`size-circle ${activeSize === size ? "size-circle-active" : ""}`}></div>
          <div className={`size-text ${activeSize === size ? "size-text-active" : ""}`}>
            {size}
          </div>
        </div>
      ))}
    </div>
  );
}
