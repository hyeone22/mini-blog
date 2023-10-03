import styled from 'styled-components';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/page/MainPage';
import PostWritePage from './components/page/PostWritePage';
import PostViewPage from './components/page/PostViewPage';

const MainTitleText = styled.p`
  border: 1px solid red;

`;

const SideTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  border: 1px solid blue;
  text-align: center;
`

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>
        logo/로그인/설정창/검색창/
        <SideTitleText>
        승현의 미니 블로그  
        </SideTitleText>
      </MainTitleText>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="post-write" element={<PostWritePage />} />
          <Route path="post/:postId" element={<PostViewPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
