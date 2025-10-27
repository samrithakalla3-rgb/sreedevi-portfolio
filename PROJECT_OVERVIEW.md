# 🩺 Sreedevi Portfolio Website — Project Overview

## 📘 1. Project Summary

**Project Name:** Sreedevi Portfolio Website  
**Purpose:** To create a **modern, responsive, single-page portfolio website** that highlights **Sreedevi’s background in Health Data Science and Data Analytics**.  
**Audience:** Recruiters, employers, and academic professionals evaluating her analytical and technical potential.  
**Tone:** Professional, minimal, data-oriented — emphasizing credibility and clean visual design.  
**Hosting:** GitHub Pages (free forever)

The portfolio will serve as a **static informational site** — no contact forms, no file downloads, no analytics tracking.  
It will purely display her **profile, education, projects, and skills** in a visually appealing, animated layout.

---

## 🧩 2. Technical Stack

| Layer | Technology | Purpose |
|-------|-------------|----------|
| **Frontend Framework** | **React 18 + Vite** | Modern, fast, and lightweight front-end setup. |
| **Styling Framework** | **Tailwind CSS v3** | Utility-first responsive design framework. |
| **Animation Library** | **Framer Motion** | Smooth animations, transitions, and interactive effects. |
| **Icon Library** | **Lucide React** | Clean, scalable icons (SVG-based). |
| **Routing** | **React Router v7** | Handles section-based navigation (Home, Education, Projects, Skills). |
| **Hosting Platform** | **GitHub Pages** | Free static deployment directly from the repository. |
| **Package Manager** | **NPM (Node.js)** | Dependency management and build commands. |
| **Language** | **JavaScript (ESNext)** | Lightweight, no TypeScript overhead. |
| **Data Source** | **Static JSON File (`resumeData.json`)** | Centralized resume and profile information storage. |

---

## 🧱 3. Folder & File Structure

```
sreedevi-portfolio/
│
├── public/                      # Static assets served directly
│
├── src/
│   ├── assets/                  # Fonts, icons, images
│   ├── components/              # Reusable UI components
│   │   ├── Hero.jsx             # Hero / Intro section
│   │   ├── Education.jsx        # Education timeline
│   │   ├── Projects.jsx         # Projects cards
│   │   ├── Skills.jsx           # Skills list or tags
│   │   └── Footer.jsx           # Footer
│   │
│   ├── constants/               # Any constants, theme tokens, etc.
│   ├── context/                 # For ThemeContext (dark/light)
│   ├── data/                    # Resume data source
│   │   └── resumeData.json
│   ├── hooks/                   # Custom hooks like scroll spy or theme toggle
│   ├── layouts/                 # Layout wrappers (MainLayout)
│   ├── styles/                  # Additional CSS or Tailwind overrides
│   ├── utils/                   # Helper functions
│   ├── App.jsx                  # Root app component
│   ├── index.css                # Tailwind entry file
│   └── main.jsx                 # ReactDOM entry point
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧭 4. Page Sections (Functional Overview)

### 4.1 Hero Section
- Full-screen hero banner with **name**, **title**, and **animated tagline**.  
- Use **Framer Motion** for smooth fade-in and slide transitions.  
- Include subtle gradient background (e.g., slate to indigo tones).  
- Optionally include a small professional headshot placeholder.

**Fields:**  
- Name  
- Tagline (`"Health Data Science Graduate | Data Analyst | EHR Systems"`)  
- One-line summary (from resume)

---

### 4.2 About / Summary
- Two short paragraphs summarizing her professional interests and goals.  
- Pull content from `resumeData.json > summary`.  
- Style in a glassmorphism container.

---

### 4.3 Education Section
- Timeline or stacked cards for academic qualifications.
- Use **motion.div** transitions between cards.
- Each card displays:
  - Degree
  - Institution
  - Location
  - Graduation Date
  - Key highlights / tools used

---

### 4.4 Projects Section
- Display 3–4 project cards with hover animations:
  - **Disease Prediction Using Symptoms**
  - **Drug Poisoning Mortality Prediction**
  - **Pediatric Respiratory Admission Forecasting**
- Each project shows:
  - Title
  - Description (2–3 lines)
  - Tech stack tags (Python, ML, Visualization, etc.)
- Optional subtle animation when each card enters the viewport.

---

### 4.5 Skills Section
- Grouped by categories:
  - **Programming:** Python, SQL  
  - **Visualization:** Tableau, Looker Studio  
  - **EHR Systems:** Epic, Meditech  
  - **Tools:** Excel, Smartsheet, MS Office  
- Display as tag chips with hover color transition.

---

### 4.6 Footer
- Minimal dark footer centered text:  
  `© 2025 Sreedevi Kalla — Portfolio Project`
- No contact links or analytics tracking.

---

## 🎨 5. Design & UI Guidelines

- **Theme:** Modern, sleek, professional.
- **Color Palette:**  
  - Primary: `#1E293B` (Slate)  
  - Accent: `#38BDF8` (Sky Blue)  
  - Background gradient: Slate → Blue → Indigo.
- **Typography:**  
  - Font Family: “Inter” or “Poppins” (Google Fonts)  
  - Font Weights: 400, 600, 700  
- **Layout:**  
  - Max content width: `1200px`  
  - Responsive for all viewports (mobile-first)  
  - Use Tailwind’s `grid` + `flex` utilities  
- **Animation Tone:**  
  - Subtle and professional (no excessive motion)  
  - Use Framer Motion for section fade-in / slide-up transitions  

---

## ⚡️ 6. Functional & Non-Functional Requirements

| Type | Requirement |
|------|--------------|
| **Functional** | Site displays all résumé sections properly with data from JSON. |
|  | Each section scrolls or navigates smoothly using React Router or anchor links. |
|  | Sections should animate on entry. |
| **Non-Functional** | Fully responsive (mobile, tablet, desktop). |
|  | Optimized for performance and accessibility (Lighthouse score > 90). |
|  | Simple deployment workflow through GitHub Pages. |
|  | Code must follow modular React component pattern. |

---

## 🚀 7. Deployment & Build Instructions

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/sreedevi/sreedevi-portfolio.git
   cd sreedevi-portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` to view.

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```
*(Ensure `"homepage": "https://sreedevi.github.io/"` is set in `package.json`.)*

---

## 🧠 8. Development Notes for Engineers

- The website is **purely static** — no API calls or forms.  
- All data must be centralized in `resumeData.json` for maintainability.  
- Each component (Hero, Education, etc.) should map directly to that JSON.  
- Follow **Tailwind conventions** — avoid inline CSS.  
- Maintain **consistent animation timing** (`transition: 0.3s–0.5s`).  
- Ensure the build passes Lighthouse accessibility checks (contrast, alt text).  
- Keep imports clean and alphabetical; format with Prettier.

---

## 📅 9. Project Timeline (Suggested)

| Phase | Deliverable | Duration |
|--------|-------------|----------|
| Phase 1 | Setup environment, Tailwind config, folder structure | 1 day |
| Phase 2 | Implement Hero + Education + Skills | 2 days |
| Phase 3 | Implement Projects section + Footer | 2 days |
| Phase 4 | Review UI responsiveness, polish, deployment | 1 day |

---

## ✅ 10. Expected Deliverable

- A **deployed GitHub Pages portfolio** at:  
  `https://sreedevi.github.io/`
- Responsive, animated React SPA.
- Well-documented source code with clear component separation.
