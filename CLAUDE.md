# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

Professional website for Dr. Ali Akbar Jalali, built with Next.js 15, TypeScript, and Tailwind CSS. The site showcases his academic career, research, and role as the "Father of Information Technology in Iran."

## Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Build and export static site
npm run export
```

## Architecture

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page component
│   └── globals.css     # Global styles with Tailwind
├── components/
│   ├── Navigation.tsx   # Responsive navigation
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # Biography section
│   ├── AcademicCareer.tsx # Career timeline
│   ├── Research.tsx    # Research & publications
│   └── Contact.tsx     # Professional links
```

## Task Management

- **PROJECT_ROADMAP.md** - Long-term project planning and phases
- **TASKS.md** - Current sprint tasks and tracking
- **DECISIONS.md** - Technical decisions and rationale

## Deployment

- Hosted on GitHub Pages
- Automatic deployment via GitHub Actions on push to main
- Static export configured in next.config.js

## Key Features

- Responsive design for all devices
- SEO optimized with metadata
- Fast performance with static generation
- Professional academic design
- Tailwind CSS for styling

## Important Notes

1. When adding images, optimize them for web (WebP format preferred)
2. Maintain consistent TypeScript types
3. Follow existing component patterns
4. Test responsive design on mobile
5. Ensure all external links open in new tabs
6. Keep content professional and academic in tone

## Git Workflow

- Commit changes regularly after completing logical units of work
- Use clear, descriptive commit messages in present tense
- Do NOT include "Generated with Claude Code" or similar attributions in commit messages
- Focus commit messages on what was changed and why
- **ALWAYS push commits to GitHub immediately after committing**
- Use `git push` after each commit to ensure changes are published