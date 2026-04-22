import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Public Pages
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";

// User/Admin Pages
import Dashboard from "./pages/Dashboard";
import BookingPage from "./pages/BookingPage";
import AdminDashboard from "./pages/AdminDashboard";
import ManageTours from "./pages/admin/ManageTours";
import Reports from "./pages/admin/Reports";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#2D1B14] text-white">
      <Routes>
        
        {/* 1. PUBLIC & CUSTOMER ROUTES (Uses MainLayout with Navbar/Footer) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="destinations" element={<Catalog />} />
          <Route path="tours" element={<Tours />} />
          <Route path="tour/:id" element={<TourDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
          
          {/* Protected Customer Routes */}
          <Route element={<ProtectedRoute allowedRoles={['customer', 'admin']} />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="booking" element={<BookingPage />} />
          </Route>
        </Route>

        {/* 2. ADMIN ROUTES (Uses AdminLayout with Sidebar) */}
        {/* We wrap the entire Admin section in a ProtectedRoute for safety */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} /> {/* This is /admin */}
            <Route path="dashboard" element={<AdminDashboard />} /> {/* This is /admin/dashboard */}
            <Route path="tours" element={<ManageTours />} /> {/* This is /admin/tours */}
            <Route path="reports" element={<Reports />} />   {/* This is /admin/reports */}
          </Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;