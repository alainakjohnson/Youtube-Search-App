import React from 'react';
import VideoListItem from "./video_list_item";

const VideoList = props => {
    const videoIterms = props.videos.map(video => {
        return <VideoListItem key={video.etag} video={video} />;
        return <ul className="col-md-4 list-group">{videoIterms}</ul>;
    });

    return <ul>{ videoIterms }</ul>;
};

export default VideoList;