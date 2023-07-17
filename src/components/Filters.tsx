"use client";
import { dietTypes } from "@/shared/data/types";
import { sortByName, sortByScore } from "@/states/productsSlice";
import { useAppDispatch } from "@/states/store";
import { ChangeEvent, useState } from "react";
import RadioSelector from "./RadioSelector";
type Props = {};

const Filters = (props: Props) => {
  const dispatch = useAppDispatch();
  const [dropdown, setDropdown] = useState<{ [key: string]: boolean }>({
    alphabetical: false,
    healthScore: false,
  });
  const [filter, setFilter] = useState<string>("");

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    dispatch(sortByName(e.target.value));
  };

  const handleChangeScore = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    dispatch(sortByScore(e.target.value));
  };

  const alphabetical = ["atoz", "ztoa"];
  const healthScore = ["asc", "desc"];
  return (
    <div className="flex w-full justify-around items-center text-xl py-2 gap-2 bg-black/50">
      <RadioSelector
        active={dropdown.alphabetical}
        setActive={() =>
          setDropdown({
            healthScore: false,
            alphabetical: !dropdown.alphabetical,
          })
        }
        customFunction={handleChangeName}
        name={"Alphabetical"}
        items={alphabetical}
        filter={filter}
      />
      <RadioSelector
        active={dropdown.healthScore}
        setActive={() =>
          setDropdown({
            healthScore: !dropdown.healthScore,
            alphabetical: false,
          })
        }
        customFunction={handleChangeScore}
        name={"HealthScore"}
        items={healthScore}
        filter={filter}
      />
      <select>
        <option value="">TypeDiets</option>
        {dietTypes.map((e, index) => (
          <option value={e} key={index}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
