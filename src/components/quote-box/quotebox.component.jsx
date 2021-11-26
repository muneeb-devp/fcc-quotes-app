import React from 'react'
import './quotebox.styles.css'

function QuoteBox({quote, author, nextQuote, color}) {
  return (
    <>
      <h1 id="text">
      <i className="fa fa-quote-left"> </i> 
      {quote} 
      </h1>
      <h2 id="author">
        -{author}
      </h2>
      <div className="buttons">
        <div className="social-links">
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(quote)}`} style={{color: color}}>
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://tumblr.com" style={{color: color}} >
            <i class="fa fa-tumblr" aria-hidden="true"></i>
          </a>
        </div>
        <button id="new-quote" onClick={nextQuote} style={{background: color}}>Next Quote</button>
      </div>
    </>
  )
}

export default QuoteBox
