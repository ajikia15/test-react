import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../src/contexts/UserContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function SignIn() {
  const { login, user } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: "onChange",
  });

  if (user) {
    return <Navigate to="/" replace />;
  }

  async function userSubmit(data) {
    try {
      const mockUser = {
        name: data.name,
        email: data.email,
      };

      await login(mockUser);
      toast.success("User signed in successfully");
      reset();
    } catch (error) {
      toast.error("Error signing in");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <img src="/vite.svg" alt="Logo" className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome to FakeStoreApp
        </h2>
        <p className="text-gray-600 mt-2">Sign in to continue</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit(userSubmit)}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <span className="text-red-500 pt-2">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="text-red-500 pt-2">{errors.password.message}</span>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
}
