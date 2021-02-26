import React from "react";
import "./App.css";
import { Route, Router, Switch, Link, NavLink } from "react-router-dom";
import { History } from "history";
import { Index, City } from "./pages";

export interface IAppProps {
  history: History;
}

const App: React.SFC<IAppProps> = ({ history }) => (
  <div className="App">
    <Router history={history}>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/selectCity" component={City} />
        {/* <Route path="/order" component={Order} /> */}
      </Switch>
      {/* <div className="footer-box">
        <NavLink to={"/"} exact={true}>
          <i className="iconfont icon-huoche"></i>
          <span>首页</span>
        </NavLink>
        <NavLink to={"/Goods"}>
          <i className="iconfont icon-jiaotongchuhang"></i>
          <span>出行服务</span>
        </NavLink>
        <NavLink to={"/order"}>
          <i className="iconfont icon-dingdan"></i>
          <span>订单</span>
        </NavLink>
        <NavLink to={"/cart"}>
          <i className="iconfont icon-huiyuan"></i>
          <span>铁路会员</span>
        </NavLink>
        <NavLink to={"/personal"}>
          <i className="iconfont icon-wode"></i>
          <span>我的</span>
        </NavLink>
      </div> */}
    </Router>
  </div>
);

export default App;
