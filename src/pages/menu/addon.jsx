import React, { useEffect, useState, useContext } from "react";
import { Modal, Image, Button } from "react-bootstrap";
import { MdOutlineCancel } from "react-icons/md";
import { MdDone } from "react-icons/md";
import Form from "react-bootstrap/Form";
import WhiteCurve from "./img/white-curv.png";
import DarkCurve from "./img/dark-curv.png";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
import { RiArrowRightCircleLine, RiArrowLeftCircleLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getAddonDetail } from "../../actions/menu/addonAction";
import { finalSelectItems } from "../../actions/menu/cartAction";
import { OrderFlow } from "../../App";
function AddonPopup({
  getAddonDetail,
  popupshow,
  popupclose,
  AddonhandleClose,
  itemid,
  addonid,
  addonData,
  isLoading,
  // loyalty,
}) {
  const [getDataAddon, setDataAddon] = useState(false);
  const [getAddonBack, setAddonBack] = useState([]);

  const [existingString, setExistingString] = useState("");
  const [cammaString, setCammaString] = useState("");
  const [backItemId, setBackItemId] = useState("");
  const [backAddonId, setBackAddonId] = useState("");
  const [existingBackString, setExistingBackString] = useState("");
  const [cammaBackString, setCammaBackString] = useState("");

  const [buttonText, setButtonText] = useState("Next");
  const [skipButtonCheck, setSkipButtonCheck] = useState(false);
  const { getOrderMode, getOrderTime, setOrderTime, restaurant } = OrderFlow();
  const { theme } = useContext(ThemeContext);
  const orderType = getOrderMode === "Collection" ? 1 : 0;
  const orderTime = getOrderTime || "";
  const [extra, addExtraAddon] = useState("");

  //  timing function
  let dateParts = "";
  let timePart = "";
  if (orderTime) {
    const inputDate = orderTime;
    dateParts = inputDate.split(" ")[0].split("/"); // Split the date into parts
    timePart = inputDate.split(" ")[1]; // Get the time part
  } else {
    const currentTime = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/London",
    });
    const [datePart, timeParts] = currentTime.split(", ");
    const [hours, minutes] = timeParts.split(":");
    dateParts = datePart.split(" ")[0].split("/"); // Split the date into parts
    timePart = `${hours}:${minutes}`; // Get the time part
    localStorage.setItem("orderTime", `${datePart} ${timePart}`);
    setOrderTime(`${datePart} ${timePart}`);
  }

  // Create a Date object with the parts
  const dateObject = new Date(
    `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T${timePart}`
  );

  // Format the date in the desired format
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");
  const hour = String(dateObject.getHours()).padStart(2, "0");
  const minute = String(dateObject.getMinutes()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day} ${hour}:${minute}`;

  const { path } = useParams();
  useEffect(() => {
    const postData = {
      client_path: path,
      order_mode: orderType,
      order_time: formattedDate,
      item_id: itemid,
      addon_id: addonid,
      extra: "",
      addon_item: "",
    };
    if (itemid && addonid) {
      if (!getDataAddon) {
        // setBackItemId(itemid);
        // setBackAddonId(addonid);
        setDataAddon(true);
        getAddonDetail(postData);
        setAddonBack([
          ...getAddonBack,
          [itemid, addonid, cammaString, existingBackString],
        ]);
      }
    }

    // setDataAddon(false);
  }, [path, itemid, getAddonDetail, getDataAddon, addonid]);

  // if (addonData) {
  //   addonData["loyalty"] = loyalty && addonData ? loyalty : false;
  // }

  const addonSkipContinue = (itemvalueid, addonvalueid, nextvalueid) => {
    console.log("addonSkipContinue");
    setExistingBackString(existingString);
    setCammaBackString(cammaString);

    setExistingString(
      existingString === "" ? "" : existingString + "," + itemvalueid
    );

    let postDatavalue = "";

    // Split the input string into an array of numbers
    if (existingString) {
      const numbersArray = existingString.toString().split(",");

      if (numbersArray.includes(itemvalueid.toString())) {
        console.log("equal");
        const updatedNumbersArray = numbersArray.filter(
          (data) => data !== itemvalueid.toString()
        );

        let changedCammaString = cammaString;
        const index = numbersArray.findIndex(
          (data) => data === itemvalueid.toString()
        );
        if (index !== -1) {
          const array = cammaString.split(",");
          array.splice(index, 1);
          changedCammaString = array.join(",");
          setCammaString(changedCammaString);
        }
        setExistingString(updatedNumbersArray.join(","));
        const parsedAddonValueId = parseInt(addonvalueid, 10);
        const parsedNextValueId = parseInt(nextvalueid, 10);

        const addonIdToUse =
          parsedAddonValueId === 0 ? parsedNextValueId : parsedAddonValueId;

        const addon_id = addonIdToUse === 0 ? addonid : addonIdToUse.toString();

        postDatavalue = {
          client_path: path,
          order_mode: orderType,
          order_time: formattedDate,
          item_id: itemid,
          addon_id: addon_id,
          extra: changedCammaString,
          addon_item: updatedNumbersArray.join(","),
        };
      } else {
        const updatedCamma =
          cammaString === "" && extra === "" ? "," : cammaString + extra + ",";
        setCammaString(updatedCamma);
        const parsedAddonValueId = parseInt(addonvalueid, 10);
        const parsedNextValueId = parseInt(nextvalueid, 10);

        const addonIdToUse =
          parsedAddonValueId === 0 ? parsedNextValueId : parsedAddonValueId;

        const addon_id = addonIdToUse === 0 ? addonid : addonIdToUse.toString();

        postDatavalue = {
          client_path: path,
          order_mode: orderType,
          order_time: formattedDate,
          item_id: itemid,
          addon_id: addon_id,
          extra: updatedCamma,
          addon_item: existingString + "," + itemvalueid,
        };
      }
    } else {
      setExistingString(itemvalueid);
      const updatedCamma =
        cammaString === "" && extra === "" ? "," : cammaString + extra + ",";
      setCammaString(updatedCamma);
      const parsedAddonValueId = parseInt(addonvalueid, 10);
      const parsedNextValueId = parseInt(nextvalueid, 10);

      const addonIdToUse =
        parsedAddonValueId === 0 ? parsedNextValueId : parsedAddonValueId;

      const addon_id = addonIdToUse === 0 ? addonid : addonIdToUse.toString();

      postDatavalue = {
        client_path: path,
        order_mode: orderType,
        order_time: formattedDate,
        item_id: itemid,
        addon_id: addon_id,
        extra: updatedCamma,
        addon_item: itemvalueid,
      };
    }
    console.log(postDatavalue);
    setButtonText("Continue");
    setSkipButtonCheck(true);
    if (
      (addonvalueid === "0" || addonvalueid === 0
        ? nextvalueid
        : addonvalueid) === 0
    ) {
      popupclose();
      setBackItemId(itemvalueid);
      setBackAddonId(
        addonvalueid === "0" || addonvalueid === 0 ? nextvalueid : addonvalueid
      );
      finalSelectItems(postDatavalue);
      setAddonBack([
        ...getAddonBack,
        [
          itemvalueid,
          addonvalueid === "0" || addonvalueid === 0
            ? nextvalueid
            : addonvalueid,
          cammaString,
          existingBackString,
        ],
      ]);
    }
    addExtraAddon("");
  };

  const addonSkip = (nextAId) => {
    console.log("addonSkip");
    setExistingBackString(existingString);
    setCammaBackString(cammaString);
    const postAddonSkip = {
      client_path: path,
      order_mode: orderType,
      order_time: formattedDate,
      item_id: itemid,
      addon_id: nextAId === 0 ? addonid : nextAId,
      extra: cammaString,
      addon_item: existingString,
    };
    if (nextAId === 0) {
      popupclose();
    }
    console.log(postAddonSkip);
    setBackItemId(itemid);
    setBackAddonId(nextAId);
    getAddonDetail(postAddonSkip);
    addExtraAddon("");
  };

  const handleRadioButtonClick = (itemvalueid, addonvalueid, nextvalueid) => {
    console.log("handleRadioButtonClick");
    setButtonText("Next");
    setExistingBackString(existingString);
    setCammaBackString(cammaString);
    const newValue = itemvalueid;
    const updatedString =
      existingString === "" ? itemvalueid : existingString + "," + newValue;
    const updatedCamma =
      cammaString === "" && extra === "" ? "," : cammaString + extra + ",";
    setExistingString(updatedString);
    setCammaString(updatedCamma);
    const parsedAddonValueId = parseInt(addonvalueid, 10);
    const parsedNextValueId = parseInt(nextvalueid, 10);

    const addonIdToUse =
      parsedAddonValueId === 0 ? parsedNextValueId : parsedAddonValueId;

    const addon_id = addonIdToUse === 0 ? addonid : addonIdToUse.toString();

    const extraValue =
      cammaString === "" && extra === "" ? "," : cammaString + extra + ",";

    const addonItem =
      existingString === "" ? itemvalueid : existingString + "," + newValue;

    const postDatavalue = {
      client_path: path,
      order_mode: orderType,
      order_time: formattedDate,
      item_id: itemid,
      addon_id: addon_id,
      extra: extraValue,
      addon_item: addonItem,
    };
    // const postDatavalue = {
    //   client_path: path,
    //   order_mode: orderType,
    //   order_time: formattedDate,
    //   item_id: itemid,
    //   addon_id:
    //     (addonvalueid.toString() === "0"
    //       ? nextvalueid
    //       : addonvalueid
    //     ).toString() === 0
    //       ? addonid
    //       : addonvalueid.toString() === "0"
    //       ? nextvalueid
    //       : addonvalueid,
    //   extra:
    //     cammaString === "" && extra === "" ? "," : cammaString + extra + ",",
    //   addon_item:
    //     existingString === "" ? itemvalueid : existingString + "," + newValue,
    // };
    console.log(postDatavalue);

    if (
      (addonvalueid === "0" || addonvalueid === 0
        ? nextvalueid
        : addonvalueid) === 0
    ) {
      popupclose();
      finalSelectItems(postDatavalue);
    }
    if (addonvalueid || nextvalueid) {
      setBackItemId(itemid);
      setBackAddonId(
        addonvalueid === "0" || addonvalueid === 0 ? nextvalueid : addonvalueid
      );
      getAddonDetail(postDatavalue, restaurant.discount, getOrderMode);
      setAddonBack([
        ...getAddonBack,
        [
          itemid,
          addonvalueid === "0" || addonvalueid === 0
            ? nextvalueid
            : addonvalueid,
          cammaString,
          existingBackString,
        ],
      ]);
    }
    addExtraAddon("");
  };

  const addonBack = () => {
    const lastElement = getAddonBack[getAddonBack.length - 1];
    console.log(getAddonBack);
    const newArray = getAddonBack.slice(0, -1);
    if (!lastElement && !lastElement[0]) {
      popupclose();
    }
    setAddonBack(newArray);
    const postAddonBack = {
      client_path: path,
      order_mode: orderType,
      order_time: formattedDate,
      item_id: lastElement[0],
      addon_id: lastElement[1],
      extra: lastElement[2],
      addon_item: lastElement[3],
    };
    console.log(postAddonBack);
    setExistingString(existingBackString);
    setCammaString(cammaBackString);
    getAddonDetail(postAddonBack);
  };

  const handleAddExtra = (value) => {
    addExtraAddon(value);
  };

  if (isLoading) {
    return "Loading...";
  }

  return (
    <>
      {addonData ? (
        <>
          {itemid && (
            <Modal
              show={popupshow}
              onHide={popupclose}
              centered
              className={`addon-popup ${theme === "dark" ? "dark-theme" : ""}`}
            >
              <Modal.Body>
                <div className="header-div">
                  <h3>{addonData.orderItemName}</h3>
                  <span className="close-btn" onClick={AddonhandleClose}>
                    <MdOutlineCancel />
                  </span>
                </div>
                <div className="extra">
                  <p className="title">Extras ( Optional )</p>
                  {addonData.selectedItem.length !== 0 && (
                    <div className="optional">
                      {addonData.selectedItem.map((selected, index) => (
                        <p key={index}>
                          <span className="tick-icon">
                            <MdDone />
                          </span>
                          {selected.items}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <div className="extra-btns">
                  {Object.entries(addonData.addExtra).map(
                    ([key, value], index) => {
                      let buttonLabel = "";
                      let buttonClassName = "";

                      switch (key) {
                        case "Noid":
                          buttonLabel = value === 0 ? "NO" : "";
                          buttonClassName = "no";
                          break;
                        case "Lessid":
                          buttonLabel = value === 1 ? "LESS" : "";
                          buttonClassName = "less";
                          break;
                        case "Halfid":
                          buttonLabel = value === 2 ? "HALF" : "";
                          buttonClassName = "half";
                          break;
                        case "Onid":
                          buttonLabel = value === 3 ? "ON" : "";
                          buttonClassName = "on";
                          break;
                        case "Withid":
                          buttonLabel = value === 4 ? "WIDTH" : "";
                          buttonClassName = "width";
                          break;
                        case "OnBurgerid":
                          buttonLabel = value === 5 ? "ON BURGER" : "";
                          buttonClassName = "on-burger";
                          break;
                        case "OnChipsid":
                          buttonLabel = value === 6 ? "ON CHIPS" : "";
                          buttonClassName = "on-chips";
                          break;
                        default:
                          break;
                      }

                      return buttonLabel ? (
                        <span key={index}>
                          <button
                            onClick={() => handleAddExtra(value)}
                            checked={value === extra}
                            className={buttonClassName}
                          >
                            {buttonLabel}
                          </button>
                        </span>
                      ) : null;
                    }
                  )}
                </div>
                <div className="addon-items">
                  <Form>
                    <div className="input-grup-div">
                      {addonData.addonItems.map((addonitem, index) => (
                        <>
                          <div className="input-div" key={index}>
                            <input
                              type={
                                addonData.addonLimit === 1
                                  ? "radio"
                                  : "checkbox"
                              }
                              id={addonitem.itemid}
                              name={addonData.addonId}
                              value={addonitem.name}
                              onChange={() =>
                                addonData.addonLimit === 1
                                  ? handleRadioButtonClick(
                                      addonitem.itemid,
                                      addonitem.btnNext,
                                      addonData.nextAid
                                    )
                                  : addonSkipContinue(
                                      addonitem.itemid,
                                      addonitem.btnNext,
                                      addonData.nextAid
                                    )
                              }
                            />
                            <label htmlFor={addonitem.itemid}>
                              {addonitem.name}
                            </label>
                            <span> {addonitem.price}</span>
                          </div>
                        </>
                      ))}
                    </div>
                    <div className="from-btns">
                      <Button onClick={() => addonBack()}>
                        <RiArrowLeftCircleLine /> Back
                      </Button>
                      <Button
                        disabled={addonData.addonLimit === 1}
                        onClick={() => addonSkip(addonData.nextAid)}
                      >
                        {addonData.addonLimit === 0 && !skipButtonCheck
                          ? "Skip"
                          : buttonText}
                        <RiArrowRightCircleLine />
                      </Button>
                    </div>
                  </Form>
                </div>
                <div className="total-div">
                  {theme === "dark" ? (
                    <Image src={DarkCurve} />
                  ) : (
                    <Image src={WhiteCurve} />
                  )}

                  <div className="total-price">
                    <span>£ {addonData.orderItemPrice}</span>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          )}
        </>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.getAddonDetail.isLoading,
  addonData: state.getAddonDetail.addonData,
  error: state.getAddonDetail.error,
});

const mapDispatchToProps = {
  getAddonDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddonPopup);
