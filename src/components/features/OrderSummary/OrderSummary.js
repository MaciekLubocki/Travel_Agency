import React from 'react';
import styles from './OrderSummary.scss'


class OrderSummary extends React.Component {
  render(){
    return(
      <div>
        <h2 className={styles.component}>Total:<strong>Y12,342</strong></h2>
      </div>
    );
  }
}

export default OrderSummary;  