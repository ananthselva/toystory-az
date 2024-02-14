import { addonDetail } from "./addonAction";
import { applyDiscount } from "./offerAction";
import { CART_DETAIL_SUCCESS, CART_DETAIL_FAILURE } from "../types";

export const getCartSuccess = (cartData) => ({
  type: CART_DETAIL_SUCCESS,
  payload: cartData,
});

export const getCartFailure = (error) => ({
  type: CART_DETAIL_FAILURE,
  payload: error,
});

export const cartStoreLocal = () => {
  return (dispatch) => {
    const localDataValue = localStorage.getItem("cart");
    dispatch(getCartSuccess(localDataValue));
  };
};

export const finalSelectItems = (
  postDatavalue,
  discount,
  getOrderMode,
  itemImage,
  itemDesc
) => {
  addonDetail(postDatavalue)
    .then((response) => {
      console.log(response.message);
      cartAddonItem(
        response.message,
        discount,
        getOrderMode,
        itemImage,
        itemDesc
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

export const plusCartStore = (updatedCart, offer, getOrderMode) => {
  if (updatedCart) {
    const existingQty = parseFloat(localStorage.getItem("cartQty")) || 0;
    const newQtyFinal = parseFloat(existingQty + 1);
    localStorage.setItem("cartQty", newQtyFinal);
    const existingArray = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = existingArray.findIndex(
      (item) =>
        item.itemId === updatedCart.itemId &&
        item.addonName === updatedCart.addonName
    );
    if (existingItemIndex !== -1) {
      existingArray[existingItemIndex].count += 1;
      const existingPrice = parseFloat(existingArray[existingItemIndex].price);
      const updatedPrice = parseFloat(
        existingArray[existingItemIndex].actual_price
      );
      const itemPriceAdd = existingPrice + updatedPrice;
      existingArray[existingItemIndex].price = itemPriceAdd.toFixed(2);
    }
    const existingTotal = parseFloat(localStorage.getItem("totalPrice")) || 0;
    const newPrice = parseFloat(existingArray[existingItemIndex].actual_price);
    const newTotal = parseFloat(existingTotal + newPrice);
    localStorage.setItem("totalPrice", newTotal.toFixed(2));
    localStorage.setItem("cart", JSON.stringify(existingArray));
  }
  // Apply discount offer function
  applyDiscount(offer, getOrderMode);
};

export const addBulkCart = (updatedCart, offer, getOrderMode) => {
  const itemNotes = localStorage.getItem("itemNotes") || "";
  const notes = itemNotes ? JSON.parse(itemNotes) : "";
  if (updatedCart) {
    const updatedCartCount = updatedCart.count ? updatedCart.count : 1;
    const cartStoreDate = {
      itemId: updatedCart.itemId,
      itemName: updatedCart.itemName,
      addonName:
        updatedCart.gift || updatedCart.point ? "" : updatedCart.addonName,
      price: (updatedCart.price * updatedCartCount).toFixed(2),
      actual_price: updatedCart.price,
      count: updatedCartCount,
      gift: updatedCart.gift ? 1 : 0,
      loyalty: updatedCart.point ? 1 : 0,
      addon: updatedCart.addon,
      addonFirstId:updatedCart.addonFirstId,
      instruction:
        notes && updatedCart.itemId === notes.itemId ? notes.note : "",
      clientId: localStorage.getItem("clientId"),
      clientName: localStorage.getItem("clientName"),
      itemImage: updatedCart.itemImage,
      itemDesc: updatedCart.itemDesc,
    };

    const existingArray = JSON.parse(localStorage.getItem("cart")) || [];
    const itemExists = existingArray.some(
      (item) =>
        item.itemId === cartStoreDate.itemId &&
        cartStoreDate.loyalty === item.loyalty &&
        cartStoreDate.gift === item.gift &&
        cartStoreDate.addonName === item.addonName
    );
    if (itemExists) {
      const existingItemIndex = existingArray.findIndex(
        (item) =>
          item.itemId === cartStoreDate.itemId &&
          cartStoreDate.loyalty === item.loyalty &&
          cartStoreDate.gift === item.gift &&
          cartStoreDate.addonName === item.addonName
      );

      if (existingItemIndex !== -1) {
        existingArray[existingItemIndex] = {
          ...existingArray[existingItemIndex],
          count: cartStoreDate.count,
          price: cartStoreDate.price,
        };
      }
      localStorage.setItem("cart", JSON.stringify(existingArray));
    } else {
      existingArray.push(cartStoreDate);
      localStorage.setItem("cart", JSON.stringify(existingArray));
    }
    const newCartArray = JSON.parse(localStorage.getItem("cart")) || [];
    const newTotalCount = newCartArray.reduce(
      (countAccumulator, currentItem) => {
        return countAccumulator + currentItem.count;
      },
      0
    );

    const newTotalPrice = newCartArray.reduce(
      (priceAccumulator, currentItem) => {
        return priceAccumulator + parseFloat(currentItem.price);
      },
      0
    );

    localStorage.setItem("cartQty", newTotalCount);
    localStorage.setItem("totalPrice", newTotalPrice.toFixed(2));
  }
  // Apply discount offer function
  applyDiscount(offer, getOrderMode);
};

export const cartStore = (updatedCart, offer, getOrderMode) => {
  const itemNotes = localStorage.getItem("itemNotes") || "";
  const notes = itemNotes ? JSON.parse(itemNotes) : "";
  if (updatedCart) {
    const cartStoreDate = {
      itemId: updatedCart.itemId,
      itemName: updatedCart.itemName,
      addonName:
        updatedCart.gift || updatedCart.point ? "" : updatedCart.addonName,
      price: updatedCart.price,
      actual_price: updatedCart.price,
      count: 1,
      gift: updatedCart.gift ? 1 : 0,
      loyalty: updatedCart.point ? 1 : 0,
      addon: updatedCart.addon,
      addonFirstId:0,
      instruction:
        notes && updatedCart.itemId === notes.itemId ? notes.note : "",
      clientId: parseFloat(localStorage.getItem("clientId")),
      clientName: localStorage.getItem("clientName"),
    };

    const existingQty = parseFloat(localStorage.getItem("cartQty")) || 0;
    const newQtyFinal = parseFloat(existingQty + 1);
    localStorage.setItem("cartQty", newQtyFinal);
    const existingArray = JSON.parse(localStorage.getItem("cart")) || [];
    const itemExists = existingArray.some(
      (item) =>
        item.itemId === updatedCart.itemId &&
        cartStoreDate.loyalty === item.loyalty &&
        cartStoreDate.gift === item.gift &&
        cartStoreDate.addonName === item.addonName
    );

    if (itemExists) {
      const existingItemIndex = existingArray.findIndex(
        (item) =>
          item.itemId === updatedCart.itemId &&
          cartStoreDate.loyalty === item.loyalty &&
          cartStoreDate.gift === item.gift &&
          cartStoreDate.addonName === item.addonName
      );
      if (existingItemIndex !== -1) {
        existingArray[existingItemIndex].count += 1;
        const existingPrice = parseFloat(
          existingArray[existingItemIndex].price
        );
        const updatedPrice = parseFloat(
          existingArray[existingItemIndex].actual_price
        );
        const itemPriceAdd = existingPrice + updatedPrice;
        existingArray[existingItemIndex].price = itemPriceAdd.toFixed(2);
      }
      localStorage.setItem("cart", JSON.stringify(existingArray));
    } else {
      existingArray.push(cartStoreDate);
      localStorage.setItem("cart", JSON.stringify(existingArray));
    }
    const newCartArray = JSON.parse(localStorage.getItem("cart")) || [];
    const newTotalCount = newCartArray.reduce(
      (countAccumulator, currentItem) => {
        return countAccumulator + currentItem.count;
      },
      0
    );

    const newTotalPrice = newCartArray.reduce(
      (priceAccumulator, currentItem) => {
        return priceAccumulator + parseFloat(currentItem.price);
      },
      0
    );

    localStorage.setItem("cartQty", newTotalCount);
    localStorage.setItem("totalPrice", newTotalPrice.toFixed(2));
  }
  // Apply discount offer function
  applyDiscount(offer, getOrderMode);
};

export const cartRemoveItem = (updatedCart, offer, getOrderMode) => {
  const existingQty = parseFloat(localStorage.getItem("cartQty")) || 0;
  if (parseFloat(existingQty) > 1) {
    const newQtyFinal = parseFloat(existingQty - 1);
    const existingArray = JSON.parse(localStorage.getItem("cart")) || [];
    const itemExists = existingArray.some(
      (item) =>
        item.itemId === updatedCart.itemId &&
        item.loyalty === updatedCart.loyalty &&
        item.addonName === updatedCart.addonName
    );
    if (itemExists) {
      const existingItemIndex = existingArray.findIndex(
        (item) =>
          item.itemId === updatedCart.itemId &&
          item.loyalty === updatedCart.loyalty &&
          item.addonName === updatedCart.addonName
      );
      if (existingItemIndex !== -1) {
        existingArray[existingItemIndex].count -= 1;
        const existingPrice = parseFloat(
          existingArray[existingItemIndex].price
        );
        const updatedPrice = parseFloat(
          existingArray[existingItemIndex].actual_price
        );
        const itemPriceAdd = existingPrice - updatedPrice;
        existingArray[existingItemIndex].price = itemPriceAdd.toFixed(2);
      }
      const existingTotal = parseFloat(localStorage.getItem("totalPrice")) || 0;
      const newPrice = parseFloat(
        existingArray[existingItemIndex].actual_price
      );
      const newTotal = parseFloat(existingTotal - newPrice);
      localStorage.setItem("cart", JSON.stringify(existingArray));
      localStorage.setItem("cartQty", newQtyFinal);
      localStorage.setItem("totalPrice", newTotal.toFixed(2));
    }
  }
  // Apply discount offer function
  applyDiscount(offer, getOrderMode);
};

export const cartRemoveAllItem = (updatedCart, offer, getOrderMode) => {
  const existingQty = parseFloat(localStorage.getItem("cartQty")) || 0;
  const newQtyFinal = parseFloat(existingQty - updatedCart.count);
  localStorage.setItem("cartQty", newQtyFinal);

  const existingTotal = parseFloat(localStorage.getItem("totalPrice")) || 0;
  const newTotal = parseFloat(existingTotal - updatedCart.price);
  localStorage.setItem("totalPrice", newTotal.toFixed(2));

  let existingArray = JSON.parse(localStorage.getItem("cart")) || [];
  existingArray = existingArray.filter(
    (item) =>
      item.itemId !== updatedCart.itemId ||
      item.loyalty.toString() !== updatedCart.loyalty.toString() ||
      item.gift.toString() !== updatedCart.gift.toString() ||
      item.addonName !== updatedCart.addonName
  );
  localStorage.setItem("cart", JSON.stringify(existingArray));
  // Apply discount offer function
  applyDiscount(offer, getOrderMode);
};

export const cartAddonItem = (
  updatedAddonItemCart,
  offer,
  getOrderMode,
  itemImage,
  itemDesc
) => {
  const cartStoreDate = {
    itemId: updatedAddonItemCart.orderItemId,
    itemName: updatedAddonItemCart.orderItemName,
    price: updatedAddonItemCart.orderItemPrice,
    actual_price: updatedAddonItemCart.orderItemPrice,
    count: updatedAddonItemCart.count,
    addonFirstId:updatedAddonItemCart.addon,
    addonName: updatedAddonItemCart.selectedItem
      .map((item) => item.items)
      .join(", "),
    addon: updatedAddonItemCart.selectedItem.map((item) => ({
      id: item.id,
      extra: item.extra,
      qty: "1",
    })),
    itemImage: itemImage,
    itemDesc: itemDesc,
  };
  // cartStore(cartStoreDate, offer, getOrderMode);
  addBulkCart(cartStoreDate, offer, getOrderMode);
};
