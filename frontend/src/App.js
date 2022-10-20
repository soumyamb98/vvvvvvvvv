import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";

function App() {


  const [ reminderMsg, setReminderMsg ] = useState("")
  const [ remindAt, setRemindAt ] = useState()
  const [ reminderList, setReminderList ] = useState([])

  useEffect(() => {
      axios.get("http://localhost:5000/getAllReminders").then( res => setReminderList(res.data))
  }, [])

  const addReminder = () => {
      axios.post("http://localhost:5000/addReminders", { reminderMsg, remindAt })

  }

  return (
    <div>
      <div className="border">
      <div className="">

        <div className="header">
          <h1>Remind Msg ✔📅📝</h1>
          <input type="text" placeholder="Message notes type" value={reminderMsg} onChange={e => setReminderMsg(e.target.value)} />
          <DateTimePicker 
            value={remindAt}
            onChange={setRemindAt}
            minDate={new Date()}
            minutePlaceholder="mm"
            hourPlaceholder="hh"
            dayPlaceholder="DD"
            monthPlaceholder="MM"
            yearPlaceholder="YYYY"
          />
          <div className="border" onClick={addReminder}>Add Reminder</div>
        </div>


        

        </div>
      </div>
    </div>
  )
}

export default App;
