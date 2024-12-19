import "./ToppingsCart.css";
import Image from "next/image";

export default function ToppingsCart() {
  return (
    <div className="cart-wrap">
    {/* Close Button */}
    <div className="cart-close">
        <Image
        src="/cancel.svg"
        layout="responsive"
        width={4}
        height={4}
        alt="Cancel icon"
        />
    </div>

    {/* Title */}
    <div className="cart-title">Bacon</div>

    {/* Progress Bar */}
    <div className="cart-bar">
        <div className="progress-bar-text"> Total usage: <strong>40%</strong></div>
        <div className="progress-bar"></div>
    </div>
    <div className="gap"></div>

    {/* Order Info */}
    <div className="cart-order-info">
        <div className="cart-sub-title">Order Info:</div>
        <div className="cart-info-line">
        <div className="cart-info-title">Metric:</div>
        <div className="cart-info-value">lb</div>
        </div>
        <div className="cart-info-line">
        <div className="cart-info-title">Total in stock:</div>
        <div className="cart-info-value">18</div>
        </div>
    </div>
    <div className="gap"></div>

    {/* Orders */}
    {[1, 2].map((order, index) => (
        <div key={index} className="cart-order">
        <div className="cart-info-line">
            <div className="cart-info-title">Order</div>
            <div className="cart-info-value">{order}</div>
        </div>
        <div className="cart-order-inner">
            <div className="cart-info-line-c">
            <div className="cart-info-title">Amount</div>
            <div className="cart-info-value">
                {order === 1 ? "5lb" : "9lb"}
            </div>
            </div>
            <div className="cart-info-line-c">
            <div className="cart-info-title">Order date</div>
            <div className="cart-info-value">
                {order === 1 ? "11/08/2024" : "12/06/2024"}
            </div>
            </div>
            <div className="cart-info-line-c">
            <div className="cart-info-title">Expires in</div>
            <div className="cart-info-value">
                {order === 1 ? "4 days" : "23 days"}
            </div>
            </div>
        </div>
        </div>
    ))}
    <div className="gap"></div>

    {/* Vendor Info */}
    <div className="cart-sub-title">Vendor:</div>
    <div className="cart-order-vendor">
        <div className="cart-info-line">
        <div className="cart-info-title">Name</div>
        <div className="cart-info-value">Kroger</div>
        </div>
        <div className="cart-info-line">
        <div className="cart-info-title">Phone</div>
        <div className="cart-info-value">702-345-6767</div>
        </div>
        <div className="cart-info-line">
        <div className="cart-info-title">Email</div>
        <div className="cart-info-value">kroger@gmail.com</div>
        </div>
    </div>

    {/* Actions */}
    <div className="cart-btn-wrap">
        <div className="cart-btn">REORDER</div>
    </div>
    <div className="cart-btn-wrap cart-btn-wrap-space">
        <div className="cart-edit">
            <div className="edit-icon-wrap">
            <Image
                src="/settings.svg"
                layout="responsive"
                width={4}
                height={4}
                alt="Settings icon"
            />
            </div>
            <div className="pizzas-edit-text">Manage list</div>
        </div>

        <div className="cart-delete">
            <div className="delet-icon-wrap">
            <Image
                src="/cancel.svg"
                layout="responsive"
                width={4}
                height={4}
                alt="Cancel icon"
            />
            </div>
            <div className="delete-text">Delete</div>
        </div>

     </div>
    </div>
  );
}
