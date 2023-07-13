import { IFoodAPI } from "@/shared/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  food: IFoodAPI;
};

const Card = ({ food }: Props) => {
  return (
    <div className="w-full h-[300px] max-w-sm bg-transparent shadow-lg rounded-lg overflow-hidden my-4">

    </div>
  );
};

export default Card;
