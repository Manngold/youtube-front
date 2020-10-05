import React, { useState, useEffect } from 'react';
import { getPopular } from '../api';

const Popular = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getPopular().then((result) => setVideos(result));
  }, []);
  return <h1>popular{console.log(videos)}</h1>;
};

export default Popular;
