import logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'
import MyButton from '../MyButton/MyButton.jsx'

function Nav() {
  function addFuncion() {
    alert('hey')
  }

  return (
    <div className="flex justify-between mt-8">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="flex items-center">
        <Link to="/">
          <p className="px-4 text-base">Home</p>
        </Link>
        <Link to="/">
          <p className="px-4 text-base">About</p>
        </Link>
        <Link to="/">
          <p className="px-4 text-base">Pricing</p>
        </Link>
        <MyButton text="Sign up" onClick={addFuncion} />
      </div>
    </div>
  )
}

export default Nav
