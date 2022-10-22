import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import User from "./User";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Css/sb-admin-2.css';
import './Css/fontawesome-free/css/all.css';
import { BrowserRouter, Routes , Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Topbar />
        <div class="container-fluid">
        <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/User' element={<User/>}></Route>
        </Routes>
      </div>
      </div>
      </div>

    </div>
    </BrowserRouter>
      );
}

export default App;
