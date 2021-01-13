import React from "react";
import { Card, Avatar } from "antd";
import { LikeOutlined, SettingOutlined } from "@ant-design/icons";

const { Meta } = Card;

export interface QuestionCardProps {
  name?: string;
  question?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  const { name, question } = props;
  return (
    <Card
      bordered={true}
      actions={[<SettingOutlined key="setting" />, <LikeOutlined key="like" />]}
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
