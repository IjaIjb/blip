import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import routes from './routes/Index';

function App() {
  return (
    <div className="">
      <Suspense fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#041A3C]"></div>
        </div>
      }>
        <Routes>
          {routes.map(
            (route: any, i: number) =>
              route.component && (
                <Route key={i} path={route.path} element={<route.component />} />
              )
          )}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;