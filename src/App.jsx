import "./App.css";
import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
import Postpage from "../Pages/Postpage";
import Navbar from "./Navbar";
import Searchpage from "../Pages/Searchpage";
import About from "../Pages/About";
import CreatePostPage from "../Pages/CreatePostPage";
import AdminDashboard from "../Pages/AdminDashboard";
import { ToastContainer } from "react-toastify";
import EditPostPage from "../Pages/EditPostPage";
import UserProvider from "./contexts/UserContext";
import SignIn from "../Pages/SignIn";
function App() {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Postpage />} />
        <Route path="/search/:term" element={<Searchpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/edit/:id" element={<EditPostPage />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        theme="dark"
      />
    </UserProvider>
  );
}

export default App;
