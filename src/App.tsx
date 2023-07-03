import React from 'react';
import './App.css';
import Header from "./hooks/shared/Header";
import Footer from "./hooks/shared/Footer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product";
import Checkout from "./pages/Checkout/Checkout";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/catalog",
            element: <Catalog/>
        },
        {
            path: "/product",
            element: <Product/>
        },
        {
            path: "/checkout",
            element: <Checkout/>
        }
    ])

    return (
    <div className="App">
      <Header/>
        <RouterProvider router={router}/>
      <Footer/>
    </div>
  );
}

export default App;
