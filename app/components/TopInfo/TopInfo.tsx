import "./TopInfo.css";

import Link from "next/link";
import Image from "next/image";


const iconPath = '/arrow.svg';

export default function TopInfo(){
    return (
        <>
         <div className="top-info">
          <div className="page-nav">
            <div className="page-link-box">
              <p> <Link className="page-link" href={"/"}> Kitchen </Link> </p>
              <Image className="arrow-icon" alt="arrow icon" src={iconPath} width={20}  height={15} />
            </div>
            <div className="page-link-box">
              <p> <Link className="page-link" href={"/storage"}> Storage </Link> </p>
            </div>
          </div>
               TopInfo
         </div>
        </>
    )
}