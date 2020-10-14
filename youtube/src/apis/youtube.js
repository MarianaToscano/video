import axios from 'axios';

const KEY ='AIzaSyAodoEaxwoQPZhtQf_ud24PTR2Flp7AVtQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: KEY
}
});