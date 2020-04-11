// Libs
import React from 'react'

// Components
import UsersList from 'modules/users/components/UsersList'

// Styles
import 'styles/App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Chat Replay Application</p>
      </header>
      <UsersList />
    </div>
  )
}

export default App
