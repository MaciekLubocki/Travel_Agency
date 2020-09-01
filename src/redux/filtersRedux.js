/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const TAG_ADD = createActionName('TAG_ADD');
export const TAG_REMOVE = createActionName('TAG_REMOVE');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeDuration = payload => ({ payload, type: CHANGE_DURATION });
export const addTag = payload => ({ payload, type: TAG_ADD });
export const removeTag = payload => ({ payload, type: TAG_REMOVE });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_DURATION:
      return {
        ...statePart,
      duration: {
        ...statePart.duration,
        [action.payload.type]: parseInt(action.payload.value),
      }
      };
        case TAG_ADD:
          return {
            ...statePart,
            tags: [...statePart.tags, action.payload],
          };
          case TAG_REMOVE:
              const tags = statePart.tags.filter((tag) => tag !== action.payload);
              return {
                ...statePart,
                tags,
            }
          default:
            return statePart;
              }
}
