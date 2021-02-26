import React from "react";
import { observable, computed, action, autorun, when, reaction } from "mobx";

class IndexStore {
  @observable from: string = "北京";
  @observable to: string = "上海";

  @action exchangeStation = (): void => {
    let temp = this.from;
    this.from = this.to;
    this.to = temp;
  };
}

const index = new IndexStore();
export default index;
