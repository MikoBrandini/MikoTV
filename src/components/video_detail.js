import React from 'react';

const VideoDetail = ({video}) =>{
  if(!video) { return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
    return(

  <div className="video-detail">
    <div className="embed-responsive embed-responsive-16by9" >
      <iframe title={video.id.videoId} className="embed-responsive-item" src={url} ></iframe>
    </div>
    <div className="details bg-inverse text-white">
      <div>{video.snippet.title}</div>
    </div>
  </div>
  );

};

export default VideoDetail;
