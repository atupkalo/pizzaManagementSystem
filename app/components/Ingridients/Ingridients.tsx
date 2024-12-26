import React, { useState, useEffect } from "react";
import "./Ingridients.css";
import Button from "../../subcomponents/Button/Button";
import Ingridient from "../../subcomponents/Ingridient/Ingridient";
import PizaSize from "../../subcomponents/PizzaSize/PizzaSize";
import PizzasMenu from "../../../data/pizzas.json";
import Toppings from "../../../data/toppings.json";
import Custom from "../../../data/costum.json";
import Image from "next/image";

interface IngredientItem {
  name: string;
}


export default function Ingredients({ activeSection }: { activeSection: string }) {
  const [dataToMap, setDataToMap] = useState<IngredientItem[]>([]);

  useEffect(() => {
    let newData: IngredientItem[] = [];
    const section = activeSection.toUpperCase();

    if (section === "PIZZAS") {
      newData = [...PizzasMenu];
    } else if (section === "TOPPINGS") {
      newData = [...Toppings];
    } else if (section === "CUSTOM") {
      newData = [...Custom];
    }

    setDataToMap(newData);
  }, [activeSection]);

  return (
    <div className="ingridients-wrap">
      <ul className="ingridients-list">
        {(activeSection === "PIZZAS" || activeSection === "COSTUM") && <PizaSize />}
        {dataToMap.map((item: IngredientItem, index: number) => (
          <Ingridient key={index} text={item.name} />
        ))}
      </ul>
      <Button text="ADD" />
      <div className="edit">
        <div className="edit-icon-wrap">
          <Image
            src="/settings.svg"
            layout="responsive"
            width={4}
            height={4}
            alt="Pizza icon"
          />
        </div>
        <div className="edit-text">Manage list</div>
      </div>
    </div>
  );
}