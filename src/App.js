import "./App.css";
import { useEffect, useState } from "react";
import Form from "./components/Form";

function App() {
  //https://github.com/jamesqquick/Build-a-JAMstack-Course-Tracker-with-React-Serverless-and-Airtable/blob/master/src/App.js

  const [habit, setHabit] = useState({});

  useEffect(() => {
    const loadHabit = async () => {
      try {
        const res = await fetch("/api/habit");
        const habit = await res.json();
        console.log("habit", habit);
        setHabit(habit);
      } catch (error) {
        console.error(error);
      }
    };
    loadHabit();
  }, []);

  return (
    <div className="wrapper">
      <h1 className="text-3xl font-bold underline">{habit?.text || "Loading"}</h1>
      <Form />
    </div>
  );
}

export default App;
