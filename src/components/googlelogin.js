import React, { useState } from "react";

const clientId =
  "818058364680-6d3u6vo52bkqb50r6bg6ph31tis44ibg.apps.googleusercontent.com";

const GoogleLogin = ({ login, setLoggedIn, userData }) => {
  const [username, setUsername] = useState("");
  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(e);

  //      // setUsername('');
  //   };

  const onSuccess = (res) => {
    // console.log("Login Success! Current user: ",res);
    // console.log(res);
    onClosePopup();

    const postData = {
      verfication_code: res.googleId,
      email: res.profileObj.email,
      login_type: 1,
      first_name: res.profileObj.givenName,
      last_name: res.profileObj.familyName,
    };

    login(postData);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Continue With Googlee"
      onSuccess={onSuccess}
      cookiePolicy={"single_host_origin"}
      className="google_btn"
    />
  );
};

// const mapStateToProps = (state) => {
//   return {
//     isLoggedIn: state.userdata.isLoggedIn,
//     userData: state.userdata.userData,
//   };
// };

// const mapDispatchToProps = {
//   login,
//   setLoggedIn,
// };

export default GoogleLogin;
