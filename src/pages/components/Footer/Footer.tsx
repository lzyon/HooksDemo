import React from "react";
import { observable, isArrayLike, computed, action } from "mobx";
import { observer } from "mobx-react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = (props: any) => {
  return (
    <div className="footer-box">
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
    </div>
  );
};
export default observer(Footer);
