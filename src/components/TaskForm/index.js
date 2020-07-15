import React, { Component } from 'react';
import styles from './styles';
import { withStyles, Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';

class TaskForm extends Component {
    render() {
        const { open, handleClose } = this.props;
        return (
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <TextField
                        style={{ marginRight: 10 }}
                        id="standard-basic"
                        label="Name"
                    />
                    <TextField
                        id="standard-basic"
                        label="Description"
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        color="primary">
                        Cancel
                     </Button>
                    <Button
                        onClick={handleClose}
                        color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}
export default withStyles(styles)(TaskForm);