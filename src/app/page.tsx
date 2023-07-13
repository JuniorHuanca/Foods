import Layout from "@/components/Layout/Layout";
import home from "@/assets/home.webp";
import background from "@/assets/background.webp";
import Image from "next/image";
type Props = {};

const Home = (props: Props) => {
  return (
    <Layout>
      <div className="w-full h-[80vh]">
        {/* <div className="relative w-full h-[80vh]">
          <Image src={home} alt="Home Page" fill />
        </div> */}
        {/* <h1>Foods</h1> */}
      </div>
    </Layout>
  );
};

export default Home;
