import { useEffect, useRef } from "react";
import "./OrdersLine.css";
import Image from "next/legacy/image";
import Orders from "../../../data/orderline.json";

export default function OrdersLine() {
    const listRef = useRef(null);

    useEffect(() => {
        const list = listRef.current;
        let isDown = false;
        let startX;
        let scrollLeft;

        const mouseDownHandler = (e) => {
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

        const mouseMoveHandler = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - list.offsetLeft;
            const walk = (x - startX) * 3; // Scroll-fast factor
            list.scrollLeft = scrollLeft - walk;
        };

        list.addEventListener("mousedown", mouseDownHandler);
        list.addEventListener("mouseleave", mouseLeaveHandler);
        list.addEventListener("mouseup", mouseUpHandler);
        list.addEventListener("mousemove", mouseMoveHandler);

        // Cleanup event listeners on component unmount
        return () => {
            list.removeEventListener("mousedown", mouseDownHandler);
            list.removeEventListener("mouseleave", mouseLeaveHandler);
            list.removeEventListener("mouseup", mouseUpHandler);
            list.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

    return (
        <>
            <div className="orders-line">
                <div className="order-line-text"> Orders line</div>
                <ul ref={listRef} className="order-line-list">
                    {Orders.map((item, index) => {
                        const isReadyActive = item.min < 5;
                        const formattedTime = item.sec < 10 ? `${item.min}:0${item.sec}` : `${item.min}:${item.sec}`;

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
                                            className={`order-line-ready-indicator ${isReadyActive ? "order-line-ready-indicator_active" : ""}`}
                                        ></div>
                                    </div>
                                </div>
                                <div className="order-arrow">
                                    <Image
                                        src="/arrow.svg"
                                        width={20}
                                        height={15}
                                        alt="arrow icon"
                                    />
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}