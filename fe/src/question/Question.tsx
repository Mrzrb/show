import React, { useEffect, useState } from "react";
import QuestionCard, { QuestionCardProps } from "./QuestionCard";
import { Card, Space, Button } from "antd";
import {
  UpOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

export interface WsMsg {
  action: string;
  status: string;
  msg: string;
  data: any;
  broadcast: boolean;
}

interface QuestionProps {
  questions: QuestionCardProps[];
}

const control = (action: string, ws: WebSocket) => {
  const actionMsg = {
    action: "control",
    data: {
      control: action,
    },
  };
  if (ws.readyState !== ws.OPEN) {
    return;
  }
  ws.send(JSON.stringify(actionMsg));
};

const Question: React.FC<{}> = () => {
  const url = window.location;
  const ws = new WebSocket(`ws://${url.hostname}:8081`);
  const [questions, setQuestions] = useState<QuestionProps>();

  function showQuestion(name: string, question: string) {
    const showReq = {
      action: "show",
      data: {
        name: name,
        question: question,
      },
    };
    if (ws.readyState !== ws.OPEN) {
      return;
    }
    ws.send(JSON.stringify(showReq));
  }

  useEffect(() => {
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
    return (
      <>
        <Card>
          <QuestionCard
            name={v.name}
            question={v.question}
            onShow={showQuestion}
          />{" "}
        </Card>
      </>
    );
  });

  return (
    <>
      <Button
        type="primary"
        shape="circle"
        icon={<UpOutlined />}
        onClick={() => {
          control("p_up", ws);
        }}
      ></Button>
      <Button
        type="primary"
        shape="circle"
        icon={<DownOutlined />}
        onClick={() => {
          control("p_down", ws);
        }}
      ></Button>
      <Button
        type="primary"
        shape="circle"
        icon={<LeftOutlined />}
        onClick={() => {
          control("p_left", ws);
        }}
      ></Button>
      <Button
        type="primary"
        shape="circle"
        icon={<RightOutlined />}
        onClick={() => {
          control("p_right", ws);
        }}
      ></Button>

      <Space direction="vertical" style={{ width: "100%" }}>
        {questionCard}
      </Space>
    </>
  );
};

export default Question;
