import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admindashboard from "./admin/Pages/Admindashboard/Admindashboard";

import { Provider } from "react-redux";
import store from "./admin/Store/store";
import Login from "./admin/Pages/Login";
import SingleOrder from "./admin/Pages/SingleOrder";
import { io } from "socket.io-client";
import ProductDetails from "./admin/Pages/ProductDetails/ProductDetails";
import CategoryDetails from "./admin/Pages/CategoryDetails/CategoryDetails";
import UserDetails from "./admin/Pages/UserDetails/UserDetails";
import OrderDetails from "./admin/Pages/OrderDetails/OrderDetails";
import { Toaster } from "react-hot-toast";
export const socket = io("http://localhost:8080", {
  auth: {
    token: localStorage.getItem("token"),
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Admindashboard />}></Route>
          <Route path="/user-details" element={<UserDetails />}></Route>
          <Route path="/product-details" element={<ProductDetails />}></Route>
          <Route path="/category-details" element={<CategoryDetails />}></Route>
          <Route path="/order-details" element={<OrderDetails />}></Route>
          <Route path="/order/:id" element={<SingleOrder />}></Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </Provider>
  );
};

export default App;
