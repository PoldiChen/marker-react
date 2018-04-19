import React from "react";
import { Checkbox, message } from "antd";
import { API } from "../../../config/api.config";
import asyncFetch from "../../../utils/asyncFetch";

class CheckboxLabel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: []
        };
    }

    componentDidMount() {
        this.getLabels();
    }

    handleCheckOnChange = (e) => {
        console.log(e);
        this.props.onChange(e); // 调用父组件的函数
    };

    getLabels() {
        let url = API.get_labels;
        asyncFetch('GET', url, {},
            (res) => {
                if (res.code === 0) {
                    let options = [];
                    res.data.map(function(label) {
                        options.push({
                            value: label.id,
                            label: label.name
                        });
                    });
                    this.setState({
                        options: options
                    });
                } else {
                    message.error(res.message);
                }
            }, {}, 'cors');
    }

    render() {
        const CheckboxGroup = Checkbox.Group;

        return (
            <CheckboxGroup options={this.state.options} onChange={this.handleCheckOnChange} />
        );
    }

}

export default CheckboxLabel;