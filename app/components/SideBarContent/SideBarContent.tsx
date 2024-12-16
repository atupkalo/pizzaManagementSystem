import "./SideBarContent.css";

import Image from "next/image";


export default function SideBarContainer(){
    return (
        <>
            <div className="currret-container">
                <div className="current-progress">In progress</div>
                <div className="current-inner-box">
                    <div className="current-name">Vegetarian</div>
                    <div className="current-item">
                        <p><strong>Order number</strong></p>
                        <p>03</p>
                    </div>
                    <div className="current-item">
                        <p><strong>Size</strong></p>
                        <p>Small</p>
                    </div>
                    <div className="current-item">
                        <p><strong>Extras</strong></p>
                        <p>Cheese</p>
                    </div>
                    <div className="current-item">
                        <p><strong>Exclude</strong></p>
                        <p>-</p>
                    </div>
                    <div className="current-item">
                        <p><strong>Ready in</strong></p>
                        <p>5:20</p>
                    </div>
                </div>
            </div>
            <div className="main-menu-container">
                <ul className="main-btn-list">
                    <li className="main-btn-item main-btn-active">
                        <Image  src={'/pizzas.svg'} 
                            width={64} 
                            height={64} 
                            alt="Pizza icon"/>
                        <div>PIZZAS</div>
                    </li>
                    <li className="main-btn-item">
                        <Image  src={'/custom.svg'} 
                            width={60} 
                            height={60} 
                            alt="Pizza icon"/>
                        <div>CUSTOM</div>
                    </li>
                    <li className="main-btn-item">
                        <Image  src={'/toppings.svg'} 
                            width={60} 
                            height={60} 
                            alt="Pizza icon"/>
                        <div>TOPPINGS</div>
                    </li>
                </ul>
            </div>
        </>
    )
}