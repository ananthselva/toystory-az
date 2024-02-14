import { useState, useEffect, useMemo, lazy } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Spinner from "react-bootstrap/Spinner";
import "./preorder.scss";
import Select from "react-select";
import { MdEditCalendar } from "react-icons/md";
import PostCode from "../preorder/postcode";
import SubmitButton from "../preorder/submitButton";
import { OrderFlow } from "../../App";
// import Loadable from "../../router/loadable";
// Redux home page code
import { orderTimingApi } from "../../api/menu/orderTimingApi";
// lazy
// const SubmitButton = Loadable(lazy(() => import("../preorder/submitButton")));

export const getOrderTimingDetail = async (formData) => {
  try {
    const response = await orderTimingApi(formData);
    return response.data; // Assuming the response has a 'data' property
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const PreOrder = ({
  selectedOrderMode,
  setSelectedOrderModeValue,
  setShowPreorder,
  defaultCollectionTabStatus,
  setDefaultCollectionTabStatus,
  defaultDeliveryTabStatus,
  setDefaultDeliveryTabStatus,
  setClosedPopup,
  deliveryStatus,
  collectionStatus
}) => {
  const clientId = localStorage.getItem("clientId");
  const formData = useMemo(() => {
    return {
      client_id: clientId,
    };
  }, [clientId]);

  const [response, setResponse] = useState("");
  const { setCollectionTab, setDeliveryTab, getDeliveryTab, getCollectionTab } =
    OrderFlow();


    const [checkDelCollStatus, setCheckDelCollStatus] = useState(() => {
      if (deliveryStatus) {
        return 'Collection';
      } else if (collectionStatus) {
        return 'Delivery';
      } else {
        return selectedOrderMode; 
      }
    });

  useEffect(() => {
    getOrderTimingDetail(formData)
      .then((response) => {
        if (response.status === true) {
          setResponse(response.message);
          const timing = response.message;
          // Check if delivery tabs should be visible
          const isDeliveryClosed =
            timing.Delivery.asap === "" &&
            timing.Delivery.later === "" &&
            timing.Delivery.today === "";
          
          if(isDeliveryClosed){
            setSelectedOrderModeValue('Collection');
            setCheckDelCollStatus('Collection');
          }  
          // Check if collection tabs should be visible
          const isCollectionClosed =
            timing.Collection.asap === "" &&
            timing.Collection.later === "" &&
            timing.Collection.today === "";

            if(isCollectionClosed){
              setSelectedOrderModeValue('Delivery');
              setCheckDelCollStatus('Delivery');
            } 

          if (isCollectionClosed && isDeliveryClosed) {
            setShowPreorder(false);
            setClosedPopup(false);
          }

          setDeliveryTab(!isDeliveryClosed);
          setCollectionTab(!isCollectionClosed);

          // default preorder tab
          if (timing.Collection.asap !== "") {
            setDefaultCollectionTabStatus("ASAP");
          } else if (
            timing.Collection.today !== "" &&
            timing.Collection.today !== "No Pre-order" &&
            timing.Collection.today !== "closed"
          ) {
            setDefaultCollectionTabStatus("Today");
          } else if (
            timing.Collection.later !== "" &&
            timing.Collection.later !== "No Pre-order later"
          ) {
            setDefaultCollectionTabStatus("Later");
          }
          if (timing.Delivery.asap !== "") {
            setDefaultDeliveryTabStatus("ASAP");
          } else if (
            timing.Delivery.today !== "" &&
            timing.Delivery.today !== "No Pre-order" &&
            timing.Delivery.today !== "closed"
          ) {
            setDefaultDeliveryTabStatus("Today");
          } else if (
            timing.Delivery.later !== "" &&
            timing.Delivery.later !== "No Pre-order later"
          ) {
            setDefaultDeliveryTabStatus("Later");
          }
        } else {
          // Handle the case where response.status is false
          console.log(response);
        }
      })
      .catch((error) => {
        // Handle the case where response.status is false
        console.log("Error: " + error);
      });
  }, [
    formData,
    setClosedPopup,
    setCollectionTab,
    setDeliveryTab,
    setDefaultCollectionTabStatus,
    setDefaultDeliveryTabStatus,
    setShowPreorder,
  ]);

  

  const handleTabSelect = (selectedTab) => {
    setSelectedOrderModeValue(selectedTab);
    localStorage.setItem("orderMode", selectedTab);
  };
  

  if (!response) {
    return (
      <>
        <div className="content">
          <Tabs defaultActiveKey={checkDelCollStatus} fill style={{ height: '100%' }}>
            <Tab
              eventKey="Delivery"
              title="Delivery"
              className="delivery"
              disabled="true"
            >
              <p>When would you like your order?</p>
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" variant="info" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              </>
            </Tab>
            <Tab
              eventKey="Collection"
              title="Collection"
              className="collection"
              disabled="true"
            >
              <p>When would you like your order?</p>
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" variant="info" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              </>
            </Tab>
          </Tabs>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="content preorder-modal-content">
        <Tabs
          defaultActiveKey={checkDelCollStatus}
          onSelect={handleTabSelect}
          fill
        >
          <Tab
            eventKey="Delivery"
            title={
              deliveryStatus ? (
                <>
                  Delivery <br /> Unavailable
                </>
              ) : (
                "Delivery"
              )
            }
            className="delivery"
            disabled={!getDeliveryTab}
          >
            <p>When would you like your order?</p>
            <OrderMode
              setShow={setShowPreorder}
              selectedOrderMode={selectedOrderMode}
              timing={response}
              defaultCollectionTabStatus={defaultCollectionTabStatus}
              defaultDeliveryTabStatus={defaultDeliveryTabStatus}
            />
          </Tab>
          <Tab
            eventKey="Collection"
            title={
              collectionStatus ? (
                <>
                  Collection <br /> Unavailable
                </>
              ) : (
                "Collection"
              )
            }
            className="collection"
            disabled={!getCollectionTab}
          >
            <p>When would you like your order?</p>
            <OrderMode
              setShow={setShowPreorder}
              selectedOrderMode={selectedOrderMode}
              timing={response}
              defaultCollectionTabStatus={defaultCollectionTabStatus}
              defaultDeliveryTabStatus={defaultDeliveryTabStatus}
            />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default PreOrder;

const OrderMode = ({
  setShow,
  selectedOrderMode,
  timing,
  defaultDeliveryTabStatus,
  defaultCollectionTabStatus,
}) => {
  // Get the current date

  // Add one day to the current date
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTab, setSelectedTab] = useState(
    selectedOrderMode === "Delivery"
      ? defaultDeliveryTabStatus
      : defaultCollectionTabStatus
  );
  const [selectedDate, setSelectedDate] = useState(null);

  const [startDate, setStartDate] = useState(null); // Initialize startDate with null
  useEffect(() => {
    const laterKeys = Object.keys(timing[selectedOrderMode].later);
    for (const dateKey of laterKeys) {
      const timingsForDate = timing[selectedOrderMode].later[dateKey];
      if (timingsForDate !== "") {
        setStartDate(new Date(dateKey));
        break; // Exit the loop
      }
    }
  }, [timing, selectedOrderMode]);

  // Now you can use the startDate state in your component as needed

  // preorder status
  const [preorderCollectionStatus, setPreOrderCollectionStatus] =
    useState(true);
  const [preorderDeliveryStatus, setPreOrderDeliveryStatus] = useState(true);
  const [asapCollectionStatus, setAsapCollectionStatus] = useState(true);
  const [asapDeliveryStatus, setAsapDeliveryStatus] = useState(true);
  const [laterCollectionStatus, setLaterCollectionStatus] = useState(true);
  const [laterDeliveryStatus, setLaterDeliveryStatus] = useState(true);

  const [todayOptions, setTodayOptions] = useState([]);
  const [options, setOptions] = useState([]);
  const [warningpostcode, setWarningpostcode] = useState(false);

  useEffect(() => {
    // Set the default selectedTime to the current UK time when the component mounts
    const currentTime = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/London",
    });
    const [datePart, timePart] = currentTime.split(", ");
    const [hours, minutes] = timePart.split(":");
    let tatTime = 1;
    if (selectedOrderMode === "Delivery") {
      tatTime = parseInt(timing?.Delivery?.asap?.tatTime?.split(" - ")[0], 10);
    } else if (selectedOrderMode === "Collection") {
      tatTime = parseInt(
        timing?.Collection?.asap?.tatTime?.split(" - ")[0],
        10
      );
    }

    let formattedHours = parseInt(hours, 10);
    let formattedMinutes = parseInt(minutes, 10);

    // Add 20 minutes to the current time
    formattedMinutes += tatTime;
    if (formattedMinutes >= 60) {
      formattedHours += Math.floor(formattedMinutes / 60);
      formattedMinutes %= 60;
    }

    // Ensure formattedHours remains within the 24-hour clock
    formattedHours %= 24;

    // Format the time with added 20 minutes
    const formattedTime = `${formattedHours
      .toString()
      .padStart(2, "0")}:${formattedMinutes.toString().padStart(2, "0")}`;

    // const formattedTime = `${hours}:${minutes}`;
    if (selectedTab === "Today") {
      const firstOptionValue = options[0]?.value;
      if (firstOptionValue) {
        setSelectedTime(firstOptionValue);
      }
    } else if (selectedTab === "ASAP") {
      setSelectedTime(formattedTime);
    }

    // Set the default selectedDate to the current UK date when the component mounts
    setSelectedDate(datePart);
  }, [setSelectedDate, setSelectedTime, options]);

  // Assume you have a selectedTime state and a handleChange function for handling changes
  useEffect(() => {
    if (timing) {
      if (selectedOrderMode === "Delivery") {
        setTodayOptions(timing.Delivery.today.split(","));
      } else {
        setTodayOptions(timing.Collection.today.split(","));
      }
    }
  }, [selectedOrderMode, timing, setTodayOptions]);

  useEffect(() => {
    // Update 'options' whenever 'todayOptions' changes
    setOptions(
      todayOptions.map((timeOption) => ({
        value: timeOption,
        label: timeOption,
      }))
    );
  }, [todayOptions]);

  const handleChange = (selectedOption) => {
    setSelectedTime(selectedOption ? selectedOption.value : null);
  };

  const handleTabSelect = (selectedTab) => {
    setSelectedTab(selectedTab);
    if (selectedTab === "ASAP") {
      // Get the current time in UK timezone
      const currentTime = new Date().toLocaleString("en-GB", {
        timeZone: "Europe/London",
      });

      // Extract hours and minutes from the formatted time
      const [datePart, timePart] = currentTime.split(", ");
      const [hours, minutes] = timePart.split(":");
      let tatTime = 1;
      if (selectedOrderMode === "Delivery") {
        tatTime = parseInt(
          timing?.Delivery?.asap?.tatTime?.split(" - ")[0],
          10
        );
      } else if (selectedOrderMode === "Collection") {
        tatTime = parseInt(
          timing?.Collection?.asap?.tatTime?.split(" - ")[0],
          10
        );
      }

      let formattedHours = parseInt(hours, 10);
      let formattedMinutes = parseInt(minutes, 10);

      // Add 20 minutes to the current time
      formattedMinutes += tatTime;
      if (formattedMinutes >= 60) {
        formattedHours += Math.floor(formattedMinutes / 60);
        formattedMinutes %= 60;
      }

      // Ensure formattedHours remains within the 24-hour clock
      formattedHours %= 24;

      // Format the time with added 20 minutes
      const formattedTime = `${formattedHours
        .toString()
        .padStart(2, "0")}:${formattedMinutes.toString().padStart(2, "0")}`;

      // const formattedTime = `${hours}:${minutes}`;

      setSelectedTime(formattedTime);
    } else if (selectedTab === "Today") {
      // If you want to set selectedTime to the first value of todayOptions
      const firstOptionValue = options[0]?.value;
      if (firstOptionValue) {
        setSelectedTime(firstOptionValue);
      }
    } else {
      const firstOptionValue = options[0]?.value;
      if (firstOptionValue) {
        setSelectedTime(firstOptionValue);
      }
    }
  };

  useEffect(() => {
    handleTabSelect(selectedTab);
  }, [selectedTab]);

  const [InlineStatus, setInlineStatus] = useState(true);
  const [isValidPostcode, setIsValidPostcode] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {timing ? (
        <TimingTabStatus
          timing={timing}
          setPreOrderCollectionStatus={setPreOrderCollectionStatus}
          setPreOrderDeliveryStatus={setPreOrderDeliveryStatus}
          setAsapCollectionStatus={setAsapCollectionStatus}
          setAsapDeliveryStatus={setAsapDeliveryStatus}
          setLaterCollectionStatus={setLaterCollectionStatus}
          setLaterDeliveryStatus={setLaterDeliveryStatus}
        />
      ) : (
        ""
      )}
      <Tabs
        fill
        className="inside-tab"
        onSelect={handleTabSelect}
        defaultActiveKey={
          selectedOrderMode === "Delivery"
            ? defaultDeliveryTabStatus
            : defaultCollectionTabStatus
        }
      >
        <Tab
          eventKey="ASAP"
          title="ASAP"
          className="asap"
          disabled={
            selectedOrderMode === "Delivery"
              ? !asapDeliveryStatus
              : !asapCollectionStatus
          }
        >
          <div className="asap-div">
            <p className="resta-name">{selectedOrderMode}</p>
            <p className="eat">
              ETA:{" "}
              {selectedOrderMode === "Delivery"
                ? timing.Delivery.asap.tatTime + " min"
                : selectedOrderMode === "Collection"
                ? timing.Collection.asap.tatTime + " min"
                : ""}
            </p>
          </div>
        </Tab>

        <Tab
          eventKey="Today"
          title="Today"
          className="today"
          disabled={
            selectedOrderMode === "Delivery"
              ? !preorderDeliveryStatus
              : !preorderCollectionStatus
          }
        >
          <Select
            options={options ? options : ""}
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

        <Tab
          eventKey="Later"
          title="Later"
          className="later"
          disabled={
            selectedOrderMode === "Delivery"
              ? !laterDeliveryStatus
              : !laterCollectionStatus
          }
        >
          <div className="later-cale">
            {timing ? (
              <LaterCalendar
                setSelectedTime={setSelectedTime}
                selectedTime={selectedTime}
                startDate={startDate}
                setStartDate={setStartDate}
                timing={timing}
                InlineStatus={InlineStatus}
                setInlineStatus={setInlineStatus}
                selectedOrderMode={selectedOrderMode}
              />
            ) : (
              ""
            )}
          </div>
        </Tab>
      </Tabs>
      {selectedOrderMode === "Delivery" && (
        <>
          <PostCode
            isValidPostcode={isValidPostcode}
            setIsValidPostcode={setIsValidPostcode}
            warningpostcode={warningpostcode}
            setWarningpostcode={setWarningpostcode}
            setIsVisible={setIsVisible}
            isVisible={isVisible}
          />
        </>
      )}
      <SubmitButton
        selectedTab={selectedTab}
        timing={timing}
        isValidPostcode={isValidPostcode}
        selectedTime={selectedTime}
        setShow={setShow}
        startDate={startDate}
        selectedDate={selectedDate}
        selectedOrderMode={selectedOrderMode}
        setWarningpostcode={setWarningpostcode}
        setIsVisible={setIsVisible}
      />
    </>
  );
};

const TimingTabStatus = ({
  timing,
  setPreOrderCollectionStatus,
  setPreOrderDeliveryStatus,
  setAsapCollectionStatus,
  setAsapDeliveryStatus,
  setLaterCollectionStatus,
  setLaterDeliveryStatus,
}) => {
  const [showPreOrderCollectionStatus, setShowPreOrderCollectionStatus] =
    useState(false);
  const [showPreOrderDeliveryStatus, setShowPreOrderDeliveryStatus] =
    useState(false);
  const [
    showPreOrderLaterCollectionStatus,
    setShowPreOrderLaterCollectionStatus,
  ] = useState(false);
  const [showPreOrderLaterDeliveryStatus, setShowPreOrderLaterDeliveryStatus] =
    useState(false);
  const [showAsapCollectionStatus, setShowAsapCollectionStatus] =
    useState(false);
  const [showAsapDeliveryStatus, setShowAsapDeliveryStatus] = useState(false);
  const [showLaterCollectionStatus, setShowLaterCollectionStatus] =
    useState(false);
  const [showLaterDeliveryStatus, setShowLaterDeliveryStatus] = useState(false);

  useEffect(() => {
    const deliveryOrderModeData = timing.Delivery;
    if (deliveryOrderModeData) {
      setShowAsapDeliveryStatus(deliveryOrderModeData.asap === "");
      setShowPreOrderDeliveryStatus(deliveryOrderModeData.today === "");
      setShowPreOrderLaterDeliveryStatus(
        deliveryOrderModeData.today === "No Pre-order" ||
          deliveryOrderModeData.today === "" ||
          deliveryOrderModeData.today === "closed"
      );
      setShowLaterDeliveryStatus(
        deliveryOrderModeData.later === "No Pre-order later" ||
          deliveryOrderModeData.later === ""
      );
    }

    const collectionOrderModeData = timing.Collection;
    if (collectionOrderModeData) {
      setShowAsapCollectionStatus(collectionOrderModeData.asap === "");
      setShowPreOrderCollectionStatus(collectionOrderModeData.today === "");
      setShowPreOrderLaterCollectionStatus(
        collectionOrderModeData.today === "No Pre-order" ||
          collectionOrderModeData.today === "" ||
          collectionOrderModeData.today === "closed"
      );
      setShowLaterCollectionStatus(
        collectionOrderModeData.later === "No Pre-order later" ||
          collectionOrderModeData.later === ""
      );
    }
  }, [
    timing,
    showPreOrderCollectionStatus,
    showPreOrderDeliveryStatus,
    showPreOrderLaterCollectionStatus,
    showPreOrderLaterDeliveryStatus,
    showAsapCollectionStatus,
    showAsapDeliveryStatus,
    showLaterCollectionStatus,
    showLaterDeliveryStatus,
    setPreOrderCollectionStatus,
    setPreOrderDeliveryStatus,
    setLaterCollectionStatus,
    setLaterDeliveryStatus,
    setAsapCollectionStatus,
    setAsapDeliveryStatus,
  ]);

  if (showAsapCollectionStatus) {
    setAsapCollectionStatus(false);
  }
  if (showAsapDeliveryStatus) {
    setAsapDeliveryStatus(false);
  }

  if (showPreOrderCollectionStatus) {
    setShowPreOrderCollectionStatus(false);
  }
  if (showPreOrderDeliveryStatus) {
    setShowPreOrderDeliveryStatus(false);
  }

  if (showPreOrderLaterCollectionStatus) {
    setPreOrderCollectionStatus(false);
    setLaterCollectionStatus(false);
  }
  if (showPreOrderLaterDeliveryStatus) {
    setPreOrderDeliveryStatus(false);
    setLaterDeliveryStatus(false);
  }

  if (showLaterCollectionStatus) {
    setLaterCollectionStatus(false);
  }
  if (showLaterDeliveryStatus) {
    setLaterDeliveryStatus(false);
  }
};

// function addDays(date, days) {
//   const result = new Date(date);
//   result.setDate(result.getDate() + days);
//   return result;
// }
const LaterCalendar = ({
  startDate,
  setStartDate,
  selectedTime,
  setSelectedTime,
  timing,
  InlineStatus,
  setInlineStatus,
  selectedOrderMode,
}) => {
  const getLaterOrderModeData = (selectedOrderMode, timing) => {
    const laterOrderModeData = {
      highlightWithRanges: [],
      excludedDates: [],
    };

    if (timing[selectedOrderMode]) {
      if (
        timing[selectedOrderMode].later !== "No Pre-order later" &&
        timing[selectedOrderMode].later !== ""
      ) {
        const laterKeys = Object.keys(timing[selectedOrderMode].later);
        laterOrderModeData.highlightWithRanges = laterKeys.map((dateKey) => {
          return {
            "react-datepicker__day--highlighted-custom-2": [new Date(dateKey)],
          };
        });

        laterOrderModeData.excludedDates = laterKeys
          .reduce((positions, dateKey, index) => {
            const timingsForDate = timing[selectedOrderMode].later[dateKey];
            if (
              !timingsForDate ||
              timingsForDate.trim() === "" ||
              timingsForDate === "Shift closed"
            ) {
              positions.push(index);
            }
            return positions;
          }, [])
          .map((index) => new Date(laterKeys[index]));
      }
    }
    return laterOrderModeData;
  };

  const { highlightWithRanges, excludedDates } = getLaterOrderModeData(
    selectedOrderMode,
    timing
  );

  useEffect(() => {
    setTimeout(() => {
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
    }, 100); // Adjust the delay time as needed
  }, [InlineStatus]);
  const handleDateChange = (date) => {
    setStartDate(date);
    setInlineStatus(false);
  };
  const handleClick = () => {
    const laterKeys = Object.keys(timing[selectedOrderMode].later);
    for (const dateKey of laterKeys) {
      const timingsForDate = timing[selectedOrderMode].later[dateKey];
      if (timingsForDate !== "") {
        setStartDate(new Date(dateKey));
        break; // Exit the loop
      }
    }
    setInlineStatus(true);
  };

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        highlightDates={highlightWithRanges}
        inline={InlineStatus}
        peekNextMonth={true}
        dateFormat="dd/MM/yyyy"
        excludeDates={excludedDates}
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
          <PreOrderList
            timing={timing}
            selectedDate={startDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            selectedOrderMode={selectedOrderMode}
          />
        </>
      )}
    </>
  );
};

const PreOrderList = ({
  timing,
  selectedDate,
  selectedTime,
  setSelectedTime,
  selectedOrderMode,
}) => {
  const selectedDateKey = selectedDate.toISOString().split("T")[0];

  const getOptions = (timing, selectedOrderMode, selectedDateKey) => {
    if (
      (selectedOrderMode === "Delivery" &&
        timing.Delivery.later !== "No Pre-order later" &&
        timing.Delivery.later !== "") ||
      (selectedOrderMode === "Collection" &&
        timing.Collection.later !== "No Pre-order later" &&
        timing.Collection.later !== "")
    ) {
      return timing[selectedOrderMode].later[selectedDateKey]
        .split(",")
        .map((time) => {
          const dateTimeValue = new Date(`${selectedDateKey} ${time}`);
          return {
            value: dateTimeValue.toLocaleString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            }),
            label: dateTimeValue.toLocaleString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
        });
    }
    return [];
  };

  const options = getOptions(timing, selectedOrderMode, selectedDateKey);
  useEffect(() => {
    setSelectedTime(options[0].value);
  }, []);

  const handleChange = (selectedOption) => {
    setSelectedTime(selectedOption ? selectedOption.value : null);
  };

  return (
    <>
      <Select
        options={options}
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
  );
};
