import Card from "../src/Card";
import { useState, useEffect } from "react";
import { getAllLaptops } from "../src/hooks/useDocs";
export default function Home() {
  const [laptops, setLaptops] = useState([]);
  async function fetchData() {
    const data = await getAllLaptops();
    setLaptops(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center mt-12">
        {laptops.map((laptop, i) => (
          <Card
            key={i}
            title={laptop.title}
            body={laptop.description}
            image={laptop.image}
            like={laptop.like}
            rating={laptop.rating}
            price={laptop.price}
            id={laptop.id}
          />
        ))}
      </div>
    </>
  );
}
