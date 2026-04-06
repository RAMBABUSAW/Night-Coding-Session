import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // token remove
    navigate("/login"); // login page pe bhej do
  };

  return (
    <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      {/* Left - Logo */}
      <h1
        onClick={() => navigate("/dashboard")}
        className="text-xl font-bold cursor-pointer"
      >
        PrepAI 🚀
      </h1>

      {/* Right - Logout */}
      <button
        onClick={handleLogout}
        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
