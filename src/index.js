// React diverged to 2 separate libraries, React can work with components and nest them
import React from 'react';
// React DOM takes a component and inserts into the DOM
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// declare variable to hold YouTube API key; run 'npm i --save youtube-api-search' in console; --save saves package to package.json
// use const for something that will never change
const API_KEY = 'AIzaSyDzi3hasbnbcXTA4J8ib0hdtO7YcVSrBDo';

// React is a JS library used to produce HTML shown to user; Creates different components/views that are nestable
// Component is a collection of JS code that produces HTML with DOM

// Create component that produces HTML (this is a class, not an instance)
// const App = function() {
//     return <div> Hi! </div>;
// }
const App = () => {
    return (
        <div> 
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML and put it on the page (DOM)
// Cannot pass a class, must pass an instance to render
// ReactDOM.render(App);
// Point to the existing div for the dom node on the page
ReactDOM.render(<App />, document.querySelector('.container'));
