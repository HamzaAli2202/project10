import React from "react";
import { Card, CardContent, Grid } from "@mui/material";

export const Resultlist = ({ studentsdata }) => {
  return (
    <Card sx={{ height: "50vh" }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            Studernt ID
          </Grid>
          <Grid item xs={9}>
            Student Name
          </Grid>
          {studentsdata.map((item) => (
            <React.Fragment>
              <Grid item xs={3}>
                {item.value}
              </Grid>
              <Grid item xs={9}>
                {item.label}
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
