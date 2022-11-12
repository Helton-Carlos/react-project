import CardComponent from "./components/CardComponent";
import { useState, useEffect } from "react";

function App() {
  let [reminders, setReminders] = useState([])

  useEffect(() => {
    fetch("/api/reminders")
      .then((res) => res.json())
      .then((json) => {
        setReminders(json.reminders)
      })
  }, [])
  return (
    <>
      <ul>
        {reminders.map((reminders) => (
          <li key={reminders.id}>{reminders.text}</li>
        ))}
      </ul>
      <CardComponent />
    </>
  );
}

export default App;
