import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd'


const select ={
title: '.title',
promoDescription: '.promoDescription',
};

const mockProps  = {
title: 'titleTest',
promoDescription: 'promoDescription',
};


describe('Component HappyHourAd', () => {
    it('should render without crashing', () => {
      const component = shallow(<HappyHourAd />);
      expect(component).toBeTruthy();
    });

    //rozwiązanie moje
    
    it('should find h3 and promodescription', () => {
     const h3Component = '';
     const countdownComponent = '';
     const component = shallow(<HappyHourAd h3={h3Component} countdown={countdownComponent} />);
    
     const renderedH3 = component.find('.title').text();
     const renderedCountdown = component.find('.promoDescription').text();
     expect(renderedH3).toEqual(h3Component);
     expect(renderedCountdown).toEqual(countdownComponent);

    });

    // //rozwiązanie z programu

    // it('should render heading and description', () => {
    //   const component = shallow(<HappyHourAd />);
    //   expect(component.exists(select.title)).toEqual(true);
    //   expect(component.exists(select.promoDescription)).toEqual(true);
    // });


    it('should render title from props', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedH3 = component.find(select.title).text();
    expect(renderedH3).toEqual(mockProps.title);
});

});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

describe('Component HappyHourAd with mocked Date', () => {
  it('should show correct at 11:57:58', () => {
    global.Date = mockDate('2019-05-14T11:57:58.135Z');
    /* ... */
    global.Date = trueDate;
  });
});











