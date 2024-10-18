import { MainContainerStyles } from "./MainContainerStyles";

const MainContainer = (props) => (
  <MainContainerStyles {...props}>
    <div className="container-item">{props.children}</div>
  </MainContainerStyles>
);
export default MainContainer;
