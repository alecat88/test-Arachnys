import * as React from "react";
import {
  TextField,
} from "@material-ui/core";
import "./SearchBar.css";

function SearchBar({onChange}) {
    let onInputChangeHandler = event => {
        onChange(event.target.value)
    };
    
  return (
      <TextField label="Search" onChange={onInputChangeHandler} />
  );
};

export default SearchBar;