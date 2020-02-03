import React from 'react';
import GoogleMap from './Container/Components/GoogleMap/GoogleMap';
import TopDetails from './Container/Components/Details/TopDetails';
import BottomDetails from './Container/Components/Details/BottomDetails';
import Carousel from './Container/Components/Carousel/Carousel';
import Updates from './Container/Components/Updates/Updates';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MainLogo from './MainLogo.svg';

const useStyles = makeStyles(theme => ({
  maincontainer: {
    background: '#05121D',
  },
  containerWrap: {
    maxWidth: '1440px',
    margin: '0 auto',
    background: '#05121D',
    padding: '20px 80px 20px 80px',
    minHeight: 'calc(100vh - 60px)',
    [theme.breakpoints.down('sm')]:{
      padding:'0',
    },
  },
  mainnavWrap:{
    background: '#19242F',
  },
  navbarWrap: {
    maxWidth: '1280px',
    margin: '0 auto',
    boxShadow: '0px 14px 18px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 80px',
    '& img': {
      transform: 'translate(-15px, 0px)',
    },
    '& button': {
      background: 'rgba(0, 174, 239, 0.15)',
      border: '1.5px solid #00AEEF',
      fontWeight: 'bold',
      boxSizing: 'border-box',
      color: '#FFFFFF',
      borderRadius: '100px',
      padding: '9px 25px',
      fontFamily: ' Open Sans',
      '& span': {
        lineHeight: '1'
      }
    },
    [theme.breakpoints.down('sm')]:{
      padding: '8px 20px',
      '& img':{
        maxWidth: '160px',
      },
      '& button': {
        fontSize:'12px',
      },
  },
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  sliderSection:{
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.mainWrap}>
      <div className={classes.maincontainer}>
        <div className={classes.mainnavWrap}>
          <div className={classes.navbarWrap}>
            <img src={MainLogo} />
            <Button variant="contained">GET THE APP</Button>
          </div>
        </div>
        <Grid container className={classes.containerWrap}>
          <Grid item lg={3} md={3} sm={12}>
            <GoogleMap />
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <TopDetails />
          </Grid>
          <Grid item lg={3} md={3} sm={12}>
            <div className={classes.sliderSection}>
            <Carousel />
            <Updates />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
