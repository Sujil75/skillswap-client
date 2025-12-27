import { useState, useContext } from "react"
import api from "../utils/api"
import { UserContext } from "../context/UserContext"
import { useNavigate, Navigate } from "react-router-dom"

const Login = () => {
  const { loginUser, token } = useContext(UserContext)
  const navigate = useNavigate()
  const {error, setError} = useState('')

  const [form, setForm] = useState({ username: "", email: "", password: "" })

  if (token !== "") return <Navigate to="/" replace={true} />

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await api.post("/auth/login", form)
      loginUser(res.data)
      navigate("/")
    }catch (err) {
      setError(err.response.data.message)
    }
  }

  return (
    <div className='max-w-md mx-auto mt-10 p-6 shadow-lg rounded bg-white'>
      <h2 className='text-2xl mb-4'>Login</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input 
          type="text" 
          placeholder="Username"
          className="border p-2 rounded"
          onChange={(e) => setForm({...form, username: e.target.value})}
        />
        <input 
          type="email" 
          placeholder="Email"
          className="border p-2 rounded"
          onChange={(e) => setForm({...form, email: e.target.value})}
        />
        <input 
          type="password" 
          placeholder="Password"
          className="border p-2 rounded"
          onChange={(e) => setForm({...form, password: e.target.value})}
        />

        <button type="submit" className="bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
      <p>{error}</p>
      <p>Don't have an account? <a href="/register" className="underline hover:text-blue-500">Register here.</a></p>
    </div>
  )
}

export default Login