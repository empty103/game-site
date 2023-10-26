import { Suspense, lazy } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';

import Loading from '../Loading/Loading';
import NotFound from '../../pages/NotFoundPage';
import GamesPage from '../../pages/GamesPage';

import TicTacToe from '../../games/TicTacToe/TicTacToe';
import Fifteen from '../../games/Fifteen/Fifteen';

import ArticlesPage from '../../pages/ArticlesPage';
import Flexibility from '../../articles/Flexibility/Flexibility';

const CommonLayout = lazy(() => import('../../layout/CommonLayout'));

function App() {
  return (
    <div className={styles.app}>

      <Outlet />

      <Routes>
        <Route path='/' element={
          <Suspense fallback={<Loading />}>
            <CommonLayout />
          </Suspense>
        } />

        <Route path='/games' element={<GamesPage />} />
        <Route path='/play' element={<Navigate to='/games' replace />} />

        <Route path='/games/tic-tac-toe' element={<TicTacToe />} />
        <Route path='/games/fifteen' element={<Fifteen />} />


        <Route path='/articles' element={<ArticlesPage />} />
        <Route path='/articles/flexibility' element={<Flexibility />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div >
  );
}

export default App;
