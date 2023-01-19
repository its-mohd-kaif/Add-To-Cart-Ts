import { createContext, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AddProduct from "./Components/AddProduct";
import AddSetting from "./Components/AddSetting";
import LandingPage from "./Components/LandingPage";
import PlaceOrder from "./Components/PlaceOrder";

export const productContext = createContext({});
export const settingContext = createContext({});

function App() {
  const [product, setProduct] = useState([]);
  const [setting, setSetting] = useState({});
  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<AddProduct />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/setting" element={<AddSetting />} />
      </>
    )
  );
  return (
    <div>
      <productContext.Provider value={{ product, setProduct }}>
        <settingContext.Provider value={{ setting, setSetting }}>
          <RouterProvider router={router} />
        </settingContext.Provider>
      </productContext.Provider>
    </div>
  );
}

export default App;
