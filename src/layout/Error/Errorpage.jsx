import React from "react";
import { Link } from "react-router-dom";

function Errorpage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <img
          className="mx-auto w-[400px]"
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1684598010~exp=1684598610~hmac=5bd90daa38f81dfd1cfe32513d5db3ad1eb167bb8bd7c09c04f4d8a80c8e2991"
          alt="error page"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="mt-4 text-center text-3xl font-semibold capitalize text-secondary">
          Opps! An Error Occured
        </p>
        <p className="my-2 text-center text-lg font-medium text-secondary">
          Go back to
        </p>
        <Link
          to={"/"}
          className="mx-auto rounded-lg bg-secondary p-5 font-semibold uppercase text-white"
        >
          homepage
        </Link>
      </div>
    </div>
  );
}

export default Errorpage;
