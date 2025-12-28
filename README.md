# SkillSwap: Student Skill Sharing App🎓💻
**SkillSwap** is a community-driven full-stack platform where students can exchange knowledge. Whether you're a React pro or a Guitar beginner, SkillSwap allows you to find mentors and become one yourself.

### **Live Project Link**: https://skill-swap-sujil.netlify.app/
___
### 🌟 Features
- **Secure Authentication**: JWT-based login and registration with global state managed by Context API.
- **Skill Management (CRUD)**: Users can add, update, and delete their own skill posts.
- **Advanced Discovery**: * Keyword search using *MongoDB Regex*.
  - Multi-criteria filtering (Category, Level).
  - Dynamic sorting (Rating, Date).
- **Interactive Visualizations**: 
  - Recharts: Detailed statistics on skill categories and engagement. 
  - Chrono: A chronological timeline of a user's skill-sharing history.
- **Modern UI/UX**: 
  - Responsive design built with React & Vite.
  - Slick Carousel for profile and skill previews.
  - Confirmation popups and category-specific icons.
- **Social Interaction**: Integrated comment system for every skill post.
____
### 🛠️ Tech Stack

| Layer           | Technology                                       |
|-----------------|--------------------------------------------------|
| Frontend        | React (Vite), Tailwind CSS, Context API          |
| Backend         | Node.js, Express.js                              |
| Database        | MongoDB (Mongoose ODM)                           |
| Authentication  | JSON Web Tokens (JWT)                            |
| UI Libraries    | Recharts, React-Chrono, React-Slick, Lucide Icons|

____
### 🔌 API Endpoints
**Authentication** 
- *POST /api/auth/signup* - Register a new user.
- *POST /api/auth/login* - Authenticate user and return JWT.
- 
**Skills**
- *GET /api/skills* - Fetch all skill posts.
- *GET /api/skills/:id* - Get details of a single skill.
- *POST /api/skills* - Create a new skill post (Protected).
- *PUT /api/skills/:id* - Update a skill post (Owner only).
- *DELETE /api/skills/:id* - Delete a skill post (Owner only).

**Search & Discovery**
- *GET /api/skills/search?query=...* - Keyword search via Regex.
- *GET /api/skills/filter?category=...&level=...*- Filter skills.
- *GET /api/skills/sort?by=rating* - Sort by specific metrics.

**User & Stats**
- *GET /api/users/:id/skills* - Get all skills posted by a specific user.
- *GET /api/stats/skills* - Get aggregated data for Recharts.

**Interaction**
- *POST /api/skills/:id/comment* - Add a comment.
- *DELETE /api/comments/:id* - Delete a specific comment.

____
### 🚀 Getting Started
**Prerequisites**
- Node.js (v16+)
- MongoDB Atlas account or local MongoDB instance

**Installation**
1. Clone the repository:
```
bash

git clone https://github.com/yourusername/SkillSwap.git
cd SkillSwap
```
2. Install Backend Dependencies:
```
bash

cd server
npm install
```
3. Install Frontend Dependencies:
```
bash

cd ../client
npm install
```
4. Environment Variables:Create a .env file in the server folder:
```
Code snippet

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
5. Run the Application:
- Backend: *npm run dev* (from server folder)
- Frontend: *npm run dev* (from client folder)

## 📂 Project Structure
```
PlaintextSkillSwap/

├── client/                # React (Vite) Frontend
│   ├── src/
│   │   ├── components/    # Reusable UI (Cards, Navbar, Sidebar)
│   │   ├── context/       # UserContext & SkillContext
│   │   ├── pages/         # Home, Profile, Stats, Auth
│   │   └── utils/         # API instance (Axios)
├── server/                # Node/Express Backend
│   ├── models/            # Mongoose Schemas (User, Skill)
│   ├── routes/            # API Route Handlers
│   ├── controllers/       # Business Logic
│   └── middleware/        # JWT Verification
└── README.md
```