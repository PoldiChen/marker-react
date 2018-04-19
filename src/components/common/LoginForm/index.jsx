import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import './index.less'
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import asyncFetch from "../../../utils/asyncFetch";
// import {AppApis} from "../../config/api.config";
// import {ROLES_DEFAULT_PAGE} from "../../config/router.config";

const FormItem = Form.Item;

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginError: false,
            loginErrorMsg: '',
            loading: false,
            login: false,
            userInfo: {}
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //
            }
        });
    };


    render() {

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="user name"/>
                </FormItem>
                <FormItem>
                    <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password" placeholder="password"/>
                </FormItem>
                <FormItem style={{marginBottom: 0, textAlign: "right"}}>
                    <Button style={{marginRight: 10}}>Sign Up</Button>
                    <Button type="primary" loading={this.state.loading} htmlType="submit" className="login-form-button">
                        {
                            this.state.loading ?
                                'login...' :
                                this.state.login ? `welcome，${this.state.userInfo['userName']}` : 'Sign In'
                        }
                    </Button>
                </FormItem>
                {
                    this.state.loginError &&
                    <span style={{color: '#f5222d'}}>{this.state.loginErrorMsg}</span>
                }
            </Form>
        )
    }
}

LoginForm.contextTypes = {
    setLoginInfo: PropTypes.func,
    loginType: PropTypes.number
};

export default withRouter(Form.create()(LoginForm));