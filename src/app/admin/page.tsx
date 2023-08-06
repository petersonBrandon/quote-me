import { Nav } from "@/components/admin";
import { DarkToggle } from "@/components/public";
import { Metadata } from "next";
import React from "react";
import clientPromise from "../../lib/mongodb";

export const metadata: Metadata = {
  title: "QuoteMe Admin",
  description: "Admin dashboard for QuoteMe",
};

// const getDB = async () => {
//   try {
//     const client = await clientPromise;
//     const db = client.db("sample_mflix");

//     const movies = await db
//       .collection("movies")
//       .find({})
//       .sort({ metacritic: -1 })
//       .limit(10)
//       .toArray();

//     return movies;
//   } catch (e) {
//     console.error(e);
//   }
// };

const page = async () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Nav />
      <div className="fixed top-0 right-0 m-5">
        <DarkToggle />
      </div>
    </main>
  );
};

export async function getServerSideProps() {}

export default page;
