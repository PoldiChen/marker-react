import React from "react";
import PropTypes from "prop-types";
import LoginForm from "../components/common/LoginForm/index";
import { BrowserRouter as Router } from 'react-router-dom'
import { Card, Icon } from 'antd'
import "../css/main.less";

class PageLogin extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Card className='login-card' hoverable>
                    <h2 style={{color: 'rgba(0, 0, 0, .65)', marginLeft: 140, marginBottom: 25}}>
                        <Icon type="edit" style={{margin: '0 20px'}}/>
                        Marker
                    </h2>
                    <LoginForm />
                </Card>
            </Router>
        );
    }
}

PageLogin.contextTypes = {
    login: PropTypes.bool,
    userInfo: PropTypes.object,
    setLoginInfo: PropTypes.func
};

export default PageLogin;