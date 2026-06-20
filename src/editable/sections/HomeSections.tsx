import Link from 'next/link'
import { ArrowRight, CheckCircle2, Globe2, RadioTower, Search, Send, Sparkles, Star } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function TemplateMock({ title, tone, index }: { title: string; tone: string; index: number }) {
  const colors = ['bg-[#f8d7e8]', 'bg-[#ddf3f4]', 'bg-[#fff0bf]', 'bg-[#efe8ff]', 'bg-[#e7f4dd]', 'bg-[#fde4d2]']
  return (
    <div className="float-card w-[24rem] shrink-0 overflow-hidden rounded-[1.2rem] bg-white shadow-[0_26px_80px_rgba(16,0,51,.24)]">
      <div className={`relative aspect-[16/10] ${colors[index % colors.length]} p-5`}>
        <div className="h-4 w-32 rounded-full bg-white/70" />
        <div className="mt-8 h-5 w-56 rounded-full bg-[#100033]/70" />
        <div className="mt-3 h-5 w-40 rounded-full bg-[#100033]/45" />
        <div className="absolute bottom-5 right-5 h-24 w-24 rounded-[2rem] bg-white/70" />
      </div>
      <div className="p-4">
        <p className="text-[10px] font-black uppercase tracking-[.16em] text-[#6d00df]">{tone}</p>
        <h3 className="mt-2 text-lg font-black leading-tight tracking-[-.03em] text-[#08172f]">{title}</h3>
      </div>
    </div>
  )
}

export function EditableHomeHero(_props: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ') || `${SITE_CONFIG.name}: media distribution for clearer public visibility.`
  const mockCards = [
    ['Launch Coverage', 'Press release'],
    ['Brand Visibility', 'Media network'],
    ['Reputation Hub', 'Public profile'],
    ['Campaign Notes', 'Announcement'],
    ['Company Update', 'Newswire'],
    ['Market Signal', 'Story desk'],
  ]

  return (
    <section className="astra-gradient relative overflow-hidden text-white">
      <span className="hero-mark" aria-hidden="true" />
      <div className={`${dc.shell.section} relative pt-12 sm:pt-20 lg:pt-28`}>
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-3">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3, 4].map((item) => (
                <span key={item} className="h-9 w-9 rounded-full border-2 border-white bg-[var(--slot4-accent)] shadow-sm" />
              ))}
            </div>
            <p className="text-xs font-black uppercase tracking-[.32em] text-white">Launch announcements in hours, not days</p>
          </div>
          <h1 className="mt-10 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-6xl lg:text-[4.7rem]">
            {heroTitle}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-8 text-white/86">
            Distribute press releases, highlight brand updates, improve online reputation, and organize media-ready stories in a polished public hub.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/search" className={dc.button.accent}>Explore plans & start building <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/contact" className={dc.button.secondary}>Contact team</Link>
          </div>
        </div>

        <div className="relative mt-20 pb-10 sm:pb-0">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#6200da] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#bd1ce7] to-transparent" />
          <div className="auto-slider">
            {[...mockCards, ...mockCards].map(([title, tone], index) => <TemplateMock key={`${title}-${index}`} title={title} tone={tone} index={index} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail(_props: HomeSectionProps) {
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={dc.type.sectionTitle}>Made for everyone who needs media attention</h2>
          <p className="mt-5 text-base leading-8 text-[#465166]">From solo founders to growing teams, {SITE_CONFIG.name} keeps announcements clear, searchable, and easy to share.</p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {[
            ['Business Owners', 'Publish professional updates that help customers, partners, and journalists understand what changed.'],
            ['Freelancers', 'Share launches, milestones, and reputation-building stories without heavy production delays.'],
            ['Agencies', 'Organize client announcements into a clean publication-style destination that feels credible.'],
          ].map(([title, text]) => (
            <div key={title}>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-5 text-base leading-8 text-[#465166]">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-black">Trusted by growing teams and public-facing brands</h3>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-8 text-2xl font-black text-[#8a94a8] sm:grid-cols-3 lg:grid-cols-6">
            {['Banner', 'BestBuy', 'Box', 'TOTO', 'NBC', 'OLX', 'Toyota', 'Vogue', 'Vodafone', 'NASA', 'Pulse', 'Mercury'].map((brand) => <span key={brand}>{brand}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit(_props: HomeSectionProps) {
  const blocks = [
    ['Submit releases', 'Create a clear public announcement page.'],
    ['Reach readers', 'Make updates easier for audiences to discover.'],
    ['Organize topics', 'Use categories and search to guide visitors.'],
    ['Build trust', 'Give important messages a polished home.'],
    ['Track stories', 'Keep launches and updates in one place.'],
    ['Share faster', 'Send a clean link whenever coverage matters.'],
  ]

  return (
    <section className="astra-dark overflow-hidden text-white">
      <div className={`${dc.shell.section} py-20 sm:py-24`}>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black tracking-[-.04em] sm:text-5xl">A focused media hub without homepage posts</h2>
          <p className="mt-5 text-lg text-white/78">The homepage now stays promotional and clean, while published content remains available through archive, search, and detail routes.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map(([title, text], index) => (
            <div key={title} className="float-card rounded-[1.4rem] bg-white p-7 text-[#08172f]">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#6d00df] text-sm font-black text-white">0{index + 1}</span>
              <h3 className="mt-8 text-2xl font-black tracking-[-.035em]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#465166]">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center gap-4">
          <Link href="/about" className={dc.button.accent}>Explore archive</Link>
          <Link href="/search" className={dc.button.secondary}>Search site</Link>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask }: HomeSectionProps) {
  const featureRows = [
    { title: 'Client-ready releases', text: 'Choose a story type, publish the details, and share a clean public page.', Icon: Sparkles },
    { title: 'Media distribution flow', text: 'Highlight brand updates, announcements, and important coverage in less time.', Icon: RadioTower },
    { title: 'Searchable reputation hub', text: 'Help visitors find relevant stories through search, routes, and archive pages.', Icon: Globe2 },
  ]

  return (
    <section className="bg-[#fff8ea]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className={dc.type.sectionTitle}>Everything you need to build better visibility</h2>
          <p className="mt-5 text-base leading-8 text-[#465166]">Combine press release publishing, searchable story routes, category filters, and readable detail pages into one polished public site.</p>
        </div>
        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[1.6rem] border border-[#eadfc9] bg-white shadow-[0_24px_80px_rgba(61,24,112,0.10)]">
          {featureRows.map(({ title, text, Icon }, index) => (
            <div key={title} className="grid items-center gap-8 border-b border-[#eadfc9] p-7 last:border-b-0 sm:p-10 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#6d00df] text-white shadow-[0_14px_30px_rgba(109,0,223,.25)]"><Icon className="h-6 w-6" /></span>
                <h3 className="mt-7 text-3xl font-black leading-tight tracking-[-.035em] sm:text-4xl">{title}</h3>
                <p className="mt-5 max-w-md text-base leading-8 text-[#465166]">{text}</p>
              </div>
              <div className="relative overflow-hidden rounded-[1.2rem] bg-[#f6ecff] p-6">
                <div className="h-5 w-36 rounded-full bg-[#6d00df]/20" />
                <div className="mt-8 grid gap-3">
                  <div className="h-12 rounded-2xl bg-white shadow-sm" />
                  <div className="h-12 rounded-2xl bg-white shadow-sm" />
                  <div className="h-12 rounded-2xl bg-white shadow-sm" />
                </div>
                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[.14em] text-[#6d00df]">Step {index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            ['Just hours', 'Move from draft to public release with a fast, polished publishing flow.'],
            ['Clear structure', 'Cards, categories, comments, and detail pages stay consistent for readers.'],
            ['No homepage posts', 'Published content stays off the homepage while routes and archives keep working.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[1.4rem] bg-[#100033] p-7 text-white">
              <CheckCircle2 className="h-7 w-7 text-[var(--slot4-accent)]" />
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/72">{text}</p>
            </div>
          ))}
        </div>

        <form action="/search" className="mt-14 grid rounded-[1.6rem] bg-white p-5 shadow-[0_20px_60px_rgba(61,24,112,0.10)] sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
          <div>
            <h3 className="text-2xl font-black tracking-[-.035em]">Search the full archive</h3>
            <p className="mt-2 text-sm text-[#465166]">Explore every {taskLabel(primaryTask).toLowerCase()} published by {SITE_CONFIG.name}.</p>
          </div>
          <label className="mt-5 flex rounded-full border border-[#ded4f1] bg-[#fbfbff] sm:mt-0 sm:min-w-[420px]">
            <Search className="ml-4 mt-4 h-4 w-4 text-[#6d00df]" />
            <input name="q" placeholder="Search releases" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none" />
            <button className="m-1 rounded-full bg-[#6d00df] px-5 text-xs font-black uppercase tracking-[.12em] text-white">Search</button>
          </label>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} py-16`}>
        <div className="astra-gradient rounded-[1.8rem] px-6 py-16 text-center text-white sm:px-10">
          <div className="flex justify-center gap-1 text-[var(--slot4-accent)]">{[0, 1, 2, 3, 4].map((item) => <Star key={item} className="h-5 w-5 fill-current" />)}</div>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black leading-tight tracking-[-.04em] sm:text-5xl">Join organizations using public stories to grow every day</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/82">Fresh releases, media updates, and useful public information in one focused destination.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className={dc.button.accent}><Send className="h-4 w-4" /> Send a request</Link>
            <Link href="/signup" className={dc.button.secondary}>Create account</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
