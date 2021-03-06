import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import { useRef } from "react";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { signIn } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // Get email and password input values
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      alert("Please add email and password");
      return;
    }

    // Calls `signUp` function from the context
    const { error } = await signIn({ email, password });

    if (error) {
      console.log("error", error);
      alert("Error signing in, please check: " + (error?.message || "Contact support"));
    } else {
      // Redirect user to Dashboard
      navigate("/");
    }
  }

  return (
    <>
      <div className="w-full">
        <div className="mx-auto bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in</h3>
            <label
              htmlFor="input-email"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="input-email"
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required=""
              ref={emailRef}
            />

            <label
              htmlFor="input-password"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Password
            </label>
            <input
              id="input-password"
              type="password"
              placeholder="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
              ref={passwordRef}
            />

            <br />

            <Link
              to="/forgot"
              className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500"
            >
              Forgot Password?
            </Link>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </form>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            <br></br>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-700 hover:underline dark:text-blue-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
