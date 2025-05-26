import { useEffect, useState } from "react";
import { getAllLaptops } from "../src/hooks/useDocs";
import { Eye, Edit, Trash2 } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import TableSkeleton from "../src/TableSkeleton";
import { UserContext } from "../src/contexts/UserContext";
import { useContext } from "react";
export default function AdminDashboard() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    const data = await getAllLaptops();
    setLaptops(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    console.log("Delete laptop:", id);
    // toast.warn("Trying to delete laptop with ID: " + id);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Admin Dashboard
        </h1>
        <Link to="/create" className="">
          <button className=" cursor-pointer px-4 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-500 transition-colors mb-6 inline-block">
            Create Post
          </button>
        </Link>

        {loading ? (
          <TableSkeleton rows={5} />
        ) : (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Likes
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {laptops.map((laptop) => (
                    <tr
                      key={laptop.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src={laptop.image}
                          alt={laptop.title}
                          className="h-16 w-16 object-cover rounded-lg"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {laptop.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 font-semibold">
                          ${laptop.price}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">⭐</span>
                          <span className="text-sm text-gray-900">
                            {laptop.rating}/5
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {laptop.like} likes
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Link to={`/post/${laptop.id}`}>
                            <button
                              className="inline-flex items-center p-2 text-blue-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-colors"
                              title="View"
                            >
                              <Eye size={16} />
                            </button>
                          </Link>
                          <Link to={`/edit/${laptop.id}`}>
                            <button
                              className="inline-flex items-center p-2 text-green-600 hover:text-green-900 hover:bg-green-50 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Edit size={16} />
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDelete(laptop.id)}
                            className="inline-flex items-center p-2 text-red-600 hover:text-red-900 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {laptops.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No laptops found</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
