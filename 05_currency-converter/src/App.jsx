import React, { useState, useCallback, useMemo } from 'react';
import { ArrowRightLeft, AlertCircle, TrendingUp } from 'lucide-react';
import { InputBox, Button, Navbar, Footer, Loader } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css';

function App() {
    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState('usd');
    const [to, setTo] = useState('inr');
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [isSwapping, setIsSwapping] = useState(false);

    // Fetch live data based on 'from' currency
    const { data: currencyInfo, loading, error, lastUpdated } = useCurrencyInfo(from);

    // Memoize options to avoid re-sorting on every render
    const options = useMemo(() => {
        if (!currencyInfo) return [];
        return Object.keys(currencyInfo).sort();
    }, [currencyInfo]);

    // Calculate conversion
    const convert = useCallback(() => {
        if (currencyInfo && currencyInfo[to]) {
            const result = amount * currencyInfo[to];
            // Format to 4 decimal places maximum
            setConvertedAmount(Number(result.toFixed(4)));
        }
    }, [amount, currencyInfo, to]);

    // Handle swap with visual rotation
    const swap = () => {
        setIsSwapping(true);
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
        
        setTimeout(() => setIsSwapping(false), 300); // Matches animation duration
    };

    return (
        <div 
            className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col relative pt-16"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80')`,
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-900/80 z-0"></div>

            <Navbar />

            <main className="flex-grow flex flex-col justify-center items-center p-4 z-10 animate-fade-in">
                <div className="w-full max-w-md mx-auto glass rounded-2xl p-6 sm:p-8">
                    
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                            <TrendingUp className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">Convert</h2>
                            <p className="text-white/60 text-sm">Live Exchange Rates</p>
                        </div>
                    </div>

                    {error ? (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-start gap-3 mb-6">
                            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-red-200">{error}</p>
                        </div>
                    ) : (
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                convert();
                            }}
                        >
                            <div className="w-full mb-1">
                                <InputBox
                                    label="From"
                                    amount={amount}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setFrom(currency)}
                                    selectCurrency={from}
                                    onAmountChange={(value) => setAmount(value)}
                                />
                            </div>
                            
                            <div className="relative w-full h-1 my-4 flex items-center justify-center">
                                <button
                                    type="button"
                                    className={`
                                        absolute bg-blue-600 hover:bg-blue-500 text-white p-2.5 rounded-full 
                                        shadow-[0_0_15px_rgba(37,99,235,0.5)] border-4 border-slate-900 
                                        transition-all duration-300 transform hover:scale-110 z-10
                                        ${isSwapping ? 'rotate-180' : 'rotate-0'}
                                    `}
                                    onClick={swap}
                                    aria-label="Swap currencies"
                                >
                                    <ArrowRightLeft className="w-5 h-5" />
                                </button>
                                <div className="w-full h-[1px] bg-white/10 absolute top-1/2 -translate-y-1/2"></div>
                            </div>
                            
                            <div className="w-full mt-1 mb-6">
                                <InputBox
                                    label="To"
                                    amount={convertedAmount}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setTo(currency)}
                                    selectCurrency={to}
                                    amountDisable
                                />
                            </div>

                            <Button type="submit" disabled={loading || !amount}>
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        Calculating...
                                    </span>
                                ) : (
                                    `Convert ${from.toUpperCase()} to ${to.toUpperCase()}`
                                )}
                            </Button>
                        </form>
                    )}

                    {/* Meta Data Section */}
                    <div className="mt-6 flex flex-col items-center justify-center border-t border-white/10 pt-4 text-center">
                        {loading && !error ? (
                            <Loader text="Fetching live rates..." />
                        ) : (
                            <>
                                <p className="text-white/80 font-medium tracking-wide">
                                    1 {from.toUpperCase()} = {currencyInfo?.[to] ? Number(currencyInfo[to]).toFixed(4) : "0.00"} {to.toUpperCase()}
                                </p>
                                {lastUpdated && (
                                    <p className="text-white/40 text-xs mt-1">
                                        Rates valid as of: {lastUpdated}
                                    </p>
                                )}
                            </>
                        )}
                    </div>

                </div>
            </main>

            <Footer zIndex="z-10" />
        </div>
    );
}

export default App;