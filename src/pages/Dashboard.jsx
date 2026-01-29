import { useEffect, useState, useContext } from "react"
import { UserContext } from "../context/UserContext"
import api from "../utils/api"
import { Link, Navigate } from "react-router-dom"
import SkillCard from "../components/SkillCard"
import Navbar from "../components/Navbar"
import Loader from "../components/Loader"

const Dashboard = () => {
  const { token, user } = useContext(UserContext)
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const fetchSkills = async () => {
      const res = await api.get(`/users/${user._id}/skills`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setSkills(res.data)
    }
    fetchSkills()
  }, [user._id, token])
  if (token === "") return <Navigate to="/login" replace={true} />

  if (!skills) {
    return (
      <div className="p-6 h-[100vh] flex justify-center items-center">
        <Loader color="#1455ce" size="70" />
      </div>
    )
  }

  return (
    <>
      <Navbar />

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">All Skill Posts</h2>
          <Link to="/add-skill" className="bg-green-500 px-4 py-2 text-white rounded">
            + Add Skill
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map(skill => (
            <SkillCard key={skill._id} skill={skill} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Dashboard