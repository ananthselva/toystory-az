import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-bootstrap/Modal";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
import { MdOutlineCancel } from "react-icons/md";
// 18+ popup start
export function EighteenPlus() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {/* <button onClick={handleShow}>Eighteen Plus</button> */}

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className={`eighteen-plus ${theme === "dark" ? "dark-theme" : ""}`}
      >
        <Modal.Body>
          <div className="content">
            <h3>Are you over 18?</h3>
            <p>
              You must be over 18 years to order the selected alcoholic items.
              You may need to provide a valid ID upon receiving your order.
              Before placing an order, Please: Be ready with ID proof Order
              using the same name on your ID to match with it, or you will not
              be delivered. By agreeing, you affirm that you are of legal age in
              your jurisdiction and you agree to be age verified
            </p>
            <div className="button-div">
              <button onClick={handleClose}>Cancel</button>
              <button className="agree-btn">Yes, Agree</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export function DOBPopup() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setBirthdate(null);
    setIsValid(null);
  };
  // const handleShow = () => setShow(true);
  const { theme } = useContext(ThemeContext);

  const [birthdate, setBirthdate] = useState(null);
  const [isValid, setIsValid] = useState(null);

  const handleDateChange = (date) => {
    setBirthdate(date);
    setIsValid(calculateAge(date) >= 18);
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      return age - 1;
    }
    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      alert("Age is valid! You can proceed.");
    } else {
      alert("You must be 18 years or older to proceed.");
    }
  };
  return (
    <>
      {/* <button onClick={handleShow}>Eighteen Plus</button> */}

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className={`dob-popup ${theme === "dark" ? "dark-theme" : ""}`}
      >
        <Modal.Body>
          <span className="close-btn" onClick={handleClose}>
            <MdOutlineCancel />
          </span>
          <div className="content">
            <h3>What’s your date of birth?</h3>
            <p>
              Please verify that you are 18 years of <br /> age or old to order
              these items
            </p>
            <form>
              <DatePicker
                selected={birthdate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                maxDate={new Date()}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                placeholderText="dd/mm/yyyy"
              />
            </form>
            {isValid !== null && (
              <div>
                {!isValid && (
                  <p className="invalid">
                    Looks like you are not eligible to order the restricted
                    items <br /> as DOB doesn’t meet 18 years. You can delete
                    the item
                  </p>
                )}
              </div>
            )}
            <div className="button-div">
              <button onClick={handleClose} className="agree-btn">
                Repeat Last
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
// 18+ popup end
