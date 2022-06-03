import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import NewPostPage from "./pages/NewPostPage/NewPostPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PostPage from "./pages/PostPage/PostPage";
import RandomPage from "./pages/RandomPage/RandomPage";
import SigninPage from "./pages/SigninPage/SIgninPage";
import SignupPage from "./pages/SignupPage/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <div className="gradient-bg">
        <Header />
        <Routes>
					<Route path='*' element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/posts/:postId" element={<PostPage />} />
          <Route path="/newpost" element={<NewPostPage />} />
          <Route path="/random" element={<RandomPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
