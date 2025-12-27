import { Link } from "react-router-dom"
import { MdDeleteOutline } from "react-icons/md"
import {useContext} from 'react'
import { UserContext } from "../context/UserContext"
import api from "../utils/api"

const SkillCard = ({ skill, onDelete }) => {
  const {token} = useContext(UserContext)

  const deleteSkill = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this skill?")
    if (!confirmDelete) return

    try {
      await api.delete(`/skills/${skill._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (onDelete) onDelete(skill._id)
    } catch (err) {
      console.error("Delete error:", err)
      alert("Failed to delete skill.")
    }
  }

  return (
    <div className="shadow-md p-4 rounded bg-white">
      <button type="button" onClick={deleteSkill} className="text-red-500 border-none bg-none float-right hover: cursor-pointer"><MdDeleteOutline size="20" /></button>
      <h3 className="text-xl font-bold">{skill.title}</h3>
      <p className="text-gray-600">{skill.description.substring(0, 80)}...</p>
      <p className="text-sm mt-2">Rating: ⭐ {skill.rating}</p>

      <Link 
        to={`/skill/${skill._id}`} 
        className="block mt-3 text-blue-600 underline"
      >
        View Details
      </Link>
    </div>
  )
}

export default SkillCard