import { IFoodAPI } from "@/shared/types";

type Props = {
  food: IFoodAPI;
};

const Card = ({ food }: Props) => {
  return <div>{food.title}</div>;
};

export default Card;
