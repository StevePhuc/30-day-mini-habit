import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Icon from "@mui/material/Icon";
import { supabase } from "../database/supabaseClient";

const Form = () => {
  const { handleSubmit, reset, control, formState } = useForm();
  const { errors } = formState;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getHabit() {
      try {
        setLoading(true);
        let { data, error, status } = await supabase
          .from("habit")
          .select("*,reminder_time(*),reminder_type(*)")
          .limit(1)
          .single();

        if (error && status !== 406) {
          throw error;
        }

        if (data) {
          const habitVo = { ...data };

          const sort_time = data?.reminder_time?.sort((a, b) => {
            return Date.parse("01/01/1999 " + a?.time) > Date.parse("01/01/1999 " + b?.time)
              ? 1
              : -1;
          });
          habitVo.morningReminder = sort_time[0].time;
          habitVo.afternoonReminder = sort_time[1].time;
          habitVo.eveningReminder = sort_time[2].time;

          habitVo.email = data?.reminder_type.find((item) => item.type === "email")?.value;
          habitVo.phoneNumber = data?.reminder_type.find((item) => item.type === "sms")?.value;

          console.log(habitVo);

          reset(habitVo);
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }
    getHabit();
  }, [reset]);

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
        <div className=" w-full">
          <div className="w-full flex justify-center ">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex width:100%">
              <div
                className="h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style={{
                  backgroundImage: `url('https://pbs.twimg.com/media/ETsUtf9UYAABhMo.jpg')`,
                }}
              ></div>

              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Set up your MINI GOAL</h3>
                <form
                  onSubmit={handleSubmit((data) => {
                    console.log(data);
                  })}
                >
                  <div>
                    <div className="mb-4">
                      <div>
                        <Icon color="action">self_improvement</Icon>
                      </div>
                      <Controller
                        name="habit_name"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            className="block mb-2 text-sm font-bold text-gray-700"
                            error={!!errors.habit}
                            required
                            helperText={errors?.habit?.message}
                            label="Habit"
                            autoFocus
                            id="habit_name"
                            variant="outlined"
                            fullWidth
                          />
                        )}
                      />
                    </div>
                    <Icon color="action">calendar_month</Icon>
                    <div className="mb-4 ">
                      <Controller
                        name="start_date"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            type="date"
                            className="block mb-2 text-sm font-bold text-gray-700"
                            error={!!errors.start_date}
                            required
                            helperText={errors?.start_date?.message}
                            label="Start Date"
                            id="start_date"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        )}
                      />
                    </div>

                    <div className="mb-4 ">
                      <Controller
                        name="end_date"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            type="date"
                            className="block mb-2 text-sm font-bold text-gray-700"
                            error={!!errors.end_date}
                            required
                            helperText={errors?.end_date?.message}
                            label="End Date"
                            id="end_date"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        )}
                      />
                    </div>
                    <Icon color="action">alarm</Icon>
                    <div className="mb-4 ">
                      <Controller
                        name="morningReminder"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            type="time"
                            className="block mb-2 text-sm font-bold text-gray-700"
                            error={!!errors.morningReminder}
                            required
                            helperText={errors?.morningReminder?.message}
                            label="Morning Reminder"
                            id="morningReminder"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        )}
                      />
                    </div>

                    <div className="mb-4 ">
                      <Controller
                        name="afternoonReminder"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            type="time"
                            className="block mb-2 text-sm font-bold text-gray-700"
                            error={!!errors.afternoonReminder}
                            required
                            helperText={errors?.afternoonReminder?.message}
                            label="Afternoon Reminder"
                            id="afternoonReminder"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        )}
                      />
                    </div>

                    <div className="mb-4">
                      <Controller
                        name="eveningReminder"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            type="time"
                            className="block mb-2 text-sm font-bold text-gray-700"
                            error={!!errors.eveningReminder}
                            required
                            helperText={errors?.eveningReminder?.message}
                            label="Evening Reminder"
                            id="eveningReminder"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        )}
                      />
                    </div>
                    <div className="mb-4">
                      <div>
                        <Icon color="action">email</Icon>
                      </div>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            className="block mb-2 text-sm font-bold text-gray-700"
                            error={!!errors.email}
                            required
                            helperText={errors?.email?.message}
                            label="Email"
                            id="email"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        )}
                      />
                    </div>
                    <div className="mb-4">
                      <div>
                        <Icon color="action">phone</Icon>
                      </div>
                      <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            className="block mb-2 text-sm font-bold text-gray-700"
                            error={!!errors.phoneNumber}
                            required
                            helperText={errors?.phoneNumber?.message}
                            label="Phone Number"
                            id="phoneNumber"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      SAVE
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
