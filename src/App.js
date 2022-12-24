import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header';
import About from './components/Home/About';
import ProjectDetails from './components/ProjectDetails';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Blog from './components/Blog/Blog';


function App() {
  return (
    <div className='bg-black'>
      <AuthProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/cardprojects/:projectId" element={<ProjectDetails></ProjectDetails>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
