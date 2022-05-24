import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import PostPage from "./pages/PostPage/PostPage";

function App() {
  return (
    <BrowserRouter>
      <div className="gradient-bg">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:postId" element={<PostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
