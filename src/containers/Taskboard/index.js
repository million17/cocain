import React, { Component } from 'react';
import { withStyles, Button } from '@material-ui/core';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../commons/contants';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as taskActions from '../../actions/task';
import { PropTypes } from 'prop-types';

const listTask = [
  {
    id: 1,
    title: 'Read Docs React Js',
    description: 'Read Documents React Js fro developer',
    status: 0,
  },
  {
    id: 2,
    title: 'Read Docs React Native',
    description: 'Read Documents React Native for app',
    status: 2,
  },
  {
    id: 3,
    title: 'Learn Java Web',
    description: 'Read Documents Java Web for developer',
    status: 1,
  },
];

class Taskboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value,
          );
          return (
            <TaskList tasks={taskFiltered} status={status} key={status.value} />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  renderForm = () => {
    const { open } = this.state;
    let xhtml = null;

    xhtml = <TaskForm open={open} handleClose={this.handleClose} />;

    return xhtml;
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button variant="contained" color="primary" onClick={this.openForm}>
          <AddIcon /> Thêm công việc
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classess: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
  }),
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard),
);
