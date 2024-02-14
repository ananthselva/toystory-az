import React, { useContext, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import "./themebtn.scss";
import ThemeContext from "./contexts/themecontexts";
// img
// import { Image } from "react-bootstrap";
// import SunIcon from "../img/sun.png";
// import MoonIcon from "../img/moon.png";

import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { BiDesktop } from "react-icons/bi";

function ThemebtnOne({ theme, setChecked, checked }) {
  return (
    <div className="theme-btn">
      <div className="checkbox-wrapper-54">
        <OverlayTrigger
          key="top"
          placement="top"
          rootClose={true}
          delay={{
            show: 0,
            hide: 100,
          }}
          overlay={
            <Tooltip id="light-dark-tool">
              {checked ? "Enable Dark Mode" : "Enable Light Mode"}
            </Tooltip>
          }
        >
          <label className="switch">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(toggle)}
            />
            <span className="slider">
              {checked ? <BsMoonStarsFill /> : <BsSunFill />}
            </span>
          </label>
        </OverlayTrigger>
      </div>

      <p
        style={{
          display: " none",
        }}
      >
        This box is {theme}
      </p>
    </div>
  );
}
const ThemebtnTwo = ({ setChecked, checked }) => (
  <div className="second-theme-btn-desk">
    <label onClick={() => setChecked(true)}>
      <BsSunFill /> Light
    </label>
    <label onClick={() => setChecked(false)}>
      <WiMoonAltWaningCrescent4 /> Dark
    </label>
    <label
      onClick={() =>
        setChecked(!window.matchMedia("(prefers-color-scheme: dark)").matches)
      }
    >
      <BiDesktop /> System
    </label>
  </div>
);

export default ThemebtnTwo;

export function ThemeSetter() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [checked, setChecked] = useState(theme === "light");

  checked ? setTheme("light") : setTheme("dark");

  return (
    <>
      <ThemebtnOne
        theme={theme}
        checked={checked}
        setChecked={setChecked}
      ></ThemebtnOne>
      {/* <ThemebtnTwo checked={checked} setChecked={setChecked} /> */}
    </>
  );
}
export function ThemeSetterTwo() {
  const { theme, setTheme } = useContext(ThemeContext);
  // const prefersDarkMode = window.matchMedia(
  //   "(prefers-color-scheme: dark)"
  // ).matches;
  const [checked, setChecked] = useState(theme === "light");

  checked ? setTheme("light") : setTheme("dark");

  return (
    <>
      <ThemebtnTwo checked={checked} setChecked={setChecked} />
    </>
  );
}
function toggle(value) {
  return !value;
}
