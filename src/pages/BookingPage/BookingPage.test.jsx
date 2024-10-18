import { render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";
import { BrowserRouter } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../utils/sample-api";

describe("Form component", () => {
  test("Renders the form and submits user input", () => {
    const handleSubmit = jest.fn(); // Mock the submit handler

    // Render the form
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    const inputName = screen.getByTestId("name");
    expect(inputName).toBeInTheDocument();

    const inputDate = screen.getByTestId("date");
    expect(inputDate).toBeInTheDocument();

    const inputTime = screen.getByTestId("time");
    expect(inputTime).toBeInTheDocument();

    const inputGuests = screen.getByTestId("guests");
    expect(inputGuests).toBeInTheDocument();

    const inputOccasion = screen.getByTestId("occasion");
    expect(inputOccasion).toBeInTheDocument();

    const submitButton = screen.getByDisplayValue("Make Your reservation");
    expect(submitButton).toBeInTheDocument();
  });

  test("initializeTimes returns the correct expected value", () => {
    const today = new Date();
    const result = fetchAPI(today);
    expect(result.length).toBeGreaterThan(0);
  });

  test("submitAPI returns true", () => {
    const formData = {
      name: "Kai",
      date: "2022-10-12",
      time: "20:00",
      guests: 5,
      occasion: "Birthday",
    };
    const result = submitAPI(formData);
    expect(result).toBe(true);
  });
});
