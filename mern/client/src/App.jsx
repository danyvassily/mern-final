import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import About from './pages/About'; 
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import Footer from './components/footer';
import PrivateRoute from './components/privateRoute';


export default function App() {
  return ( 
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} /> 
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
