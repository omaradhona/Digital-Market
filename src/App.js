import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Shop } from './pages/Shop';
import { Home } from './pages/Home';
import { SingleProduct } from './pages/SingleProduct';
import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(false);

  function updateCart(addedItem, quantity){
    const updatedcartItems = cartItems.map((item, i) => {
      if(item.id === addedItem.id){
        return {...item, quantity: item.quantity + quantity}
      }
      else{
        
        return item
      }
    })
    
    if(JSON.stringify(cartItems) === JSON.stringify(updatedcartItems)){
      addedItem = {...addedItem, quantity: quantity}
      setCartItems([...cartItems, addedItem])
    }
    else{
      setCartItems(updatedcartItems)
    }
    
    
  }
  console.log(cartItems)
  return (
    <>

      <nav className="navbar navbar-expand-sm bg-danger">
        <div className="container-fluid align-items-stretch">
          <Link to="/pages/Home" className="site-title fw-bold">E-commerce</Link>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to="/pages/Home" className="me-4 link">Home</Link>
              <Link to="/pages/Shop" className="me-4 link">Shop</Link>
              <Link onClick={() => setShowCart(!showCart)}><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="cart border" style={{display: showCart ? "block" : "none", overflow: "auto"}}>
        {cartItems.map((item, i) => 
            <div key={i} className="d-flex border">
              <div className="border col-3 text-center d-flex justify-content-center">
                <img src={item.image} style={{width: "60px", objectFit: "contain"}}/>
              </div>
              <div style={{overflow: "hidden"}} className="border d-flex align-items-center p-2">
                <p className="text-truncate border">
                  <span>{item.title}</span><br />
                  <span className="align-baseline">{item.price}</span>
                  <span><i className="fa-solid fa-xmark align-baseline px-3"></i></span>
                  <span>{item.quantity}</span><br />
                  <span>{(item.price * item.quantity).toPrecision(4)}</span><br />
                  <span className="d-flex justify-content-center">
                    <button 
                      onClick={() => {
                        item.quantity -= 1;
                        setForceUpdate(!forceUpdate)
                      }}
                      className="border rounded me-1">
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <button 
                      onClick={() => {
                        item.quantity += 1;
                        setForceUpdate(!forceUpdate)
                      }}
                      className="border rounded me-1">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                    <button 
                      onClick={() => setCartItems(cartItems.filter(e => e.id !== item.id))}             className="border rounded me-1">
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </span>
                  
                </p>
                
              </div>
            </div>
        )}
      </div>

      <Routes>
        <Route path="/pages/Home" element={<Home />} />
        <Route path="/pages/Shop" element={<Shop />} />
        <Route path="/pages/Shop/:id" element={<SingleProduct addItem={updateCart} />} />
      </Routes>
      
    </>
  )
}

export default App;
