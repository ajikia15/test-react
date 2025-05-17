import { useState } from "react";
import { addProduct } from "../src/hooks/useDocs";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(title, imageUrl, likeCount, price, rating);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Create New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Product Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="likeCount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Like Count
          </label>
          <input
            type="number"
            id="likeCount"
            value={likeCount}
            onChange={(e) => setLikeCount(Number(e.target.value))}
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Price
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              min="0"
              step="1"
              className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Rating (0-5)
          </label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="0"
            max="5"
            step="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
