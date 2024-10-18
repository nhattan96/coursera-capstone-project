import { AboutSectionStyles } from "./AboutSectionStyles.styles";

import Mario_and_Adrian_A from "../../../assets/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_B from "../../../assets/Mario_and_Adrian_B.jpg";

const AboutSection = () => (
  <AboutSectionStyles id="about">
    <div className="text-section">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        Little Lemon is owned by two Italian brothers, Mario and Adrian, who
        moved to the United States to pursue their shared dream of owning a
        restaurant.
      </p>
      <p>
        To craft the menu, Mario relies on family recipes and his experience as
        a chef in Italy. Adrian does all the marketing for the restaurant and
        led the effort to expand the menu beyond classic Italian to incorporate
        additional cuisines from the Mediterranean region.
      </p>
    </div>
    <div className="image-section">
      <img
        className="image image1"
        src={Mario_and_Adrian_A}
        alt="Mario_and_Adrian_A"
      ></img>
      <img
        className="image image2"
        src={Mario_and_Adrian_B}
        alt="Mario_and_Adrian_B"
      ></img>
    </div>
  </AboutSectionStyles>
);

export default AboutSection;
