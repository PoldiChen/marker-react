
import React from "react";
import { Tag, message, Input } from 'antd';
import { API } from "../../../config/api.config";
import asyncFetch from "../../../utils/asyncFetch";
import getColor from "../../../utils/common";
import _ from "lodash";

class LabelTags extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            labels: []
        }
    }

    componentDidMount() {
        this.getLabels();
    }

    getLabels() {
        console.log('LabelTags@getLabels');
        let url = API.get_labels;
        asyncFetch('GET', url, {},
            (res) => {
                if (res.code === 0) {
                    let labels = [];
                    res.data.map(function(row) {
                        labels.push({
                            key: row.id,
                            name: row.name
                        });
                        return 0;
                    });
                    this.setState({
                        labels: labels
                    });
                } else {
                    message.error(res.message);
                }
            }, {}, 'cors');
    }

    handleOnAdd = (value) => {
        let url = API.create_labels;
        let params = {
            name: value
        };
        asyncFetch('POST', url, params,
            (res) => {
                console.log(res);
                if (res.code === 0) {
                    message.success("add label success.");
                    let newLabelId = res.data;
                    const labels = _.clone(this.state.labels);
                    labels.push({key: newLabelId, name: value});
                    this.setState({labels: labels});
                } else {
                    message.error(res.message);
                }
            }, {}, 'cors');
    };

    render() {

        const { Search } = Input;

        return (
            <div>

                <Search
                    placeholder="Input a new Label."
                    onSearch={value => this.handleOnAdd(value)}
                    enterButton="Add"
                    style={{marginTop: "6px", marginBottom: "8px"}}
                />

                {
                    this.state.labels.map(label => (
                        <Tag key={label.key} color={getColor()}>{label.name}</Tag>
                    ))
                }
            </div>
        );
    }
}

export default LabelTags;