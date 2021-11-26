import React, { useState, useEffect, useLayoutEffect } from 'react'
import QuoteBox from './components/quote-box/quotebox.component'
import quotesJSON from './quotes'


function App() {
  const [color, setColor] = useState(null)
  const [quotes, setQuotes] = useState(quotesJSON)
  const [currentQuote, setCurrentQuote] = useState({q: '', a: ''})

  const generateRandomColor = () => `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`

  
  useLayoutEffect(() => {
    setColor(
      generateRandomColor()
    )
    setCurrentQuote( quotes.pop())
    console.log(currentQuote)
  }, [])

  const nextQuote = () => {setCurrentQuote(quotes.pop()); setColor(generateRandomColor())}

  return (
    <div className="bg" style={{background: color}}>
      <div id="quote-box" style={{color: color}}>
        <QuoteBox nextQuote={nextQuote} color={color} quote={currentQuote.q} author={currentQuote.a} />
      </div>
    </div>
  )
}

export default App
