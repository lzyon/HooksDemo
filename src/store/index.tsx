import React from "react";
import { observable, computed, action, autorun, when, reaction } from "mobx";

class IndexStore {
  @observable from: string = "北京";
  @observable to: string = "上海";
}

const index = new IndexStore();
export default index;
