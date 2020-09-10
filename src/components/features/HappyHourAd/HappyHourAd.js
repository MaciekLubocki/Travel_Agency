import React from 'react';
import styles from './HappyHourAd.scss'
import PropTypes from 'prop-types'

class HappyHourAd extends React.Component {
    render() {
      return  <div className={styles.Component}>
        <h3 className={styles.title}>{this.props.title}</h3>;
        <div className={styles.promoDescription}>
        </div>
      </div>
        }
  }

HappyHourAd.propTypes = {
title: PropTypes.string,
promoDescription: PropTypes.string,
};

export default HappyHourAd; 