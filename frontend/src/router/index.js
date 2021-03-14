import { Home, Branches, Commits, DetailCommit } from '../containers';

export const ROUTER = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/:author/:repositoryName', component: Branches },
  {
    exact: true,
    path: '/:author/:repositoryName/:branchName',
    component: Commits,
  },
  {
    exact: true,
    path: '/:author/:repositoryName/:branchName/:commitSha',
    component: DetailCommit,
  },
];
