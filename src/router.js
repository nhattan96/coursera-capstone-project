import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Bookingpage from "./pages/Booking";
import ConfirmationPage from "./pages/ConfirmationPage";

export default function () {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Bookingpage />} path="/bookings" />
      <Route element={<ConfirmationPage />} path="/confirmation" />
    </Routes>
  );
}
