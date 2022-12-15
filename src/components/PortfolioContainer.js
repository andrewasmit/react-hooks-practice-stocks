import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio }) {

const portfolioStocksToDisplay= portfolio.map(stock=>{
  return  <Stock 
              key={stock.id}
              myKey={stock.id}
              name={stock.name}
              price={stock.price}
              ticker={stock.ticker}
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
