import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PizzasProvider } from "./components/context/AppContext";
import Cart from "./components/pages/Cart/Cart";
import PizzaDetail from "./components/pages/PizzaDetail/PizzaDetail";
import NotFound from "./components/pages/NotFound/NotFound";
import Home from "./components/pages/home/Home";

function App() {


  return (
    <BrowserRouter>
      <PizzasProvider>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pizza/:id" element={<PizzaDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PizzasProvider>
    </BrowserRouter>
  )
}

export default App
