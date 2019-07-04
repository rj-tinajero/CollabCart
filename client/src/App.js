import React, { Fragment } from 'react';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <NavBar />
    <main className={classes.main}>
      <Landing />
    </main>
  </Fragment>
);

export default withStyles(styles)(App);