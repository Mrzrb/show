import React from "react";
import Question from "./question/Question";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ask from "./ask/Ask";
import { Layout } from "antd";
const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <Header></Header>
          <Content>
            <Router basename="/question">
              <Switch>
                <Route path="/ask">
                  <Ask />
                </Route>
                <Route path="/" component={Question} />
              </Switch>
            </Router>
          </Content>
        </Layout>
      </header>
    </div>
  );
}

export default App;
