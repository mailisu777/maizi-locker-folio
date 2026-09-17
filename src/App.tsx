import { lazy, Suspense, useEffect } from 'react'
import Credit from './components/Credit'
import Loader from './components/Loader'
import Reveal from './components/Reveal'
import Nav from './components/Nav'
import OverlayHost from './components/overlays/OverlayHost'
import { StaticFallback, useCapabilities } from './components/fallback'
import ExperienceOrchestrator from './experience/ExperienceOrchestrator'
import { useStore } from './store'

const heroChunk = () => import('./scene/HeroSceneCanvas')
const HeroSceneCanvas = lazy(heroChunk)
void heroChunk()

export default function App() {
  const phase = useStore((s) => s.phase)
  const send = useStore((s) => s.send)
  const overlay = useStore((s) => s.overlay)
  const openOverlay = useStore((s) => s.openOverlay)
  const caps = useCapabilities()
  const showScene = phase !== 'loading'

  useEffect(() => {
    if (!caps.shouldFallback) return
    useStore.getState().setPhase('scene')
  }, [caps.shouldFallback])

  useEffect(() => {
    if (!import.meta.env.DEV) return
    const q = new URLSearchParams(location.search)
    const v = q.get('v')
    if (!v) return
    const st = useStore.getState()
    st.setPhase('scene')
    st.openOverlay(v as never)
    const w = q.get('w')
    if (w) setTimeout(() => useStore.getState().setWorkView(w as never), 60)
  }, [])

  if (caps.shouldFallback) {
    return (
      <div className="stage">
        <div className="hero-title" aria-hidden="true">PORTFOLIO</div>
        <StaticFallback
          reason={caps.reason}
          activeId={overlay}
          onSelect={(id) => openOverlay(id)}
        />
        <Credit />
        <OverlayHost />
      </div>
    )
  }

  return (
    <div className="stage">
      <ExperienceOrchestrator />
      {showScene && (
        <Suspense fallback={null}>
          <HeroSceneCanvas />
        </Suspense>
      )}

      {phase === 'scene' && <div className="hero-title" aria-hidden="true">PORTFOLIO</div>}
      {phase === 'scene' && <Nav />}
      {phase === 'scene' && <Credit />}

      <OverlayHost />

      {phase === 'loading' && <Loader onReady={() => send({ type: 'ASSETS_READY' })} />}
      {phase === 'reveal' && <Reveal onDone={() => send({ type: 'REVEAL_DONE' })} />}
    </div>
  )
}
