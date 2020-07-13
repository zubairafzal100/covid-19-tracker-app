import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import '../../App.css'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <p className="title-p">Covid-19 Tracker App</p>
          </Typography>
          <div>
            <a className="link" href="https://www.github.com/zubairafzal100/" target="_blank" rel="noopener noreferrer">My Git Profile</a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
