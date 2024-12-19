"use client";
import "./StorageTop.css";

export default function StorageTop() {
  const expiringItems = [
    { name: "Cheese", days: "6 days", ordered: "09/15/2024" },
    { name: "Bacon", days: "4 days", ordered: "11/08/2024" },
    { name: "Salami", days: "6 days", ordered: "09/15/2024" },
  ];

  const outOfStockItems = [
    { name: "Onion", quantity: "5lb" },
    { name: "Chicken", quantity: "3lb" },
  ];

  return (
    <div className="storage-top-wrap">
      <div className="storage-top-expires">
        <div className="storage-top-text">Expires soon:</div>
        {expiringItems.map((item, index) => (
          <div key={index} className="storage-top-item">
            {`${item.name}, ${item.days}, ordered on: ${item.ordered}`}
          </div>
        ))}
      </div>
      <div className="storage-top-out">
        <div className="storage-top-text">Out of stock:</div>
        {outOfStockItems.map((item, index) => (
          <div key={index} className="storage-top-item">
            {`${item.name}, ${item.quantity}`}
          </div>
        ))}
      </div>
    </div>
  );
}
