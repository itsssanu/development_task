# Development Task - React UI Components

## 📋 Overview

This is a 2-day development assessment focused on building a mobile-responsive and accessible UI based on the provided Figma design. The project emphasizes component-based architecture, clean code practices, and user-friendly interactions.

## 🎯 Objective

Build a pixel-perfect, mobile-responsive UI in React that matches the Figma design specifications. All sections must be developed as separate, reusable components with proper state management and validation logic.

## 📁 Project Structure

```
DEVELOPMENT_TASK/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── UI/
│   │   ├── CarouselSection.jsx
│   │   ├── ContactForm.jsx
│   │   ├── CTASection.jsx
│   │   ├── FAQSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── PublicationSection.jsx
│   │   ├── ShapeFutureSection.jsx
│   │   └── WhyJoinSection.jsx
│   ├── data/
│   ├── utilities/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitattributes
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
```

## 🛠️ Tech Stack

- **Framework:** React.js
- **Styling:** TailwindCSS
- **Carousel/Slider:** SwiperJS (via npm)
- **Build Tool:** Vite (recommended)
- **State Management:** React Hooks (useState, useEffect)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd DEVELOPMENT_TASK
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📱 Responsive Design

The application must be fully responsive and tested on:
- Mobile devices (320px - 767px)
- Tablets (768px - 1023px)
- Desktop (1024px and above)

## ♿ Accessibility Requirements

- Semantic HTML elements
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus indicators for interactive elements
- Alt text for images
- Color contrast compliance (WCAG AA)
