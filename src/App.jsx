import './App.css';
import youtube from './api/youtube';
import { SearchBar, VideoDetail, VideoList } from './Components/index';
import { useState } from 'react';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState(null);

  const onSelectVideo = (video) => {
    setSelectedVideos(video);
  };

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResult: 5,
        key: '[API_KEY]',
        q: searchTerm,
      },
    });
    setVideos(response.data.items);
    setSelectedVideos(response.data.items[0]);
  };

  return (
    <div className='app-container'>
      <div className='search-bar-container'>
        <SearchBar onFormSubmit={handleSubmit} />
      </div>
      <div className='content-container'>
        <div className='video-detail-container'>
          <VideoDetail video={selectedVideos} />
        </div>
        <div className='video-list-container'>
          <VideoList videos={videos} onVideoSelect={onSelectVideo} />
        </div>
      </div>
    </div>
  );
};

export default App;
