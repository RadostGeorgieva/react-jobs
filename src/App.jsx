import React from 'react'
import HomePage from './pages/HomePage';
import JobsPage from './pages/jobsPage';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import MainLayout from './layouts/MainLayout';
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )

);

const App = () => {
  return (<RouterProvider router={router} />
  )
}

export default App
