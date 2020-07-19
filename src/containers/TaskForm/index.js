import React, { Component } from 'react';
import styles from './styles';
import { Box, Button, Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/task';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../../components/FormHelper/TextField';
import validate from './validate';

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    const { taskActionCreators, taskEditing } = this.props;
    const { addTask } = taskActionCreators;
    const { title, description } = data;
    addTask(title, description);
  };

  render() {
    const {
      classes,
      modalActionCreators,
      handleSubmit,
      invalid,
      submitting,
      taskEditing,
    } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            <Field
              id="title"
              label="Tiêu đề"
              className={classes.textField}
              style={{ marginRight: 10 }}
              name="title"
              component={renderTextField}
              value={taskEditing ? taskEditing.title : ''}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              label="Mô tả"
              className={classes.textField}
              name="description"
              component={renderTextField}
              value={taskEditing ? taskEditing.description : ''}
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" mt={2} flexDirection="row-reverse">
              <Box ml={1}>
                <Button variant="contained" onClick={hideModal}>
                  Cancel
                </Button>
              </Box>
              <Box>
                <Button
                  disabled={submitting || invalid}
                  variant="contained"
                  type="submit"
                  color="primary"
                >
                  OK
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  taskEditing: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    addTask: PropTypes.func,
  }),
};

const mapStateToProps = (state) => {
  return {
    taskEditing: state.task.taskEditing,
    initialValues: {
      title: state.task.taskEditing ? state.task.taskEditing.title : null,
      description: state.task.taskEditing
        ? state.task.taskEditing.description
        : null,
    },
  };
};

const mapDispatchToProps = (dispatch) => ({
  modalActionCreators: bindActionCreators(modalActions, dispatch),
  taskActionCreators: bindActionCreators(taskActions, dispatch),
});

const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
  form: FORM_NAME,
  enableReinitialize: true,
  validate,
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withStyles(styles),
  withReduxForm,
  withConnect,
)(TaskForm);
