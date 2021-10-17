// import React from 'react';
// import ReactDOM from 'react-dom';

class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        // error: null,
        isLoaded: false,
        items: []
        // apiQuotes: []
        };
    }

    componentDidMount() {
        fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        })
      }
    
      render() {
        // Pick a random quote from apiQuotes array
        // const item = items[Math.floor(Math.random() * items.length)];

        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {items.map((item, index) => (
                  <li key={index}>
                      {index} | {item.text} | {item.author}
                  </li>
              ))}
            </ul>
          );
        }
      }
    
      
    // render() {
    //     const { items } = this.state;
    //     return(
    //         <div className="quote-container" id="quote-container">
    //             {/* Quote */}
    //             <div className="quote-text">
    //                 <i className="fas fa-quote-left"></i>
    //                 <span id="quote">{}</span>
    //             </div>
    //             {/* Author */}
    //             <div className="quote-author">
    //                 <span id="author"></span>
    //             </div>
    //             {/* Buttons */}
    //             <div className="button-container">
    //                 <button className="twitter-button" id="twitter" title="Tweet This!">
    //                     <i className="fab fa-twitter"></i>
    //                 </button>
    //                 <button id="new-quote">New Quote</button>
    //             </div>
    //         </div>    
    //     )
    // }
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