import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Icon from "@mui/material/Icon";
import InputAdornment from "@mui/material/InputAdornment";
import { Link } from "react-router-dom";

const HabitEdit = ({ control, errors, handleSubmit, handleSave }) => {
  return (
    <>
      <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
        <div className="flex items-center justify-center">
          <h3 className="my-2 text-2xl text-center">Edit MINI HABIT</h3>
          <Link
            to="/"
            className="ml-4 px-4 py-2 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
          >
            Tracking
          </Link>
        </div>
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
            <div className="mb-4 mt=10">
              <Controller
                name="friendEmail"
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
                    helperText={errors?.email?.message}
                    label="Friend Email"
                    id="friendEmail"
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
                name="friendPhoneNumber"
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
                    helperText={errors?.phoneNumber?.message}
                    label="Friend Phone Number"
                    id="friendPhoneNumber"
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
    </>
  );
};

export default HabitEdit;
