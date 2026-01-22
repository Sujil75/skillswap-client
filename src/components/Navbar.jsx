import { Link } from "react-router-dom"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const Navbar = () => {
  let { logoutUser } = useContext(UserContext)
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  
  logoutUser = () => {
    localStorage.removeItem("token")
    localStorage.removeItem('user')
    window.location.reload()
    navigate("/login")
  }

  return (
    <nav className="w-full bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">SkillSwap</h1>

      <div className="flex gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/timeline" className="hover:text-gray-200">Timeline</Link>


        {token ? (
          <>
            <Link to="/my-skills">My Skills</Link>
            <button onClick={logoutUser} className="bg-red-500 px-3 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Signup</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar