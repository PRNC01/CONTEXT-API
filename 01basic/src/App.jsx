import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ContextProvider } from './context/context';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('')

  return(
    <ContextProvider value={{user, setUser, pass, setPass}}>
      <Login />
      <Profile />
    </ContextProvider>
  )
  
}

export default App
