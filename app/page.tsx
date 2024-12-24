"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

import "./kitchen.css";

import PageLinks from "./components/PageLinks/PageLinks";
import ProgressBar from "./components/Progress/ProgressBar";
import OrdersLine from "./components/OrdersLine/OrdersLine";
import BigPizza from "./components/BigPizza/BigPizza";
import SideBarContent from "./components/SideBarContent/SideBarContent";
import Oven from "./components/Oven/Oven";
import OrderData from "./components/OrderData/OrderData";
import Pizzas from "./components/Pizzas/Pizzas";
import Ingridients from "./components/Ingridients/Ingridients";

export default function Kitchen() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [activeSection, setActiveSection] = useState("Pizzas"); // Default active section

  const toggleSidebar = () => setIsSidebarActive((prev) => !prev);

  return (
    <main className={styles.main}>
      <div className={`${styles.sidebar} ${isSidebarActive ? styles.sidebarActive : ""}`}>
        <div className={styles.sideBarOpen}>
          <div
            className={`${styles.sideBarOpenHandle} ${isSidebarActive ? styles.handleActive : ""}`}
            onClick={toggleSidebar}
          >
            <Image
              src={"/arrow-w.svg"}
              layout="responsive"
              width={4}
              height={4}
              alt="Pizza logo"
            />
          </div>
          <div className={styles.logocontainer}>
            <div className={styles.pizzaName}>No Pine Zone</div>
            <div className={styles.logoWrap}>
              <Image src={"/Logo.svg"} layout="responsive" width={4} height={4} alt="Pizza logo" />
            </div>
          </div>
          {/* Pass setActiveSection to SideBarContent */}
          <SideBarContent setActiveSection={setActiveSection} />
          <div className={styles.pizzasMobile}>
            <Pizzas />
          </div>
        </div>
      </div>
      <div className={styles.mainRight}>
        <div className={styles.topBar}>
          <PageLinks />
          <OrderData />
          <Oven />
        </div>
        <div className="main-dispaly">
          <div className="main-dispalay-top">
            <OrdersLine />
            <ProgressBar />
          </div>
          <div className={styles.mainDisplayBox}>
            <div className={styles.pizzasDesk}>
              <Ingridients activeSection={activeSection} />
            </div>
            <BigPizza />
          </div>
        </div>
      </div>
    </main>
  );
}