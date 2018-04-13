import React from "react";
import { Table, Divider, Icon } from "antd";

class PageList extends React.Component {

    render() {

        const dataSource = [
            {
                key: 1,
                title: "title one",
                content: "content one",
                author: "Jack",
                update_date: "2018-04-11 10:23:53"
            }, {
                key: 2,
                title: "title two",
                content: "content two",
                author: "Tom",
                update_date: "2018-04-12 09:11:31"
            }
        ];

        const columns = [
            {
                title: "Title",
                dataIndex: "title",
                key: "title"
            }, {
                title: "Content",
                dataIndex: "content",
                key: "content"
            }, {
                title: "Author",
                dataIndex: "author",
                key: "author"
            }, {
                title: "Update Date",
                dataIndex: "update_date",
                key: "update_date"
            }, {
                title: 'Operate',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a href="javascript:;">View</a>
                        <Divider type="vertical" />
                        <a href="javascript:;">Edit</a>
                        <Divider type="vertical" />
                        <a href="javascript:;">Delete</a>
                    </span>
                ),
            }
        ];

        return(
            <Table
                dataSource={dataSource}
                columns={columns}
            />
        );
    }

}

export default PageList;