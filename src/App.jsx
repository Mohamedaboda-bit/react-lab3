import ProductList from "./pages/productList";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/layout";
import  ProductDetail from "./pages/productDetails";
import NotFound from "./pages/notFound";
import  MyForm from "./pages/Form";
import CartPage from "./pages/cartPage";
import LanguageContext from "./context/language";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<ProductList />} />
          <Route path="/Detials/:id" element={<ProductDetail />} />
          <Route path="/Form" element={<MyForm />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>   
    </LanguageContext.Provider>
  );
}

export default App;
