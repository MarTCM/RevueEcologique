import axios from "axios";

//used secret env var to secure api endpoints
const api = axios.create({
  baseURL: `https://revue-ecologique-tc1.herokuapp.com/${process.env.REACT_APP_AUTH0_CLIENT_ID}/api`,
});

export const insertArticle = (payload) => api.post(`/article`, payload);
export const getAllArticles = () => api.get(`/articles`);
export const updateArticleById = (id, payload) =>
  api.put(`/article/${id}`, payload);
export const deleteArticleById = (id) => api.delete(`/article/${id}`);
export const getArticleById = (id) => api.get(`/article/${id}`);

const apis = {
  insertArticle,
  getAllArticles,
  updateArticleById,
  deleteArticleById,
  getArticleById,
};

export default apis;
