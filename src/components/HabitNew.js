import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Icon from "@mui/material/Icon";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Add Mini Habits",
    caption: "Smaller Habits, Bigger Results",
    description: `A mini habit is a very small positive behavior that you force yourself to do every day; its “too small to fail”`,
  },
  {
    label: "Challenge your self at least 30 days",
    description: "Add start date and end",
  },
  {
    label: "When",
    description:
      "You will be reminded until you done. There will be a link to mark it as done because we don't want to waste time to open app to do it. If you done at any time then it will not send anymore at that day. ",
  },
  {
    label: "How",
    description: "How would you like to be reminder",
  },
  {
    label: "Who",
    description: "If you missing 2 days in a row, would you like to have a friend remind you?",
  },
];

const HabitEdit = ({ control, errors, handleSubmit, handleSave, watch }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const habit_name = watch("habit_name");

  const checkValidation = (index) => {
    if (!habit_name) {
      return true;
    }
    return false;
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <>
      <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
        <div className="flex items-center justify-center">
          <h3 className="my-2 text-2xl text-center">Set up your MINI HABIT</h3>
        </div>
        <form>
          <Box>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      step?.caption ? (
                        <Typography variant="caption">{step.caption}</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <div className="my-4">
                      {index === 0 && (
                        <Controller
                          name="habit_name"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              placeholder="Example: 1 minute yoga"
                              className="text-sm font-bold text-gray-700"
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <Icon color="action">repeat_one</Icon>
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
                      )}
                      {index === 1 && (
                        <div>
                          <div className="mb-4">
                            <Controller
                              name="start_date"
                              control={control}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  type="date"
                                  className="block text-sm font-bold text-gray-700"
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
                      )}
                      {index === 2 && (
                        <div>
                          <div className="flex align-items justify-between mb-2">
                            <div className="flex=1" />
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
                        </div>
                      )}
                      {index === 3 && (
                        <div>
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
                        </div>
                      )}
                      {index === 4 && (
                        <div>
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
                      )}
                    </div>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                          disabled={checkValidation(index)}
                        >
                          {index === steps.length - 1 ? "Finish" : "Continue"}
                        </Button>
                        <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>All steps completed - Save now</Typography>
                <Button
                  variant="contained"
                  onClick={handleSubmit(handleSave)}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Save
                </Button>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
              </Paper>
            )}
          </Box>
        </form>
      </div>
    </>
  );
};

export default HabitEdit;
