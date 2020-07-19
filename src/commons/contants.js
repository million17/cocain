export const API_ENPOINT = 'http://localhost:3000';

export const STATUSES = [
  {
    value: 0,
    label: 'READY',
  },
  {
    value: 1,
    label: 'INPROGRESS',
  },
  {
    value: 2,
    label: 'COMPLETED',
  },
];

/*Task contsants
 */
export const FETCH_TASK = 'FETCH_TASK';
export const FETCH_TASK_SUCCESS = 'FETCH_TASK_SUCCESS';
export const FETCH_TASK_FAIL = 'FETCH_TASK_FAIL';

/*Status code
 */
export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATE: 202,
};

/**
 * Loading
 */
export const SHOW_LOADING = 'GLOBAL_SHOW_LOADING';
export const HIDE_LOADING = 'GLOBAL_HIDE_LOADING';

/**
 * Filter Task
 */
export const FILTER_TASK = 'FILTER_TASK';
export const FILTER_TASK_SUCCESS = 'FILTER_TASK_SUCCESS';
export const FILTER_TASK_FAIL = 'FILTER_TASK_FAIL';

/**
 * Modal
 */
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const CHANGE_MODAL_CONTENT = 'CHANGE_MODAL_CONTENT';
export const CHANGE_MODAL_TITLE = 'CHANGE_MODAL_TITLE';

/**
 * Task
 */
export const ADD_TASK = 'ADD_TASK';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_FAIL = 'ADD_TASK_FAIL';

/**
 * Edit Task
 */
export const SET_TASK_EDITING = 'SET_TASK_EDITING';
