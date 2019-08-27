import React from "react";
import { Statistic, Row, Col, message } from 'antd';
import { API } from "../../config/api.config";
import asyncFetch from "../../utils/asyncFetch";

class SystemStatistic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            statistic: {}
        };
    }

    componentDidMount() {
        this.getStatistic();
    }

    getStatistic() {
        let url = API.get_statistic;
        asyncFetch('GET', url, {},
            (res) => {
                if (res.code === 0) {
                    this.setState({
                        statistic: res.data
                    });
                } else {
                    message.error(res.message);
                }
            }, {}, 'cors');
    }

    render() {
        return (
            <Row gutter={16}>
                <Col span={8} style={{textAlign: "center"}}>
                    <Statistic title="Active Users" value={this.state.statistic["user"]} valueStyle={{color: "#1890ff"}} />
                </Col>
                <Col span={8} style={{textAlign: "center"}}>
                    <Statistic title="Markers" value={this.state.statistic["marker"]} valueStyle={{color: "#1890ff"}} />
                </Col>
                <Col span={8} style={{textAlign: "center"}}>
                    <Statistic title="Labels" value={this.state.statistic["label"]} valueStyle={{color: "#1890ff"}} />
                </Col>
            </Row>
        );
    }
}

export default SystemStatistic;