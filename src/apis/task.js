import axiosService from './../commons/axiosService';
import { API_ENPOINT } from './../commons/contants';
import qs from 'query-string';

const url = 'tasks';

export const getList = (params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENPOINT}/${url}${queryParams}`);
};

export const addTask = (data) => {
  return axiosService.post(`${API_ENPOINT}/${url}`, data);
};
