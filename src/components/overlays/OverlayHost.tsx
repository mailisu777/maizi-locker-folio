import { useCallback, useEffect, useRef, type MouseEvent, type PointerEvent } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useStore, type Overlay } from '../../store'
import { captureOpener, resolveRestoreTarget } from './overlayFocus'
import { useDialog } from './useDialog'
import { OVERLAY_EXIT_MS, useOnOverlayUnmounted, useOverlayLifecycle } from './useOverlayLifecycle'
import { AboutV4, ContactV4, ExperienceV4, WorkV4 } from './PortfolioContent'
import './overlay.css'

const BODIES = {
  about: AboutV4,
  skills: ExperienceV4,
  work: WorkV4,
  contact: ContactV4,
} as const

const TITLES = {
  about: 'ABOUT 个人简介',
  skills: 'EXPERIENCE 实习经历',
  work: 'WORK 项目作品',
  contact: 'CONTACT 联系方式',
} as const

const TITLE_ID = 'overlay-title'
const SCRIM_CLASSES = ['ov', 'idc', 'sk', 'pc']

function isScrim(target: EventTarget | null): boolean {
  return target instanceof HTMLElement && SCRIM_CLASSES.some((c) => target.classList.contains(c))
}

function readOverlaySource(): 'hotspot' | 'nav' | null {
  const s = useStore.getState() as { scene?: { source?: 'hotspot' | 'nav' | null } }
  return s.scene?.source ?? null
}

export default function OverlayHost() {
  const overlay = useStore((s) => s.overlay)
  const workView = useStore((s) => s.workView)
  const reduced = useReducedMotion()
  const { active, phase } = useOverlayLifecycle(overlay, reduced)
  const dialogRef = useRef<HTMLDivElement>(null)
  const sourceRef = useRef<HTMLElement | null>(null)
  const kindRef = useRef<'hotspot' | 'nav' | null>(null)
  const lastIdRef = useRef<Exclude<Overlay, null>>('about')

  useEffect(() => {
    if (!overlay) return
    sourceRef.current = captureOpener()
    kindRef.current = readOverlaySource()
  }, [overlay])

  useEffect(() => {
    if (active) lastIdRef.current = active
  }, [active])

  useOnOverlayUnmounted(active, () => {
    const source = sourceRef.current
    const kind = kindRef.current
    sourceRef.current = null
    kindRef.current = null
    const cur = document.activeElement
    if (cur && cur !== document.body && cur !== document.documentElement) return
    resolveRestoreTarget(lastIdRef.current, source, kind)?.focus({ preventScroll: true })
  })

  const downOnScrim = useRef(false)
  const onScrimDown = useCallback((e: PointerEvent) => {
    downOnScrim.current = isScrim(e.target)
  }, [])

  const onScrimClick = useCallback((e: MouseEvent) => {
    if (!downOnScrim.current || !isScrim(e.target)) return
    downOnScrim.current = false
    const st = useStore.getState()
    if (st.workView) return
    st.closeOverlay()
  }, [])

  const onEscape = useCallback(() => {
    const st = useStore.getState()
    if (st.workView) st.setWorkView(null)
    else st.closeOverlay()
  }, [])

  useDialog({
    ref: dialogRef,
    active: !!active,
    focusKey: active && phase !== 'opening' ? `${active}:${workView ?? ''}` : null,
    onEscape,
  })

  if (!active) return null
  const Body = BODIES[active]

  return (
    <div
      className="ovh"
      data-phase={phase}
      data-overlay={active}
      style={{ ['--ovh-exit' as string]: `${reduced ? 0 : OVERLAY_EXIT_MS}ms` }}
    >
      <div
        ref={dialogRef}
        className="ovh__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={TITLE_ID}
        tabIndex={-1}
        onPointerDown={onScrimDown}
        onClick={onScrimClick}
      >
        <h2 id={TITLE_ID} className="ovh__title">{TITLES[active]}</h2>
        <Body />
      </div>
    </div>
  )
}
