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
    <div className="flex flex-col md:overflow-hidden">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div>
          <div className="flex">
            <div className="min-w-48 py-5 px-2">
              <Icon color="action">self_improvement</Icon>
            </div>
            <Controller
              name="habit"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mt-8 mb-16"
                  error={!!errors.habit}
                  required
                  helperText={errors?.habit?.message}
                  label="Mini Habit"
                  autoFocus
                  id="habit"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>
          <div className="flex">
            <div className="min-w-48 py-5 px-2">
              <Icon color="action">calendar_month</Icon>
            </div>
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="date"
                  className="mt-8 mb-16"
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
          <div className="flex">
            <div className="min-w-48 py-5 px-2">
              <Icon color="action">calendar_month</Icon>
            </div>
            <Controller
              name="endDate"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="date"
                  className="mt-8 mb-16"
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
          <div className="flex">
            <div className="min-w-48 py-5 px-2">
              <Icon color="action">alarm</Icon>
            </div>
            <Controller
              name="morningReminder"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="time"
                  className="mt-8 mb-16"
                  error={!!errors.morningReminder}
                  required
                  helperText={errors?.morningReminder?.message}
                  label="Morning reminder"
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

          <div className="flex">
            <div className="min-w-48 py-5 px-2">
              <Icon color="action">alarm</Icon>
            </div>

            <Controller
              name="afternoonReminder"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="time"
                  className="mt-8 mb-16"
                  error={!!errors.afternoonReminder}
                  required
                  helperText={errors?.afternoonReminder?.message}
                  label="Afternoon reminder"
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

          <div className="flex">
            <div className="min-w-48 py-5 px-2">
              <Icon color="action">alarm</Icon>
            </div>
            <Controller
              name="eveningReminder"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="time"
                  className="mt-8 mb-16"
                  error={!!errors.eveningReminder}
                  required
                  helperText={errors?.eveningReminder?.message}
                  label="Evening reminder"
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

          <div className="flex">
            <div className="min-w-48 py-5 px-2">
              <Icon color="action">alternate_email</Icon>
            </div>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mt-8 mb-16"
                  error={!!errors.email}
                  required
                  helperText={errors?.email?.message}
                  label="E-mail"
                  id="email"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>

          <div className="flex">
            <div className="min-w-48 py-5 px-2">
              <Icon color="action">phone</Icon>
            </div>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mt-8 mb-16"
                  error={!!errors.phoneNumber}
                  required
                  helperText={errors?.phoneNumber?.message}
                  label="Phone number"
                  id="phoneNumber"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>
        </div>
        <div>
          <Button variant="contained" type="submit">
            SAVE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
