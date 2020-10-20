import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&regionCode=KR&key=${process.env.REACT_APP_API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);
  return (
    <>
      <VideoList videos={videos} />
    </>
  );
}

export default App;
