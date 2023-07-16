"use client";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
type Props = {
  page: string | undefined;
  maxPages: number;
};
import { useRouter } from "next/navigation";

const Pagination = ({ page, maxPages }: Props) => {
  const router = useRouter();

  const currentPage = page ? parseInt(page) : 1;

  const nextPage = () => {
    router.push(`?page=${currentPage + 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const previousPage = () => {
    router.push(`?page=${currentPage - 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="flex w-full justify-center items-center text-xl py-2 gap-2">
      <button
        disabled={currentPage === 1}
        onClick={previousPage}
        className="disabled:opacity-50 disabled:hover:text-green-600 hover:text-green-500 text-green-600"
      >
        <IoIosArrowDropleftCircle className="text-5xl" />
      </button>
      <span className="bg-green-600 px-4 py-2 rounded-full">{currentPage}</span>
      <button
        disabled={currentPage === maxPages}
        onClick={nextPage}
        className="disabled:opacity-50 disabled:hover:text-green-600 hover:text-green-500 text-green-600"
      >
        <IoIosArrowDroprightCircle className="text-5xl" />
      </button>
    </div>
  );
};

export default Pagination;