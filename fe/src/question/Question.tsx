import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import QuestionCard, { QuestionCardProps } from "./QuestionCard";

const { Header, Content } = Layout;

interface WsMsg {
  action: string;
  status: string;
  msg: string;
  data: any;
  broadcast: boolean;
}

interface QuestionProps {
  questions: QuestionCardProps[];
}

const Question: React.FC<{}> = () => {
  const [questions, setQuestions] = useState<QuestionProps>();

  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:8081");
    ws.onmessage = async (evt) => {
      const data: Blob = evt.data;
      const d: WsMsg = await handleBlobData(data);
      if (!d) {
        return;
      }
      const fn = (actionList as any)[d.action];
      fn && fn(d);
    };
    ws.onopen = function (evt) {
      const pullQuestionReq = {
        action: "getall",
      };
      this.send(JSON.stringify(pullQuestionReq));
    };
    const actionList = {
      broadcast: (v: WsMsg) => {
        setQuestions((state) => {
          const q = v.data as QuestionCardProps;
          const prevState = state as QuestionProps;
          return {
            questions: [q, ...prevState.questions],
          };
        });
      },
      getall: (v: WsMsg) => {
        const questionArr = v as { data: { name: string; desc: string }[] };
        setQuestions((state) => {
          const newQuestions: QuestionProps = { questions: [] };
          questionArr.data.forEach((v) => {
            newQuestions.questions = [
              ...newQuestions.questions,
              { name: v.name, question: v.desc },
            ];
          });
          return newQuestions;
        });
      },
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

  const questionCard = questions?.questions.map((v) => {
    return <QuestionCard name={v.name} question={v.question} />;
  });

  return (
    <>
      <Layout>
        <Header></Header>
        <Content>{questionCard}</Content>
      </Layout>
    </>
  );
};

export default Question;
