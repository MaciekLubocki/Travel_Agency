import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../CountrySummary/CountrySummary';

class OrderForm extends React.Component {
  render(){
    return(   
      <Row>
        <Col xs={12}>
          <OrderSummary />
        </Col>
      </Row>
    ); 
  }
}

export default OrderForm;