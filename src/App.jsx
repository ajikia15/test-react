import "./App.css";
import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
import Postpage from "../Pages/Postpage";
import Navbar from "./Navbar";
import Searchpage from "../Pages/Searchpage";
import About from "../Pages/About";
import CreatePostPage from "../Pages/CreatePostPage";
import Dashboard from "../Pages/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import EditPostPage from "../Pages/EditPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Postpage />} />
        <Route path="/search/:term" element={<Searchpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/edit/:id" element={<EditPostPage />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
