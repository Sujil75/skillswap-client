import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import api from "../utils/api"
import { UserContext } from "../context/UserContext"
import CommentBox from "../components/CommentBox"
import Navbar from "../components/Navbar"

const SkillDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { token, user } = useContext(UserContext)

  const [skill, setSkill] = useState(null)
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")

  const loadSkill = async () => {
    const res = await api.get(`/skills/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    setSkill(res.data)

    const c = await api.get(`/skills/${id}/comments`)
    setComments(c.data)
  }

  useEffect(()=>{ loadSkill() }, [])

  const postComment = async () => {
    await api.post(`/skills/${id}/comment`, { content: newComment }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    setNewComment("")
    loadSkill()
  }

  const deleteSkill = async () => {
    await api.delete(`/skills/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    navigate("/")
  }

  if(!skill) return <p className="p-6 text-center">Loading...</p>

  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto p-6">

        <h2 className="text-3xl font-bold mb-2">{skill.title}</h2>
        <p>{skill.description}</p>

        <p className="mt-3 text-gray-600"><strong>Category:</strong> {skill.category}</p>
        <p className="text-gray-600"><strong>Level:</strong> {skill.level}</p>
        <p className="text-yellow-600 mt-2 font-semibold">Rating: ⭐ {skill.rating}</p>

        {user?.id === skill.user && (
          <button
            onClick={deleteSkill}
            className="bg-red-600 text-white px-4 py-2 rounded mt-4"
          >
            Delete Skill
          </button>
        )}

        <hr className="my-6" />

        <h3 className="text-xl mb-2">Comments</h3>

        <div className="flex gap-3">
          <input 
            className="flex-1 border p-2 rounded"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e)=>setNewComment(e.target.value)}
          />
          <button onClick={postComment} className="bg-blue-600 text-white px-4 rounded">
            Post
          </button>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          {comments.map((c)=>(
            <CommentBox key={c._id} comment={c} />
          ))}
        </div>

      </div>
    </>
  )
}

export default SkillDetails