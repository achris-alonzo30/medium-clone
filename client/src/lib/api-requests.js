import axios from "axios";

const API_URL = "http://localhost:5174/articles";

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