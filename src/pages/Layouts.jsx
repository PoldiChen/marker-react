import React from "react";
import PropTypes from "prop-types";
import { Layout, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import Menus from "./Menus";
import { ROUTES } from "../config/routes.config";
import _ from "lodash";

const routes = _.clone(ROUTES);

class Layouts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: ""
        }
    }

    updateActive = (key) => {
        let index = _.findIndex(routes, route => route.key === key);
        this.setState({current: routes[index]['text']});
    };

    render() {

        const { Header, Content, Footer } = Layout;

        return(
            <Router>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menus
                            updateActive={this.updateActive}
                        />
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Index</Breadcrumb.Item>
                            <Breadcrumb.Item>{this.state.current}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            {
                                routes.map((route) =>
                                    <Route exact key={route.key} path={route.link} component={route.component}/>)
                            }
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Marker ©2019 Created by Poldi Chen.</Footer>
                </Layout>
            </Router>
        );
    }

}

Layouts.contextTypes = {
    login: PropTypes.bool,
    userInfo: PropTypes.object,
    setLoginInfo: PropTypes.func
};

export default Layouts;