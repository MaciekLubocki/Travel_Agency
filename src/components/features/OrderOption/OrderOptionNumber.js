import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';


const OrderOptionNumber = ({setOptionValue, currentValue, price }) => (
            <div className={styles.number}>
                <input type = "number"
                    className={styles.inputSmall} 
                    value={currentValue} 
                    onChange={event => setOptionValue(event.currentTarget.value)}
                    min = '1' 
                    max = '9'>
                </input>
            {price}
        </div>
    );

OrderOptionNumber.propTypes = {
    currentValue:PropTypes.number,
    setOptionValue:PropTypes.func,
    price:PropTypes.string,
};

export default OrderOptionNumber;
