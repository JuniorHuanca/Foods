import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "sonner";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full h-full bg-pattner bg-repeat bg-contain">
      <Navbar />
      <div className="min-h-[80vh]">{children}</div>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Layout;
