import UserContextProvider from "./context/UserContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"


function App() {

  return (
    <UserContextProvider>
     <h1>Hello we are learning Context API in React</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
