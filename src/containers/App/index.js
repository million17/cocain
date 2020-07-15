import React, { Component } from 'react';
import Taskboard from '../Taskboard/index';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';



class App extends Component {
  render() {
    return (
      <>
        <Taskboard />
      </>
    );
  }
}

export default withStyles(styles)(App);
