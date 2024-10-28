import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admindashboard from "./admin/Pages/Admindashboard";

import { Provider } from "react-redux";
import store from "./admin/Store/store";
import Login from "./admin/Pages/Login";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Admindashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
