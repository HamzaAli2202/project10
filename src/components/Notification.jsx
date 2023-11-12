import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid, Alert } from "@mui/material";
import NotificationsOffOutlinedIcon from "@mui/icons-material/NotificationsOffOutlined";

export const Notification = ({ msg, mytime }) => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    setIsShow(true);

    setTimeout(() => {
      setIsShow(false);
    }, mytime);
  }, [msg]);

  return (
    <Card sx={{ height: 200 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h2>Notification</h2>
          </Grid>
          <Grid item xs={4}>
            <NotificationsOffOutlinedIcon />
          </Grid>
          <Grid item xs={12}>
            {isShow && (
              <Alert sx={{ fontWeight: "bolder" }} severity="success">
                {msg}
              </Alert>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
