import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { NoToneMapping } from 'three'
import { useSceneCapabilities } from '../store'
import CameraRig from './CameraRig'
import { APPROACH_KEYS } from './cameraPath'
import LightsAndShadows from './LightsAndShadows'
import LockerModel from './LockerModel'
import PerformanceGovernor from './PerformanceGovernor'
import DecalField from './DecalField'
import {
  DOOR1_DECALS,
  DOOR2_INNER_DECALS,
  DOOR4_DECALS,
  ID_CARD_HOOK_AT,
} from './decalSpecs'
import { CameraReturn, DoorHotspots, WorldHotspots } from './Hotspots'
import { DOOR_H, DOOR_W } from './lockerSpec'
import { IdCardHookModel } from './PhysicalProps'
import {
  CavityProps,
  DoorFourMountedProps,
  DoorOneMountedProps,
  DoorTwoMountedProps,
  FrontProps,
} from './Props'
import { CAMERA_FAR, CAMERA_FOV, CAMERA_NEAR } from './sceneConfig'
import ZoomControls, { ZoomInput } from './ZoomControls'
import './hero.css'

function DoorTwoInnerContent({ interactive }: { interactive: boolean }) {
  return (
    <group name="Door_02_InteractiveContent">
      <group name="Door_02_IdCardHook" position={[...ID_CARD_HOOK_AT]}>
        <IdCardHookModel />
      </group>
      <Suspense fallback={null}>
        <DecalField
          name="Decals_Door02_Inner"
          specs={DOOR2_INNER_DECALS}
          width={DOOR_W}
          height={DOOR_H}
          interactive={interactive}
        />
      </Suspense>
      <DoorTwoMountedProps />
      <DoorHotspots />
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
              <CavityProps />
            </Suspense>
          }
          doorInnerContent={
            <DoorTwoInnerContent interactive={caps.drag} />
          }
          doorFaceContent={{
            0: (
              <>
                <Suspense fallback={null}>
                  <DecalField
                    name="Decals_Door01_Face"
                    specs={DOOR1_DECALS}
                    width={DOOR_W}
                    height={DOOR_H}
                    interactive={caps.drag}
                  />
                </Suspense>
                <Suspense fallback={null}>
                  <DoorOneMountedProps />
                </Suspense>
              </>
            ),
            3: (
              <>
                <Suspense fallback={null}>
                  <DecalField
                    name="Decals_Door04_Face"
                    specs={DOOR4_DECALS}
                    width={DOOR_W}
                    height={DOOR_H}
                    interactive={caps.drag}
                  />
                </Suspense>
                <Suspense fallback={null}>
                  <DoorFourMountedProps />
                </Suspense>
              </>
            ),
          }}
        />
        <Suspense fallback={null}>
          <FrontProps />
        </Suspense>
        <WorldHotspots />
        <CameraReturn />
      </Canvas>
      <ZoomControls />
      {debugGrid && <div className="hero__calib" aria-hidden />}
    </div>
  )
}
