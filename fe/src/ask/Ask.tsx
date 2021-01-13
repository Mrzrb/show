import React, { useEffect, useState } from "react";
import { Space } from "antd";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { WsMsg } from "../question/Question";

//{"action":"create", "data" : {"name":"wangjie054", "question":"这个怎"}}
interface SubmitMsg {
  action: string;
  data: { name: string; question: string };
}

const Ask: React.FC<{}> = () => {
  let ws: WebSocket;
  useEffect(() => {
    const url = window.location;
    ws = new WebSocket(`ws://${url.hostname}:8081`);
    ws.onmessage = async (evt) => {
      const data: Blob = evt.data;
      const d: WsMsg = await handleBlobData(data);
      if (!d) {
        return;
      }
      const fn = (actionList as any)[d.action];
      fn && fn(d);
    };
    const actionList = {
      broadcast: (v: WsMsg) => {},
      getall: (v: WsMsg) => {},
    };

    const handleBlobData = async (b: Blob) => {
      if (b.text) {
        return await b
          .text()
          .then((v) => {
            return JSON.parse(v);
          })
          .catch((r) => {
            console.warn(r);
          });
      }
    };
  }, []);
  const handleSubmit = function (name: string, question: string) {
    const createReq: SubmitMsg = {
      action: "create",
      data: {
        name: name,
        question: question,
      },
    };
    ws.send(JSON.stringify(createReq));
  };
  const onFinish = (v: any) => {
    console.log("Received values of form: ", v);
    handleSubmit(v.username, v.question);
  };
  return (
    <Form name="normal_question" className="submit-form" onFinish={onFinish}>
      <Space direction="vertical" align="center" style={{ width: "100%" }}>
        <Form.Item
          style={{ marginTop: "40px" }}
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Who are you"
          />
        </Form.Item>
        <Form.Item
          name="question"
          rules={[{ required: true, message: "Please input your Question!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="enter your question"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            提交问题
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default Ask;
