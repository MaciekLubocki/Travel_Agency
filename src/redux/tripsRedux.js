/* SELECTORS */

export const getAllTrips = ({trips}) => trips;
export const countAllCards = ({cards}) => cards.length.filter(card => new RegExp(searchString, 'i').test(card.title));

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration

  if(filters.duration){
    output = output.filter(trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);
  }
  

  // TODO - filter by tags
  
  // if(filters.tags){
  //   output = output.filter(trip => trip.tags.every(filterTag) => trip.tags.includes(filterTag)));
  // }
  
  
  
  if(filters.tags) {
    output = output.filter(trip => filters.tags.every(filterTag => trip.tags.includes(filterTag)));
  }



  //TODO - sort by cost descending (most expensive goes first)

  // if(filters.searchPhrase){
  //   const pattern = new RegExp(filters.searchPhrase, 'i');
  //   output = output.filter(trip => pattern.test(trip.name));
  // }

  return output;
};

export const getTripById = ({trips}, tripId) => {
  // const filtered = trips;

  // TODO - filter trips by tripId
  
  const filtered = trips.filter(trip => trip.id == tripId);

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  // const filtered = trips;

  // TODO - filter trips by countryCode

  const filtered = trips.filter(trip => country.Code == countryCode);

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */


// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;
// action types
// action creators
// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
