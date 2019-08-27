import React from "react";
import { Tag } from 'antd';
import getColor from "../utils/common";

const Columns = [
    {
        title: "Title",
        dataIndex: "title",
        key: "title",
        width: "16%"
    }, {
        title: "Content",
        dataIndex: "content",
        key: "content"
    }, {
        title: "Author",
        dataIndex: "author",
        key: "author",
        width: "9%"
    }, {
        title: "Label",
        dataIndex: "label",
        key: "label",
        width: "7%",
        render: (text) => (<Tag color={getColor()}>{text}</Tag>)
    }, {
        title: "Update Date",
        dataIndex: "update_date",
        key: "update_date",
        width: "15%"
    }
];

export default Columns;