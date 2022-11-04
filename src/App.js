// import React from 'react'
import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
function App() {
  return (
    <ChatEngine
        height="100vh"
        projectID="c0a2ef2f-72db-44f2-ba43-5f444a8bfa2d"
        userName="microengineer"
        userSecret="12345"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App;

