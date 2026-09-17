import type { ReactNode } from 'react'
import { ABOUT_V4, CONTACT_V4, EXPERIENCE_V4, MORE_WORK_V4, WORK_V4, type ContentBlock } from '../../data/portfolioV4'
import { useStore } from '../../store'
import './portfolio-content.css'

function Block({ block }: { block: ContentBlock }) {
  return (
    <section className="pc__block">
      <div className="pc__block-head">
        <h3>{block.title}</h3>
        {block.subtitle && <p className="pc__subtitle">{block.subtitle}</p>}
      </div>
      {block.paragraphs?.map((p) => <p key={p}>{p}</p>)}
      {block.bullets && (
        <ul>
          {block.bullets.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}
      {block.metrics && (
        <div className="pc__metrics">
          {block.metrics.map((item) => <div key={item} className="pc__metric">{item}</div>)}
        </div>
      )}
      {block.links && (
        <div className="pc__links">
          {block.links.map((item) => (
            <a key={item.href + item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {item.label}<span aria-hidden="true"> ↗</span>
            </a>
          ))}
        </div>
      )}
      {block.note && <p className="pc__note">{block.note}</p>}
    </section>
  )
}

function Shell({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <div className="ov pc">
      <div className="pc__sheet">
        <header className="pc__hero">
          <span>{eyebrow}</span>
          <h2>{title}</h2>
        </header>
        {children}
      </div>
    </div>
  )
}

export function AboutV4() {
  return (
    <Shell eyebrow="01 / PROFILE" title="ABOUT">
      <div className="pc__stack">
        {ABOUT_V4.map((block) => <Block key={block.title} block={block} />)}
      </div>
    </Shell>
  )
}

export function ExperienceV4() {
  return (
    <Shell eyebrow="02 / EXPERIENCE" title="EXPERIENCE">
      <div className="pc__stack">
        {EXPERIENCE_V4.map((folder) => (
          <section key={folder.folder} className="pc__folder">
            <div className="pc__folder-head">
              <p className="pc__folder-no">{folder.folder}</p>
              <h3>{folder.role}</h3>
              <p>{folder.intro}</p>
            </div>
            {folder.cases.map((item) => (
              <article key={item.no + item.title} className="pc__case">
                <div className="pc__case-head">
                  <span>{item.no}</span>
                  <h4>{item.title}</h4>
                  {item.subtitle && <p>{item.subtitle}</p>}
                </div>
                {item.blocks.map((block) => <Block key={block.title} block={block} />)}
              </article>
            ))}
          </section>
        ))}
      </div>
    </Shell>
  )
}

export function WorkV4() {
  return (
    <Shell eyebrow="03 / PROJECTS" title="WORK">
      <p className="pc__intro">聚焦内容策划、平台运营与创作实践，记录我在直播电商、纪实影像、AIGC 探索与商业项目中不断把想法落地的过程。</p>
      <div className="pc__stack">
        {WORK_V4.map((item) => (
          <article key={item.no} className="pc__case pc__case--work">
            <div className="pc__case-head">
              <span>{item.no}</span>
              <h4>{item.title}</h4>
              {item.subtitle && <p>{item.subtitle}</p>}
            </div>
            {item.blocks.map((block) => <Block key={block.title} block={block} />)}
          </article>
        ))}
        <section className="pc__more">
          {MORE_WORK_V4.map((block) => <Block key={block.title} block={block} />)}
        </section>
      </div>
    </Shell>
  )
}

export function ContactV4() {
  const closeOverlay = useStore((s) => s.closeOverlay)
  return (
    <Shell eyebrow="05 / CONTACT" title="CONTACT">
      <div className="pc__contact">
        <h3>{CONTACT_V4.title}</h3>
        <a className="pc__mail" href={`mailto:${CONTACT_V4.email}`}>{CONTACT_V4.email}</a>
        <p>{CONTACT_V4.footer}</p>
        <button type="button" onClick={closeOverlay}>BACK TO LOCKER</button>
      </div>
    </Shell>
  )
}
