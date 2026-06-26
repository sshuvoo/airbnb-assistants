# 🏡 Airbnb Assistants - Landing Page

Welcome to the **Airbnb Assistants** repository! This project is a pixel-perfect, animated, and responsive Next.js landing page converted from a Figma design. Built with modern web technologies.

## ✨ Features

- **Pixel-Perfect Implementation:** Accurately translated from the provided Figma design.
- **Responsive Layout:** Works flawlessly on desktop, tablet, and mobile devices.
- **Smooth Animations:** Powered by Framer Motion for scroll-linked and viewport-based animations.
- **Interactive Carousels & Marquees:** Touch-friendly review sliders and infinite scrolling brand tickers.
- **Modern Tech Stack:** Utilizes Next.js App Router, React 19, and Tailwind CSS v4.

## 🚀 Tech Stack & Packages

Here is a breakdown of the core packages used and their purpose in the project:

### Framework & Styling

- **[Next.js (v16)](https://nextjs.org/):** The core React framework handling routing, Server Components, and optimized rendering.
- **[React (v19)](https://react.dev/):** Library for building the user interface.
- **[Tailwind CSS (v4)](https://tailwindcss.com/):** Utility-first CSS framework for rapid UI styling.

### Animations & Interactions

- **[Framer Motion](https://www.framer.com/motion/):** Used for complex, declarative animations (e.g., staggering FAQ avatars, scroll-triggered fade-ins).
- **[tw-animate-css](https://github.com/morteza-fsh/tw-animate-css):** Provides additional utility classes for quick CSS animations.

### UI Components & Carousels

- **[shadcn/ui & Radix UI](https://ui.shadcn.com/):** Headless, accessible UI primitives (used for components like `Sheet` for mobile menus).
- **[Swiper](https://swiperjs.com/):** Used for the touch-responsive testimonial slider in the `ReviewSection`.
- **[React Fast Marquee](https://www.react-fast-marquee.com/):** Implements the infinite scrolling ticker for the `TrustedBrands` and tools sections.
- **[Lucide React](https://lucide.dev/):** Beautiful, consistent SVG icons used throughout the layout.

### Utilities

- **`class-variance-authority`, `clsx`, `tailwind-merge`:** Essential utilities for dynamically merging Tailwind classes and managing component style variants without conflicts.

## 📂 Project Structure

The project follows a component-driven architecture:

```text
.
├── app/
│   ├── layout.tsx         # Global layout and fonts
│   ├── page.tsx           # Main landing page assembling all sections
│   └── globals.css        # Global styles and Tailwind directives
├── components/
│   ├── header.tsx         # Navigation bar with dynamic scroll shadows
│   ├── hero-section.tsx   # Top section with call-to-action
│   ├── trusted-brands.tsx # Marquee displaying partner logos
│   ├── service-section.tsx# Grid of services offered
│   ├── how-it-works-section.tsx # Step-by-step guide
│   ├── pricing-section.tsx# Pricing tiers and cards
│   ├── review-section.tsx # Swiper carousel for user testimonials
│   ├── faq-section.tsx    # Accordion FAQ with animated avatars
│   ├── footer.tsx         # Site footer and links
│   └── ui/                # Reusable shadcn/ui components (e.g., Sheet)
└── package.json
```

## 🛠️ Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher is recommended).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sshuvoo/airbnb-assistants.git
   cd airbnb-assistants
   ```

2. **Install dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   _Or using yarn, pnpm, or bun depending on your preference._

### Running the Development Server

Start the development server with hot-reloading:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server after building:

```bash
npm run start
```

---

Thanks for reviewing the code!
