import React from "react";
import { Popover, Avatar} from "antd";
import getColor from "../../../utils/common";
import PropTypes from "prop-types";

class UserAvatar extends React.Component {

    render() {

        let avatarColor = getColor();

        return (
            <Popover placement="bottomRight"
                     content={
                         <span style={{cursor: 'pointer'}}>Logout</span>}
                     trigger="click">
                <Avatar style={{
                    backgroundColor: '#1890ff',
                    right: 20,
                    position: 'absolute',
                    top: 10,
                    cursor: 'pointer'
                }}
                        size="large">
                    {this.context.userInfo['display']}
                </Avatar>
            </Popover>
        );
    }

}

UserAvatar.contextTypes = {
    userInfo: PropTypes.object
};

export default UserAvatar;