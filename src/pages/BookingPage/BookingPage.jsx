import { useEffect, useState } from "react";
import { fetchAPI } from "../../utils/sample-api";
import { BookingPageStyles } from "./BookingPageStyles.styles";

import BookingForm from "../../Components/BookingForm/BookingForm";

const initAvailableTimesData = [
  { key: "17:00", value: "17" },
  { key: "18:00", value: "18" },
  { key: "19:00", value: "19" },
  { key: "20:00", value: "20" },
  { key: "21:00", value: "21" },
  { key: "22:00", value: "22" },
];

const occasionData = [
  { key: "Birthday", value: "Birthday" },
  { key: "Anniversary", value: "Anniversary" },
];

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState(initAvailableTimesData);

  useEffect(() => {
    const availableTimesData = fetchAPI(new Date());

    setAvailableTimes(availableTimesData);

    return () => {};
  }, []);

  return (
    <BookingPageStyles>
      <h1>Reservation Form</h1>
      <BookingForm
        availableTimes={availableTimes}
        occasionData={occasionData}
      ></BookingForm>
    </BookingPageStyles>
  );
};

export default BookingPage;
