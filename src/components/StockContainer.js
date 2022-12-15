import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onToggle }) {

  const stocksToDisplay= stocks.map(stock=>{
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
