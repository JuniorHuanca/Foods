"use client";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { ramdon } from "@/shared/data/ramdon";
import { BsFileArrowDownFill } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/navigation";
type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  return (
    <main className="w-full h-full">
      <div className="w-full h-full bg-home dark:bg-homeDark bg-repeat bg-cover">
        <Navbar />
        <div className="min-h-[90vh] flex justify-center items-center">
          <div className="flex flex-col justify-center items-center p-4 bg-black/50 rounded-md text-white">
            <h1 className="text-3xl md:text-5xl font-bold">SmartEats</h1>
            <span className="my-2">
              A Celebration of Food: Where Every Dish Tells a Story of Flavorful
              Traditions.
            </span>
            <button
              className="my-2 rounded-lg"
              onClick={() => {
                const windowHeight = window.innerHeight;
                window.scrollTo({
                  top: windowHeight,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <BsFileArrowDownFill className="text-5xl animate-bounce" />
            </button>
          </div>
        </div>
      </div>
      <section
        id="featured"
        className="min-h-[90vh] w-full flex flex-col justify-center items-center"
      >
        <div className="w-full flex flex-col gap-10 justify-center items-center p-4 bg-slate-200 dark:bg-black/50 rounded-md">
          <div className="flex items-center w-full">
            <span className="flex-grow h-0 border-b-2 border-black dark:border-white"></span>
            <h2 className="uppercase font-bold text-xl px-4">
              Featured Recipes
            </h2>
            <span className="flex-grow h-0 border-b-2 border-black dark:border-white"></span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {ramdon.map((e, index) => (
              <div key={index} className="flex flex-col items-center w-72 p-4">
                <div className="w-full relative aspect-square">
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    loading="lazy"
                    className="rounded-full saturate-150"
                  />
                </div>
                <h3 className="py-2 text-center">{e.title}</h3>
                <Link
                  href={`/products/${e.id}`}
                  className="bg-green-600 text-center px-4 py-2 rounded-md w-max"
                >
                  See Recipe
                </Link>
              </div>
            ))}
          </div>
          <div className="flex items-center w-full">
            <span className="flex-grow h-0 border-b-2 border-black dark:border-white"></span>
            <Link
              href="/products"
              className="bg-green-600 text-center mx-4 px-4 py-2 rounded-md font-bold text-xl"
            >
              See Products
            </Link>
            <span className="flex-grow h-0 border-b-2 border-black dark:border-white"></span>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
