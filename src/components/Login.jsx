import { useState } from "react";
import { useAuth } from "../context/authContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert.jsx";

export function Login() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const [error, seterror] = useState("");

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) =>
    setuser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (err) {
      console.log(err.code);
      seterror(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err) {
      seterror(err.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="youremail@company.ltd"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            placeholder="********"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-black text-sm py-2 px-4 rounded focus:outline-none
        focus:shadow-outline w-full"
        >
          Login
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      <button
        className="bg-slate-50 hover:bg-slate-100 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full"
        onClick={handleGoogleSignIn}
      >
        Login with Google
      </button>
    </div>
  );
}
