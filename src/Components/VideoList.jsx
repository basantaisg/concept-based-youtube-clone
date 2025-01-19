import VideoItem from './VideoItem';

const VideoList = ({ videos, onSelectVideo }) => {
  const listOfVideos = videos.map((video, id) => (
    <VideoItem onVideoSelect={onSelectVideo} key={id} video={video} />
  ));

  return <div className='video-list-container'>{listOfVideos}</div>;
};

export default VideoList;
