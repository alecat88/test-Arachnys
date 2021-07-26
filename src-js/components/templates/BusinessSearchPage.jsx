// This page will manage API
import * as React from "react";
import { useState, useEffect } from 'react';
import SearchPage from "../organisms/SearchPage";
import "./BusinessSearchPage.css";
import { fetchBusinessData } from '../../Api/businessApi';
import { useDispatch, useSelector } from 'react-redux';

function BusinessSearchPage() {
  const [searchText, setSearchText] = useState("");
  // const [businesses, setBusinesses] = useState([]);
  const [textObject, setTextObject] = useState({
    "Results count": 1,
    "Average risk" : 97,
  });
  const BusinessData = useSelector((state) => state.businessData.businesses);
    const businesses = BusinessData;

  //Fetch API on load
  const dispatch = useDispatch();

  let onSearchTextChange = text => {
    console.log("BusinessSearchPage", text)
    setSearchText(text);
  }
    useEffect(()=>{
        // async function getBusiness() {
        //   let response = await fetchBusinessData();
        //   return response;
        // }
        // const data = getBusiness();
        // // setBusinesses(data);
        // setBusinesses([]);
        // console.log("set business", data)
        dispatch(fetchBusinessData());
    },[searchText, dispatch]);

    useEffect(()=>{
      //Calcolate average and number
      const totalCount = businesses.length;
      let averageRiskScore = 0;
      businesses.map(item => averageRiskScore+=item.risk_score);
      if (totalCount > 0) {
        averageRiskScore = averageRiskScore/totalCount;
      }
      setTextObject({
        "Results count": totalCount,
        "Average risk" : averageRiskScore,
      });
    },[businesses]);

  return (
    <SearchPage onSearchTextChange={onSearchTextChange} textObject={textObject} />
  );
}

export default BusinessSearchPage;