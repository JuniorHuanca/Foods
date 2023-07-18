"use client";
import { dietTypes } from "@/shared/data/types";
import { filterByDiet, sortByName, sortByScore } from "@/states/productsSlice";
import { useAppDispatch } from "@/states/store";
import { ChangeEvent, useState } from "react";
import RadioSelector from "./RadioSelector";
type Props = {};

const Filters = (props: Props) => {
  const dispatch = useAppDispatch();
  const initialDropdown = {
    alphabetical: false,
    healthScore: false,
    dietType: false,
  };
  const [dropdown, setDropdown] = useState<{ [key: string]: boolean }>({
    ...initialDropdown,
  });
  const [checked, setChecked] = useState<{ [key: string]: string }>({
    sort: "",
    filter: "",
  });

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked({
      ...checked,
      sort: e.target.value,
    });
    dispatch(sortByName(e.target.value));
    setDropdown({
      ...initialDropdown,
    });
  };

  const handleChangeScore = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked({
      ...checked,
      sort: e.target.value,
    });
    dispatch(sortByScore(e.target.value));
    setDropdown({
      ...initialDropdown,
    });
  };

  const handleFilterByDiet = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked({
      ...checked,
      filter: e.target.value,
    });
    dispatch(filterByDiet(e.target.value));
    setDropdown({
      ...initialDropdown,
    });
  };

  const alphabetical = ["atoz", "ztoa"];
  const healthScore = ["asc", "desc"];
  return (
    <div className="flex flex-wrap w-full justify-around items-center text-xl py-2 gap-2 bg-black/50">
      <RadioSelector
        active={dropdown.alphabetical}
        setActive={() =>
          setDropdown({
            ...initialDropdown,
            alphabetical: !dropdown.alphabetical,
          })
        }
        customFunction={handleChangeName}
        name={"Alphabetical"}
        items={alphabetical}
        checked={checked.sort}
      />
      <RadioSelector
        active={dropdown.healthScore}
        setActive={() =>
          setDropdown({
            ...initialDropdown,
            healthScore: !dropdown.healthScore,
          })
        }
        customFunction={handleChangeScore}
        name={"HealthScore"}
        items={healthScore}
        checked={checked.sort}
      />
      <RadioSelector
        active={dropdown.dietType}
        setActive={() =>
          setDropdown({
            ...initialDropdown,
            dietType: !dropdown.dietType,
          })
        }
        customFunction={handleFilterByDiet}
        name={"Diet Types"}
        items={dietTypes}
        checked={checked.filter}
      />
    </div>
  );
};

export default Filters;
