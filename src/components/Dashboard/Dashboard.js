import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import MediaCard from "../Card/Card";
import Header from "../Header/Header";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12} sm={6}>
        <MediaCard />
      </Grid>
      <Grid item xs={12} sm={6}>
        <MediaCard />
      </Grid>
      <Grid item xs={12} sm={3}>
        <MediaCard />
      </Grid>
      <Grid item xs={12} sm={3}>
        <MediaCard />
      </Grid>
      <Grid item xs={12} sm={3}>
        <MediaCard />
      </Grid>
      <Grid item xs={12} sm={3}>
        <MediaCard />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
