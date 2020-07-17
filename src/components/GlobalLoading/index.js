import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import iconLoading from '../../assets/img/loading.gif';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.globalLoading}>
          <img className={classes.icon} src={iconLoading} alt="loading" />
        </div>
      );
    }
    return xhtml;
  }
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
};
const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
