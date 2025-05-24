import { useState } from "react";
import { addLaptop } from "../src/hooks/useDocs";
import { useForm } from "react-hook-form";
import { getLaptop } from "../src/hooks/useDocs";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { editLaptop } from "../src/hooks/useDocs";
import { toast } from "react-toastify";
export default function EditPostPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: "onChange",
  });

  async function fetchData() {
    try {
      const data = await getLaptop(id);
      console.log(data);
      reset({
        title: data.title,
        price: data.price,
        rating: data.rating,
        like: data.like,
        image: data.image,
      });
    } catch (error) {
      toast.error("Failed to fetch laptop data");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  async function laptopSubmit(data) {
    try {
      await editLaptop(
        id,
        data.title,
        data.price,
        data.rating,
        data.like,
        data.image
      );
    } catch (e) {
      toast.error("Error with updating laptop", e);
    } finally {
      toast.success("Laptop Updated sucessfully");
    }
  }

  if (loading) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <div className="h-8 bg-gray-200 rounded animate-pulse mb-8"></div>

        <div className="space-y-6">
          {/* Title Field Skeleton */}
          <div>
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-1 w-24"></div>
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Image URL Field Skeleton */}
          <div>
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-1 w-20"></div>
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Like Field Skeleton */}
          <div>
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-1 w-12"></div>
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Price Field Skeleton */}
          <div>
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-1 w-16"></div>
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Rating Field Skeleton */}
          <div>
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-1 w-20"></div>
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Submit Button Skeleton */}
          <div>
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Edit Product
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit(laptopSubmit)}>
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
            {...register("title", {
              required: "Title is required",
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.title && (
            <span className="text-red-500 pt-2">{errors.title.message}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image URL
          </label>
          <input
            type="url"
            id="image"
            {...register("image", {
              required: "Image url is required AAAAAAAA",
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.image && (
            <span className="text-red-500 pt-2">{errors.image.message}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="like"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Like
          </label>
          <input
            type="number"
            id="like"
            {...register("like", {
              valueAsNumber: true,
              required: "Likes are required",
              min: 0,
              max: 1500,
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.like && (
            <span className="text-red-500 pt-2">{errors.like.message}</span>
          )}
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
              {...register("price", {
                valueAsNumber: true,
                required: "Please enter price",
                min: {
                  value: 100,
                  message: "Price must be greater than 100",
                },
                max: {
                  value: 10000,
                  message: "Price must be less than 10000",
                },
              })}
              className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.price && (
              <span className="text-red-500 pt-2">{errors.price.message}</span>
            )}
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
            {...register("rating", {
              valueAsNumber: true,
              required: "Rating is required",
              min: {
                value: 0,
                message: "Rating must not be lower than 0",
              },
              max: {
                value: 5,
                message: "Rating must not be greater than 5",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.rating && (
            <span className="text-red-500 pt-2">{errors.rating.message}</span>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
          >
            Edit Product
          </button>
        </div>
      </form>
    </div>
  );
}
