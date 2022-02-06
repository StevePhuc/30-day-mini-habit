import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import { supabase } from "../database/supabaseClient";
import TrackingChart from "./TrackingChart";

const Tracking = () => {
  const navigate = useNavigate();

  const { user, signOut } = useAuth();

  const [loading, setLoading] = useState(true);
  const [habit, setHabit] = useState({});

  useEffect(() => {
    async function getHabit() {
      try {
        setLoading(true);
        let { data, error, status } = await supabase
          .from("habit")
          .select("*,habit_track(*)")
          .match({ user_id: user.id })
          .limit(1)
          .single();

        if (error && status !== 406) {
          throw error;
        } else if (error && status === 401) {
          signOut();
          navigate("/habit");
        }

        if (data) {
          console.log("habit", data);
          setHabit(data);
        } else {
          navigate("/habit");
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }
    getHabit();
  }, [navigate, signOut, user?.id]);

  if (loading) {
    return (
      <div className="mt-6 ml-30 mr-30 mb-20 bg-white flex flex-col">
        <div className=" mx-auto">Loading</div>
      </div>
    );
  }

  return (
    <div className="mt-6 ml-30 mr-30 mb-20 bg-white flex flex-col">
      <div className="mb-20 mt-10 text-center">
        <div className="text-2xl font-serif font-bold">{`Habit ${habit.habit_name}`}</div>
        <div className="my-5">
          <Link
            to="/habit"
            className="px-4 py-2 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
          >
            Edit
          </Link>
        </div>
      </div>
      <div className="box-center h-320 w-400 p-4 border-5">
        <TrackingChart habitTrack={habit?.habit_track} />
      </div>
    </div>
  );
};

export default Tracking;
