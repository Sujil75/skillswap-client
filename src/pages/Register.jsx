import { useState, useContext } from "react"
import { UserContext } from "../context/UserContext"
import api from "../utils/api"
import { useNavigate, Navigate } from "react-router-dom"

const Register = () => {
  const { loginUser, token } = useContext(UserContext)
  const navigate = useNavigate()

  const [form, setForm] = useState({name: "", username: "", email: "", password: ""})

  if (token !== "") return <Navigate to="/" replace={true} />

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await api.post("/auth/signup", form)
    loginUser(res.data)

    localStorage.removeItem("token")
    localStorage.setItem("token", res.data.token)
    navigate("/")
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow rounded">

      <h2 className="text-2xl mb-3">Signup</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">

        <input className="border p-2" placeholder="Name"
          onChange={(e)=>setForm({...form, name: e.target.value})} />

        <input className="border p-2" placeholder="Username"
          onChange={(e)=>setForm({...form, username: e.target.value})} />

        <input className="border p-2" placeholder="Email"
          onChange={(e)=>setForm({...form, email: e.target.value})} />

        <input type="password" className="border p-2" placeholder="Password"
          onChange={(e)=>setForm({...form, password: e.target.value})} />

        <button type="submit" className="bg-green-600 text-white py-2 rounded">
          Create Account
        </button>
      </form>

      <p>Already have an account? <a href="/login" className="underline">Login here.</a></p>
    </div>
  )
}

export default Register