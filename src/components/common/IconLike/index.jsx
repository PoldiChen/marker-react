import React from "react";
import { Icon } from "antd";

class IconLike extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: "heart-o",
            color: ""
        };
    }

    handleOnClick = () => {
        let type = "heart";
        let color = "#1890ff";
        if (this.state.type === "heart") {
            type = "heart-o";
            color = ""
        }
        this.setState({
            type: type,
            color: color
        });
    };

    render() {
        return (
            <Icon type={this.state.type} onClick={this.handleOnClick} style={{color: this.state.color}} />
        );
    }

}

export default IconLike;