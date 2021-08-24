import { storageService } from "./storage.service.js"

export const googleBooksService = {
    getGoogleBooks,
}

const KEY = 'searchDb';
const API_KEY = 'AIzaSyBGe5qrsySPJjOhvi5C5mlAvGe2ywF8ZQg'

const bookSearchHistory = storageService.loadFromStorage('searchDb') || {};

function getGoogleBooks(query) {
    if (bookSearchHistory[query]){ 
        console.log('getting from storage')
        return Promise.resolve(bookSearchHistory[query])}
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
    return axios.get(url)
    .then(({data}) => {
            console.log('getting from API')
            bookSearchHistory[query] = data.items;
            storageService.saveToStorage(KEY, bookSearchHistory)
            return data.items
        })
}

