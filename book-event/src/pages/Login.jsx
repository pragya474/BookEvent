import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailure } from "../features/userSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  // Get loading, error, and user from the Redux store
  const { user, error, loading } = useSelector((state) => state.user);

  // Check if user is already in localStorage and dispatch the login action
  useEffect(() => {
    const fetchData = async () => {
      const result = localStorage.getItem("user");
      if (result) {
        const res = JSON.parse(result);
        await dispatch(loginSuccess(res)); // Dispatch loginSuccess to store in Redux

        // Wait for the action to complete, then redirect
        // window.location.href = "/my-profile"; // Redirect after dispatching the action
      }
    };
    fetchData();
  }, [dispatch]); // Dispatch needs to be part of the dependency array

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Dispatch loginStart to indicate the process has started

    const userData = JSON.stringify({ name, email, password });

    try {
      // Save user data in localStorage
      localStorage.setItem("user", userData);
      toast.success("Login success");

      // Dispatch loginSuccess to store user data in Redux
      dispatch(loginSuccess({ name, email, password }));

      // After successful login, redirect to the profile page
      window.location.href = "/my-profile";
    } catch (error) {
      console.log(error);
      toast.error("Login failed!");

      // Dispatch failure if something goes wrong (for example, wrong credentials)
      dispatch(loginFailure("Login failed. Please try again."));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-sm shadow-lg">
        <p className="text-2xl font-semibold text-primary">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="text-blue-700">
          Please {state === "Sign Up" ? "Sign Up" : "log in"} to book an event
        </p>
        {state === "Sign Up" ? (
          <div className="text-blue-700 w-full ">
            <p>Full Name</p>
            <input
              className="border border-blue-700 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        ) : null}
        <div className=" text-blue-700 w-full ">
          <p>Email</p>
          <input
            className="border border-blue-700 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className=" text-blue-700 w-full ">
          <p>Password</p>
          <input
            className="border border-blue-700 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-blue-700 w-full py-2 rounded-md text-base"
        >
          {state === "Sign Up" ? "Create account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p className="text-blue-700">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-blue-700">
            Create a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
