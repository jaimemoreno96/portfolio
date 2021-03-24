import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import '@fontsource/roboto';

import Portfolio from './components/Portfolio';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Portfolio />
    </Fragment>
  );
}

export default App;
