import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from "prop-types";
import './App.css';
import "./css/main.less";
import Layouts from "./pages/Layouts";
import PageLogin from "./pages/PageLogin";
import { LocaleProvider, message } from "antd";
import enUs from 'antd/lib/locale-provider/zh_CN'
import { API } from "./config/api.config";
import asyncFetch from "./utils/asyncFetch";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: false,
            userInfo: {}
        }
    }

    componentDidMount() {
        let url = API.get_current_user;
        asyncFetch('GET', url, {},
            (res) => {
                console.log(res);
                if (res.code === 0) {
                    message.success("current user.");
                    message.success(JSON.stringify(res.data));
                    this.setState(
                        {
                            login: true
                        }
                    );
                } else {
                    message.error(res.message);
                }
            }, {}, 'cors');
    }

    getChildContext() {
        return {
            login: this.state.login,
            userInfo: this.state.userInfo,
            setLoginInfo: this.setLoginInfo
        };
    }

    setLoginInfo = (login, userInfo) => {
        console.log('App.js@setLoginInfo');
        console.log(login);
        console.log(userInfo);
        this.setState(
            {
                login: login,
                userInfo: userInfo
            }
        );
    };

    render() {
        return (
            <LocaleProvider locale={enUs}>
            {
                this.state.login?
                <Layouts
                    setLoginInfo={this.setLoginInfo}
                />
                :
                <PageLogin
                    setLoginInfo={this.setLoginInfo}
                />
            }
            </LocaleProvider>

        );
    }
}

App.childContextTypes = {
    login: PropTypes.bool,
    userInfo: PropTypes.object,
    setLoginInfo: PropTypes.func
};


export default App;
