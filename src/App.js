import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    // initialises Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <div className="App">
        My App
      </div>
    </Fragment>
  )
}

export default App;
