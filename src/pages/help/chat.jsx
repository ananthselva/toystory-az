import React, { useEffect } from "react";

function FreshchatWidget() {
  useEffect(() => {
    // Function to initialize Freshchat widget
    function initFreshChat() {
      window.fcWidget.init({
        token: "6434b669-39fd-4c91-a798-ea8bca0edef3",
        host: "https://wchat.in.freshchat.com",
        siteId: "fusionkitchen",
        tags: ["fusion kitchen", "loggedin"],
      });
    }

    // Function to load Freshchat widget script
    function initialize(i, t) {
      if (i.getElementById(t)) {
        initFreshChat();
      } else {
        const e = i.createElement("script");
        e.id = t;
        e.async = true;
        e.src = "https://wchat.in.freshchat.com/js/widget.js";
        e.onload = initFreshChat;
        i.head.appendChild(e);
      }
    }

    function initiateCall() {
      initialize(document, "freshchat-js-sdk");
    }

    window.addEventListener
      ? window.addEventListener("load", initiateCall, false)
      : window.attachEvent("load", initiateCall, false);

    return () => {
      window.removeEventListener("load", initiateCall, false);
    };
  }, []);

  function openFreshchat() {
    window.fcWidget.open();
    window.fcWidget.show();
  }

  return (
    <div>
      <span
        onClick={openFreshchat}
        style={{ color: "#276cf6", cursor: "pointer" }}
      ></span>
    </div>
  );
}

export default FreshchatWidget;
