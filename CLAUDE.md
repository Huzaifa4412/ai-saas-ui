# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Syenxa Tech is a Next.js 15 marketing website for an AI solutions company. The site showcases AI Calling Agents, chatbots, website development, and digital marketing services. This is a client-side rendered React application with heavy emphasis on animations and smooth user experiences.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **React**: 19.0.0
- **Styling**: Tailwind CSS v4 (beta) with custom CSS variables
- **Animations**:
  - `motion` (Framer Motion) - Primary animation library
  - `gsap` + `@gsap/react` - Advanced animations
  - `@studio-freight/lenis` - Smooth scrolling
- **UI Components**: shadcn/ui (New York style) via Radix UI primitives
- **Icons**: Lucide React
- **Integrations**:
  - `@n8n/chat` - AI chatbot widget
  - `@calcom/embed-react` - Booking/Calendar integration

## Path Aliases

The `@/*` alias maps to `src/*` (configured in `jsconfig.json`):
```js
import Component from "@/components/navbar";
import { cn } from "@/lib/utils";
```

## Component Architecture

### App Structure (Next.js App Router)
- `src/app/layout.js` - Root layout with Navbar, Cal.com booking widget, and smooth scroll setup
- `src/app/page.js` - Home page (Hero, Services, Story, Contact, FAQs, Footer)
- `src/app/*/page.js` - Route pages for services, blog, about, etc.

### Component Organization
- `src/components/` - Reusable React components
- `src/components/ui/` - shadcn/ui base components
- `src/components/services/` - Service-specific components
- `src/lib/utils.js` - Utility functions (cn() for class merging)

### Client Components
Most components use `"use client"` directive because they use:
- React hooks (useState, useEffect)
- Animation libraries (motion, GSAP)
- Browser APIs (window, scroll events)

## Key Patterns

### Animation with Framer Motion
```jsx
import { motion, AnimatePresence } from "motion/react";

<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
/>
```

### Class Merging Utility
```js
import { cn } from "@/lib/utils";

// Combines clsx and tailwind-merge for proper Tailwind class precedence
cn("base-class", condition && "conditional-class", "override-class")
```

### Navbar State Management
The navbar uses scroll-based state for glassmorphism effects and manages mega-menu dropdown states with mouse events.

## Styling Conventions

- Dark theme with `#ff541f` (orange-red) as primary accent color
- Glassmorphism: `bg-white/5 backdrop-blur-xl border border-white/10`
- Font: Poppins (body), Urbanist (headings), DM Sans (geometric/alternative)
- Custom CSS variables defined in `src/app/globals.css`

## Third-Party Integrations

### n8n Chat Widget
Configured in `src/components/ChatbotWidget.jsx` with a hardcoded webhook URL. The widget is imported in the root layout but may not be actively rendered.

### Cal.com Booking
`src/components/book-calcom.jsx` wraps the `@calcom/embed-react` component for appointment scheduling.

## SEO

Metadata is defined in `src/app/layout.js` including:
- Open Graph tags for social sharing
- Twitter card metadata
- JSON-LD structured data for organization schema
- Comprehensive keyword list for search optimization
