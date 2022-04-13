import { actionTypes } from './actions';

const initialState = {
  tags: [],
  selectedTags: [],
  quotes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EXTRACT_QUOTES:
      return state;
    default:
      return state;
  }
};

export default reducer;
