import { useEffect, useId, useRef, useState } from 'react'
import { NAV_V4 } from '../data/navV4'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useStore, type Overlay } from '../store'
import './nav.css'

const COMPACT_QUERY = '(max-width: 640px)'

export default function Nav() {
  const overlay = useStore((s) => s.overlay)
  const openOverlay = useStore((s) => s.openOverlay)
  const compact = useMediaQuery(COMPACT_QUERY)
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()

  const [prevCompact, setPrevCompact] = useState(compact)
  if (prevCompact !== compact) {
    setPrevCompact(compact)
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current?.contains(e.target as Node)) return
      setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  const collapsed = compact && !open

  return (
    <nav className="nav" aria-label="主导航" ref={rootRef} data-compact={compact || undefined}>
      {compact && (
        <button
          ref={toggleRef}
          type="button"
          className="nav__item nav__toggle u-tap-target"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__label">{open ? 'CLOSE' : 'MENU'}</span>
          <span className="nav__caret" aria-hidden="true" />
          <span className="nav__rule" />
        </button>
      )}

      <ul className="nav__list" id={menuId} hidden={collapsed}>
        {NAV_V4.map((n) => {
          const hasHref = 'href' in n
          const active = !hasHref && overlay === n.id
          return (
            <li className="nav__cell" key={n.id}>
              {hasHref ? (
                <a className="nav__item u-tap-target" href={n.href} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                  <span className="nav__label">{n.label}</span>
                  <span className="nav__rule" />
                </a>
              ) : (
                <button
                  type="button"
                  className="nav__item u-tap-target"
                  data-active={active}
                  aria-current={active ? 'true' : undefined}
                  onClick={() => {
                    openOverlay(n.id as Overlay)
                    setOpen(false)
                  }}
                >
                  <span className="nav__label">{n.label}</span>
                  <span className="nav__rule" />
                </button>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
