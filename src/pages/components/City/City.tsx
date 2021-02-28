import React, { useState, useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import "./City.scss";
import { History } from "history";
import { Header } from "../../index";
import index from "../../../store/index";
import { SearchBar } from 'antd-mobile';
import { CityInfo, CityObj } from '../../../models/index';

interface Props {
  history: History;
}

const City = (props: Props) => {
  const { history } = props;
  const [cityList, setCityList] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [citySearchList, setSearchCityList] = useState([] as CityInfo[]);
  
  useEffect(() => {
    const getCityList = async () => {
      let res = await index.getCityList();
      if (res.resultCode === 0) {
        setCityList(res.result);
        localStorage.setItem('cityList', JSON.stringify(res.result));
      } 
    }
    let cityArr = JSON.parse(localStorage.getItem('cityList') || '[]');
    if (cityArr.length){
      setCityList(cityArr);
    } else {
      getCityList();
    }
  }, [])

  useEffect(() => {
    const getSearchCityList = async () => {
      let res = index.getSearchCityList(searchVal);
      setSearchCityList(res);
    }
    getSearchCityList();
  }, [searchVal])

  const toLocation = (val: string) => {
    let ele = document.querySelector(`[data-cate='${val}']`);
    if (ele) {
      ele.scrollIntoView();
    }
  }

  return (
    <div className="city-page">
      <Header history={history} title={"选择城市"} />
      <SearchBar
        className="searchCity"
        placeholder="请输入城市或车站名"
        onClear={() => {}}
        onCancel={() => {

        }}
        onChange={(e) => {
          setSearchVal(e);
        }}
      />

      {searchVal && (citySearchList.length ? citySearchList.map((item: CityInfo) => {
        return <CityItem city={item} history={history} />
      }) : 
        <div className="emptyList">无法查询到车站</div>
      )}

      {!searchVal && 
        <div className="cityList">
          {cityList.map((item: CityObj) => {
        return <div className="cityCate" key={item.idx} data-cate={item.idx}>
          <div className="cateName">{item.idx}</div>
          {item.cities.map((cityItem: CityInfo) => {
            return <CityItem city={cityItem} history={history} />
          })}
        </div>
      })}
        </div>
      }

      {!searchVal && <Location toLocation={toLocation} />}
    </div>
  );
};
export default observer(City);

interface CityItemProps{
  history: History;
  city: {
    id: number;
    name: string;
  }
}
const CityItem = (props: CityItemProps) => {
  const { city, history } = props;
  const { id, name } = city;
  
  return <div className="cityItem" key={id} onClick={() => {index.changeStation(name); history.goBack()}}>{name}</div>
    
};

interface LocationProps{
  toLocation: any;
}
const Location = (props: LocationProps) => {
  const { toLocation } = props;

  let locationList = ["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"];

  
  return <div className="locationList">
    {locationList.map((item, index) => {
      return <div className="locationItem" key={index} onClick={() => {toLocation(item)}}>
        {item}
      </div>
    })}
  </div>
};