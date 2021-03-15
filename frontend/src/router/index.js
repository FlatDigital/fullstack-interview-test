import {
  Home,
  Branches,
  Commits,
  DetailCommit,
  PullRequests,
  CreatePull,
} from '../containers';

export const ROUTER = [
  { exact: true, path: '/', component: Home },
  {
    exact: true,
    path: '/:author/:repositoryName/pulls',
    component: PullRequests,
  },
  {
    exact: true,
    path: '/:author/:repositoryName/pulls/new',
    component: CreatePull,
  },
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
