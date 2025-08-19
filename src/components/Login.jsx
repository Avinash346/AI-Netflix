import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />

      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_small.jpg"
          alt="image"
        />
      </div>

      <form action="" className="bg-black">
        <input type="text" placeholder="email" className="p-2 m-2" />
        <input type="text" placeholder="password" className="p-2 m-2" />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
