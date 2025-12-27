import { useContext, useState } from "react"
import api from "../utils/api"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

const SkillCreate = () => {
  const { token } = useContext(UserContext)
  const navigate = useNavigate()

  const [form, setForm] = useState({ title: "", description: "", category: "", level: "", rating: 0 })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await api.post("/skills", form, {
      headers: { Authorization: `Bearer ${token}` }
    })
    navigate("/")
  }

  return (
    <>
      <Navbar />

      <div className="max-w-lg mx-auto mt-10 bg-white shadow p-6 rounded">
        <h2 className="text-2xl mb-4">Add Skill</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input className="border p-2" placeholder="Title" 
            onChange={(e)=>setForm({...form, title: e.target.value})}
          />
          <textarea className="border p-2" placeholder="Description"
            onChange={(e)=>setForm({...form, description: e.target.value})}
          />
          <input className="border p-2" placeholder="Category"
            onChange={(e)=>setForm({...form, category: e.target.value})}
          />
          <input className="border p-2" placeholder="Level"
            onChange={(e)=>setForm({...form, level: e.target.value})}
          />
          <input className="border p-2" placeholder="Rating (0-5)"
            type="number"
            onChange={(e)=>setForm({...form, rating: e.target.value})}
          />

          <button className="bg-blue-600 text-white py-2 rounded">
            Create Skill
          </button>
        </form>
      </div>
    </>
  )
}

export default SkillCreate