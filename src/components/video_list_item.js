import React from 'react';

// define a new video to pull off video from props objects
// const VideoListItem = (props) => {
//    const video = props.video;
//    const onVideoSelect = props.onVideoSelect;
// above is equivalent to below
const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url; // can be found in inspect, similar to finding e target

  // videolistitem takes the property from video_list of onvideoselect to make it so when an li is clicked, it passes the new callback (started from index app, to videolist, to videolistitem)
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">

        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>

      </div>
    </li>
  );
};

// self closing tag on img because nothing is going in it

export default VideoListItem;
