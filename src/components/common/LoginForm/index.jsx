import React from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import './index.less'
import {Form, Icon, Input, Button, Checkbox, message} from 'antd';
import asyncFetch from "../../../utils/asyncFetch";
// import {AppApis} from "../../config/api.config";
// import {ROLES_DEFAULT_PAGE} from "../../config/router.config";
import {API} from "../../../config/api.config";

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
        console.log("LoginForm@handleSubmit");
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                let url = API.get_login;
                let params = {
                    userName: values.userName,
                    password: values.password
                };
                asyncFetch('POST', url, params,
                    (res) => {
                        console.log(res.headers.get("authorization"));
                        let token = res.headers.get("authorization");
                        if (res.status == 200) {
                            message.success("login success.");
                            this.getUserInfo(token);
                        } else {
                            message.error(res.message);
                        }
                    }, {}, 'cors', {}, true);
            }
        });
    };

    getUserInfo = (token) => {
        console.log('LoginForm@getUserInfo');
        let url = API.get_current_user;
        asyncFetch('GET', url, {},
            (res) => {
                console.log(res);
                if (res.code === 0) {
                    message.success("current user.");
                    setTimeout(() => {
                        this.context.setLoginInfo(true, res.data, token);
                        this.props.history.push({
                            pathname: '/home'
                        })
                    }, 1000)
                } else {
                    message.error(res.message);
                }
            }, {}, 'cors', {}, false, token);
    };

    render() {

        const {getFieldDecorator} = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: 'input user name'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               placeholder="user name"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'input password'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                               placeholder="password"/>
                    )}
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