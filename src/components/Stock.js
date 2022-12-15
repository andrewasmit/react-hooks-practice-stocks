import React, {useState} from "react";

function Stock({ name, price, ticker, onToggle }) {

  const [inPortfolio, setInPortfolio] = useState(false)

  function handleStockClick(){
    setInPortfolio(!inPortfolio)
    onToggle(!inPortfolio);
  }

  console.log(name, "in portfolio? ", inPortfolio)

  return (
    <div onClick={handleStockClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
