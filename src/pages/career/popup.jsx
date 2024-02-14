import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineLocalPostOffice } from "react-icons/md";
// import icon1 from './img/career_mask.png';
import { Form, FormControl } from "react-bootstrap";
import { HiOutlineUpload } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";
import { useState } from "react";
import { useContext } from "react";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";

const Popup = ({ careerAction, error, isLoading, children, ...props }) => {
  const [formData, setState] = useState({
    name: "",
    phone: "",
    email: "",
    user_position: props.apply,
    resume: "",
    experience: "",
  });
  const [show, setShow] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  // const [setValidated] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log("formData", formData);
      careerAction(formData);
    }

    setValidated(true);
    // }
  };

  const [resumeFileName, setresumeFileName] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setState({ ...formData, resume: file });
    setresumeFileName(file ? file.name : "");
  };

  return (
    <>
      <div className="job" onClick={handleShow}>
        {children}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className={`career-popup ${theme === "dark" ? "dark-theme" : ""}`}
      >
        <Modal.Header className="modal-header" closeButton>
          <div className="title">
            <h2>Contact Us</h2>
          </div>
        </Modal.Header>
        <Modal.Body className="body">
          {error && <p>Error: {error}</p>}
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            method="post"
          >
            <div className="mb-3">
              <Form.Group className="position-form-group">
                <Form.Label>Position you are applying for</Form.Label>

                <MdWorkOutline className="img7" />
                <Form.Control
                  required
                  type="text"
                  readOnly
                  defaultValue={props.apply}
                  name="user_position"
                />
              </Form.Group>
              <br></br>
              <Form.Group
                controlId="validationCustom01"
                className="name-form-group"
              >
                <BiUserCircle className="img1" />
                <Form.Control
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="First name"
                />
              </Form.Group>
              <br></br>
              <Form.Group
                controlId="validationCustom02"
                className="phone-form-group"
              >
                <BiUserCircle className="img2" />
                <Form.Control
                  required
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
              </Form.Group>
              <br></br>

              <Form.Group
                controlId="validationCustom03"
                className="email-form-group"
              >
                <MdOutlineLocalPostOffice className="img3" />
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Id"
                />
              </Form.Group>
              <br></br>

              <div className="exp">
                <Form.Group
                  controlId="validationCustom04"
                  className="Experience-form-group"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="Experience"
                    minlength="1"
                    maxlength="2"
                    name="experience"
                    onChange={handleChange}
                    value={formData.experience}
                  />
                  <MdWorkOutline className="img6" />
                </Form.Group>
              </div>

              <br></br>

              <div className="input-group custom-file-button mb-4">
                <label className="input-group-text" htmlFor="inputGroupFile">
                  {resumeFileName ? resumeFileName : "Upload Your resume"}
                </label>
                <FormControl
                  style={{ display: "none" }}
                  type="file"
                  className="form-control"
                  id="inputGroupFile"
                  required
                  name="resume"
                  onChange={handleFileChange}
                />
                <IoDocumentTextOutline className="img4" />
                <HiOutlineUpload className="img5" />
              </div>
            </div>

            <div className="button">
              <Button type="submit" className="submit" disabled={isLoading}>
                {isLoading ? "Processing" : "Submit"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Popup;
