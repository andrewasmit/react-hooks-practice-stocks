import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onToggle }) {

const portfolioStocksToDisplay= stocks.map(stock=>{
  return  stock.inPortfolio === false ? null :
          <Stock 
              key={stock.id}
              myKey={stock.id}
              name={stock.name}
              price={stock.price}
              ticker={stock.ticker}
              onToggle={onToggle}
          />
})


  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocksToDisplay}
    </div>
  );
}

export default PortfolioContainer;
