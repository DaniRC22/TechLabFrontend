import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './page/Home';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import About from './page/about';
import ProductDetail from './page/ProductDetail';
import ShoppingCart from './components/shoppingCart';
import { useEffect, useState } from 'react';

function App() {
   const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
   
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home  onAddToCart={addToCart}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product/:id' element={<ProductDetail />}/>     
         <Route path="/cart" element={<ShoppingCart items={cartItems} onRemove={removeFromCart} onClear={clearCart}  />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App
