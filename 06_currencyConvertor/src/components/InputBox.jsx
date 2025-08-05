import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`relative backdrop-blur-sm bg-white/10 border border-white/20 p-6 rounded-2xl text-sm flex transition-all duration-300 hover:bg-white/15 hover:border-white/30 group ${className}`}>
            <div className="w-1/2 pr-4">
                <label htmlFor={amountInputId} className="text-gray-300 mb-3 inline-block font-medium text-xs uppercase tracking-wider">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-2 text-white text-xl font-semibold placeholder-gray-400 focus:placeholder-gray-500 transition-all duration-200"
                    type="number"
                    placeholder="0.00"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    min="0"
                    step="0.01"
                />
                <div className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right pl-4 border-l border-white/10">
                <p className="text-gray-300 mb-3 w-full font-medium text-xs uppercase tracking-wider">Currency</p>
                <select
                    className="rounded-xl px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 cursor-pointer outline-none text-white font-semibold hover:bg-white/20 focus:bg-white/20 focus:border-white/40 transition-all duration-200 appearance-none bg-gradient-to-r from-transparent to-transparent"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    style={{
                        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.7rem center',
                        backgroundSize: '1em'
                    }}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency} className="bg-gray-800 text-white">
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
            
            {/* Floating glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-blue-400/5 group-hover:via-purple-400/5 group-hover:to-pink-400/5 transition-all duration-500 pointer-events-none"></div>
        </div>
    );
}

export default InputBox;