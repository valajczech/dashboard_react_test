import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Sidebar></Sidebar>
      <div className="content">
        <h1>Hello jsem content</h1>
      </div>
    </div>
  );
}

export default App;
