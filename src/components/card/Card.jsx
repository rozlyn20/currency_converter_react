import './card.css'
import { useEffect, useState } from "react";
import { currency } from '../../config/currencyData';
function Card() {

    const[amount,setAmount]=useState(0);
    const[convAmt,setConvAmt]=useState(0);
    const[from,setFrom]=useState("usd");
    const[to,setTo]=useState("inr");
    
async function handleConvert() {

  try {
    const API_KEY = import.meta.env.VITE_API_KEY;
    

    const fromCode = from.toUpperCase();
    const toCode = to.toUpperCase();

    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCode}`
    );

    const data = await response.json();

    const rate = data.conversion_rates[toCode];

    const converted =Number(amount) * rate;

    setConvAmt(converted);

  } catch (error) {
    console.error(error);
  }
 }

    return (
        <>
            <div className="container">
                <div className="content">
                    <form className="mt-3">
                        <label htmlFor="currency">Convert currency from </label>
                        <select className="fields" value={from} onChange={(e)=>setFrom(e.target.value)}>
                            {currency.map((item)=>(<option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select><br />

                    <label htmlFor="currency">Convert currency to </label>
                    <select className="fields" value={to} onChange={(e)=>setTo(e.target.value)}>
                       {currency.map((item)=>(<option key={item.value} value={item.value}>
                        {item.label}
                       </option>))}
                    </select><br/>
                    <h5 >Amount: </h5>
                    <input className='fields'type='number' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                    <h5>Converted Amount</h5>
                    <p className='conv-amt'>{convAmt ? convAmt.toFixed(2) : 0} </p>
                    <button type="button" disabled={amount==0} onClick={handleConvert}>Convert</button>
                   
                </form>

            </div>
        </div >
        </>
    )
}


export default Card