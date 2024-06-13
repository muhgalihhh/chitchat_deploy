import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ParticlesComponent from './components/ParticlesComponent';
import { useAuthContext } from './context/AuthContext';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Welcome from './pages/welcome/welcome';

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="h-screen flex items-center justify-center">
      {/* <ParticlesComponent id="particles" /> */}
      {/* <Login /> */}
      {/* <Signup /> */}

      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={authUser ? <Home /> : <Navigate to="/welcome" />} />
        <Route
          path="/login"
          element={
            authUser ? (
              <Navigate to="/home" />
            ) : (
              <>
                <ParticlesComponent id="particles" />
                <Login />
              </>
            )
          }
        />
        <Route
          path="/signup"
          element={
            authUser ? (
              <Navigate to="/home" />
            ) : (
              <>
                <ParticlesComponent id="particles" />
                <Signup />
              </>
            )
          }
        />
        <Route path="*" element={<Navigate to="/welcome" />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
