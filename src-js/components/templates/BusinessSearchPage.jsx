// This page will manage API
import * as React from "react";
import SearchPage from "../organisms/SearchPage";
import "./BusinessSearchPage.css";

function BusinessSearchPage() {
  let onSearchTextChange = text => {
    console.log("BusinessSearchPage", text)
  }
  let textObject = {
    "Results count": 1,
    "Average risk" : 97,
  }
  return (
    <SearchPage onSearchTextChange={onSearchTextChange} textObject={textObject} />
  );
}

export default BusinessSearchPage;