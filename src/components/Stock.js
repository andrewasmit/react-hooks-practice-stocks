import React from "react";

function Stock({ name, price, ticker, myKey, onToggle }) {


  function handleStockClick(){
    console.log('Toggle Clicked for # ', myKey);
    onToggle(myKey);
  }



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
