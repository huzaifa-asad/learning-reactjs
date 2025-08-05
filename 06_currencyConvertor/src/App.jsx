import './App.css'
import { useState, useEffect } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isSwapping, setIsSwapping] = useState(false)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  // Auto-convert when amount, from, or to changes
  useEffect(() => {
    if (currencyInfo[to] && amount > 0) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
    }
  }, [amount, currencyInfo, to])

  const swap = () => {
    setIsSwapping(true)
    setTimeout(() => {
      setFrom(to)
      setTo(from)
      setConvertedAmount(amount)
      setAmount(convertedAmount)
      setIsSwapping(false)
    }, 300)
  }
  
  const convert = () => {
    setLoading(true)
    setError('')
    
    setTimeout(() => {
      try {
        if (!currencyInfo[to]) {
          throw new Error('Currency data not available')
        }
        setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
        setLoading(false)
      } catch (err) {
        setError('Conversion failed. Please try again.')
        setLoading(false)
      }
    }, 500)
  }

  return (
    <div
        className="min-h-screen flex flex-wrap rounded-2xl p-2 justify-center items-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden"
    >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="w-full max-w-lg mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold mb-2 pb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    CurrencyX
                </h1>
                <p className="text-gray-300 text-lg">Real-time currency conversion at your fingertips</p>
            </div>

            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300">
                {error && (
                    <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                        {error}
                    </div>
                )}
                
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="space-y-6">
                        {/* From Input */}
                        <div className="transform transition-all duration-300 hover:scale-105">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>

                        {/* Swap Button */}
                        <div className="relative flex justify-center">
                            <button
                                type="button"
                                className={`group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${isSwapping ? 'animate-spin' : ''}`}
                                onClick={swap}
                                disabled={isSwapping}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                </svg>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </button>
                        </div>

                        {/* To Input */}
                        <div className="transform transition-all duration-300 hover:scale-105">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>

                        {/* Convert Button */}
                        <button 
                            type="submit" 
                            disabled={loading || !amount}
                            className="w-full relative bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed overflow-hidden group"
                        >
                            {loading && (
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500">
                                    <div className="flex items-center justify-center h-full">
                                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                                    </div>
                                </div>
                            )}
                            <span className={loading ? 'invisible' : 'visible'}>
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </button>

                        {/* Conversion Rate Display */}
                        {currencyInfo[to] && (
                            <div className="text-center text-gray-300 bg-white/5 rounded-lg p-3 border border-white/10">
                                <p className="text-sm">Current Rate</p>
                                <p className="text-lg font-semibold">
                                    1 {from.toUpperCase()} = {currencyInfo[to].toFixed(4)} {to.toUpperCase()}
                                </p>
                            </div>
                        )}
                    </div>
                </form>
            </div>

            {/* Footer */}
            <div className="text-center mt-8">
                <p className="text-gray-400 text-sm">
                    Powered by real-time exchange rates • Last updated: {new Date().toLocaleTimeString()}
                </p>
            </div>
        </div>
    </div>
);
}

export default App