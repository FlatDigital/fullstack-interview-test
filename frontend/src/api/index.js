import axios from 'axios';

const intance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getBranches = async (repositoryName) => {
  const res = await intance.get(`/${repositoryName}/branches`);
  return res.data;
};
