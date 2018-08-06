import React from 'react';
import VideoListItem from './video_list_item';

// When we use a functional component, the props object will arrive as an argument to the function (with props object)
// Whenever refactoring from function based component to class, anywhere with props needs to have this.props
const VideoList = (props) => {
  // for each element of videos, we'll have a function that gets called with a single video and returns a videolistitem and pass it a video with property name of video
  // then save an actual reference to this array to get returned by giving const videoItems
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    )
  });
  // VideoList takes the property props.onVideoSelect and passes it into video_list_item using onVideoSelect
  // List items should always have a key for referencing
  // etag is a unique identifier for each YT video (can be found in Inspect, Network tab, search?part=snippet..., Items drop down, Object number drop down)

  return (
    // className is used for bootstrap, instead of just class
    // <ul className="col-md-4 list-group">
    //   {props.videos.length}
    // </ul> // any videos that are passed here, we will just print the length of the list out
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
    // Stay away from for loops, and use built in iterators instead like map
    // Normal iterative array
    // var array = [1, 2, 3];
    // for(var i = 0; i < array.length ; i++) {
    //  console.log(array[i]);
    // }

    // Instead use built in helper called map
    // var array = [1, 2, 3];
    // array.map(function(number) { return number * 2 }) ;
    // Result is [2, 4, 6]
    // Another Example
    // array.map(function(number) { return '<div>' + number + '</div>' });
    // Result is ["<div>1</div>", "<div>2</div>", "<div>3</div>"]
  );
};

export default VideoList;
