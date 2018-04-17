import React from "react";
import { Input, Checkbox, message } from "antd";
import asyncFetch from "../utils/asyncFetch";
import Apis from "../config/api.config";
import CheckboxLabel from "../components/CheckboxLabel";

class PageMarker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: "",
            checkLabelIds: []
        };
    }

    handleOnSearch = (value) => {
        let url = Apis.post_create;
        let labelIds = [];
        this.state.checkLabelIds.map(function(id) {
            labelIds.push({
                id: id
            });
            return 0;
        });
        let params = {
            title: value,
            content: this.state.content,
            labels: labelIds
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

        return(
            <div>

                <Search
                    placeholder="input title here"
                    onSearch={value => this.handleOnSearch(value)}
                    enterButton="Submit"
                />

                <TextArea
                    rows={20}
                    placeholder="input content here"
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

export default PageMarker;