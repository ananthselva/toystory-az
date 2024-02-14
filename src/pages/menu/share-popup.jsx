import React, { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { MdShare, MdOutlineCancel } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaEnvelope } from "react-icons/fa";
import { TbLayersLinked } from "react-icons/tb";
import { MdDone } from "react-icons/md";
import Form from "react-bootstrap/Form";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
export default function SharePopup({ restaurant }) {
  const [show, setShow] = useState(false);
  const { theme } = useContext(ThemeContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const currentURL = window.location.href;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Use the Clipboard API for supported browsers
      navigator.clipboard
        .writeText(currentURL)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 3000); // Reset the copied state after 3 seconds
        })
        .catch((error) => {
          console.error("Error copying to clipboard:", error);
          // Handle the error here (e.g., display an error message)
        });
    } else {
      // Fallback for unsupported browsers
      const textField = document.createElement("textarea");
      textField.value = currentURL;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      textField.remove();

      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Reset the copied state after 3 seconds
    }
  };

  const shareOnFacebook = () => {
    const shareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(shareURL, "_blank");
  };

  const shareOnTwitter = () => {
    const shareURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(shareURL, "_blank");
  };

  const shareViaEmail = () => {
    const subject = "Check out this Restaurant!";
    const body = `Hey! I found this amazing restaurant and wanted to share it with you. Check it out: ${window.location.href}`;
    const mailtoURL = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoURL, "_blank");
  };

  return (
    <>
      <span className="share" onClick={handleShow}>
        <MdShare />
      </span>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className={`share-popup ${theme === "dark" ? "dark-theme" : ""}`}
      >
        <Modal.Body>
          <span className="close-btn" onClick={handleClose}>
            <MdOutlineCancel />
          </span>
          <div className="content">
            <h3>Share {restaurant.restaurantName} Takeaway</h3>
            <ul>
              <li>
                <button className="fb" onClick={shareOnFacebook}>
                  <FaFacebookF />
                  Facebook
                </button>
              </li>
              <li>
                <button className="twitter" onClick={shareOnTwitter}>
                  <FaTwitter />
                  Twitter
                </button>
              </li>
              <li>
                <button className="mail" onClick={shareViaEmail}>
                  <FaEnvelope />
                  Email
                </button>
              </li>
              <li>
                <button
                  className={`link ${copied ? "active" : ""}`}
                  onClick={copyToClipboard}
                >
                  {copied ? (
                    <>
                      <MdDone />
                      Copied
                    </>
                  ) : (
                    <>
                      <TbLayersLinked /> Copy Link
                    </>
                  )}
                </button>
              </li>
            </ul>
            {/* {copied && <span>Link copied to clipboard!</span>} */}
            {/* <span>Link copied to clipboard!</span> */}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export function GroupOrderLink({ children }) {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const copyToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 3000);
        })
        .catch((error) => {
          console.error("Error copying to clipboard:", error);
        });
    } else {
      const textField = document.createElement("textarea");
      textField.value = url;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      textField.remove();

      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
      setTimeout(() => setShow(false), 4000);
    }
  };

  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="group-order" onClick={handleShow}>
        {children}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className={`grouplink-popup ${theme === "dark" ? "dark-theme" : ""}`}
      >
        <Modal.Body>
          <span className="close-btn" onClick={handleClose}>
            <MdOutlineCancel />
          </span>
          <div className="content">
            <div className="heading">
              <h3>Invite friends</h3>
              <p>Invite up to 20 friends</p>
            </div>
            <div className="main">
              <p>Share the below URL</p>
              <Form.Control readOnly defaultValue={url} />

              <button className={copied && "active"} onClick={copyToClipboard}>
                {copied ? (
                  <>
                    <MdDone />
                    Copied
                  </>
                ) : (
                  <>
                    <TbLayersLinked /> Copy Link
                  </>
                )}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
