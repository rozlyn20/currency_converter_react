import { useState, useEffect } from "react";
import { currency } from '../../config/currencyData';

function Table() {
    const [rates, setRates] = useState(0);

    useEffect(() => {
        async function fetchRates() {
            try {
                const API_KEY = import.meta.env.VITE_API_KEY;

                const response = await fetch(
                    `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`
                );

                const data = await response.json();

                if (data.result === "success") {
                    setRates(data.conversion_rates);
                }

            } catch (error) {
                console.error("Error fetching rates:", error);
            }
        }
        fetchRates();
    }, []);


    return (<>
        <div className="table-container">
            <table>
                <thead>
                    <tr className="yo">
                        <th>Country</th>
                        <th>"Relative Rate (wrt USD)" </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(rates).map(([code, value]) => {
                        const currencyInfo = currency.find(
                            (item) => item.value.toUpperCase() === code
                        ); return (
                            <tr key={code}>
                                <td>{currencyInfo ? currencyInfo.label : code}</td>
                                <td>{value}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>);
} export default Table