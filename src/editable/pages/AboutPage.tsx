import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#fff8ea] text-[#08172f]">
        <section className="astra-gradient relative overflow-hidden text-white">
          <span className="hero-mark" aria-hidden="true" />
          <div className="relative mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight tracking-[-0.045em] sm:text-7xl">
              Clear media stories, organized for public discovery.
            </h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-8 lg:py-16">
          <article className="rounded-[1.6rem] bg-white p-7 shadow-[0_24px_80px_rgba(61,24,112,0.10)] sm:p-10 lg:p-14">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6d00df]">About {SITE_CONFIG.name}</p>
            <p className="mt-6 text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl">{pagesContent.about.description}</p>
            <div className="article-content mt-10 space-y-6">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="grid gap-5">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className="rounded-[1.4rem] border border-[#ded4f1] bg-white p-7 shadow-sm sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6d00df]">0{index + 1}</p>
                <h2 className="mt-4 text-2xl font-black leading-tight tracking-[-.03em]">{value.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#465166]">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[var(--editable-container)] flex-col gap-6 rounded-[1.6rem] bg-[#100033] px-6 py-12 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-.04em] sm:text-5xl">Read the stories shaping the conversation.</h2>
            <Link href="/search" className="inline-flex w-fit rounded-full bg-[var(--slot4-accent)] px-7 py-4 text-sm font-black text-[#08172f]">Explore the archive</Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
