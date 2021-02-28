import React from "react";
import { observable, toJS, action, autorun, when, reaction } from "mobx";
import { CityInfo, CityObj } from '../models/index';

class IndexStore {
  @observable from: string = "北京";
  @observable to: string = "上海";
  @observable station: string = '';
  @observable today: number = 0;
  @observable selectDate: number = 0;
  @observable highSpeed: boolean = false;

  @action exchangeStation = (): void => {
    let temp = this.from;
    this.from = this.to;
    this.to = temp;
  };

  @action getCityList(){
      return fetch('/getCity').then((response) => {
        return response.json().then((res) => {
          return res;
        });
        
      }).catch((err) => {
        console.log(err, '000-err')
      });
  }

  @action changeStation = (val: string) => {
    this.station === 'to' ? this.to = val : this.from = val;
  };

  @action getSearchCityList(val: string){
    let searchList: CityInfo[] = [];
    let cityList = JSON.parse(localStorage.getItem('cityList') || '[]');
    
    cityList.forEach((item: CityObj) => {
      item.cities.forEach((city) => {
        if (city.name.indexOf(val) > -1) {
          searchList.push(city);
        }
      })
    })
    return searchList;
  }
}

const index = new IndexStore();
export default index;