import "./OrdersLine.css";
import Image from "next/image";

import Orders from "../../../data/orderline.json";

export default function OrdersLine(){
    return (
        <>
         <div className="orders-line">
           <div className="order-line-text"> Orders line</div>
           <ul className="order-line-list">
                {Orders.map((item, index) => (
                    <li key={index} className="order-item">
                        <div className="order-info">
                            <div className="order-line-info-top">
                                <div className="order-line-number">{item.number}</div>
                                <div className="order-line-name">{item.name}</div>
                            </div>
                            <div className="order-line-info-bottom">
                                <div className="order-line-ready">ready in: </div>
                                <div className="order-line-ready-time">{item.time}</div>
                            </div>
                        </div>
                        <div className="order-arrow">
                            <Image  src="/arrow.svg" 
                                    width={20} 
                                    height={15} 
                                    alt="arrow icon"/>
                        </div>

                    </li>
                ))}
           </ul>
         </div>
        </>
    )
}