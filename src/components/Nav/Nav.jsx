import logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Nav() {
  let [reminders, setReminders] = useState([])

  useEffect(() => {
    fetch('/api/reminders')
      .then((res) => res.json())
      .then((json) => {
        setReminders(json.reminders)
      })
  }, [])

  return (
    <>
      <Link to="/">
        <img src={ logo } alt="logo" />
      </Link>

      <ul>
        {reminders.map((reminders) => (
          <li key={reminders.id}>{reminders.text}</li>
        ))}
      </ul>
    </>
  )
}

export default Nav
