import React from "react";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./containers/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/itemDetailContainer/ItemDetailContainer";
import NotFound from "./components/notFound";
import Cart from "./components/navBar/cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const mensaje = "Bienvenido a MGN Consultores";

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes> 
          <Route path="/" element= {<ItemListContainer greeting={mensaje} />}/>
          <Route path="/categoria/:categoriaId" element= {<ItemListContainer greeting={mensaje} />}/>
          <Route path="/detalle/:id" element= {<ItemDetailContainer />}/>
          <Route path="/carrito/" element= {<Cart />}/>
          <Route path="*" element= {<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
