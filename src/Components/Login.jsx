import React from "react";
const Login = (props) => {
    return (
        <div className="login-container">
            <h5 className="welcome-message">Welcome to decentralized voting application</h5>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /><br />
            <br />
            <br />
            <br />
            <button className="login-button" onClick = {props.connectWallet}>Login Metamask To Make Vote</button>
        </div>
    )
}

export default Login;