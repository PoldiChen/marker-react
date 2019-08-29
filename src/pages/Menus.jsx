import React from "react";
import PropTypes from "prop-types";
import { Menu, Icon } from "antd";
import { Link } from 'react-router-dom';
import { ROUTES } from "../config/routes.config";
import _ from "lodash";
import UserAvatar from "../components/common/UserAvatar";

const routes = _.clone(ROUTES);

class Menus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeKey: ''
        };
    }

    componentDidMount() {
        console.log("Menus.jsx@componentDidMount");
        let pathname = this.context.router.route.location.pathname;
        console.log(pathname);
        let index = _.findIndex(routes, route => route.link === pathname);
        console.log(index);
        if (index === -1) {
            index = 0;
        }
        this.setState({activeKey: routes[index]['key']});
        this.props.updateActive(routes[index]['key']);
    }

    handleClick = (e) => {
        this.setState({activeKey: e.key});
        this.props.updateActive(e.key);
    };

    render() {

        return (
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[this.state.activeKey]}
                style={{ lineHeight: '64px' }}
                onClick={this.handleClick}
            >
                {
                    routes.map((route) =>
                        <Menu.Item key={route.key}>
                            <Link to={route.link}><Icon type={route.iconType} /><b>{route.text}</b></Link>
                        </Menu.Item>
                    )
                }
                <UserAvatar />
            </Menu>
        );
    }
}

Menus.contextTypes = {
    router: PropTypes.object
};

export default Menus;