import React from "react";
import { observable, isArrayLike, computed, action } from "mobx";
import { observer } from "mobx-react";
import "./Header.scss";
import { History } from "history";

interface Props {
  title: string;
  history: History;
}

const Header = (props: Props) => {
  const { title, history } = props;
  return (
    <div className="header-box">
      <i
        className="iconfont icon-fanhui"
        onClick={() => {
          history.goBack();
        }}
      ></i>
      {title}
    </div>
  );
};
export default observer(Header);
