import React from "react";
import { useForm } from "react-hook-form";

const GoalForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div>
          <p>
            Mini Habit:
            <input {...register("habit")} />
          </p>
          <p>
            start date:
            <input {...register("startDate")} />
          </p>
          <p>
            end date:
            <input {...register("endDate")} />
          </p>
          <p>
            Morning reminder:
            <input {...register("morningReminder")} />
          </p>
          <p>
            Afternoon reminder:
            <input {...register("afternoonReminder")} />
          </p>
          <p>
            Evening reminder:
            <input {...register("eveningReminder")} />
          </p>
          <p>
            E-mail: <input {...register("email")} />
          </p>
          <p>
            Phone number: <input {...register("phoneNumber")} />
          </p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default GoalForm;
