import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import BusinessSearchPage from "./components/templates/BusinessSearchPage";
import "./style.css";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Search prototype</Typography>
        </Toolbar>
      </AppBar>
      <Box mt={1}>
       <BusinessSearchPage />
      </Box>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
