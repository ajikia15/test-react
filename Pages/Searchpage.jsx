import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../src/Card";
export default function Searchpage() {
  const { term } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter((item) =>
          item.title.toLowerCase().includes(term.toLowerCase())
        );
        setPosts(result);
      });
  }, [term]);
  return (
    <div>
      <h1>Search - {term}</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
          marginTop: "32px",
        }}
      >
        {posts.length > 0 ? (
          posts.map((post, i) => (
            <Card
              key={i}
              title={post.title}
              body={post.description}
              image={post.image}
              rating={5}
              id={post.id}
            />
          ))
        ) : (
          <div> no results found</div>
        )}
      </div>
    </div>
  );
}
