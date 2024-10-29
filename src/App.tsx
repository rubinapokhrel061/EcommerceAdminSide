import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admindashboard from "./admin/Pages/Admindashboard/Admindashboard";

import { Provider } from "react-redux";
import store from "./admin/Store/store";
import Login from "./admin/Pages/Login";
import Dashboard from "./admin/Pages/Dashboard";

import AddProductPage from "./admin/Pages/AddProduct/AddProduct";
import AddCategory from "./admin/Pages/AddCategory/AddCategory";
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
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
