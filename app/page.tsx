import './page.css';
import Image from "next/image";

import SideBar from "./components/SideBar/SideBar";
import TopInfo from "./components/TopInfo/TopInfo";
import ProgressBar from "./components/Progress/ProgressBar";
import OrdersLine from "./components/OrdersLine/OrdersLine";
import MainDisplay from "./components/MainDisplay/MainDisplay";
import SideBarContent from "./components/SideBarContent/SideBarContent";

// import toppingsList from "@/toppings.json";
// import pizzaList from "@/pizzas.json";

export default async function Kitchen() {

  const content = (
    <main className="main">
      <div className="side-bar">
        <div className="logo-container">
          <div className="pizza-name"> No Pine Zone</div>
            <Image  src={'/Logo.svg'} 
                    width={60} 
                    height={60} 
                    alt="Pizza logo"/>
        </div>
        <SideBarContent />
      </div>
      <div className="main-right">
        <TopInfo/>
        <OrdersLine/>
        <ProgressBar/>
      </div>
      <MainDisplay/>
    </main>
  )
  return content
}
