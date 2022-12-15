import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks]= useState([])

useEffect(()=>{
  fetch("http://localhost:3001/stocks")
  .then(res=>res.json())
  .then(data=>setStocks(data));
}, [])

function handlePortfolioChange(stateOfStock){
  return stateOfStock;
}


  // Return JSX
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks}  onToggle={handlePortfolioChange}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioState={handlePortfolioChange}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
