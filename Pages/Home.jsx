import Card from "../src/Card";
import { useState, useEffect } from "react";
import Navbar from "../src/Navbar";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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
      <Navbar />
      {/* <div>
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
      </div> */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
          marginTop: "32px",
        }}
      >
        {posts.map((post, idx) => (
          <Card
            key={idx}
            title={post.title}
            body={post.description}
            image={post.image}
            rating={5}
            id={post.id}
          />
        ))}
      </div>
    </>
  );
}
