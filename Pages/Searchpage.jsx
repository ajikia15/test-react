import { useParams } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { getAllLaptops } from "../src/hooks/useDocs";
import Card from "../src/Card";
import SkeletonCard from "../src/SkeletonCard";
export default function Searchpage() {
  const { term } = useParams();
  const [laptops, setLaptops] = useState([]);
  async function fetchData() {
    const data = await getAllLaptops();
    const filteredLaptops = data.filter((laptop) =>
      laptop.title.toLowerCase().includes(term.toLowerCase())
    );
    setLaptops(filteredLaptops);
  }
  useEffect(() => {
    fetchData();
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
        <Suspense fallback={<SkeletonCard />}>
          {laptops.length > 0 &&
            laptops.map((laptop, i) => (
              <Card
                key={i}
                id={laptop.id}
                title={laptop.title}
                body={laptop.description}
                image={laptop.image}
                like={laptop.like}
                rating={laptop.rating}
                price={laptop.price}
              />
            ))}
          {laptops.length < 0 && <div>No results found</div>}
        </Suspense>
      </div>
    </div>
  );
}
