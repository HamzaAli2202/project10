import React, { useState, useEffect } from "react";
import { statusdata, studentsdata } from "../data";
import { Grid, Card, CardContent } from "@mui/material";
import Select from "react-select";
import { Notification } from "./Notification";
import { Resultlist } from "./Resultlist";

export const Home = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Pass");
  const [passdata, setPassdata] = useState([]);
  const [faildata, setFaildata] = useState([]);
  const handleNameChange = (selOpt) => {
    setName(selOpt);
  };

  const handleStatusChange = (selOpt) => {
    setStatus(selOpt.label);
  };

  useEffect(() => {
    if (status == "Pass") {
      setPassdata([...passdata, name]);
    } else {
      setFaildata([...faildata, name]);
    }
    const filtered = data.filter((item) => item.value !== name.value);
    setData(filtered);
  }, [name]);

  useEffect(() => {
    setData(studentsdata);
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Select onChange={handleNameChange} options={data} />
      </Grid>
      <Grid item xs={6}>
        <Select onChange={handleStatusChange} options={statusdata} />
      </Grid>
      <Grid item xs={6}>
        <Notification
          mytime={3000}
          msg={
            status === "Pass"
              ? `Hey ${name.label}, 
        Congatulation For Your great Achievement`
              : `Hi ${name.label}, Please connect with your college`
          }
        />
      </Grid>
      <Grid item xs={6}>
        <Notification
          mytime={5000}
          msg={
            status === "Pass"
              ? `Dear Parent, Your Ward ${name.label} 
        has completed the Certificaion of PickupBiz Learning. We would like to congratulate to you and your Family`
              : ``
          }
        />
      </Grid>
      <Grid item xs={6}>
        <Resultlist studentsdata={passdata} />
      </Grid>
      <Grid item xs={6}>
        <Resultlist studentsdata={faildata} />
      </Grid>
    </Grid>
  );
};
