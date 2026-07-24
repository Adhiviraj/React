import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(null);

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
                );
                
                if (!response.ok) {
                    throw new Error("Failed to fetch exchange rates");
                }

                const result = await response.json();
                setData(result[currency]);
                setLastUpdated(result.date);
            } catch (err) {
                setError(err.message || "An unexpected error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchCurrencyData();
    }, [currency]);

    return { data, loading, error, lastUpdated };
};

export default useCurrencyInfo;