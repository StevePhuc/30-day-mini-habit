import React from "react";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Icon from "@mui/material/Icon";
import InputAdornment from "@mui/material/InputAdornment";

// import Button from "@mui/material/Button";

const Form = () => {
  const { handleSubmit, control, formState } = useForm();
  const { errors } = formState;

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

              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg ">
                <h3 className="pt-4 text-2xl text-center ">Set up your MINI GOAL</h3>
                <form
                  onSubmit={handleSubmit((data) => {
                    console.log(data);
                  })}
                >
                  <div>
                    <div className="mt-10 mb-4">
                      <Controller
                        name="habit"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
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
                            variant="filled"
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
