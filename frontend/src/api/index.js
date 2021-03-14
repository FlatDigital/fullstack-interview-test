import axios from 'axios';

const intance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getBranches = async (repositoryName) => {
  // const res = await intance.get(`/${repositoryName}/branches`);
  const res = {
    data: [
      {
        sha: '13',
        name: 'Branch',
      },
    ],
  };
  return res.data;
};

export const getcommits = async ({ repositoryName, branchName }) => {
  // const res = await intance.get(`/${repositoryName}/branches/${branchName}/commits`);
  const res = {
    data: [
      {
        author: 'Francisco',
        message: 'feat: Github block me',
        date: '2020-07-08T22:41:06Z',
        verified: true,
        sha: '13',
      },
    ],
  };
  return res.data;
};
