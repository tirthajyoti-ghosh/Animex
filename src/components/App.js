import React from 'react';
import '../styles/App.css';
import getTopAnime from '../API/getTopAnime';

function App() {
  return (
    <div className="App">
      list of top anime
    </div>
  );
}

getTopAnime().then(result => {
  console.log(result);
});

export default App;
