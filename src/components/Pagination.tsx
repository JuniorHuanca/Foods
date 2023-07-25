"use client";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
type Props = {
  maxPages: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
};
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useRef } from "react";

const Pagination = ({ maxPages, currentPage, setCurrentPage }: Props) => {
  const router = useRouter();
  let quepage = 1;
  const inputRef = useRef(null);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    router.push(`?page=${currentPage + 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
    router.push(`?page=${currentPage - 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const goPage = () => {
    toast.dismiss();
    const handleSubmit = () => {
      if (!Number.isNaN(quepage) && quepage > 0 && quepage <= maxPages) {
        setCurrentPage(quepage);
        router.push(`?page=${quepage}`);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        toast.dismiss();
      } else {
        toast.error("Page not found");
        toast.dismiss();
      }
    };
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.keyCode === 13) {
        handleSubmit();
      }
    };
    toast(
      <div className="p-4 text-white rounded-xl w-full">
        <div className="flex flex-col p-4 gap-2">
          <h4 className="text-xl font-semibold">Select Page</h4>
          <input
            className="bg-black/50 focus:outline-none p-2 rounded-md"
            type="text"
            ref={inputRef}
            autoFocus
            onChange={(e) => (quepage = Number(e.target.value))}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-black/50 p-2 rounded-md"
            onClick={handleSubmit}
          >
            Go
          </button>
        </div>
      </div>
    );
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
      <span onClick={goPage} className="bg-green-600 px-4 py-2 rounded-full">
        {currentPage}/{maxPages}
      </span>
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
