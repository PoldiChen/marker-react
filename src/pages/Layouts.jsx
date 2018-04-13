import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import PageHome from "./PageHome";
import PageMarker from "./PageMarker";
import PageSetting from "./PageSetting";
import PageList from "./PageList";

class Layouts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: "Home"
        }
    }

    handleMenuOnClick = (e) => {
        this.setState({current: e.key});
    };

    render() {

        const { Header, Content, Footer } = Layout;

        return(
            <Router>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['Home']}
                            style={{ lineHeight: '64px' }}
                            onClick={this.handleMenuOnClick}
                        >
                            <Menu.Item key="Home">
                                <Link to="/home"><Icon type="home" />Home</Link>
                            </Menu.Item>

                            <Menu.Item key="List">
                                <Link to="/list"><Icon type="profile" />List</Link>
                            </Menu.Item>

                            <Menu.Item key="Marker">
                                <Link to="/marker"><Icon type="edit" />Marker</Link>
                            </Menu.Item>
                            
                            <Menu.Item key="Setting">
                                <Link to="/setting"><Icon type="setting" />Settings</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Index</Breadcrumb.Item>
                            <Breadcrumb.Item>{this.state.current}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            <Route exact path='/home' component={PageHome}/>
                            <Route exact path='/marker' component={PageMarker}/>
                            <Route exact path='/setting' component={PageSetting}/>
                            <Route exact path='/list' component={PageList}/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Marker ©2018 Created by Poldi Chen.</Footer>
                </Layout>
            </Router>
        );
    }

}

export default Layouts;