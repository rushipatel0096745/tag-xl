import React from "react";
import LoginForm from "../../components/LoginForm";
import { login } from "../../actions/login";

const SuperAdminLogin = () => {
    return (
        <LoginForm loginAction={login}/>
    );
};

export default SuperAdminLogin;
