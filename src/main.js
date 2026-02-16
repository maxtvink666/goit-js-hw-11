import { getImagesByQuery } from './js/pixabay-api.js';
import {
  markupGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const jsSearchQuery = document.querySelector('.js-search-query');
let query = '';

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault(); 

  clearGallery();
  showLoader();

  query = e.currentTarget.searchText.value.trim();
  form.reset(); 

  if (query === '') {
    iziToast.info({
      title: 'Info',
      position: 'topRight',
      message: 'Please enter a search query!',
    });
    hideLoader(); 
    return;
  }

  jsSearchQuery.textContent = `Search query : "${query}"`;

  getImagesByQuery(query)
    .then(images => {
      if (images.hits.length === 0) {
        iziToast.info({
          title: 'Info',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      markupGallery(images.hits);
    })
    .catch(AxiosError => {
      iziToast.error({
        title: 'Error',
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    })
    .finally(() => {
      hideLoader();
    });
}