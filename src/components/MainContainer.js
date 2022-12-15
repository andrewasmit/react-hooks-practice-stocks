import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks]= useState([])
  const [portfolio, setPortfolio] = useState([]);

useEffect(()=>{
  fetch("http://localhost:3001/stocks")
  .then(res=>res.json())
  .then(data=>setStocks(data));
}, [])

function handlePortfolioToggle(idOfToggledStock){
  console.log("In Main: " , idOfToggledStock)
  const addedStock = stocks.filter(stock=>stock.id===idOfToggledStock)
  setPortfolio(addedStock)
}


  // Return JSX
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks}  onToggle={handlePortfolioToggle}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={stocks} portfolio={portfolio} portfolioState={handlePortfolioToggle}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
