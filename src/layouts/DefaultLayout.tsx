import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

interface DefaultLayoutProps {
  children?: React.ReactElement;
}

export default function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <div>
      {/*공통 해더 정의*/}
      <Header />
      {/*해당 페이지 내용 정의*/}
      <main>{props.children || <Outlet />}</main>
      {/*공통 푸터 정의*/}
      <Footer />
    </div>
  );
}
