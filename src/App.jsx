import React from "react";
import { Routes, Route } from "react-router-dom"; // REMOVED BrowserRouter/Router
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Dashboard from "./pages/Dashboard";
import TourDetails from "./pages/TourDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ManageTours from "./pages/admin/ManageTours";
import Reports from "./pages/admin/Reports";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import Tours from "./pages/Tours";
import BookingPage from "./pages/BookingPage";


function App() {
  return (
    <div className="min-h-screen w-full bg-[#2D1B14] text-white">
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
       
        <Route path="destinations" element={<Catalog />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/*<Route path="catalog" element={<Catalog />} />
        <Route path="/" element={<Catalog />} />*/}
        <Route path="tour/:id" element={<TourDetails />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/tours" element={<Tours />} />

        {/* Admin Routes */ }
      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="admin/tours" element={<ManageTours />} />
          <Route path="admin/reports" element={<Reports />} />
        </Route>
        
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="reports" element={<Reports />} />
         </Route>
    </Routes>
    </div>
  );
}

export default App;

