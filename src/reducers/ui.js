import * as constants from './../commons/contants';

const initState = {
  showLoading: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case constants.SHOW_LOADING:
      return {
        ...state,
        showLoading: true,
      };
    case constants.HIDE_LOADING:
      return {
        ...state,
        showLoading: false,
      };
    default:
      return state;
  }
};
export default reducer;
