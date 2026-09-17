/* ============================================================================
 * 场景材质
 * ========================================================================== */

export const PALETTE = {
  /** 门面：更清透的浅蓝白 */
  door: '#e8f2fb',
  /** 门内侧：比外侧再亮一点 */
  doorInner: '#f1f7fc',
  /** 柜壳与立柱：提亮、减少灰感 */
  frame: '#bfd8ee',
  /** 顶盖：受光最足 */
  cap: '#d9eaf7',
  /** 底座 */
  plinth: '#c8def0',
  /** 柜腔内壁：保留层次，但整体更明亮 */
  cavity: '#7ea9cf',
  /** 柜腔后壁更亮一档 */
  cavityBack: '#9bc0de',
  /** 隔板 */
  shelf: '#c5dced',
  /** 把手底板 */
  handlePlate: '#aebfcb',
  /** 把手蓝色嵌条 */
  handleGrip: '#86b6d8',
  /** 通风槽底衬 */
  ventBack: '#98afc3',
} as const

/** 柜体烤漆的通用参数 */
export const PAINT = { roughness: 0.52, metalness: 0.08 } as const
/** 柜腔内壁：更哑，避免内部出现不该有的反光 */
export const MATTE = { roughness: 0.82, metalness: 0.02 } as const
/** 把手：金属感稍强 */
export const METAL = { roughness: 0.36, metalness: 0.42 } as const
