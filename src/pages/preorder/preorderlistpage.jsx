import { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./preorder.scss";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
import { OrderFlow } from "../../App";
// import PreOrderData from "./data.json";
import Select from "react-select";
import { MdOutlineCancel, MdEditCalendar } from "react-icons/md";
function PreOrderListPage({
  children,
  OrderType,
  setOrderType,
  updateHasFetchedData,
  allData,
  setAllData,
  ...props
}) {
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTabSelect = (selectedTab) => {
    setOrderType(selectedTab);
  };
  return (
    <>
      <Button className={props.clsname} onClick={handleShow}>
        {children}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className={`preorder-popup ${theme === "dark" ? "dark-theme" : ""}`}
      >
        <Modal.Body>
          <span className="close-btn" onClick={handleClose}>
            <MdOutlineCancel />
          </span>
          <div className="content">
            {/* <h3 className="heading">Your order settings</h3> */}
            <Tabs defaultActiveKey={OrderType} onSelect={handleTabSelect} fill>
              <Tab eventKey="Delivery" title="Delivery" className="delivery">
                {/* <p>Select a delivery time up to 7 days in advance.</p> */}
                <p>When would you like your order?</p>
                <OrderMode
                  OrderType={OrderType}
                  setShow={setShow}
                  allData={allData}
                  setAllData={setAllData}
                  updateHasFetchedData={updateHasFetchedData}
                />
              </Tab>
              <Tab
                eventKey="Collection"
                title="Collection"
                className="collection"
              >
                <p>When would you like your order?</p>
                {/* <h3>Schedule my order</h3> */}
                {/* <p>Select a Collection time up to 7 days in advance.</p> */}
                <OrderMode
                  OrderType={OrderType}
                  setShow={setShow}
                  allData={allData}
                  setAllData={setAllData}
                  updateHasFetchedData={updateHasFetchedData}
                />
              </Tab>
            </Tabs>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PreOrderListPage;
const OrderMode = ({
  OrderType,
  setShow,
  updateHasFetchedData,
  allData,
  setAllData,
}) => {
  const { setOrderTime, setOrderMode } = OrderFlow();
  // Get the current date
  const currentDate = new Date();

  // Add one day to the current date
  const nextDay = addDays(currentDate, 1);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTab, setSelectedTab] = useState("ASAP");
  const [startDate, setStartDate] = useState(nextDay);
  const [selectedDate, setSelectedDate] = useState(null);
  useEffect(() => {
    let data = "";

    if (selectedTab === "Later") {
      const formattedDate = startDate.toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      data = `${formattedDate} (${selectedTime})`;
    } else if (selectedTab === "ASAP") {
      data = "ASAP (25 - 35 min)";
    } else {
      data = `${selectedTab} (${selectedTime})`;
    }

    setAllData(data);
  }, [selectedTab, selectedTime, startDate]);
  useEffect(() => {
    // Set the default selectedTime to the current UK time when the component mounts
    const currentTime = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/London",
    });
    const [datePart, timePart] = currentTime.split(", ");
    const [hours, minutes] = timePart.split(":");
    const formattedTime = `${hours}:${minutes}`;
    setSelectedTime(formattedTime);

    // Set the default selectedDate to the current UK date when the component mounts
    setSelectedDate(datePart);
  }, []);
  const generateTimeOptions = () => {
    const options = [];
    const currentTime = new Date();
    let startTime = new Date(currentTime); // Clone the current time so we can modify the startTime

    startTime.setHours(startTime.getHours() + 1); // Add one hour to the current time

    // Set the startTime to the next 5-minute interval
    const remainder = startTime.getMinutes() % 5;
    if (remainder !== 0) {
      startTime.setMinutes(startTime.getMinutes() + (5 - remainder));
    }

    while (startTime.getDate() === currentTime.getDate()) {
      const hour = String(startTime.getHours()).padStart(2, "0");
      const minute = String(startTime.getMinutes()).padStart(2, "0");
      const timeOption = `${hour}:${minute}`;

      options.push({ value: timeOption, label: timeOption });

      startTime.setMinutes(startTime.getMinutes() + 5);
    }

    return options;
  };

  // Assume you have a selectedTime state and a handleChange function for handling changes
  const todayOptions = generateTimeOptions();
  // const todayOptions = PreOrderData.message.today.split(",");

  const handleChange = (selectedOption) => {
    setSelectedTime(selectedOption ? selectedOption.value : null);
  };

  const handleTabSelect = (selectedTab) => {
    if (selectedTab === "ASAP") {
      // Get the current time in UK timezone
      const currentTime = new Date().toLocaleString("en-GB", {
        timeZone: "Europe/London",
      });

      // Extract hours and minutes from the formatted time
      const [datePart, timePart] = currentTime.split(", ");
      const [hours, minutes] = timePart.split(":");
      const formattedTime = `${hours}:${minutes}`;
      console.log(datePart);
      setSelectedTab(selectedTab);
      setSelectedTime(formattedTime);
    } else if (selectedTab === "Today") {
      // If you want to set selectedTime to the first value of todayOptions
      setSelectedTab(selectedTab);
      setSelectedTime(todayOptions[0].value);
    } else {
      setSelectedTab(selectedTab);
      setSelectedTime(todayOptions[0].value);
    }
  };

  const handleSubmit = () => {
    // Do something with the selected option and selected tab
    let date =
      selectedTab === "Later"
        ? startDate.toLocaleDateString("en-GB")
        : selectedDate;
    console.log("Order Type:", OrderType);
    console.log("Order Mode:", selectedTab);
    console.log("Order Date:", date);
    console.log("Order Time:", selectedTime);
    localStorage.setItem("orderTime", date + " " + selectedTime);
    localStorage.setItem("orderType", selectedTab);
    setOrderTime(date + " " + selectedTime);
    setOrderMode(OrderType);
    if (selectedTab === "ASAP") {
      localStorage.setItem("preOrder", "0");
    } else {
      localStorage.setItem("preOrder", date + " " + selectedTime);
    }
    setShow(false);
    const orderMode = localStorage.getItem("orderMode");
    if (orderMode !== OrderType) {
      localStorage.setItem("orderMode", OrderType);
      updateHasFetchedData(false);
    }
    // Add your logic here to handle the form submission
  };

  return (
    <>
      <Tabs
        defaultActiveKey="ASAP"
        fill
        className="inside-tab"
        onSelect={handleTabSelect}
      >
        <Tab eventKey="ASAP" title="ASAP" className="asap">
          <div className="asap-div">
            {/* <p className="resta-name">Takeaway</p> */}
            {/* <p className="eat">eta: 25–35 min</p> */}
            {/* <span>+20min for orders over £1.40</span> */}
          </div>
        </Tab>

        <Tab eventKey="Today" title="Today" className="today">
          <Select
            options={todayOptions}
            onChange={handleChange}
            value={
              selectedTime ? { value: selectedTime, label: selectedTime } : null
            }
            className="today-select"
            placeholder="Choose...."
            classNamePrefix="t-select"
            isSearchable={false}
          />
        </Tab>

        <Tab eventKey="Later" title="Later" className="later">
          <div className="later-cale">
            <LaterCalendar
              setSelectedTime={setSelectedTime}
              selectedTime={selectedTime}
              startDate={startDate}
              setStartDate={setStartDate}
              todayOptions={todayOptions}
            />
          </div>
        </Tab>
      </Tabs>

      <div className="footer-div">
        <div className="status">
          <p>
            Your {OrderType} Order Scheduled at{" "}
            {selectedTab === "ASAP" && "(30–40m)"}
          </p>
          {/* <span>
            {selectedTab === "Later"
              ? startDate.toLocaleDateString("en-GB")
              : selectedTab}
            &nbsp;({selectedTab === "ASAP" ? "25–35m" : selectedTime})
          </span> */}
        </div>
        <Button className="preorder-btn" onClick={handleSubmit}>
          {selectedTab === "Later"
            ? startDate.toLocaleString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
            : selectedTab === "ASAP"
            ? null
            : selectedTab}
          &nbsp;
          {selectedTab === "ASAP" ? "Start Ordering" : <>({selectedTime})</>}
        </Button>
      </div>
    </>
  );
};
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
const LaterCalendar = ({
  startDate,
  setStartDate,
  selectedTime,
  setSelectedTime,
  todayOptions,
}) => {
  const [InlineStatus, setInlineStatus] = useState(true);
  const nextSevenDays = addDays(new Date(), 7);
  const highlightWithRanges = [
    {
      "react-datepicker__day--highlighted-custom-2": [
        addDays(new Date(), 1),
        addDays(new Date(), 2),
        addDays(new Date(), 3),
        addDays(new Date(), 4),
        addDays(new Date(), 5),
        addDays(new Date(), 6),
        addDays(new Date(), 7),
      ],
    },
  ];

  useEffect(() => {
    // Add 'active' class to react-datepicker__week child divs with class react-datepicker__day--highlighted-custom-2
    const weekElements = document.querySelectorAll(".react-datepicker__week");
    weekElements.forEach((weekElement) => {
      const dayElements = weekElement.querySelectorAll(
        ".react-datepicker__day--highlighted-custom-2"
      );
      dayElements.forEach((dayElement) => {
        dayElement.parentElement.classList.add("active");
      });
    });
  }, [InlineStatus]);
  const handleDateChange = (date) => {
    setStartDate(date);
    setInlineStatus(false);
  };
  const handleClick = () => {
    // Get the current date
    const currentDate = new Date();

    // Add one day to the current date
    const nextDay = addDays(currentDate, 1);

    // Update the startDate state with the new date (nextDay)
    setStartDate(nextDay);

    // Set the InlineStatus to true to show the DatePicker inline
    setInlineStatus(true);
  };

  const handleChange = (selectedOption) => {
    setSelectedTime(selectedOption ? selectedOption.value : null);
  };

  const date = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        highlightDates={highlightWithRanges}
        inline={InlineStatus}
        peekNextMonth={true}
        minDate={new Date()}
        maxDate={nextSevenDays}
        dateFormat="dd/MM/yyyy"
        excludeDates={[new Date()]}
      />
      {InlineStatus ? null : (
        <>
          <button className="date-btn" onClick={handleClick}>
            <MdEditCalendar />{" "}
            {startDate.toLocaleString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </button>
          <Select
            options={todayOptions}
            onChange={handleChange}
            value={
              selectedTime ? { value: selectedTime, label: selectedTime } : null
            }
            className="today-select"
            placeholder="Choose...."
            classNamePrefix="t-select"
            isSearchable={false}
          />
        </>
      )}
    </>
  );
};
