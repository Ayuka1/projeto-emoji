import React from 'react';
import './style/App.css'
import Instructions from './Component/Instructions';
import EmojiList from './Component/EmojisList'

function App() {
  const greeting= "greeting";
  const displayAction = false;
  return(
    <div className="container">
      <h1 id={greeting}>Hello world!</h1>
      {displayAction && <p>I am Writing JSX</p>}
      <Instructions />
      <EmojiList />
    </div>
  )
}

export default App
