import { useAuth } from "../context/authContext.jsx";

export function Home() {
  const authContext = useAuth();
  console.log(authContext);
  return <div>Home</div>;
}
