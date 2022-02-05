import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();

  // Get signUp function from the auth context
  const { signUp } = useAuth();

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
    await signUp({ email, password });
  }

  return (
    <>
      <div className="w-full dark:bg-gray-800 h-screen pt-20">
        <div className="mx-auto bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up</h3>
            <label
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              htmlFor="input-email"
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
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              htmlFor="input-password"
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

            <button
              type="submit"
              className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </form>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            <br></br>
            Already have an account?{" "}
            <Link to="/login" className="text-purple-700 hover:underline dark:text-blue-500">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
