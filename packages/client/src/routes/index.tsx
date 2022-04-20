import React, { Suspense } from 'react';
import { BrowserRouter, Routes as RouteList, Route } from 'react-router-dom';

import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import SignUpPage from '../pages/SignUp';

const EventsPage = React.lazy(() => import('../pages/Events'));

export const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<h1>Rendering...</h1>}>
      <RouteList>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/events" element={<EventsPage />} />
      </RouteList>
    </Suspense>
  </BrowserRouter>
);
