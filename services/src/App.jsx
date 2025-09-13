import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../../utils/context/AuthContext.jsx'
import Login from './login.jsx'
import './App.css'

const Dashboard = () => <h1>Dashboard</h1>
const Register = () => <h1>Register</h1>
const ResetPassword = () => <h1>Reset Password</h1>

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
