import React, { Component } from 'react';
import './App.css';

import PictureHolder from './components/PictureHolder/PictureHolder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Cheer Up! =)</h2>
        </div>

        <PictureHolder></PictureHolder>
    
      </div>
    );
  }
}

export default App;
