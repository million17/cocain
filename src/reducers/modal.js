import * as constants from './../commons/contants';

const initState = {
  showModal: false,
  title: '',
  component: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case constants.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case constants.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    case constants.CHANGE_MODAL_TITLE:
      const { title } = action.payload;
      return {
        ...state,
        title,
      };
    case constants.CHANGE_MODAL_CONTENT:
      const { component } = action.payload;
      return {
        ...state,
        component,
      };
    default:
      return state;
  }
};
export default reducer;
