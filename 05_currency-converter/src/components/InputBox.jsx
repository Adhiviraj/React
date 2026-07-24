import React, { useId } from 'react';

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) => {
    const amountInputId = useId();

    const handleAmountChange = (e) => {
        let value = Number(e.target.value);
        // Prevent negative values
        if (value < 0) value = Math.abs(value);
        
        if (onAmountChange) {
            onAmountChange(value);
        }
    };

    return (
        <div className={`glass-input p-4 rounded-xl flex flex-col sm:flex-row gap-4 ${className}`}>
            <div className="w-full sm:w-1/2">
                <label htmlFor={amountInputId} className="text-white/70 text-sm font-medium mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    type="number"
                    min="0"
                    step="any"
                    placeholder="0.00"
                    disabled={amountDisable}
                    value={amount === 0 ? '' : amount}
                    onChange={handleAmountChange}
                    className="w-full bg-transparent outline-none text-white text-2xl font-semibold placeholder-white/30 disabled:opacity-50 transition-all"
                />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col sm:items-end justify-between">
                <p className="text-white/70 text-sm font-medium mb-2 sm:mb-0 sm:text-right w-full">
                    Currency Type
                </p>
                <select
                    className="rounded-lg px-3 py-2 bg-slate-800/80 text-white cursor-pointer outline-none border border-white/10 focus:border-blue-400 w-full sm:w-3/4 backdrop-blur-md uppercase text-sm font-medium transition-colors"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default InputBox;