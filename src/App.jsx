import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import SkillCreate from "./pages/SkillCreate"
import SkillDetails from "./pages/SkillDetails"
import UserSkills from "./pages/UserSkills"
import SkillUpdate from "./components/SkillUpdate"
import Stats from "./pages/Stats"
import { UserProvider } from "./context/UserContext"
import TimelinePage from "./pages/Timeline"
import ProtectedRoute from "./components/ProtectedRoute"
import './App.css'

export default function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-skill" element={<ProtectedRoute />}>
            <Route index element={<SkillCreate />} />
        </Route>
        <Route path="/skill/:id" element={<ProtectedRoute />}>
            <Route index element={<SkillDetails />} />
        </Route>
        <Route exact path="" element={<UserSkills />} />
        <Route path="/my-skills" element={<ProtectedRoute />}>
            <Route index element={<UserSkills />} />
        </Route>
        <Route path="/stats" element={<ProtectedRoute />}>
            <Route index element={<Stats />} />
        </Route>
        <Route path="/timeline" element={<ProtectedRoute />}>
            <Route index element={<TimelinePage />} />
        </Route>
        <Route path="/update-skill" element={<ProtectedRoute />}>
            <Route index element={<SkillUpdate />} />
        </Route>
      </Routes>
    </UserProvider>
  )
}
