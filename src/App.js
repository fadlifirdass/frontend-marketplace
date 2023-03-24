import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddProduct from "./components/AddProduct";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<AddProduct/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
