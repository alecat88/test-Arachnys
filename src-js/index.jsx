import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store/index';

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
    <Provider store={store}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Search prototype</Typography>
        </Toolbar>
      </AppBar>
      <Box mt={1}>
       <BusinessSearchPage />
      </Box>
      </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
