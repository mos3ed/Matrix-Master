  import { Routes, Route, Navigate } from "react-router-dom";
  import ProductsList from "./pages/ProductsList";
  import ProductShow from "./pages/ProductShow";
  import ProductNew from "./pages/ProductNew";
  import ProductEdit from "./pages/ProductEdit";
  import "./App.css";

  function App() {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/show/:id" element={<ProductShow />} />
        <Route path="/products/new" element={<ProductNew />} />
        <Route path="/products/edit/:id" element={<ProductEdit />} />
      </Routes>
    );
  }

  export default App;
