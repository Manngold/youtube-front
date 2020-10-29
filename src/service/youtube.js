import axios from 'axios';

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key, part: 'snippet' },
    });
  }

  async getPopular() {
    try {
      const response = await this.youtube.get('videos', {
        params: {
          maxResults: 28,
          chart: 'mostPopular',
          regionCode: 'KR',
        },
      });
      return response.data.items;
    } catch (error) {
      console.log(error);
    }
  }
  async search(query) {
    try {
      const response = await this.youtube.get('search', {
        params: {
          type: 'video',
          maxResults: 28,
          q: query,
          regionCode: 'KR',
        },
      });
      return response.data.items;
    } catch (error) {
      console.log(error);
    }
  }
  async commentThreads(videoId) {
    try {
      const response = await this.youtube.get('commentThreads', {
        params: {
          videoId,
          textFormat: 'plainText',
        },
      });
      return response.data.items;
    } catch (error) {
      return ['error'];
    }
  }
}
export default Youtube;
