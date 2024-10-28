import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admindashboard from "./admin/Pages/Admindashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admindashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
