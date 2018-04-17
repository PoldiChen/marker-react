import React from "react";
import { Modal } from "antd";

class ModalView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
            title: props.title,
            record: props.record
        };
    }

    componentWillReceiveProps(props) {
        console.log("ModalView@componentWillReceiveProps");
        console.log(props);
        this.setState({
            visible: props.visible,
            title: props.title,
            record: props.record
        });
    }

    handleOk = (e) => {
        this.setState({visible: false});
        this.props.handleOnOk();
    };

    handleCancel = (e) => {
        this.setState({visible: false});
        this.props.handleOnCancel();
    };

    render() {
        return (
            <Modal
                visible={this.state.visible}
                title={this.state.title}
                okText={"ok"}
                cancelText={"cancel"}
                width={"600px"}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                maskClosable={false}
            >
                {this.state.record.content}
            </Modal>
        );
    }

}

export default ModalView;