import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Modal, Switch, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less';
import { RouteComponentProps } from 'react-router-dom';
import { history, connect, Dispatch } from 'umi';
import { UserModelState } from '@/models/userModel';
import { message } from 'antd';
type PropsType = RouteComponentProps & {};

interface PageProps {
  userState: UserModelState;
  dispatch: Dispatch;
}

const mapStateToProps = ({ user }: { user: UserModelState }) => {
  const userState = user;

  return {
    userState,
  };
};

const NormalLoginForm: React.FC<PageProps> = props => {
  const [form] = Form.useForm();
  let loginStatus;
  if (props?.userState) {
    loginStatus = props.userState.loginStatus;
  }

  let [btnForLogin, switchRegister] = useState(true);
  let [captchaState, captchaStateChange] = useState(false);

  const getCode = () => {
    if (form.getFieldError('username').length > 0) {
      return;
    }
    let username = form.getFieldValue('username');
    //获取验证码
    props.dispatch({
      type: 'user/getEmailCode',
      payload: {
        username,
      },
    });
    captchaStateChange(true);
    setTimeout(() => {
      captchaStateChange(false);
    }, 6 * 1000);
  };

  const onFinish = (values: object) => {
    console.log('Received values of form: ', values);

    let type = btnForLogin ? 'user/login' : 'user/register';
    props.dispatch({
      type,
      payload: values,
      callback: (res: { errno: number; message: string }) => {
        if (res.errno !== 0) {
          message.error(res.message);
        } else {
          Modal.success({
            title: '温馨提示',
            content: res.message,
            onOk() {
              history.push({ pathname: 'home' });
            },
          });
        }
      },
    });
  };

  function onChange(checked: boolean) {
    props.dispatch({ type: 'user/save', payload: { loginStatus: checked } });
  }

  return (
    <div id="components-form-demo-normal-login">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username,Email type!',
              type: 'email',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {btnForLogin ? (
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
        ) : (
          ''
        )}

        {btnForLogin ? (
          ''
        ) : (
          <Form.Item>
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="code"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: 'Please input the captcha you got!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Button
                  type="primary"
                  disabled={captchaState}
                  onClick={getCode}
                >
                  Get captcha
                </Button>
              </Col>
            </Row>
          </Form.Item>
        )}

        <Form.Item>
          {btnForLogin ? (
            <>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a onClick={() => switchRegister(false)}>register now!</a>
            </>
          ) : (
            <>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log up
              </Button>
              Or <a onClick={() => switchRegister(true)}>login now!</a>
            </>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(mapStateToProps)(NormalLoginForm);
