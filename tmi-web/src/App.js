import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main'
import Intro from './pages/Intro'

/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import emotionNormalize from 'emotion-normalize';

function App() {
  return (
    <div className="App">
        <Global
            styles={css`
            ${emotionNormalize}
            html,
            body {
              padding: 0;
              margin: 0;
              background: white;
              min-height: 100%;
              font-family: Helvetica, Arial, sans-serif;
            }
            h1, h2, h3, p{
              margin: 0;
            }
          `}
        />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Intro />} />
      </Routes>
    </div>
  );
}

export default App;
