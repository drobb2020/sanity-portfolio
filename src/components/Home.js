import React from "react";
import image from "../abigail.jpg";

export default function Home() {
  return (
    <main>
      <img src={image} alt="Abigail aka Abby" className="absolute object-cover w-full h-full"/>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-pink-600 font-bold cursive leading-none lg:leading-snug home-name">Hi, I'm Abby.</h1>
      </section>
    </main>
  )
}
