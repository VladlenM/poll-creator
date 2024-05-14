import { PageConfig } from './types';
import PollPage from './pages/PollPage';

export const pages: PageConfig[] = [
  {
    path: '/',
    title: 'Poll page',
    component: PollPage,
  },
];
