import { useState, useContext } from "react"
import api from "../utils/api"
import { UserContext } from "../context/UserContext"
import { useNavigate, Navigate } from "react-router-dom"
import {apiConstant} from '../utils/seed'
import Loader from '../components/Loader'

const Login = () => {
  const { loginUser, token } = useContext(UserContext)
  const [loader, setLoader] = useState(apiConstant.initial)
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const [form, setForm] = useState({ username: "", email: "", password: "" })

  if (token !== "") return <Navigate to="/" replace={true} />

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoader(apiConstant.inProgress)
      const res = await api.post("/auth/login", form)
      loginUser(res.data)
      navigate("/")
    }catch (err) {
      const errMsg = err.response.data.message
      setError(errMsg)
    }
  }

  return (
    <div className="w-[100%] h-[100vh] flex items-center p-0">
      <div className='w-[500px] mx-auto p-6 shadow-lg rounded bg-white'>
        <h2 className='text-2xl mb-4'>Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input 
            type="text" 
            placeholder="Username"
            className="border p-2 rounded"
            onChange={(e) => setForm({...form, username: e.target.value})}
            onFocus={() => (setError(""), setLoader(apiConstant.initial))}
          />
          <input 
            type="email" 
            placeholder="Email"
            className="border p-2 rounded"
            onChange={(e) => setForm({...form, email: e.target.value})}
            onFocus={() => (setError(""), setLoader(apiConstant.initial))}
          />
          <input 
            type="password" 
            placeholder="Password"
            className="border p-2 rounded"
            onChange={(e) => setForm({...form, password: e.target.value})}
            onFocus={() => (setError(""), setLoader(apiConstant.initial))}
          />

          <button type="submit" className="bg-blue-600 text-white py-2 rounded w-[200px] place-self-center">Login</button>
        </form>
        {error ? <p className="text-red-500 font-bold">{error}</p> : loader !== apiConstant.initial ? <Loader color="#1455ce" size="40" /> : ""}
        <p>Don't have an account? <a href="/register" className="underline hover:text-blue-500">Register here.</a></p>
      </div>
    </div>
  )
}

export default Login