import React from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ user }) => {
  return (
    <div>
      {user ? (
        <h2>Welcome, {user.username}!</h2>
      ) : (
        <h2>Please log in to access the dashboard.</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Dashboard);
