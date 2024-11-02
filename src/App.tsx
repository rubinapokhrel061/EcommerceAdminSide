import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admindashboard from "./admin/Pages/Admindashboard/Admindashboard";

import { Provider } from "react-redux";
import store from "./admin/Store/store";
import Login from "./admin/Pages/Login";
import Dashboard from "./admin/Pages/Dashboard";

import AddProductPage from "./admin/Pages/AddProduct/AddProduct";
import AddCategory from "./admin/Pages/AddCategory/AddCategory";
import SingleOrder from "./admin/Pages/SingleOrder";
import { io } from "socket.io-client";
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
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Admindashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/addproduct" element={<AddProductPage />}></Route>
          <Route path="/addcategory" element={<AddCategory />}></Route>
          <Route path="/order/:id" element={<SingleOrder />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
