import axios from "axios";

const API_URL = "http://localhost:5174/articles";
const UNSPLASH_API_URL = "https://api.unsplash.com/photos";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
export const getArticles = async (fn) => {
    try {
        const res = await axios.get(`${API_URL}`);

        return fn(res.data);
    } catch (error) {
        console.error(error)
    }
}


export const getArticleWithId = async (id, fn) => {
    try {
        const res = await axios.get(`${API_URL}/${id}`);

        return fn(res.data);
    } catch (error) {
        console.error(error)
    }
}

export const createNewArticle = async (newArticle) => {
    try {
        const res = await axios.post(`${API_URL}`, newArticle);

        return res.data;
    } catch (error) {
        console.error(error)
    }
}

export const getUnsplashImages = async (fn) => {
    try {
        const res = await axios.get(`${UNSPLASH_API_URL}?client_id=${ACCESS_KEY}`);

        return fn(res.data);
    } catch (error) {
        console.error(error)
    }
}