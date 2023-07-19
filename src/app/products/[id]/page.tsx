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
import Loader from "@/components/Loader/Loader";
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
        <div className="bg-black w-full min-h-[80vh] md:flex">
          <div className="flex-1 p-1 sm:p-4 md:p-8">
            <div className="relative aspect-video">
              <Image
                src={product.image}
                alt={product.title}
                fill
                loading="lazy"
                className="saturate-150"
              />
            </div>
          </div>
          <div className="flex-1 p-1 sm:p-4 md:p-8">
            <h1 className="text-3xl font-bold uppercase my-2">{product.title}</h1>
            <p className="my-2" dangerouslySetInnerHTML={{ __html: product.summary }}></p>
            {product.diets.map((e, index) => (
              <span
                className="inline-block bg-green-600 text-black rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                key={index}
              >
                #{e}
              </span>
            ))}
          </div>
        </div>
      )}
      {status === EStateGeneric.PENDING && (
        <div className="w-full h-[80vh]">
          <Loader />
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

export default Detail;
