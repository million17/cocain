import * as constants from './../commons/contants';

export const showModal = () => ({
  type: constants.SHOW_MODAL,
});

export const hideModal = () => ({
  type: constants.HIDE_MODAL,
});

export const changeModalTitle = (title) => ({
  type: constants.CHANGE_MODAL_TITLE,
  payload: {
    title,
  },
});

export const changeModalContent = (component) => ({
  type: constants.CHANGE_MODAL_CONTENT,
  payload: {
    component,
  },
});
