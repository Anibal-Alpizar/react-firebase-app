import { useAuth } from "../context/authContext.jsx";

export function Home() {
  const { user, logout, loading } = useAuth();

  const handlerLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl mb-4">
          Welcome {user.displayName || user.email}
        </h1>
        <button
          className="bg-slate-200 hover:bg-slate-300 rounded py-2
        px-4 "
          onClick={handlerLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
