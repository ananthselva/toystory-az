// React
import React, { useState, useEffect, useContext, useRef } from "react";
// Assets
import { Image, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { OrderFlow } from "../../App";
import { RestaurantContext } from "./menu-page";
import { ItemAddMinusContext } from "./menu";
import { useParams } from "react-router-dom";

// Images
// import KcalIcon from "./img/kcal.svg";
// import ProtienIcon from "./img/protein.svg";
// import Fat1Icon from "./img/fat1.svg";
// import SpicyIcon from "./img/spicy.svg";
import { MdOutlineCancel } from "react-icons/md";
import { HiPlus, HiMinus } from "react-icons/hi";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import {
  BsStarFill,
  BsArrowLeftCircle,
  BsArrowRightCircle,
} from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";

import { connect } from "react-redux";
import { getAddonDetail } from "../../actions/menu/addonAction";
import { finalSelectItems, cartStore } from "../../actions/menu/cartAction";
import { useMemo } from "react";

function ItemPopup({
  getAddonDetail,
  addonData,
  isLoading,
  item,
  children,
  clsname,
  setcartItems,
}) {
  const {
    ItemIdset,
    AddonIdset,
    AddonsetShow,
    Addonshow,
    repeatItem,
    setRepeatItem,
    AddonhandleShow,
    handleMinusItemQty,
    setItemAdded,
  } = useContext(ItemAddMinusContext);
  const { theme } = useContext(ThemeContext);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    AddonsetShow(false);
  };

  const AddonhandleClose = () => {
    AddonsetShow(false);
    ItemIdset("");
    AddonIdset("");
    setShow(true);
  };

  const cartJSON = localStorage.getItem("cart");
  let parsedCart;
  if (typeof cartJSON !== "undefined" && cartJSON !== "undefined") {
    parsedCart =
      typeof cartJSON !== "undefined" && cartJSON !== "undefined"
        ? cartJSON
          ? JSON?.parse(cartJSON)
          : ""
        : {};
    // console.log(parsedCart);
  } else {
    parsedCart = "";
  }

  useEffect(() => {
    if (parsedCart) {
      setcartItems(parsedCart);
    } else {
      localStorage.setItem("cart", "[]");
      localStorage.setItem("cartQty", 0);
      localStorage.setItem("totalPrice", 0.0);
    }
  }, [setcartItems, parsedCart]);

  const { getOrderMode, restaurant } = OrderFlow();
  let existingArray;
  if (typeof cartJSON !== "undefined" && cartJSON !== "undefined") {
    existingArray = JSON.parse(cartJSON) || [];
  } else {
    existingArray = "";
  }

  const repeatItemAdd = () => {
    const existingItemIndex = existingArray.findIndex(
      (exItem) => exItem.itemId === item.itemId
    );
    if (existingItemIndex !== -1) {
      cartStore(
        existingArray[existingItemIndex],
        restaurant.discount,
        getOrderMode
      );
    }
    setRepeatItem(false);
    setShow(false);
    setItemAdded(true);
  };

  const choose = () => {
    AddonsetShow(true);
    setRepeatItem(false);
  };

  return (
    <>
      <div onClick={handleShow} className={clsname}>
        {children}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        fullscreen={`${
          item.itemImage ? "md-down" : Addonshow ? "md-down" : false
        }`}
        centered
        // backdrop="static"
        // keyboard={false}
        className={`item-popup ${!item.itemImage && "without-img"} ${
          theme === "dark" ? "dark-theme" : ""
        } ${Addonshow && "addon-show"}`}
      >
        <Modal.Body>
          <span
            className={`close-btn ${Addonshow && "addon-open"}`}
            onClick={handleClose}
          >
            {width < 768 ? <RiArrowLeftSLine /> : <MdOutlineCancel />}
          </span>
          {width > 767 ? (
            <>
              <DesktopItemPopup
                item={item}
                width={width}
                AddonhandleShow={AddonhandleShow}
                handleMinusItemQty={handleMinusItemQty}
                parsedCart={parsedCart}
                Addonshow={Addonshow}
                AddonhandleClose={AddonhandleClose}
                getAddonDetail={getAddonDetail}
                finalSelectItems={finalSelectItems}
                addonData={addonData}
                isLoading={isLoading}
                repeatItem={repeatItem}
                repeatItemAdd={repeatItemAdd}
                choose={choose}
                setShow={setShow}
              />
            </>
          ) : (
            <>
              <MobileItemPopupNew
                item={item}
                width={width}
                AddonhandleShow={AddonhandleShow}
                handleMinusItemQty={handleMinusItemQty}
                parsedCart={parsedCart}
                Addonshow={Addonshow}
                AddonhandleClose={AddonhandleClose}
                getAddonDetail={getAddonDetail}
                finalSelectItems={finalSelectItems}
                addonData={addonData}
                isLoading={isLoading}
                handleClose={handleClose}
                repeatItem={repeatItem}
                setRepeatItem={setRepeatItem}
                repeatItemAdd={repeatItemAdd}
                choose={choose}
                setShow={setShow}
              />
            </>
          )}
        </Modal.Body>
      </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemPopup);

const DesktopItemPopup = ({
  item,
  width,
  AddonhandleShow,
  handleMinusItemQty,
  parsedCart,
  Addonshow,
  AddonhandleClose,
  getAddonDetail,
  addonData,
  isLoading,
  repeatItem,
  repeatItemAdd,
  choose,
  setShow,
}) => {
  const minusItemQty = () => {
    handleMinusItemQty(item);
  };

  return (
    <>
      <PopupImgDiv item={item} width={width} />
      <PopupContentDiv
        item={item}
        width={width}
        AddonhandleShow={AddonhandleShow}
        handleMinusItemQty={minusItemQty}
        parsedCart={parsedCart}
        Addonshow={Addonshow}
        AddonhandleClose={AddonhandleClose}
        getAddonDetail={getAddonDetail}
        finalSelectItems={finalSelectItems}
        addonData={addonData}
        isLoading={isLoading}
        repeatItem={repeatItem}
        repeatItemAdd={repeatItemAdd}
        choose={choose}
        setShow={setShow}
      />
    </>
  );
};
const PopupImgDiv = ({ item, width }) => {
  return (
    <>
      {item.itemImage && (
        <>
          <div className="item-img-div">
            {/* {width > 767 && <HeaderTag />} */}
            {item.itemImage && (
              <Image src={item.itemImage} className="item-img" width="100%" />
            )}
            {width > 767 && (
              <>
                <div className="bottom-tag">
                  {item.bestSeller && (
                    <span className="best-seller">Best Seller</span>
                  )}
                  {item.mustTry && <span className="must-try">Must Try</span>}
                  {/* <span className="spicy">
                    <Image src={SpicyIcon} /> More Spicy
                  </span> */}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

const AddonNew = ({
  item,
  AddonhandleClose,
  getAddonDetail,
  finalSelectItems,
  addonData,
  isLoading,
  selectedCount,
  setShow,
}) => {
  const [getDataAddon, setDataAddon] = useState(false);
  const [getAddonBack, setAddonBack] = useState([]);

  const { setItemAdded } = useContext(ItemAddMinusContext);

  const [existingString, setExistingString] = useState("");
  const [cammaString, setCammaString] = useState("");
  const [backItemId, setBackItemId] = useState("");
  const [backAddonId, setBackAddonId] = useState("");
  const [existingBackString, setExistingBackString] = useState("");
  const [cammaBackString, setCammaBackString] = useState("");

  const [buttonText, setButtonText] = useState("Next");
  const [skipButtonCheck, setSkipButtonCheck] = useState(false);
  const { getOrderMode, getOrderTime, setOrderTime, restaurant } = OrderFlow();
  const orderType = getOrderMode === "Collection" ? 1 : 0;
  const orderTime = getOrderTime || "";
  const [extra, addExtraAddon] = useState("");

  const addonid = item.addon;
  const itemid = item.itemId;
  const itemImage = item.itemImage;
  const itemDesc = item.itemDesc;

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
      count: selectedCount ? selectedCount : 1,
    };
    if (itemid && addonid) {
      if (!getDataAddon) {
        setDataAddon(true);
        getAddonDetail(postData);
        setAddonBack([
          ...getAddonBack,
          [itemid, addonid, cammaString, existingBackString],
        ]);
      }
    }
  }, [path, itemid, getDataAddon, addonid, formattedDate, orderType]);

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
          count: selectedCount ? selectedCount : 1,
        };
        console.log(postDatavalue);
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
          count: selectedCount ? selectedCount : 1,
        };
        console.log(postDatavalue);
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
        count: selectedCount ? selectedCount : 1,
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
      AddonhandleClose(false);
      setBackItemId(itemvalueid);
      setBackAddonId(
        addonvalueid === "0" || addonvalueid === 0 ? nextvalueid : addonvalueid
      );
      finalSelectItems(
        postDatavalue,
        restaurant.discount,
        getOrderMode,
        itemImage,
        itemDesc
      );
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
      setItemAdded(true);
      setShow(false);
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
      count: selectedCount ? selectedCount : 1,
    };
    if (nextAId === 0) {
      finalSelectItems(
        postAddonSkip,
        restaurant.discount,
        getOrderMode,
        itemImage,
        itemDesc
      );
      AddonhandleClose(false);
      setItemAdded(true);
      setShow(false);
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
      count: selectedCount ? selectedCount : 1,
    };

    console.log(postDatavalue);

    if (
      (addonvalueid === "0" || addonvalueid === 0
        ? nextvalueid
        : addonvalueid) === 0
    ) {
      AddonhandleClose(false);
      finalSelectItems(
        postDatavalue,
        restaurant.discount,
        getOrderMode,
        itemImage,
        itemDesc
      );
      setItemAdded(true);
      setShow(false);
    }
    if (addonvalueid || nextvalueid) {
      setBackItemId(itemid);
      setBackAddonId(
        addonvalueid === "0" || addonvalueid === 0 ? nextvalueid : addonvalueid
      );
      getAddonDetail(postDatavalue);
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
    const newArray = getAddonBack.slice(0, -1);
    if (!lastElement) {
      AddonhandleClose(false);
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
      count: selectedCount ? selectedCount : 1,
    };
    console.log(postAddonBack);
    setExistingString(existingBackString);
    setCammaString(cammaBackString);
    getAddonDetail(postAddonBack);
  };

  const handleAddExtra = (value) => {
    addExtraAddon(value);
  };

  return (
    <>
      {/* {isLoading
        ? ""
        : addonData && (
            <>
              <AddonDivision
                item={item}
                AddonhandleClose={AddonhandleClose}
                addonData={addonData}
                handleAddExtra={handleAddExtra}
                extra={extra}
                handleRadioButtonClick={handleRadioButtonClick}
                addonSkipContinue={addonSkipContinue}
                addonBack={addonBack}
                addonSkip={addonSkip}
                skipButtonCheck={skipButtonCheck}
                buttonText={buttonText}
              />
            </>
          )} */}
      {addonData && (
        <>
          <AddonDivision
            item={item}
            AddonhandleClose={AddonhandleClose}
            addonData={addonData}
            handleAddExtra={handleAddExtra}
            extra={extra}
            handleRadioButtonClick={handleRadioButtonClick}
            addonSkipContinue={addonSkipContinue}
            addonBack={addonBack}
            addonSkip={addonSkip}
            skipButtonCheck={skipButtonCheck}
            buttonText={buttonText}
          />
        </>
      )}
    </>
  );
};

const AddonDivision = React.memo(({
  item,
  AddonhandleClose,
  addonData,
  handleAddExtra,
  extra,
  handleRadioButtonClick,
  addonSkipContinue,
  addonBack,
  addonSkip,
  skipButtonCheck,
  buttonText,
}) => {
  const [apiCallFinished, setApiCallFinished] = useState(false);
  const [checkFirstTime, setCheckFirstTime] = useState(false);
  const [firstTime,setFirstTime]=useState(false);
  const itemRef=useRef(null);
  useEffect(()=>{
    if(!firstTime){
    itemRef.current.style.backgroundColor='#e3e2e';
    }
  },[]);
  if(firstTime){
  let itemButtons = document.getElementsByClassName('next-btn');
  if (itemButtons.length > 0) {
    let firstItemButton = itemButtons[0];
    // Get the disabled property

    if (firstItemButton.innerText === "Skip") {
      console.log('1');
      firstItemButton.style.backgroundColor = '#faae2c';
    }
    else if (firstItemButton.disabled && firstItemButton.style.backgroundColor === "rgb(250, 174, 44)") {
      console.log('2');
      firstItemButton.style.backgroundColor = ''; // Corrected the color code
    } else {
      console.log('3');
      firstItemButton.style.backgroundColor = '#e3e2e'; // Moved inside the else block
    }
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      if(radio.checked){
        console.log('4');
        firstItemButton.style.backgroundColor = '#faae2c';
      } 
      else{
        console.log('5');
        firstItemButton.style.backgroundColor = '#e3e2e';
      }
    });
  }
}


  const handleCheckboxButton = (
    itemvalueid,
    addonvalueid,
    nextvalueid,
    funName
  ) => {
    setFirstTime(true);
    if (funName === 1) {
      handleRadioButtonClick(itemvalueid, addonvalueid, nextvalueid);
    } else {
    
      addonSkipContinue(itemvalueid, addonvalueid, nextvalueid);
    }
    itemRef.current.style.backgroundColor = '#faae2c';
    setApiCallFinished(false);
  }
 
  useEffect(() => {
    if (checkFirstTime === false) {
      setApiCallFinished(false);
      setCheckFirstTime(true);
    } else {
      setApiCallFinished(true);
    }
  }, [addonData, item]);

  useEffect(() => {
    if (apiCallFinished) {
      document.querySelectorAll('input[type="radio"]').forEach((radio) => {
        radio.checked = false;
      });
      document
        .querySelectorAll('input[type="checkbox"]')
        .forEach((checkbox) => {
          checkbox.checked = false;
        });
    }
  }, [apiCallFinished]);

  return (
    <>
      <div className={`addon-content ${!item.itemImage && "no-img"}`}>
        <button className="close-button" onClick={AddonhandleClose}>
          <MdOutlineCancel />
        </button>
        <div className="top-heading">
          <div className="header">
            <p>
              {item.itemName.length > 25
                ? item.itemName.slice(0, 25) + "..."
                : item.itemName}
            </p>
            <span>£{item.price}</span>
          </div>
          {addonData.selectedItem.length !== 0 && (
            <>
              <div className="optional">
                {addonData.selectedItem.map((selected, index) => (
                  <p key={index}>
                    {/* <span className="tick-icon">
                      <MdDone />
                    </span> */}
                    {selected.items}
                  </p>
                ))}
              </div>
            </>
          )}
          <div className="item-title">
            <h4>{addonData?.addonDescription}</h4>
            {addonData.addonLimit === 1 ? (
              <>
                <p>
                  <span>1</span> <span>Required</span>
                </p>
              </>
            ) : (
              <>
                <p>
                  <span>{addonData.addonLimit}</span> <span>Optional</span>
                </p>
              </>
            )}
          </div>
        </div>

        {addonData.addExtra !== "" ? (
          <>
            <div className="extra-btns">
              {Object.entries(addonData.addExtra).map(([key, value], index) => {
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

                return null;

                // return buttonLabel ? (
                //   <span key={index}>
                //     <button
                //       onClick={() => handleAddExtra(value)}
                //       checked={value === extra}
                //       className={buttonClassName}
                //     >
                //       {buttonLabel}
                //     </button>
                //   </span>
                // ) : null;
              })}
            </div>
          </>
        ) : null}

        <div className="addon-items">
          <Form>
            <div
              className={`input-grup-div ${!item.itemImage && "without-img"}`}
            >
              {addonData.addonItems.map((addonItem, index) => (
                <>
                  <label
                    className={`input-div ${
                      apiCallFinished ? "api-call-finished" : ""
                    }`}
                    key={index}
                  >
                    <input
                      type={addonData.addonLimit === 1 ? "radio" : "checkbox"}
                      id={addonItem.itemid}
                      name={addonData.addonId}
                      value={addonItem.name}
                      onChange={() =>
                        addonData.addonLimit === 1
                          ? handleCheckboxButton(
                              addonItem.itemid,
                              addonItem.btnNext,
                              addonData.nextAid,
                              1
                            )
                          : handleCheckboxButton(
                              addonItem.itemid,
                              addonItem.btnNext,
                              addonData.nextAid,
                              2
                            )
                      }
                    />
                    {addonData.addonLimit !== 1 && <RadioAnimation />}
                    <p>{addonItem.name}</p>
                    <span> {addonItem.price}</span>
                  </label>
                </>
              ))}
            </div>
          </Form>
        </div>

        <div className="bottom-btn-group">
          <div className="item-total">
            Item total £
            {addonData && addonData.orderItemPrice
              ? addonData.orderItemPrice
              : item.price}
          </div>
          <div className="back-next">
            <button className="back-btn" onClick={() => addonBack()}>
              <BsArrowLeftCircle /> Back
            </button>
            <div className="line"></div>
            <button
              className="next-btn"
              disabled={addonData.addonLimit === 1}
              style={{ color: addonData?.addonLimit === 1 ? 'rgba(18, 17, 17, 0.45)' : '#000' }}
              ref={itemRef}
              onClick={() => addonSkip(addonData.nextAid)}
            >
              {addonData.addonLimit === 0 && !skipButtonCheck
                ? "Skip"
                : buttonText}
              <BsArrowRightCircle />
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

const PopupContentDiv = ({
  item,
  width,
  AddonhandleShow,
  handleMinusItemQty,
  parsedCart,
  Addonshow,
  AddonhandleClose,
  getAddonDetail,
  finalSelectItems,
  addonData,
  isLoading,
  repeatItem,
  repeatItemAdd,
  choose,
  setShow,
}) => {
  const [eventKeyOpen, setEventKeyOpen] = useState(false);
  const itemId = item.itemId;

  const toggleAccordion = () => {
    setEventKeyOpen(!eventKeyOpen);
  };

  // Find the cart item that matches the conditions
  const matchingItem = parsedCart.find(
    (item) => item.gift === 0 && item.loyalty === 0 && item.itemId === itemId
  );
  // Initialize the instruction with the matching item's instruction
  const [instruction, setInstruction] = useState(
    matchingItem ? matchingItem.instruction : ""
  );
  // Handle instruction changes
  const handleInstruction = (event) => {
    const value = event.target.value;
    setInstruction(value);
    if (matchingItem) {
      // Update the instruction for the matching item
      const newCart = parsedCart.map((item) => ({
        ...item,
        instruction: item.itemId === itemId ? value : item.instruction,
      }));
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      // Create an item note and store it
      const localNote = { note: value, itemId };
      localStorage.setItem("itemNotes", JSON.stringify(localNote));
    }
  };

  return (
    <>
      {/* {!item.itemImage && width < 768 && !Addonshow ? (
        <>
          <div className="heading-tag-alone">
            <HeaderTag />
          </div>
        </>
      ) : null} */}

      <div className={`menu-details-div ${!item.itemImage && "without-img"}`}>
        {!Addonshow ? (
          <>
            <div className="header">
              <p>{item.itemName}</p>
              <span>£{item.price}</span>
            </div>
            <div className="description-div">
              <p className="description">{item.itemDesc}</p>
            </div>
            {!item.itemImage || width < 768 ? (
              <>
                {/* {width > 767 && (
                  <>
                    <HeaderTag />
                  </>
                )} */}

                <div className="bottom-tag">
                  {item.bestSeller && (
                    <span className="best-seller">Best Seller</span>
                  )}
                  {item.mustTry && <span className="must-try">Must Try</span>}
                  {/* <span className="spicy">
                    <Image src={SpicyIcon} /> More Spicy
                  </span> */}
                </div>
              </>
            ) : null}

            <Accordion
              defaultActiveKey={width < 768 ? "" : "0"}
              className={!item.itemImage && "without-img"}
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header onClick={toggleAccordion}>
                  <span>{eventKeyOpen ? <HiMinus /> : <HiPlus />}</span> Leave a
                  Note
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <div className="form-group">
                      <Form.Control
                        as="textarea"
                        value={instruction}
                        onChange={handleInstruction}
                        placeholder="Tell us any special instructions or requests here. For allergy details, please contact the restaurant directly."
                      />
                    </div>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {width > 767 && (
              <PopupFooterBtn
                item={item}
                AddonhandleShow={AddonhandleShow}
                handleMinusItemQty={handleMinusItemQty}
                parsedCart={parsedCart}
                repeatItem={repeatItem}
                repeatItemAdd={repeatItemAdd}
                choose={choose}
                setShow={setShow}
              />
            )}
          </>
        ) : (
          <>
            <AddonNew
              item={item}
              AddonhandleClose={AddonhandleClose}
              getAddonDetail={getAddonDetail}
              finalSelectItems={finalSelectItems}
              addonData={addonData}
              isLoading={isLoading}
              setShow={setShow}
            />
          </>
        )}
      </div>
    </>
  );
};

function RadioAnimation() {
  return (
    <div className="cbx">
      <div className="flip">
        <div className="front"></div>
        <div className="back">
          <svg width="16" height="14" viewBox="0 0 16 14">
            <path d="M2 8.5L6 12.5L14 1.5"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

// const HeaderTag = (params) => {
//   return (
//     <>
//       <div className="header-tag">
//         <span className="kcal">
//           <Image src={KcalIcon} /> 913 kcal
//         </span>
//         <span>
//           <Image src={ProtienIcon} /> Protein 5.39g
//         </span>
//         <span>
//           <Image src={Fat1Icon} /> Fat 94.50g
//         </span>
//       </div>
//     </>
//   );
// };

const PopupFooterBtn = ({
  item,
  AddonhandleShow,
  handleMinusItemQty,
  parsedCart,
  repeatItem,
  repeatItemAdd,
  choose,
  setShow,
}) => {
  function storedItem(itemId, data) {
    if (item.addon === 0) {
      setShow(false);
    }
    AddonhandleShow(itemId, data);
  }

  return (
    <>
      {item.available ? (
        <>
          <span className="avil-time">
            Available at <br />
            {item.available}
          </span>
        </>
      ) : (
        <>
          {parsedCart &&
          parsedCart.find(
            (cart) =>
              cart.itemId === item.itemId &&
              cart.loyalty === 0 &&
              cart.gift === 0
          ) ? (
            <>
              {repeatItem === item.itemId ? (
                <>
                  <div className="repeat-btn-group">
                    <button className="repeat" onClick={repeatItemAdd}>
                      Repeat Last
                    </button>
                    <button className="choose" onClick={choose}>
                      I’ll Choose
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="group-btn-cart">
                    <div className="top-btn">
                      <Button>
                        {parsedCart
                          .filter(
                            (cart) =>
                              cart.itemId === item.itemId &&
                              cart.loyalty === 0 &&
                              cart.gift === 0
                          )
                          .reduce((total, cart) => total + cart.count, 0)}
                      </Button>
                    </div>
                    <div className="bottom-btn aft-addon">
                      {parsedCart.filter(
                        (cart) =>
                          cart.itemId === item.itemId &&
                          cart.loyalty === 0 &&
                          cart.gift === 0
                      ).length > "1" ? (
                        <>
                          <OverlayTrigger
                            overlay={
                              <Popover id="popover-basic">
                                <Popover.Body>
                                  This item has multiple customizations added.
                                  Remove the correct item from the
                                  <strong>cart</strong>.
                                </Popover.Body>
                              </Popover>
                            }
                          >
                            <span className="minus-btn">
                              <Button>
                                <HiMinus />
                              </Button>
                            </span>
                          </OverlayTrigger>
                        </>
                      ) : (
                        <>
                          <span className="minus-btn">
                            <Button onClick={handleMinusItemQty}>
                              <HiMinus />
                            </Button>
                          </span>
                        </>
                      )}
                      <span className="plus-btn">
                        <Button
                          onClick={() =>
                            storedItem(
                              item,
                              parsedCart
                                .filter(
                                  (cart) =>
                                    cart.itemId === item.itemId &&
                                    cart.loyalty === 0 &&
                                    cart.gift === 0
                                )
                                .reduce((total, cart) => total + cart.count, 0)
                            )
                          }
                        >
                          <HiPlus />
                        </Button>
                      </span>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="group-btn-cart">
                <div className="top-btn">
                  <Button
                    onClick={() =>
                      storedItem(
                        item,
                        parsedCart
                          .filter(
                            (cart) =>
                              cart.itemId === item.itemId &&
                              cart.loyalty === 0 &&
                              cart.gift === 0
                          )
                          .reduce((total, cart) => total + cart.count, 0)
                      )
                    }
                  >
                    <HiPlus />
                  </Button>
                </div>
                <div className="bottom-btn">
                  <span className="cart-text">
                    {item.addon ? "Customize your options" : "Add to Cart"}
                  </span>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

const MobileItemPopupNew = ({
  item,
  width,
  AddonhandleShow,
  handleMinusItemQty,
  parsedCart,
  Addonshow,
  AddonhandleClose,
  getAddonDetail,
  finalSelectItems,
  addonData,
  isLoading,
  repeatItem,
  setRepeatItem,
  repeatItemAdd,
  choose,
  handleClose,
  setShow,
}) => {
  const [eventKeyOpen, setEventKeyOpen] = useState(false);

  const toggleAccordion = () => {
    setEventKeyOpen(!eventKeyOpen);
  };

  // const storeAddonValue = () => {
  //   AddonhandleShow(item);
  // };

  // const minusItemQty = () => {
  //   handleMinusItemQty(item);
  // };

  const itemId = item.itemId;

  // Find the cart item that matches the conditions
  const matchingItem = parsedCart.find(
    (item) => item.gift === 0 && item.loyalty === 0 && item.itemId === itemId
  );
  // Initialize the instruction with the matching item's instruction
  const [instruction, setInstruction] = useState(
    matchingItem ? matchingItem.instruction : ""
  );
  // Handle instruction changes
  const handleInstruction = (event) => {
    const value = event.target.value;
    setInstruction(value);
    if (matchingItem) {
      // Update the instruction for the matching item
      const newCart = parsedCart.map((item) => ({
        ...item,
        instruction: item.itemId === itemId ? value : item.instruction,
      }));
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      // Create an item note and store it
      const localNote = { note: value, itemId };
      localStorage.setItem("itemNotes", JSON.stringify(localNote));
    }
  };

  // get local total count
  const totalCount = parsedCart
    .filter(
      (cart) =>
        cart.itemId === item.itemId && cart.loyalty === 0 && cart.gift === 0
    )
    .reduce((total, cart) => total + cart.count, 0);

  const [selectedCount, setSelectedCount] = useState(
    totalCount === 0 ? 1 : totalCount
  );

  const addedValue = () => {
    setSelectedCount(selectedCount + 1);
    item["count"] = selectedCount + 1;
  };

  const minusValue = () => {
    if (selectedCount > 1) {
      setSelectedCount(selectedCount - 1);
      item["count"] = selectedCount - 1;
    }
  };

  const { setShowPreorder, setClosePopup } = useContext(RestaurantContext);
  const { getOrderMode, restaurant } = OrderFlow();

  const addBulkItems = (item) => {
    if (item.addon === 0) {
      setShow(false);
    }
    let checkAsap = "";
    if (getOrderMode === "Delivery") {
      checkAsap = restaurant.timing.Delivery.asap;
    } else {
      checkAsap = restaurant.timing.Collection.asap;
    }
    const orderType = localStorage.getItem("orderType") || "";
    const timing = restaurant.restaurantStatus;

    if (timing.Delivery.status === "2" && timing.Collection.status === "2") {
      setClosePopup(true);
    } else {
      if (checkAsap === "" && (orderType === "" || orderType === "ASAP")) {
        setShow(false);
        setShowPreorder(true);
      } else {
        AddonhandleShow(item, selectedCount - 1);
      }
    }
  };

  const showAddonValue = () => {
    setRepeatItem(item.itemId);
  };

  const callChooseFunction = () => {
    setSelectedCount(0);
    choose();
  };

  return (
    <div
      className={`mob-item-popup-new ${
        !item.itemImage ? "without-img-popup" : ""
      } ${Addonshow && "addon-pop-show"}`}
    >
      {Addonshow ? (
        <AddonNew
          item={item}
          AddonhandleClose={AddonhandleClose}
          getAddonDetail={getAddonDetail}
          finalSelectItems={finalSelectItems}
          addonData={addonData}
          isLoading={isLoading}
          selectedCount={selectedCount}
          setShow={setShow}
        />
      ) : (
        <>
          <span className="close-btn" onClick={handleClose}>
            {width < 768 ? <RiArrowLeftSLine /> : <MdOutlineCancel />}
          </span>

          <div className="head-div">
            {item.itemImage && (
              <Image src={item.itemImage} className="item-img" width="100%" />
            )}
            <div className="content">
              <h3 className="itemname">{item.itemName}</h3>
              <div className="best-must">
                {item.bestSeller && (
                  <span className="best">
                    Best Seller <BsStarFill />
                  </span>
                )}
                {item.mustTry && (
                  <span className="must">
                    Must Try <BsStarFill />
                  </span>
                )}
              </div>
              <p className="desc">{item.itemDesc}</p>
              <Accordion
                defaultActiveKey="0"
                className={!item.itemImage && "without-img"}
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header onClick={toggleAccordion}>
                    <span>{eventKeyOpen ? <HiPlus /> : <HiMinus />}</span>{" "}
                    Special Instruction
                  </Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      <div className="form-group">
                        <Form.Control
                          as="textarea"
                          value={instruction}
                          onChange={handleInstruction}
                          placeholder="Tell us any special instructions or requests here. For allergy details, please contact the restaurant directly."
                        />
                      </div>
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="bottom-div">
            <>
              {item.available ? (
                <>
                  <span className="avil-time">
                    Available at <br />
                    {item.available}
                  </span>
                </>
              ) : (
                <>
                  {repeatItem === item.itemId ? (
                    <>
                      <div className="repeat-btn-group">
                        <button className="repeat" onClick={repeatItemAdd}>
                          Repeat Last
                        </button>
                        <button className="choose" onClick={callChooseFunction}>
                          I’ll Choose
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="price-count">
                        <p className="price">£{item.price}</p>
                        <div className="count-btn">
                          {parsedCart.filter(
                            (cart) =>
                              cart.itemId === item.itemId &&
                              cart.loyalty === 0 &&
                              cart.gift === 0
                          ).length >= "1" ? (
                            <>
                              <OverlayTrigger
                                overlay={
                                  <Popover id="popover-basic">
                                    <Popover.Body>
                                      This item has multiple customizations
                                      added. Remove the correct item from the{" "}
                                      <strong>cart</strong>.
                                    </Popover.Body>
                                  </Popover>
                                }
                              >
                                <span className="minus-btn">
                                  <Button>
                                    <HiMinus />
                                  </Button>
                                </span>
                              </OverlayTrigger>
                              <span>{selectedCount}</span>
                              {parsedCart.filter(
                                (cart) =>
                                  cart.itemId === item.itemId &&
                                  cart.loyalty === 0 &&
                                  cart.gift === 0 &&
                                  cart.addon === 0
                              ).length >= "1" ? (
                                <>
                                  <span className="plus-btn">
                                    <Button onClick={addedValue}>
                                      <HiPlus />
                                    </Button>
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span className="plus-btn">
                                    <Button onClick={showAddonValue}>
                                      <HiPlus />
                                    </Button>
                                  </span>
                                </>
                              )}
                            </>
                          ) : (
                            <>
                              <span className="minus-btn">
                                <Button onClick={minusValue}>
                                  <HiMinus />
                                </Button>
                              </span>
                              <span>{selectedCount}</span>
                              <span className="plus-btn">
                                <Button onClick={addedValue}>
                                  <HiPlus />
                                </Button>
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      {parsedCart.filter(
                        (cart) =>
                          cart.itemId === item.itemId &&
                          cart.loyalty === 0 &&
                          cart.gift === 0 &&
                          cart.addon !== 0
                      ).length >= "1" ? (
                        <button className="cart-btn" onClick={showAddonValue}>
                          <span className="cart-text">
                            {item.addon
                              ? "Customize your options"
                              : "Add to Cart"}
                          </span>
                          <span className="total-price">
                            £{(item.price * selectedCount).toFixed(2)}
                          </span>
                        </button>
                      ) : (
                        <button
                          className="cart-btn"
                          onClick={() => addBulkItems(item)}
                        >
                          <span className="cart-text">
                            {item.addon
                              ? "Customize your options"
                              : "Add to Cart"}
                          </span>
                          <span className="total-price">
                            £{(item.price * selectedCount).toFixed(2)}
                          </span>
                        </button>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          </div>
        </>
      )}
    </div>
  );
};
