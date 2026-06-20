import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#fff8ea',
  '--slot4-page-text': '#08172f',
  '--slot4-panel-bg': '#f6ecff',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#465166',
  '--slot4-soft-muted-text': '#778095',
  '--slot4-accent': '#ffc234',
  '--slot4-accent-fill': '#ffc234',
  '--slot4-accent-soft': '#fff0bf',
  '--slot4-purple': '#6d00df',
  '--slot4-magenta': '#c91ce8',
  '--slot4-night': '#100033',
  '--slot4-dark-bg': '#100033',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#efe8ff',
  '--slot4-cream': '#fff8ea',
  '--slot4-warm': '#ffffff',
  '--slot4-lavender': '#efe6ff',
  '--slot4-gray': '#f5f6fb',
  '--slot4-body-gradient': 'linear-gradient(180deg, #ffffff 0%, #fff8ea 42%, #f8f2ff 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-[#ded4f1]',
  darkBorder: 'border-white/20',
  shadow: 'shadow-[0_18px_50px_rgba(61,24,112,0.10)]',
  shadowStrong: 'shadow-[0_30px_90px_rgba(70,0,160,0.22)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(16,0,51,0.03),rgba(16,0,51,0.82))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10',
    sectionY: 'py-14 sm:py-20 lg:py-24',
  },
  layout: {
    safeGrid: 'grid gap-5 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start',
    rail: 'flex gap-5 overflow-hidden',
    minRailCard: 'w-[260px] shrink-0 sm:w-[300px]',
  },
  type: {
    eyebrow: 'text-[11px] font-black uppercase tracking-[0.28em]',
    heroTitle: 'text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[4.9rem]',
    sectionTitle: 'text-3xl font-black leading-tight tracking-[-0.035em] sm:text-5xl',
    body: 'text-base leading-8',
  },
  surface: {
    card: `rounded-[1.35rem] border ${editablePalette.border} ${editablePalette.surfaceBg} ${editablePalette.shadow}`,
    soft: `rounded-[1.35rem] border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `${editablePalette.darkBg} ${editablePalette.darkText}`,
  },
  button: {
    primary: `inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-dark-bg)] px-7 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[var(--slot4-purple)]`,
    secondary: `inline-flex items-center justify-center gap-2 rounded-full border border-white/80 bg-transparent px-7 py-3.5 text-sm font-black text-white transition hover:bg-white hover:text-[var(--slot4-night)]`,
    accent: `inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-accent-fill)] px-8 py-4 text-sm font-black text-[var(--slot4-page-text)] shadow-[0_16px_38px_rgba(255,194,52,0.28)] transition hover:-translate-y-0.5 hover:bg-white`,
  },
  media: {
    frame: `relative overflow-hidden ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_54px_rgba(90,0,190,0.18)]',
    fade: 'transition duration-300 hover:opacity-75',
  },
} as const

export const aiLayoutRules = [
  'All visible layout decisions belong inside src/editable; keep data, SEO, API, and route logic untouched.',
  'Use a purple gradient product-style masthead, yellow pill buttons, rounded showcase cards, and pale cream content bands.',
  'Keep dynamic post fetching intact and never replace backend posts with mock arrays.',
  'Use postHref() for all post links so route aliases and task-specific detail pages remain functional.',
  'Prioritize readable desktop and mobile layouts with polished spacing and safe fallbacks for missing post media.',
  'Branding must remain dynamic from SITE_CONFIG; never hardcode a reference brand name or logo.',
] as const
