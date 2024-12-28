import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <div className="container">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/product/:id" element={<ProductPage />} />
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/chat" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div> */}
      </BrowserRouter>
      <ToastContainer />
      <br />
      <Footer />
    </>
  )
}

export default App
