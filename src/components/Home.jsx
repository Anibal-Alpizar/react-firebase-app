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
    <div>
      <h1>Welcome {user.displayName || user.email}</h1>
      <button onClick={handlerLogout}>Logout</button>
    </div>
  );
}
