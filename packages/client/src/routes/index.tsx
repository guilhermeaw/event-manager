import { BrowserRouter, Routes as RouteList, Route } from 'react-router-dom';

import { LoginPage } from '../pages/Login';

export const Routes = () => (
  <BrowserRouter>
    <RouteList>
      <Route path="/login" element={<LoginPage />} />
    </RouteList>
  </BrowserRouter>
);
