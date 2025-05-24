import { useEffect, useState } from "react";
import { deleteLaptop, getAllLaptops } from "../src/hooks/useDocs";
import { Eye, Edit, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export default function Dashboard() {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const data = await getAllLaptops();
        setLaptops(data);
      } catch (error) {
        console.error("Error fetching laptops:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLaptops();
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div className="h-8 w-48 bg-gray-200 rounded mb-6 animate-pulse"></div>
        <table className="w-full border border-gray-300 shadow-md">
          <thead>
            <tr className="border-b border-gray-300 bg-muted/50">
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Image
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Title
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Price
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Rating
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Likes
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr
                key={index}
                className="border-gray-300 border-b rounded-sm hover:bg-muted/50 transition-colors"
              >
                <td className="p-4">
                  <div className="h-16 w-16 bg-gray-200 rounded animate-pulse"></div>
                </td>
                <td className="p-4">
                  <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                </td>
                <td className="p-4">
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                </td>
                <td className="p-4">
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                </td>
                <td className="p-4">
                  <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <div className="h-8 w-8 bg-gray-200 rounded-md animate-pulse"></div>
                    <div className="h-8 w-8 bg-gray-200 rounded-md animate-pulse"></div>
                    <div className="h-8 w-8 bg-gray-200 rounded-md animate-pulse"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  async function deleteItem(id) {
    if (window.confirm("Are you sure you want to delete this laptop?")) {
      try {
        await deleteLaptop(id);
        setLaptops((prevLaptops) =>
          prevLaptops.filter((laptop) => laptop.id !== id)
        );
        toast.success("Laptop deleted successfully!");
      } catch (error) {
        console.error("Error deleting laptop:", error);
        toast.error("Failed to delete laptop. Please try again.");
      }
    }
  }

  return (
    <div className=" max-w-6xl mx-auto overflow-hidden">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <table className="w-full border border-gray-300 shadow-md">
        <thead>
          <tr className="border-b border-gray-300 bg-muted/50">
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
              Image
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
              Title
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
              Price
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
              Rating
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
              Likes
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {laptops.map((laptop) => (
            <tr
              key={laptop.id}
              className="border-gray-300 border-b  rounded-sm hover:bg-muted/50 transition-colors"
            >
              <td className="p-4">
                <img
                  src={laptop.image}
                  alt={laptop.title}
                  className="h-16 w-16 object-cover rounded shadow-sm"
                />
              </td>
              <td className="p-4 font-medium">{laptop.title}</td>
              <td className="p-4 font-semibold text-green-600">
                ${laptop.price}
              </td>
              <td className="p-4">
                <span className="inline-flex items-center">
                  ⭐ {laptop.rating}/5
                </span>
              </td>
              <td className="p-4">
                <span className="inline-flex items-center">
                  ❤️ {laptop.like}
                </span>
              </td>
              <td className="p-4">
                <div className="flex space-x-2">
                  <Link to={`/post/${laptop.id}`}>
                    <button
                      className="p-2 hover:bg-blue-100 rounded-md transition-colors group"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4 text-blue-600 group-hover:text-blue-700" />
                    </button>
                  </Link>
                  <Link to={`/edit/${laptop.id}`}>
                    <button
                      className="p-2 hover:bg-green-100 rounded-md transition-colors group"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4 text-green-600 group-hover:text-green-700" />
                    </button>
                  </Link>
                  <button
                    className="p-2 hover:bg-red-100 rounded-md transition-colors group"
                    title="Delete"
                    onClick={() => deleteItem(laptop.id)}
                  >
                    <Trash2 className="w-4 h-4 text-red-600 group-hover:text-red-700" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {laptops.length === 0 && (
        <p className="text-center py-4 text-muted-foreground">
          No laptops found.
        </p>
      )}
    </div>
  );
}
