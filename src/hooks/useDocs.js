import { addDoc, collection, db, getDocs } from "../../firebase";
export function addLaptop(title, price, rating, like, image) {
  addDoc(collection(db, "laptops"), {
    title: title,
    image: image,
    like: like,
    price: price,
    rating: rating,
  });
}
export async function getAllLaptops() {
  const snapshot = await getDocs(collection(db, "laptops"));
  const laptops = snapshot.docs.map((doc) => doc.data());
  console.log(laptops);
  return laptops;
}
