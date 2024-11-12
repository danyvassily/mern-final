import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import About from './pages/about';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';


export default function App() {
  return ( 
  <BrowserRouter>
   <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/dashboard" element={<Dashboard />} />

  </Routes>
  </BrowserRouter>
  );
}
