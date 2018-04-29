import React from "react";
import PropTypes from "prop-types";
import { Menu, Icon } from "antd";
import { Link } from 'react-router-dom';
import { ROUTES } from "../config/routes.config";
import _ from "lodash";

const routes = _.clone(ROUTES);

class Menus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeKey: ''
        };
    }

    componentDidMount() {
        let pathname = this.context.router.route.location.pathname;
        let index = _.findIndex(routes, route => route.link === pathname);
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
            </Menu>
        );
    }
}

Menus.contextTypes = {
    router: PropTypes.object
};

export default Menus;