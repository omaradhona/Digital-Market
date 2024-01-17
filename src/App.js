import { Link, Route, Routes } from 'react-router-dom';
import { Shop } from './pages/Shop';
import { Home } from './pages/Home';
import { SingleProduct } from './pages/SingleProduct';
import "./App.css";

function App() {
  

  return (
    <>
      {/*
      <nav className="navbar navbar-expand-sm sticky-top container-fluid border d-flex justify-content-between px-3">
        <div className="site-logo">
          <Link to="/pages/Home" className="h3">E-commerce</Link>
        </div>
        
           
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/pages/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/pages/Shop">Shop</Link>
          </li>
        </ul>

        
  </nav>*/}

      <nav className="navbar navbar-expand-sm bg-danger">
        <div className="container-fluid align-items-stretch">
          <Link to="/pages/Home" className="site-title fw-bold">E-commerce</Link>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to="/pages/Home" className="me-4">Home</Link>
              <Link to="/pages/Shop" className="me-4">Shop</Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/pages/Home" element={<Home />} />
        <Route path="/pages/Shop" element={<Shop />} />
        <Route path="/pages/Shop/:id" element={<SingleProduct />} />
      </Routes>
      
    </>
  )
}

export default App;
