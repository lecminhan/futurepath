import NavBar from '../components/Navbar';
// import ChatArea from '../components/AiChatbox/chatArea';
import Sidebar from '../components/AiChatbox/aiSidebar';
const ChatPage: React.FC = () => {
  return (
    <div style={{boxSizing:'border-box'}}>
    <NavBar/>
    {/* <ChatArea/> */}
    <Sidebar/>
      </div>
  );
};

export default ChatPage;
