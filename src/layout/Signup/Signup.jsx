import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-lg rounded-xl px-8 py-4 shadow-xl">
        <h2 className="my-3 text-center text-3xl font-bold uppercase text-secondary">
          Sign Up
        </h2>
        <form
          action="#"
          className="flex flex-col items-start justify-center gap-2"
        >
          <label className="font-semibold uppercase" htmlFor="userName">
            user name:
          </label>
          <input
            className="mb-1 rounded-lg border p-2"
            type="text"
            id="userName"
            name="userName"
            placeholder="type your user name here"
          />
          <label className="font-semibold uppercase" htmlFor="password">
            password:
          </label>
          <input
            className="mb-1 rounded-lg border p-2 "
            type="password"
            id="password"
            name="password"
            placeholder="type your password here"
          />
          <label className="font-semibold uppercase" htmlFor="password">
            confirm password:
          </label>
          <input
            className="mb-1 rounded-lg border p-2 "
            type="password"
            id="password"
            name="password"
            placeholder="type your password here"
          />

          <button
            className="w-full rounded-lg bg-secondary p-3 text-sm font-semibold uppercase text-white"
            type="submit"
          >
            sign up
          </button>
          <small className="text-medium font-semibold">
            already have an account{" "}
            <Link
              to={"/login"}
              className="mt-2 cursor-pointer font-semibold uppercase text-primary"
            >
              login
            </Link>{" "}
            now
          </small>
        </form>
        <div className="my-3 flex w-full items-center justify-center gap-2">
          <div className="w-full border-2 border-secondary"></div>
          or
          <div className="w-full border-2 border-secondary"></div>
        </div>
        <button
          type="button"
          className="my-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-secondary bg-yellow-400 py-2 text-center text-sm font-semibold capitalize text-secondary hover:opacity-90"
        >
          <FaGoogle />
          sign up using google
        </button>
        <button
          type="button"
          className="my-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-secondary bg-black py-2 text-center text-sm font-semibold capitalize text-white hover:opacity-90"
        >
          <FaGithub />
          sign up using github
        </button>
        <button
          type="button"
          className=" my-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-secondary bg-blue-800 py-2 text-center text-sm font-semibold capitalize text-white hover:opacity-90"
        >
          <FaFacebook />
          sign up using facebook
        </button>
      </div>
    </div>
  );
}

export default Signup;
