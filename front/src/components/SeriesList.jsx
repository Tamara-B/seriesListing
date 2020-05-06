import React, { useState, useEffect } from "react";
import Series from "./Series";

import "./style.css";

import axios from "axios";

class SeriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: null,
    };
    this.getSeries = this.getSeries.bind(this);
  }

  componentDidMount() {
    this.getSeries();
  }

  getSeries() {
    // Send the request
    axios
      .get("http://api.tvmaze.com/shows?page=1")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        this.setState({
          series: data,
        });
      });
  }

  render() {
    return (
      <>
        <p className="page-title">Series Listing App</p>
        <div className="SeriesList" style={{ padding: 30 }}>
          {this.state.series ? (
            this.state.series.map((seri, key) => {
              return <Series series={seri} key={key} />;
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </>
    );
  }
}

export default SeriesList;
