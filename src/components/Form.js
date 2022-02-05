import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Icon from "@mui/material/Icon";
import InputAdornment from "@mui/material/InputAdornment";

// import Button from "@mui/material/Button";
import { supabase } from "../database/supabaseClient";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import { addDays, format } from "date-fns";

const Form = () => {
  const { handleSubmit, reset, control, formState } = useForm();
  const navigate = useNavigate();

  const { user, signOut } = useAuth();

  const { errors } = formState;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getHabit() {
      try {
        setLoading(true);
        let { data, error, status } = await supabase.from("habit").select("*").limit(1).single();

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
  }, [reset, navigate, signOut]);

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
        <div className=" w-full">
          <div className="w-full flex justify-center ">
            <div className="w-full mt-6 mb-6 lg:w-11/12 flex">
              <div
                className="mt-20 mb-40 mr-6 h-auto rounded-lg bg-gray-400 hidden lg:block lg:w-5/12  bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url('https://pbs.twimg.com/media/ETsUtf9UYAABhMo.jpg')`,
                }}
              ></div>

              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Set up your MINI GOAL</h3>
                <form onSubmit={handleSubmit(handleSave)}>
                  <div>
                    <div className="mt-10 mb-4">
                      <Controller
                        name="habit_name"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            placeholder="Example: 15 minutes yoga"
                            className="block mb-2 text-sm font-bold text-gray-700"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Icon color="action">self_improvement</Icon>
                                </InputAdornment>
                              ),
                            }}
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
                    <div className="flex align-items justify-between mb-2">
                      <Icon color="action">alarm</Icon>
                      <span className="text-xs">TIME ZONE: UTC+0 </span>
                    </div>
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
                            variant="filled"
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
                            variant="filled"
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
                            variant="filled"
                            fullWidth
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        )}
                      />
                    </div>
                    <div className="mb-4 mt=10">
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            className="block mb-2 text-sm font-bold text-gray-700"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Icon color="action">email</Icon>
                                </InputAdornment>
                              ),
                            }}
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
                      <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            className="block mb-2 text-sm font-bold text-gray-700"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Icon color="action">phone</Icon>
                                </InputAdornment>
                              ),
                            }}
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
                      type="submit"
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
