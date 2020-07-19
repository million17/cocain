const validate = (values) => {
  const error = {};
  const { title, description } = values;
  if (!title) {
    error.title = 'Vui lòng nhập tiêu đề';
  } else if (title.length < 5 && title.trim()) {
    error.title = 'Tiêu đề phải trên 5 kí tự';
  }

  if (!description) {
    error.description = 'Vui lòng nhập mô tả';
  } else if (description.length < 5 && description.trim()) {
    error.description = 'Mô tả phải trên 5 kí tự';
  }

  return error;
};
export default validate;
