import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks]= useState([])
  const [filterChoice, setFilterChoice] =useState("")
  const [alphab, setAlphab] = useState(false)
  


useEffect(()=>{
  fetch("http://localhost:3001/stocks")
  .then(res=>res.json())
  .then(data=>setStocks(data.map(stock=>{
    return {
        id: stock.id,
        ticker: stock.ticker,
        name: stock.name,
        price: stock.price,
        type: stock.type,
        inPortfolio: false
    }
  })));
}, [])

function handlePortfolioToggle(stockId){
    const newStockList = stocks.map(stock=>{
      if (stock.id === stockId){
        return{
          id: stock.id,
          ticker: stock.ticker,
          name: stock.name,
          price: stock.price,
          type: stock.type,
          inPortfolio: stock.inPortfolio === false ? true : false
        }  
      } else return stock;
    })
    setStocks(newStockList);
}

function handleFilter(filterChoice){
  setFilterChoice(filterChoice)
  // console.log(filterChoice)
}
console.log("In Main: DATA ", stocks)
console.log("In Main", alphab)


  // Return JSX
  return (
    <div>
      <SearchBar onFilterChange={handleFilter} alphab={alphab} setAlphab={setAlphab}/>
      <div className="row">
        <div className="col-8">
          <StockContainer filterChoice={filterChoice} stocks={stocks} onToggle={handlePortfolioToggle} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={stocks} onToggle={handlePortfolioToggle}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
