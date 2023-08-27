import Image from "next/image";
import Head from "next/head";
import "./globals.css";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="">
      <div className="absolute z-10 w-full py-10 ">
        <header className="max-w-7xl mx-auto px-10">
          <div className="flex justify-between items-center">
            <div className="w-16">
              <img src="/logo.png" alt="logo" />
            </div>
          </div>
        </header>
      </div>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img src="gif.gif" alt="gambar1" className="mt-40 px-32 space-x-0 space-y-0 md:w-full" />
          </div>

          <div className="mx-auto">
            <form className="md:mt-44 mt-10">
              <img src="/gambar_2.png" width={200} className="justify-center" />
              <p className="text-sm font-sans mb-5"> We are here to handle your company's needs</p>
              <div>
                <label className=" text-sm font-sans">Email Addres</label>
                <input
                  type=""
                  className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                />
              </div>
              <div className="mt-3">
                <label className=" text-sm font-sans">Password</label>
                <input
                  type=""
                  className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                />
              </div>

              <Link href="/dashboard">
                <button className="mt-10 w-full rounded-lg bg-accent-1 text-white px-3 py-2 font-mons">Login</button>
              </Link>
            </form>
          </div>
        </div>

        <section>
          <div className="w-full flex items-center justify-center md:mt-20 mt-40 pb-4">
            <p className="text-sm font-light text-slate-500  ">Copyright ThereePy 2023</p>
          </div>
        </section>
      </section>
    </section>
  );
}
