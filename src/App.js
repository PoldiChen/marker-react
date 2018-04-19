import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./css/main.less";
import Layouts from "./pages/Layouts";
import PageLogin from "./pages/PageLogin";
import { LocaleProvider } from "antd";
import enUs from 'antd/lib/locale-provider/zh_CN'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: false
        }
    }

    render() {
        return (
            <LocaleProvider locale={enUs}>
            {
                this.state.login?
                <Layouts />
                :
                <PageLogin />
            }
            </LocaleProvider>

        );
    }
}

export default App;
