import React, { Component } from 'react';
import styles from './styles';
import { Box, Button, Grid, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import * as modalActions from '../../actions/modal';
import { connect } from 'react-redux';

class TaskForm extends Component {
  render() {
    const { classes, modalActionCreators } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form>
        <Grid container>
          <Grid item md={12}>
            <TextField
              className={classes.textField}
              style={{ marginRight: 10 }}
              id="standard-basic"
              label="Name"
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              className={classes.textField}
              id="standard-basic1"
              label="Description"
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
                <Button variant="contained" color="primary">
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
  onClose: PropTypes.func,
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch, props) => ({
  modalActionCreators: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(TaskForm);
