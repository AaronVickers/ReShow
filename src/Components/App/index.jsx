import { BrowserRouter, Switch, Route } from "react-router-dom"
import { AuthProvider } from "../../Contexts/Authentication"

import { SignIn, SignOut } from "../Authentication"

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <SignIn />
        <SignOut />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App