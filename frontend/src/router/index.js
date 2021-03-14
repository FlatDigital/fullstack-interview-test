import { Home, Branches, Commits } from '../containers';

export const ROUTER = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/:repositoryName', component: Branches },
  { exact: true, path: '/:repositoryName/:branchName', component: Commits },
];
