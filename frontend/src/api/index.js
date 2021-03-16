import axios from 'axios';

const intance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getBranches = async ({ author, repositoryName }) => {
  const res = await intance.get(`/${author}/${repositoryName}/branches`);
  return res.data;
};

export const getcommits = async ({ author, repositoryName, branchName }) => {
  const res = await intance.get(
    `/${author}/${repositoryName}/branches/${branchName}/commits`
  );
  return res.data;
};

export const getcommit = async ({
  author,
  repositoryName,
  branchName,
  commitSha,
}) => {
  const res = await intance.get(
    `/${author}/${repositoryName}/branches/${branchName}/commits/${commitSha}`
  );
  return res.data;
};

export const getPulls = async ({
  author,
  repositoryName,
  query: { state },
}) => {
  const res = await intance.get(
    `/${author}/${repositoryName}/pulls?state=${state}`
  );
  return res.data;
};

export const getCompare = async ({ author, repositoryName, base, compare }) => {
  const res = await intance.get(
    `/${author}/${repositoryName}/pulls/compare/${base.replace(
      '/',
      '%2F'
    )}/${compare.replace('/', '%2F')}`
  );
  return res.data;
};

export const createPull = async ({
  author,
  repositoryName,
  title,
  body,
  base,
  compare: head,
}) => {
  const res = await intance.post(`/${author}/${repositoryName}/pulls`, {
    author,
    repositoryName,
    title,
    body,
    base,
    head,
  });
  return res.data;
};

export const createMerge = async ({
  author,
  repositoryName,
  base,
  compare: head,
}) => {
  const res = await intance.post(`/${author}/${repositoryName}/merges`, {
    author,
    repositoryName,
    base,
    head,
  });
  return res.data;
};

export const updatePull = async ({ author, repositoryName, number, state }) => {
  const res = await intance.put(
    `/${author}/${repositoryName}/pulls/${number}`,
    {
      state,
    }
  );
  return res.data.state;
};
