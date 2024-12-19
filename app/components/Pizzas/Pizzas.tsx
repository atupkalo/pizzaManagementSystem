import "./Pizzas.css";
import Pizzas from "../../../data/pizzas.json";
import Image from "next/image";

export default function Pazzas() {
  return (
    <div className="pizzas-wrap">
      <div className="pizzas-size">
        <div className="size-item">
            <div className="size-circle size-circle-active"></div>
            <div className="size-text size-text-active" >Large</div>
        </div>
        <div className="size-item size-item-hover">
            <div className="size-circle"></div>
            <div className="size-text">Small</div>
        </div>
      </div>
      <ul className="pizzas-list">
        {Pizzas.map((item, index) => (
            <li key={index} className="pizza-item">
                <div className="pizza-name">{item.name}</div>
                <div className="pizza-circle"></div>
            </li>
        ))}
      </ul>
      <div className="pizzas-btn">ADD</div>
      <div className="pizzas-edit">
        <div className="edit-icon-wrap">
          <Image  
            src="/settings.svg" 
            layout="responsive"
            width={4}
            height={4} 
            alt="Pizza icon"/>
        </div>
        <div className="pizzas-edit-text"> manage list</div>
      </div>
    </div>
  )
}
