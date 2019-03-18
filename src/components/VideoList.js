import React from 'react';
import VideoItem from './VideoItem'


// instead of using (props), use ({videos})
const VideoList = ({ videos, onVideoSelect }) => {
    //videos is an array
    const rederedList = videos.map((video) => {
        return (
            <VideoItem
                key={video.id.videoId}
                onVideoSelect={onVideoSelect}
                video={video}
            />
        );
    });

    //props.videos
    //instead of using {props.videos.length}, use {video.length}
    return <div className="ui relaxed divided list">{rederedList}</div>;
};

export default VideoList;