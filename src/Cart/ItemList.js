import React from "react";
import { getProducts, addToCart, setProducts } from "../Actions";
import { store } from "../Store";
import { usersAPI } from "../api/api";

export default function ItemList() {
  const {
    dispatch,
    state: { products },
  } = React.useContext(store);

  const getAllItems = async () => {
    let response = await usersAPI.getItems();
    // console.log(response);
    dispatch(setProducts(response));
  };

  React.useEffect(() => {
    getAllItems();
    dispatch(getProducts())
    console.log("useEffect detected");
  },[dispatch]);

  const onAddToCart = React.useCallback(
    (product) => {
      dispatch(addToCart(product));
    },
    [dispatch]
  );

  console.log(products);

  return (
    <div className="col-md-8 order-md-1">
      {products.map((product) => (
        <div key={product.id} className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-body text-right">
                <p className="card-text">
                  <strong>${product.price}</strong>
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => onAddToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <p className="text-muted">
        When loading the page, the script must send a GET request to the address
        "urls.products" in config.json <br />
        The result should appear as a list, in this window
      </p>
    </div>
  );
}
