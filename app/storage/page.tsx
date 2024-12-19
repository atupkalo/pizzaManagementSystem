"use client"; 

import { useState } from 'react'; 
import styles from '../page.module.css';
import Image from "next/image";

import PageLinks from "../components/PageLinks/PageLinks";
import Toppings from "../components/Toppings/Toppings";
import StorageTop from "../components/StorageTop/StorageTop";
import ToppingsCart from '../components/ToppingCart/ToppingCart';

export default function Storage() {

  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isHandleActive, setIsHandleActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive((prev) => !prev);
  };

  const toggleHandle = () => {
    setIsHandleActive((prev) => !prev);
  };

  const content = (
    <main className={styles.main}>
      <div 
        className={`${styles.sidebar} ${isSidebarActive ? styles.sidebarActive : ''}`}
      >
        <div className={styles.sideBarOpen}>
          <div 
            className={`${styles.sideBarOpenHandle} ${isSidebarActive ? styles.handleActive : ''}`} 
            onClick={() => {
              toggleSidebar();
              toggleHandle();
            }}
          >
            <Image  
              src={'/arrow-w.svg'} 
              layout="responsive"
              width={4}
              height={4}
              alt="Pizza logo"
            />
          </div>
          <div className={styles.logocontainer}>
            <div className={styles.pizzaName}> No Pine Zone</div>
            <div className={styles.logoWrap}>
              <Image  
                src={'/Logo.svg'} 
                layout="responsive"
                width={4}
                height={4}
                alt="Pizza logo"
              />
            </div>
          </div>
          <div className={styles.toppingsWrap}>
            <div className={styles.toppingsTile}>Toppings</div>
            <Toppings />
          </div>
        </div>
      </div>
      <div className={styles.mainRight}>
        <div className={styles.topBar}>
          <PageLinks />
          <StorageTop />
        </div>
        <div className={styles.mainDisplay}>
          <ToppingsCart />
        </div>
      </div>
    </main>
  );
  return content;
}