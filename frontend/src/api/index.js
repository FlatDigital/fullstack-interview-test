import axios from 'axios';

const intance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getBranches = async ({ author, repositoryName }) => {
  const res = await intance.get(`/${author}/${repositoryName}/branches`);
  /* const res = {
    data: [
      {
        sha: '13',
        name: 'Branch',
      },
    ],
  };*/
  return res.data;
};

export const getcommits = async ({ author, repositoryName, branchName }) => {
  const res = await intance.get(
    `/${author}/${repositoryName}/branches/${branchName}/commits`
  );
  /*const res = {
    data: [
      {
        author: 'Francisco',
        message: 'feat: Github block me',
        date: '2020-07-08T22:41:06Z',
        verified: true,
        sha: '13',
      },
    ],
  };*/
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
  /*const res = {
    data: {
      author: 'Francisco',
      message: 'feat: Github block me',
      date: '2020-07-08T22:41:06Z',
      verified: true,
      sha: '13',
      total: 34,
      additions: 26,
      deletions: 8,
      files: [
        {
          sha: '908b630f7e299a13b14a26d95f8b4cd2671d4277',
          filename: 'src/components/molecules/CardPost/index.jsx',
          status: 'modified',
          additions: 2,
          deletions: 1,
          changes: 3,
          patch:
            "@@ -1,11 +1,12 @@\n import { Button } from '@/atoms';\n+import { optimizeImage } from 'root/utils';\n import { CSSArticle, CSSImage, CSSInfo } from './styles';\n \n const CardPost = ({ cover, title, description, href }) => {\n   return (\n     <CSSArticle>\n       <CSSImage>\n-        <img src={cover} alt={title} />\n+        <img src={optimizeImage(cover, 'w_290,h_150,c_scale')} alt={title} width=\"290px\" height=\"150px\" />\n       </CSSImage>\n       <CSSInfo>\n         <h2>{title}</h2>",
        },
      ],
    },
  };*/
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
    `/${author}/${repositoryName}/pulls/compare/${base}/${compare}`
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
