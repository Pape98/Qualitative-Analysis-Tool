import { actionTypes } from './actions';

const initialState = {
  tags: [],
  selectedTag: '',
  quotes: [],
  extractorFormState: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TAGS:
      return { ...state, tags: action.payload };
    case actionTypes.SEARCH_QUOTES:
      return { ...state, quotes: action.payload };
    case actionTypes.SELECT_TAG:
      return { ...state, selectedTag: action.payload };
    case actionTypes.TOGGLE_EXTRACTOR_FORM:
      return {
        ...state,
        extractorFormState: state.extractorFormState ? false : true,
      };
    default:
      return state;
  }
};

export default reducer;
