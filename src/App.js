import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';

import Sidebar from './components/Sidebar';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Sidebar />
      <h1>Hello World</h1>
    </Fragment>
  )
}
export default App;