import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Updates.css'
import { classes } from 'istanbul-lib-coverage';
import { style } from '@material-ui/system';
const useStyles = makeStyles(theme => ({
  updateWrap: {
    fontFamily: 'Open Sans',
    background: '#19242F',
    boxShadow: '0px 14px 18px rgba(0, 0, 0, 0.15)',
    borderRadius: ' 4px',
    padding: '20px 37px 20px 27px',
    marginTop: '20px',
    flex: '4',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    '& span': {
      color: '#FFFFFF',
      fontWeight: '800',
      fontSize: '24px',
      lineHeight: '33px'
    },
    '& minText': {
      color: '#00AEEF',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#05121D',
    },
  },
}));
function Updates() {
  const classes = useStyles();
  return (
    <div className={classes.updateWrap}>
      <span>Updates</span>
      <ul className="d-flex">
        <li >
          <h2>7 min ago</h2>
          <p>Here is an update that will show up if admins post an update from the web portal</p>
        </li>
        <li >
          <h2>7 min ago</h2>
          <p>Here is a new update that will show up if admins post something</p>
        </li>
      </ul>
    </div>
  );
};
export default Updates;