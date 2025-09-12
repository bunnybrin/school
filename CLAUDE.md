# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is an educational website repository built with Vue 3 + Vite containing interactive learning materials for Ukrainian school students across different grade levels (5th-9th class). The content focuses on subjects like computer science, geometry, and algebra.

## Technology Stack

- **Frontend Framework**: Vue 3 with Composition API (JavaScript, not TypeScript)
- **Build Tool**: Vite with Hot Module Replacement (HMR)
- **Routing**: Vue Router with history mode
- **Canvas API**: Used for interactive geometric visualizations
- **Language**: Ukrainian (content is in Ukrainian language)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server with HMR
npm run dev
# Runs on http://localhost:3000

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages (manual)
npm run deploy
# Builds and deploys to gh-pages branch

# Automatic deployment via GitHub Actions
# Triggers on push to main branch
# See .github/workflows/deploy.yml
```

## Architecture

This is a Single Page Application (SPA) with the following structure:

### Vue Application Structure
```
src/
├── main.js                 # Application entry point with router setup
├── App.vue                 # Root component with navigation
├── pages/                  # Route components for each class
│   ├── HomePage.vue        # Landing page with class navigation
│   ├── Class8Page.vue      # 8th grade with subject tabs
│   └── Class[5-9]Page.vue  # Other grade pages
├── components/
│   ├── geometry/           # Interactive geometry components
│   │   ├── GeometryLesson.vue      # Main geometry lesson container
│   │   └── QuadrilateralCanvas.vue # Individual shape canvas
│   └── navigation/         # Navigation components
├── composables/           # Vue Composition API logic
│   ├── useCanvas.js       # Canvas drawing utilities
│   ├── useGeometry.js     # Geometric calculations
│   └── useInteraction.js  # Click handling and UI state
└── style.css             # Global styles
```

### Composition API Pattern

The app uses Vue 3 Composition API with composables for logic separation:

- **useCanvas()**: Handles Canvas 2D context, drawing primitives (lines, circles, polygons)
- **useGeometry()**: Pure geometric calculations, shape vertex generation, collision detection
- **useInteraction()**: UI state management, click handling, information display

### Route Structure

```
/ - Landing page with grade selection
/5-class - 5th grade (computer science placeholder)
/6-class - 6th grade (computer science placeholder)
/7-class - 7th grade (computer science placeholder)
/8-class - 8th grade with subject navigation
/8-class/geometry - Interactive quadrilaterals lesson
/8-class/algebra - Algebra placeholder
/8-class/computer-science - Computer science placeholder
/9-class - 9th grade (computer science placeholder)
```

### Interactive Geometry System

The geometry lesson implements the original QuadrilateralTeacher functionality using Vue reactivity:

- **Shape Rendering**: Four quadrilateral types (square, rectangle, rhombus, arbitrary)
- **Interactive Elements**: Click detection on vertices, sides, and shape interiors
- **Visual Feedback**: Color-coded highlighting system with educational information
- **Canvas Management**: Reactive canvas updates through Vue's reactivity system

## Code Style

- **Vue 3 Composition API**: All components use `<script setup>` syntax exclusively
- **JavaScript ES6+**: destructuring, arrow functions, async/await, const/let
- **Modular composables**: Single responsibility principle with reusable logic
- **Props & Emits**: Using `defineProps()` and `defineEmits()` compiler macros
- **CSS**: Grid and Flexbox for responsive layouts
- **Naming**: Ukrainian UI text with English code variables

## Content Languages

- **UI Text**: Ukrainian
- **Code**: English (variables, functions, comments)
- **Educational Content**: Ukrainian

## Deployment

**GitHub Actions**: Automatic deployment configured via `.github/workflows/deploy.yml`
- **Trigger**: Push to main branch  
- **Process**: Build → Deploy via gh-pages to gh-pages branch
- **URL**: https://bunnybrin.github.io/school/

**Configuration**:
- **Vite**: `base: '/school/'` for GitHub Pages subpath routing
- **Router**: `createWebHistory('/school/')` for correct routing
- **Source**: Deploy from `gh-pages` branch (set in GitHub Settings → Pages)

**Important**: GitHub Pages should be configured to deploy from `gh-pages` branch, not GitHub Actions source.