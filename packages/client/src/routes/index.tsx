import { BrowserRouter, Routes as RouteList, Route } from 'react-router-dom';
import { EventsPage } from '../pages/Events';

import { HomePage } from '../pages/Home';
import { LoginPage } from '../pages/Login';

export const Routes = () => (
  <BrowserRouter>
    <RouteList>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/events" element={<EventsPage />} />
    </RouteList>
  </BrowserRouter>
);
