export type LinkItem = { label: string; href: string }

export type ContentBlock = {
  title: string
  subtitle?: string
  paragraphs?: string[]
  bullets?: string[]
  metrics?: string[]
  links?: LinkItem[]
  note?: string
}

export type CaseItem = {
  no: string
  title: string
  subtitle?: string
  blocks: ContentBlock[]
}

export const ABOUT_V4: ContentBlock[] = [
  {
    title: 'ABOUT',
    subtitle: '黎悦悦｜汕头大学 网络与新媒体｜2027届',
    paragraphs: [
      '我是汕头大学网络与新媒体专业 2027 届本科生。在校学习过视听语言、节目策划、摄像、新媒体传播等课程，也一直在做内容相关的实践。',
    ],
  },
  {
    title: '第一段实习｜内容项目全流程',
    paragraphs: [
      '在 SJC 主要参与政务专题片、企业宣传片和活动传播项目。',
      '从前期策划、拍摄执行，到后期剪辑、包装、客户修改和最终交付，我都实际参与过。工作中也会负责需求理解、修改反馈、项目进度跟进和向上同步，熟悉真实内容项目从沟通到落地的完整流程。',
    ],
  },
  {
    title: '第二段实习｜账号运营与内容优化',
    paragraphs: [
      '在 Keep 做内容相关实习，工作主要集中在账号和内容运营，包括选题策划、脚本撰写、竞品与爆款拆解、AIGC 内容制作、账号内容规划和数据复盘。',
      '我会结合完播、评论和用户反馈判断内容表现，再调整后续选题、结构和表达，也会用 AI 工具辅助内容测试、素材生产和修改。',
    ],
  },
  {
    title: '项目经历｜从 0 到 1 与结果验证',
    paragraphs: [
      '课外参与和负责过从 0 到 1 账号运营、校园媒体、数字人直播和短视频项目。',
      '其中一个账号项目里，我根据完播率、评论反馈和用户停留持续调整内容方向，最终将完播率从 2.94% 提升到 19.44%。',
    ],
  },
  {
    title: '我的做事方式',
    paragraphs: [
      '我比较擅长快速进入一个陌生问题。拿到新的选题或方向时，会先看同类内容、账号表现和用户反馈，再整理出值得验证的点，最后转成可以执行的方案。',
      '做项目时也会先理清需求、节点和优先级，再持续推进到落地。',
    ],
  },
  {
    title: 'AI 能力',
    paragraphs: [
      '熟悉 AI 图像、AI 视频和数字人内容制作，能够根据项目需求设计提示词、参考图和生成流程，用于创意测试、素材生产和内容迭代，提高内容测试与制作效率。',
    ],
  },
  {
    title: '我能带来的价值',
    paragraphs: [
      '我的优势在于可以把内容策划、用户理解、数据分析和 AI 生产结合起来，既能上手落地执行，也能推动项目往前走，并关注内容最终怎么服务传播、增长和业务目标。',
    ],
  },
]

export const EXPERIENCE_V4: { folder: string; role: string; intro: string; cases: CaseItem[] }[] = [
  {
    folder: 'FOLDER 01｜KEEP',
    role: 'Keep｜AI 新媒体编导 / 内容运营实习',
    intro: '负责 IP 账号与官方账号内容策划，参与选题调研、对标拆解、脚本策划、AI 视频生成及内容复盘。',
    cases: [
      {
        no: 'CASE 01',
        title: '谢幺幺爱跳操',
        subtitle: '卡点游戏跟练：从稳定基本盘里找新的增长空间',
        blocks: [
          {
            title: '账号问题',
            paragraphs: [
              '接手时，账号已经有两条稳定内容线，整体数据表现平稳，但长期没有明显突破新的流量层级。',
              'K-pop 燃脂舞已经有稳定受众，但即使不断简化动作，对没有舞蹈基础的人仍然存在跟练门槛。想继续扩大流量池，就需要找到一个既保留跟练价值、又能让更多人直接参与的新形式。',
            ],
          },
          {
            title: '我们怎么找方向',
            paragraphs: ['我们同步做了运动赛道账号调研，没有只看头部账号，而是重点观察近期涨粉快、连续曝光稳定、互动表现较好的账号。'],
            bullets: ['哪类内容最近连续跑出来', '参与门槛高不高', '哪些机制能持续复用', '这个形式放到谢幺幺身上还能不能成立'],
          },
          {
            title: '方向',
            paragraphs: [
              '最后找到“卡点游戏 × 燃脂跟练”。把完整舞蹈拆成更简单的动作节点：音乐节点 → 动作反馈 → 用户跟做。',
              '不需要提前学习完整舞蹈，只需要根据画面完成即时动作。原来的运动价值还在，短视频本身也多了一层游戏感。',
            ],
          },
          {
            title: '我做了什么',
            bullets: ['(G)I-DLE 卡点瘦手臂', 'NewJeans 卡点瘦腿', 'Tomboy 卡点瘦手瘦背', '选题与音乐筛选', '动作与卡点设计', '脚本策划', '上线后复盘'],
            note: '设计时会反复检查：第一遍能不能看懂、来不来得及反应、动作有没有训练价值、卡点反馈够不够明显。',
          },
          {
            title: '数据验证',
            metrics: ['抖音：178.7 万播放 / 18.87 万互动 / 10.6% 互动率 / 8.06 万收藏 / 2.04 万分享 / 1.73 万涨粉', '小红书：42.1 万曝光 / 3.5 万观看 / 8227 互动 / 23.5% 互动率'],
            paragraphs: ['首期上线后数据明显高于账号日常表现，这个结果让我们继续做了第二、第三期，验证这个方向是否可以持续。'],
          },
          {
            title: '后续迭代',
            paragraphs: [
              '后续内容没有完全复刻第一期，也暴露了两个问题：部分腿部动作还是太快；有些内容只是踩到节奏，但游戏反馈不够强。',
              '所以后面继续优化两个点：动作更简单，反馈更明确。',
            ],
          },
          {
            title: '视频链接',
            links: [
              { label: '第一期｜(G)I-DLE 卡点瘦手臂', href: 'https://v.douyin.com/YZ8Eo60_HnM/' },
              { label: '第二期｜NewJeans 卡点瘦腿', href: 'https://v.douyin.com/fOu-tSobGtQ/' },
              { label: '第三期｜Tomboy 瘦手瘦背', href: 'https://v.douyin.com/4SdVy0C9JEY/' },
            ],
            note: '素材：账号主页、三期视频链接、系列封面、公开调研/拉片图。数据证明直接使用正文中的结果，不放后台截图。',
          },
        ],
      },
      {
        no: 'CASE 02',
        title: 'K 教｜AI 漫剧 × 消费品',
        blocks: [
          {
            title: '账号问题',
            paragraphs: [
              '复盘历史内容后，我们发现 K 教已经有基础人设认知，评论区里会主动喊“K 教”，但账号的价值还不够稳定。',
              '一方面，高表现内容比较依赖莎莎相关素材和节点热点；另一方面，过去也会做动作教学和运动科普，这部分和官号功能重叠。',
              '所以当时需要解决的是：K 教怎么摆脱对单一圈层和热点的依赖，同时做出官号不适合做、又能承接业务的内容。',
            ],
          },
          {
            title: '策略判断',
            paragraphs: ['我们先复盘账号里相对高表现的内容，同时调研剧情类 AI 视频和广告植入案例。'],
            bullets: ['内容入口要尽量降低理解成本', '产品最好直接参与剧情'],
          },
          {
            title: '测试方向',
            paragraphs: ['K 教人设 × 大众熟悉故事 × AI 漫剧 × 消费品植入。'],
          },
          {
            title: '代表案例｜《金斧头银斧头》',
            paragraphs: [
              '选择这个故事，是因为它本身有很高的大众认知度，同时天然带有“不同物品出现—角色做选择”的结构。',
              '我们直接把 Keep 消费品放进这个选择里，没有另外增加一段产品介绍。继续往下看的动力仍然是：小男孩最后会怎么选。',
              '同时，K 教的反应、台词和处理方式继续按原有人设来写，让剧情和账号角色保持一致。',
            ],
          },
          {
            title: '我的工作',
            bullets: ['历史内容复盘', 'AI 广告案例调研', '选题策划', '故事改编', 'K 教人设适配', '产品植入设计', '分镜脚本', 'AI 人物/场景生成', 'AI 视频生成与镜头检查'],
          },
          {
            title: '结果',
            metrics: ['《金斧头银斧头》小红书约 24 万曝光', '后续 AI 漫剧及剧情化内容累计测试约 14 条，总曝光约 40 万'],
            paragraphs: ['评论区里既会讨论剧情点，也有人主动提到广告植入自然。'],
          },
          {
            title: '流程沉淀',
            bullets: ['K 教人设 Skill：固定人物说话方式、反应链、笑点和内容边界，用于选题和脚本校验', 'AI 视频生成 SOP：整理人物参考、场景控制、分镜、动作拆分和镜头连续性检查流程，减少重复试错'],
          },
          {
            title: '视频链接',
            links: [
              { label: '《小孩儿，你掉的是金斧头还是铁斧头？》', href: 'https://v.douyin.com/iKudbv4yhBg/' },
              { label: '《当 K 教遇上妙脆角小猫，会擦出什么火花？》', href: 'https://v.douyin.com/ogl4zZJ60oY/' },
            ],
            note: '素材：两期 AI 漫剧链接、产品植入画面、评论区反馈、K 教 Skill、AI 视频 SOP。',
          },
        ],
      },
      {
        no: 'CASE 03',
        title: 'Keep 官方账号',
        subtitle: '在品牌约束下做内容：从“能发”到“既符合平台，也符合品牌”',
        blocks: [
          {
            title: '账号定位',
            paragraphs: [
              '和谢幺幺、K 教这类 IP 账号相比，Keep 官号承担的是更明确的品牌角色。它首先要解决的是：看到这条内容时，会不会觉得这是一个专业、可信、符合 Keep 品牌形象的表达。',
              '官号做内容时，不能只看这个形式会不会爆，还要同时判断热点适配、专业风险、品牌可信度、业务承接以及不同平台的语言和形式。',
            ],
          },
          {
            title: '我看到的问题',
            paragraphs: [
              '官号本身内容体系已经比较成熟，我更多做的是：在已有品牌方向里，找到“平台愿意看”和“品牌能够说”之间的平衡。',
              '实际选题时，会先看三个东西：平台现在在看什么、Keep 现在要说什么、两者有没有自然的连接点。',
            ],
          },
          {
            title: '我怎么判断一个选题能不能做',
            paragraphs: ['日常选题主要从热点、对标内容和业务需求三个方向进入。找到热点以后不会直接跟，会继续拆：这个内容为什么能留住人 → 真正有效的是话题本身、形式还是情绪 → 哪部分适合迁移 → 放到 Keep 以后会不会违和。'],
          },
          {
            title: '我参与的内容',
            bullets: ['热点和对标调研', '视频拉片', '运动科普内容', '消费品和活动内容', '视频号 / 微博 / 小红书平台适配', '详细脚本', 'AI 创意短片', '发布前检查', '部分数据复盘'],
          },
          {
            title: 'AI 创意短片',
            paragraphs: [
              '官号里的 AI 首先要服从品牌表达。制作时会更关注：画面是否符合 Keep 整体视觉、创意是否容易理解、AI 感会不会盖过内容本身、人物场景动作是否稳定、最终成片像不像 Keep 会发的内容。',
              '这条内容里用到的人物参考、场景统一、动作拆分和镜头连续性方法，后面继续被用到 K 教 AI 漫剧里。',
            ],
          },
          {
            title: '我从官号工作里学到什么',
            paragraphs: ['IP 账号更适合测试人格、情绪和新形式；官号要守住专业度和品牌一致性，同时把跑出来的形式重新转成品牌可以使用的内容。'],
          },
          {
            title: '视频链接',
            links: [{ label: 'Keep 官号 AI 创意短片｜《当我试图驯服 AI 做视频》', href: 'https://v.douyin.com/C7Y1bXqCOOU/' }],
            note: '素材：关键画面、评论区反馈、脚本/分镜。数据表现直接写文案，不放数据截图。',
          },
        ],
      },
      {
        no: 'CASE 04',
        title: '兔子运动 IP',
        subtitle: '从 0 到 1 孵化马拉松主题 IP 账号',
        blocks: [
          {
            title: '项目背景',
            paragraphs: [
              '项目启动时，公司已经确定以“兔子 × 马拉松”作为 IP 方向。我参与的重点，是继续回答：兔子为什么值得被持续关注？角色之间怎么区分？第一批内容从哪里切入？账号靠什么持续更新？',
              '前期没有急着进入视频生产，而是先做 IP 账号和内容调研，再确定角色、人设和内容结构。',
            ],
          },
          {
            title: '前期调研',
            paragraphs: ['调研主要看近期增长较快的 IP 账号，以及已经形成稳定内容矩阵的角色 IP。'],
            bullets: ['先记住的是一个很具体的人格和情绪', 'IP 内容需要有可以反复生产的生活母题', '角色要和用户建立“这是我”的对应关系'],
          },
          {
            title: '我的工作',
            bullets: ['IP 账号与内容矩阵调研', '涨粉路径和代表内容分析', '四角色定位梳理', '首马兔人设设计', '世界观讨论', '内容方向与选题设计', '角色视觉规则', '三视图和面部参考', 'AI 视频提示词', '角色一致性与场景一致性控制'],
            note: '涉及未公开的角色设定、世界观和具体内容规划，作品集里只展示方法和阶段成果，不展开内部细节。',
          },
          {
            title: 'AI 生产优化',
            paragraphs: ['进入制作以后，最频繁的问题是角色一致性。后面把参考图职责拆开：三视图负责身体比例、轮廓和服装结构；面部参考负责五官和表情；场景参考负责空间、光线和整体风格。'],
            metrics: ['单条内容制作周期从前期约 3 周缩短到 4 天左右'],
          },
          {
            title: '现阶段验证重点',
            bullets: ['角色是否有明确代入感', '选题是否能持续长出来', 'IP 是否有后续延展空间'],
            note: '素材：可公开角色视觉、角色一致性优化前后对比、世界观和人设设定、流程图。',
          },
        ],
      },
    ],
  },
  {
    folder: 'FOLDER 02｜SJC',
    role: '岗位：见习制作',
    intro: '从校园创作转向商业内容交付的全流程执行者。',
    cases: [
      {
        no: 'SJC',
        title: '商业内容制作与交付',
        blocks: [
          {
            title: '工作内容',
            bullets: ['企业宣传片全流程参与（脚本 / 拍摄 / 剪辑）', '多类型活动摄像（会议 / 宣讲 / 赛事）', '商业视频后期包装与交付优化', '多项目并行执行与高频内容交付'],
          },
          { title: '项目成果', metrics: ['独立完成 15 条短视频剪辑', '多项活动快闪与活动内容交付'] },
          { title: '核心能力', bullets: ['商业内容适配', '高压执行', '纪实拍摄', '客户沟通'] },
          {
            title: '项目入口',
            links: [
              { label: '盐田文体活动季总结视频执行脚本', href: '/media/yantian-script.pdf' },
              { label: '项目总体回顾', href: 'https://mp.weixin.qq.com/s/PGebHlSQMo6cfIwGgcdSjQ' },
              { label: '预热视频', href: 'https://mp.weixin.qq.com/s/7sts1I496KDR9EhrlKcc2g' },
              { label: '羽毛球花絮', href: 'https://mp.weixin.qq.com/s/7JfxUhoGAP6IkOCVPiHZEQ' },
              { label: '乒乓球花絮', href: 'https://mp.weixin.qq.com/s/OdM0V6ltPwHj80CmpcAjqA' },
              { label: '篮球花絮', href: 'https://mp.weixin.qq.com/s/LSHkFLdOm_UQ95SI1Cravg' },
              { label: '趣味比赛花絮', href: 'https://mp.weixin.qq.com/s/G48-mZ1PHU_kM--HOCRjFw' },
            ],
          },
        ],
      },
    ],
  },
]

export const WORK_V4: CaseItem[] = [
  {
    no: '01',
    title: '三创赛｜直播电商运营',
    subtitle: '从 0 到 1 完成直播电商账号运营与内容转化闭环',
    blocks: [
      { title: '项目目标', paragraphs: ['通过真实运营实践，验证从账号定位、内容迭代、用户留存到直播转化的完整电商运营路径。'] },
      { title: '我的工作 / 职责', bullets: ['账号从 0 到 1 搭建', '内容策划与短视频制作', '直播脚本与主播执行', '数据复盘与内容优化'] },
      { title: '项目成果', metrics: ['全国大学生电子商务三创赛二等奖', '累计产出原创视频 19 条，总播放量 1.6 万+', 'AI 内容转型后完播率由 2.94% 提升至 19.44%'] },
      { title: '素材与入口', links: [{ label: '项目成果展示', href: '/media/sanchuang-plan.pdf' }, { label: '自媒体账号视频', href: 'https://pan.baidu.com/s/1ldcKNlQ_IOA3tqCqcTQFdg?pwd=5vbf' }, { label: '账号截图', href: '/media/portfolio/work/sanchuang-social.webp' }, { label: '封面设计', href: '/media/portfolio/work/sanchuang-results.webp' }] },
    ],
  },
  {
    no: '02',
    title: '数字人直播间',
    subtitle: '将数字人技术应用于农产品内容营销',
    blocks: [
      { title: '项目说明', paragraphs: ['依托 Unreal 5、AI 语音合成与自然语言处理技术，为本土蜂蜜品牌打造虚拟偶像直播与内容生产体系，降低真人直播与视频制作成本，提升农产品品牌宣传与带货效率。'] },
      { title: '我的工作 / 职责', bullets: ['基于 UE5 与 MetaHuman 完成虚拟偶像数字人形象设计，搭建可落地直播的虚拟主播系统', '结合蜂蜜产品特性搭建直播话术与知识语料库，支撑数字人实时互动与产品讲解', '完成蜂蜜科普、产品展示、蜂场研学等短视频标准化拍摄与流水线产出，支撑多平台内容分发'] },
      { title: '项目成果', metrics: ['累计开展 18 场直播', '累计产出 45 条原创短视频，全平台总播放量超 8.6 万', '跑通“直播引流—电商转化—私域沉淀”基础运营链路', '完成数字人形象设计、直播系统搭建及私域社群运营，沉淀用户 500+'] },
      { title: '素材与入口', links: [{ label: '数字人视频示例', href: '/media/portfolio/work/digitalhuman.webp' }, { label: '后台设置截图', href: '/media/portfolio/work/digitalhuman-backend.webp' }] },
    ],
  },
  {
    no: '03',
    title: '解困式报道',
    subtitle: '深度内容挖掘与解决方案导向的内容运营实践',
    blocks: [
      { title: '项目说明', paragraphs: ['针对汕头阳光学校资金紧张、师资有限、硬件不足、宣传薄弱的真实办学困境，以短视频为载体，采用解困式报道逻辑，挖掘学校自我解困、以商养学、特色办学的真实案例，通过多平台内容运营提升曝光、链接资源，形成调研—策划—创作—发布—复盘的完整内容闭环。'] },
      { title: '我的工作 / 职责', bullets: ['实地调研与深度访谈', '策划 6 大内容主题，搭建账号内容矩阵与选题库', '撰写短视频脚本、文案，把控叙事结构与表达尺度', '统筹拍摄、剪辑、审核全流程，协调校方需求', '负责视频号 / 抖音 / 小红书三平台发布与数据复盘'] },
      { title: '项目成果', metrics: ['完成 6 条系列纪实短视频全案制作', '三平台累计播放量 3.5 万+，视频号单条最高 1.3 万播放，正面评论占比 60%', '搭建“小小阳光”账号体系'] },
      { title: '素材与入口', links: [{ label: '报道视频 01', href: 'https://pan.baidu.com/s/1xwmnsXnxQp2k7BUrqP1gyw?pwd=irrc' }, { label: '报道视频 02', href: 'https://pan.baidu.com/s/1kv5NRgfLjo8uFzjCmjB_WQ?pwd=7kc6' }, { label: '调研报告', href: '/media/research-report.pdf' }] },
    ],
  },
  {
    no: '04',
    title: '湄洲岛 48 小时青年影像创作营',
    subtitle: '限时创作中的快速判断、动态策划与内容表达调整',
    blocks: [
      { title: '项目说明', paragraphs: ['在 48 小时抽题创作、素材不可补拍的比赛机制下，需要在陌生环境中结合比赛规则、主题要求与地域文化信息快速完成选题判断与内容落地。'] },
      { title: '我的工作 / 职责', bullets: ['导演', '策划', '摄影', '剪辑'] },
      { title: '项目成果', metrics: ['优秀作品入选', '提升规则理解、快速判断与动态策划能力'] },
      { title: '素材与入口', links: [{ label: '48h 成片', href: 'https://pan.baidu.com/s/1PP6_0oLrAAVuAyN2azOgMw?pwd=nyyr' }] },
    ],
  },
  {
    no: '05',
    title: '《THE NEXT WINTER》定格动画创作',
    subtitle: '一周内独立完成从故事构思到成片输出的完整创作实践',
    blocks: [
      { title: '项目说明', paragraphs: ['在较短时间内独立完成一部定格动画作品，从原创故事、剧本、分镜到拍摄和剪辑一步步推进。'] },
      { title: '我的工作 / 职责', bullets: ['原创剧本', '分镜设计', '拍摄', '剪辑'] },
      { title: '项目成果', metrics: ['广东赛区三等奖', '独立完成作品全流程制作'] },
      { title: '素材与入口', links: [{ label: '定格动画成片', href: 'https://pan.baidu.com/s/1KcHmnCebCqdhPJ99Nv-hCQ?pwd=cbip' }] },
    ],
  },
  {
    no: '06',
    title: '红动粤东·数字人微课',
    subtitle: '以真实项目实践探索 AIGC 工具、数字人表达与内容生产流程的结合方式',
    blocks: [
      { title: '项目说明', paragraphs: ['原有微课制作流程周期较长、产能有限，在持续输出需求下，开始尝试用 AIGC 工具和数字人形式优化制作流程，提高内容生产效率。'] },
      { title: '我的工作 / 职责', bullets: ['微课内容策划', '数字人视频制作', 'AIGC 工具测试与实际应用'] },
      { title: '项目成果', metrics: ['视频月产量由 1 条提升至 4 条', '获“互联网+”广东省二等奖 / 国创赛广东省三等奖', '完成 AIGC 工具在真实内容生产流程中的落地实践'] },
      { title: '素材与入口', links: [{ label: '数字人微课片段', href: 'https://weixin.qq.com/sph/AXIQ8JWpGm' }, { label: '脚本 / 分镜展示', href: '/media/portfolio/work/aigc-program.webp' }] },
    ],
  },
]

export const MORE_WORK_V4: ContentBlock[] = [
  {
    title: 'MORE WORK｜Supporting Experience',
    subtitle: 'Campus Media × Documentary × Creative Exploration × Program Directing',
    paragraphs: ['在核心项目之外，我持续通过校园传播、纪实影像、创意实验与节目统筹拓展内容边界。这些经历共同塑造了我对内容从执行到表达、从创意到管理的完整理解。'],
  },
  {
    title: 'Campus Media Matrix｜校园媒体矩阵',
    paragraphs: ['长期活跃于学生会新媒体部、招生办、导生会、书院新媒体及 OceanLab 等多个校园媒体组织，深度参与迎新晚会、十大歌手、运动会等大型活动的宣传策划、海报设计、推文运营、专题片制作、摄影摄像与传播执行。'],
    bullets: ['内容执行', '校园传播', '海报设计', '活动宣传', '推文运营', '摄影摄像'],
  },
  {
    title: 'Documentary & Human Stories｜纪录片与人物故事',
    paragraphs: ['长期参与群像纪录片、非遗纪录片、人物访谈及专题影像创作，涵盖《第三类孔》穿孔群像纪录片、非遗油纸灯笼纪录片等多个项目。'],
    bullets: ['采访沟通', '人物理解', '纪实表达', '群像叙事', '非遗影像'],
  },
  {
    title: 'Creative Exploration Lab｜创意探索',
    paragraphs: ['持续关注微短剧、AI 漫剧、定格动画、原创舞台剧与摄影创作，在青年文化、故事结构与视觉表达中不断训练内容敏感度与创新能力。'],
    bullets: ['THE NEXT WINTER', '微短剧', 'AI 漫剧工坊', '专题摄影'],
  },
  {
    title: 'Program Planning & Directing｜节目策划与编导',
    bullets: ['Phase 01｜节目执行：参与节目制作执行，负责具体内容推进', 'Phase 02｜总编导：担任总编导，负责节目整体策划、内容结构设计、团队分工与执行统筹', '阶段总结：从“完成任务”升级为“定义任务”'],
  },
]

export const CONTACT_V4 = {
  title: '感谢阅览我的作品集',
  email: '23yyli1@stu.edu.cn',
  footer: 'LI YUEYUE © 2026',
}
