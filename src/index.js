import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './Persons/App';
// import Products from './BigBasket/Products';
// import Products from './Grofers/Product';
import * as serviceWorker from './serviceWorker';
// import Question from './Questions/Container';
// import App from './Burgers/App';
import App from './Project/App';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
