// Assets
import Navbar from "react-bootstrap/Navbar";
// Style
import "./menubtn.scss";
import { OrderFlow } from "../../../App";
const MenuBtn = (second) => {
  const {mobileref}=OrderFlow
  return (
    <>
      <Navbar.Toggle aria-controls="responsive-navbar-nav " ref={mobileref}>
        <div className="burger-menu">
          <div className="line-menu line-half first-line"></div>
          <div className="line-menu"></div>
          <div className="line-menu line-half last-line"></div>
        </div>
      </Navbar.Toggle>
    </>
  );
};
export default MenuBtn;
