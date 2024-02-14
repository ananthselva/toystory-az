// *******~ Import ~******** //
// React
// Assets
import { Link } from "react-router-dom";
// Components
// CSS
import "./home-btn.scss";
// Images
// Icons
import { HiOutlineArrowSmRight } from "react-icons/hi";
// *******~ Import ~******** //

const HomeBtn = (props) => {
  return (
    <>
      <Link to="/partner" className="home-btn " id={props.color}>
        {props.name} <HiOutlineArrowSmRight />
      </Link>
    </>
  );
};

export default HomeBtn;
