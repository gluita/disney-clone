import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from './components/Login'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Details from "./components/Details";
import Search from './pages/Search'
import Series from "./pages/Series";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/details/:id" element={<Details/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/series" element={<Series/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
