import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import Layout from './components/layout/Layout';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';

// Admin Pages
import DashboardPage from './pages/dashboard/DashboardPage';
import PatientsPage from './pages/patients/PatientsPage';
import DoctorsPage from './pages/doctors/DoctorsPage';
import MedicinesPage from './pages/medicines/MedicinesPage';
import PrescriptionsPage from './pages/prescriptions/PrescriptionsPage';
import AppointmentsPage from './pages/appointments/AppointmentsPage';
import ReportsPage from './pages/reports/ReportsPage';
import SettingsPage from './pages/settings/SettingsPage';

export default function App() {
  return (
    <Routes>
      {/* Public Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />

      {/* Protected Admin Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/medicines" element={<MedicinesPage />} />
          <Route path="/prescriptions" element={<PrescriptionsPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Route>

      {/* Redirect root to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
