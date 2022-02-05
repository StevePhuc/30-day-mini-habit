// import { Link, useNavigate } from "react-router-dom";
import TrackingChart from "./TrackingChart";

const Tracking = () => {
  //   const navigate = useNavigate();

  const habit = { name: "Mini Habit " };
  return (
    <div className="mt-6 ml-30 mr-30 mb-20">
      <div className="mb-40 mt-10 text-2xl font-serif font-bold text-center">
        <div>{`Goal ${habit.name}`}</div>
      </div>
      <div className="box-center h-320 w-400 p-4 border-5">
        <TrackingChart />
      </div>
      <div className="mb-6 text-center">
        <button
          className=" px-4 py-2 w-30 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
          type="button"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Tracking;
