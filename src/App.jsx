import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './components/Admin/Dashboard';
import ClientDashboard from './components/Client/Dashboard';
import EmployeeDashboard from './components/Employee/Dashboard';
import ProtectedRoute from './components/Layout/ProtectedRoute';
import ChangePasswordForm from './components/Auth/ChangePasswordForm';
import ProductCatalog from './pages/ProductCatalog';
import RequestPasswordRecoveryForm from './components/Auth/RequestPasswordRecoveryForm';
import ResetPasswordForm from './components/Auth/ResetPasswordForm';
import RegisterEmployeeForm from './components/Admin/RegisterEmployeeForm';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productos" element={<ProductCatalog />} />
        <Route path="/forgot-password" element={<RequestPasswordRecoveryForm />} />
        <Route path="/reset-password" element={<ResetPasswordForm />} />
        <Route path="/change-password" element={<ChangePasswordForm />} />

        <Route
          path="/dashboard/admin"
          element={
            <ProtectedRoute allowedRoles={['ADMIN']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/cliente"
          element={
            <ProtectedRoute allowedRoles={['CLIENTE']}>
              <ClientDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/empleado"
          element={
            <ProtectedRoute allowedRoles={['EMPLEADO']}>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/register-employee"
          element={
            <ProtectedRoute allowedRoles={['ADMIN']}>
              <RegisterEmployeeForm />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
