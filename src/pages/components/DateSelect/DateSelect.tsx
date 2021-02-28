import React from "react";
import { observable, isArrayLike, computed, action } from "mobx";
import { observer } from "mobx-react";
import "./DateSelect.scss";
import { History } from "history";
import index from '../../../store/index';
import { Header } from "../../index";
import { Calendar } from 'antd-mobile';


interface Props {
  history: History;
}

const DateSelect = (props: Props) => {
  const { history } = props;
  
  return (
    <div className="date-page">
      <Header history={history} title={"选择日期"} />
      <div className="date-box">
        <Calendar
          visible={true}
          infiniteOpt={true}
          initalMonths={2}
          type={'one'}
          minDate={new Date(index.today)}
          maxDate={new Date(index.today + 3600 * 24 * 14 * 1000)}
          defaultValue={[new Date(index.selectDate)]}
          onSelect={(e) => {
            let selectDate = new Date(e.toDateString()).getTime();
            index.selectDate = selectDate;
            history.goBack();
          }}
        />
      </div>
      
    </div>
  );
};
export default observer(DateSelect);
