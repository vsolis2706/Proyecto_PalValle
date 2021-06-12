import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Producto from '../components/Producto'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Productos() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Producto/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Producto/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Producto/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Producto/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Producto/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Producto/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Producto/>
        </Grid>
      </Grid>
    </div>
  );
}
