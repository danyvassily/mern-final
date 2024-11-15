import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import About from './pages/About'; 
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/Signup';
import Footer from './components/footer';
import Signin from './pages/Signin';

export default function App() {
  return ( 
  <BrowserRouter>
   <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/dashboard" element={<Dashboard />} />

  </Routes>
  <Footer />
  </BrowserRouter>
  );
}
