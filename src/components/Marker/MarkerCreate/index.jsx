import React from "react";
import { API } from "../../../config/api.config";
import { Input, message } from "antd";
import asyncFetch from "../../../utils/asyncFetch";
import CheckboxLabel from "../../Label/CheckboxLabel/index";
import moment from "moment";

const DATE_FORMAT = 'yyyy-MM-dd hh:mm:ss';

class MarkerCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: "",
            checkLabelIds: []
        };
    }

    handleOnSearch = (value) => {
        let url = API.post_create;
        let labelIds = [];
        this.state.checkLabelIds.map(function(id) {
            labelIds.push({
                id: id
            });
            return 0;
        });
        let now = moment().format('YYYY-MM-DD HH:mm:ss');
        let params = {
            title: value,
            content: this.state.content,
            labels: labelIds,
            users: [{id: 1}], // todo: 获取当前登陆用户的id,
            update_date: now
        };
        asyncFetch('POST', url, params,
            (res) => {
                console.log(res);
                if (res.code === 0) {
                    message.success("create success.");
                } else {
                    message.error(res.message);
                }
            }, {}, 'cors');
    };

    handleTextAreaOnChange = (e) => {
        this.setState({
            content: e.target.value
        });
    };

    handleCheckboxOnChange = (values) => {
        console.log("handleCheckboxOnChange");
        console.log(values);
        this.setState({
            checkLabelIds: values
        });
    };

    render() {
        const { TextArea } = Input;
        const { Search } = Input;
        return (
            <div>

                <Search
                    placeholder="Input title here"
                    onSearch={value => this.handleOnSearch(value)}
                    enterButton="Submit"
                />

                <TextArea
                    rows={20}
                    placeholder="Input content here"
                    style={{marginTop: "8px", marginBottom: "8px"}}
                    onChange={this.handleTextAreaOnChange}
                />

                <CheckboxLabel
                    onChange={this.handleCheckboxOnChange}
                />

            </div>
        );
    }

}

export default MarkerCreate;