import React, { useEffect } from "react";
import { observable, isArrayLike, computed, action } from "mobx";
import { observer } from "mobx-react";
import "./Order.scss";
import index from "../../store/index";
import { Footer } from "../index";
import { History } from "history";

interface Props {
  history: History;
}



const Order = (props: Props) => {
  const { history } = props;
  
  return (
    <div className="order-page">
      <Footer />
    </div>
  );
};
export default observer(Order);
