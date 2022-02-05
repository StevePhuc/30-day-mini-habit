const { createClient } = require("@supabase/supabase-js");
const formattedReturn = require("./formattedReturn");
const checkHabitNotification = require("./checkHabitNotification");

module.exports = async (event) => {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseAnonKey = process.env.REACT_APP_SUPABASE_SERVICE_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    let { data, error, status } = await supabase.from("habit").select("*,habit_track(*)");

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      // console.log("habit", data);
      checkHabitNotification(data);
      return formattedReturn(200, data);
    }

    return formattedReturn(500, {});
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};
