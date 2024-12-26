import "./Pizzas.css";
import Ingridient from "../Ingridient/Ingridient";
import PizzasMenu from "../../../data/pizzas.json";
import Image from "next/image";

export default function Pizzas() {
  return (
    <div className="pizass-wrap">
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
            {PizzasMenu.map((item, index) => (
                <Ingridient key={index} text={item.name}/>
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
    </div>
  )
}
