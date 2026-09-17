import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { NoToneMapping } from 'three'
import { useSceneCapabilities } from '../store'
import CameraRig from './CameraRig'
import { APPROACH_KEYS } from './cameraPath'
import LightsAndShadows from './LightsAndShadows'
import LockerModel from './LockerModel'
import PerformanceGovernor from './PerformanceGovernor'
import { CameraReturn } from './Hotspots'
import { CustomCavityProps, CustomDoorProps } from './CustomPortfolioProps'
import { CAMERA_FAR, CAMERA_FOV, CAMERA_NEAR } from './sceneConfig'
import ZoomControls, { ZoomInput } from './ZoomControls'
import './hero.css'

/**
 * 黎悦悦作品集第一版：完整保留原仓库的柜体、镜头、开门和缩放系统，
 * 只把开柜后的物件层替换成与内容方向相关的四个 3D 入口。
 */
function DoorTwoInnerContent() {
  return (
    <group name="Door_02_YueyueContent">
      <CustomDoorProps />
    </group>
  )
}

export default function HeroSceneCanvas() {
  const caps = useSceneCapabilities()
  const query = new URLSearchParams(location.search)
  const debugGrid = import.meta.env.DEV && query.get('grid') === '1'

  return (
    <div className="hero">
      <Canvas
        className="hero__canvas"
        frameloop={caps.animating ? 'always' : 'demand'}
        shadows
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: NoToneMapping,
        }}
        camera={{
          fov: CAMERA_FOV,
          near: CAMERA_NEAR,
          far: CAMERA_FAR,
          position: [...APPROACH_KEYS[0].pos],
        }}
      >
        <PerformanceGovernor animating={caps.animating} />
        <CameraRig />
        <ZoomInput />
        <LightsAndShadows dynamic={caps.animating} />

        <LockerModel
          cavityContent={
            <Suspense fallback={null}>
              <CustomCavityProps />
            </Suspense>
          }
          doorInnerContent={<DoorTwoInnerContent />}
          doorFaceContent={{}}
        />

        <CameraReturn />
      </Canvas>
      <ZoomControls />
      {debugGrid && <div className="hero__calib" aria-hidden />}
    </div>
  )
}
