import "./App.css";
import Instagrampost from "./Instagrampost";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  function handleAddPost() {
    if (newTitle.trim() === "" || newBody.trim() === "") {
      return;
    }

    const newPost = {
      id: Date.now(),
      title: newTitle,
      body: newBody,
    };

    setPosts([newPost, ...posts]);
    setNewTitle("");
    setNewBody("");
  }
  return (
    <>
      <div>
        <h2>Add a post</h2>
        {newTitle} {newBody}
        <br />
        <input
          type="text"
          placeholder="Input text title"
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Input text title"
          value={newBody}
          onChange={(e) => {
            setNewBody(e.target.value);
          }}
        ></input>
        <button onClick={handleAddPost}>Add new post</button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "5px",
        }}
      >
        {posts.map((post, i) => (
          <Instagrampost
            key={i}
            title={post.title}
            body={post.body}
            id={post.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
