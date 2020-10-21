import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onSearch = (query) => {
    youtube.search(query).then((results) => {
      const newResult = results.map((result) => {
        return { ...result, id: result.id.videoId };
      });
      setVideos(newResult);
    });
  };
  const onSelect = (video) => {
    setSelectedVideo(video);
  };
  useEffect(() => {
    youtube.getPopular().then((results) => setVideos(results));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} />
      <div className={styles.container}>
        {selectedVideo && <VideoDetail video={selectedVideo} />}
        <VideoList
          videos={videos}
          onSelect={onSelect}
          display={selectedVideo ? 'list' : 'grid'}
        />
      </div>
    </div>
  );
}

export default App;
