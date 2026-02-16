import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '54674078-cc29e36c5df6708fa2caeef42';

export function getImagesByQuery(query) {
    return axios({
    method: 'get',
    url: 'https://pixabay.com/api/',
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40, 
    },
    })
  .then(function (response) {
     console.log(response.data.hits);
      return response.data;
  })
   .catch(function (AxiosError) {
    iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
    }
    )}
   )
}