import { IFoodAPI } from "@/shared/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  food: IFoodAPI;
};

const Card = ({ food }: Props) => {
  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="relative aspect-video">
        <Link href={`/products/${food.id}`}>
          <Image src={food.image} alt={food.title} fill loading="lazy" />
        </Link>
      </div>
      <div className="py-4 px-6">
        <h3 className="text-lg font-semibold text-gray-800 h-12">
          {food.title}
        </h3>
        {/* <p className="py-2 text-lg text-gray-700">
          {food.diets.map((e, index) => (
            <span key={index}> {e} </span>
          ))}
        </p> */}
      </div>
      <div className="flex flex-wrap px-6 pt-4 pb-2">
        {food.dishTypes.map((e, index) => (
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            key={index}
          >
            #{e}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
