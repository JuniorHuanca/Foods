import { ChangeEvent } from "react";
type Props = {
  active: boolean;
  setActive: () => void;
  customFunction: (value: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  items: string[];
  checked: string;
};

const RadioSelector = ({
  active,
  setActive,
  customFunction,
  items,
  name,
  checked,
}: Props) => {
  return (
    <div className="text-white">
      <div
        onClick={setActive}
        className="px-3 py-2 rounded-md font-bold hover:text-green-600 transition duration-500 hover:border-b-2 border-green-600 text-center inline-flex items-center"
      >
        <span>{name}</span>
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div
        className={`${
          active ? "flex" : "hidden"
        } z-10 absolute flex-col rounded-lg bg-black overflow-hidden`}
      >
        {items.map((e, index) => (
          <label
            key={index}
            className="py-2 px-4 gap-2 flex items-center hover:bg-green-900"
          >
            <input
              className="appearance-none rounded-full h-4 w-4 border-2 border-white checked:bg-green-700 checked:border-green-500 focus:outline-none focus:border-none transition-colors duration-200 ease-in-out"
              type="radio"
              name={name}
              value={e}
              onChange={customFunction}
              checked={checked === e}
            />
            <span>{e}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioSelector;
