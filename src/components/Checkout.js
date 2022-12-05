import React from "react";

export default function Checkout(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Total</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Delivery Charges</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />

            <div className="Row">
              <button onClick={() => alert("Sucessfull")}>Checkout</button>
            </div>
            <div className="Row">
              <br />
              WE ACCEPT:
            </div>
            <br />
            <div className="Row">
              <a href="https://paytm.com/">Paytm</a> &ensp;
              <a href="https://www.bhimupi.org.in/">BHIM-UPI</a> &ensp;
              <a href="https://pay.google.com/intl/en_in/about/">Google-Pay</a>
              &ensp;
              <a href="https://netbanking.hdfcbank.com/netbanking/">
                Net-Banking
              </a>
              &ensp;
            </div>
            <div className="Row">
              <br />
              Got a discount code? Add it in the next step.
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
