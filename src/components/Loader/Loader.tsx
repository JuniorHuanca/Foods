import s from "./Loader.module.css";
type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="flex justify-center items-center bg-black/50 w-full h-full">
        <span className={s.loader}></span>
    </div>
  );
};

export default Loader;
