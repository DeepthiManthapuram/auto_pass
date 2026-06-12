import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/landing/LandingPage";
import LoginPage from "@/pages/auth/LoginPage";
import OwnerDashboard from "@/pages/owner/DashboardPage";
import PassengerDashboard from "@/pages/passenger/DashboardPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/owner/dashboard"
          element={<OwnerDashboard />}
        />
        <Route
          path="/passenger/dashboard"
          element={<PassengerDashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}