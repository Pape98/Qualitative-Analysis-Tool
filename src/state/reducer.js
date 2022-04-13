import { actionTypes } from './actions';

const initialState = {
  tags: [],
  selectedTags: [],
  quotes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TAGS:
      return { ...state, tags: action.payload };
    default:
      return state;
  }
};

export default reducer;
