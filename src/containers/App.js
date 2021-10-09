import React from 'react'

import Header from './Header'

import styles from './App.scss'

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="container">
          <p>Hello React Application!</p>
        </div>
      </main>
    </div>
  )
}

export default App
