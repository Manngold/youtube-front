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
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&regionCode=KR&key=${this.key}`,
        this.requestOptions
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return console.log('error', error);
    }
  }
  async search(query) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&regionCode=KR&q=${query}&key=${this.key}`,
        this.requestOptions
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.log('error', error);
    }
  }
}

export default Youtube;
