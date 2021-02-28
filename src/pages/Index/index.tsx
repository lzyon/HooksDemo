import React, { useEffect } from "react";
import { observable, isArrayLike, computed, action } from "mobx";
import { observer } from "mobx-react";
import "./index.scss";
import { Switch } from "antd-mobile";
import index from "../../store/index";
import banner from "../../images/banner/banner.jpg";
import { Footer } from "../index";
import { History } from "history";

interface Props {
  history: History;
}



const Index = (props: Props) => {
  const { history } = props;
  
  useEffect(() => {
    let date = new Date(new Date().toDateString()).getTime();
    index.today = date;
  }, [])
  console.log(index.selectDate, new Date(index.selectDate).getUTCDay(), index.highSpeed, '000-index')
  return (
    <div className="home-page">
      <img className="banner-img" src={banner} alt="" />
      <div className="station-info">
        <div className="station">
          <div
            className="from"
            onClick={() => {
              index.station = 'from';
              history.push({
                pathname: "selectCity",
              });
            }}
          >
            {index.from}
          </div>
          <i
            className="iconfont icon-qiehuan"
            onClick={() => {
              index.exchangeStation();
            }}
          ></i>
          <div
            className="to"
            onClick={() => {
              index.station = 'to';
              history.push({
                pathname: "selectCity"
              });
            }}
          >
            {index.to}
          </div>
        </div>
        <div className="date-box" 
          onClick={() => {
            history.push({
              pathname: "selectDate"
            });
          }}
        >
          <div className="date">{new Date(index.selectDate).getMonth() + 1}月{new Date(index.selectDate).getDate()}日</div>
          <div className="day-of-week">周{['一', '二', '三', '四', '五', '六', '日'][new Date(index.selectDate).getUTCDay()]}</div>
        </div>
        <div className="high-speed">
          只看高铁/动车
          <Switch checked={index.highSpeed} 
            onChange={(e) => {
              index.highSpeed = e;
            }} 
          />
        </div>
        <div className="btn" onClick={() => {}}>查询车票</div>
      </div>
      <Footer />
    </div>
  );
};
export default observer(Index);
