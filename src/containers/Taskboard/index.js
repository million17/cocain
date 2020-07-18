import React, { Component } from 'react';
import { withStyles, Button, Box } from '@material-ui/core';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../commons/contants';
import TaskList from '../../components/TaskList';
import TaskForm from '../TaskForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as taskActions from '../../actions/task';
import * as modalActions from '../../actions/modal';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import SearchBox from '../../components/SearchBox/index';

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
    fetchListTask(); // Gọi xuống mapDispatchToProps
  }

  loadData = () => {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask(); // Gọi xuống mapDispatchToProps
  };

  renderBoard = () => {
    const { listTask } = this.props;
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

  // renderForm = () => {
  //   const {open} = this.state;
  //   let xhtml = null;
  //
  //   xhtml = <TaskForm open={open} handleClose={this.handleClose}/>;
  //
  //   return xhtml;
  // };

  renderSearchBox = () => {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleChangeFilter} />;
    return xhtml;
  };

  handleChangeFilter = (e) => {
    var value = e.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value); // Gọi xuống mapDispatchToProps
  };

  openForm = () => {
    const { modalActionCreators } = this.props;
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle('Thêm mới công việc');
    changeModalContent(<TaskForm />);
  };

  showToast = () => {
    toast.success('Success !');
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Box mb={1}>
          <Button variant="contained" color="primary" onClick={this.loadData}>
            <AddIcon /> Load Data
          </Button>
        </Box>
        <Button variant="contained" color="primary" onClick={this.openForm}>
          <AddIcon /> Thêm công việc
        </Button>
        <Box mt={1}>
          <Button variant="contained" color="primary" onClick={this.showToast}>
            Notify
          </Button>
        </Box>
        <Box mt={1}>{this.renderSearchBox()}</Box>
        {this.renderBoard()}
        {/*{this.renderForm()}*/}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
  }),
  modalActionCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
  }),
};

const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // Gọi xuống actions xử lý rq
    taskActionCreators: bindActionCreators(taskActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard),
);
