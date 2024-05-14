import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingSpinner from './component/common/LoadingSpinner';

const PollPage = lazy(() => import('./pages/PollPage'));

const App = () => (
  <div className="App">
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<PollPage />} />
      </Routes>
    </Suspense>
  </div>
);

export default App;
