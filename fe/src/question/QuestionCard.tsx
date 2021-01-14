import React from "react";
import { Card, Avatar, Button } from "antd";
import { LikeOutlined, SettingOutlined } from "@ant-design/icons";

const { Meta } = Card;

export interface QuestionCardProps {
  name?: string;
  question?: string;
  onShow?: any;
}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  const { name, question, onShow } = props;
  return (
    <Card
      bordered={true}
      actions={[
        <SettingOutlined key="setting" />,
        <LikeOutlined key="like" onClick={onShow(name, question)} />,
        <Button
          type="primary"
          shape="circle"
          icon={<LikeOutlined />}
          onClick={() => {
            onShow(name, question);
          }}
        />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={name}
        description={question}
      />
    </Card>
  );
};

export default QuestionCard;
