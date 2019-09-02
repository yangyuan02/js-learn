/*
 * @Author: yangyuan
 * @Date: 2019-09-02 15:21:44
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-09-02 16:21:55
 * @Description:
 */
import React from 'react';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Link to="/">root</Link> <br />
        <Link to="/hello">hello</Link> <br />
        <Link to="/todolist">todolist</Link>
        <div>
          <Route
            path="/"
            exact
            render={() => {
              return <div>root page</div>;
            }}
          />
          <Route
            path="/hello"
            render={() => {
              return <div>hello world</div>;
            }}
          />
          <Route path="/todolist" component={TodoList} />
        </div>
      </Router>
    </div>
  );
};

export default App;
