import React from "react";
import { store } from "../Store";

export default function ItemList() {
  const {
    state: { cart, total }
  } = React.useContext(store);
  return (
    <div className="col-md-4 order-md-2 mb-4">
      <div className="sticky-top" style={{ top: "1em" }}>
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Your cart</span>
          <span className="badge badge-secondary badge-pill">
            {cart.length}
          </span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">Product name</h6>
            </div>
            <span className="text-muted">$12</span>
          </li>

          <li className="list-group-item d-flex justify-content-between">
            <span>Total</span>
            <strong>${total}</strong>
          </li>
        </ul>

        <form className="card p-2">
          <button type="submit" className="btn btn-success">
            Proceed to checkout
          </button>
        </form>

        <p className="text-muted">
          After the user clicks the [Add to cart] button, the added the product
          should appear in the list above.
          <br />
          Total should be updated with every addition
        </p>
      </div>
    </div>
  );
}
