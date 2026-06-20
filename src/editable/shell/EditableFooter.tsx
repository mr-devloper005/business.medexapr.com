'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen, LifeBuoy, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  const columns = [
    { title: 'Company', links: [['Home', '/'], ['About', '/about'], ['Contact', '/contact'], ['Search', '/search']] },
  ]
  const supportCards = [
    { title: 'Community', text: 'Useful conversations and distribution ideas.', Icon: MessageCircle },
    { title: 'Support', text: 'Have questions or need help?', Icon: LifeBuoy },
    { title: 'Documentation', text: 'Helpful articles for common questions.', Icon: BookOpen },
  ]

  return (
    <footer className="bg-white text-[#08172f]">
      <section className="astra-gradient px-4 py-20 text-center text-white sm:px-6 lg:px-10">
        <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">Take the first step toward wider media visibility</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-white/82">Publish announcements, organize updates, and help audiences find the stories that matter.</p>
        {session ? (
          <button type="button" onClick={logout} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--slot4-accent)] px-8 py-4 text-sm font-black text-[#08172f] transition hover:-translate-y-0.5 hover:bg-white">
            Logout
          </button>
        ) : (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/login" className="inline-flex items-center justify-center rounded-full border border-white/80 px-7 py-3.5 text-sm font-black text-white transition hover:bg-white hover:text-[#7800dd]">
              Log in
            </Link>
            <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-[var(--slot4-accent)] px-8 py-4 text-sm font-black text-[#08172f] transition hover:-translate-y-0.5 hover:bg-white">
              Sign in <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </section>

      <section className="border-b border-[#e7e0f2] bg-[#fbfbff]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-10">
          {supportCards.map(({ title, text, Icon }) => (
            <div key={title} className="flex items-center gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#9d90ad] text-[#6d00df]"><Icon className="h-6 w-6" /></span>
              <div>
                <h3 className="font-black">{title}</h3>
                <p className="mt-1 text-sm text-[#465166]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-3 text-3xl font-black tracking-[-0.04em] text-[#6d00df]">
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-[#6d00df]">
                <img src="/favicon.png" alt="" className="h-full w-full object-cover" />
              </span>
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#465166]">{globalContent.footer?.description || SITE_CONFIG.description}</p>
            {session ? null : (
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/login" className="inline-flex rounded-full border border-[#6d00df]/30 px-5 py-3 text-xs font-black uppercase tracking-[.08em] text-[#6d00df] transition hover:bg-[#6d00df] hover:text-white">
                  Log in
                </Link>
                <Link href="/signup" className="inline-flex rounded-full bg-[#ffc234] px-5 py-3 text-xs font-black uppercase tracking-[.08em] text-[#08172f] transition hover:bg-[#6d00df] hover:text-white">
                  Sign in
                </Link>
              </div>
            )}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-black uppercase tracking-[.12em]">{column.title}</h3>
                <div className="mt-5 grid gap-3">
                  {column.links.map(([label, href]) => <Link key={label} href={href} className="text-sm text-[#465166] hover:text-[#6d00df]">{label}</Link>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[#e7e0f2] px-4 py-5 text-center text-sm text-[#778095]">Copyright © {year} {SITE_CONFIG.name}. All rights reserved.</div>
    </footer>
  )
}
