// React diverged to 2 separate libraries, React can work with components and nest them
import React, { Component } from 'react';
// React DOM takes a component and inserts into the DOM
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// install lodash in node prompt, which can slow down loading of a function (searching)
// npm i --save lodash
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// declare variable to hold YouTube API key; run 'npm i --save youtube-api-search' in console; --save saves package to package.json
// use const for something that will never change
const API_KEY = 'AIzaSyDzi3hasbnbcXTA4J8ib0hdtO7YcVSrBDo';

// React is a JS library used to produce HTML shown to user; Creates different components/views that are nestable
// Component is a collection of JS code that produces HTML with DOM

// Create component that produces HTML (this is a class, not an instance)
// const App = function() {
//     return <div> Hi! </div>;
// }
// Defined base component as App, and index imports search component and renders it inside App functional component (is functional because it does not have state)
// functional components are used whenever we take in information and spit out some jsx and can contain a class based component
// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// }

// Whenever the app first boots up, we get an instance of App on screen, and constructor will run right away, and it will immediately do a YT search for 'swedish house mafia'
// Then the callback function data will be called with the list of videos

// Functional (created above with const) to Class based component below
// Class based component is used whenever we want to have the concept of state
class App extends Component {
  // constructor is always called with props
  constructor(props) {
    super(props);

    // Component level state, so App and SearchBar have their own states that solely belong to them uniquely (whenever we change searchbar state using search state, it only triggers a change on searchbar)
    this.state = {
      videos: [],
      selectedVideo: null
    }; // array because it will contain a list of videos/objects

    // This is the default search, without it NOTHING ELSE will trigger
    this.videoSearch('Swedish House Mafia');
  }

  // term is the user input string
  // passing videoSearch down to SearchBar
  videoSearch(term) {
    // Instead of , function(data) {, use arrow function
    // On rendering App, the list of videos length will very quickly flash '0' because this network request is not instantaneous
    // YTSearch({key: API_KEY, term: 'Swedish House Mafia'}, (videos) => {     this was originally used for searching a video with default term, now we are recreating it for user input
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // console.log(data); // data changing over time is perfect for using state
      // key of videos, value of data (the word data can be any word); whenever key and value is the same exact string, with ES6 you can use just the word once instead of ({ videos: videos })
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  // while YTSearch is firing, it will still attempt to render in the middle of it, which this.state.videos is receiving undefined until it completes, which gives an error
  // some parent objects sometimes cant fetch information fast enough to satify needs of child object

    render() {
      // throttles videoSearch(term) to run once every 300ms
      const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

      return (
          <div>
              <SearchBar onSearchTermChange={videoSearch} />
              <VideoDetail video={this.state.selectedVideo} />
              <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos} />
          </div>
          // <SearchBar onSearchTermChange={term => this.videoSearch(term)} /> refactored with lodash above
          // When searchbar calls on onSearchTermChange that will due so with term, and it will be sent with this.videoSearch to videoSearch function back above
          // VideoList takes a video (selectedVideo) and defines it on App's state and updates App's state with new video; and passing onVideoSelect as a property to videolist, so videolist has a property on props
          // <VideoDetail video={this.state.videos[0]} /> instead of this, we want to show currently selected but we will get stuck on loading, so we need to add to YTSearch function
          // App is parent to VideoList, so we need to pass data from the parent component to the child (app to videolist)
          // data can be passed with jsx property, also known as passing props (pass prop videos to VideoList)
          // anytime app re renders, like when we setState on component, videoList will get the new list of videos
      );
    }
}

// Take this component's generated HTML and put it on the page (DOM)
// Cannot pass a class, must pass an instance to render
// ReactDOM.render(App);
// Point to the existing div for the dom node on the page
ReactDOM.render(<App />, document.querySelector('.container'));
