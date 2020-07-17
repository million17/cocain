import React, { Component } from 'react';
import styles from './styles';
import { withStyles, Button, Box, Grid, Modal } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { PropTypes } from 'prop-types';
import ClearIcon from '@material-ui/icons/Clear';

class TaskForm extends Component {
  render() {
    const { classes, open, handleClose } = this.props;
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.modal}>
          <div className={classes.headerModal}>
            <span className={classes.title}>Add New Task</span>
            <ClearIcon onClick={handleClose} className={classes.icon} />
          </div>
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
                    <Button variant="contained" onClick={handleClose}>
                      Cancel
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      onClick={handleClose}
                      color="primary"
                    >
                      OK
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </form>
        </div>
      </Modal>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func,
};
export default withStyles(styles)(TaskForm);
