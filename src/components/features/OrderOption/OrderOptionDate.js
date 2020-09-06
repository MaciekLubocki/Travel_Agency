import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "react-datepicker/dist/react-datepicker.css";

const OrderOptionDate = ({setOptionValue, currentValue}) => (
<DatePicker 
    className={styles.inpute}
    type="date"
    value={currentValue}
    selected={currentValue}
    onChange = {setOptionValue}
    placeholderText = {'Select date'} />
);

OrderOptionDate.propTypes = {
    currentValue: PropTypes.any,
    setOptionValue:PropTypes.func,
};

export default OrderOptionDate;