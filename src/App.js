import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header';
import About from './components/Home/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
