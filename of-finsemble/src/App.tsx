import React, { useEffect } from 'react'
import './App.css';


function App() {

  useEffect(() => {

    console.log("fin", fin.Window.me)

  }, [])

  const toggleDevTools = () => {
    // @ts-ignore
    const browserView = fin.desktop.System.currentWindow.getBrowserView()
    const appWindow = browserView.webContents
    appWindow.openDevTools()
  }

  return (
    <div className="App">
      <button onClick={toggleDevTools}>📟</button>
      <header className="App-header">
        <p>
          OF to Finsemble
        </p>
      </header>
    </div>
  );
}

export default App;
