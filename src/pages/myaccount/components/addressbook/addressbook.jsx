// *******~ Import ~******** //
// React
import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
// Assets
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
// Components
//import AddressDatas from "./addressdata.json";
import BackBtn from "../backbtn";
import ThemeContext from "../../../../common/theme/components/contexts/themecontexts";
// CSS
import "./css/addressbook.scss";
import "./css/addressmodal.scss";
// Images
import HomeIcon from "./img/home-a.svg";
import OfficeIcon from "./img/office-ad.svg";
import OtherIcon from "./img/other-ad.svg";
import AddNewAddImg from "./img/add-new-add.svg";
// Icons
import { FaEdit } from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
// *******~ Import ~******** //

// Redux wallet history
import { connect } from "react-redux";
import { getAddress } from "../../../../actions/myaccount/address/getAddressActions";
import { addAddress } from "../../../../actions/myaccount/address/addAddressActions";
import { updateAddress } from "../../../../actions/myaccount/address/updateAddressActions";
import { updatePrimaryAddress } from "../../../../actions/myaccount/address/updatePrimaryAddressActions";
import { deleteAddress } from "../../../../actions/myaccount/address/deleteAddressActions";

const AddressBook = ({
  address,
  deleteaddress,
  error,
  userData,
  getAddress,
  updateaddress,
  updateprimaryaddress,
  addAddress,
  updateAddress,
  deleteAddress,
  updatePrimaryAddress,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  // location change on responsive
  const navigateto = useNavigate();
  const location = useLocation();
  if (!location.pathname?.includes("/myaccount") && width > breakpoint) {
    navigateto("/myaccount/addressbook");
  }
  // location change on responsive

  // get the data from API
  useEffect(() => {
    getAddress({ customer_id: userData.customerId, body: "Your body" });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Handle loading state
  // if (!address && !error) {
  //   return <div>Loading...</div>;
  // }

  const AddressDatas = address?.data; // Assign to a separate variable
  const AddressDatasMap =
    AddressDatas && AddressDatas?.map((AddressData, index) => AddressData.type);

  const handleAddressUpdate = (index, updatedData) => {
    updateAddress(updatedData);
  };

  const handleAddressDelete = (index, deletedData) => {
    deleteAddress({ address_id: deletedData["address_id"] });
  };
  const handleAddressPrimary = (index, primaryData) => {
    updatePrimaryAddress({
      customer_id: userData.customerId,
      address_type: primaryData["address_type"],
    });
  };

  const handleAddressAdd = (addData) => {
    addData["customer_id"] = userData.customerId;
    addData["primary"] = 0;

    addAddress(addData);
  };

  return (
    <>
      <Helmet>
        <style type="text/css">{`
    footer{
      display:none;
    }
    
  `}</style>
      </Helmet>
      <section className="address-book">
        {width > breakpoint ? (
          <>
            <Container>
              <Row>
                {AddressDatas && AddressDatas?.length === 0 ? (
                  <>
                    <NoAddress />
                  </>
                ) : (
                  <>
                    {AddressDatas &&
                      AddressDatas.map((data, index) => (
                        <>
                          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="address-box">
                              <Table responsive>
                                <tbody>
                                  <tr>
                                    <td rowSpan={2}>
                                      <div className="img-box">
                                        <EditAddress
                                          AddrType={data.type}
                                          primarybtn={() =>
                                            handleOnClick(index)
                                          }
                                          primaryText={
                                            data.primary_address == "1"
                                              ? "Primary"
                                              : "Set as Primary"
                                          }
                                          primarybtnCls={
                                            data.primary_address == "1"
                                              ? "primary-btn active"
                                              : "primary-btn"
                                          }
                                          fisrtname={data.fname}
                                          lastname={data.lname}
                                          phone={data.phone}
                                          postcode={data.postcode}
                                          doornum={data.no}
                                          street={data.address1}
                                          city={data.address2}
                                          addressid={data.id}
                                          primaryStatus={
                                            data.primary_address == "1" ? 1 : 0
                                          }
                                          onUpdate={(updatedData) =>
                                            handleAddressUpdate(
                                              index,
                                              updatedData
                                            )
                                          }
                                          onDelete={(deletedData) =>
                                            handleAddressDelete(
                                              index,
                                              deletedData
                                            )
                                          }
                                          onPrimary={(primaryData) =>
                                            handleAddressPrimary(
                                              index,
                                              primaryData
                                            )
                                          }
                                        />
                                      </div>
                                      {data.primary_address == "1" ? (
                                        <>
                                          <span
                                            className={
                                              data.primary_address == "1"
                                                ? "primary-btn active"
                                                : "primary-btn"
                                            }
                                          >
                                            Primary
                                          </span>
                                        </>
                                      ) : null}
                                    </td>

                                    <td>
                                      <div className="text-group">
                                        <span>First Name</span>
                                        <p>{data.fname}</p>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="text-group">
                                        <span>Last Name</span>
                                        <p>{data.lname}</p>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="text-group">
                                        <span>Telephone/Mobile</span>
                                        <p>{data.phone}</p>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="text-group">
                                        <span>Post Code</span>
                                        <p>{data.postcode}</p>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="text-group">
                                        <span>Street</span>
                                        <p>{data.address1}</p>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="text-group">
                                        <span>City</span>
                                        <p>{data.address2}</p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </Col>
                        </>
                      ))}
                  </>
                )}
              </Row>

              {AddressDatasMap?.includes(1) ? (
                AddressDatasMap?.includes(2) ? (
                  AddressDatasMap?.includes(3) ? null : (
                    <AddNewButton
                      buttonval={AddressDatasMap}
                      onAdd={(addData) => handleAddressAdd(addData)}
                    />
                  )
                ) : (
                  <AddNewButton
                    buttonval={AddressDatasMap}
                    onAdd={(addData) => handleAddressAdd(addData)}
                  />
                )
              ) : (
                <AddNewButton
                  buttonval={AddressDatasMap}
                  onAdd={(addData) => handleAddressAdd(addData)}
                />
              )}
            </Container>
          </>
        ) : (
          <>
            <Container>
              <BackBtn />
              {AddressDatas && AddressDatas.length === 0 ? (
                <>
                  <NoAddress />
                </>
              ) : (
                <>
                  <Row>
                    {AddressDatas &&
                      AddressDatas?.map((data, index) => (
                        <>
                          <Col xxl={12}>
                            <div className="address-box-mob">
                              <div className="heading-box">
                                <div className="img-box">
                                  <EditAddress
                                    AddrType={data.type}
                                    primarybtn={() => handleOnClick(index)}
                                    primaryText={
                                      data.primary_address == "1"
                                        ? "Primary"
                                        : "Set as Primary"
                                    }
                                    primarybtnCls={
                                      data.primary_address == "1"
                                        ? "primary-btn active"
                                        : "primary-btn"
                                    }
                                    primaryStatus={
                                      data.primary_address == "1" ? 1 : 0
                                    }
                                    fisrtname={data.fname}
                                    lastname={data.lname}
                                    phone={data.phone}
                                    postcode={data.postcode}
                                    doornum={data.no}
                                    street={data.address1}
                                    city={data.address2}
                                    addressid={data.id}
                                  />
                                  {data.primary_address == "1" ? (
                                    <>
                                      <span
                                        className={
                                          data.primary_address == "1"
                                            ? "primary-btn active"
                                            : "primary-btn"
                                        }
                                      >
                                        Primary
                                      </span>
                                    </>
                                  ) : null}
                                </div>
                                <div className="name-number">
                                  <span>{data.fame + " " + data.lname}</span>

                                  <span>{data.postcode}</span>

                                  <span>{data.no + ", " + data.street}</span>

                                  <span>{data.city}</span>
                                </div>
                              </div>

                              <div className="address-div"></div>
                            </div>
                          </Col>
                        </>
                      ))}
                  </Row>
                </>
              )}

              {AddressDatasMap?.includes(1) ? (
                AddressDatasMap?.includes(2) ? (
                  AddressDatasMap?.includes(3) ? null : (
                    <AddNewButton
                      buttonval={AddressDatasMap}
                      onAdd={(addData) => handleAddressAdd(addData)}
                    />
                  )
                ) : (
                  <AddNewButton
                    buttonval={AddressDatasMap}
                    onAdd={(addData) => handleAddressAdd(addData)}
                  />
                )
              ) : (
                <AddNewButton
                  buttonval={AddressDatasMap}
                  onAdd={(addData) => handleAddressAdd(addData)}
                />
              )}
            </Container>
          </>
        )}
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  address: state.address.address, // Replace 'post' with your reducer name
  userData: state.userdata.userData,
  addaddress: state.addaddress.addaddress,
  deleteaddress: state.deleteaddress.deleteaddress,
  updateaddress: state.updateaddress.updateaddress,
  updateprimaryaddress: state.updateprimaryaddress.updateprimaryaddress,
});

const mapDispatchToProps = {
  getAddress,
  addAddress,
  updateAddress,
  deleteAddress,
  updatePrimaryAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressBook);

const AddNewButton = (props) => {
  return (
    <>
      <>
        <Row>
          <Col xxl={12}>
            <div className="add-address-div">
              <AddAddressForm
                buttonval={props.buttonval}
                onAdd={(addData) => props.onAdd(addData)}
              />
            </div>
          </Col>
        </Row>
      </>
    </>
  );
};

const NoAddress = (params) => {
  return (
    <>
      <Col xxl={12}>
        <div className="no-address-img">
          <Image src={AddNewAddImg} fluid />
          <h3> Oops! None of your Address saved yet.</h3>
        </div>
      </Col>
    </>
  );
};

function EditAddress(props) {
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updatedData, setUpdatedData] = useState({
    first_name: props.fisrtname,
    last_name: props.lastname,
    phone_number: props.phone,
    postcode: props.postcode,
    city: props.city,
    street: props.street,
    door: props.doornum,
    address_type: props.AddrType,
    address_id: props.addressid,
    primary: props.primaryStatus,
  });

  const handleUpdate = () => {
    props.onUpdate(updatedData); // Callback to send updated data
    handleClose();
  };
  const handleDelete = () => {
    props.onDelete(updatedData); // Callback to send deleted data
    handleClose();
  };
  const handlePrimary = () => {
    props.onPrimary(updatedData); // Callback to send primary data
    handleClose();
  };
  const handleInputChange = (field, value) => {
    setUpdatedData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  //trigger Update
  const handleUpdateTrigger = () => {
    document.getElementById("updateTrigerBtn").click();
  };

  return (
    <>
      {props.AddrType && props.AddrType == 1 ? (
        <>
          <Image src={HomeIcon} fluid />
          <div type="button" class="address-type home" onClick={handleShow}>
            Home
            <FaEdit />
          </div>
        </>
      ) : props.AddrType == 2 ? (
        <>
          <Image src={OfficeIcon} fluid />
          <div type="button" class="address-type office" onClick={handleShow}>
            Office
            <FaEdit />
          </div>
        </>
      ) : props.AddrType == 3 ? (
        <>
          <Image src={OtherIcon} fluid />
          <div type="button" class="address-type other" onClick={handleShow}>
            Others
            <FaEdit />
          </div>
        </>
      ) : (
        ""
      )}

      <Modal
        show={show}
        onHide={handleClose}
        id="addr-book-modal"
        backdrop="static"
        keyboard={false}
        className={theme === "dark" ? "dark-popup" : null}
      >
        <Modal.Header>
          <Modal.Title>
            Edit{" "}
            {props.AddrType && props.AddrType == 1
              ? "Home "
              : props.AddrType == 2
              ? "Office "
              : props.AddrType == 3
              ? "Others "
              : ""}{" "}
            Address
          </Modal.Title>
          <Button className="close-btn" onClick={handleClose}>
            <MdCancel />
          </Button>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row className="align-items-end">
              <Col xxl={6} xs={6} md={6}>
                <Form.Group className="form-group">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    //defaultValue={props.fisrtname}
                    // onChange={(e) => setFname(e.target.value)}
                    value={updatedData.first_name}
                    onChange={(e) =>
                      handleInputChange("first_name", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <Form.Group className="form-group">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    //  defaultValue={props.lastname}
                    // onChange={(e) => setLname(e.target.value)}
                    value={updatedData.last_name}
                    onChange={(e) =>
                      handleInputChange("last_name", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <Form.Group className="form-group">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    // defaultValue={props.phone}
                    //onChange={(e) => setPhone(e.target.value)}
                    value={updatedData.phone_number}
                    onChange={(e) =>
                      handleInputChange("phone_number", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <Form.Group className="form-group">
                  <Form.Label>Post Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Post Code"
                    //  defaultValue={props.postcode}
                    // onChange={(e) => setPostcode(e.target.value)}
                    value={updatedData.postcode}
                    onChange={(e) =>
                      handleInputChange("postcode", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <Form.Group className="form-group">
                  <Form.Label>Door Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Door Number"
                    // defaultValue={props.doornum}
                    //onChange={(e) => setDoornum(e.target.value)}
                    value={updatedData.door}
                    onChange={(e) => handleInputChange("door", e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <Form.Group className="form-group">
                  <Form.Label>Street</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Street"
                    //defaultValue={props.street}
                    //onChange={(e) => setStreet(e.target.value)}
                    value={updatedData.street}
                    onChange={(e) =>
                      handleInputChange("street", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <Form.Group className="form-group">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    //defaultValue={props.city}
                    //onChange={(e) => setCity(e.target.value)}
                    value={updatedData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <Button className={props.primarybtnCls} onClick={handlePrimary}>
                  {props.primaryText}
                </Button>
                <Button
                  className="update-btn d-none"
                  id="updateTrigerBtn"
                  onClick={handleUpdate}
                >
                  Update
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="update-btn" onClick={handleUpdateTrigger}>
            Update
          </Button>
          <Button className="delet-btn" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function AddAddressForm(props) {
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const addresstype = props.buttonval; // check the added address ty[pe]

  const [addData, setAddData] = useState({
    first_name: "",
    last_name: "",
    postcode: "",
    phone_number: "",
    city: "",
    street: "",
    door: "",
    customer_id: "",
    address_type: "",
    primary: "",
  });
  const handleClose = () => {
    setAddData({
      first_name: "",
      last_name: "",
      postcode: "",
      phone_number: "",
      city: "",
      street: "",
      door: "",
      customer_id: "",
      address_type: "",
      primary: "",
    });
    setShow(false);
  };

  const handleInputAddChange = (field, value) => {
    if (field === "address_type") {
      setAddData((prevData) => ({
        ...prevData,
        address_type: value,
      }));
    } else {
      setAddData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    }
  };
  //trigger
  const handleAddress = () => {
    document.getElementById("triger-btn").click();
  };
  const handleAddAddress = () => {
    props.onAdd(addData); // Callback to send updated data
    handleClose();
  };

  return (
    <>
      <Button className="addr-add-btn" onClick={handleShow}>
        Add New <BsFillPlusCircleFill />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        id="addr-book-modal"
        backdrop="static"
        keyboard={false}
        className={theme === "dark" ? "dark-popup" : null}
      >
        <Modal.Header>
          <Modal.Title>Add New Address</Modal.Title>
          <Button className="close-btn" onClick={handleClose}>
            <MdCancel />
          </Button>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row className="align-items-end">
              <Col xxl={6} xs={6} md={6}>
                <Form.Group className="form-group">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={addData.first_name}
                    onChange={(e) =>
                      handleInputAddChange("first_name", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <Form.Group className="form-group">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={addData.last_name}
                    onChange={(e) =>
                      handleInputAddChange("last_name", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <Form.Group className="form-group">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    value={addData.phone_number}
                    onChange={(e) =>
                      handleInputAddChange("phone_number", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <Form.Group className="form-group">
                  <Form.Label>Post Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Post Code"
                    value={addData.postcode}
                    onChange={(e) =>
                      handleInputAddChange("postcode", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <Form.Group className="form-group">
                  <Form.Label>Door Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Door Number"
                    value={addData.door}
                    onChange={(e) =>
                      handleInputAddChange("door", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <Form.Group className="form-group">
                  <Form.Label>Street</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Street"
                    value={addData.street}
                    onChange={(e) =>
                      handleInputAddChange("street", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col xxl={6} xs={12} md={6} sm={6} xl={6}>
                <Form.Group className="form-group">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    value={addData.city}
                    onChange={(e) =>
                      handleInputAddChange("city", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col xxl={6} xs={12} sm={6} md={6} xl={6}>
                <Form.Group className="form-group form-check-group">
                  <Form.Check
                    id="Home"
                    for="Home"
                    inline
                    label="Home"
                    name="Address_Type"
                    disabled={addresstype?.includes(1)}
                    type="radio"
                    checked={addData.address_type === "1"} // Check if the type is currently "Home"
                    onChange={() => handleInputAddChange("address_type", "1")} // Update the address_type in addData
                  />
                  <Form.Check
                    id="Office"
                    for="Office"
                    inline
                    label="Office"
                    name="Address_Type"
                    disabled={addresstype?.includes(2)}
                    type="radio"
                    checked={addData.address_type === "2"} // Check if the type is currently "Home"
                    onChange={() => handleInputAddChange("address_type", "2")} // Update the address_type in addData
                  />
                  <Form.Check
                    id="Other"
                    for="Other"
                    inline
                    name="Address_Type"
                    label="Other"
                    disabled={addresstype?.includes(3)}
                    type="radio"
                    checked={addData.address_type === "3"} // Check if the type is currently "Home"
                    onChange={() => handleInputAddChange("address_type", "3")} // Update the address_type in addData
                  />

                  {/* <>{AddressDatasMap.includes("Others") ? "true" : "false"}</> */}
                </Form.Group>
              </Col>
            </Row>
            <Button
              className="d-none"
              id="triger-btn"
              onClick={handleAddAddress}
            >
              Save
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="delet-btn" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="update-btn" onClick={handleAddress}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
