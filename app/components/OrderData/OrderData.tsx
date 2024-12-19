import "./OrderData.css"

const orderData = [
    {
        name: "Total orders",
        number: "12"
    },
    {
        name: "Hot orders",
        number: "2"
    },
    {
        name: "Behind schedule",
        number: "0"
    },

]

export default function OrderData() {
  return (
    <div className="order-data-wrap">
      <ul className="order-data-list">
        {orderData.map((item, index) => (
         <li key={index}className="order-data-item">
            <div className="order-data-text">{item.name}</div>
            <div className="order-data-number">{item.number}</div>
         </li>
        ))}
      </ul>
    </div>
  )
}
