import { useEffect, useState, useContext } from "react"
import { UserContext } from "../context/UserContext"
import api from "../utils/api"
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis } from "recharts"
import Navbar from "../components/Navbar"
import Loader from "../components/Loader"

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"]

const Stats = () => {
  const {token} = useContext(UserContext)
  const [stats, setStats] = useState(null)

  useEffect(()=>{
    const fetchedStats = async () => {
      const res =  await api.get("/stats/skills", {
        headers: {Authorization: `Bearer ${token}`},
      })
      setStats(res.data)
    }

    fetchedStats()
  }, [token])

  return (
    <>
      <Navbar />

      {!stats ? (
        <div className="p-6 h-[100vh] flex justify-center items-center">
          <Loader color="#1455ce" size="70" />
        </div>
      ) : (
        <div className="p-6">
          <h2 className="text-2xl mb-5">Skill Statistics</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Pie Chart */}
            <div className="bg-white shadow p-4 rounded">
              <h3 className="text-lg mb-2">Skills by Category</h3>
              <PieChart width={350} height={300}>
                <Pie
                  data={stats.skillByCategory}
                  dataKey="count"
                  nameKey="_id"
                  outerRadius={120}
                >
                  {stats.skillByCategory.map((_, index)=>(
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>

            {/* Bar Chart */}
            <div className="bg-white shadow p-4 rounded">
              <h3 className="text-lg mb-2">Average Rating</h3>
              <BarChart width={350} height={300} data={[stats.overallStatus]}>
                <XAxis dataKey="totalPass" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="avgRating" fill="#82ca9d" />
              </BarChart>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default Stats