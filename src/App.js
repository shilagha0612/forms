
import './App.css';
import react, { useState } from 'react';
// import User from './Components/User';
import MessageForm from './Components/MessageForm';
import MessageDisplay from './Components/MessageDisplay';
// import MyComponent from './Components/MyComponent';

function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  const youveGotMail = (newMessage) => {
    setCurrentMsg(newMessage);
  }
  return (
    <div className="App">
      {/* <User /> */}
      <MessageForm onNewMessage={youveGotMail} /> 
      {currentMsg}
      <MessageDisplay message={currentMsg} />
      {/* <MyComponent /> */}
    </div>
  );
}


export default App;
