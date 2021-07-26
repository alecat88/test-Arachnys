// This page will manage API
import * as React from "react";
import { useState, useEffect } from 'react';
import SearchPage from "../organisms/SearchPage";
import "./BusinessSearchPage.css";
import { fetchBusinessData } from '../../Api/businessApi';
import { useDispatch, useSelector } from 'react-redux';

function BusinessSearchPage() {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [textObject, setTextObject] = useState({
    "Results count": 1,
    "Average risk": 97,
  });
  const BusinessData = useSelector((state) => state.businessData.businesses);
  const businesses = BusinessData;

  //Fetch API on load
  const dispatch = useDispatch();

  let onSearchTextChange = text => {
    setSearchText(text);
  }

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchBusinessData({ searchText }));
  }, [searchText, dispatch]);

  useEffect(() => {
    //Calcolate average and number
    const totalCount = businesses.length;
    let averageRiskScore = 0;
    businesses.map(item => averageRiskScore += item.risk_score);
    if (totalCount > 0) {
      averageRiskScore = Math.round(averageRiskScore / totalCount * 10) / 10;
    } else {
      averageRiskScore = "N/A";
    }
    setTextObject({
      "Results count": totalCount,
      "Average risk": averageRiskScore,
    });
    setIsLoading(false);
  }, [businesses]);

  return (
    <SearchPage onSearchTextChange={onSearchTextChange} textObject={textObject} result={businesses} isLoading={isLoading} />
  );
}

export default BusinessSearchPage;