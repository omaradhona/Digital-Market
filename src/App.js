import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Shop } from './pages/Shop';
import { Home } from './pages/Home';
import { SingleProduct } from './pages/SingleProduct';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.map(item => total += (item.price * item.quantity))
    setTotalPrice(total)
  }, [cartItems, forceUpdate])
  
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
      
      <Navbar
        toggleCart={() => setShowCart(!showCart)}
        itemsCount={cartItems.length}
      />
      <Cart
        
        cartItems={cartItems}
        showCart={showCart}
        
        forceUpdate={forceUpdate}
        setCartItems={setCartItems}
        setForceUpdate={setForceUpdate}
        totalPrice={totalPrice}
      />
      {/*
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
                    </div>*/}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/Home" element={<Home />} />
        <Route path="/pages/Shop" element={<Shop />} />
        <Route path="/pages/Shop/:id" element={<SingleProduct addItem={updateCart} />} />
      </Routes>
      
    </>
  )
}

export default App;
