import Card from "../src/Card";
import { useState, useEffect } from "react";

const fakeCards = [
  {
    title: "Beautiful Lake",
    body: "A serene view of the lake at sunset.",
    image: "/post.jpg",
    rating: 4.7,
  },
  {
    title: "Mountain Hike",
    body: "Challenging but rewarding mountain trail.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
  },
  {
    title: "City Lights",
    body: "The city comes alive at night with vibrant lights.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    rating: 4.5,
  },
];

export default function Home() {
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
      ></div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
          marginTop: "32px",
        }}
      >
        {/* Normal cards with API data */}
        {posts.map((post, idx) => (
          <Card
            key={idx}
            title={post.title}
            body={post.body}
            image={"/post.jpg"}
            rating={((post.id % 5) + 1).toFixed(1)}
            id={post.id}
          />
        ))}
      </div>
    </>
  );
}
