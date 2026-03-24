import FileUpload from "../components/FileUpload";
import ChatBox from "../components/ChatBox";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Document Assistant</h1>

      <FileUpload />
      <ChatBox />
    </div>
  );
}

export default Home;