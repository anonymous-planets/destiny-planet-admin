import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Router 정의
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

// Error Page 정의
import Error404 from '../pages/error/Error404';
import Error500 from '../pages/error/Error500';

// Layout 정의
import DefaultLayout from '../layouts/DefaultLayout';

// Page 정의
import MainPage from '../pages/main';
import IndexPage from '../pages';
import LoginPage from '../pages/main/LoginPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 인증 받지 않은 사용자만 접근 가능 페이지 정의 */}
        <Route element={<PublicRouter />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* 인증 받은 사용자만 접근 가능 페이지 정의 */}
        <Route element={<PrivateRouter />}>
          <Route element={<DefaultLayout />}>
            <Route path="/main" element={<MainPage />} />
          </Route>
        </Route>

        {/*인증 상관없이 접근 가능 페이지 정의 */}
        <Route path="/Error404" element={<Error404 />} />
        <Route path="/Error500" element={<Error500 />} />
      </Routes>
    </BrowserRouter>
  );
}
