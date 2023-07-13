import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
type Props = {};

const Home = (props: Props) => {
  return (
    <div className="w-full h-full bg-home bg-repeat bg-cover">
      <Navbar />
      <div className="min-h-[80vh] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center p-4 bg-black/50 rounded-md">
          <h1 className="text-5xl font-bold">SmartEats</h1>
          <span className="my-2">
            A Celebration of Food: Where Every Dish Tells a Story of Flavorful
            Traditions.
          </span>
          <Link
            href="/products"
            className="my-2 p-2 border-2 rounded-lg hover:scale-125 transition-all duration-500"
          >
            See Products
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
