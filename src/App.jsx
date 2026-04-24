import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

// Public Pages
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";

// User/Admin Pages
import Dashboard from "./pages/Dashboard";
import BookingPage from "./pages/BookingPage";
import AdminDashboard from "./pages/AdminDashboard";
import ManageTours from "./pages/admin/ManageTours";
import Reports from "./pages/admin/Reports";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#2D1B14] text-white">
      {/* ✅ CORRECT: ScrollToTop goes HERE, outside of Routes */}
      <ScrollToTop />

      <Routes>
        {/* 1. PUBLIC & CUSTOMER ROUTES */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="destinations" element={<Catalog />} />
          <Route path="tours" element={<Tours />} />
          <Route path="tour/:id" element={<TourDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          {/* Note: I removed the leading slash on destinations below to keep nesting consistent */}
          <Route path="destinations-list" element={<Destinations />} />
          <Route path="destinations/:regionId" element={<DestinationDetail />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Register />} />
          
          {/* Protected Customer Routes */}
          <Route element={<ProtectedRoute allowedRoles={['customer', 'admin']} />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="booking" element={<BookingPage />} />
          </Route>
        </Route>

        {/* 2. ADMIN ROUTES */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="tours" element={<ManageTours />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;