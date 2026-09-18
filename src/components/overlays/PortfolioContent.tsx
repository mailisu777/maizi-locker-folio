import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type UIEvent } from 'react'
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

type MediaItem = {
  src: string
  caption: string
  href?: string
  type?: 'VIDEO' | 'IMAGE' | 'PDF'
}

type SectionMedia = Record<string, MediaItem[]>

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

const SECTION_MEDIA: Record<string, SectionMedia> = {
  '谢幺幺爱跳操': {
    账号问题: [
      { src: '/media/portfolio/keep/yyao-douyin.webp', caption: '抖音账号主页｜卡点游戏系列上线后的内容呈现' },
      { src: '/media/portfolio/keep/yyao-xhs.webp', caption: '小红书账号主页｜同一系列在不同平台的分发情况' },
    ],
    我们怎么找方向: [{ src: '/media/portfolio/keep/yyao-research.webp', caption: '前期调研与视频拉片｜从同赛道内容中拆解可复用机制' }],
    我做了什么: [
      { src: '/media/portfolio/keep/yyao-card-01.webp', caption: '第一期封面｜(G)I-DLE 卡点瘦手臂' },
      { src: '/media/portfolio/keep/yyao-card-02.webp', caption: '第二期封面｜NewJeans 卡点瘦腿' },
      { src: '/media/portfolio/keep/yyao-card-03.webp', caption: '第三期封面｜Tomboy 卡点瘦手瘦背' },
    ],
  },
  'K 教｜AI 漫剧 × 消费品': {
    '代表案例｜《金斧头银斧头》': [
      { src: '/media/portfolio/keep/kjiao-video-01.webp', caption: '《金斧头银斧头》关键画面｜消费品直接参与剧情选择' },
      { src: '/media/portfolio/keep/kjiao-video-02.webp', caption: 'K 教 AI 漫剧画面｜保持角色人设与剧情表达一致' },
    ],
    结果: [
      { src: '/media/portfolio/keep/kjiao-comment-01.webp', caption: '评论区反馈｜观众主动讨论剧情与产品植入' },
      { src: '/media/portfolio/keep/kjiao-comment-02.webp', caption: '评论区反馈｜“广告自然”成为高频正向评价' },
    ],
    流程沉淀: [
      { src: '/media/portfolio/keep/kjiao-skill.webp', caption: 'K 教人设 Skill｜固定说话方式、反应链和内容边界' },
      { src: '/media/portfolio/keep/kjiao-sop.webp', caption: 'AI 视频生成 SOP｜人物、场景、分镜与连续性检查流程' },
    ],
  },
  'Keep 官方账号': {
    我参与的内容: [{ src: '/media/portfolio/keep/official-storyboard.webp', caption: '脚本与分镜｜从选题判断到镜头执行的细化方案' }],
    'AI 创意短片': [
      { src: '/media/portfolio/keep/official-video.webp', caption: '官号 AI 创意短片关键画面｜统一人物、场景与品牌视觉' },
      { src: '/media/portfolio/keep/official-comment-01.webp', caption: '发布后评论反馈｜观众对创意形式的直接反应' },
      { src: '/media/portfolio/keep/official-comment-02.webp', caption: '发布后评论反馈｜内容理解与互动情况' },
    ],
  },
  '兔子运动 IP': {
    前期调研: [{ src: '/media/portfolio/keep/rabbit-strategy.webp', caption: '世界观与人设策略｜梳理四个角色的定位与关系' }],
    我的工作: [
      { src: '/media/portfolio/keep/rabbit-turnaround.webp', caption: '兔子角色三视图｜用于稳定身体比例、轮廓与服装结构' },
      { src: '/media/portfolio/keep/rabbit-portrait.webp', caption: '角色面部与形象参考｜用于稳定五官、表情和角色识别' },
    ],
    'AI 生产优化': [{ src: '/media/portfolio/keep/rabbit-scene.webp', caption: '角色场景测试｜分别控制角色参考、空间与光线' }],
    现阶段验证重点: [{ src: '/media/portfolio/keep/rabbit-flow.webp', caption: 'IP 内容生产流程｜从角色设定到内容验证的完整路径' }],
  },
  商业内容制作与交付: {
    工作内容: [{ src: '/media/portfolio/work/sjc.webp', caption: '商业项目现场｜参与策划、拍摄、剪辑、修改与最终交付' }],
  },
  '三创赛｜直播电商运营': {
    项目目标: [{ src: '/media/portfolio/work/sanchuang.webp', caption: '项目整体呈现｜从账号搭建到直播转化的运营实践' }],
    '我的工作 / 职责': [{ src: '/media/portfolio/work/sanchuang-social.webp', caption: '账号内容与直播执行｜短视频、直播脚本及多平台运营' }],
    项目成果: [{ src: '/media/portfolio/work/sanchuang-results.webp', caption: '项目成果｜比赛获奖与内容数据结果' }],
  },
  数字人直播间: {
    项目说明: [{ src: '/media/portfolio/work/digitalhuman.webp', caption: '数字人直播间｜为本土蜂蜜品牌搭建虚拟主播形象与场景' }],
    '我的工作 / 职责': [{ src: '/media/portfolio/work/digitalhuman-backend.webp', caption: '直播后台设置｜数字人系统、语料与互动流程配置' }],
  },
  解困式报道: {
    项目说明: [
      { src: '/media/portfolio/work/solution.webp', caption: '解困式报道项目｜以真实办学困境为内容入口' },
      { src: '/media/portfolio/work/solution-video.webp', caption: '系列纪实短视频｜围绕学校自我解困过程展开叙事' },
    ],
    '我的工作 / 职责': [{ src: '/media/portfolio/work/research.webp', caption: '实地调研与访谈｜为选题库、脚本和内容矩阵提供依据' }],
  },
  '湄洲岛 48 小时青年影像创作营': {
    项目说明: [{ src: '/media/portfolio/work/meizhou.webp', caption: '48 小时成片画面｜在限时与不可补拍条件下完成创作' }],
    '我的工作 / 职责': [{ src: '/media/portfolio/work/meizhou-behind.webp', caption: '创作现场｜导演、策划、摄影与剪辑协同推进' }],
  },
  '《THE NEXT WINTER》定格动画创作': {
    项目说明: [{ src: '/media/portfolio/work/stopmotion.webp', caption: '定格动画成片画面｜一周内独立完成完整作品' }],
    '我的工作 / 职责': [{ src: '/media/portfolio/work/stopmotion-story.webp', caption: '故事与分镜设计｜从原创剧本推进到逐帧拍摄' }],
  },
  '红动粤东·数字人微课': {
    项目说明: [{ src: '/media/portfolio/work/aigc.webp', caption: '数字人微课画面｜用 AIGC 优化持续内容生产' }],
    '我的工作 / 职责': [{ src: '/media/portfolio/work/aigc-program.webp', caption: '节目脚本与制作方案｜数字人表达和内容流程设计' }],
  },
}

const LINK_COVERS: Record<string, string[]> = {
  谢幺幺爱跳操: ['/media/portfolio/keep/yyao-card-01.webp', '/media/portfolio/keep/yyao-card-02.webp', '/media/portfolio/keep/yyao-card-03.webp'],
  'K 教｜AI 漫剧 × 消费品': ['/media/portfolio/keep/kjiao-video-01.webp', '/media/portfolio/keep/kjiao-video-02.webp'],
  'Keep 官方账号': ['/media/portfolio/keep/official-video.webp'],
  商业内容制作与交付: Array(7).fill('/media/portfolio/work/sjc.webp'),
  '三创赛｜直播电商运营': ['/media/portfolio/work/sanchuang-results.webp', '/media/portfolio/work/sanchuang.webp', '/media/portfolio/work/sanchuang-social.webp', '/media/portfolio/work/sanchuang-results.webp'],
  数字人直播间: ['/media/portfolio/work/digitalhuman.webp', '/media/portfolio/work/digitalhuman-backend.webp'],
  解困式报道: ['/media/portfolio/work/solution-video.webp', '/media/portfolio/work/solution.webp', '/media/portfolio/work/research.webp'],
  '湄洲岛 48 小时青年影像创作营': ['/media/portfolio/work/meizhou.webp'],
  '《THE NEXT WINTER》定格动画创作': ['/media/portfolio/work/stopmotion.webp'],
  '红动粤东·数字人微课': ['/media/portfolio/work/aigc.webp', '/media/portfolio/work/aigc-program.webp'],
}

const ABOUT_TABS = ['简介', '实习经历', '项目结果', '做事方式', 'AI 能力', '我的价值']

function Shell({ eyebrow, title, breadcrumb, detail = false, onBack, children }: {
  eyebrow: string
  title: string
  breadcrumb?: string
  detail?: boolean
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
        <div className={`pc__viewport${detail ? ' pc__viewport--detail' : ''}`}>
          <header className={`pc__page-title${title.length > 7 ? ' pc__page-title--compact' : ''}${detail ? ' pc__page-title--detail' : ''}`}>
            <h2>{title}</h2>
            <p>{detail ? '作品展示 / 项目拆解' : '点击文件夹，逐层查看'}</p>
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

function Block({ block, index = 0, onActivate, onToggle, setRef, open }: {
  block: ContentBlock
  index?: number
  onActivate?: (index: number) => void
  onToggle?: (index: number) => void
  setRef?: (node: HTMLDetailsElement | null) => void
  open?: boolean
}) {
  const controlled = typeof open === 'boolean' && Boolean(onToggle)

  return (
    <details
      ref={setRef}
      className="pc__block"
      {...(controlled ? { open } : {})}
    >
      <summary onClick={(event) => {
        onActivate?.(index)
        if (controlled) {
          event.preventDefault()
          onToggle?.(index)
        }
      }}>
        <span>{block.title}</span>
        <span className="pc__summary-plus" aria-hidden="true">+</span>
      </summary>
      <div className="pc__block-body">
        {block.subtitle && <p className="pc__subtitle">{block.subtitle}</p>}
        {block.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {block.bullets && <ul>{block.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
        {block.metrics && <div className="pc__metrics">{block.metrics.map((item) => <div key={item}>{item}</div>)}</div>}
        {block.links && <p className="pc__link-hint">对应作品已显示在左侧，点击作品封面即可查看完整内容。</p>}
        {block.note && <p className="pc__note">{block.note}</p>}
      </div>
    </details>
  )
}

function getLinkMedia(item: CaseItem): MediaItem[] {
  const linkBlock = item.blocks.find((block) => block.links?.length)
  const covers = LINK_COVERS[item.title] ?? []

  return linkBlock?.links?.map((link, index) => {
    const type: NonNullable<MediaItem['type']> = link.href.endsWith('.pdf') ? 'PDF' : /\.(webp|png|jpe?g)$/i.test(link.href) ? 'IMAGE' : 'VIDEO'
    return {
      src: covers[index] ?? covers[0],
      caption: link.label,
      href: link.href,
      type,
    }
  }).filter((media) => media.src) ?? []
}

function getSectionMedia(item: CaseItem, index: number | null): MediaItem[] {
  const sectionMedia = SECTION_MEDIA[item.title] ?? {}
  const linkMedia = getLinkMedia(item)
  if (index === null) return linkMedia.length ? linkMedia : Object.values(sectionMedia)[0] ?? []

  for (let cursor = index; cursor >= 0; cursor -= 1) {
    const block = item.blocks[cursor]
    if (block.links?.length && linkMedia.length) return linkMedia
    const media = sectionMedia[block.title]
    if (media?.length) return media
  }

  return linkMedia.length ? linkMedia : Object.values(sectionMedia)[0] ?? []
}

function MediaShowcase({ items, label }: { items: MediaItem[]; label: string }) {
  const [slide, setSlide] = useState(0)
  const signature = items.map((item) => `${item.src}:${item.href ?? ''}`).join('|')

  useEffect(() => setSlide(0), [signature])

  if (!items.length) {
    return <div className="pc__showcase-empty">该部分暂无可公开素材</div>
  }

  const current = items[Math.min(slide, items.length - 1)]
  const visual = <img key={current.src} src={current.src} alt={current.caption} />

  return (
    <section className="pc__showcase" aria-label={`${label}作品展示`}>
      <div className="pc__showcase-meta">
        <span>{label}</span>
        <b>{String(slide + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</b>
      </div>
      <figure className="pc__showcase-frame">
        {current.href ? (
          <a href={current.href} target="_blank" rel="noreferrer" aria-label={`查看${current.caption}`}>
            {visual}
            <span className="pc__showcase-type">{current.type ?? 'VIDEO'}</span>
            <span className="pc__showcase-play" aria-hidden="true">↗</span>
          </a>
        ) : visual}
        <figcaption>{current.caption}</figcaption>
      </figure>
      {items.length > 1 && (
        <div className="pc__showcase-controls">
          <button type="button" onClick={() => setSlide((slide - 1 + items.length) % items.length)} aria-label="上一张作品">←</button>
          <div className="pc__showcase-dots">
            {items.map((media, index) => (
              <button key={`${media.src}-${index}`} type="button" aria-label={`查看第 ${index + 1} 张作品`} aria-current={slide === index} onClick={() => setSlide(index)} />
            ))}
          </div>
          <button type="button" onClick={() => setSlide((slide + 1) % items.length)} aria-label="下一张作品">→</button>
        </div>
      )}
    </section>
  )
}

function ProjectDetail({ item }: { item: CaseItem }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [openBlocks, setOpenBlocks] = useState<Set<number>>(() => new Set([0]))
  const copyRef = useRef<HTMLDivElement>(null)
  const blockRefs = useRef<Array<HTMLDetailsElement | null>>([])
  const media = getSectionMedia(item, activeIndex)

  function handleToggle(index: number) {
    setOpenBlocks((current) => {
      const next = new Set(current)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  function handleCopyScroll(_event: UIEvent<HTMLDivElement>) {
    const root = copyRef.current
    if (!root) return
    const rootTop = root.getBoundingClientRect().top
    let closest = 0
    let closestDistance = Number.POSITIVE_INFINITY

    blockRefs.current.forEach((node, index) => {
      if (!node) return
      const distance = Math.abs(node.getBoundingClientRect().top - rootTop - 18)
      if (distance < closestDistance) {
        closest = index
        closestDistance = distance
      }
    })
    setActiveIndex(closest)
  }

  return (
    <article className="pc__detail">
      <header className="pc__detail-head">
        <span>{item.no}</span>
        {item.subtitle && <p>{item.subtitle}</p>}
      </header>
      <div className="pc__detail-layout">
        <MediaShowcase items={media} label={activeIndex === null ? '作品展示' : item.blocks[activeIndex].title} />
        <div ref={copyRef} className="pc__detail-copy" onScroll={handleCopyScroll}>
          <div className="pc__accordions">
            {item.blocks.map((block, index) => (
              <Block
                key={block.title}
                block={block}
                index={index}
                onActivate={setActiveIndex}
                onToggle={handleToggle}
                setRef={(node) => { blockRefs.current[index] = node }}
                open={openBlocks.has(index)}
              />
            ))}
          </div>
        </div>
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
      <Shell eyebrow="02 / EXPERIENCE" title={activeFolder.cases[caseIndex].title} breadcrumb={activeFolder.folder} detail onBack={() => setCaseIndex(null)}>
        <ProjectDetail item={activeFolder.cases[caseIndex]} />
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
      <Shell eyebrow="03 / PROJECTS" title={WORK_V4[projectIndex].title} breadcrumb={`PROJECT ${WORK_V4[projectIndex].no}`} detail onBack={() => setProjectIndex(null)}>
        <ProjectDetail item={WORK_V4[projectIndex]} />
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
