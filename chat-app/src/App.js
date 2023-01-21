import "./App.css";
import { ChatEngine } from "react-chat-engine";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName={process.env.REACT_APP_USERNAME}
      userSecret={process.env.REACT_APP_USERSECRET}
    />
  );
}

export default App;
