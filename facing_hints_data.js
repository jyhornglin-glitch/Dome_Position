// Facing Direction Pocket Card Hints Database (依據 0909小卡關鍵字提示.docx)
// 支援各場次（11/12 ~ 11/15）與演繹人員身分（藍白衣、東西一二、LOGO、V型等）即時過濾

const FACING_HINTS_DATA = [
  // --- 00 基本 ---
  {
    section: '基本',
    title: '【基本】',
    cue: '進場後',
    facing: '面向甲舞臺45度',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },

  // --- 01 圓形 ---
  {
    section: '01 圓形',
    title: '【序】',
    cue: '巴利文唱頌無量義經',
    facing: '面甲舞臺圓弧線 (合掌拿燈，不開燈)',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '01 圓形',
    title: '【序】',
    cue: 'OS: 靈山法會「不散」',
    facing: '內轉向圓心',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '01 圓形',
    title: '【序】',
    cue: '結束',
    facing: '轉向甲舞臺',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '01 圓形',
    title: '【生】',
    cue: '—',
    facing: '面甲舞臺圓弧線',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '01 圓形',
    title: '【老苦】',
    cue: '起始',
    facing: '面乙舞臺圓心 (腳尖對線)',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '01 圓形',
    title: '【老苦】',
    cue: 'OS: 你將來要繼承王位…',
    facing: '轉向圓心，應當去看看這片由你守護的國土…',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '01 圓形',
    title: '【老苦】',
    cue: '演繹結束 OS: 老，「苦啊」!',
    facing: '全體收',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '01 圓形',
    title: '【病苦】',
    cue: 'OS: 病，「苦啊」!',
    facing: '面乙舞臺圓心 (腳尖對線，全體收)',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '01 圓形',
    title: '【死苦】',
    cue: 'OS:「生命何義」，人生何價',
    facing: '合十轉面向法師之圓弧線',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '01 圓形',
    title: '【死苦】',
    cue: '「夜深人靜」離宮殿',
    facing: '轉面向圓心 (腳尖對線)',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '01 圓形',
    title: '【死苦】',
    cue: 'OS: 我要為眾生尋求解脫之道',
    facing: '講完手放大腿邊',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '01 圓形',
    title: '【六度】',
    cue: '起始',
    facing: '面乙舞臺圓心 (腳尖對線)',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '01 圓形',
    title: '【六度】',
    cue: 'OS: 去除無明行「六」度',
    facing: '白衣：左轉；藍衣：右轉 (兩腳夾線)',
    facingBlue: '右轉 (兩腳夾線)',
    facingWhite: '左轉 (兩腳夾線)',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['color']
  },

  // --- 02 行願 ---
  {
    section: '02 行願',
    title: '【行願】',
    cue: '1. 鳩摩羅什換成行願 (五百船先壓縮在第三、二、一階、平地)',
    facing: '外側斜浪和內側直線兩腳夾線看甲舞臺',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '02 行願',
    title: '【行願】',
    cue: '2.「翻譯佛法，佛法永傳」',
    facing: '不動',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '02 行願',
    title: '【行願】',
    cue: '3.「西取佛法，佛法永傳」',
    facing: '外側斜浪：腳尖對線面向乙舞臺；內側直線：45度面向乙舞臺圓心',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '02 行願',
    title: '【行願】',
    cue: '4.「不至日本」，本願不遂',
    facing: '五百船衝上去到位直接面法師',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '02 行願',
    title: '【行願】',
    cue: '5.「東傳佛法，佛法永傳」',
    facing: '全部人轉面向自己行願動作方向',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '02 行願',
    title: '【開經偈】',
    cue: '—',
    facing: '橘色壓縮線',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },

  // --- 03 米籮 ---
  {
    section: '03 米籮',
    title: '【扛天下米籮】',
    cue: '—',
    facing: '甲舞臺45度',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },

  // --- 04 靜思家風 ---
  {
    section: '04 靜思家風',
    title: '【靜思家風】',
    cue: '1. OS: 你去煮麵線 (台語)',
    facing: '舞臺的人上舞臺',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '04 靜思家風',
    title: '【靜思家風】',
    cue: '2. OS: 嗯!「我認定」了這個師父了 (台語)',
    facing: '合掌轉向法師',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '04 靜思家風',
    title: '【靜思家風】',
    cue: '3. 結束後下舞臺',
    facing: '全體回基本隊形正面向甲舞臺45度',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },

  // --- 05-1 有法船(點一盞燈) ---
  {
    section: '05 功德會',
    title: '【點一盞燈】',
    cue: 'OS: 三位修女… (換成LOGO隊形)',
    facing: '到位先面向甲舞臺',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '05 功德會',
    title: '【點一盞燈】',
    cue: 'OS: 師父我們需要「你」',
    facing: '非LOGO：45度面向法師；LOGO八正道/外框：兩腳夾線面法師方向；LOGO船/帆/浪/字：正向法師',
    facingLogo: '八正道、外框：兩腳夾線面法師方向；船、帆、浪、字：正向法師',
    facingNoLogo: '45度面向法師',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['logo']
  },
  {
    section: '05 功德會',
    title: '【點一盞燈】',
    cue: 'OS:「如果你們願意幫助我」',
    facing: 'LOGO、法師前白衣轉回各自面向',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },

  // --- 05-2 無法船(菜市場5毛錢) ---
  {
    section: '05 功德會',
    title: '【菜市場的五毛錢】',
    cue: '—',
    facing: '非LOGO：45度面向乙舞臺；LOGO：腳尖對線面乙舞臺圓心',
    facingLogo: '腳尖對線面乙舞臺圓心',
    facingNoLogo: '45度面向乙舞臺',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['logo']
  },
  // 是諸眾生 (第一、三天 - 圍爐)
  {
    section: '05 功德會',
    title: '【是諸眾生】(圍爐)',
    cue: 'OS: 我們是全世界「最大的家庭」啦！(間奏轉向)',
    facing: '非LOGO：45度面向法師；LOGO：腳尖對線面乙舞臺圓心',
    facingLogo: '腳尖對線面乙舞臺圓心',
    facingNoLogo: '45度面向法師',
    sessions: ['1112', '1114'],
    roles: ['logo']
  },
  // 是諸眾生 (第二、四天 - 米甕與大魚)
  {
    section: '05 功德會',
    title: '【是諸眾生】(米甕與大魚)',
    cue: 'OS:「菩薩所緣」，緣苦眾生',
    facing: 'LOGO上舞臺 (八正道/外框兩腳夾線面法師方向，船/帆/浪/字正向法師)；非LOGO：45度面向法師',
    facingLogo: '上舞臺 (八正道、外框：兩腳夾線面法師方向；船、帆、浪、字：正向法師)',
    facingNoLogo: '45度面向法師',
    sessions: ['1113', '1115'],
    roles: ['logo']
  },

  // --- 06 四弘誓願 ---
  {
    section: '06 四弘誓願',
    title: '【地藏經啟航】',
    cue: '起始',
    facing: '面乙舞臺 (腳尖對線)',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '06 四弘誓願',
    title: '【地藏經啟航】',
    cue: '1. 促成建院的因緣',
    facing: '面法師 (腳夾線)',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '06 四弘誓願',
    title: '【地藏經啟航】',
    cue: '2. 結束後',
    facing: '轉回乙舞臺',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '06 四弘誓願',
    title: '【四弘誓願】',
    cue: '蛤?三千萬還不到？不過，「萬里長城」',
    facing: '白衣：轉向法師方向；藍衣：轉向甲舞臺 (兩腳夾線)',
    facingBlue: '轉向甲舞臺 (兩腳夾線)',
    facingWhite: '轉向法師方向',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['color']
  },
  {
    section: '06 四弘誓願',
    title: '【醫療梵唄】',
    cue: '—',
    facing: '面乙舞臺；小V + 大V內側跪',
    facingSmallV: '面乙舞臺 (跪)',
    facingBigVIn: '面乙舞臺 (跪)',
    facingBigVOut: '面乙舞臺 (站立)',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['vFormation']
  },

  // --- 07-1 大船師 ---
  {
    section: '07 醫療骨捐',
    title: '【大船師】',
    cue: '起始',
    facing: '面乙舞臺 (腳尖對線)',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '07 醫療骨捐',
    title: '【大船師】',
    cue: '「大醫王」除了拯救他們的病痛 (船跑位)',
    facing: '白衣：往法師划船；藍衣：往甲舞臺划船',
    facingBlue: '往甲舞臺划船',
    facingWhite: '往法師划船',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['color']
  },
  {
    section: '07 醫療骨捐',
    title: '【大船師】',
    cue: '第二次「渡生死河」',
    facing: '藍衣：快速內轉180度向法師；白衣：維持面向法師',
    facingBlue: '快速內轉180度向法師',
    facingWhite: '維持面向法師',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['color']
  },

  // --- 07-2 骨捐能捨 ---
  {
    section: '07 醫療骨捐',
    title: '【骨捐】',
    cue: '起始',
    facing: '面乙舞臺 (腳尖切線)',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '07 醫療骨捐',
    title: '【骨捐】',
    cue: 'OS: 慈濟在找一個人，那個人可能就是你 (完)',
    facing: '轉向甲舞臺 (腳夾線)',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '07 醫療骨捐',
    title: '【骨捐】',
    cue: '最後一次「無上光榮」',
    facing: '面乙舞臺',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '07 醫療骨捐',
    title: '【能捨一切諸難捨】',
    cue: '1.「那一念」救人一命，無損己身',
    facing: '合掌轉向：小V面法師；大V內側面甲舞臺；大V外側不轉',
    facingSmallV: '合掌轉面向法師',
    facingBigVIn: '合掌轉面向甲舞臺',
    facingBigVOut: '合掌不轉',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['vFormation']
  },
  {
    section: '07 醫療骨捐',
    title: '【能捨一切諸難捨】',
    cue: '2. 最後舉燈',
    facing: '轉面向乙舞臺 (腳尖對線) 舉燈',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },

  // --- 08 教育 ---
  {
    section: '08 教育',
    title: '【說法品梵唄】',
    cue: '起始',
    facing: '東西一(水波)：面中央走道之水波弧線 (腳夾線)；東西二(圓)：面甲舞臺之圓弧線 (腳夾線)',
    facingEW1: '面中央走道之水波弧線 (腳夾線)',
    facingEW2: '面甲舞臺之圓弧線 (腳夾線)',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['eastWest']
  },
  {
    section: '08 教育',
    title: '【說法品梵唄】',
    cue: '「相已」',
    facing: '東西一(水波)：面向法師；東西二(圓)：面向乙舞臺圓心',
    facingEW1: '面向法師',
    facingEW2: '面向乙舞臺圓心',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['eastWest']
  },
  {
    section: '08 教育',
    title: '【大慈大悲無量義】',
    cue: '—',
    facing: '東西一(水波)：面中央走道之水波弧線 (腳夾線)；東西二(圓)：面甲舞臺之圓弧線 (腳夾線)',
    facingEW1: '面中央走道之水波弧線 (腳夾線)',
    facingEW2: '面甲舞臺之圓弧線 (腳夾線)',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['eastWest']
  },
  {
    section: '08 教育',
    title: '【誓願將心比心想】',
    cue: 'OS: 上人:「立大願呢!」(拿花轉向法師)',
    facing: '東西一(水波)：面法師之圓弧線 (腳尖對線)；東西二(圓)：面法師之圓弧線 (腳夾線)',
    facingEW1: '面法師之圓弧線 (腳尖對線)',
    facingEW2: '面法師之圓弧線 (腳夾線)',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['eastWest']
  },
  {
    section: '08 教育',
    title: '【小樹啊】',
    cue: 'OS:「2000年慈濟創辦中小學」(拿花向甲舞臺壓縮到位轉回面向法師)',
    facing: '東西一(水波)：「成為」面向甲舞臺 (腳尖對線)；東西二(圓)：「成為」面向乙舞臺圓心',
    facingEW1: '「成為」面向甲舞臺 (腳尖對線)',
    facingEW2: '「成為」面向乙舞臺圓心',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['eastWest']
  },
  {
    section: '08 教育',
    title: '【成長】',
    cue: '起始',
    facing: '東西一(水波)：面中央走道之水波弧線 (腳夾線)；東西二(圓)：面甲舞臺之圓弧線 (腳夾線)',
    facingEW1: '面中央走道之水波弧線 (腳夾線)',
    facingEW2: '面甲舞臺之圓弧線 (腳夾線)',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['eastWest']
  },
  {
    section: '08 教育',
    title: '【成長】',
    cue: '「當我走向新的旅程」',
    facing: '東西一(水波)：維持面中央走道；東西二(圓)：轉向乙舞臺圓心',
    facingEW1: '維持面中央走道之水波弧線',
    facingEW2: '轉向乙舞臺圓心',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['eastWest']
  },
  {
    section: '08 教育',
    title: '【感恩】',
    cue: '—',
    facing: '東西一(水波)：面中央走道之水波弧線 (腳夾線)；東西二(圓)：面乙舞臺之圓心 (腳尖對線)',
    facingEW1: '面中央走道之水波弧線 (腳夾線)',
    facingEW2: '面乙舞臺之圓心 (腳尖對線)',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['eastWest']
  },
  {
    section: '08 教育',
    title: '【藥草喻】',
    cue: '(第三、四天專有)',
    facing: '東西一(水波)：面甲舞臺之水波弧線 (腳尖對線)；東西二(圓)：面乙舞臺之圓心 (腳尖對線)',
    facingEW1: '面甲舞臺之水波弧線 (腳尖對線)',
    facingEW2: '面乙舞臺之圓心 (腳尖對線)',
    sessions: ['1114', '1115'],
    roles: ['eastWest']
  },

  // --- 09-1 人文 ---
  {
    section: '09 人文',
    title: '【父母恩重難報經-因緣】',
    cue: 'OS「在平時」',
    facing: '轉面法師45度',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '09 人文',
    title: '【跪羊圖】',
    cue: '—',
    facing: '面法師45度',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },

  // --- 09-2 人文 ---
  {
    section: '09 人文',
    title: '【慈誠隊歌】',
    cue: '「哨子聲」',
    facing: '台下朝法師45度',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '09 人文',
    title: '【大愛讓世界亮起來】',
    cue: '「為時代作見證」',
    facing: '轉面向主機板箭頭方向',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '09 人文',
    title: '【大愛讓世界亮起來】',
    cue: '「為人類寫歷史」',
    facing: '合掌開綠燈',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '09 人文',
    title: '【天空破了洞】',
    cue: '「啊~」',
    facing: '從甲舞臺轉面向乙舞臺方向',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '09 人文',
    title: '【法譬如水】',
    cue: '「做環保」',
    facing: '轉面向主機板箭頭方向',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '09 人文',
    title: '【代謝不住】',
    cue: '實在「有夠讚」',
    facing: '轉箭頭方向',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '09 人文',
    title: '【代謝不住】',
    cue: '「佛轉法輪」',
    facing: '合掌',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },

  // --- 10 五大洲 ---
  // 開經書 (全場次共通)
  {
    section: '10 五大洲',
    title: '【開經書】',
    cue: '起始接法',
    facing: '藍衣：面乙舞臺圓心接法；白衣：面陸地的圓心',
    facingBlue: '面乙舞臺圓心接法',
    facingWhite: '面陸地的圓心',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['color']
  },
  {
    section: '10 五大洲',
    title: '【開經書】',
    cue: '「去到一切」眾生心',
    facing: '藍衣：身體面法師45度；白衣：維持面陸地圓心',
    facingBlue: '身體面法師45度',
    facingWhite: '面陸地的圓心',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['color']
  },

  // 11/12 (第一天) 專屬五大洲
  {
    section: '10 五大洲',
    title: '【貧中之富-樂生】',
    cue: '—',
    facing: '面甲舞台45度',
    sessions: ['1112', '1115'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【富中之富】',
    cue: '—',
    facing: '面甲舞台45度',
    sessions: ['1112', '1113', '1114', '1115'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【黑區變亮區-第六功德】',
    cue: '—',
    facing: '面觀眾45度',
    sessions: ['1112'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【黑區變亮區-諸惡道險】',
    cue: '—',
    facing: '面法師45度',
    sessions: ['1112'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【約旦-第三功德】',
    cue: '初始',
    facing: '面觀眾45度',
    sessions: ['1112'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【約旦-啟航】',
    cue: '—',
    facing: '藍衣：面甲舞臺45度；白衣：面觀眾45度',
    facingBlue: '面甲舞臺45度',
    facingWhite: '面觀眾45度',
    sessions: ['1112'],
    roles: ['color']
  },
  {
    section: '10 五大洲',
    title: '【台灣救災集錦-第五功德】',
    cue: '—',
    facing: '面台灣 (乙舞臺圓心45度)',
    sessions: ['1112'],
    roles: ['all']
  },

  // 11/13 (第二天) 專屬五大洲
  {
    section: '10 五大洲',
    title: '【土耳其-第三功德】',
    cue: '初始',
    facing: '面觀眾45度',
    sessions: ['1113'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【莫三比克-第八功德】',
    cue: '初始',
    facing: '東二白衣：面陸地中心；東二藍衣/其他藍白衣：面觀眾45度',
    facingBlue: '面觀眾45度',
    facingWhite: '東二白衣：面陸地中心；其他白衣：面觀眾45度',
    facingEW1: '面觀眾45度',
    facingEW2: '東二藍衣：面觀眾45度；東二白衣：面陸地中心',
    sessions: ['1113'],
    roles: ['eastWest', 'color']
  },
  {
    section: '10 五大洲',
    title: '【莫三比克-第八功德】',
    cue: '第二句轉向',
    facing: '東二藍衣：轉向陸地中心；其他藍白衣：轉向法師45度',
    facingBlue: '東二藍衣：轉向陸地中心；其他藍衣：轉向法師45度',
    facingWhite: '東二白衣：面陸地中心；其他白衣：轉向法師45度',
    facingEW1: '轉向法師45度',
    facingEW2: '東二藍衣：轉向陸地中心；東二白衣：面陸地中心',
    sessions: ['1113'],
    roles: ['eastWest', 'color']
  },
  {
    section: '10 五大洲',
    title: '【莫三比克-髻珠喻】',
    cue: '—',
    facing: '面法師45度',
    sessions: ['1113'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【印尼-第九功德】',
    cue: '初始',
    facing: '面觀眾45度',
    sessions: ['1113'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【印尼-菩薩慈悲憫眾生】',
    cue: '—',
    facing: '面法師45度',
    sessions: ['1113'],
    roles: ['all']
  },

  // 11/14 (第三天) 專屬五大洲
  {
    section: '10 五大洲',
    title: '【緬甸-第二功德】',
    cue: '—',
    facing: '面甲舞台45度',
    sessions: ['1114'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【八八風災-第七功德】',
    cue: '—',
    facing: '面法師45度',
    sessions: ['1114'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【八八風災-十在心路】',
    cue: '初始',
    facing: '面甲舞臺45度',
    sessions: ['1114'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【八八風災-十在心路】',
    cue: '「傳頌生命」',
    facing: '轉向陸地中心',
    sessions: ['1114'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【泰北-第四功德】',
    cue: '初始',
    facing: '面甲舞台45度',
    sessions: ['1114'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【泰北-第四功德】',
    cue: '「諸佛護念」',
    facing: '轉向乙舞台圓心',
    sessions: ['1114'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【辛巴威-第八功德】',
    cue: '初始',
    facing: '東二白衣：面陸地中心；東二藍衣/其他藍白衣：面觀眾45度',
    facingBlue: '面觀眾45度',
    facingWhite: '東二白衣：面陸地中心；其他白衣：面觀眾45度',
    facingEW1: '面觀眾45度',
    facingEW2: '東二藍衣：面觀眾45度；東二白衣：面陸地中心',
    sessions: ['1114'],
    roles: ['eastWest', 'color']
  },
  {
    section: '10 五大洲',
    title: '【辛巴威-第八功德】',
    cue: '第二句轉向',
    facing: '東二藍衣：轉向陸地中心；其他藍白衣：轉向法師45度',
    facingBlue: '東二藍衣：轉向陸地中心；其他藍衣：轉向法師45度',
    facingWhite: '東二白衣：面陸地中心；其他白衣：轉向法師45度',
    facingEW1: '轉向法師45度',
    facingEW2: '東二藍衣：轉向陸地中心；東二白衣：面陸地中心',
    sessions: ['1114'],
    roles: ['eastWest', 'color']
  },
  {
    section: '10 五大洲',
    title: '【辛巴威-髻珠喻】',
    cue: '—',
    facing: '面法師45度',
    sessions: ['1114'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【辛巴威-生生世世】',
    cue: '—',
    facing: '面甲舞臺45度',
    sessions: ['1114'],
    roles: ['all']
  },

  // 11/15 (第四天) 專屬五大洲
  {
    section: '10 五大洲',
    title: '【九二一-第九功德】',
    cue: '—',
    facing: '面觀眾45度',
    sessions: ['1115'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【九二一-化城】',
    cue: '—',
    facing: '面法師45度',
    sessions: ['1115'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【九二一-諸惡道險】',
    cue: '—',
    facing: '面法師45度',
    sessions: ['1115'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【減災工程-許一個希望的未來】',
    cue: 'OS「感恩」慈濟援建…',
    facing: '從甲舞臺轉背向陸地中心',
    sessions: ['1115'],
    roles: ['all']
  },
  {
    section: '10 五大洲',
    title: '【佛國-仰師德範】',
    cue: '—',
    facing: '藍衣：面法師45度；白衣：背向圓心',
    facingBlue: '面法師45度',
    facingWhite: '背向圓心',
    sessions: ['1115'],
    roles: ['color']
  },
  {
    section: '10 五大洲',
    title: '【佛國-第十功德】',
    cue: '—',
    facing: '依照各區塊面向',
    sessions: ['1115'],
    roles: ['all']
  }
];

// 匯出（Node環境相容）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FACING_HINTS_DATA;
}
