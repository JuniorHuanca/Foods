import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="min-h-[80vh] bg-pattner bg-repeat bg-contain">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
