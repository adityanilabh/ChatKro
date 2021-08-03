import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="
  20f12e26-3be5-4b58-9984-af252a28c366"
      userName="phoenix-1-2"
      userSecret="18104063"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
