import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import modalActions from '../../actions/modal';
import styles from './styles';
import PropTypes from 'prop-types';
class Modal extends Component {
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
          <form></form>
        </div>
      </Modal>
    );
  }
}
Modal.propTyps = {
  open: PropTypes.bool,
  classes: PropTypes.object,
  handleChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  open: state.modal.showModal,
  component: state.modal.component,
});

const mapDispatchToProps = (dispatch, props) => ({
  modalActions: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(Modal);
