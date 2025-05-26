import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { LogOut } from "lucide-react";
export default function SignOutButton() {
  const { logout } = useContext(UserContext);

  return (
    <button className="rounded-full w-6 h-6" onClick={logout}>
      <LogOut />
    </button>
  );
}
