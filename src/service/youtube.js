class Youtube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async getPopular() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=28&chart=mostPopular&regionCode=KR&key=${this.key}`,
        this.requestOptions
      );
      const result = await response.json();
      return result.items;
    } catch (error) {
      return console.log('error', error);
    }
  }
  async search(query) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=28&regionCode=KR&q=${query}&key=${this.key}`,
        this.requestOptions
      );
      const result = await response.json();
      return result.items;
    } catch (error) {
      console.log('error', error);
    }
  }
  async commentThreads(videoId) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&textFormat=plainText&key=${this.key}`,
        this.requestOptions
      );
      if (response.status === 403) {
        throw Error('no comments');
      }
      const result = await response.json();
      return result.items;
    } catch (error) {
      const result = ['error'];
      return result;
    }
  }
}

export default Youtube;
