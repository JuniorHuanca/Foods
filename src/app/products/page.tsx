"use client";
import Card from "@/components/Card/Card";
import Layout from "@/components/Layout/Layout";
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

type Props = {};

const Products = (props: Props) => {
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectAllProductsStatus);
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
        <div className="flex flex-wrap justify-center gap-4">
          {products.map((e, index) => (
            <Card food={e} key={index} />
          ))}
        </div>
      )}
      {status === EStateGeneric.PENDING && (
        <div className="bg-red-500 w-full h-[80vh]">
          <span>Loading...</span>
        </div>
      )}
      {status === EStateGeneric.FAILED && (
        <div className="flex flex-col justify-center items-center w-full h-[80vh]">
          <BiSolidError className="text-red-500 text-5xl sm:text-8xl" />
          <h2 className="text-5xl md:text-6xl text-center font-bold">
            Product not found
          </h2>
          <Link className="text-2xl text-red-600 underline" href="/">
            Go to Home
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default Products;
