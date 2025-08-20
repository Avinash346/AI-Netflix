import React from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = React.useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      <div className="absolute inset-0 -z-10 ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_small.jpg"
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>

      <form
        action=""
        className="bg-black/80 rounded-lg absolute  text-white p-8  my-36 mx-auto xl:w-4/12  lg:w-3/12   md:w-1/12 sm:w-1/12 left-0 right-0   "
      >
        <h1 className="font-bold text-3xl p-3 m-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 mx-auto  my-3 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="email"
          className="p-3 mx-auto  my-3 w-full bg-gray-700"
        />
        <input
          type="text"
          placeholder="password"
          className="p-3 mx-auto w-full my-3 bg-gray-700"
        />
        <button className="bg-red-900 w-full my-3 p-3 mx-auto rounded-lg ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to netflix ? Sign up now"
            : "Already have an account ? Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
