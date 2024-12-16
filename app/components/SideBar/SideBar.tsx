import "./SideBar.css";

import Image from "next/image";

export default function SideBar(){
    return (
        <>
         <div className="side-bar">
            <div className="logo-container">
                <div className="pizza-name"> No Pine Zone</div>
                <Image  src={'/Logo.svg'} 
                        width={60} 
                        height={60} 
                        alt="Pizza logo"/>
            </div>
         </div>
        </>
    )
}