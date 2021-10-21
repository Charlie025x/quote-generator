// import React from 'react';
// import ReactDOM from 'react-dom';


class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        error: null,
        isLoaded: false,
        quotes: [],
        quotesLength: null,
        // apiQuotes: []
        };
    }

    componentDidMount() {
        fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                quotes: json
            })
        })
      }

    
      render() { 
        const { error, isLoaded, quotes } = this.state;

        let rand = Math.floor(Math.random() * quotes.length) // selects a random index no greater than quotes' length
        
        // render quote function
        let renderQuote = () => (
          quotes.map((quote, index) => (
          index === rand ?
          <li key={index}>
              {index} | {quote.text} | {quote.author} | 
          </li> : ''
          ))
        )


        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {/* following code was moved to renderQuote function */}
              {/* {quotes.map((quote, index) => (
                index === rand ?
                <li key={index}>
                    {index} | {quote.text} | {quote.author}
                </li> : ''
              ))} */}
              { renderQuote() }
            </ul>
          );
        }
      }
    
      
    render() {
      const { quotes } = this.state;

      let rand = Math.floor(Math.random() * quotes.length)

      // renderQuote function
      let renderQuote = () => (
        quotes.map((quote, index) => (
          index === rand ? // sellects a random quote from quotes
          <div key="index">
            {/* Quote , print quote's text */}
            <div className="quote-text">
                <i className="fas fa-quote-left"></i>
                <span id="quote">{ quote.text }</span>
            </div>
            {/* Author , prind quote's author */}
            <div className="quote-author">
                <span id="author">{ quote.author }</span>
            </div>
          </div>
          : '' // don't print anything if the quote isn't selected
        ))
      )
      return(
          <div className="quote-container" id="quote-container">
            
            {/* {quotes.map((quote, index) => (
              index === rand ? // sellects a random quote from quotes
              <div key="index">
                {/* Quote , print quote's text 
                <div className="quote-text">
                    <i className="fas fa-quote-left"></i>
                    <span id="quote">{ quote.text }</span>
                </div>
                {/* Author , prind quote's author 
                <div className="quote-author">
                    <span id="author">{ quote.author }</span>
                </div>
              </div>
              : '' // don't print anything if the quote isn't selected
            ))} */}

            { renderQuote() }

              {/* Buttons */}
              <div className="button-container">
                  <button onClick={renderQuote} className="twitter-button" id="twitter" title="Tweet This!">
                      <i className="fab fa-twitter"></i>
                  </button>
                  <button id="new-quote">New Quote</button>
              </div>
          </div>    
      )
    }
}

// ReactDOM.render(
//     <div class="quote-container" id="quote-container">
//         <div class="quote-text">
//             <i class="fas fa-quote-left"></i>
//             <span id="quote">lorem quote</span>
//         </div>
//         <div class="quote-author">
//             <span id="author">lorem author</span>
//         </div>
//         <div class="button-container">
//             <button class="twitter-button" id="twitter" title="Tweet This!">
//                 <i class="fab fa-twitter"></i>
//             </button>
//             <button id="new-quote">New Quote</button>
//         </div>
//     </div>,
//     document.getElementById('root')
// ) 