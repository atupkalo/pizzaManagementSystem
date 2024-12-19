import "./BigPizza.css";
import Image from "next/image";

export default function BigPizza() {
  return (
    <div className="big-pizza">
        <div className="big-pizza-wrap">
          <Image  
          src={'/main-pizza.svg'} 
          layout="responsive"
          width={4}
          height={4}
          alt="Pizza table"/>
        </div>
        <div className="main-btn">
            DONE
        </div>
    </div>
  )
}
