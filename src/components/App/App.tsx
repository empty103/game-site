import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import {
  Navigate,
  Outlet,
  Route,
  Routes
} from 'react-router-dom';

import styles from './App.module.scss';
import Loading from '../Loading/Loading';

import TicTacToe from '../../games/TicTacToe/TicTacToe';
import Fifteen from '../../games/Fifteen/Fifteen';

import ArticlesPage from '../../pages/articles/ArticlesPage';
import Flexibility from '../../articles/Flexibility/Flexibility';

const CommonLayout = lazy(() => import('../../layout/CommonLayout'));
const NotFound = lazy(() => import('../../pages/NotFoundPage'));
const GamesPage = lazy(() => import('../../pages/games/GamesPage'));

function App() {

  return (
    <HelmetProvider>
      <div className={styles.app}>

        <Outlet />

        <Routes>
          <Route path='/' element={
            <Suspense fallback={<Loading />}>
              <CommonLayout />
            </Suspense>
          } />

          <Route path='/games' element={
            <Suspense fallback={<Loading />}>
              <GamesPage />
            </Suspense>
          } />
          <Route path='/play' element={<Navigate to='/games' replace />} />

          <Route path='/games/tic-tac-toe' element={<TicTacToe />} />
          <Route path='/games/fifteen' element={<Fifteen />} />

          <Route path='/articles' element={<ArticlesPage />} />
          <Route path='/articles/flexibility' element={<Flexibility />} />

          <Route path='*' element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          } />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;