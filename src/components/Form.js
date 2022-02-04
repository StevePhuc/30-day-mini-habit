import React from "react";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";

const Form = () => {
  const { handleSubmit, control, formState } = useForm();
  const { errors } = formState;

  return (
    <>
      <div className="font-mono bg-gray-400 w-full">
        <div className=" mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
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
                        name="habit"
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
                            id="habit"
                            variant="outlined"
                            fullWidth
                          />
                        )}
                      />
                    </div>
                    <Icon color="action">calendar_month</Icon>
                    <div className="mb-4 ">
                      <Controller
                        name="startDate"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            type="date"
                            className="block mb-2 text-sm font-bold text-gray-700"
                            error={!!errors.startDate}
                            required
                            helperText={errors?.startDate?.message}
                            label="Start Date"
                            id="startDate"
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
                        name="endDate"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            type="date"
                            className="block mb-2 text-sm font-bold text-gray-700"
                            error={!!errors.endDate}
                            required
                            helperText={errors?.endDate?.message}
                            label="End Date"
                            id="endDate"
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
                            autoFocus
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
                            autoFocus
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
