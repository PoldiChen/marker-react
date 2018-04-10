import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

class PageHome extends React.Component {

    render() {

        const { Header, Content, Footer } = Layout;

        return(
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['home']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="home">Home</Menu.Item>
                        <Menu.Item key="marker">Marker</Menu.Item>
                        <Menu.Item key="settings">Settings</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Marker</Breadcrumb.Item>
                        <Breadcrumb.Item>New</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Marker ©2018 Created by Poldi Chen.
                </Footer>
            </Layout>
        );
    }

}

export default PageHome;