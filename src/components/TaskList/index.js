import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import TaskItem from './../TaskItem/index';
import PropTypes from 'prop-types';

class TaskList extends Component {
  render() {
    const { classes, tasks, status, onClickEdit } = this.props;
    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box m={1}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map((task) => {
            return (
              <TaskItem
                onClickEdit={() => onClickEdit(task)}
                task={task}
                status={status}
                key={task.id}
              />
            );
          })}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object,
  tasks: PropTypes.array,
  onClickEdit: PropTypes.func,
};
export default withStyles(styles)(TaskList);
