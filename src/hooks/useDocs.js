import {
  addDoc,
  collection,
  db,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "../../firebase";
export async function addLaptop(title, price, rating, like, image) {
  try {
    await addDoc(collection(db, "laptops"), {
      title: title,
      image: image,
      like: like,
      price: price,
      rating: rating,
    });
    return true;
  } catch (error) {
    console.error("Error adding laptop:", error);
    return false;
  }
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

export async function editLaptop(id, title, price, rating, like, image) {
  const docRef = doc(db, "laptops", id);
  await setDoc(docRef, {
    title: title,
    image: image,
    like: like,
    price: price,
    rating: rating,
  });
}
