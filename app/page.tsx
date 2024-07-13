import Image from "next/image";
import Hero from "./components/Hero";
import { SearchBar } from "./components";
import {CustomFilter} from "./components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Hero />

      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars</p>
      </div>

      <div className="home__filters">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter/>
        </div>
      </div>

    </main>
  );
}
