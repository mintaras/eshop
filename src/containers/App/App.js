import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from 'antd';
import './App.scss';

import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const {Content} = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Content className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            </Content>
          </Switch>  
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
