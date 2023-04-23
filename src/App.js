import { CssBaseline, Grid } from '@material-ui/core';
import React from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container sx={{ width: '10%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

App.propTypes = {};

export default App;
