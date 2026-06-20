import Link from 'next/link'
import { ArrowRight, Clock3, Megaphone, Newspaper } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'

export function getEditablePostImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const images = Array.isArray(content.images) ? content.images : []
  const contentImage = images.find((value): value is string => typeof value === 'string' && Boolean(value))
  const directImage = ['featuredImage', 'image', 'thumbnail', 'coverImage', 'logo']
    .map((key) => content[key])
    .find((value): value is string => typeof value === 'string' && Boolean(value))
  return mediaUrl || directImage || contentImage || '/placeholder.svg?height=900&width=1400'
}

export function getEditableExcerpt(post?: SitePost | null, limit = 150) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    (typeof content.body === 'string' && content.body) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean || 'A concise update prepared for readers who want the important details quickly.'
}

export function getEditableCategory(post?: SitePost | null) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  return (typeof content.category === 'string' && content.category) || post?.tags?.[0] || 'Media update'
}

export function postHref(task: TaskKey, post: SitePost, route = `/${task}`) {
  return `${route}/${post.slug}`
}

export function EditorialFeatureCard({ post, href, label = 'Featured release' }: { post: SitePost; href: string; label?: string }) {
  return (
    <Link href={href} className="group block min-w-0 overflow-hidden rounded-[1.6rem] bg-white shadow-[0_28px_80px_rgba(70,0,160,0.20)]">
      <div className="relative aspect-[16/10] min-h-[420px] overflow-hidden">
        <img src={getEditablePostImage(post)} alt={post.title || label} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,0,51,.06),rgba(16,0,51,.86))]" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
          <span className="inline-flex rounded-full bg-[var(--slot4-accent)] px-4 py-2 text-[10px] font-black uppercase tracking-[.18em] text-[#08172f]">{label}</span>
          <h3 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-.04em] sm:text-6xl">{post.title}</h3>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/82 sm:text-base">{getEditableExcerpt(post, 190)}</p>
        </div>
      </div>
    </Link>
  )
}

export function RailPostCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const style = index % 3
  if (style === 1) {
    return (
      <Link href={href} className={`group ${dc.layout.minRailCard} block overflow-hidden rounded-[1.5rem] bg-[#100033] p-5 text-white ${dc.motion.lift}`}>
        <p className="text-[10px] font-black uppercase tracking-[.2em] text-[var(--slot4-accent)]">Release {String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-6 line-clamp-4 text-2xl font-black leading-tight tracking-[-.04em]">{post.title}</h3>
        <p className="mt-5 line-clamp-4 text-sm leading-7 text-white/68">{getEditableExcerpt(post, 130)}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.12em]">Read <ArrowRight className="h-4 w-4" /></span>
      </Link>
    )
  }

  if (style === 2) {
    return (
      <Link href={href} className={`group ${dc.layout.minRailCard} grid overflow-hidden rounded-[1.5rem] border border-[#ded4f1] bg-white shadow-sm ${dc.motion.lift}`}>
        <div className="p-5">
          <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.18em] text-[#6d00df]"><Clock3 className="h-3 w-3" /> {getEditableCategory(post)}</p>
          <h3 className="mt-3 line-clamp-3 text-xl font-black leading-tight tracking-[-.035em]">{post.title}</h3>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden bg-[var(--slot4-media-bg)]">
          <img src={getEditablePostImage(post)} alt={post.title || ''} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </div>
      </Link>
    )
  }

  return (
    <Link href={href} className={`group ${dc.layout.minRailCard} block overflow-hidden rounded-[1.5rem] border border-[#ded4f1] bg-white shadow-sm ${dc.motion.lift}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title || ''} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-[10px] font-black uppercase tracking-[.14em] text-[#6d00df]">{getEditableCategory(post)}</span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[.18em] text-[#8d00e6]">
          <span>Newswire</span><span>{String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3 className="mt-3 line-clamp-3 text-xl font-black leading-tight tracking-[-.035em]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function CompactIndexCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-0 grid-cols-[52px_1fr] gap-4 rounded-2xl px-3 py-4 transition hover:bg-white/12">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--slot4-accent)] text-sm font-black leading-none text-[#08172f]">{String(index + 1).padStart(2, '0')}</span>
      <div className="min-w-0">
        <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.18em] text-current/55"><Newspaper className="h-3 w-3" /> {getEditableCategory(post)}</p>
        <h3 className="mt-2 line-clamp-3 text-base font-black leading-tight tracking-[-.025em] group-hover:text-[var(--slot4-accent)]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function ArticleListCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const horizontal = index % 2 === 0
  return (
    <Link href={href} className={`group grid min-w-0 overflow-hidden rounded-[1.6rem] border border-[#ded4f1] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(70,0,160,0.14)] ${horizontal ? 'sm:grid-cols-[280px_minmax(0,1fr)]' : ''}`}>
      <div className={`relative overflow-hidden bg-[var(--slot4-media-bg)] ${horizontal ? 'aspect-[16/12] sm:aspect-auto' : 'aspect-[16/9]'}`}>
        <img src={getEditablePostImage(post)} alt={post.title || ''} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="min-w-0 p-6">
        <p className="inline-flex items-center gap-2 rounded-full bg-[#f1e8ff] px-3 py-1 text-[10px] font-black uppercase tracking-[.16em] text-[#6d00df]"><Megaphone className="h-3 w-3" /> {String(index + 1).padStart(2, '0')} / {getEditableCategory(post)}</p>
        <h2 className="mt-4 line-clamp-3 text-2xl font-black leading-tight tracking-[-.04em] group-hover:text-[#6d00df] sm:text-3xl">{post.title}</h2>
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#465166]">{getEditableExcerpt(post, 190)}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.14em] text-[#6d00df]">Read update <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}
