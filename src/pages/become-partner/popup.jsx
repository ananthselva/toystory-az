import { useState, useEffect } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsArrowRight } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import { MdCloudUpload } from "react-icons/md";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
import { becomePartner } from "../../actions/static/becomepartnerAction";
import { connect } from "react-redux";
import axios from "axios";

function Popups({ becomePartner, response, error, isLoading, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { theme } = useContext(ThemeContext);

  /////////////////////////////////////
  const [formData, setState] = useState({
    type: 1,
    takeaway_name: "",
    phone: "",
    email: "",
    delivery_charge: "",
    opening_time: "",
    ip: "",
    agent: "",
    menu: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...formData, [name]: value });
  };
  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setState({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    becomePartner(formData);
    setMenuFileName("");
    setState({ ...formData, menu: "" });
  };

  const [menuFileName, setMenuFileName] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setState({ ...formData, menu: file });
    setMenuFileName(file ? file.name : "");
  };

  useEffect(() => {
    const userAgent = navigator.userAgent;
    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        const ipAddress = response.data.ip;
        setState((prevFormData) => ({
          ...prevFormData,
          ip: ipAddress,
          agent: userAgent,
        }));
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });
    if (response) {
      setState({
        type: "",
        takeaway_name: "",
        phone: "",
        email: "",
        delivery_charge: "",
        opening_time: "",
        ip: "",
        agent: "",
        menu: "",
      });
    }
  }, [response]);

  return (
    <>
      <Button onClick={handleShow} clsname="free_trail">
        {props.name}
        <BsArrowRight />
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        className={`model_btn_full ${theme === "dark" ? "dark-theme" : ""}`}
      >
        <Modal.Header closeButton>
          <Modal.Title className="model_heading">
            Sign up <br />
            <p className="sign_sub">Fill in required customer info</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="model_cnt">
          {error && <p>Error: {error}</p>}
          <Form className="radio_btn" method="post" onSubmit={handleSubmit}>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Free"
                  name="type"
                  type={type}
                  id={`inline-${type}-1`}
                  value='Free'
                  onChange={handleRadioChange}
                />
                <Form.Check
                  inline
                  label="Premium"
                  name="type"
                  type={type}
                  id={`inline-${type}-2`}
                  value='Premium'
                  onChange={handleRadioChange}
                />
              </div>
            ))}

            <div className="input_full">
              <div className="input_types">
                <label for="name">Takeaway Name*</label>
                <input
                  type="text"
                  placeholder="Takeaway Name"
                  name="takeaway_name"
                  required
                  onChange={handleChange}
                  value={formData.takeaway_name}
                />
              </div>
              <div className="Delivery_full">
                <label for="Delivery_name">Contact Number*</label>
                <div className="charge" style={{ display: "flex" }}>
                  <div className="symbols">+44</div>
                  <input
                    type="text"
                    placeholder=" phone"
                    minLength={10}
                    maxLength={11}
                    onKeyPress={(event) => {
                      const charCode = event.which || event.keyCode;
                      if (charCode < 48 || charCode > 57) {
                        event.preventDefault();
                      }
                    }}
                    onFocus={(event) => {
                      event.target.placeholder = "";
                    }}
                    onBlur={(event) => {
                      event.target.placeholder = "Phone Number";
                    }}
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="input_types">
                <label for="name">Email*</label>
                <input
                  type="email"
                  placeholder="Contact Email"
                  name="email"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="input-group custom-file-button mb-4">
                <label for="name" className="uplodes">
                  Menu Upload
                </label>
                <label className="input-group-text" htmlFor="inputGroupFile">
                  <MdCloudUpload />
                  {menuFileName ? menuFileName : "Upload Your Menu Card"}
                </label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  className="form-control"
                  id="inputGroupFile"
                  required
                  name="menu"
                  onChange={handleFileChange}
                />
                <label className="uplode-btn" htmlFor="inputGroupFile">
                  Upload
                </label>
              </div>
              <div className="Delivery_full">
                <label for="Delivery_name">Delivery Charge</label>
                <div className="charge" style={{ display: "flex" }}>
                  <div className="symbol">£</div>
                  <input
                    type="text"
                    placeholder="Your Delivery Charge"
                    onChange={handleChange}
                    name="delivery_charge"
                    value={formData.delivery_charge}
                    required
                  />
                </div>
              </div>
              <div className="input_types">
                <label for="name">Opening Time</label>
                <input
                  type="text"
                  placeholder="Opening Time"
                  onChange={handleChange}
                  required
                  name="opening_time"
                  value={formData.opening_time}
                />
              </div>
            </div>
            <div className="btn_last_sing">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Processing" : "Sign up Now"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
const mapStateToProps = (state) => ({
  isLoading: state.partner.isLoading,
  response: state.partner.response,
  error: state.partner.error,
});

const mapDispatchToProps = {
  becomePartner,
};

export default connect(mapStateToProps, mapDispatchToProps)(Popups);
