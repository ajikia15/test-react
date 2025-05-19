import { addDoc, collection, db, getDocs, doc, getDoc } from "../../firebase";
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
  const laptops = snapshot.docs.map((laptop) => ({
    id: laptop.id,
    ...laptop.data(),
  }));
  return laptops;
}

export async function getLaptop(id) {
  const docRef = doc(db, "laptops", id);
  const laptop = await getDoc(docRef);
  if (laptop.exists()) {
    return laptop.data();
  } else return null;
}
