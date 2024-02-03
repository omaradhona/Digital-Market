import "./Cart.css";

export function Cart(props){
  

  return (
    <div className="cart d-flex flex-column pb-2"
        style={{ 
          width: props.showCart ? "500px" : "0",
          overflow: "auto",
        }}>
      <div className="text-end p-3">
        <i className="fa-solid fa-x hide-cart"
          onClick={() => props.setShowCart(!props.showCart)}></i>
      </div>
      <div className="cart-items-section">
      {props.cartItems.map((item, i) =>
        <div key={i} className="d-flex border p-2">
          <div className="cart-img bg-white col-3 text-center d-flex justify-content-center">
            <img src={item.image} style={{ width: "60px", objectFit: "contain" }} />
          </div>
          <div style={{ overflow: "hidden" }} className="p-2 border col-9">
            <p className="cart-items lh-sm">
              <span><strong>{item.title}</strong></span><br />
              <span className="cart-price-qty">Unit Price : ${item.price}</span><br />
              {/*<span><i className="fa-solid fa-xmark px-3"></i></span>*/}
              <span className="cart-price-qty">Quantity : {item.quantity}</span><br />
              <div className="text-end">
                <span>${(item.price * item.quantity).toPrecision(5)}</span><br />
              </div>
              
              

            </p>
            <span className="d-flex justify-content-center">
                <button
                  onClick={() => {
                    if(item.quantity > 1){
                      item.quantity -= 1;
                    }
                    
                    props.setForceUpdate(!props.forceUpdate)
                  }}
                  className="border rounded me-1">
                  <i className="fa-solid fa-minus"></i>
                </button>
                <button
                  onClick={() => {
                    item.quantity += 1;
                    props.setForceUpdate(!props.forceUpdate)
                  }}
                  className="border rounded me-1">
                  <i className="fa-solid fa-plus"></i>
                </button>
                <button
                  onClick={() => props.setCartItems((props.cartItems.filter(e => e.id !== item.id)))}
                  className="border rounded me-1">
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </span>
          </div>
          
        </div>
      )}
      </div>
      
      <div className="text-end total-price d-flex flex-column">
        <hr className="my-divider border-0 bg-white w-75 mx-auto mb-0" />
        <span className="me-2 fw-bold fs-5 my-auto mb-1">Total Price : ${props.totalPrice.toPrecision(5)}</span>
        <button className="btn btn-primary col-8 mx-auto mb-1">BUY</button>
      </div>
      
    </div>
  )
}