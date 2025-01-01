
# GitHub Portfolio Showcase 🚀

## 🌟 Overview
A modern, responsive portfolio template designed specifically for GitHub users to showcase their coding journey. Built with Next.js and Tailwind CSS, this project dynamically fetches and displays GitHub data through the GitHub API, creating a personalized developer portfolio.

## ✨ Key Features
- **Dynamic Profile Display**: Showcase your GitHub profile with bio, avatar, followers, and repository count
- **Comprehensive Stats**: Display detailed GitHub statistics including stars, commits, and contributions
- **Project Highlights**: Feature your top repositories with detailed metrics and language breakdowns
- **Activity Visualization**: Interactive calendar heatmap of your GitHub contributions
- **Responsive Design**: Optimized for all devices with smooth animations and transitions
- **Easy Customization**: Modify content through a simple configuration file

## 🛠️ Technologies
| Technology | Purpose |
|------------|---------|
| Next.js | Server-side rendering and routing |
| Tailwind CSS | Utility-first CSS framework |
| React | Component-based UI development |
| GitHub API | Fetching user data and statistics |
| React Icons | Beautiful, consistent icons |
| React GitHub Calendar | Contribution graph visualization |

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- GitHub account

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/prateekraiger/github-portfolio.git
   cd github-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your profile:
   - Open `data/user-data.js`
   - Update with your GitHub username and personal details

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## 🎨 Customization
### Personalization Options
- **Profile Data**: Update `data/user-data.js` with your information
- **Styling**: Modify `tailwind.config.js` for custom themes
- **Components**: Edit files in `app/components/` to add/remove sections

### Available Components
| Component | Location | Description |
|-----------|----------|-------------|
| Navbar | `app/components/navbar.jsx` | Main navigation |
| Hero Section | `app/components/hero-section/` | Profile introduction |
| Stats | `app/components/stats/` | GitHub statistics |
| Projects | `app/components/projects/` | Repository showcase |
| Contributions | `app/components/contributions/` | Activity graph |
| Footer | `app/components/footer.jsx` | Page footer |

## 🌍 Deployment
### Build & Deploy
1. Create production build:
   ```bash
   npm run build
   ```

2. Deploy to your preferred platform:
   - [Vercel](https://vercel.com/docs)
   - [Netlify](https://docs.netlify.com/)
   - [GitHub Pages](https://pages.github.com/)

## 🤝 Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.
---

⭐️ Feel free to star the repository and customize it to create your own unique GitHub portfolio! Let your coding journey shine! ✨
