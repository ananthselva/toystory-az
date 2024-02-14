import FacebookLogin from 'react-facebook-login'
import { connect } from 'react-redux';
import { login,setLoggedIn } from '../actions/login/authFacebook';

const your_app_id="1331300873695941";


function FacebookSignIn({ login,onClosePopup }) {
    
    const responseFacebook = (response) => {
      console.log('Facebook User:', response);
      // Call the provided function on successful login
      if (response.accessToken) {
        const postData = {
            verfication_code: response.id,
            email: '',
            login_type: '2',
            first_name:response.name,
            last_name:''
        };
        login(postData);
        // onClosePopup();
      }
    };
  
    return (
        
      <FacebookLogin
      appId={your_app_id}
      autoLoad={false}
      fields="name,email,picture"
      scope="public_profile,user_friends"
      callback={responseFacebook}
      icon="fa-facebook" />
       

    );
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(FacebookSignIn);