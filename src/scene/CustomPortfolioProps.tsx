import { RoundedBox } from '@react-three/drei'
import { useMemo } from 'react'
import { CanvasTexture, SRGBColorSpace } from 'three'
import { activateHotspot } from './hotspotActions'

const SHADOWS = { castShadow: true, receiveShadow: true } as const

function useLabelTexture(lines: string[], bg = '#f7f6f2', fg = '#171717', accent = '#8964E8') {
  return useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 768
    canvas.height = 512
    const ctx = canvas.getContext('2d')!
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = accent
    ctx.fillRect(0, 0, 24, canvas.height)
    ctx.fillStyle = fg
    ctx.textBaseline = 'middle'
    ctx.font = '900 74px Arial, sans-serif'
    lines.forEach((line, i) => ctx.fillText(line, 72, 150 + i * 96))
    const tex = new CanvasTexture(canvas)
    tex.colorSpace = SRGBColorSpace
    tex.anisotropy = 4
    return tex
  }, [lines, bg, fg, accent])
}

function Interactive({ id, children }: { id: 'about' | 'skills' | 'work' | 'contact'; children: React.ReactNode }) {
  return (
    <group
      onClick={(e) => {
        e.stopPropagation()
        activateHotspot(id)
      }}
      onPointerOver={(e) => {
        e.stopPropagation()
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'default'
      }}
    >
      {children}
    </group>
  )
}

function CameraModel() {
  const about = useLabelTexture(['ABOUT', 'YUEYUE'], '#efece7')
  return (
    <Interactive id="about">
      <group position={[-0.55, 1.98, 0.08]} rotation={[0, 0.12, -0.03]}>
        <RoundedBox {...SHADOWS} args={[0.72, 0.46, 0.25]} radius={0.06} smoothness={3}>
          <meshStandardMaterial color="#1b1b1d" roughness={0.58} />
        </RoundedBox>
        <RoundedBox {...SHADOWS} args={[0.26, 0.1, 0.22]} radius={0.025} position={[-0.15, 0.25, -0.005]}>
          <meshStandardMaterial color="#252529" roughness={0.55} />
        </RoundedBox>
        <mesh {...SHADOWS} position={[0.08, 0.01, 0.205]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.18, 0.22, 0.22, 42]} />
          <meshStandardMaterial color="#111114" roughness={0.28} metalness={0.35} />
        </mesh>
        <mesh position={[0.08, 0.01, 0.325]}>
          <circleGeometry args={[0.12, 42]} />
          <meshStandardMaterial color="#56616e" roughness={0.18} metalness={0.2} />
        </mesh>
        <mesh position={[-0.17, -0.07, 0.131]}>
          <planeGeometry args={[0.25, 0.16]} />
          <meshStandardMaterial map={about} roughness={0.92} />
        </mesh>
      </group>
    </Interactive>
  )
}

function AiCubeModel() {
  const ai = useLabelTexture(['AI', 'CONTENT'], '#111111', '#ffffff', '#8964E8')
  return (
    <Interactive id="skills">
      <group position={[-0.54, 1.25, 0.08]} rotation={[0.08, -0.32, 0.08]}>
        <RoundedBox {...SHADOWS} args={[0.58, 0.58, 0.58]} radius={0.08} smoothness={4}>
          <meshStandardMaterial color="#151515" roughness={0.45} metalness={0.1} />
        </RoundedBox>
        <mesh position={[0, 0, 0.296]}>
          <planeGeometry args={[0.45, 0.45]} />
          <meshStandardMaterial map={ai} roughness={0.8} />
        </mesh>
        <RoundedBox args={[0.14, 0.14, 0.04]} radius={0.03} position={[0.23, 0.23, 0.31]}>
          <meshStandardMaterial color="#8964E8" emissive="#2a174b" />
        </RoundedBox>
      </group>
    </Interactive>
  )
}

function KeepMarkModel() {
  const keep = useLabelTexture(['KEEP', 'WORKS'], '#f0eee8', '#111111', '#8964E8')
  return (
    <Interactive id="work">
      <group position={[-0.5, 0.55, 0.12]} rotation={[0.04, 0.18, -0.035]}>
        <RoundedBox {...SHADOWS} args={[0.78, 0.5, 0.16]} radius={0.08} smoothness={4}>
          <meshStandardMaterial color="#f2efe8" roughness={0.76} />
        </RoundedBox>
        <mesh position={[0, 0, 0.084]}>
          <planeGeometry args={[0.64, 0.37]} />
          <meshStandardMaterial map={keep} roughness={0.9} />
        </mesh>
        <group position={[0.28, -0.12, 0.16]} rotation={[0, 0, -0.22]}>
          <RoundedBox {...SHADOWS} args={[0.3, 0.09, 0.09]} radius={0.03}>
            <meshStandardMaterial color="#111111" roughness={0.48} />
          </RoundedBox>
          <RoundedBox {...SHADOWS} args={[0.16, 0.09, 0.09]} radius={0.03} position={[0.13, 0.1, 0]} rotation={[0, 0, 0.65]}>
            <meshStandardMaterial color="#8964E8" roughness={0.48} />
          </RoundedBox>
        </group>
      </group>
    </Interactive>
  )
}

function PhoneModel() {
  const screen = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 600
    canvas.height = 1100
    const ctx = canvas.getContext('2d')!
    ctx.fillStyle = '#f7f7f5'
    ctx.fillRect(0, 0, 600, 1100)
    ctx.fillStyle = '#111'
    ctx.font = '800 42px Arial'
    ctx.fillText('SOCIAL / YUEYUE', 48, 95)
    ctx.fillStyle = '#8964E8'
    ctx.beginPath(); ctx.arc(78, 180, 30, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = '#222'; ctx.font = '700 28px Arial'; ctx.fillText('AI CONTENT & SOCIAL', 130, 188)
    ctx.fillStyle = '#d9d7d2'; ctx.fillRect(48, 250, 504, 500)
    ctx.fillStyle = '#111'; ctx.font = '900 64px Arial'; ctx.fillText('KEEP', 88, 500)
    ctx.fillStyle = '#8964E8'; ctx.fillRect(48, 785, 160, 18)
    ctx.fillStyle = '#999'; ctx.fillRect(48, 840, 430, 15); ctx.fillRect(48, 880, 360, 15)
    const tex = new CanvasTexture(canvas)
    tex.colorSpace = SRGBColorSpace
    return tex
  }, [])

  return (
    <Interactive id="contact">
      <group position={[0.62, 1.08, 0.42]} rotation={[0.02, -0.12, 0.08]}>
        <RoundedBox {...SHADOWS} args={[0.47, 0.9, 0.075]} radius={0.07} smoothness={5}>
          <meshStandardMaterial color="#151515" roughness={0.44} />
        </RoundedBox>
        <mesh position={[0, 0, 0.04]}>
          <planeGeometry args={[0.4, 0.79]} />
          <meshStandardMaterial map={screen} roughness={0.9} />
        </mesh>
        <RoundedBox args={[0.15, 0.026, 0.01]} radius={0.012} position={[0, 0.405, 0.047]}>
          <meshStandardMaterial color="#111" />
        </RoundedBox>
      </group>
    </Interactive>
  )
}

export function CustomCavityProps() {
  return (
    <>
      <CameraModel />
      <AiCubeModel />
      <KeepMarkModel />
    </>
  )
}

export function CustomDoorProps() {
  return <PhoneModel />
}
