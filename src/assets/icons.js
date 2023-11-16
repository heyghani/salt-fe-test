import { FcClock, FcHeadset, FcExpired, FcSafe } from "react-icons/fc";

const Clock = () => {
  return (
    <div className="flex flex-col items-center justify-center transition ease-in duration-500">
      <FcClock size={50} />
      <p>Seep Improvement</p>
    </div>
  );
};

const Accesories = () => {
  return (
    <div className="flex flex-col items-center justify-center transition ease-in duration-500">
      <FcHeadset size={50} />
      <p>Accesories</p>
    </div>
  );
};

const Speed = () => {
  return (
    <div className="flex flex-col items-center justify-center transition ease-in duration-500">
      <FcExpired size={50} />
      <p>Speed Improvement</p>
    </div>
  );
};

const Exhaust = () => {
  return (
    <div className="flex flex-col items-center justify-center transition ease-in duration-500">
      <FcSafe size={50} />
      <p>Exhaust</p>
    </div>
  );
};

export { Clock, Accesories, Speed, Exhaust };
