import { useEffect, useState, useContext } from "react"
import { Chrono } from "react-chrono"
import api from "../utils/api"
import { UserContext } from "../context/UserContext"
import Navbar from "../components/Navbar"

// import "react-chrono/dist/style.css";

const TimelinePage = () => {
  const { token } = useContext(UserContext)
  const [timelineData, setTimelineData] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const res = await api.get("/stats/skills", {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(res.data)

      const items = res.data.skills
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .map(skill => ({
          title: skill.title,
          cardTitle: skill.title,
          cardSubtitle: `Level: ${skill.level} | Rating: ${skill.rating}`,
          cardDetailedText: skill.description,
          category: skill.category,
          rating: skill.rating,
          created_at: new Date(skill.created_at).toDateString()
        }))

      setTimelineData(items)
    }

    loadData()
  }, [token])

  if (!timelineData)
    return <p className="p-6 text-center text-gray-500">Loading timeline...</p>

  const items = timelineData.map(i => ({
    title: i.created_at,
    cardTitle: i.title,
    cardSubtitle: i.cardSubtitle,
    cardDetailedText: `${i.cardDetailedText}
      Category: ${i.category.join(", ")}
      Rating: ${i.rating}
      `
  }))

  return (
    <>
      <Navbar />

      <div className="p-6" style={{scrollbarWidth: "none"}}>
        <h2 className="text-3xl font-semibold mb-6">Skill Timeline</h2>
        {timelineData.length > 0 ? (
          <div style={{ width: "100%", height: "700px" }} className="mx-auto flex flex-col justify-center">
            <Chrono
              items={items}
              mode="alternating"
              focusActiveItemOnLoad={false} 
              scrollable={false}
              hideControls={true} 
              
              layout={{
                cardWidth: 450,
                cardHeight: 'auto',
                responsive: { enabled: true, breakpoint: 768 }
              }}
              
              content={{
                alignment: {
                  horizontal: 'center',
                  vertical: 'center'
                }
              }}
              
              interaction={{
                keyboardNavigation: true,
                pointClick: true,
                autoScroll: false,
              }}
              
              display={{
                borderless: false,
                toolbar: { enabled: false } 
              }}
              
              animation={{
                slideshow: { enabled: false, duration: 4000, type: 'fade' }
              }}
              
              theme={{
                primary: '#0070f3',
                cardBgColor: '#ffffff',
                cardTitleColor: '#1f2937'
              }}
            />
          </div>
        ) : null}
      </div>
    </>
  )
}

export default TimelinePage