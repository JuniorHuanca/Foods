import { IFoodAPI } from "@/shared/types";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
type Props = {
  food: IFoodAPI;
};

const Card = ({ food }: Props) => {
  return (
    <div className="w-full max-w-sm bg-white/80 dark:bg-black/80 shadow-lg rounded-lg overflow-hidden my-4">
      <div className="relative aspect-video">
        <Link href={`/recipes/${food.id}`}>
          <Image
            src={food.image}
            alt={food.title}
            fill
            loading="lazy"
            className="saturate-150"
          />
        </Link>
        <span className="flex items-center absolute top-2 right-2 p-1 rounded-md bg-green-600">
          <AiFillHeart className="text-3xl fill-red-700" /> {food.healthScore}
        </span>
      </div>
      <div className="py-4 px-6">
        <h3 className="text-lg font-semibold h-12">{food.title}</h3>
      </div>
      <div className="flex flex-wrap px-6 pt-4 pb-2">
        {food.diets.map((e, index) => (
          <span
            className="inline-block bg-green-600 text-black rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
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
