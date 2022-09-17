import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routeData } from './router';
import Layout from '../layout';
import NotFound from '../components/NotFound';

const Loading = (
  <div style={{ textAlign: 'center', padding: '50px 0 50px 0' }}>
    页面加载中...
  </div>
);

const Controller = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/docs" element={<Navigate replace to="/docs/getting-started" />} />
        <Route path="/components" element={<Navigate replace to="/components/pro-search" />} />
        {routeData.map((params, index) => {
          const { component: BasicLayout, path } = params
          return (
            <Route
              path={path}
              key={index}
              element={
                <Suspense fallback={Loading}>
                  <BasicLayout />
                </Suspense>
              }
            />
          )
        })}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Controller;