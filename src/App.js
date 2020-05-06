import React from "react";
import Grid from "@material-ui/core/Grid";

import { Dashboard, Sidebar, Header } from "./components";

import { fetchApod } from "./api/nasa.js";

class App extends React.Component {
  state = {
    apodData: {},
  };

  async componentDidMount() {
    const fetchedApod = await fetchApod();
    // console.log(fetchedApod.data);
    this.setState({ apodData: fetchedApod.data });
  }
  render() {
    const { apodData } = this.state;

    return (
      <div className="">
        <Grid container spacing={2}>
          <Dashboard data={apodData} />
        </Grid>
      </div>
    );
  }
}

export default App;
