'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Search', href: '/search' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#7800dd] text-white shadow-[0_1px_0_rgba(255,255,255,.16)]">
      <div className="mx-auto flex min-h-[86px] max-w-[1440px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white text-xl font-black"><img
          src="/favicon.png" alt="" className="h-full w-full object-cover" />
          </span>
          <span className="max-w-[48vw] truncate text-2xl font-black tracking-[-0.04em] sm:text-4xl">{SITE_CONFIG.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="inline-flex items-center gap-1.5 transition hover:text-[var(--slot4-accent)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {session ? (
            <>
              <span className="hidden max-w-[11rem] truncate text-sm font-black sm:inline-flex">Hi, {session.name}</span>
              <Link href="/create" className="hidden rounded-full border border-white/70 px-5 py-2.5 text-xs font-black uppercase tracking-[.08em] transition hover:bg-white hover:text-[#7800dd] sm:inline-flex">Create</Link>
              <button type="button" onClick={logout} className="hidden rounded-full bg-[var(--slot4-accent)] px-5 py-2.5 text-xs font-black uppercase tracking-[.08em] text-[#08172f] transition hover:bg-white sm:block">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden text-xs font-black uppercase tracking-[.12em] hover:text-[var(--slot4-accent)] sm:block">Log in</Link>
              <Link href="/signup" className="hidden rounded-full border-2 border-white px-7 py-3 text-xs font-black uppercase tracking-[.08em] transition hover:bg-white hover:text-[#7800dd] sm:inline-flex">
                Sign in
              </Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/55 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/15 bg-[#6700c4] px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {session ? <div className="rounded-2xl bg-white/15 px-4 py-3 text-sm font-black">Hi, {session.name}</div> : null}
            {[...navItems, ...(session ? [{ label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign in', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-black uppercase tracking-[.08em]">
                {item.label}
              </Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-2xl bg-[var(--slot4-accent)] px-4 py-3 text-left text-sm font-black uppercase tracking-[.08em] text-[#08172f]">Logout</button> : null}
            <form action="/search" className="mt-2 flex rounded-full bg-white text-[#08172f]">
              <Search className="ml-4 mt-3.5 h-4 w-4 text-[#7c6a99]" />
              <input name="q" type="search" placeholder="Search releases" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm font-bold outline-none" />
            </form>
          </div>
        </div>
      ) : null}
    </header>
  )
}
