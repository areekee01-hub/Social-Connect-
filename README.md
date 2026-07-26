# Social Connect

**Build social media platforms for connecting communities.**

Social Connect is a modern, full-stack social media platform featuring clean design, vibrant UX, and real-time interactions. Built with React, Node.js, MongoDB, and Firebase.

## 🎯 Core Features

- **User Authentication** — Sign-up, login with Firebase Auth
- **User Profiles** — Customizable profiles with avatar, bio, followers
- **Content Sharing** — Photo/video posts with captions and hashtags
- **Engagement** — Likes, comments, shares on posts
- **Real-time Feed** — Algorithm-driven home feed showing relevant content
- **Direct Messaging** — Private conversations between users
- **Stories** — Temporary content that disappears after 24 hours
- **Notifications** — Real-time alerts for likes, comments, follows, messages
- **Search & Discover** — Find users, posts, and trending hashtags
- **Geotagging** — Tag posts with location information

## 🎨 Brand Identity

- **Primary Color:** Electric Violet (#6366F1)
- **Secondary Color:** Dark Slate (#0F172A)
- **Accent Color:** Rose Pink (#F43F5E)
- **Background:** Off-White (#F8FAFC) / Pure White (#FFFFFF)
- **Vibe:** Clean, minimalist, vibrant, content-first

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS, Lucide React
- **Mobile:** React Native (planned)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication & Storage:** Firebase Auth, Firebase Cloud Storage
- **Cloud Hosting:** AWS / Google Cloud (planned)

## 📁 Project Structure

```
Social-Connect-/
├── frontend/              # React web application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API and Firebase services
│   │   ├── hooks/        # Custom React hooks
│   │   ├── context/      # React Context for state management
│   │   ├── utils/        # Utility functions
│   │   └── App.jsx       # Main app component
│   ├── public/           # Static assets
│   ├── package.json
│   └── tailwind.config.js
├── backend/               # Node.js Express server
│   ├── routes/           # API endpoints
│   ├── controllers/      # Request handlers
│   ├── models/           # MongoDB schemas
│   ├── middleware/       # Auth, error handling
│   ├── services/         # Business logic
│   ├── config/           # Configuration files
│   ├── .env.example      # Environment variables template
│   └── server.js         # Entry point
├── docs/                 # Documentation
│   ├── API.md            # API documentation
│   ├── ARCHITECTURE.md   # Architecture overview
│   └── DEPLOYMENT.md     # Deployment guide
├── .github/workflows/    # CI/CD pipelines
├── .gitignore
└── package.json          # Root package.json for workspaces
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- MongoDB (local or Atlas)
- Firebase project setup

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173 to view the app.

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Add your MongoDB and Firebase credentials
npm run dev
```

Server runs on http://localhost:5000 (or as configured).

## 📚 Development Roadmap

### Phase 1: MVP (Weeks 1-4)
- [ ] Frontend prototype with feed, post creation, likes, comments
- [ ] User authentication (sign-up, login)
- [ ] Basic user profiles
- [ ] Post CRUD operations
- [ ] Real-time engagement (likes, comments)

### Phase 2: Core Features (Weeks 5-8)
- [ ] Follow/unfollow system
- [ ] Notifications
- [ ] Direct messaging
- [ ] Search functionality
- [ ] Hashtag support

### Phase 3: Advanced Features (Weeks 9-12)
- [ ] Stories functionality
- [ ] Feed algorithm
- [ ] Geotagging
- [ ] Media filters and editing
- [ ] Analytics dashboard

### Phase 4: Scaling & Polish (Weeks 13+)
- [ ] Performance optimization
- [ ] Mobile app (React Native)
- [ ] Infrastructure scaling
- [ ] Community moderation tools
- [ ] Beta testing with real users

## 🧪 Testing

```bash
# Frontend tests
cd frontend && npm run test

# Backend tests
cd backend && npm run test
```

## 📖 Documentation

See the `docs/` folder for detailed documentation on:
- API endpoints and usage
- System architecture
- Deployment procedures
- Contributing guidelines

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License — see the LICENSE file for details.

## 💬 Support

For issues, questions, or suggestions, please open a GitHub issue or contact the development team.

---

**Built with ❤️ by the Social Connect team**