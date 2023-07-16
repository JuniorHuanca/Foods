"use client";
import right from "@/assets/right.svg";
import left from "@/assets/left.svg";
import Image from "next/image";
import Link from "next/link";
type Props = {
  page: string | undefined;
  maxPages: number;
};

const Pagination = ({ page, maxPages }: Props) => {
  const currentPage = page ? parseInt(page) : 1;
  return (
    <div className="flex w-full justify-center items-center text-xl py-2 gap-2">
      <Link
        href={`${currentPage > 1 ? `?page=${currentPage - 1}` : `/products`}`}
      >
        <Image width={40} height={40} src={left} alt="left" loading="lazy" />
      </Link>

      <div>{currentPage}</div>

      <Link
        href={`${
          currentPage < maxPages
            ? `?page=${currentPage + 1}`
            : `?page=${currentPage}`
        }`}
      >
        <Image width={40} height={40} src={right} alt="right" loading="lazy" />
      </Link>
    </div>
  );
};

export default Pagination;
