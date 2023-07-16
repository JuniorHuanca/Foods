"use client";
import Card from "@/components/Card/Card";
import Layout from "@/components/Layout/Layout";
import Loader from "@/components/Loader/Loader";
import Pagination from "@/components/Pagination";
import { EStateGeneric } from "@/shared/types";
import {
  cleanUpProducts,
  getAllProducts,
  selectAllProducts,
  selectAllProductsStatus,
} from "@/states/productsSlice";
import { useAppDispatch } from "@/states/store";
import Link from "next/link";
import { useEffect } from "react";
import { BiSolidError } from "react-icons/bi";
import { useSelector } from "react-redux";

type Props = {
  params: { page: string };
};

const Products = ({
  searchParams,
}: {
  // searchParams?: { [key: string]: string | string[] | undefined };
  searchParams?: { page: string };
}) => {
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectAllProductsStatus);

  const currentPage = searchParams?.page ? parseInt(searchParams?.page) : 1;
  const itemsPerPage = 10;
  const minItems = (currentPage - 1) * itemsPerPage;
  const maxItems = currentPage * itemsPerPage;
  const maxPages = Math.ceil(products.length / itemsPerPage);
  const items = products.slice(minItems, maxItems);
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      if (status === EStateGeneric.IDLE) {
        await dispatch(getAllProducts());
      }
    })();

    return () => {
      // dispatch(cleanUpProducts());
    };
  }, []);
  return (
    <Layout>
      {status === EStateGeneric.SUCCEEDED && (
        <div className="flex flex-col justify-between min-h-[80vh]">
          <div className="flex flex-wrap justify-center gap-4">
            {items.map((e, index) => (
              <Card food={e} key={index} />
            ))}
          </div>
          <Pagination page={searchParams?.page} maxPages={maxPages} />
        </div>
      )}
      {status === EStateGeneric.PENDING && (
        <div className="w-full h-[80vh]">
          <Loader />
        </div>
      )}
      {status === EStateGeneric.FAILED && (
        <div className="flex flex-col justify-center items-center w-full h-[80vh]">
          <div className="flex flex-col items-center p-5 bg-black/50 rounded-md">
            <BiSolidError className="text-red-500 text-5xl sm:text-8xl" />
            <h2 className="text-5xl md:text-6xl text-center font-bold">
              Products not found
            </h2>
            <Link className="text-2xl text-red-600 underline" href="/">
              Go to Home
            </Link>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Products;
