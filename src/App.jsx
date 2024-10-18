import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BookingPage from "./pages/BookingPage/BookingPage";
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MainContainer from "./Components/MainContainer/MainContainer";
import Nav from "./Components/Nav/Nav";
import FooterSection from "./pages/HomePage/FooterSection/FooterSection";

function App() {
  return (
    <MainContainer>
      <BrowserRouter basename="/little-lemon">
        <Nav></Nav>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<BookingPage />} path="/booking" />
          <Route element={<ConfirmationPage />} path="/confirmation" />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <FooterSection></FooterSection>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;
