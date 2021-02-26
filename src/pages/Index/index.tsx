import React from "react";
import { observable, isArrayLike, computed, action } from "mobx";
import { observer } from "mobx-react";
import "./index.scss";
import { Switch } from "antd-mobile";
import index from "../../store/index";
import banner from "../../images/banner/banner.jpg";
import { History } from "history";

const Index = (props: any) => {
  console.log(props, index, "000---");
  return (
    <div className="home-page">
      <img className="banner-img" src={banner} alt="" />
      <div className="station-info">
        <div className="station">
          <div
            className="from"
            onClick={() => {
              props.history.push("/selectCity");
            }}
          >
            {index.from}
          </div>
          <i className="iconfont icon-qiehuan"></i>
          <div className="to">{index.to}</div>
        </div>
        <div className="date-box">
          <div className="date">2月26日</div>
          <div className="day-of-week">周五</div>
        </div>
        <div className="high-speed">
          只看高铁/动车
          <Switch checked={false} onChange={() => {}} />
        </div>
        <div className="btn">查询车票</div>
      </div>
    </div>
  );
};
export default observer(Index);
