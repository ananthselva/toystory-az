import React from 'react';
import { connect } from 'react-redux';
import AppleSignin from 'react-apple-signin-auth';
import { login, setLoggedIn } from '../actions/login/authssoActions';
import { jwtDecode } from 'jwt-decode';

const Login = ({ login,onClosePopup }) => {
  const onSuccess = (res) => {
    console.log(res);
    onClosePopup();
    const decodedToken=jwtDecode(res.authorization.id_token);
    const email = decodedToken.email;
    const firstName = '';
    const lastName = '';
    const postData = {
      verfication_code: res.authorization.code,
      login_type: 4,
      email: email,
      first_name: firstName,
      last_name: lastName,
    };
    console.log(postData);
    login(JSON.stringify(postData));
  };

  const onFailure = (res) => {
    console.log('Login Failed! res:', res);
  };

  return (
    <AppleSignin
      authOptions={{
        clientId: 'app.localsigninwithapple.com.sid',
        redirectURI: 'https://www.fusionkitchen.co.uk',
        scope: 'email name',
        usePopup: true,
      }}
      onSuccess={onSuccess}
      onError={onFailure}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userdata.isLoggedIn,
    userData: state.userdata.userData,
  };
};

const mapDispatchToProps = {
  login,
  setLoggedIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
