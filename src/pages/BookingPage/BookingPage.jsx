import { useEffect, useState } from "react";
import Input from "../../Components/Input/Input";
import Label from "../../Components/Label/Label";
import Select from "../../Components/Select/Select";
import { fetchAPI, submitAPI } from "../../utils/sample-api";
import { BookingPageStyles, ErrorInfoStyles } from "./BookingPageStyles.styles";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

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
  const Navigate = useNavigate();

  useEffect(() => {
    const availableTimesData = fetchAPI(new Date());

    setAvailableTimes(availableTimesData);

    return () => {};
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const response = submitAPI(values);
      if (response) {
        Navigate("/confirmation", {
          state: values,
        });
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .min(1, "Must be bigger than 0")
        .max(10, "Must be smaller than 11")
        .required("Number of guests is required"),
      occasion: Yup.string().required("Occasion is required"),
    }),
  });

  return (
    <BookingPageStyles>
      <h1>Reservation Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <Label labelFor="name">Your name</Label>

        <Input
          type="text"
          id="name"
          data-testid="name"
          onChange={formik.handleChange}
          {...formik.getFieldProps("name")}
        />
        <ErrorInfoStyles>
          {formik.touched.name && formik.errors.name}
        </ErrorInfoStyles>

        <Label labelFor="date">Choose date</Label>

        <Input
          type="date"
          id="date"
          data-testid="date"
          onChange={formik.handleChange}
          {...formik.getFieldProps("date")}
        />
        <ErrorInfoStyles>
          {formik.touched.date && formik.errors.date}
        </ErrorInfoStyles>

        <Label labelFor="time">Choose time</Label>
        <Select
          id="time"
          options={availableTimes}
          data-testid="time"
          {...formik.getFieldProps("time")}
          onChange={formik.handleChange}
        ></Select>
        <ErrorInfoStyles>
          {formik.touched.time && formik.errors.time}
        </ErrorInfoStyles>

        <Label labelFor="guests">Number of guests</Label>
        <Input
          type="number"
          id="guests"
          data-testid="guests"
          placeholder={0}
          {...formik.getFieldProps("guests")}
          onChange={formik.handleChange}
        />
        <ErrorInfoStyles>
          {formik.touched.guests && formik.errors.guests}
        </ErrorInfoStyles>

        <Label labelFor="occasion">Occasion</Label>
        <Select
          id="occasion"
          options={occasionData}
          data-testid="occasion"
          {...formik.getFieldProps("occasion")}
          onChange={formik.handleChange}
        ></Select>
        <ErrorInfoStyles>
          {formik.touched.occasion && formik.errors.occasion}
        </ErrorInfoStyles>

        <Input type="submit" value="Make Your reservation" />
      </form>
    </BookingPageStyles>
  );
};

export default BookingPage;
