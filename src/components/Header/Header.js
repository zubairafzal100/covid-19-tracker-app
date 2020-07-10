import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  titleLink: {
    color: '#fff',
    fontSize: '18px',
    textDecoration: 'none',
    margin: '0 10px',
  },
  links: {
    color: '#fff',
    fontSize: '18px',
    textDecoration: 'none',
    padding: '4px 12px 6px 12px',
    "&:hover": {
      backgroundColor: 'darkblue',
      borderRadius: '50px',
    }
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <a className={classes.titleLink} href="/">Covid-19 Tracker App by Zubair Afzal</a>
          </Typography>
          <div>
            <a className={classes.links} href="/contact">Contact</a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
