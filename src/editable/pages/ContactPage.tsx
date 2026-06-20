'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Editorial desk', body: 'Send story ideas, corrections, source material, and publication questions.' },
  { icon: Megaphone, title: 'Media partnerships', body: 'Discuss distribution, syndication, newsroom collaborations, and campaigns.' },
  { icon: Mail, title: 'General support', body: 'Reach the team for account, publishing, or site-related help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#fff8ea] text-[#08172f]">
        <section className="astra-gradient relative overflow-hidden text-white">
          <span className="hero-mark" aria-hidden="true" />
          <div className="relative mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight tracking-[-0.045em] sm:text-7xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/78">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8 lg:py-16">
          <aside className="grid gap-5">
            {desks.map((desk, index) => (
              <div key={desk.title} className="rounded-[1.4rem] bg-[#100033] p-7 text-white shadow-[0_20px_60px_rgba(16,0,51,.16)] sm:p-9">
                <div className="flex items-center justify-between"><desk.icon className="h-6 w-6 text-[var(--slot4-accent)]" /><span className="text-xs font-black text-white/45">0{index + 1}</span></div>
                <h2 className="mt-6 text-3xl font-black tracking-[-.035em]">{desk.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/68">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="rounded-[1.6rem] bg-white p-6 shadow-[0_24px_80px_rgba(61,24,112,0.10)] sm:p-10 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6d00df]">Send a message</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-.04em]">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
