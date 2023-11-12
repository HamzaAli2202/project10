import React from "react";
import { Home } from "./components/Home";
import { Card, CardContent } from "@mui/material";
import "./components/common.css";

function App() {
  return (
    <Card sx={{ height: "100vh", bgcolor: "lightsalmon" }}>
      <CardContent>
        <Home />
      </CardContent>
    </Card>
  );
}

export default App;
