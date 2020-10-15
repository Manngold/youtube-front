const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyAUc3JLp0mqxy-S6ayRENJWy8OpspY6suY';

export const getPopular = () => {
  return fetch(
    `${BASE_URL}/videos?key=${API_KEY}&part=snippet&maxResults=25&chart=mostPopular&regionCode=KR`
  ).then((res) => res.json());
};
export const SearchByValue = (query) => {
  return fetch(
    `${BASE_URL}/search?key=${API_KEY}&part=snippet&maxResults=25&regionCode=KR&q=${query}`
  ).then((res) => res.json());
};
