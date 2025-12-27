import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import api from "../utils/api"
import SkillCard from "../components/SkillCard"
import Navbar from "../components/Navbar"

const UserSkills = () => {
  const { user } = useContext(UserContext)
  const [skills, setSkills] = useState([])

  useEffect(()=>{
    if(!user) return
    api.get(`/users/${user._id}/skills`)
      .then(res => setSkills(res.data))
  }, [user])

  const removeSkill = (id) => {
    setSkills(prev => prev.filter(s => s._id !== id))
  }

  return (
    <>
      <Navbar />

      <div className="p-6">
        <h2 className="text-2xl mb-4">My Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map(s=>(
            <SkillCard key={s._id} skill={s} onDelete={removeSkill} />
          ))}
        </div>
      </div>
    </>
  )
}

export default UserSkills