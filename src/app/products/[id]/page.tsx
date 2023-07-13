"use client";
import Layout from "@/components/Layout/Layout";
import { EStateGeneric } from "@/shared/types";
import {
  cleanUpProduct,
  getOneProduct,
  selectOneProduct,
  selectOneProductStatus,
} from "@/states/productsSlice";
import { useAppDispatch } from "@/states/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BiSolidError } from "react-icons/bi";
type Props = {
  params: { id: string };
};

const Detail = ({ params }: Props) => {
  const product = useSelector(selectOneProduct);
  const status = useSelector(selectOneProductStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      if (status === EStateGeneric.IDLE) {
        await dispatch(getOneProduct(params.id));
      }
    })();

    return () => {
      // dispatch(cleanUpProduct());
    };
  }, []);
  return (
    <Layout>
      {status === EStateGeneric.SUCCEEDED && (
        <div className="bg-blue-500 w-full">
          <h1>{product.title}</h1>
          <div className="w-1/3 h-64">
            <div className="relative aspect-video">
              <Image
                src={product.image}
                alt={product.title}
                fill
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
      {status === EStateGeneric.PENDING && (
        <div className="bg-red-500 w-full h-[80vh]"></div>
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

export default Detail;
