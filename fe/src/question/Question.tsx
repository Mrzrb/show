import React from "react";
import { Divider, Layout } from "antd";
import QuestionCard from "./QuestionCard";

const { Header, Content, Footer } = Layout;
const Question: React.FC<{}> = () => {
  return (
    <>
      <Layout>
        <Header></Header>
        <Content>
          <QuestionCard name="wangjie054" question="docker zenme 维护" />
        </Content>
      </Layout>
    </>
  );
};

export default Question;
