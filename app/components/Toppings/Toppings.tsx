import "./Toppings.css";
import Toppings from "../../../data/toppings.json";

export default function Pazzas() {
  return (
    <div className="pizzas-wrap">
      <ul className="pizzas-list">
        {Toppings.map((item, index) => (
            <li key={index} className="pizza-item">
                <div className="pizza-name">{item.name}</div>
                <div className="pizza-circle"></div>
            </li>
        ))}
      </ul>
      <div className="pizzas-btn">ADD</div>
    </div>
  )
}