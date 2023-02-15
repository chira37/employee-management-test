import Grid from "@mui/material/Grid";
import React from "react";
import GridItem from "../GridItem";

const GridView = () => {
  return (
    <Grid container spacing={5}>
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
    </Grid>
  );
};

export default GridView;
