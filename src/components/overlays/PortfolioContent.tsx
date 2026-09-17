import { useState, type CSSProperties, type ReactNode } from 'react'
import {
  ABOUT_V4,
  CONTACT_V4,
  EXPERIENCE_V4,
  MORE_WORK_V4,
  WORK_V4,
  type CaseItem,
  type ContentBlock,
} from '../../data/portfolioV4'
import { useStore } from '../../store'
import './portfolio-content.css'

type FolderVisual = {
  kicker: string
  title: string
  subtitle: string
  tone: 'violet' | 'amber' | 'smoke'
  images: string[]
}

const KEEP_CASE_MEDIA = [
  ['/media/portfolio/keep/yyao-card-01.webp', '/media/portfolio/keep/yyao-douyin.webp', '/media/portfolio/keep/yyao-xhs.webp', '/media/portfolio/keep/yyao-card-02.webp', '/media/portfolio/keep/yyao-research.webp'],
  ['/media/portfolio/keep/kjiao-video-01.webp', '/media/portfolio/keep/kjiao-video-02.webp', '/media/portfolio/keep/kjiao-comment-01.webp', '/media/portfolio/keep/kjiao-skill.webp', '/media/portfolio/keep/kjiao-sop.webp'],
  ['/media/portfolio/keep/official-video.webp', '/media/portfolio/keep/official-storyboard.webp', '/media/portfolio/keep/official-comment-01.webp', '/media/portfolio/keep/official-comment-02.webp'],
  ['/media/portfolio/keep/rabbit-turnaround.webp', '/media/portfolio/keep/rabbit-portrait.webp', '/media/portfolio/keep/rabbit-scene.webp', '/media/portfolio/keep/rabbit-strategy.webp', '/media/portfolio/keep/rabbit-flow.webp'],
]

const SJC_CASE_MEDIA = [['/media/portfolio/work/sjc.webp']]

const WORK_VISUALS: FolderVisual[] = [
  { kicker: 'PROJECT 01', title: '三创赛', subtitle: '直播电商运营', tone: 'amber', images: ['/media/portfolio/work/sanchuang.webp', '/media/portfolio/work/sanchuang-social.webp', '/media/portfolio/work/sanchuang-results.webp'] },
  { kicker: 'PROJECT 02', title: '数字人直播间', subtitle: '农产品内容营销', tone: 'violet', images: ['/media/portfolio/work/digitalhuman.webp', '/media/portfolio/work/digitalhuman-backend.webp'] },
  { kicker: 'PROJECT 03', title: '解困式报道', subtitle: '纪实内容运营', tone: 'smoke', images: ['/media/portfolio/work/solution.webp', '/media/portfolio/work/solution-video.webp', '/media/portfolio/work/research.webp'] },
  { kicker: 'PROJECT 04', title: '湄洲岛 48H', subtitle: '青年影像创作营', tone: 'amber', images: ['/media/portfolio/work/meizhou.webp', '/media/portfolio/work/meizhou-behind.webp'] },
  { kicker: 'PROJECT 05', title: 'NEXT WINTER', subtitle: '定格动画创作', tone: 'smoke', images: ['/media/portfolio/work/stopmotion.webp', '/media/portfolio/work/stopmotion-story.webp'] },
  { kicker: 'PROJECT 06', title: '红动粤东', subtitle: '数字人微课', tone: 'violet', images: ['/media/portfolio/work/aigc.webp', '/media/portfolio/work/aigc-program.webp'] },
]

const ABOUT_TABS = ['简介', '实习经历', '项目结果', '做事方式', 'AI 能力', '我的价值']

function Shell({ eyebrow, title, breadcrumb, onBack, children }: {
  eyebrow: string
  title: string
  breadcrumb?: string
  onBack?: () => void
  children: ReactNode
}) {
  const closeOverlay = useStore((s) => s.closeOverlay)

  return (
    <div className="ov pc">
      <main className="pc__stage">
        <header className="pc__topbar">
          <div className="pc__topbar-left">
            {onBack && <button className="pc__back" type="button" onClick={onBack}><span>←</span> BACK</button>}
            <span className="pc__eyebrow">{eyebrow}</span>
            {breadcrumb && <span className="pc__crumb">/ {breadcrumb}</span>}
          </div>
          <button className="pc__close" type="button" onClick={closeOverlay} aria-label="关闭">×</button>
        </header>
        <div className="pc__viewport">
          <header className="pc__page-title">
            <h2>{title}</h2>
            <p>点击文件夹，逐层查看</p>
          </header>
          {children}
        </div>
      </main>
    </div>
  )
}

function PreviewStack({ images }: { images: string[] }) {
  return (
    <div className="pc__previews" aria-hidden="true">
      {images.slice(0, 3).map((src, index) => (
        <img key={src} src={src} alt="" style={{ '--preview-index': index } as CSSProperties} />
      ))}
    </div>
  )
}

function FolderCard({ visual, onOpen, index = 0 }: { visual: FolderVisual; onOpen: () => void; index?: number }) {
  return (
    <button
      className={`pc__folder-card pc__folder-card--${visual.tone}`}
      type="button"
      onClick={onOpen}
      style={{ '--card-index': index } as CSSProperties}
    >
      <PreviewStack images={visual.images} />
      <span className="pc__folder-tab" />
      <span className="pc__folder-face">
        <span className="pc__folder-copy">
          <span>{visual.kicker}</span>
          <strong>{visual.title}</strong>
          <small>{visual.subtitle}</small>
        </span>
        <span className="pc__folder-arrow">→</span>
      </span>
    </button>
  )
}

function CaseTile({ item, image, onOpen, index }: { item: CaseItem; image: string; onOpen: () => void; index: number }) {
  return (
    <button className="pc__case-tile" type="button" onClick={onOpen} style={{ '--card-index': index } as CSSProperties}>
      <span className="pc__case-image"><img src={image} alt="" /></span>
      <span className="pc__case-copy">
        <span>{item.no}</span>
        <strong>{item.title}</strong>
        {item.subtitle && <small>{item.subtitle}</small>}
      </span>
      <span className="pc__case-arrow">↗</span>
    </button>
  )
}

function Block({ block, open = false }: { block: ContentBlock; open?: boolean }) {
  return (
    <details className="pc__block" open={open}>
      <summary>
        <span>{block.title}</span>
        <span className="pc__summary-plus" aria-hidden="true">+</span>
      </summary>
      <div className="pc__block-body">
        {block.subtitle && <p className="pc__subtitle">{block.subtitle}</p>}
        {block.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {block.bullets && <ul>{block.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
        {block.metrics && <div className="pc__metrics">{block.metrics.map((item) => <div key={item}>{item}</div>)}</div>}
        {block.links && (
          <div className="pc__links">
            {block.links.map((item) => <a key={item.href + item.label} href={item.href} target="_blank" rel="noreferrer">{item.label}<span>↗</span></a>)}
          </div>
        )}
        {block.note && <p className="pc__note">{block.note}</p>}
      </div>
    </details>
  )
}

function ProjectDetail({ item, images }: { item: CaseItem; images: string[] }) {
  return (
    <article className="pc__detail">
      <header className="pc__detail-head">
        <span>{item.no}</span>
        <h3>{item.title}</h3>
        {item.subtitle && <p>{item.subtitle}</p>}
      </header>
      <div className={`pc__gallery pc__gallery--${Math.min(images.length, 5)}`}>
        {images.map((src, index) => <figure key={src}><img src={src} alt={`${item.title} 项目素材 ${index + 1}`} /></figure>)}
      </div>
      <div className="pc__accordions">
        {item.blocks.map((block, index) => <Block key={block.title} block={block} open={index === 0} />)}
      </div>
    </article>
  )
}

function AboutCopy({ block }: { block: ContentBlock }) {
  return <>{block.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</>
}

export function AboutV4() {
  const [tab, setTab] = useState(0)
  const [intro, sjc, keep, project, method, ai, value] = ABOUT_V4
  const tabBlocks = [intro, keep, project, method, ai, value]
  const active = tabBlocks[tab]

  return (
    <Shell eyebrow="01 / PROFILE" title="ABOUT">
      <div className="pc__about">
        <aside className="pc__about-card">
          <img src="/media/portfolio/work/about.webp" alt="黎悦悦" />
          <div><span>LI YUEYUE · 2027</span><h3>内容策划<br />× 社媒运营<br />× AI 内容生产</h3></div>
        </aside>
        <section className="pc__about-panel">
          <div className="pc__tabs" role="tablist" aria-label="个人简介内容">
            {ABOUT_TABS.map((label, index) => <button key={label} type="button" role="tab" aria-selected={tab === index} onClick={() => setTab(index)}>{label}</button>)}
          </div>
          <div className="pc__tab-content" key={active.title}>
            <span>0{tab + 1}</span>
            <h3>{active.title}</h3>
            {active.subtitle && <p className="pc__subtitle">{active.subtitle}</p>}
            <AboutCopy block={active} />
            {tab === 1 && <div className="pc__mini-card"><strong>{sjc.title}</strong><AboutCopy block={sjc} /></div>}
          </div>
        </section>
      </div>
    </Shell>
  )
}

export function ExperienceV4() {
  const [folderIndex, setFolderIndex] = useState<number | null>(null)
  const [caseIndex, setCaseIndex] = useState<number | null>(null)
  const activeFolder = folderIndex === null ? null : EXPERIENCE_V4[folderIndex]
  const media = folderIndex === 0 ? KEEP_CASE_MEDIA : SJC_CASE_MEDIA

  if (activeFolder && caseIndex !== null) {
    return (
      <Shell eyebrow="02 / EXPERIENCE" title={activeFolder.cases[caseIndex].title} breadcrumb={activeFolder.folder} onBack={() => setCaseIndex(null)}>
        <ProjectDetail item={activeFolder.cases[caseIndex]} images={media[caseIndex] ?? media[0]} />
      </Shell>
    )
  }

  if (activeFolder) {
    return (
      <Shell eyebrow="02 / EXPERIENCE" title={folderIndex === 0 ? 'KEEP CASES' : 'SJC CASES'} breadcrumb={activeFolder.folder} onBack={() => setFolderIndex(null)}>
        <p className="pc__lead">{activeFolder.intro}</p>
        <div className="pc__case-grid">
          {activeFolder.cases.map((item, index) => <CaseTile key={item.no + item.title} item={item} image={(media[index] ?? media[0])[0]} index={index} onOpen={() => setCaseIndex(index)} />)}
        </div>
      </Shell>
    )
  }

  const experienceVisuals: FolderVisual[] = EXPERIENCE_V4.map((folder, index) => ({
    kicker: folder.folder,
    title: index === 0 ? 'KEEP' : 'SJC',
    subtitle: index === 0 ? 'IP 内容运营 · AI 编导' : '商业内容制作 · 项目交付',
    tone: index === 0 ? 'violet' : 'amber',
    images: index === 0 ? KEEP_CASE_MEDIA.map((item) => item[0]) : SJC_CASE_MEDIA[0],
  }))

  return (
    <Shell eyebrow="02 / EXPERIENCE" title="EXPERIENCE">
      <div className="pc__folder-grid pc__folder-grid--experience">
        {experienceVisuals.map((visual, index) => <FolderCard key={visual.title} visual={visual} index={index} onOpen={() => setFolderIndex(index)} />)}
      </div>
    </Shell>
  )
}

export function WorkV4() {
  const [projectIndex, setProjectIndex] = useState<number | null>(null)

  if (projectIndex !== null) {
    return (
      <Shell eyebrow="03 / PROJECTS" title={WORK_V4[projectIndex].title} breadcrumb={`PROJECT ${WORK_V4[projectIndex].no}`} onBack={() => setProjectIndex(null)}>
        <ProjectDetail item={WORK_V4[projectIndex]} images={WORK_VISUALS[projectIndex].images} />
      </Shell>
    )
  }

  return (
    <Shell eyebrow="03 / PROJECTS" title="WORK">
      <p className="pc__lead">六个项目，点击文件夹进入。每个项目的素材、过程与结果分层展开。</p>
      <div className="pc__folder-grid">
        {WORK_VISUALS.map((visual, index) => <FolderCard key={visual.title} visual={visual} index={index} onOpen={() => setProjectIndex(index)} />)}
      </div>
      <details className="pc__more-work">
        <summary><img src="/media/portfolio/work/more.webp" alt="更多项目" /><span><small>MORE WORK</small><strong>校园媒体、纪录片与创意探索</strong></span><b>+</b></summary>
        <div>{MORE_WORK_V4.map((block) => <Block key={block.title} block={block} />)}</div>
      </details>
    </Shell>
  )
}

export function ContactV4() {
  const closeOverlay = useStore((s) => s.closeOverlay)
  return (
    <Shell eyebrow="05 / CONTACT" title="CONTACT">
      <div className="pc__contact-card">
        <span>LET'S MAKE SOMETHING TOGETHER</span>
        <h3>{CONTACT_V4.title}</h3>
        <a href={`mailto:${CONTACT_V4.email}`}>{CONTACT_V4.email}<b>↗</b></a>
        <p>{CONTACT_V4.footer}</p>
        <button type="button" onClick={closeOverlay}>BACK TO LOCKER</button>
      </div>
    </Shell>
  )
}
