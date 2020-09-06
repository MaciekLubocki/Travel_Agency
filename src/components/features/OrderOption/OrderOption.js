import React from 'react';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import {currentValue} from './../OrderForm/OrderForm';
import styles from './OrderOption.scss';
import OrderOptionText from './OrderOptionText';
import OrderOptionDate from './OrderOptionDate';


const optionTypes = {
    dropdown: OrderOptionDropdown,
    icons: OrderOptionIcons,
    checkboxes: OrderOptionCheckboxes,
    number: OrderOptionNumber,
    text: OrderOptionText,
    date: OrderOptionDate,
  };

const OrderOption = ({id, setOrderOption, name, type, ...otherProps}) => {
    const OptionComponent = optionTypes[type];
    if(!OptionComponent){
      return null;
    } else {
      return (
        <div className={styles.component}>
          <h3 className={styles.title}>{name}</h3>
          <OptionComponent
            setOptionValue={value => setOrderOption({[id]: value})}
            {...otherProps}
          />
        </div>
      );
    }
  };

export default  OrderOption;