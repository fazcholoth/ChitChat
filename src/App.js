import "./App.css";
import Messenger from "./Components/Messenger";

import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./Context/AccountProvider";

function App() {
  const ClientId =
    "1014426289310-3him2cn68qu2h3q6g00i3fm8a4uc2afg.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={ClientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
