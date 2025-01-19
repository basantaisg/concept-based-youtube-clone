const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className='video-item' onClick={() => onVideoSelect(video)}>
      <img
        className='video-thumbnail'
        alt='thumbnail'
        src={video.snippet.thumbnails.medium.url}
      />
      <p className='video-title'>{video.snippet.title}</p>
    </div>
  );
};

export default VideoItem;
