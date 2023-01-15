import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
