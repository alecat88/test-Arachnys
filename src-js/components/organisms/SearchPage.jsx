//General SearchPage
import * as React from "react";
import {
  CircularProgress,
  Grid,
} from "@material-ui/core";
import SearchBar from "../atoms/SearchBar";
import ResultCard from "../atoms/ResultCard";
import HorizontalSplitText from "../atoms/HorizontalSplitText";
import "./SearchPage.css";

function SearchPage({ onSearchTextChange, textObject, result, isLoading }) {
  return (
    <Grid
      alignItems="center"
      container
      direction="column"
      justify="center"
      spacing={3}
    >
      <Grid item md={6} sm={9} xs={12}>
        <SearchBar onChange={onSearchTextChange} />
        {isLoading && <CircularProgress className="CircularProgress" />}
      </Grid>
      <Grid item md={6} sm={9} xs={12}>
        <HorizontalSplitText textObject={textObject} />
      </Grid>
      <Grid item md={6} sm={9} xs={12}>
        {result.map(item => <ResultCard item={item} key={item.id} classes="margin-sm" />)}
      </Grid>
    </Grid>
  );
}

export default SearchPage;