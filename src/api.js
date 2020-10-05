const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyAUc3JLp0mqxy-S6ayRENJWy8OpspY6suY';

export const getPopular = () => {
  return fetch(
    `${BASE_URL}/videos?key=${API_KEY}&part=snippet&maxResults=25&chart=mostPopular&regionCode=KR`
  )
    .then((res) => res.json())
    .then((result) => result);
};
export const SearchByValue = (query) => {};
