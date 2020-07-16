import { toast } from 'react-toastify';

let message = null;
export const toastError = (err) => {
  if (typeof err === 'object' && err.message) {
    ({ message } = err);
  }
  if (message !== null && message !== 'undefind' && message !== '') {
    toast.error(message);
  }
};

export const toastSuccess = (data) => {
  if (typeof data === 'object' && data.message) {
    ({ message } = data);
  }
  if (message !== null && message !== 'undefind' && message !== '') {
    toast.success(message);
  }
};
