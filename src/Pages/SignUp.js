import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";
import { AuthContext } from "../Contexts/AuthProvider";
import useToken from "../Hooks/useToken";
// import useTitle from "../Hooks/useTitle";

const SignUp = () => {
  const { createUser, loader, setLoader, updateUser } = useContext(AuthContext);
  const [roler, setRoler] = useState();
  const [error, setError] = useState("");

  const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [token] = useToken(createdUserEmail);

  // jump others page after log in
  const navigate = useNavigate();

  if(token){
    navigate("/");
  }

  // dynamic title
  //   useTitle("Signup");

  

  // handle event
  const handleSignup = (event) => {
    event.preventDefault();
    setLoader(true);
    setError("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = roler;
    // console.log(name, email, password, role);

    createUser(email, password)
      .then((result) => {
        // const user = result.user;
        // console.log(user);
        setLoader(false);
        toast("User Create Successfully!");
        const userInfo = {
          displayName: name,
        };
        // console.log(userInfo.displayName + "user");
        updateUser(userInfo)
          .then(() => {
            saveUser(name, email, role);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        setError(err.message);
        setLoader(false);
      });
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://a12-used-products-resalling-app-server-side.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {

        setCreatedUserEmail(email);
        // getUserToken(email);
      });
  };

  // const getUserToken = email => {
  //   fetch(`https://a12-used-products-resalling-app-server-side.vercel.app/jwt?email=${email}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     if(data.accessToken){
  //       localStorage.setItem('accessToken', data.accessToken);
  //       navigate("/");
  //     }
  //   })
  // }

  return (
    <div>
      <div>{loader && <Spinner></Spinner>}</div>
      <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
        <div className="mx-auto h-full sm:w-max">
          <div className="m-auto  py-12">
            <h3 className="text-center">Please Sign Up</h3>
            <div className="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
              <h3 className="text-3xl font-semibold text-gray-700 dark:text-white">
                Create a free accounts
              </h3>

              <form
                onSubmit={handleSignup}
                className="mt-10 space-y-8 dark:text-white"
              >
                <div>
                  <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input
                      required
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none transition"
                    />
                  </div>
                </div>
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
                <div>
                  <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input
                      required
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Your Pasword"
                      className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none transition"
                    />
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex justify-center">
                    <div>
                      <div className="form-check">
                        <input
                          onChange={(e) => setRoler(e.target.value)}
                          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          required
                          value="Buyer"
                          checked="checked"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label inline-block text-gray-800 cursor-pointer"
                          htmlFor="flexRadioDefault1"
                        >
                          Buyer
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          onChange={(e) => setRoler(e.target.value)}
                          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          required
                          value="Seller"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label inline-block text-gray-800 cursor-pointer"
                          htmlFor="flexRadioDefault2"
                        >
                          Seller
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input
                      required
                      id="url"
                      name="url"
                      type="text"
                      placeholder="Your Photo URL"
                      className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none transition"
                    />
                  </div> */}
                  <button type="reset" className="-mr-3 w-max p-3">
                    <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                      Forgot password ?
                    </span>
                  </button>
                </div>
                <div>
                  {error && <small className="text-red-600">{error}</small>}
                  <button className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                    <span className="text-base font-semibold text-white dark:text-gray-900">
                      Sign Up
                    </span>
                  </button>
                  <Link to="/login">
                    <button href="#" type="reset" className="-ml-3 w-max p-3">
                      <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                        Already have an account? Log in
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

export default SignUp;
