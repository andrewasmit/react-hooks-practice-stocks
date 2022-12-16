import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onToggle, filterChoice }) {

  const stocksToDisplay= stocks
  .filter(stock=>{
     if(filterChoice === ""){
      return stock
     } if (stock.type===filterChoice){
      return stock
     } else return false
    })
  .map(stock=>{
    return <Stock 
              key={stock.id}
              myKey={stock.id}
              name={stock.name}
              price={stock.price}
              ticker={stock.ticker}
              onToggle={onToggle}
            />
  })


  // Return JSX
  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay}
    </div>
  );
}

export default StockContainer;
