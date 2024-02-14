import { GoogleLogin } from "react-google-login";
import { connect } from 'react-redux';
import { login,setLoggedIn } from '../actions/login/authssoActions';
// const clientId="818058364680-0h15mo0i9aprr7g47hriu8puib7eb0aa.apps.googleusercontent.com";
const clientId="818058364680-6d3u6vo52bkqb50r6bg6ph31tis44ibg.apps.googleusercontent.com";

const Login = ({ login,onClosePopup,isLoggedIn }) => {


    const onSuccess= (res) => {
        onClosePopup();
        const postData = {
                verfication_code: res.googleId,
                email: res.profileObj.email,
                login_type: 1,
                first_name:res.profileObj.givenName,
                last_name:res.profileObj.familyName
            };  
        login(JSON.stringify(postData));
    }

    const onFailure= (res) => {
        console.log("Login Failed! res:",res);
    }

    return (
        // <div id="signInButton">
        <div>
            {!isLoggedIn && (
                <GoogleLogin 
                    clientId={clientId}
                    buttonText="Continue With Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    className="google_btn"
                /> 
            )}
        </div>
    )
}

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