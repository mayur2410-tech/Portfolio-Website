# Developer Portfolio - AI Coding Agent Instructions

## Architecture Overview

This is a **Next.js 16 App Router** portfolio using **React 19** and **Tailwind CSS 4**. Data-driven design with configuration files in `utils/data/` that feed into reusable section components.

### Key Structure
- **App Router**: Uses `app/` directory with `page.js` as main entry point
- **Server Components**: Default rendering mode (mark with `'use client'` only when needed)
- **Section Components**: Located in `app/components/homepage/[section]/`
- **Data Files**: All content in `utils/data/*.js` (educations, experience, projects, skills, etc.)
- **Assets**: Lottie animations in `app/assets/lottie/`, SVGs in `app/assets/svg/`

## Component Patterns

### Section Layout Standard
Every homepage section follows this pattern (see [education/index.jsx](app/components/homepage/education/index.jsx)):
```jsx
<div id="section-name" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
  {/* Section divider with gradient */}
  <div className="flex justify-center -translate-y-[1px]">
    <div className="w-3/4">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
    </div>
  </div>

  {/* Section title */}
  <div className="flex justify-center my-5 lg:py-8">
    <div className="flex items-center">
      <span className="w-24 h-[2px] bg-[#1a1443]"></span>
      <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
        Section Title
      </span>
      <span className="w-24 h-[2px] bg-[#1a1443]"></span>
    </div>
  </div>

  {/* Section content */}
</div>
```

### GlowCard Component
Used for cards with hover glow effect (see [helper/glow-card.jsx](app/components/helper/glow-card.jsx)):
- Requires unique `identifier` prop
- Tracks mouse movement for glow effect
- Standard styling: `border border-[#2a2e5a]`, `bg-[#101123]`, `rounded-xl`

### Data File Pattern
Export array from `utils/data/` (see [educations.js](utils/data/educations.js)):
```javascript
export const dataName = [
  { id: 1, title: "...", institution: "...", description: "..." }
]
```

## Styling Conventions

- **Color Palette**: 
  - Primary: `#16f2b3` (bright cyan/green)
  - Accent: `violet-500`
  - Background: `#0d1224`, cards `#101123`
  - Borders: `#25213b`, `#2a2e5a`, `#1a1443`
- **Spacing**: `my-12 lg:my-24` for sections, `gap-6` for cards
- **Animations**: Use Lottie via `AnimationLottie` component, not raw lottie-react
- **Icons**: React Icons library (`react-icons`) - import as needed

## Adding New Sections

1. Create data file in `utils/data/newSection.js`
2. Create component in `app/components/homepage/newSection/index.jsx`
3. Follow section layout standard (divider, title, content)
4. Import and add to [app/page.js](app/page.js) between existing sections
5. Add id for navigation (e.g., `id="certificates"`)

## Development Workflow

- **Dev Server**: `pnpm dev` or `npm run dev`
- **Build**: `pnpm build` or `npm run build`
- **No TypeScript**: Uses JSDoc flow annotations (`// @flow strict`)
- **Linting**: ESLint configured with `next lint`

## External Integrations

- **Blog**: Auto-fetches from dev.to API using `personalData.devUsername`
- **Contact Form**: Uses `@emailjs/browser` and nodemailer (see [api/contact/route.js](app/api/contact/route.js))
- **Analytics**: Google Analytics via `@next/third-parties`

## Important Notes

- All section components use semantic HTML with proper `id` attributes for navigation
- Image optimization uses Next.js `<Image>` component with absolute paths from `/public`
- Client components ('use client') only when using hooks or browser APIs
- Maintain consistent gradient borders and glow effects across sections
