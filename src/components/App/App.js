import React from 'react';
import './App.css';

const App = () => (
      <div className="app">
        <header className="app-header">
        <div className="app-logo">
          <h1 className="app-title">Recipe Book</h1>
          <span className="app-subtitle">For All Your Recipe Needs</span>
        </div>
        <nav>
          <ul>
            <li>home</li>
            <li>add recipe</li>
          </ul>
        </nav>
        </header>
        <main>
          { /* TODO: display recipes */   }
        </main>
      </div>
);

export default App;
