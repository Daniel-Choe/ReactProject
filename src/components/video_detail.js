import React from 'react';

// need to get values off props objects
// const VideoDetail = (props) => {
// but dont really need props, just video properties, so
const VideoDetail = ({video}) => {
  // To make sure video has been provided to props before attempting to render, create a check
  // These checks should be implemented rarely to avoid multiple loaders
  if (!video) {
    return <div> Loading... </div>;
  }
  // return statement will not let anything below run

  // get access to embed url, we can craft our own embed url
  const videoId = video.id.videoId;
  // const url = 'https://www.youtube.com/embed/' + videoId;
  // we can use ES6 string interpolation instead with back ticks ``
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">

      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>

    </div>
  );
};
// iframe will reference url const

export default VideoDetail;
