export const SITE = {
  owner: '黎悦悦',
  tagline: "YUEYUE — PORTFOLIO '26",
  year: '2026',
}

export const CREDIT = {
  author: 'momo',
  platform: '小红书',
  originUrl:
    'https://www.xiaohongshu.com/discovery/item/6a852ae7000000002500b24e?xsec_token=ABxWdb99F51QhPGOvNNuLGxYSbTeGIKFnMDujjIeP1Kr8=',
  repoUrl: 'https://github.com/mailisu777/maizi-locker-folio',
}

export const NAV = [
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'work', label: 'SELECTED WORK' },
  { id: 'contact', label: 'CONTACT' },
] as const

export const ABOUT = {
  cardNo: 'NO. 2027',
  title: ['BASIC', 'INFORMATION'],
  titleCn: '个人简介',
  sub: 'AI CONTENT / SOCIAL / GROWTH',
  fields: [
    { k: 'NAME / 姓名', v: '黎悦悦' },
    { k: 'GRADE / 届别', v: '2027届' },
    { k: 'SCHOOL / 学校', v: '汕头大学' },
    { k: 'MAJOR / 专业', v: '网络与新媒体' },
    { k: 'FOCUS / 方向', v: 'AI内容 / 社媒运营' },
    { k: 'CITY / 城市', v: '深圳 / 广州优先' },
  ],
  email: 'PORTFOLIO / 2026',
  phone: 'OPEN TO WORK',
  stampTop: 'CONTENT',
  stampMid: 'AI + SOCIAL',
  stampRing: 'PERSONAL PORTFOLIO · YUEYUE ·',
  footL: 'MAKE CONTENT MOVE',
  footR: 'PERSONAL PORTFOLIO · 2026',
}

export type SkillCard = {
  no: string
  kicker: string
  title: string
  desc: string
  rows: { k: string; v: string }[]
  bg: string
  fg: string
}

export const SKILLS: SkillCard[] = [
  {
    no: '01',
    kicker: '01 / CONTENT STRATEGY',
    title: '内容策划',
    desc: '从选题、脚本到发布与复盘，围绕平台语境做内容设计。',
    rows: [
      { k: 'SHORT VIDEO', v: '选题 / 脚本 / 分镜 / 剪辑' },
      { k: 'SOCIAL', v: '抖音 / 小红书 / 微博 / 视频号' },
      { k: 'TREND', v: '热点拆解 / 爆款结构复刻' },
    ],
    bg: '#111111',
    fg: '#ffffff',
  },
  {
    no: '02',
    kicker: '02 / AI CONTENT',
    title: 'AI 内容',
    desc: '把生成式工具融入视觉、视频和内容生产流程。',
    rows: [
      { k: 'IMAGE', v: '即梦 / Nano Banana / Recraft' },
      { k: 'VIDEO', v: 'AI真人视频 / 场景替换 / 角色一致性' },
      { k: 'WORKFLOW', v: '提示词设计 / 素材迭代 / 效果复盘' },
    ],
    bg: '#8964E8',
    fg: '#ffffff',
  },
  {
    no: '03',
    kicker: '03 / SOCIAL & GROWTH',
    title: '运营与增长',
    desc: '关注内容表现、平台分发与互动反馈，并持续调整方向。',
    rows: [
      { k: 'OPERATION', v: '账号运营 / 发布 / 评论反馈' },
      { k: 'DATA', v: '播放 / 留存 / CTR / CPE / CPM' },
      { k: 'GROWTH', v: '内容测试 / 复盘 / 迭代' },
    ],
    bg: '#f5f3ee',
    fg: '#151515',
  },
]

export const FOLDERS = [
  {
    id: 'video',
    en: ['AI', 'VIDEO'],
    cn: 'AI影像与短视频',
    bg: '#111111',
    fg: '#8964E8',
    cnFg: '#ffffff',
    x: -30,
    y: 12,
    rot: -6,
    z: 1,
  },
  {
    id: 'design',
    en: ['SOCIAL', 'CONTENT'],
    cn: '社媒内容与视觉',
    bg: '#8964E8',
    fg: '#ffffff',
    cnFg: '#ffffff',
    x: 0,
    y: 0,
    rot: -7,
    z: 3,
  },
  {
    id: 'photograph',
    en: ['ACCOUNT', 'PROJECT'],
    cn: '账号与栏目项目',
    bg: '#e9e7e2',
    fg: '#111111',
    cnFg: '#111111',
    x: 30,
    y: -18,
    rot: 3,
    z: 2,
  },
  {
    id: 'website',
    en: ['CAMPAIGN', '&', 'WRITING'],
    cn: '活动与文案项目',
    bg: '#f8f8f6',
    fg: '#14161a',
    cnFg: '#14161a',
    x: 22,
    y: 20,
    rot: 2,
    z: 2,
  },
] as const

export const POSTERS = [
  { src: 'greenapple', title: 'SOCIAL CONTENT' },
  { src: 'happynewyear', title: 'K教栏目' },
  { src: 'streamnow', title: 'AI真人视频' },
  { src: 'butterfly', title: '热量刺客图文' },
  { src: 'frangipani', title: '户外穿搭内容' },
  { src: 'chocaward', title: '泡沫轴跟练' },
  { src: 'childhood', title: '活动传播' },
  { src: 'yexing', title: '账号内容测试' },
  { src: 'chocmint', title: 'Keep 社媒内容' },
  { src: 'grassfest', title: '品牌联动' },
  { src: 'research', title: '数据复盘' },
]

export const MAGAZINE_PAGES = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6']

export const IP_DESIGN = {
  kicker: '03 / AI CONTENT SYSTEM',
  title: 'AI CONTENT',
  cn: 'AI 内容工作流',
  desc: '围绕人物一致性、场景生成、视频改造和内容适配，建立可复用的 AI 内容生产流程。',
  swatches: [
    { name: 'KEEP PURPLE', hex: '#8964E8' },
    { name: 'INK', hex: '#171717' },
    { name: 'PAPER', hex: '#f5f3ee' },
    { name: 'GREY', hex: '#b8b6b0' },
  ],
  specs: [
    { k: 'INPUT', v: '参考素材 / 脚本 / 角色设定' },
    { k: 'PROCESS', v: '提示词 / 生成 / 迭代 / 精修' },
    { k: 'OUTPUT', v: '图片 / 真人视频 / 社媒物料' },
  ],
}

export const PHOTOS = [
  'p1', 'p4', 'p2', 'p6',
  'p5', 'p3', 'p6', 'p1',
  'p2', 'p5', 'p4', 'p3',
  'p6', 'p1', 'p3', 'p5',
]

export const VIDEOS = [
  {
    no: '01',
    en: 'AI REAL PERSON VIDEO',
    cn: 'AI真人视频项目',
    desc: '角色一致性、镜头设计、场景替换与内容适配。',
    cover: 'pv1',
    href: '#',
  },
  {
    no: '02',
    en: 'SOCIAL SHORT VIDEO',
    cn: '社媒短视频项目',
    desc: '从选题、脚本、剪辑到发布与复盘的完整流程。',
    cover: 'pv2',
    href: '#',
  },
]

export const WEBSITES = [
  {
    no: '01',
    slug: 'KJIAO / SOCIAL',
    title: ['K教 /', 'Social IP'],
    kicker: 'CONTENT STRATEGY · SOCIAL',
    desc: '品牌真人 IP 的账号诊断、内容线设计、选题拆解与脚本适配。',
    cover: 'coffee',
    glow: '#c8b8f4',
    href: '#',
  },
  {
    no: '02',
    slug: 'AI / CONTENT',
    title: ['AI /', 'Content'],
    kicker: 'AIGC · VIDEO',
    desc: 'AI 真人视频、背景替换、角色一致性与视觉素材生产。',
    cover: 'drama',
    glow: '#d8d8d8',
    href: '#',
  },
  {
    no: '03',
    slug: 'CAMPAIGN / SOCIAL',
    title: ['Campaign /', 'Social'],
    kicker: 'SOCIAL · COPY',
    desc: '品牌活动、微博文案、视频号内容与平台传播适配。',
    cover: 'wechat',
    glow: '#cabcf4',
    href: '#',
  },
]

export const NOTE_COLORS = ['#d8d1f2', '#ece9e3', '#d7d7d7', '#bfb5e9', '#e5dff5', '#d8d8d8']

export const SEED_NOTES = [
  { id: 's1', text: 'AI CONTENT', color: '#d8d1f2', x: 14, y: 42, rot: -2 },
  { id: 's2', text: 'SOCIAL MEDIA', color: '#ece9e3', x: 70, y: 12, rot: 3 },
  { id: 's3', text: 'OPEN TO WORK', color: '#d7d7d7', x: 80, y: 33, rot: -3 },
]
