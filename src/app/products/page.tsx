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
import { useEffect } from "react";
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
  console.log(products.length);
  return (
    <Layout>
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((e, index) => (
          <Card food={e} key={index} />
        ))}
      </div>
    </Layout>
  );
};

export default Products;
