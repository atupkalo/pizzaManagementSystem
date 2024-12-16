import './storage.css';
import Image from "next/image";

import TopInfo from "../components/TopInfo/TopInfo";


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
      </div>
      <div className="main-right">
        <TopInfo/>
      </div>
    </main>
  )
  return content
}