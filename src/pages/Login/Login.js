import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "./Login.scss";

import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

async function loadLogin(name, pwd) {
  return await Axios.get("/login.json", {
    params: {
      name,
      pwd,
    },
  });
}

function Login() {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const history = useHistory();

  const onFinish = () => {
    loadLogin(name, pwd).then((res) => {
      if (res.data.code === 0) {
        history.push("/home");
      }
    });
  };

  return (
    <Form name="normal_login" className="login-form" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
      </Form.Item>

      <Form.Item>
        <span>
          {name}----{pwd}
        </span>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
