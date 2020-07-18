import React, { Component } from 'react';
import Taskboard from '../Taskboard/index';
import CommonModal from '../../components/Modal/index';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Provider } from 'react-redux';
import configStore from '../../redux/configStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading/index';

const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Taskboard />
        <ToastContainer />
        <GlobalLoading />
        <CommonModal />
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
