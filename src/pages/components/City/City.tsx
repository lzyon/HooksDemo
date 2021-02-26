import React from "react";
import { observable, isArrayLike, computed, action } from "mobx";
import { observer } from "mobx-react";
import "./City.scss";
import { History } from "history";
import { Header } from "../../index";
interface Props {
  history: History;
}

const City = (props: Props) => {
  const { history } = props;
  return (
    <div className="city-page">
      <Header history={history} title={"选择城市"} />
    </div>
  );
};
export default observer(City);
