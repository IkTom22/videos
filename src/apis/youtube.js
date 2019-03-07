import axios from 'axios';

const KEY = 'AIzaSyALeLYUYhjwsLBybW3Fn2XpQpJQGiV_hDw';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY

    }
});