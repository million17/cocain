import React, { Component } from 'react';
import { withStyles, Typography, Fab } from '@material-ui/core';
import styles from './styles';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

class TaskItem extends Component {
  render() {
    const { status, task, classes, onClickEdit } = this.props;
    return (
      <Card key={task.id} className={classes.card} style={{ marginTop: 20 }}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            size="small"
            color="primary"
            aria-label="Edit"
            onClick={onClickEdit}
          >
            <EditIcon fontSize="small" />
          </Fab>
          <Fab size="small" color="primary" aria-label="Delete">
            <DeleteIcon fontSize="small" />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

TaskItem.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  status: PropTypes.object,
};

export default withStyles(styles)(TaskItem);
