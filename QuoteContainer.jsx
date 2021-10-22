class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        error: null,
        isLoaded: false,
        quotes: [],
        };
    }      

    
    newQuote = () => {
      this.forceUpdate()
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

    // basic render function for practice
      // render() { 
      //   const { error, isLoaded, quotes } = this.state;

      //   let rand = Math.floor(Math.random() * quotes.length) // selects a random index no greater than quotes' length
        
      //   // render quote function
      //   let renderQuote = () => (
      //     quotes.map((quote, index) => (
      //     index === rand ?
      //     <li key={index}>
      //         {index} | {quote.text} | {quote.author} | 
      //     </li> : ''
      //     ))
      //   )

      //   if (error) {
      //     return <div>Error: {error.message}</div>;
      //   } else if (!isLoaded) {
      //     return <div>Loading...</div>;
      //   } else {
      //     return (
      //       <ul>
      //         { renderQuote() }
      //       </ul>
      //     );
      //   }
      // }
    
      
    render() {
      const { error, isLoaded, quotes } = this.state;

      let rand = Math.floor(Math.random() * quotes.length)

      // renderQuote function
      let renderQuote = () => (
        quotes.map((quote, index) => (
          index === rand ? // selects a random quote from quotes
          <div key="index">
            {/* Quote , print quote's text , make font-size smaller if quote length is greater than 120 characters */}
            <div className="quote-text">
                <i className={`fas fa-quote-left ${ quote.text.length > 120 ? 'long-quote' : '' }`}></i>
                <span id="quote">{ quote.text }</span>
            </div>
            {/* Author , print quote's author , print 'unknown author' if there is no author */}
            <div className="quote-author">
                <span id="author">{ !quote.author ? 'unknown author' : quote.author}</span>
            </div>
          </div>
          : '' // don't print anything for the quotes that were not selected
        ))
      )    

      if (error) {
        return <div>Error: { error.message }</div>;
      } else if (!isLoaded) {// show loading animation if quotes are not loaded
        return <div className="loader" id="loader"></div>;
      } else {
        return(
            <div className="quote-container" id="quote-container">
  
              { renderQuote() }
  
                {/* Buttons */}
                <div className="button-container">
                    <button onClick={ this.tweetQuote = () => {
                      const twitterUrl = `https://twitter.com/intent/tweet?text=${ quote.text } - ${ quote.author }`;
                      window.open(twitterUrl), '_blank' }} className="twitter-button" id="twitter" title="Tweet This!">
                        <i className="fab fa-twitter"></i>
                    </button>
                    <button onClick={ this.newQuote } id="new-quote">New Quote</button>
                </div>
            </div>    
        )

      }
      
    }
}