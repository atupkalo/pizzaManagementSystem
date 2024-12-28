import { useEffect, useRef, MouseEvent } from "react";
import "./OrdersLine.css";
import Image from "next/legacy/image";
import Orders from "../../../data/orderline.json";

type Order = {
  number: string;
  name: string;
  min: number;
  sec: number;
};

export default function OrdersLine() {
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let isDown: boolean = false;
    let startX: number = 0;
    let scrollLeft: number = 0;

    const mouseDownHandler = (e: MouseEvent<HTMLUListElement>) => {
      isDown = true;
      startX = e.pageX - list.offsetLeft;
      scrollLeft = list.scrollLeft;
    };

    const mouseLeaveHandler = () => {
      isDown = false;
    };

    const mouseUpHandler = () => {
      isDown = false;
    };

    const mouseMoveHandler = (e: MouseEvent<HTMLUListElement>) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - list.offsetLeft;
      const walk = (x - startX) * 3; // Scroll-fast factor
      list.scrollLeft = scrollLeft - walk;
    };

    list.addEventListener("mousedown", mouseDownHandler as unknown as EventListener);
    list.addEventListener("mouseleave", mouseLeaveHandler);
    list.addEventListener("mouseup", mouseUpHandler);
    list.addEventListener("mousemove", mouseMoveHandler as unknown as EventListener);

    // Cleanup event listeners on component unmount
    return () => {
      list.removeEventListener("mousedown", mouseDownHandler as unknown as EventListener);
      list.removeEventListener("mouseleave", mouseLeaveHandler);
      list.removeEventListener("mouseup", mouseUpHandler);
      list.removeEventListener("mousemove", mouseMoveHandler as unknown as EventListener);
    };
  }, []);

  return (
    <>
      <div className="orders-line">
        <div className="order-line-text"> Orders line</div>
        <ul ref={listRef} className="order-line-list">
          {Orders.map((item: Order, index: number) => {
            const isReadyActive = item.min < 5;
            const formattedTime =
              item.sec < 10 ? `${item.min}:0${item.sec}` : `${item.min}:${item.sec}`;

            return (
              <li key={index} className="order-item">
                <div className="order-info">
                  <div className="order-line-info-top">
                    <div className="order-line-number">{item.number}</div>
                    <div className="order-line-name">{item.name}</div>
                  </div>
                  <div className="order-line-info-bottom">
                    <div className="order-line-ready">ready in: </div>
                    <div className="order-line-ready-time">{formattedTime}</div>
                    <div
                      className={`order-line-ready-indicator ${
                        isReadyActive ? "order-line-ready-indicator_active" : ""
                      }`}
                    ></div>
                  </div>
                </div>
                <div className="order-arrow">
                  <Image src="/arrow.svg" width={20} height={15} alt="arrow icon" />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
