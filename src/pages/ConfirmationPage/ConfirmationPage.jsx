import { useLocation } from "react-router-dom";
import { ConfirmationPageStyles } from "./ConfirmationPageStyles.styles";
import Button from "../../Components/Button/Button";
import theme from "../../styles/theme";

const ConfirmationPage = () => {
  const location = useLocation();

  const confirmData = location?.state;

  return (
    <ConfirmationPageStyles>
      <h1>Reservation Confirmation!</h1>
      <h2>Thank you for choosing </h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{confirmData?.name}</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>{confirmData?.date}</td>
          </tr>
          <tr>
            <td>Time</td>
            <td>{confirmData?.time}</td>
          </tr>
          <tr>
            <td>Guests</td>
            <td>{confirmData?.guests}</td>
          </tr>
          <tr>
            <td>Occasion</td>
            <td>{confirmData?.occasion}</td>
          </tr>
        </tbody>
      </table>
      <Button
        link={"/"}
        style={{
          background: theme.colors.secondary,
          color: theme.colors.black,
          marginTop: "10px",
        }}
      >
        Back to Home
      </Button>
    </ConfirmationPageStyles>
  );
};

export default ConfirmationPage;
