import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, portfolioState }) {

const portfolioStocksToDisplay= stocks.map(stock=>{
  return portfolioState ? <Stock 
                          key={stock.id}
                          myKey={stock.id}
                          name={stock.name}
                          price={stock.price}
                          ticker={stock.ticker}
                        /> : null
})

console.log("IN PORTFOLIO" , portfolioState)

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocksToDisplay}
    </div>
  );
}

export default PortfolioContainer;
