import "./Oven.css";
import Image from "next/legacy/image";

export default function Oven() {
  return (
    <> 
        <div className="ovenBtn"> 
            <div className="oven-btn-text"> Oven </div>
            <Image  src="/arrow.svg"
                width={20} 
                height={15} 
                alt="Pizza icon"
                className="oven-arrow"
                />
        </div>
        <div className="oven">
        <div className="oven-icon-wrap">
            <div className="oven-text"> Oven </div>
            <Image  src="/oven.svg"
                width={46} 
                height={46} 
                alt="Pizza icon"/>
        </div>
        <div className="oven-info-wrap">
            <div className="oven-info-top">
               <div className="oven-info-text">Cooking</div>
               <div className="oven-info-item">
                    <p>Paperroni</p>
                    <p>7:23</p>
               </div>
               <div className="oven-info-item">
                    <p>All meats</p>
                    <p>9:56</p>
               </div>
            </div>
            <div className="oven-info-bottom">
                <div className="oven-info-text">Cooked</div>
                <div className="oven-info-item oven-info-item-green">
                        <p>Hawaiian</p>
                        <p>0:00</p>
                </div>
                </div>
            </div>
        </div>
    </>

  )
}
