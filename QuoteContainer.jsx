// import React from 'react';
// import ReactDOM from 'react-dom';

//random quote function
// let randomQuote = () => {
//   quote = items[Math.floor(Math.random() * items.length)]
//   return quote
// }
 
// render quote function
let renderQuote = (item, index) => (
  index === 100 ?
  <li key={index}>
      {index} | {item.text} | {item.author} | 
  </li> : ''
)
class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        error: null,
        isLoaded: false,
        items: [],
        itemsLength: null,
        // apiQuotes: []
        };
    }

    componentDidMount() {
        fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json
            })
        })
      }

    
      render() {
        let rand = Math.floor(Math.random() * this.state.items.length)
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              { this.state.items.length }
              {items.map((item, index) => (
                index === rand ?
                <li key={index}>
                    {index} | {item.text} | {item.author}
                </li> : ''
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