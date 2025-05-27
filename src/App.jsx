import {Routes, Route} from 'react-router-dom';
import SignIn from './pages/Auth/SignIn.jsx';
import Signup from './pages/Auth/Signup.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import './App.module.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
