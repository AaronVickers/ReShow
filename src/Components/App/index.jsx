import { BrowserRouter, Switch, Route } from "react-router-dom"
import { AuthProvider } from "../../Contexts/Authentication"

import { SignIn, SignOut } from "../Authentication"
import { NotesPage } from "../Notes"

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <SignIn />
        <SignOut />
        <NotesPage />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App