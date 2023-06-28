// index.js는 public/index.html 페이지에 적용되는 컴포넌트다!

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
// 컴포넌트들
import Layout from './studio/Layout';
import Main from './studio/Main';
import Info from './studio/Info';
import Work from './studio/Work';
import Contact from './studio/Contact';
import ScrollTop from './studio/common/ScrollTop';
import Detail from './studio/Detail';
// CSS
import './index.css';


export default function App() {

  return (
    <>  
      {/* <BrowserRouter> */}
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
        <HashRouter>
          <ScrollTop />
          <Routes>
            {/* 중요! : 레이아웃 컴포넌트를 루트로 잡아준다! */}
            <Route path="/" element={<Layout />} >
              {/* 하위라우트 셋팅 */}
              <Route index element={<Main />} />
              <Route path="main" element={<Main />} />
              <Route path="in" element={<Info />} />
              <Route path="wo" element={<Work />} />
              <Route path="ct" element={<Contact />} />
              <Route path="/wo/det" element={<Detail />} />

            </Route>
          </Routes>
        
        </HashRouter>
      {/* </BrowserRouter> */}
    </>
  );
  
} //////////////// App 컴포넌트 /////////////////

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
