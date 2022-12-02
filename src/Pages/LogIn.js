import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";
import { AuthContext } from "../Contexts/AuthProvider";
import useToken from "../Hooks/useToken";

const LogIn = () => {
  const { loginWithEmail, loader, setLoader, signInProvider } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  // jump others page after log in
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(from);

  useEffect(() => {
    const from = location.state?.from?.pathname || "/";
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, location, navigate]);

  // log in with email and password
  const handleLogin = (event) => {
    event.preventDefault();
    setLoader(true);
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    loginWithEmail(email, password)
      .then((result) => {
        // console.log(result.user);
        setLoader(false);
        // navigate(from, { replace: true });
        setLoginUserEmail(email);
      })
      .catch((err) => {
        setError(err.message);
        setLoader(false);
      });
  };

  // google auth provider
  const googleProvider = new GoogleAuthProvider();

  // log in with google
  const signInWithGoogle = () => {
    setLoader(true);
    signInProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const name = user.displayName;
        const role = "Buyer";
        const email = user?.email;
        setLoader(false);
        saveUser(name, email, role);
        setLoginUserEmail(email);
        console.log(name, email, role);
        // navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        setLoader(false);
      });
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch(
      "https://a12-used-products-resalling-app-server-side.vercel.app/users",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div>{loader && <Spinner></Spinner>}</div>
      <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
        <div className="mx-auto h-full sm:w-max">
          <div className="m-auto  py-12">
            {/* <h3 className="text-center">Please Log In</h3> */}
            <div className="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
              <h3 className="md:text-4xl font-semibold text-gray-700 dark:text-white">
                Login to your account
              </h3>
              <div className="mt-12 grid">
                <button
                  onClick={signInWithGoogle}
                  className="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
                >
                  <div className="w-max mx-auto flex items-center justify-center space-x-4">
                    <img
                      src="https://svgshare.com/i/ng7.svg"
                      className="w-5"
                      alt=""
                    />
                    <span className="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white">
                      With Google
                    </span>
                  </div>
                </button>
              </div>
              <form
                onSubmit={handleLogin}
                className="mt-10 space-y-8 dark:text-white"
              >
                <div>
                  <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input
                      required
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none transition"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input
                      required
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Your Password"
                      className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none transition"
                    />
                  </div>
                  <small className="text-red-600">{error}</small>

                  <button type="reset" className="-mr-3 w-max p-3">
                    <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                      Forgot password ?
                    </span>
                  </button>
                </div>
                <div>
                  <button className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                    <span className="text-base font-semibold text-white dark:text-gray-900">
                      Login
                    </span>
                  </button>
                  <Link to="/signup">
                    <button href="#" type="reset" className="-ml-3 w-max p-3">
                      <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                        Don’t have an account? Sign Up
                      </span>
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
