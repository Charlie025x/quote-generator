// class QuoteContainer extends React.Component {
//     constructor(props) {
//         super(props);
        
//     }
//     render() {
//         return(
//             <div class="quote-container" id="quote-container">
//                 {/* Quote */}
//                 <div class="quote-text">
//                     <i class="fas fa-quote-left"></i>
//                     <span id="quote"></span>
//                 </div>
//                 {/* Author */}
//                 <div class="quote-author">
//                     <span id="author"></span>
//                 </div>
//                 {/* Buttons */}
//                 <div class="button-container">
//                     <button class="twitter-button" id="twitter" title="Tweet This!">
//                         <i class="fab fa-twitter"></i>
//                     </button>
//                     <button id="new-quote">New Quote</button>
//                 </div>
//             </div>    
//         )
//     }
// }

ReactDOM.render(
    <div class="quote-container" id="quote-container">
        <div class="quote-text">
            <i class="fas fa-quote-left"></i>
            <span id="quote">lorem quote</span>
        </div>
        <div class="quote-author">
            <span id="author">lorem author</span>
        </div>
        <div class="button-container">
            <button class="twitter-button" id="twitter" title="Tweet This!">
                <i class="fab fa-twitter"></i>
            </button>
            <button id="new-quote">New Quote</button>
        </div>
    </div>,
    document.getElementById('root')
) 