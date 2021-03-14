import { Home, Branches } from '../containers';

export const ROUTER = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/:repositoryName', component: Branches },
];
