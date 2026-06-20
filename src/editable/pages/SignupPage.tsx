import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#fff8ea] text-[#08172f]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div className="flex flex-col justify-center rounded-[1.7rem] bg-white p-7 shadow-[0_24px_80px_rgba(61,24,112,0.10)] sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6d00df]">Create account</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-.04em]">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 border-t border-[#ded4f1] pt-5 text-sm text-[#465166]">Already have an account? <Link href="/login" className="font-black text-[#6d00df] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="astra-gradient relative flex flex-col justify-center overflow-hidden rounded-[1.7rem] p-8 text-white shadow-[0_24px_80px_rgba(61,24,112,0.16)] sm:p-12 lg:p-16">
            <span className="hero-mark" aria-hidden="true" />
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.auth.signup.badge}</p>
              <h2 className="mt-5 max-w-xl text-5xl font-black leading-tight tracking-[-0.045em] sm:text-7xl">{pagesContent.auth.signup.title}</h2>
              <p className="mt-6 max-w-lg text-sm font-medium leading-8 text-white/78">{pagesContent.auth.signup.description}</p>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
