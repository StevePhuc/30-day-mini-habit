const { createClient } = require("@supabase/supabase-js");
const formattedReturn = require("./helpers/formattedReturn");
const { format } = require("date-fns");

exports.handler = async (event) => {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseAnonKey = process.env.REACT_APP_SUPABASE_SERVICE_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  if (event.httpMethod === "GET") {
    const require = event.queryStringParameters;
    console.log("require", require);
    if (require?.id && require?.user_id) {
      const habit_id = require.id;
      const today = format(new Date(), "yyyy-MM-dd");
      // console.log("done id", habit_id);
      const { data: habit, error } = await supabase
        .from("habit")
        .select("*,habit_track(*)")
        .match({ id: habit_id })
        .limit(1)
        .single();
      // console.log("habit", habit);

      if (error) {
        console.log("error", error);
        return formattedReturn(200, { text: error });
      }

      const { habit_name, habit_track, user_id } = habit;

      if (user_id !== require?.user_id) {
        return formattedReturn(200, { text: "Not allow" });
      }

      if (Array.isArray(habit_track)) {
        const findTodayDone = habit_track.find((item) => item?.date === today && item.done);
        if (findTodayDone) {
          console.log("habit already done today");
          return formattedReturn(200, { text: `${habit_name} already done today ${today}` });
        }
      }

      const { error: error_habit_track } = await supabase
        .from("habit_track")
        .insert({ habit_id: habit_id, done: true, date: today });

      if (error_habit_track) {
        console.log("error_habit_track", error_habit_track);
        return formattedReturn(200, { text: error_habit_track });
      }
      console.log("add track habit done today");
      return formattedReturn(200, { text: `${habit_name} done today ${today}` });
    }
    return formattedReturn(200, { text: "Not allow" });
  } else {
    return formattedReturn(405, {});
  }
};
