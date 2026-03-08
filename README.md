# Shivam Singh | Portfolio

A dynamic, fully responsive, and highly interactive developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. This portfolio showcases my journey, skills, featured projects, and live GitHub activity in a sleek, modern, and theme-adaptive user interface.

## 🌐 Live Demo

**[shivamsingh-iitpatna.vercel.app](https://shivamsingh-iitpatna.vercel.app/)**

## ✨ Key Features

- **Multi-Theme System:** Seamless, animated switching between three distinct themes ("Dark Intelligence", "Light Precision", and "Neon Cyber").
- **Dynamic Physics Particles:** Interactive hero background utilizing `tsparticles` customized to look like neural network constellation links depending on the theme.
- **Glassmorphism UI:** Modern frosted glass container effects paired with neon glow accents.
- **Framer Motion Animations:** Smooth layout transitions, staggered reveals, scroll-linked animations, pop-layout rendering, and spring-based interactions scattered gracefully across all components.
- **Custom Cursor:** A glowing orbital cursor that intelligently expands and reacts when hovering over interactable elements.
- **GitHub API Integration:** Live, automated fetching of user contribution graphs, repository statistics, and most used language metrics directly from GitHub via `github-readme-stats` and `ghchart`.
- **Serverless Contact Form:** Fully functional "direct-to-inbox" contact form powered by `FormSubmit.co` requiring zero backend configuration.
- **Optimized SEO:** Embedded metadata, Open Graph cards, standard `robots.txt`, and `sitemap.xml` specifically optimized for strong search engine presence.
- **Performant & Responsive:** Fluid scaling typography and UI structures tailored natively from 320px mobile screens up through 4K displays.

## 🛠️ Technologies Used

### Core
- **React 18** (Functional components, Hooks)
- **TypeScript** (Strict typing environment)
- **Vite** (Next-generation lightning-fast frontend tooling)

### Styling & UI
- **Tailwind CSS** (Utility-first CSS framework coupled with extensive custom root variables)
- **Framer Motion** (Production-ready animation and gesture library)
- **Lucide React** (Beautiful & consistent SVG icon pack)

### Specialized Libraries
- **tsparticles** (High-performance particle engine used in the Hero mesh)
- **Lenis** (Incredibly smooth scroll interpolation)
- **React DOM & ReactDOM/server** (For portal rendering custom overlays like modals)

## 📦 Project Structure

```text
├── public/                 # Static assets (images, icons, robots.txt, sitemap.xml)
├── src/
│   ├── components/         # Reusable UI abstractions
│   │   ├── Header.tsx      # Sticky navigation bar & theme controls
│   │   ├── Hero.tsx        # Title block & particle network canvas
│   │   ├── About.tsx       # Bio and counting statistics
│   │   ├── Skills.tsx      # Interactive skill orbits
│   │   ├── Projects.tsx    # Filterable project gallery cards
│   │   ├── Timeline.tsx    # Responsive experience & education tracker
│   │   ├── Achievements.tsx# Certifications and honors carousel
│   │   ├── GithubActivity.tsx # API hooked GitHub metrics chart
│   │   ├── Contact.tsx     # FormSubmit.co connected contact form
│   │   ├── Footer.tsx      # Outro wrapper with hidden Matrix rain easter egg
│   │   ├── CustomCursor.tsx# Animated custom mouse follower
│   │   ├── ThemeSwitcher.tsx # Color theme selection GUI
│   │   └── AnimatedProfileLogo.tsx # High-res zoomable avatar modal
│   ├── App.tsx             # Root application orchestrator
│   ├── index.css           # Contains all Tailwind directives and deep CSS variables
│   └── main.tsx            # React mounting execution context
├── .env.example            # Environment variables template
├── index.html              # Core skeleton, external font links, SEO tags
├── tailwind.config.js      # Custom theme expansions and keyframes
├── tsconfig.json           # Type configurations
└── vite.config.ts          # Bundler optimization rules
```

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine (`v16.0.0` or higher recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shivxmhere/My-portfolio.git
   cd My-portfolio
   ```
   *(Note: Adjust the repo name depending on your actual repository path)*

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173/` to interact with the application locally.

### Building for Production
To generate a heavily optimized, minified production distribution bundle:
```bash
npm run build
```
This generates a `./dist` folder which is ready for deployment across any static hosting service (Vercel, Netlify, GitHub Pages, etc).

## 🪪 License

This project is open-source and available under the [MIT License](LICENSE).

---
**Designed and Built by Shivam Singh**
