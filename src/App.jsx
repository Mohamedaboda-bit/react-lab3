import ProductList from "./pages/productList";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/layout";
import  ProductDetail from "./pages/productDetails";
import NotFound from "./pages/notFound";
import  MyForm from "./pages/Form";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<ProductList />} />
          <Route path="/Detials/:id" element={<ProductDetail />} />
          <Route path="/Form" element={<MyForm />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
