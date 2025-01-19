import './App.css';

import { Grid } from '@mui/material';
import youtube from './api/youtube';
import { SearchBar, VideoDetail, VideoList } from './Components/index';
import { useState } from 'react';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState(null);

  const onSelectVideo = (video) => {
    selectedVideos(video);
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
    <Grid justifyContent={'center'} container spacing={16}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            {/* {Search bar} */}
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            {/* VIDEO DETAILS */}
            <VideoDetail video={selectedVideos} />
          </Grid>
          <Grid item xs={4}>
            {/* Video lists */}
            <VideoList videos={videos} onVideoSelect={onSelectVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
