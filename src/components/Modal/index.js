import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Modal } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modal';
import styles from './styles';
import ClearIcon from '@material-ui/icons/Clear';
import PropTypes from 'prop-types';

class CommonModal extends Component {
  render() {
    const { classes, open, component, modalActionCreators, title } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={hideModal}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.modal}>
          <div className={classes.headerModal}>
            <span className={classes.title}>{title}</span>
            <ClearIcon onClick={hideModal} className={classes.icon} />
          </div>
          {component}
        </div>
      </Modal>
    );
  }
}

Modal.propTyps = {
  open: PropTypes.bool,
  classes: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  component: PropTypes.func,
  title: PropTypes.string,
};

const mapStateToProps = (state) => ({
  open: state.modal.showModal,
  component: state.modal.component,
  title: state.modal.title,
});

const mapDispatchToProps = (dispatch, props) => ({
  modalActionCreators: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(CommonModal);
