export const applyDiscount = (offer, getOrderMode, offerType = "") => {
  const discountJSON = localStorage.getItem("discount");
  const parsedDiscount = discountJSON ? JSON.parse(discountJSON) : "";
  if (offerType === "") {
    if (parsedDiscount?.source === "commonDiscount") {
      applyCommonOffer(offer, getOrderMode);
    } else if (parsedDiscount?.source === "promoDiscount") {
      if(offer.seasonalOnline){
        const totalAmountValue = localStorage.getItem("totalPrice");
        const minSeasonalOrder = offer?.minOrder;
        if(parseFloat(minSeasonalOrder) <= parseFloat(totalAmountValue) && applySeasonalOffer(offer.seasonalOnline, getOrderMode)){
          applyPromoOffer(offer, getOrderMode);
        }
      }
      else{
        applyPromoOffer(offer, getOrderMode);
      }
    } else if (parsedDiscount?.source === "onlineDiscount") {
      applyOnlineOffer(offer, getOrderMode);
    } else {
      autoDiscount(offer, getOrderMode);
    }
  } else {
    if (offerType === "commonOffer") {
      applyCommonOffer(offer, getOrderMode);
    } else if (offerType === "promoOffer") {
      if(offer.seasonalOnline){
        const totalAmountValue = localStorage.getItem("totalPrice");
        const minSeasonalOrder = offer?.minOrder;
        if(parseFloat(minSeasonalOrder) <= parseFloat(totalAmountValue) && applySeasonalOffer(offer.seasonalOnline, getOrderMode)){
          applyPromoOffer(offer, getOrderMode);
        }
      }
      else{
        applyPromoOffer(offer, getOrderMode);
      }
    } else if (offerType === "onlineOffer") {
      applyOnlineOffer(offer, getOrderMode);
    } else {
      autoDiscount(offer, getOrderMode);
    }
  }
};

export const autoDiscount = (offer, getOrderMode) => {
  const autoDiscount = offer?.autoDiscount;
  const orderType = getOrderMode === "Collection" ? 1 : 0;
  if (autoDiscount) {
    const currentOffer =
      autoDiscount.find((data) => data.orderType === orderType) || "";
    const total = localStorage.getItem("totalPrice");
    const minOrder = currentOffer?.minOrder;
    const discountAmount = currentOffer?.discount;
    const discountType = currentOffer?.discountType;

    if (parseFloat(minOrder) <= parseFloat(total)) {
      let calculation = total;
      if (discountType === "%") {
        calculation = parseFloat(total * (discountAmount / 100));
      } else {
        calculation = parseFloat(discountAmount);
      }
      const appliedDiscount = {
        source: "autoDiscount",
        orderType: orderType,
        discount: currentOffer.code,
        discountDescription: currentOffer.description,
        appliedDiscount: calculation.toFixed(2),
      };
      localStorage.setItem("discount", JSON.stringify(appliedDiscount));
    } else {
      localStorage.setItem("discount", "");
    }
  } else {
    localStorage.setItem("discount", "");
  }
};

export const applyCommonOffer = (offer, getOrderMode) => {
  const orderType = getOrderMode === "Collection" ? 1 : 0;
  let currentOffer = "";
  let changedOffer = "";
  if (offer.orderType || offer.orderType === 0) {
    if (offer.orderType === 2 || offer.orderType === orderType) {
      currentOffer = offer;
    }
  } else {
    const discountJSON = localStorage.getItem("discount");
    const parsedDiscount = discountJSON ? JSON.parse(discountJSON) : "";
    currentOffer =
      offer.common.find(
        (data) =>
          data.code === parsedDiscount.discount &&
          (data.orderType === 2 || data.orderType === orderType)
      ) || "";

    const getMaxOnlineDiscounts = offer.online
      .filter((offer) => offer.orderType === 2 || offer.orderType === orderType)
      .map((offer) => Number(offer.discount));
    const getMaxValue = Math.max(...getMaxOnlineDiscounts);
    changedOffer =
      offer.online.find(
        (offer) =>
          Number(offer.discount) === getMaxValue &&
          (offer.orderType === orderType || offer.orderType === 2)
      ) || "";
  }

  const total = localStorage.getItem("totalPrice");
  const minOrder = changedOffer?.minOrder ?? currentOffer?.minOrder;
  const discountAmount = changedOffer?.discount ?? currentOffer?.discount;
  const discountType = changedOffer?.discountType ?? currentOffer?.discountType;

  if (parseFloat(minOrder) <= parseFloat(total)) {
    let calculation = total;
    if (discountType === "%") {
      calculation = parseFloat(total * (discountAmount / 100));
    } else {
      calculation = parseFloat(discountAmount);
    }
    const appliedDiscount = {
      source: "commonDiscount",
      orderType: orderType,
      discount: currentOffer.code,
      discountDescription: currentOffer.description,
      appliedDiscount: calculation.toFixed(2),
    };
    localStorage.setItem("discount", JSON.stringify(appliedDiscount));
  } else {
    localStorage.setItem("discount", "");
  }
};

export const applyPromoOffer = (offer, getOrderMode) => {
  const orderType = getOrderMode === "Collection" ? 1 : 0;
  let currentOffer = "";
  if (offer.orderType || offer.orderType === 0) {
    if (offer.orderType === 2 || offer.orderType === orderType) {
      currentOffer = offer;
    }
  } else {
    const discountJSON = localStorage.getItem("discount");
    const parsedDiscount = discountJSON ? JSON.parse(discountJSON) : "";
    currentOffer =
      offer.promo.find(
        (data) =>
          data.code === parsedDiscount.discount &&
          (data.orderType === 2 || data.orderType === orderType)
      ) || "";
  }

  const total = localStorage.getItem("totalPrice");
  const discountAmount = currentOffer?.discount;
  const discountType = currentOffer?.discountType;

  let calculation = total;
  if (discountType === "%") {
    calculation = parseFloat(total * (discountAmount / 100));
  } else {
    calculation = parseFloat(discountAmount);
  }
  if (parseFloat(calculation) <= parseFloat(total)) {
    const appliedDiscount = {
      source: "promoDiscount",
      orderType: orderType,
      discount: currentOffer.code,
      discountDescription: currentOffer.description,
      appliedDiscount: calculation.toFixed(2),
    };
    localStorage.setItem("discount", JSON.stringify(appliedDiscount));
  } else {
    localStorage.setItem("discount", "");
  }
};

export const applyOnlineOffer = (offer, getOrderMode) => {
  const orderType = getOrderMode === "Collection" ? 1 : 0;
  let currentOffer = "";
  if (offer.orderType || offer.orderType === 0) {
    if (offer.orderType === 2 || offer.orderType === orderType) {
      currentOffer = offer;
    }
  } else {
    const discountJSON = localStorage.getItem("discount");
    const parsedDiscount = discountJSON ? JSON.parse(discountJSON) : "";
    currentOffer =
      offer.online.find(
        (data) =>
          data.code === parsedDiscount.discount &&
          (data.orderType === 2 || data.orderType === orderType)
      ) || "";
  }

  const total = localStorage.getItem("totalPrice");
  const minOrder = currentOffer?.minOrder;
  const discountAmount = currentOffer?.discount;
  const discountType = currentOffer?.discountType;

  if (parseFloat(minOrder) <= parseFloat(total)) {
    let calculation = total;
    if (discountType === "%") {
      calculation = parseFloat(total * (discountAmount / 100));
    } else {
      calculation = parseFloat(discountAmount);
    }
    const appliedDiscount = {
      source: "onlineDiscount",
      orderType: orderType,
      discount: currentOffer.code,
      discountDescription: currentOffer.description,
      appliedDiscount: calculation.toFixed(2),
    };
    localStorage.setItem("discount", JSON.stringify(appliedDiscount));
  } else {
    localStorage.setItem("discount", "");
  }
};


export const applySeasonalOffer = (offer, getOrderMode) => {
  // console.log(offer);
  const orderType = getOrderMode === "Collection" ? 1 : 0;
  let currentOffer = "";
  currentOffer = offer[0];

  const total = localStorage.getItem("totalPrice");
  const minOrder = currentOffer?.minOrder;
  const discountAmount = currentOffer?.discount;
  const discountType = currentOffer?.discountType;
  
  // if (parseFloat(minOrder) <= parseFloat(total)) {
    let calculation = total;
    if (discountType === "%") {
      calculation = parseFloat(total * (discountAmount / 100));
    } else {
      calculation = parseFloat(discountAmount);
    }
    const totalAmount = parseFloat(parseFloat(total) - parseFloat(calculation));
    console.log(total);
    const appliedDiscount = {
      source: "onlineDiscount",
      orderType: orderType,
      discount: currentOffer.code,
      discountDescription: currentOffer.description,
      appliedDiscount: calculation,
    };
    localStorage.setItem("seasonalDiscount", calculation);
    return true;
  // } else {
    localStorage.setItem("seasonalDiscount", "");
    return false;
  // }
};

export const removeDiscount = () => {
  localStorage.setItem("discount", "");
};
