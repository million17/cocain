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
