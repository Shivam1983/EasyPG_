import axios from 'axios';

const baseURL = 'http://localhost:8085/api';

export const customAxios = axios.create({
  baseURL: baseURL
});
