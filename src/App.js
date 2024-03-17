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
  const [selectedCategory, setSelectedCategory] = useState(0);

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

  return (
    <>
      <Navbar
        toggleCart={() => setShowCart(!showCart)}
        itemsCount={cartItems.length}
        setIndex={setSelectedCategory}
      />

      <Cart
        cartItems={cartItems}
        showCart={showCart}
        setShowCart={setShowCart}
        forceUpdate={forceUpdate}
        setCartItems={setCartItems}
        setForceUpdate={setForceUpdate}
        totalPrice={totalPrice}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/Home" element={<Home setIndex={setSelectedCategory} />} />
        <Route path="/pages/Shop" element={<Shop category={selectedCategory} />} />
        <Route path="/pages/Shop/:id" element={<SingleProduct addItem={updateCart} />} />
      </Routes>
    </>
  )
}

export default App;