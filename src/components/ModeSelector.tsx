"use client";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import { RiComputerFill } from "react-icons/ri";
import { MdLightMode, MdModeNight } from "react-icons/md";
type Props = {};
interface IThemeIcon {
  [key: string]: ReactNode;
}
const ModeSelector = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [monted, setMonted] = useState<boolean>(false);
  const mode: { [key: string]: string } = {
    system: "System",
    light: "Light",
    dark: "Dark",
  };
  const modesWithIcon: IThemeIcon = {
    system: <RiComputerFill className="mr-2 text-2xl" />,
    light: <MdLightMode className="mr-2 text-2xl" />,
    dark: <MdModeNight className="mr-2 text-2xl" />,
  };

  useEffect(() => {
    setMonted(true);
  }, []);
  if (!monted) return null;

  return (
    <div>
      <div
        onClick={() => setDropdown(!dropdown)}
        className="px-3 py-2 rounded-md font-bold hover:text-green-600 transition duration-500 hover:border-b-2 border-green-600 text-center inline-flex items-center"
      >
        {modesWithIcon[theme as string]}
        <span>{mode[theme as string]}</span>
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
          dropdown ? "block" : "hidden"
        } z-10 absolute rounded-lg w-28 bg-black`}
      >
        <ul className="py-2 text-gray-200">
          {Object.keys(mode).map((key, index) => (
            <li key={index}>
              <button
                onClick={(e) => setTheme(e.currentTarget.name)}
                name={key}
                type="button"
                className={`${
                  key === theme ? "text-green-600 bg-green-900" : "text-white"
                } block px-4 py-2 hover:bg-green-900 w-full text-start`}
              >
                {mode[key]}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModeSelector;
