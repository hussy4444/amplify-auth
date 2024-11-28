import "./App.css";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <h1>Hello, {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <AmplifySignOut />
//         <h2>My app Content</h2>
//       </header>
//     </div>
//   );
// }

export default withAuthenticator(App);
