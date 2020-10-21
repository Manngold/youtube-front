import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const onSearch = (query) => {
    youtube.search(query).then((results) => setVideos(results.items));
  };
  useEffect(() => {
    youtube.getPopular().then((results) => setVideos(results.items));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
