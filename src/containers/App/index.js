import React, { Component } from 'react';
import Taskboard from '../Taskboard/index';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Provider } from 'react-redux';
import configStore from '../../redux/configStore';

const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Taskboard />
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
