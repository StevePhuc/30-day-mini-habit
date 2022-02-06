import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../database/supabaseClient";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import { addDays, format } from "date-fns";
import HabitEdit from "./HabitEdit";
import HabitNew from "./HabitNew";

const Form = () => {
  const { handleSubmit, reset, control, formState, getValues, watch } = useForm();
  const navigate = useNavigate();

  const { user, signOut } = useAuth();

  const { errors } = formState;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getHabit() {
      try {
        setLoading(true);
        let { data, error, status } = await supabase
          .from("habit")
          .select("*")
          .match({ user_id: user.id })
          .limit(1)
          .single();

        if (error && status !== 406) {
          throw error;
        } else if (error && status === 401) {
          signOut();
          navigate("/login");
        }

        if (data) {
          const habitVo = { ...data, ...data.reminder_time, ...data.reminder_type };
          console.log("habitVo", habitVo);

          reset(habitVo);
        } else {
          reset({
            start_date: format(new Date(), "yyyy-MM-dd"),
            end_date: format(addDays(new Date(), 30), "yyyy-MM-dd"),
            email: user.email,
            morningReminder: "09:00:00",
            afternoonReminder: "15:00:00",
            eveningReminder: "20:00:00",
          });
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }
    getHabit();
  }, [reset, navigate, signOut, user]);

  const handleSave = async (data) => {
    try {
      console.log("data save", data);
      setLoading(true);

      const habitVo = {
        habit_name: data.habit_name,
        start_date: data.start_date,
        end_date: data.end_date,
        reminder_time: {
          morningReminder: data.morningReminder,
          afternoonReminder: data.afternoonReminder,
          eveningReminder: data.eveningReminder,
        },
        reminder_type: {
          email: data.email,
          phoneNumber: data.phoneNumber,
          friendEmail: data.friendEmail,
          friendPhoneNumber: data.friendPhoneNumber,
        },
      };

      let error;
      if (data?.id) {
        const response = await supabase.from("habit").update(habitVo).match({ id: data.id });
        error = response.error;
      } else {
        const response = await supabase.from("habit").insert({ ...habitVo, user_id: user.id });
        error = response.error;
      }

      if (error) {
        throw error;
      }
      navigate("/");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="font-mono bg-gray-400 w-full">
        <div className=" mx-auto">Loading</div>
      </div>
    );
  }

  return (
    <>
      <div className="font-mono bg-gray-400 w-full">
        <div className="w-full flex justify-center ">
          <div className="w-full mt-6 mb-6 lg:w-11/12 flex">
            <div
              className="my-10 ml-10 mr-10 h-auto rounded-lg bg-gray-400 hidden lg:block lg:w-5/12  bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url('https://pbs.twimg.com/media/ETsUtf9UYAABhMo.jpg')`,
              }}
            ></div>
            {getValues()?.id ? (
              <HabitEdit
                control={control}
                errors={errors}
                handleSubmit={handleSubmit}
                handleSave={handleSave}
              />
            ) : (
              <HabitNew
                watch={watch}
                control={control}
                errors={errors}
                handleSubmit={handleSubmit}
                handleSave={handleSave}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
