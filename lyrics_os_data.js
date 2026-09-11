// 大巨蛋演繹段歌詞與 OS 內容資料庫 (依據 0909 PDF 產生，支援多場次動態過濾與精確劇本排版)
const LYRICS_OS_DATA = [
  {
    "id": "sec_1",
    "title": "【序 曲目：無量義經．德行品】",
    "formationKey": "circle",
    "formationLabel": "01圓形 (序/生老病死/六度)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/01序.mp3",
    "videos": [],
    "lines": [
      {
        "text": "法師：靈山法會不散(轉面向乙舞台圓心)",
        "type": "dialogue",
        "segments": [
          {
            "text": "法師：靈山法會不散",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(轉面向乙舞台圓心) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "無量義經廣傳",
        "type": "lyrics",
        "segments": [
          {
            "text": "無量義經廣傳 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "(法師)其心禪寂常在三昧",
        "type": "lyrics",
        "segments": [
          {
            "text": "(法師)其心禪寂常在三昧 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "恬安澹泊無為無欲",
        "type": "lyrics",
        "segments": [
          {
            "text": "恬安澹泊無為無欲  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "顛倒亂想不復得入",
        "type": "lyrics",
        "segments": [
          {
            "text": "顛倒亂想不復得入 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "(全場入經藏.萬人唱頌)",
        "type": "annotation",
        "segments": [
          {
            "text": "(全場入經藏.萬人唱頌) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "靜寂清澄志玄虛漠 守之不動億百千劫 無量法門悉現在前 得大智慧通達諸法",
        "type": "lyrics",
        "segments": [
          {
            "text": "靜寂清澄志玄虛漠 守之不動億百千劫 無量法門悉現在前 得大智慧通達諸法 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "曉了分別性相真實 有無長短明現顯白 又能善知諸根性欲 以陀羅尼無礙辯才",
        "type": "lyrics",
        "segments": [
          {
            "text": "曉了分別性相真實 有無長短明現顯白 又能善知諸根性欲 以陀羅尼無礙辯才 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "請佛轉法輪",
        "type": "lyrics",
        "segments": [
          {
            "text": "請佛轉法輪 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_2",
    "title": "【生】",
    "formationKey": "circle",
    "formationLabel": "01圓形 (序/生老病死/六度)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/02生.mp3",
    "videos": [],
    "lines": [
      {
        "text": "侍衛：啟稟國王 母子均安",
        "type": "dialogue",
        "segments": [
          {
            "text": "侍衛：啟稟國王 母子均安 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "國王：太好了 太好了 昭告全境，本王要大肆慶祝 遵命",
        "type": "dialogue",
        "segments": [
          {
            "text": "國王：太好了 太好了 昭告全境，本王要大肆慶祝 遵命 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "入經藏：恭喜國王、賀喜國王！",
        "type": "dialogue",
        "segments": [
          {
            "text": "入經藏：",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "恭喜國王、賀喜國王！",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "報～～～天臂城 入經藏：前來祝賀！",
        "type": "lyrics",
        "segments": [
          {
            "text": "報～～～天臂城 入經藏：",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "前來祝賀！",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "報～～～拘薩羅國、摩竭陀國 入經藏：前來獻禮！",
        "type": "lyrics",
        "segments": [
          {
            "text": "報～～～拘薩羅國、摩竭陀國 入經藏：",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "前來獻禮！",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "報～～～般闍羅國、迦尸國 入經藏：前來祝賀！",
        "type": "lyrics",
        "segments": [
          {
            "text": "報～～～般闍羅國、迦尸國 入經藏：",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "前來祝賀！ ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "報～～～鴦迦國、跋羅國 入經藏：前來獻禮！",
        "type": "lyrics",
        "segments": [
          {
            "text": "報～～～鴦迦國、跋羅國 入經藏：",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "前來獻禮！ ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "淨飯王：哈哈 哈哈哈！同喜，同喜！(回正)",
        "type": "dialogue",
        "segments": [
          {
            "text": "淨飯王：哈哈 哈哈哈！同喜，同喜！",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(回正)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_3",
    "title": "【老 曲目：佛陀的一生．老苦】",
    "formationKey": "circle",
    "formationLabel": "01圓形 (序/生老病死/六度)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/03老.mp3",
    "videos": [],
    "lines": [
      {
        "text": "os 難道我的一生就這樣度過了嗎?你將來要繼承王位(轉面向乙舞台圓心)，應當去看看這",
        "type": "os",
        "segments": [
          {
            "text": "os 難道我的一生就這樣度過了嗎?你將來要",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "繼承王位",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(轉面向乙舞台圓心)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "，應當去看看這",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "片由你守護的國土",
        "type": "lyrics",
        "segments": [
          {
            "text": "片由你守護的國土 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "流逝光陰、侵吞餘命、不應失真(白髮散亂、舉步艱難)、虛度此生(氣力漸消、身形慢)，老",
        "type": "lyrics",
        "segments": [
          {
            "text": "流逝光陰、侵吞餘命、不應失真",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(白髮散亂、舉步艱難)",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "、虛度此生",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(氣力漸消、身形慢)",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "，老",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "去的苦悶，分秒蹉跎的警鐘。os 老，苦啊~~~~!(回正)",
        "type": "lyrics",
        "segments": [
          {
            "text": "去的苦悶，分秒蹉跎的警鐘。",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "os 老，",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "苦啊~~~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "!",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(回正) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_4",
    "title": "【病 曲目：佛陀的一生．病苦】",
    "formationKey": "circle",
    "formationLabel": "01圓形 (序/生老病死/六度)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/04病.mp3",
    "videos": [],
    "lines": [
      {
        "text": "os 失神喪志，呻吟哀嘆，骨瘦呤叮毀容顏",
        "type": "os",
        "segments": [
          {
            "text": "os 失神喪志，呻吟哀嘆，骨瘦呤叮毀容顏",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "病症摧殘、身心扭轉、惡道苦報、真實上演，患病的苦難，無常環伺的凶險。",
        "type": "lyrics",
        "segments": [
          {
            "text": "病症摧殘、身心扭轉、惡道苦報、真實上演，患病的苦難，無常環伺的凶險。 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "os 病，苦啊~~~~~~!(回正)",
        "type": "os",
        "segments": [
          {
            "text": "os 病，",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "苦啊~~~~~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "!",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(回正) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_5",
    "title": "【死 曲目：佛陀的一生．死苦】",
    "formationKey": "circle",
    "formationLabel": "01圓形 (序/生老病死/六度)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/05死.mp3",
    "videos": [],
    "lines": [
      {
        "text": "os 命有限，難拖延，貧富窮通同一般",
        "type": "os",
        "segments": [
          {
            "text": "os 命有限，難拖延，貧富窮通同一般",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "人生苦短、無可愛戀、壽終必然、誰能避免，死亡的苦嘆，醒思生命的意涵",
        "type": "lyrics",
        "segments": [
          {
            "text": "人生苦短、無可愛戀、壽終必然、誰能避免，死亡的苦嘆，醒思生命的意涵 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "os 生命何義(合十轉面向法師腳夾線)，人生何價",
        "type": "os",
        "segments": [
          {
            "text": "os",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " 生命何義",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(合十轉面向法師腳夾線)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "，人生何價 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "北門前(大聲唱) 竹林間 修行道人相莊嚴 夜深人靜離宮殿 不悟真理誓不還",
        "type": "lyrics",
        "segments": [
          {
            "text": "北門前",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(大聲唱)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 竹林間 修行道人相莊嚴 夜深人靜離宮殿 不悟真理誓不還 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "os 我要為眾生尋求解脫之道(手放)",
        "type": "os",
        "segments": [
          {
            "text": "os 我要為眾生尋求解脫之道",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(手放) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_6",
    "title": "【六度 曲目：佛陀的一生．轉法輪】",
    "formationKey": "circle",
    "formationLabel": "01圓形 (序/生老病死/六度)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/06六度.mp3",
    "videos": [],
    "lines": [
      {
        "text": "為應菩薩大根機  再說六度(合十)波羅蜜(黃老師OS：去除無明行六度(轉))",
        "type": "lyrics",
        "segments": [
          {
            "text": "為應菩薩大根機  再說六度",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(合十)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "波羅蜜(黃老師OS：去除無明行六度",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(轉)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": ")   ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "開示悟入(布施 持戒 理契機) 悲智願行(忍辱 精進 緊相繫)",
        "type": "lyrics",
        "segments": [
          {
            "text": "開示悟入(",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "布施 持戒",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " 理契機) 悲智願行(",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "忍辱 精進",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " 緊相繫) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "運載群(厚生)",
        "type": "lyrics",
        "segments": [
          {
            "text": "運載群(厚生) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "(禪定 智慧 無明離)",
        "type": "annotation",
        "segments": [
          {
            "text": "(",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "禪定 智慧",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " 無明離)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "清淨了悟",
        "type": "lyrics",
        "segments": [
          {
            "text": "清淨了悟 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "真實義",
        "type": "lyrics",
        "segments": [
          {
            "text": "真實義 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "黃老師OS：轉識成智(回正) 成(出右腳合十往上)佛道",
        "type": "dialogue",
        "segments": [
          {
            "text": "黃老師OS：轉識成",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "智",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(回正)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "成",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(出右腳合十往上)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "佛道 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "鳩摩羅什譯經：我今稽首盡無疑 翻譯佛法 佛法永傳(轉向甲舞台東側)",
        "type": "lyrics",
        "segments": [
          {
            "text": "鳩摩羅什譯經：我今稽首盡無疑 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "翻譯佛法 佛法永傳",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(轉向甲舞台東側)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "玄奘西行取經：西行取經五萬里~~不到天竺 絕不回頭 寧向西方一步死",
        "type": "lyrics",
        "segments": [
          {
            "text": "玄奘西行取經：西行取經五萬里~~不到天竺 絕不回頭 寧向西方一步死  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "不朝東土半步生 矢志 矢志 終不移 西取佛法 佛法永傳(轉向乙舞台)",
        "type": "lyrics",
        "segments": [
          {
            "text": "不朝東土半步生 矢志 矢志 終不移 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "西取佛法 佛法永傳",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(轉向乙舞台)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "鑑真東傳佛法：不至日本(500 人上) 本願不遂 生死以赴 何懼千百度 東傳佛法 佛法永",
        "type": "lyrics",
        "segments": [
          {
            "text": "鑑真東傳佛法：",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "不至日本",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(500 人上)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 本願不遂 生死以赴 何懼千百度 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "東傳佛法 佛法永",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "傳(轉向行願方向)",
        "type": "lyrics",
        "segments": [
          {
            "text": "傳",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(轉向行願方向)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_7",
    "title": "【行願 曲目：行願】",
    "formationKey": "xingYuan",
    "formationLabel": "02行願 (行願/開經偈)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/07行願+開經偈.mp3",
    "videos": [],
    "lines": [
      {
        "text": "海濤(厚澎湃)",
        "type": "lyrics",
        "segments": [
          {
            "text": "海濤(厚澎湃) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "駭浪(厚洶湧)",
        "type": "lyrics",
        "segments": [
          {
            "text": "駭浪(厚洶湧) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "心志(厚已付)",
        "type": "lyrics",
        "segments": [
          {
            "text": "心志(厚已付) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "身隨之赴(厚)",
        "type": "lyrics",
        "segments": [
          {
            "text": "身隨之赴(厚)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "守之不動 去去去",
        "type": "lyrics",
        "segments": [
          {
            "text": "守之不動 去去去 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "億百千劫 (厚走)走走",
        "type": "lyrics",
        "segments": [
          {
            "text": "億百千劫 (厚走)走走  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "守之不動 行行行",
        "type": "lyrics",
        "segments": [
          {
            "text": "守之不動 行行行 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "億百千劫 (厚進)進進",
        "type": "lyrics",
        "segments": [
          {
            "text": "億百千劫 (厚進)進進 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "守之不動 信",
        "type": "lyrics",
        "segments": [
          {
            "text": "守之不動 信   ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "億百千劫 願",
        "type": "lyrics",
        "segments": [
          {
            "text": "億百千劫 願 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "守之不動 行",
        "type": "lyrics",
        "segments": [
          {
            "text": "守之不動 行 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "佛 法 廣 傳 在 人 間  行~~願",
        "type": "lyrics",
        "segments": [
          {
            "text": "佛 法 廣 傳 在 人 間  行~~願 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_8",
    "title": "【開經偈】",
    "formationKey": "xingYuan",
    "formationLabel": "02行願 (行願/開經偈)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/07行願+開經偈.mp3",
    "videos": [],
    "lines": [
      {
        "text": "千百(合十)億劫以來",
        "type": "lyrics",
        "segments": [
          {
            "text": "千百",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(合十)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "億劫以來  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "仿若實境再現",
        "type": "lyrics",
        "segments": [
          {
            "text": "仿若實境再現   ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "仿若實境再現(開綠燈)",
        "type": "lyrics",
        "segments": [
          {
            "text": "仿若實境再",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "現",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(開綠燈)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "無上甚深微妙法",
        "type": "lyrics",
        "segments": [
          {
            "text": "無上甚深微妙法 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "百千萬劫難遭遇",
        "type": "lyrics",
        "segments": [
          {
            "text": "百千萬劫難遭遇 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "我今見聞得受持",
        "type": "lyrics",
        "segments": [
          {
            "text": "我今見聞得受持 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "願解如來真實義",
        "type": "lyrics",
        "segments": [
          {
            "text": "願解如來真實義",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_9",
    "title": "【扛天下米籮 無量義經．德行品】",
    "formationKey": "miLuo",
    "formationLabel": "03米籮 (扛天下米籮)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/08扛天下米籮.mp3",
    "videos": [],
    "lines": [
      {
        "text": "os 只要有人間菩薩，貧窮與苦難的人，就有機會得到救助，我要把佛法推向人間",
        "type": "os",
        "segments": [
          {
            "text": "os 只要有人間菩薩，貧窮與苦難的人，就有機會得到救助，我要把佛法推向人間 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "無上大乘 潤漬眾生",
        "type": "lyrics",
        "segments": [
          {
            "text": "無上大乘 潤漬眾生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "諸有善根",
        "type": "lyrics",
        "segments": [
          {
            "text": "諸有善根 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "布善種(厚子)",
        "type": "lyrics",
        "segments": [
          {
            "text": "布善種(厚子) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "遍功德(厚田)",
        "type": "lyrics",
        "segments": [
          {
            "text": "遍功德(厚田) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "普令一(厚切)",
        "type": "lyrics",
        "segments": [
          {
            "text": "普令一(厚切) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "發菩提(厚萌)",
        "type": "lyrics",
        "segments": [
          {
            "text": "發菩提(厚萌) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "智慧日月",
        "type": "lyrics",
        "segments": [
          {
            "text": "智慧日月 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "方便時節",
        "type": "lyrics",
        "segments": [
          {
            "text": "方便時節 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "扶踈增長",
        "type": "lyrics",
        "segments": [
          {
            "text": "扶踈增長 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "大乘事業",
        "type": "lyrics",
        "segments": [
          {
            "text": "大乘事業 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "我決定要消滅貧窮 扛天下米籮",
        "type": "lyrics",
        "segments": [
          {
            "text": "我決定要",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "消滅",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "貧窮",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "扛天下米籮 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "讓人人力行 菩薩道",
        "type": "lyrics",
        "segments": [
          {
            "text": "讓人人力行",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "菩薩道",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_10",
    "title": "【靜思家風】",
    "formationKey": "jingSi",
    "formationLabel": "04靜思家風 (靜思家風)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/09靜思家風.mp3",
    "videos": [],
    "lines": [
      {
        "text": "os 你去煮麵線(上舞台)，多煮一些，吃完才會飽，啊油要多放一些，胃比較舒服。下一",
        "type": "os",
        "segments": [
          {
            "text": "os",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " 你去煮麵線",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(上舞台)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "，多煮一些，吃完才會飽，啊油要多放一些，胃比較舒服。下一",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "餐都不知道在哪裡？油和麵線先去和普明寺借，割草的工資是借的，啊這!又要借，",
        "type": "lyrics",
        "segments": [
          {
            "text": "餐都不知道在哪裡？油和麵線先去和普明寺借，割草的工資是借的，啊這!又要借，",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "借的 難道不用還嗎，我的師父 自己沒得吃，卻是念念眾生的苦，嗯!我認定(合十轉向)",
        "type": "lyrics",
        "segments": [
          {
            "text": "借的 難道不用還嗎，我的師父 自己沒得吃，卻是念念眾生的苦，嗯!",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "我認定",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(合十轉向)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "這個師父了",
        "type": "lyrics",
        "segments": [
          {
            "text": "這個師父了 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "靜思家風",
        "type": "lyrics",
        "segments": [
          {
            "text": "靜思家風 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "一日不作",
        "type": "lyrics",
        "segments": [
          {
            "text": "一日不作 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "一日不食",
        "type": "lyrics",
        "segments": [
          {
            "text": "一日不食 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "法身大士",
        "type": "lyrics",
        "segments": [
          {
            "text": "法身大士 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "慈悲菩薩",
        "type": "lyrics",
        "segments": [
          {
            "text": "慈悲菩薩 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "其心禪寂",
        "type": "lyrics",
        "segments": [
          {
            "text": "其心禪寂 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "常在三昧",
        "type": "lyrics",
        "segments": [
          {
            "text": "常在三昧 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "恬安淡泊",
        "type": "lyrics",
        "segments": [
          {
            "text": "恬安淡泊 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "無為無欲",
        "type": "lyrics",
        "segments": [
          {
            "text": "無為無欲 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "顛倒亂想",
        "type": "lyrics",
        "segments": [
          {
            "text": "顛倒亂想 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "不復得入",
        "type": "lyrics",
        "segments": [
          {
            "text": "不復得入 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "克勤 克儉 克難 菩薩行",
        "type": "lyrics",
        "segments": [
          {
            "text": "克勤 克儉 克難 菩薩行 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "守志奉道",
        "type": "lyrics",
        "segments": [
          {
            "text": "守志奉道 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "刻苦修行",
        "type": "lyrics",
        "segments": [
          {
            "text": "刻苦修行 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_11",
    "title": "【點一盞燈】",
    "formationKey": "lamp",
    "formationLabel": "05-1有法船 (點一盞燈)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/10點一盞燈.mp3",
    "videos": [],
    "lines": [
      {
        "text": "os 三十位家庭主婦連署慰留，師父 我們需要您(合十轉面向正確方向)，如果你們願意幫",
        "type": "os",
        "segments": [
          {
            "text": "os 三十位家庭主婦連署慰留，師父",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "我們需要您",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(合十轉面",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "向正確方向)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "，",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "如果你們願意幫",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "助我(開燈/需要者拿花)做救濟的工作，我就永遠不離開花蓮(跪/預備動作)",
        "type": "lyrics",
        "segments": [
          {
            "text": "助我",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(開",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "燈/需要者拿花)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "做救濟的工作，",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "我就永遠不離開花蓮",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(跪/預備動作) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "音效 登(浪坐跪抬頭)",
        "type": "lyrics",
        "segments": [
          {
            "text": "音效 登",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": true,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "77206D"
          },
          {
            "text": "(浪坐跪抬頭)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "在黑暗角落 點一盞燈  慈悲智慧的化身",
        "type": "lyrics",
        "segments": [
          {
            "text": "在黑暗角落 點一盞燈  慈悲智慧的化身  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "在淒寒路上 生一堆火",
        "type": "lyrics",
        "segments": [
          {
            "text": "在淒寒路上 生一堆火 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "但願眾生得離苦",
        "type": "lyrics",
        "segments": [
          {
            "text": "但願眾生得離苦 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "廣披天下盡歡顏",
        "type": "lyrics",
        "segments": [
          {
            "text": "廣披天下盡歡顏 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_12",
    "title": "【菜市場的五毛錢】",
    "formationKey": "noBoat",
    "formationLabel": "05-2無法船 (菜市場5毛錢)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/11菜市場五毛錢.mp3",
    "videos": [],
    "lines": [
      {
        "text": "os 我希望成立救貧的功德會，我們沒有錢 要怎麼救，我們六個人，每天多做一雙嬰",
        "type": "os",
        "segments": [
          {
            "text": "os 我希望成立救貧的功德會，我們沒有錢 要怎麼救，我們六個人，每天多做一雙嬰",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "兒鞋，一年就有八千多元，可以幫助這位難產的婦人，你們每天只要節省五毛錢，我",
        "type": "lyrics",
        "segments": [
          {
            "text": "兒鞋，一年就有八千多元，可以幫助這位難產的婦人，你們每天只要節省五毛錢，我",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "們一起來做善事，什麼 一個人只要捐五毛錢，唉喲！這簡單啦，我叫我媳婦買菜的",
        "type": "lyrics",
        "segments": [
          {
            "text": "們一起來做善事，什麼 一個人只要捐五毛錢，唉喲！這簡單啦，我叫我媳婦買菜的",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "時候，少買五毛錢就好了，哎呀 這太棒啦！",
        "type": "lyrics",
        "segments": [
          {
            "text": "時候，少買五毛錢就好了，哎呀 這太棒啦！ ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "音效 登(中央走道千手上) 菜市場吵雜聲",
        "type": "lyrics",
        "segments": [
          {
            "text": "音效 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": true,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "77206D"
          },
          {
            "text": "登",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": true,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "77206D"
          },
          {
            "text": "(中央走道千手上)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 菜市場吵雜聲 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": true,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "77206D"
          }
        ]
      },
      {
        "text": "來唷 來唷 來買菜唷，快來買菜唷，老闆 我要買這樣菜啦，但是我要減買五毛錢",
        "type": "lyrics",
        "segments": [
          {
            "text": "來唷 來唷 來買菜唷，快來買菜唷，老闆 我要買這樣菜啦，但是我要減買五毛錢",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "喔，為什麼要減買五毛錢，五毛錢可以救人耶，我也要減買五毛錢，這五毛錢可以救",
        "type": "lyrics",
        "segments": [
          {
            "text": "喔，為什麼要減買五毛錢，五毛錢可以救人耶，我也要減買五毛錢，這五毛錢可以救",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "人耶，我也要減買五毛錢，五毛錢喔可以救人耶",
        "type": "lyrics",
        "segments": [
          {
            "text": "人耶，我也要減買五毛錢，五毛錢喔可以救人耶 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "菜販：唉喲！只要五毛錢就可以救人喔！這樣我也要 (1)！",
        "type": "dialogue",
        "segments": [
          {
            "text": "菜販：唉喲！只要五毛錢就可以救人喔！這樣",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "我也要 (1)！",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "會眾戊：五角銀就可以救人喔！這樣我也要參加(2)！",
        "type": "lyrics",
        "segments": [
          {
            "text": "會眾戊：五角銀就可以救人喔！這樣",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "我也要參加(2)！",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "會眾己：五角銀就可以救人喔！這樣我也要參加(3)！",
        "type": "lyrics",
        "segments": [
          {
            "text": "會眾己：五角銀就可以救人喔！這樣",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "我也要參加(3)！",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "會眾群體：我也要參加(演員)！",
        "type": "lyrics",
        "segments": [
          {
            "text": "會眾群體：",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "我也要參加(演員)！ ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "為籌慈濟金菜市場的五毛錢，那一念，如果可以集合五百人，就是一個團體，就是一",
        "type": "lyrics",
        "segments": [
          {
            "text": "為籌慈濟金",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "菜市場的五毛錢，那一念，如果可以集合五百人，就是一個團體，就是一",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "尊千手觀音，可以及時救拔苦難(手放)",
        "type": "lyrics",
        "segments": [
          {
            "text": "尊千手觀音，可以及時",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "救拔苦難",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(手放) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_13",
    "title": "【慈善ending 無量義經．德行品】",
    "formationKey": "noBoat3",
    "formationLabel": "05-3無法船3 / 有法船3",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/12圍爐_是諸眾生.mp3",
    "videos": [],
    "lines": [
      {
        "text": "(11/12、14 場次)",
        "type": "annotation",
        "segments": [
          {
            "text": "(11/12、14 場次) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "os 唉唷 怎麼幫我們想的這麼周到(開燈/需要者拿花)，我們是全世界最大的家庭啦(一說完",
        "type": "os",
        "segments": [
          {
            "text": "os 唉唷 怎麼幫我們想的這麼",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "周到",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(開燈/需要者拿花)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "，我們是全世界",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "最大的家庭啦",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(一說完",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "轉面向正確方向/該跪者跪)",
        "type": "lyrics",
        "segments": [
          {
            "text": "轉面向正確方向/該跪者跪)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "(11/13、15 場次)",
        "type": "annotation",
        "segments": [
          {
            "text": "(11/13、15 場次) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "os 有一次精舍發放時，米袋的米掉了出來!ㄟ 啊搭 啊這米甕，唉呦 米甕是在哪裡啦",
        "type": "os",
        "segments": [
          {
            "text": "os 有一次精舍發放時，米袋的米掉了出來!ㄟ 啊搭 啊這米甕，唉呦 米甕是在哪裡啦 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "啊?找米甕是要做什麼?啊 這米袋喔米都漏出來啦，嘿 啊我就這樣喔，就把它撿一撿",
        "type": "lyrics",
        "segments": [
          {
            "text": "啊?找米甕是要做什麼?啊 這米袋喔米都漏出來啦，嘿 啊我就這樣喔，就把它撿一撿",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "喔，來把它放到米甕，這是功德會的米，不能放在精舍的米甕裡面，一粒米都不行，",
        "type": "lyrics",
        "segments": [
          {
            "text": "喔，來把它放到米甕，這是功德會的米，不能放在精舍的米甕裡面，一粒米都不行，",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "啊這功德會和精舍不都是一樣，在精舍吃的是精舍的米，貧戶領的是功德會買的米，",
        "type": "lyrics",
        "segments": [
          {
            "text": "啊這功德會和精舍不都是一樣，在精舍吃的是精舍的米，貧戶領的是功德會買的米，",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "要分清楚",
        "type": "lyrics",
        "segments": [
          {
            "text": "要分清楚 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "我來跟大家說一個故事(大魚的故事~~)~~~~~~",
        "type": "lyrics",
        "segments": [
          {
            "text": "我來跟大家說一個故事(大魚的故事~~)~~~~~~ ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "菩薩所緣(上舞台)，緣苦眾生，這是我的願 你吃我的肉，啃我的骨，彼此結下師徒法",
        "type": "lyrics",
        "segments": [
          {
            "text": "菩薩所緣",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(上舞台)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "，緣苦眾生，這是我的願 你吃我的肉，啃我的骨，彼此結下師徒法",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "緣，但願將來一起為天下(開燈/要跪的合掌跪)苦難人付出，立行菩薩道(坐跪者坐)",
        "type": "lyrics",
        "segments": [
          {
            "text": "緣，但願將來一起為",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "天下",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(開燈/要跪的合掌跪)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "苦難人付出，立行",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "菩薩道",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(坐跪者坐)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "是諸眾生真善知識 是諸眾生大良福田 是諸眾生不請之師 是諸眾生安隱樂處",
        "type": "lyrics",
        "segments": [
          {
            "text": "是諸眾生真善知識 是諸眾生大良福田 是諸眾生不請之師 是諸眾生安隱樂處 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "救處護處大依止處 處處為眾作大導師 能為生盲作眼目",
        "type": "lyrics",
        "segments": [
          {
            "text": "救處護處大依止處 處處為眾作大導師 能為生盲作眼目  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "為癲狂慌亂作正念",
        "type": "lyrics",
        "segments": [
          {
            "text": "為癲狂慌亂作正念 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_14",
    "title": "【地藏經啟航 曲目：地藏經．啟航】",
    "formationKey": "bigV",
    "formationLabel": "06四弘誓願 (地藏/四弘誓願)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/13醫療_地藏經.mp3",
    "videos": [],
    "lines": [
      {
        "text": "病苦眾生在呐喊",
        "type": "lyrics",
        "segments": [
          {
            "text": "病苦眾生在呐喊 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "人間地獄悉現前",
        "type": "lyrics",
        "segments": [
          {
            "text": "人間地獄悉現前 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "貧病相因必須斷  促成建院的因緣",
        "type": "lyrics",
        "segments": [
          {
            "text": "貧病相因必須斷  促成建院的因緣 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_15",
    "title": "【四弘誓願】",
    "formationKey": "bigV",
    "formationLabel": "06四弘誓願 (地藏/四弘誓願)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/14四弘誓願.mp3",
    "videos": [],
    "lines": [
      {
        "text": "os 1979 年7 月8 日，全省委員聯誼會上宣布建院，建院也有我們痲瘋病人這塊磚",
        "type": "os",
        "segments": [
          {
            "text": "os 1979 年7 月8 日，全省委員聯誼會上宣布建院，建院也有我們痲瘋病人這塊磚",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "耶，頭家啊！我都在幫別人打掃家裡，我來幫你打掃家裡，不管要做多久，你給我三",
        "type": "lyrics",
        "segments": [
          {
            "text": "耶，頭家啊！我都在幫別人打掃家裡，我來幫你打掃家裡，不管要做多久，你給我三",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "十萬，我想要幫助 上人蓋醫院啦，師父要蓋醫院我就要少吃少睡，天還沒亮，我就",
        "type": "lyrics",
        "segments": [
          {
            "text": "十萬，我想要幫助 上人蓋醫院啦，師父要蓋醫院我就要少吃少睡，天還沒亮，我就",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "要趕快去掃華中橋，我要賺錢來救人啊，我捐水泥 我們來捐鋼筋，我們要用掘井人",
        "type": "lyrics",
        "segments": [
          {
            "text": "要趕快去掃華中橋，我要賺錢來救人啊，我捐水泥 我們來捐鋼筋，我們要用掘井人",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "的精神來蓋醫院，永續慈善的活水，師父啊 您怎麼說 我們就怎麼做(上舞台)，慈濟人",
        "type": "lyrics",
        "segments": [
          {
            "text": "的精神來蓋醫院，永續慈善的活水，師父啊 您怎麼說 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "我們就怎麼做",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(上舞台)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "，",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "慈濟人",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "對師父行，聽說蓋醫院，需要六億到八億的預算，現在是募到多少錢了，老實說 三",
        "type": "lyrics",
        "segments": [
          {
            "text": "對師父行",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "，聽說蓋醫院，需要六億到八億的預算，現在是募到多少錢了，老實說 三",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "千萬還不到，啊 才三千萬，明天就要動土了，不過萬里長城(轉向)，也是從一塊磚開",
        "type": "lyrics",
        "segments": [
          {
            "text": "千萬還不到，啊 才三千萬，明天就要動土了，不過",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "萬里長城",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(轉向)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "，也是從一塊磚開",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "始 四 弘 誓 願",
        "type": "lyrics",
        "segments": [
          {
            "text": "始 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "四 弘 誓 願 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "眾生無邊誓願(厚度) 煩惱無盡誓願(厚斷) 法門無量誓願(厚學)",
        "type": "lyrics",
        "segments": [
          {
            "text": "眾生無邊誓願(厚度) 煩惱無盡誓願(厚斷) 法門無量誓願(厚學)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "佛道無上誓願成",
        "type": "lyrics",
        "segments": [
          {
            "text": "佛道無上誓願成 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "誠心 正心 信心 實心",
        "type": "lyrics",
        "segments": [
          {
            "text": "誠心 正心 信心 實心   ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "度眾生 斷煩惱 學法門 成佛道",
        "type": "lyrics",
        "segments": [
          {
            "text": "度眾生 斷煩惱 學法門 成佛道  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "os 如果心血有形，醫院的每一塊磚，每一寸土地，都是用心血澆灌而成",
        "type": "os",
        "segments": [
          {
            "text": "os 如果心血有形，醫院的每一塊磚，每一寸土地，都是用心血澆灌而成 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_16",
    "title": "【拉繩 曲目：髻珠喻經文手札】",
    "formationKey": "daChuanShi",
    "formationLabel": "07-1大船師 (拉繩/德行品/大醫王)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/15拉繩-船師大船師梵唄.mp3",
    "videos": [],
    "lines": [
      {
        "text": "os 土地找了一年多沒有著落，怎麼向捐款人交待，如果醫院蓋不成，我要把三千多",
        "type": "os",
        "segments": [
          {
            "text": "os 土地找了一年多沒有著落，怎麼向捐款人交待，如果醫院蓋不成，我要把三千多",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "萬捐款一一退還，這一鏟下去，每半個月，需支付一次工資",
        "type": "lyrics",
        "segments": [
          {
            "text": "萬捐款一一退還，這一鏟下去，每半個月，需支付一次工資 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "人間菩薩 你就是我要找尋的良醫 (大慈大悲)，師父!我的身體裏藏著一顆不定時炸彈(身",
        "type": "lyrics",
        "segments": [
          {
            "text": "人間菩薩 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "你就是我要找尋的良醫",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " (大慈大悲)",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "，師父!我的身體裏藏著一顆不定時炸彈",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(身",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "口意)，不只你有，我的心臟病也是不定時炸彈(清淨拔苦入人群)，無論生命有多長，我",
        "type": "lyrics",
        "segments": [
          {
            "text": "口意)",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "，不只你有，我的心臟病也是不定時炸彈",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(清淨拔苦入人群)",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "，無論生命有多長，我",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "們更要分秒必爭(柔善能忍如大地) 不存驕慢心 使諸惡盡 善護有情 誓願度眾生 誓願斷",
        "type": "lyrics",
        "segments": [
          {
            "text": "們更要分秒必爭",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(柔善能忍如大地) 不存驕慢心 使諸惡盡 善護有情 誓願度眾生 誓願斷",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "煩惱 誓願學法門 誓願成佛道",
        "type": "lyrics",
        "segments": [
          {
            "text": "煩惱 誓願學法門 誓願成佛道 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_17",
    "title": "【醫療德行品梵唄 曲目：德行品梵唄】",
    "formationKey": "daChuanShi",
    "formationLabel": "07-1大船師 (拉繩/德行品/大醫王)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/15拉繩-船師大船師梵唄.mp3",
    "videos": [],
    "lines": [
      {
        "text": "人生最苦 莫過於(該跪高跪)病苦！人生最珍貴 莫過於生命！",
        "type": "lyrics",
        "segments": [
          {
            "text": "人生最苦 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "莫過於",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(該跪高跪)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "病苦！人生最珍貴 莫過於生命！ ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "船師(搭肩) 大船師 運(迅速呈現高低動作)載群生 渡生死河 置涅槃岸",
        "type": "lyrics",
        "segments": [
          {
            "text": "船師",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(搭肩)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 大船師 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "運",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(迅速呈現高低動作)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "載群生 渡生死河 置涅槃岸 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "醫王 大醫王 分別病相 曉了藥性  隨病授藥",
        "type": "lyrics",
        "segments": [
          {
            "text": "醫王 大醫王 分別病相 曉了藥性  隨病授藥 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "令眾(藍衣跪者坐跪)樂服(藍高跪白坐跪)",
        "type": "lyrics",
        "segments": [
          {
            "text": "令眾",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(藍衣跪者坐跪)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "樂服",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(藍高跪白坐跪)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "調御大調御(右手) 無諸放逸行 猶如象馬師 能調無不調",
        "type": "lyrics",
        "segments": [
          {
            "text": "調御大調",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "御",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(右手)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 無諸放逸行 猶如象馬師 能調無不調  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "師子勇猛",
        "type": "lyrics",
        "segments": [
          {
            "text": "師子勇猛 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "威伏眾獸 難可沮壞(白高跪)",
        "type": "lyrics",
        "segments": [
          {
            "text": "威伏眾獸 難可",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "沮壞",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(白高跪)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_18",
    "title": "【大醫王 曲目：無量義經．德行品】",
    "formationKey": "daChuanShi",
    "formationLabel": "07-1大船師 (拉繩/德行品/大醫王)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/16 大醫王.mp3",
    "videos": [],
    "lines": [
      {
        "text": "os 大醫王(跑隊形)除了拯救他們的病痛，更不忘啟發他們心靈的良能，從臺灣出發 擴",
        "type": "os",
        "segments": [
          {
            "text": "os",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " 大醫王",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(跑隊形)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "除了拯救他們的病痛，更不忘啟發他們心靈的良能，從臺灣出發 擴",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "展至全世界，讓善的循環永不間斷，每個病人都是我們的親人，病人也是我們的老師",
        "type": "lyrics",
        "segments": [
          {
            "text": "展至全世界，讓善的循環永不間斷，每個病人都是我們的親人，病人也是我們的老師 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "我們共同的使命就是 守護生命(右手) 守護健康(左手)  守護愛 (~~~船雙手放)",
        "type": "lyrics",
        "segments": [
          {
            "text": "我們共同的使命就是 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "守護生命",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(右手)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 守護健康",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(左手)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "  守護愛 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(~~~船雙手放)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "大醫王 分別病相",
        "type": "lyrics",
        "segments": [
          {
            "text": "大醫王 分別病相 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "曉了藥性",
        "type": "lyrics",
        "segments": [
          {
            "text": "曉了藥性 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "隨病授藥",
        "type": "lyrics",
        "segments": [
          {
            "text": "隨病授藥 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "大船師 運載群生",
        "type": "lyrics",
        "segments": [
          {
            "text": "大船師 運載群生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "渡生死河",
        "type": "lyrics",
        "segments": [
          {
            "text": "渡生死河 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "置涅槃岸",
        "type": "lyrics",
        "segments": [
          {
            "text": "置涅槃岸 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "大醫王 分別病相",
        "type": "lyrics",
        "segments": [
          {
            "text": "大醫王 分別病相 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "曉了藥性",
        "type": "lyrics",
        "segments": [
          {
            "text": "曉了藥性 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "隨病授藥",
        "type": "lyrics",
        "segments": [
          {
            "text": "隨病授藥 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "大船師 運載群生",
        "type": "lyrics",
        "segments": [
          {
            "text": "大船師 運載群生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "渡生死河",
        "type": "lyrics",
        "segments": [
          {
            "text": "渡生死河 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "置涅槃岸",
        "type": "lyrics",
        "segments": [
          {
            "text": "置涅槃岸 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_19",
    "title": "【骨捐】",
    "formationKey": "boneDonation",
    "formationLabel": "07-2骨捐能捨 (骨捐/大體/專屬曲目)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/17 骨捐.mp3",
    "videos": [],
    "lines": [
      {
        "text": "我不知道有沒有明天1992 年 旅美留學生 温文玲罹患白血病 我不知道有沒有明天 ~~~~",
        "type": "lyrics",
        "segments": [
          {
            "text": "我不知道有沒有明天",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "1992 年 旅美留學生 温文玲罹患白血病 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "我不知道有沒有明天 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "~~~~  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "唉 真的很難啊 臺灣愛心的人 那麼多 我一定要(呼籲來) 我願意(小V)  來 我願意(大V)",
        "type": "lyrics",
        "segments": [
          {
            "text": "唉 真的很難啊 臺灣愛心的人 那麼多 我一定要",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "呼籲",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "來) 我願意",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(小V)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "  來 我願意",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(大V)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "   ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "來 我願意(C 組)  來唷 來啦 來捐血 ~~~ 救人一命 無損己身 慈濟和我在找一個人",
        "type": "lyrics",
        "segments": [
          {
            "text": "來 我願意",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(C 組)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " 來唷 來啦 來捐血 ~~~ 救人一命 無損己身 慈濟和我在找一個人  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "那個人 可能就是你(轉向)",
        "type": "lyrics",
        "segments": [
          {
            "text": "那個人 可能",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "就是你",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(轉向)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "慈濟人 在推動 國際骨髓捐贈 這是人類崇高的行為",
        "type": "lyrics",
        "segments": [
          {
            "text": "慈濟人 在推動 國際骨髓捐贈 這是人類崇高的行為 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "搶救生命",
        "type": "lyrics",
        "segments": [
          {
            "text": "搶救生命 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "無上光榮",
        "type": "lyrics",
        "segments": [
          {
            "text": "無上光榮 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "千萬人 在響應 慈濟骨髓捐贈 這是人類崇高的行為",
        "type": "lyrics",
        "segments": [
          {
            "text": "千萬人 在響應 慈濟骨髓捐贈 這是人類崇高的行為 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "搶救生命",
        "type": "lyrics",
        "segments": [
          {
            "text": "搶救生命 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "無上光榮",
        "type": "lyrics",
        "segments": [
          {
            "text": "無上光榮 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_20",
    "title": "【大體捐贈 曲目：無量義經．德行品】",
    "formationKey": "boneDonation",
    "formationLabel": "07-2骨捐能捨 (骨捐/大體/專屬曲目)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/慈善+醫療/17 骨捐.mp3",
    "videos": [],
    "lines": [
      {
        "text": "我真的等九年了(開黃燈) 每一年 每一次 我常已經在夢中 夢到我們家的恩人 已經夢",
        "type": "lyrics",
        "segments": [
          {
            "text": "我真的等九年了",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(開黃燈)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 每一年 每一次 我常已經在夢中 夢到我們家的恩人 已經夢",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "到好幾次了 在等的就是等這一天 見到恩人 我一定會跪在他面前 感恩 說他救了我",
        "type": "lyrics",
        "segments": [
          {
            "text": "到好幾次了 在等的就是等這一天 見到恩人 我一定會跪在他面前 感恩 說他救了我",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "們一個家庭 那一念(轉向) 救人一命 無損己身",
        "type": "lyrics",
        "segments": [
          {
            "text": "們一個家庭 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "那一念",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(轉向)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 救人一命 無損己身 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "能捨一切諸難捨",
        "type": "lyrics",
        "segments": [
          {
            "text": "能捨一切諸難捨 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "財寶妻子及國城",
        "type": "lyrics",
        "segments": [
          {
            "text": "財寶妻子及國城 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "於法內外無所吝",
        "type": "lyrics",
        "segments": [
          {
            "text": "於法內外無所吝 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "頭目髓腦悉施人",
        "type": "lyrics",
        "segments": [
          {
            "text": "頭目髓腦悉施人 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "遍學一切眾道法",
        "type": "lyrics",
        "segments": [
          {
            "text": "遍學一切眾道法 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "智慧深入眾生根",
        "type": "lyrics",
        "segments": [
          {
            "text": "智慧深入眾生根 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "遍學一切眾道法",
        "type": "lyrics",
        "segments": [
          {
            "text": "遍學一切眾道法 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "智慧深入眾生根",
        "type": "lyrics",
        "segments": [
          {
            "text": "智慧深入眾生根 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "遍學一切眾道法",
        "type": "lyrics",
        "segments": [
          {
            "text": "遍學一切眾道法 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "智慧深入眾生根",
        "type": "lyrics",
        "segments": [
          {
            "text": "智慧深入眾生根  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "於如來地 堅固不動 安住願力 廣淨佛國",
        "type": "lyrics",
        "segments": [
          {
            "text": "於如來地 堅固不動 安住願力 廣淨佛國 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_21",
    "title": "【花慈.中西醫精準醫療(羅倫佐) 曲目：我可以唱歌了】11/12(第1 天專屬曲目)",
    "formationKey": "boneDonation",
    "formationLabel": "07-2骨捐能捨 (骨捐/大體/專屬曲目)",
    "sessionKeys": [
      "1112"
    ],
    "sessionLabel": "11/12(第1天)專屬曲目",
    "audio": "Music/慈善+醫療/18北慈＿疫情捨我其誰.mp3",
    "videos": [],
    "lines": [
      {
        "text": "我可以唱歌了! 我可以重新拿起畫筆",
        "type": "lyrics",
        "segments": [
          {
            "text": "我可以唱歌了! 我可以重新拿起畫筆 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "像這顆小樹一樣",
        "type": "lyrics",
        "segments": [
          {
            "text": "像這顆小樹一樣 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "旁邊在發光!",
        "type": "lyrics",
        "segments": [
          {
            "text": "旁邊在發光! ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "是你們照著我! 讓我重新站起來!",
        "type": "lyrics",
        "segments": [
          {
            "text": "是你們照著我! 讓我重新站起來! ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_22",
    "title": "【大埔無醫村 曲目：擁抱蒼生】11/12(第1 天專屬曲目)",
    "formationKey": "boneDonation",
    "formationLabel": "07-2骨捐能捨 (骨捐/大體/專屬曲目)",
    "sessionKeys": [
      "1112"
    ],
    "sessionLabel": "11/12(第1天)專屬曲目",
    "audio": "Music/慈善+醫療/16 大醫王.mp3",
    "videos": [],
    "lines": [
      {
        "text": "啊",
        "type": "lyrics",
        "segments": [
          {
            "text": "啊   ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "大愛的人  我要向您感恩",
        "type": "lyrics",
        "segments": [
          {
            "text": "大愛的人  我要向您感恩   ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "若不是大智大仁和大勇",
        "type": "lyrics",
        "segments": [
          {
            "text": "若不是大智大仁和大勇 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "有誰能擁抱蒼生",
        "type": "lyrics",
        "segments": [
          {
            "text": "有誰能擁抱蒼生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "有誰能擁抱蒼生",
        "type": "lyrics",
        "segments": [
          {
            "text": "有誰能擁抱蒼生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_23",
    "title": "【北慈.疫情捨我其誰 曲目：醫子喻 擁抱蒼生】11/14(第3 天專屬曲目)",
    "formationKey": "boneDonation",
    "formationLabel": "07-2骨捐能捨 (骨捐/大體/專屬曲目)",
    "sessionKeys": [
      "1114"
    ],
    "sessionLabel": "11/14(第3天)專屬曲目",
    "audio": "Music/慈善+醫療/18北慈＿疫情捨我其誰.mp3",
    "videos": [],
    "lines": [
      {
        "text": "Os 媽媽!妳怎麼不回家?我們要去打怪獸!照顧確診病人，全體住宿43 天",
        "type": "os",
        "segments": [
          {
            "text": "Os 媽媽!妳怎麼不回家?我們要去",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "打怪獸!",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "照顧確診病人，全體住宿43 天 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "往昔所造諸惡業",
        "type": "lyrics",
        "segments": [
          {
            "text": "往昔所造諸惡業 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "皆由無始貪瞋癡",
        "type": "lyrics",
        "segments": [
          {
            "text": "皆由無始貪瞋癡 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "從身語意之所生",
        "type": "lyrics",
        "segments": [
          {
            "text": "從身語意之所生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "一切我今皆懺悔",
        "type": "lyrics",
        "segments": [
          {
            "text": "一切我今皆懺悔 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "蘇主任:每天睡覺都會驚醒，有沒有盡力救回每一個病人",
        "type": "lyrics",
        "segments": [
          {
            "text": "蘇主任:每天睡覺都會驚醒，有沒有盡力救回每一個病人 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "趙院長:希望沒有人是求醫無門，希望每一個人都能得到像家人般的照顧",
        "type": "lyrics",
        "segments": [
          {
            "text": "趙院長:希望沒有人是求醫無門，希望每一個人都能得到像家人般的照顧 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "因為大愛無國界 因為醫療有團隊",
        "type": "lyrics",
        "segments": [
          {
            "text": "因為大愛無國界 因為醫療有團隊  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "讓每位大醫王 都是照亮人間的光輝",
        "type": "lyrics",
        "segments": [
          {
            "text": "讓每位大醫王 都是照亮人間的光輝 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_24",
    "title": "【中慈.江永旭 曲目：藥師如來12 大願 終曲】11/14(第3 天專屬曲目)",
    "formationKey": "boneDonation",
    "formationLabel": "07-2骨捐能捨 (骨捐/大體/專屬曲目)",
    "sessionKeys": [
      "1114"
    ],
    "sessionLabel": "11/14(第3天)專屬曲目",
    "audio": "",
    "videos": [],
    "lines": [
      {
        "text": "他也授證成為一位慈濟人，更用行動去關懷跟他一樣脊髓損傷的病患，活出了信心又",
        "type": "lyrics",
        "segments": [
          {
            "text": "他也授證成為一位慈濟人，更用行動去關懷跟他一樣脊髓損傷的病患，活出了信心又",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "有價值的人生",
        "type": "lyrics",
        "segments": [
          {
            "text": "有價值的人生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "普濟蒼(厚生) (大V)的良(厚方) (小V)",
        "type": "lyrics",
        "segments": [
          {
            "text": "普濟蒼(厚生)",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": " (大V)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "的良(厚方)",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": " (小V)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "成就慧命的資~~糧~~",
        "type": "lyrics",
        "segments": [
          {
            "text": " 成就慧命的資~~糧~~ ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_25",
    "title": "【北慈.八仙塵爆 曲目：火宅喻 手札】 11/15(第4 天專屬曲目)",
    "formationKey": "boneDonation",
    "formationLabel": "07-2骨捐能捨 (骨捐/大體/專屬曲目)",
    "sessionKeys": [
      "1115"
    ],
    "sessionLabel": "11/15(第4天)專屬曲目",
    "audio": "Music/慈善+醫療/17 骨捐.mp3",
    "videos": [],
    "lines": [
      {
        "text": "os 如果受傷是你的家人 你們是否會盡最大的努力 試穿十次 終於成功了 穿上後舒適",
        "type": "os",
        "segments": [
          {
            "text": "os 如果受傷是你的家人 你們是否會盡最大的努力 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "試穿十次",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " 終於成功了 穿上後舒適",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "透氣有冰涼感 哇 比原來的好多了 上人試穿後 經過10 次改良 贈送壓力衣給病人",
        "type": "lyrics",
        "segments": [
          {
            "text": "透氣有冰涼感 哇 比原來的好多了 上人試穿後 經過10 次改良 贈送壓力衣給病人 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "同時慈濟也捐贈 新型高壓２０００碼給陽光基金會",
        "type": "lyrics",
        "segments": [
          {
            "text": "同時慈濟也捐贈 新型高壓２０００碼給陽光基金會 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "院長：我們有使命感！一個都不能少 我們每一個人 都要救",
        "type": "lyrics",
        "segments": [
          {
            "text": "院長：我們有使命感！一個都不能少 我們每一個人 都要救 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "菩薩悲智化有情",
        "type": "lyrics",
        "segments": [
          {
            "text": "菩薩悲智化有情 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "如牛安忍能運載",
        "type": "lyrics",
        "segments": [
          {
            "text": "如牛安忍能運載 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "啊～～ 驚世的災難(小V)   啊～～警示的覺悟(大V)",
        "type": "lyrics",
        "segments": [
          {
            "text": "啊～～ ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "驚世的災難",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "小V",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": ")   啊～～",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "警示的覺悟",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(大V) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": true,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "時間苦短莫耽樂(來不及)",
        "type": "lyrics",
        "segments": [
          {
            "text": "時間苦短",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "莫耽樂",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(來不及)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "順行正道智慧開(來不及)",
        "type": "lyrics",
        "segments": [
          {
            "text": "順行正道",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "智慧開",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": true,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "來不及",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": ")",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": true,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "把握當下莫空過",
        "type": "lyrics",
        "segments": [
          {
            "text": "把握當下莫空過 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "須知三界是火宅",
        "type": "lyrics",
        "segments": [
          {
            "text": "須知三界是火宅 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "須知三界是火宅",
        "type": "lyrics",
        "segments": [
          {
            "text": "須知三界是火宅 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "os 謝謝慈濟給了我們孩子 第二次生命 謝謝院長爸爸 謝謝所有的醫生和姊姊",
        "type": "os",
        "segments": [
          {
            "text": "os 謝謝慈濟給了我們孩子 第二次生命 謝謝院長爸爸 謝謝所有的醫生和姊姊 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "謝謝你們沒有放棄我 讓我還能擁抱爸爸媽媽",
        "type": "lyrics",
        "segments": [
          {
            "text": "謝謝你們沒有放棄我 讓我還能擁抱爸爸媽媽 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "Os 喝酒啊 喝酒  喝酒 心情不好喝酒就好了 對嘛  就是這樣啦 這個孩子 還來不及",
        "type": "os",
        "segments": [
          {
            "text": "Os 喝酒啊 喝酒  喝酒 心情不好喝酒就好了 對嘛  就是這樣啦 這個孩子 還來不及",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "參加畢業典禮 就已經被賣到西部了如果讓他有一技之長 就可以謀生 成為白衣大士",
        "type": "lyrics",
        "segments": [
          {
            "text": "參加畢業典禮 就已經被賣到西部了如果讓他有一技之長 就可以謀生 成為白衣大士",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "更可以為部落服務",
        "type": "lyrics",
        "segments": [
          {
            "text": "更可以為部落服務  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_26",
    "title": "【教育說法品梵唄 曲目：說法品梵唄第6 段】",
    "formationKey": "edu",
    "formationLabel": "08教育 (說法品/大體老師/慈小/教育完全化)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/教育+人文/教育01_教育說法品梵唄.mp3",
    "videos": [],
    "lines": [
      {
        "text": "照顧原住民就學就業問題 解決東部護理人力不足 苦既拔已 復為說法",
        "type": "lyrics",
        "segments": [
          {
            "text": "照顧原住民就學就業問題 解決東部護理人力不足 苦既拔已 復為說法 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "菩薩摩訶薩",
        "type": "lyrics",
        "segments": [
          {
            "text": "菩薩摩訶薩  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "安住如是",
        "type": "lyrics",
        "segments": [
          {
            "text": "安住如是 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "真實相已",
        "type": "lyrics",
        "segments": [
          {
            "text": "真實相已 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "所發慈悲",
        "type": "lyrics",
        "segments": [
          {
            "text": "所發慈悲 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "明諦不虛",
        "type": "lyrics",
        "segments": [
          {
            "text": "明諦不虛 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "於眾生所",
        "type": "lyrics",
        "segments": [
          {
            "text": "於眾生所 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "真能拔苦",
        "type": "lyrics",
        "segments": [
          {
            "text": "真能拔苦 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "苦既拔已",
        "type": "lyrics",
        "segments": [
          {
            "text": "苦既拔已 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "復為說法",
        "type": "lyrics",
        "segments": [
          {
            "text": "復為說法 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "苦既拔已",
        "type": "lyrics",
        "segments": [
          {
            "text": "苦既拔已 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "復為說法",
        "type": "lyrics",
        "segments": [
          {
            "text": "復為說法 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "令諸眾生",
        "type": "lyrics",
        "segments": [
          {
            "text": "令諸眾生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "受於快樂",
        "type": "lyrics",
        "segments": [
          {
            "text": "受於快樂 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_27",
    "title": "【大體老師 曲目：無量義經終曲】",
    "formationKey": "edu",
    "formationLabel": "08教育 (說法品/大體老師/慈小/教育完全化)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/教育+人文/教育02_大體老師.mp3",
    "videos": [],
    "lines": [
      {
        "text": "os 欸!來了一個車禍嚴重氣胸的病人，欸! 你會插管嗎?我 呃 大體老師的身上，有讓",
        "type": "os",
        "segments": [
          {
            "text": "os 欸!來了一個車禍嚴重氣胸的病人，欸! 你會插管嗎?我 呃 大體老師的身上，有讓",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "我練習過插管，我來。嗯!胸管放置成功。哇!病人呼吸平穩了(合十)!嗯，向大體老師",
        "type": "lyrics",
        "segments": [
          {
            "text": "我練習過插管，我來。嗯!胸管放置成功。",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "哇!病人呼吸平穩了",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(合十)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "!嗯，向大體老師",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "敬禮，感恩老師您奉獻身體成就我們。",
        "type": "lyrics",
        "segments": [
          {
            "text": "敬禮，感恩老師您奉獻身體成就我們。 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "大慈大悲無量義",
        "type": "lyrics",
        "segments": [
          {
            "text": "大慈大悲無量義 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "靜寂清澄如琉璃",
        "type": "lyrics",
        "segments": [
          {
            "text": "靜寂清澄如琉璃 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "守之不動起敬意",
        "type": "lyrics",
        "segments": [
          {
            "text": " 守之不動起敬意 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "必令廣行閻浮提",
        "type": "lyrics",
        "segments": [
          {
            "text": "必令廣行閻浮提 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_28",
    "title": "【慈大醫學院宣誓 曲目：慈大校歌】",
    "formationKey": "edu",
    "formationLabel": "08教育 (說法品/大體老師/慈小/教育完全化)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/教育+人文/教育03_慈大醫學院宣誓.mp3",
    "videos": [],
    "lines": [
      {
        "text": "上人：立大願呢!總是要讓生命在你的手中得救，期待您們立志為人醫",
        "type": "dialogue",
        "segments": [
          {
            "text": "上人：立大願呢!總是要讓生命在你的手中得救，期待您們立志為人醫 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "誓願將心比心(厚想)",
        "type": "lyrics",
        "segments": [
          {
            "text": "誓願將心比心(厚想)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "眾生平安解我憂勞(厚痛)創",
        "type": "lyrics",
        "segments": [
          {
            "text": "眾生平安解我憂勞(厚痛)創 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "誓願眾生為至(厚親)",
        "type": "lyrics",
        "segments": [
          {
            "text": "誓願眾生為至(厚親)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "醫病醫心醫得平安共享",
        "type": "lyrics",
        "segments": [
          {
            "text": "醫病醫心醫得平安共享 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_29",
    "title": "【許永祥教授 曲目：醫子喻手扎】11/12、13(第1、2 天專屬曲目)",
    "formationKey": "edu",
    "formationLabel": "08教育 (說法品/大體老師/慈小/教育完全化)",
    "sessionKeys": [
      "1112",
      "1113"
    ],
    "sessionLabel": "11/12(第1天)、11/13(第2天)專屬曲目",
    "audio": "Music/教育+人文/教育02_大體老師.mp3",
    "videos": [],
    "lines": [
      {
        "text": "未定",
        "type": "lyrics",
        "segments": [
          {
            "text": "未定 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_30",
    "title": "【慈小個案 曲目：種樹】",
    "formationKey": "edu",
    "formationLabel": "08教育 (說法品/大體老師/慈小/教育完全化)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/教育+人文/教育04_慈小個案.mp3",
    "videos": [],
    "lines": [
      {
        "text": "Os 2000 年慈濟創辦中小學(拿花合十壓縮，到位時直接轉向法師並開燈)，完成完全教育，將品",
        "type": "os",
        "segments": [
          {
            "text": "Os ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "2000 年慈濟創辦中小學",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(拿花合十壓縮，到位時直接轉向法師並開燈)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "，完成完全教育，將品",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "德向下紮根，融入生活教育",
        "type": "lyrics",
        "segments": [
          {
            "text": "德向下紮根，融入生活教育 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "小樹啊",
        "type": "lyrics",
        "segments": [
          {
            "text": "小樹啊  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "我要你成為",
        "type": "lyrics",
        "segments": [
          {
            "text": "我要你成為  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "一顆頂天立地的大樹",
        "type": "lyrics",
        "segments": [
          {
            "text": "一顆頂天立地的大樹  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "我的期望和期盼",
        "type": "lyrics",
        "segments": [
          {
            "text": "我的期望和期盼 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "也隨著他",
        "type": "lyrics",
        "segments": [
          {
            "text": "也隨著他 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "成長和堅韌",
        "type": "lyrics",
        "segments": [
          {
            "text": "成長和堅韌 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "os ㄟ你們怎麼在掃廁所(收)啊，我們要操行很高才能掃廁所，廁所很乾淨耶，這是我",
        "type": "os",
        "segments": [
          {
            "text": "os ㄟ你們怎麼在",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "掃廁所",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(收)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "啊，我們要操行很高才能掃廁所，廁所很乾淨耶，這是我",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "們的榮耀~~~~~水源部落",
        "type": "lyrics",
        "segments": [
          {
            "text": "們的榮耀~~~~~水源部落",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_31",
    "title": "【教育完全化 曲目：成長/感恩】",
    "formationKey": "edu",
    "formationLabel": "08教育 (說法品/大體老師/慈小/教育完全化)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/教育+人文/教育05_教育完全化.mp3",
    "videos": [],
    "lines": [
      {
        "text": "os 慈濟的完全教育，以慈悲喜捨為校訓，畢業典禮即是教育人文的展現",
        "type": "os",
        "segments": [
          {
            "text": "os 慈濟的完全教育，以慈悲喜捨為校訓，畢業典禮即是",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "教育人文",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "的展現",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "曾經我的腳步",
        "type": "lyrics",
        "segments": [
          {
            "text": "曾經我的腳步  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "有您殷殷善誘和陪伴",
        "type": "lyrics",
        "segments": [
          {
            "text": "有您殷殷善誘和陪伴 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "當我走向新的旅程  滿心感恩不能忘",
        "type": "lyrics",
        "segments": [
          {
            "text": "當我走向新的旅程  滿心感恩不能忘 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "我終將張開翅膀",
        "type": "lyrics",
        "segments": [
          {
            "text": "我終將張開翅膀  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "飛向更寬闊的遠方",
        "type": "lyrics",
        "segments": [
          {
            "text": "飛向更寬闊的遠方  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "成長路不管多難",
        "type": "lyrics",
        "segments": [
          {
            "text": "成長路不管多難  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "愛是我的行囊",
        "type": "lyrics",
        "segments": [
          {
            "text": "愛是我的行囊 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "os 我有自信，可以通過考驗，在未來，我會更加努力，繼續做一個手心向下的小菩薩",
        "type": "os",
        "segments": [
          {
            "text": "os 我有自信，可以通過考驗，在未來，我會更加努力，繼續做一個手心向下的小菩薩 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "很感恩，因為把握每一次能夠付出投入的機會，讓我的生命過得很充實、很快樂而且",
        "type": "lyrics",
        "segments": [
          {
            "text": "很感恩，因為把握每一次能夠付出投入的機會，讓我的生命過得很充實、很快樂而且",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "很有價值",
        "type": "lyrics",
        "segments": [
          {
            "text": "很有價值 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "我將牢記離別的意義",
        "type": "lyrics",
        "segments": [
          {
            "text": "我將牢記離別的意義 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "寬厚人生延續你的培育",
        "type": "lyrics",
        "segments": [
          {
            "text": "寬厚人生延續你的培育 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "不會將你忘記 不會將你忘記 我們會是慈濟的延續",
        "type": "lyrics",
        "segments": [
          {
            "text": "不會將你忘記 不會將你忘記 我們會是慈濟的延續 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "感謝叮嚀",
        "type": "lyrics",
        "segments": [
          {
            "text": "感謝叮嚀   ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "感恩有你",
        "type": "lyrics",
        "segments": [
          {
            "text": "感恩有你 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "我們會是慈濟的延續",
        "type": "lyrics",
        "segments": [
          {
            "text": "我們會是慈濟的延續 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "感謝叮嚀",
        "type": "lyrics",
        "segments": [
          {
            "text": "感謝叮嚀   ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "感恩有你",
        "type": "lyrics",
        "segments": [
          {
            "text": "感恩有你 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "我們會是慈濟的延續",
        "type": "lyrics",
        "segments": [
          {
            "text": "我們會是慈濟的延續 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_32",
    "title": "【靜思語教學 曲目：藥草喻】11/14、15(第3、4 天專屬曲目)",
    "formationKey": "edu",
    "formationLabel": "08教育 (說法品/大體老師/慈小/教育完全化)",
    "sessionKeys": [
      "1114",
      "1115"
    ],
    "sessionLabel": "11/14(第3天)、11/15(第4天)專屬曲目",
    "audio": "Music/教育+人文/教育06_靜思語教學.mp3",
    "videos": [],
    "lines": [
      {
        "text": "藥草分三等",
        "type": "lyrics",
        "segments": [
          {
            "text": "藥草分三等  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "隨其大小潤根苗",
        "type": "lyrics",
        "segments": [
          {
            "text": "隨其大小潤根苗 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "轉輪聖王小藥草",
        "type": "lyrics",
        "segments": [
          {
            "text": "轉輪聖王小藥草 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "聲聞緣覺中藥草",
        "type": "lyrics",
        "segments": [
          {
            "text": "聲聞緣覺中藥草 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "常隨佛學上藥草",
        "type": "lyrics",
        "segments": [
          {
            "text": "常隨佛學上藥草 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "樹木有兩種",
        "type": "lyrics",
        "segments": [
          {
            "text": "樹木有兩種  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "順其高矮享甘露",
        "type": "lyrics",
        "segments": [
          {
            "text": "順其高矮享甘露 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "常行慈悲小樹木",
        "type": "lyrics",
        "segments": [
          {
            "text": "常行慈悲小樹木 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "度化眾生大樹木",
        "type": "lyrics",
        "segments": [
          {
            "text": "度化眾生大樹木 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "皆為菩薩行六度",
        "type": "lyrics",
        "segments": [
          {
            "text": "皆為菩薩行六度 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_33",
    "title": "【幸福人生講座 曲目：父母恩重難報經．因緣】",
    "formationKey": "humanities1",
    "formationLabel": "09-1人文 (基本隊形)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/教育+人文/人文02_幸福人生講座.mp3",
    "videos": [],
    "lines": [
      {
        "text": "Os 師父啊!你知道嗎 我實在很害怕 你怕什麼 啊就一個仙仔和我講 說我們家的祖先",
        "type": "os",
        "segments": [
          {
            "text": "Os 師父啊!你知道嗎 我實在很害怕 你怕什麼 啊就一個仙仔和我講 說我們家的祖先 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "都在相告 啊就也不知道說 要抓哪一個 啊我 我很擔心 啊你難道沒有疼妳的子孫 當",
        "type": "lyrics",
        "segments": [
          {
            "text": "都在相告 啊就也不知道說 要抓哪一個 啊我 我很擔心 啊你難道沒有疼妳的子孫 當",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "然疼愛啊 你不就是子孫的祖先 啊你們難道會對子孫不利 哪會 啊哪有可能去害子孫",
        "type": "lyrics",
        "segments": [
          {
            "text": "然疼愛啊 你不就是子孫的祖先 啊你們難道會對子孫不利 哪會 啊哪有可能去害子孫 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "~~~我們對祖先是慎終追遠，要懂得尋根，在平時(合十轉身)，就要好好的回報父母恩",
        "type": "lyrics",
        "segments": [
          {
            "text": "~~~我們對祖先是慎終追遠，要懂得尋根，",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "在平時",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(合十轉身)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "，就要好好的回報父母恩 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "佛告阿難應諦聽 分別為你說分明 枯骨因緣溯前世",
        "type": "lyrics",
        "segments": [
          {
            "text": "佛告阿難應諦聽 分別為你說分明 枯骨因緣溯前世 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "或是多生父母親",
        "type": "lyrics",
        "segments": [
          {
            "text": "或是多生父母親 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "父為子女苦營生 勞心勞力兩霜鬢 養兒育女慈母心",
        "type": "lyrics",
        "segments": [
          {
            "text": "父為子女苦營生 勞心勞力兩霜鬢 養兒育女慈母心  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "一生茹苦又含辛",
        "type": "lyrics",
        "segments": [
          {
            "text": "一生茹苦又含辛 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_34",
    "title": "【曲目：跪羊圖】",
    "formationKey": "humanities1",
    "formationLabel": "09-1人文 (基本隊形)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/教育+人文/人文02_幸福人生講座.mp3",
    "videos": [],
    "lines": [
      {
        "text": "法師：對父母要知恩(合十) 感恩 報恩",
        "type": "dialogue",
        "segments": [
          {
            "text": "法師：對父母要知恩",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(合十)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 感恩 報恩 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "古聖先賢孝為宗 萬善之門孝為基 禮敬尊親如活佛",
        "type": "lyrics",
        "segments": [
          {
            "text": "古聖先賢孝為宗 萬善之門孝為基 禮敬尊親如活佛 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "成就生命大意義",
        "type": "lyrics",
        "segments": [
          {
            "text": "成就生命大意義 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "父母恩德重如山 知恩報恩不忘本 做人飲水要思源",
        "type": "lyrics",
        "segments": [
          {
            "text": "父母恩德重如山 知恩報恩不忘本 做人飲水要思源 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "才不愧對父母恩",
        "type": "lyrics",
        "segments": [
          {
            "text": "才不愧對父母恩 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "七月是吉祥月(換主機板隊形) 孝親月 歡喜月(目犍連救母)",
        "type": "lyrics",
        "segments": [
          {
            "text": "七月是吉祥月",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(換主機板隊形)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 孝親月 歡喜月(目犍連救母)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_35",
    "title": "【十戒 曲目：慈誠隊歌】",
    "formationKey": "humanities1",
    "formationLabel": "09-1人文 (基本隊形)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/教育+人文/人文01_慈誠隊歌.mp3",
    "videos": [],
    "lines": [
      {
        "text": "os 慈誠隊 要守八戒 佛教徒的五戒 還要加上不能抽菸 不能吃檳榔 還有不賭博 不",
        "type": "os",
        "segments": [
          {
            "text": "os 慈誠隊 要守八戒 佛教徒的五戒 還要加上不能抽菸 不能吃檳榔 還有不賭博 不",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "可以罵人 和睦家庭 要加上這三條戒 師父啊!啊人家佛陀的五戒，又沒說不能抽菸",
        "type": "lyrics",
        "segments": [
          {
            "text": "可以罵人 和睦家庭 要加上這三條戒 師父啊!啊人家佛陀的五戒，又沒說不能抽菸",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "啊，佛陀在世的時候，又沒有公賣局，啊你一支菸若抽了，就有十五種致癌的成份，",
        "type": "lyrics",
        "segments": [
          {
            "text": "啊，佛陀在世的時候，又沒有公賣局，啊你一支菸若抽了，就有十五種致癌的成份，",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "如果把抽菸的錢存下來，可以買好幾塊磚，來建醫院 蓋學校，師父啊!菸對人體齁",
        "type": "lyrics",
        "segments": [
          {
            "text": "如果把抽菸的錢存下來，可以買好幾塊磚，來建醫院 蓋學校，師父啊!菸對人體齁 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "有害齁，要我們戒掉是沒問題啦，不過，我們為什麼不能吃檳榔，檳榔是素的耶，這",
        "type": "lyrics",
        "segments": [
          {
            "text": "有害齁，要我們戒掉是沒問題啦，不過，我們為什麼不能吃檳榔，檳榔是素的耶，這",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "是形象，外國人說我們臺灣人，這樣邊開車邊吐血，我們不能讓這種國家的形象傳去",
        "type": "lyrics",
        "segments": [
          {
            "text": "是形象，外國人說我們臺灣人，這樣邊開車邊吐血，我們不能讓這種國家的形象傳去",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "國外，所以要戒檳榔，嗶~~~~~(轉面向法師45/正確方向)",
        "type": "lyrics",
        "segments": [
          {
            "text": "國外，所以要戒檳榔，嗶~~~~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(轉面向法師45/正確方向)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "   ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "慈誠慈誠 護法金剛",
        "type": "lyrics",
        "segments": [
          {
            "text": "慈誠慈誠 護法金剛 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "慈悲喜捨 誠正信實",
        "type": "lyrics",
        "segments": [
          {
            "text": "慈悲喜捨 誠正信實 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "犧牲奉獻 相互成就",
        "type": "lyrics",
        "segments": [
          {
            "text": "犧牲奉獻 相互成就 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "持十戒",
        "type": "lyrics",
        "segments": [
          {
            "text": "持十戒  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "修十善",
        "type": "lyrics",
        "segments": [
          {
            "text": "修十善  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "護持慈濟世界",
        "type": "lyrics",
        "segments": [
          {
            "text": "護持慈濟世界 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "敬愛上人",
        "type": "lyrics",
        "segments": [
          {
            "text": "敬愛上人 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "感恩上人",
        "type": "lyrics",
        "segments": [
          {
            "text": "感恩上人 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "耐力毅力",
        "type": "lyrics",
        "segments": [
          {
            "text": "耐力毅力 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "身行供養",
        "type": "lyrics",
        "segments": [
          {
            "text": "身行供養 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "祝福植福",
        "type": "lyrics",
        "segments": [
          {
            "text": "祝福植福 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "信解行證",
        "type": "lyrics",
        "segments": [
          {
            "text": "信解行證 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "悲憫心",
        "type": "lyrics",
        "segments": [
          {
            "text": "悲憫心  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "持威儀",
        "type": "lyrics",
        "segments": [
          {
            "text": "持威儀  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "創造慈濟世界",
        "type": "lyrics",
        "segments": [
          {
            "text": "創造慈濟世界 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "合心 和氣 互愛 協力",
        "type": "lyrics",
        "segments": [
          {
            "text": "合心 和氣 互愛 協力 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_36",
    "title": "【大愛台、經典 曲目：大愛讓世界亮起來】",
    "formationKey": "humanities2",
    "formationLabel": "09-2人文 (主機板)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/教育+人文/人文03_大愛讓世界亮起來_珺月.mp3",
    "videos": [],
    "lines": [
      {
        "text": "為時代作見證(轉面向箭頭方向) 為人類寫歷史(合十開綠燈) 為慈濟留足跡 為社會立典範",
        "type": "lyrics",
        "segments": [
          {
            "text": "為時代作見證",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(轉面向箭頭",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "方向)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 為人類寫歷史",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(合十",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "開綠燈)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 為慈濟留足跡 為社會立典範 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "感恩(白舉燈上藍敬禮)的心 守著每一個(白敬禮藍舉燈上)平安的夜晚",
        "type": "lyrics",
        "segments": [
          {
            "text": "感恩",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(白舉燈上藍",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "敬禮)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "的心 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "守著每一個",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(白敬禮藍舉",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "燈上)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "平安的夜晚  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "期待(白舉燈上藍敬禮)明天 大愛(出右腳平推)讓世界(雙手舉高)亮起來(收右腳雙手閃)",
        "type": "lyrics",
        "segments": [
          {
            "text": "期待",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(白舉燈上藍",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "敬禮)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "明天 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "大愛",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(出右腳平推)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "讓世界",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(雙手舉高)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "亮起",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "來",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(收右腳雙手閃)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "上人：期待淨化人心的節目，能灌注進每一個家庭，大愛能讓世界亮起來。",
        "type": "dialogue",
        "segments": [
          {
            "text": "上人：期待淨化人心的節目，能灌注進每一個家庭，大愛能讓世界亮起來。 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "大愛(出右腳平推)讓世界(雙手舉高)亮~起~來~(收右腳雙手閃)",
        "type": "lyrics",
        "segments": [
          {
            "text": "大愛",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(出右腳平推",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": ")",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "讓世界",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(雙手舉高)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "亮~起~",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "來~",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(收右腳雙手閃)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "描繪真實人生(收燈轉面甲45) 膚慰人間疾苦 啟發善良的心靈 跟脽菩薩的腳步 創造美麗境界 傳遞大愛到世界各處",
        "type": "lyrics",
        "segments": [
          {
            "text": "描繪真實人生",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(收燈轉面甲45)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 膚慰人間疾苦 啟發善良的心靈 跟脽菩薩的腳步 創造美麗境界 傳遞大愛到世界各處 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_37",
    "title": "【大地的園丁 曲目：天空破了洞】",
    "formationKey": "humanities2",
    "formationLabel": "09-2人文 (主機板)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/教育+人文/人文04_大地的園丁.mp3",
    "videos": [],
    "lines": [
      {
        "text": "啊~~(面向乙舞台圓心中央)",
        "type": "lyrics",
        "segments": [
          {
            "text": "啊~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(面向乙舞台圓心中央)  ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "天空破了洞 破了洞(轉面向箭頭)  破了洞 破了洞 破了洞 破 了 洞",
        "type": "lyrics",
        "segments": [
          {
            "text": "天空破了洞 破了洞",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(轉面向箭頭)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " 破了洞 破了洞 破了洞 破 了 洞 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "天空破了洞",
        "type": "lyrics",
        "segments": [
          {
            "text": "天空破了洞  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "誰不傷心",
        "type": "lyrics",
        "segments": [
          {
            "text": "誰不傷心 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "青山流了淚",
        "type": "lyrics",
        "segments": [
          {
            "text": "青山流了淚  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "誰不悲泣",
        "type": "lyrics",
        "segments": [
          {
            "text": "誰不悲泣 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "補天的女媧",
        "type": "lyrics",
        "segments": [
          {
            "text": "補天的女媧  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "哪裡找",
        "type": "lyrics",
        "segments": [
          {
            "text": "哪裡找  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "大地的園丁",
        "type": "lyrics",
        "segments": [
          {
            "text": "大地的園丁  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "何處尋",
        "type": "lyrics",
        "segments": [
          {
            "text": "何處尋 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_38",
    "title": "【法譬如水能洗垢 曲目：無量義經說法品】",
    "formationKey": "humanities2",
    "formationLabel": "09-2人文 (主機板)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/教育+人文/人文05_法譬如水能洗垢.mp3",
    "videos": [],
    "lines": [
      {
        "text": "製造垃圾的人不是別人，是我們自己，要清淨大地也不是別人，也是自己，",
        "type": "lyrics",
        "segments": [
          {
            "text": "製造垃圾的人不是別人，是我們自己，要清淨大地也不是別人，也是自己， ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "上人：我們是不是把鼓掌的兩隻手，拿來做，把這個收回垃圾，就是做環保啦!",
        "type": "dialogue",
        "segments": [
          {
            "text": "上人：我們是不是把鼓掌的兩隻手，拿來做，把這個收回垃圾，就是做環保啦! ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "我們要用鼓掌的雙手 (僅有藍衣合十) 來做環保(邊喊邊內轉向箭頭方向)",
        "type": "lyrics",
        "segments": [
          {
            "text": "我們要用鼓掌的雙手",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " (僅有藍衣合十) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "來",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "做環保",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(邊喊邊內轉向箭頭方向) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "法譬如水能洗(垢=海)上撈垃圾",
        "type": "lyrics",
        "segments": [
          {
            "text": "法譬如水能洗(垢=",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "海",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": ")",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "上撈垃圾",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "若井若池若江(河=觀)音垃圾山",
        "type": "lyrics",
        "segments": [
          {
            "text": "若井若池若江(河=",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "觀",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": ")",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "音垃圾山",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "溪渠大海(白衣在胸前雙握拳)悉能(洗=海) (白衣出右腳雙手開)邊淨灘",
        "type": "lyrics",
        "segments": [
          {
            "text": "溪渠",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "大海",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(白衣在胸前雙握拳)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "悉能(洗=",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "海",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": ")",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": " (白衣出右腳雙手開)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "邊淨灘 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "洗垢法水亦如(是=清)流繞全球",
        "type": "lyrics",
        "segments": [
          {
            "text": "洗垢法水亦如(是=",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "清",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": ")",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "流繞全球",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "這樣鏗鏗鏘鏘(回正後轉向甲舞台45)倒下去的聲音，就像是金銀財寶的聲音，聽到這些聲",
        "type": "lyrics",
        "segments": [
          {
            "text": "這樣鏗鏗鏘鏘",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(回正後轉向甲舞台45)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "倒下去的聲音，就像是金銀財寶的聲音，聽到這些聲",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "音真歡喜。喔!回收50 公斤的紙，可以救一棵20 年的大樹喔!一棵大樹",
        "type": "lyrics",
        "segments": [
          {
            "text": "音真歡喜。喔!回收50 公斤的紙，可以救一棵20 年的大樹喔!",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "一棵大樹 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "唉呦! 你不知道若寶特瓶70 支，就可以做一條毛毯，一條毛毯",
        "type": "lyrics",
        "segments": [
          {
            "text": "唉呦! 你不知道若寶特瓶70 支，就可以做一條毛毯，",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "一條毛毯 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "回收一支寶特瓶ㄟ可以做一支原子筆喔! 一支原子筆",
        "type": "lyrics",
        "segments": [
          {
            "text": "回收一支寶特瓶ㄟ可以做一支原子筆喔! ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "一支原子筆",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "喔!這個環保磚是怎麼做的? 這環保磚就是咱喝過的紙杯，把他們洗洗乾淨，回收再",
        "type": "lyrics",
        "segments": [
          {
            "text": "喔!這個環保磚是怎麼做的? 這環保磚就是咱喝過的紙杯，把他們洗洗乾淨，回收再",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "利用，喔~好~神~奇~ 環保磚",
        "type": "lyrics",
        "segments": [
          {
            "text": "利用，喔~好~神~奇~ ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "環保磚",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "彎腰做環保",
        "type": "lyrics",
        "segments": [
          {
            "text": "彎腰做環保  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "抬頭說環保",
        "type": "lyrics",
        "segments": [
          {
            "text": "抬頭說環保  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "天天做環保",
        "type": "lyrics",
        "segments": [
          {
            "text": "天天做環保  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "沒有時間老",
        "type": "lyrics",
        "segments": [
          {
            "text": "沒有時間老  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "垃圾變黃金",
        "type": "lyrics",
        "segments": [
          {
            "text": "垃圾變黃金  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "黃金變愛心",
        "type": "lyrics",
        "segments": [
          {
            "text": "黃金變愛心  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "愛心化清流",
        "type": "lyrics",
        "segments": [
          {
            "text": "愛心化清流  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "清流繞全球啊 繞~全~球~",
        "type": "lyrics",
        "segments": [
          {
            "text": "清流繞全球啊 繞~全~球~ ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "上人：雙手萬能 最有用的手 最美的手 最價值的手 這就是人生",
        "type": "dialogue",
        "segments": [
          {
            "text": "上人：雙手萬能 最有用的手 最美的手 最價值的手 這就是人生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "我們今天有回收一台輪椅喔! 一兩天回收一張病床 我跟您說，咱后里有一個輔具百",
        "type": "lyrics",
        "segments": [
          {
            "text": "我們今天有回收一台輪椅喔! 一兩天回收一張病床 我跟您說，咱后里有一個輔具百",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "貨公司，喔 其實我們輔具 慈濟已經做九年了喔!已經服務十三萬個家庭喔!",
        "type": "lyrics",
        "segments": [
          {
            "text": "貨公司，喔 其實我們輔具 慈濟已經做九年了喔!已經服務十三萬個家庭喔! ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_39",
    "title": "【慈悲科技上聯合國 曲目：無量義經說法品】",
    "formationKey": "humanities2",
    "formationLabel": "09-2人文 (主機板)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/教育+人文/人文06_慈悲科技上聯合國.mp3",
    "videos": [],
    "lines": [
      {
        "text": "哇! 有夠讚! (邊喊邊內轉向箭頭方向)",
        "type": "lyrics",
        "segments": [
          {
            "text": "哇! ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "有夠讚!",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " (邊喊邊內轉向箭頭方向)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "佛轉法輪四真諦 環保就是環境很大的寶",
        "type": "lyrics",
        "segments": [
          {
            "text": "佛轉法輪四真諦 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "環保就是環境很大的寶 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "諸法本來是空寂 丟掉就成為問題 撿起來就能解決問題",
        "type": "lyrics",
        "segments": [
          {
            "text": "諸法本來是空寂 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "丟掉就成為問題 撿起來就能解決問題 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "代謝不住 念念生滅 文辭是一 眾生解異",
        "type": "lyrics",
        "segments": [
          {
            "text": "代謝不住 念念生滅 文辭是一 眾生解異 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "法性無差 眾生四相 文理真正 尊無過上(合十右後轉)",
        "type": "lyrics",
        "segments": [
          {
            "text": "法性無差 眾生四相 文理真正 尊無過",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "上",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(合十右後轉)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "一生無量 無量一生 佛法廣演 眾生普應",
        "type": "lyrics",
        "segments": [
          {
            "text": "一生無量 無量一生 佛法廣演 眾生普應 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "如是甚深 無上大乘 菩薩當修 無量義經(腳停)",
        "type": "lyrics",
        "segments": [
          {
            "text": "如是甚深 無上大乘 菩薩當修 無量義經",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(腳停)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "如是甚深(跪起) 無上大乘(轉向箭頭方向) 菩薩當修",
        "type": "lyrics",
        "segments": [
          {
            "text": "如是甚深",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(跪起)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 無上大乘",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(轉向箭頭方向) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "菩薩當修  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "無量義經 無量義經(藍衣舉高)",
        "type": "lyrics",
        "segments": [
          {
            "text": "無量義經 無量",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "義經",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(藍衣舉高) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "留給子孫一個 乾淨的地球(白衣舉高藍衣收) 人間菩薩大招生 一粒毫芒極微種 漸成菩提",
        "type": "lyrics",
        "segments": [
          {
            "text": "留給子孫一個 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "乾淨的地球",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(白衣舉高藍衣收)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "人間菩薩大招生 一粒毫芒極微種 漸成菩提",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "功德林(白衣收)",
        "type": "lyrics",
        "segments": [
          {
            "text": "功德林",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(白衣收)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_40",
    "title": "【貧中之富 樂生 曲目：超越天堂】11/12、15(第1、4 天專屬曲目)",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1112",
      "1115"
    ],
    "sessionLabel": "11/12(第1天)、11/15(第4天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品",
    "videos": [
      {
        "title": "[功德品] 樂生",
        "videoId": "mGhnmtxZrn8",
        "url": "https://www.youtube.com/watch?v=mGhnmtxZrn8"
      }
    ],
    "lines": [
      {
        "text": "~~樂生院拆遷的補償金我要全數捐出!做好事很有意義，人若多！就有夠力",
        "type": "lyrics",
        "segments": [
          {
            "text": "~~樂生院拆遷的補償金我要全數捐出!做好事很有意義，人若多！就有夠力",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "世間苦聚難為人",
        "type": "lyrics",
        "segments": [
          {
            "text": "世間苦聚難為人 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "苦中長養慈悲心",
        "type": "lyrics",
        "segments": [
          {
            "text": "苦中長養慈悲心 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "涓滴成就無量事",
        "type": "lyrics",
        "segments": [
          {
            "text": "涓滴成就無量事 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "但願來世清淨身",
        "type": "lyrics",
        "segments": [
          {
            "text": "但願來世清淨身 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "師父，為什麼我們會得這種病，我們好像是住在地獄裡。",
        "type": "lyrics",
        "segments": [
          {
            "text": "師父，為什麼我們會得這種病，我們好像是住在地獄裡。 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "上人：不是地獄，是超越天堂的淨土",
        "type": "dialogue",
        "segments": [
          {
            "text": "上人：",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "不是地獄",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "，是超越天堂的淨土 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "今身不向此生度",
        "type": "lyrics",
        "segments": [
          {
            "text": "今身不向此生度 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "更待何時度此身",
        "type": "lyrics",
        "segments": [
          {
            "text": "更待何時度此身 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_41",
    "title": "【富中之富  A 曲目：彌勒問】11/12、14(第1、3 天專屬曲目)",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1112",
      "1114"
    ],
    "sessionLabel": "11/12(第1天)、11/14(第3天)專屬曲目",
    "audio": "Music/功德品/1112/[功德品",
    "videos": [
      {
        "title": "[功德品] 富中之富 A",
        "videoId": "m2NvdK1rQpk",
        "url": "https://www.youtube.com/watch?v=m2NvdK1rQpk"
      }
    ],
    "lines": [
      {
        "text": "os 那~什麼是富中之富啊，開啟心靈的富有啊! (西一：搭靜思堂)",
        "type": "os",
        "segments": [
          {
            "text": "os 那~什麼是富中之富啊，開啟心靈的富有啊!",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(西一：搭靜思堂) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "我見彼土諸菩薩",
        "type": "lyrics",
        "segments": [
          {
            "text": "我見彼土諸菩薩  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "為求(東二：舉921 鋼鐵道具)佛道行布施",
        "type": "lyrics",
        "segments": [
          {
            "text": "為求",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(東二：舉921 鋼鐵道具)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "佛道行布施 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "像這位921(東二法海指引)大地震聽到 上人說教育不能等，立即認養多所學校，為善不",
        "type": "lyrics",
        "segments": [
          {
            "text": "像這位921",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(東二法海指引)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "大地震聽到 上人說教育不能等，立即認養多所學校，為善不",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "欲人知，只求 上人「ㄇㄞˋ煩惱」",
        "type": "lyrics",
        "segments": [
          {
            "text": "欲人知，只求 上人「ㄇㄞˋ煩惱」 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "金銀瑪瑙與寶飾",
        "type": "lyrics",
        "segments": [
          {
            "text": "金銀瑪瑙與寶飾 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "車馬(東一：舉食衣住行道具；東二收)華蓋摩尼珠",
        "type": "lyrics",
        "segments": [
          {
            "text": "車馬",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(東一：舉食衣住行道具；東二收)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "華蓋摩尼珠",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "上人號召(東一法海指引)這些實業家，用他們的專業幫助苦難人ㄟ。食、衣、住、行都考",
        "type": "lyrics",
        "segments": [
          {
            "text": "上人號召",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(東一法海指引)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "這些實業家，用他們的專業幫助苦難人ㄟ。食、衣、住、行都考",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "慮到了，實在是太貼心了。",
        "type": "lyrics",
        "segments": [
          {
            "text": "慮到了，實在是太貼心了。 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "又見菩薩利眾生",
        "type": "lyrics",
        "segments": [
          {
            "text": "又見菩薩利眾生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "願捨(東一收)妻子與國土",
        "type": "lyrics",
        "segments": [
          {
            "text": "願捨",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(東一收)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "妻子與國土",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "  ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "這位莊居士(西一法海指引)要捐地，土地權狀就放在佛堂天天禮拜。他這虔誠的心已超越",
        "type": "lyrics",
        "segments": [
          {
            "text": "這位莊居士",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(西一法海指引)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "要捐地，土地權狀就放在佛堂天天禮拜。他這虔誠的心已超越",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "這塊土地價值了！兩個善女人捐地蓋大愛台，科技傳法到全世界。",
        "type": "lyrics",
        "segments": [
          {
            "text": "這塊土地價值了！",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "兩個善女人",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "捐地蓋大愛台，科技傳法到全世界。 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "為救眾生諸病苦",
        "type": "lyrics",
        "segments": [
          {
            "text": "為救眾生諸病苦 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "頭目(西一收)髓腦亦樂施",
        "type": "lyrics",
        "segments": [
          {
            "text": "頭目",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(西一收)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "髓腦亦樂施",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "台灣半導體(全體藍衣指引)開路先鋒杜俊元捐地蓋靜思堂，生前大布施(全體白衣合十)，往",
        "type": "lyrics",
        "segments": [
          {
            "text": "台灣半導體",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(全體藍衣指引)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "開路先鋒杜俊元捐地蓋靜思堂，",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "生前大布施",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(全體白衣合十)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "，",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "往",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "生捐大體(全體白衣敬禮)，發揮生命的使用權(全體白衣回正)！大成鋼鐵(西二：舉素食道具；全",
        "type": "lyrics",
        "segments": [
          {
            "text": "生捐大體",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(全體白衣敬禮)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "，",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "發揮生命的使用",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "權",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(全體白衣回正)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "！",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "大成鋼鐵",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(西",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "二：舉素食道具；全",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "體藍衣回正)推素14 年喔(西二法海指引)，員工兩千多人都吃素ㄟ！",
        "type": "lyrics",
        "segments": [
          {
            "text": "體藍衣回正)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "推素14 年喔",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(西",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "二法海指引)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "，員工兩千多人都吃素ㄟ！ ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "五毛錢(西二：舉五毛錢道具；法海收)可以救人一甲子(西二：投錢)耶，上人想要送給大家一甲",
        "type": "lyrics",
        "segments": [
          {
            "text": "五毛錢",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(西二：舉五毛錢道具；法海收)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "可以救人",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "一甲子",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(西二：投錢)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "耶，上人想要送給大家一甲",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "子的傳家寶耶(西二法海收)",
        "type": "lyrics",
        "segments": [
          {
            "text": "子的傳家寶耶",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(西二法海收)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "志工(轉面向道具)總動員 使命必達(大聲唸)",
        "type": "lyrics",
        "segments": [
          {
            "text": "志工",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(轉面向道具)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "總動員 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "使命必達",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(大聲唸) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "又見菩薩(持燈合十)齊合掌(敬禮) 千萬偈頌(回正)讚法王(出/跪腳雙手上)",
        "type": "lyrics",
        "segments": [
          {
            "text": "又見菩薩",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(持燈合十",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": ")",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "齊合掌",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(敬禮)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "FF0066"
          },
          {
            "text": "千萬偈頌",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(回正",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": ")",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "讚法王",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(出/跪腳雙手上) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_42",
    "title": "【富中之富  B 曲目：彌勒問】11/13、15(第2、4 天專屬曲目)",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1113",
      "1115"
    ],
    "sessionLabel": "11/13(第2天)、11/15(第4天)專屬曲目",
    "audio": "Music/功德品/1112/[功德品",
    "videos": [
      {
        "title": "[功德品] 富中之富 B",
        "videoId": "14EMlfGGBXY",
        "url": "https://www.youtube.com/watch?v=14EMlfGGBXY"
      }
    ],
    "lines": [
      {
        "text": "os 那~什麼是富中之富啊，開啟心靈的富有啊! (西一：搭靜思堂)",
        "type": "os",
        "segments": [
          {
            "text": "os 那~什麼是富中之富啊，開啟心靈的富有啊!",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(西一：搭靜思堂) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "我見彼土諸菩薩",
        "type": "lyrics",
        "segments": [
          {
            "text": "我見彼土諸菩薩  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "為求(東二：舉勸募箱.大米.毛毯)佛道行布施",
        "type": "lyrics",
        "segments": [
          {
            "text": "為求",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(東二：舉勸募箱.大米.毛毯)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "佛道行布施 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "這些實業家(東二法海指引)的菩薩身影，個個放下身段！災區發放，幫災民扛大米。還有",
        "type": "lyrics",
        "segments": [
          {
            "text": "這些實業家",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(東二法海指引)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "的菩薩身影，個個放下身段！災區發放，幫災民扛大米。還有",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "新馬實業家，放下事業，回報佛恩。",
        "type": "lyrics",
        "segments": [
          {
            "text": "新馬實業家，放下事業，回報佛恩。 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "金銀瑪瑙與寶飾",
        "type": "lyrics",
        "segments": [
          {
            "text": "金銀瑪瑙與寶飾 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "車馬(東一：舉字畫道具；東二收)華蓋摩尼珠",
        "type": "lyrics",
        "segments": [
          {
            "text": "車馬",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(東一：舉字畫道具；東二收)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "華蓋摩尼珠",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "你看! (東一法海指引)這些實業家夫人舉辦了一場又一場珠寶字畫義賣耶! 為善不欲人",
        "type": "lyrics",
        "segments": [
          {
            "text": "你看!",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "FF0066"
          },
          {
            "text": "(東一法海指引)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "這些實業家夫人舉辦了一場又一場珠寶字畫義賣耶! 為善不欲人",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "知，只求 上人 「ㄇㄞˋ煩惱」",
        "type": "lyrics",
        "segments": [
          {
            "text": "知，只求 上人 「ㄇㄞˋ煩惱」 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "又見菩薩利眾生",
        "type": "lyrics",
        "segments": [
          {
            "text": "又見菩薩利眾生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "願捨(東一收)妻子與國土",
        "type": "lyrics",
        "segments": [
          {
            "text": "願捨",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(東一收)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "妻子與國土",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "溫居士(西一法海指引)參與 921 震災，他還捐一萬多坪土地蓋靜思堂欸！他說，留財產",
        "type": "lyrics",
        "segments": [
          {
            "text": "溫居士",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(西一法海指引)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "參與 921 震災，他還捐一萬多坪土地蓋靜思堂欸！",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "他說，留財產",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "給子孫，不如留德給子孫，以善行做為傳家寶。",
        "type": "lyrics",
        "segments": [
          {
            "text": "給子孫",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "，不如留德給子孫，以善行做為傳家寶。 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "為救眾生諸病苦",
        "type": "lyrics",
        "segments": [
          {
            "text": "為救眾生諸病苦 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "頭目髓腦亦樂施(西二：南美洲蔬果)",
        "type": "lyrics",
        "segments": [
          {
            "text": "頭目",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "髓腦亦樂施",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(西二：南美洲蔬果) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "這位航運界(全體藍衣指引)的鉅子李爺爺，不僅孝順還樂善好施，生前大布施(全體白衣合",
        "type": "lyrics",
        "segments": [
          {
            "text": "這位航運界",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(全體",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "藍衣指引)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "的鉅子李爺爺，不僅孝順還樂善好施，",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "生前大布施",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "全體白衣合",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "十)，往生捐大體(全體白衣敬禮)，發揮生命的使用權(全體白衣回正)！大馬實業家(西二：舉素",
        "type": "lyrics",
        "segments": [
          {
            "text": "十)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "，往生捐大體",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(全體白衣敬禮)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "，發揮生命的使用",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "權",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(全體白衣回正)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "！大馬實業家",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "FF0066"
          },
          {
            "text": "西二：舉素",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "食道具；全體藍衣回正)陳志遠(西二法海指引)，孝順又有愛心，尤其見到 上人，當天他就吃",
        "type": "lyrics",
        "segments": [
          {
            "text": "食道具；全體藍衣回正",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": ")",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "陳志遠",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(西二法海指引)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "，孝順又有愛心，尤其見到 上人，當天他就吃",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "素，已經 11 年了！(西二法海收)",
        "type": "lyrics",
        "segments": [
          {
            "text": "素，已經 11 年了！",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(西二法海收) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "五毛錢(西二：舉五毛錢道具；法海收)可以救人一甲子(西二：投錢)耶，上人想要送給大家一甲",
        "type": "lyrics",
        "segments": [
          {
            "text": "五毛錢",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(西二：舉五毛錢道具；法海收)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "可以救人",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "一甲子",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(西二：投錢)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "耶，上人想要送給大家一甲",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "子的傳家寶耶(西二法海收)",
        "type": "lyrics",
        "segments": [
          {
            "text": "子的傳家寶耶",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(西二法海收)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "志工(轉面向道具)總動員 使命必達(大聲唸)",
        "type": "lyrics",
        "segments": [
          {
            "text": "志工",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(轉面向道具)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "總動員 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "使命必達",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(大聲唸) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "又見菩薩(持燈合十)齊合掌(敬禮) 千萬偈頌(回正)讚法王(出/跪腳雙手上)",
        "type": "lyrics",
        "segments": [
          {
            "text": "又見菩薩",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(持燈合十",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": ")",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "齊合掌",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(敬禮)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "FF0066"
          },
          {
            "text": "千萬偈頌",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(回正",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": ")",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "讚法王",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(出/跪腳雙手上) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_43",
    "title": "【開經書 曲目：無量義經功德品】",
    "formationKey": "fiveContinents1",
    "formationLabel": "10-1五大洲 (台灣/開經書)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/功德品/1112/[功德品",
    "videos": [],
    "lines": [
      {
        "text": "無量義經佛宅來",
        "type": "lyrics",
        "segments": [
          {
            "text": "無量義經佛宅來 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "去到一切眾生心",
        "type": "lyrics",
        "segments": [
          {
            "text": "去到一切眾生心 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "諸住菩薩所行處",
        "type": "lyrics",
        "segments": [
          {
            "text": "諸住菩薩所行處 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "十大功德潤蒼生",
        "type": "lyrics",
        "segments": [
          {
            "text": "十大功德潤蒼生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_44",
    "title": "【約旦 曲目1：第三功德】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1112"
    ],
    "sessionLabel": "11/12(第1天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品",
    "videos": [
      {
        "title": "[功德品] 第三功德‧約旦+土耳其",
        "videoId": "0UcRe5beSzw",
        "url": "https://www.youtube.com/watch?v=0UcRe5beSzw&list=PLbIvC-A2H2ko"
      }
    ],
    "lines": [
      {
        "text": "第三功德難思議",
        "type": "lyrics",
        "segments": [
          {
            "text": "第三功德難思議 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "自在度人顯願力",
        "type": "lyrics",
        "segments": [
          {
            "text": "自在度人顯願力 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "雖有煩擾無煩惱",
        "type": "lyrics",
        "segments": [
          {
            "text": "雖有煩擾無煩惱 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "雖有生死無畏懼",
        "type": "lyrics",
        "segments": [
          {
            "text": "雖有生死無畏懼",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_45",
    "title": "【曲目2：啟航】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1112"
    ],
    "sessionLabel": "11/12(第1天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品",
    "videos": [
      {
        "title": "[功德品] 張起大愛的風帆‧約旦(法海)",
        "videoId": "MD8To93EY0I",
        "url": "https://www.youtube.com/watch?v=MD8To93EY0I&list=PLbIvC-A2H2ko"
      }
    ],
    "lines": [
      {
        "text": "張起大愛的風帆當初領養的小王子(指引)長大上學了 耀眼金光燦爛(阿拉伯語os)",
        "type": "lyrics",
        "segments": [
          {
            "text": "張起大愛的風帆",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "當初領養的",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "小王子",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(指引)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "長大上學了",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " 耀眼金光燦爛",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(阿拉伯語os) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "衝破巨浪(阿拉伯語os) 向前航",
        "type": "lyrics",
        "segments": [
          {
            "text": "衝破巨浪",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(阿拉伯語os) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "向前",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "航  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "救拔眾生",
        "type": "lyrics",
        "segments": [
          {
            "text": "救拔眾",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "生",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "救拔眾生  到 彼 岸~~~",
        "type": "lyrics",
        "segments": [
          {
            "text": "救拔眾",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "生",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "  到 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "彼",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "岸",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "~~~ ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_46",
    "title": "【黑區變亮區 曲目1：第六功德】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1112"
    ],
    "sessionLabel": "11/12(第1天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品",
    "videos": [
      {
        "title": "[功德品] 第六功德‧黑區變亮區",
        "videoId": "1SAdHJZAVuc",
        "url": "https://www.youtube.com/watch?v=1SAdHJZAVuc&list=PLbIvC-A2H2ko"
      }
    ],
    "lines": [
      {
        "text": "第六功德不思議",
        "type": "lyrics",
        "segments": [
          {
            "text": "第六功德不思議 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "生死煩惱盡遠離",
        "type": "lyrics",
        "segments": [
          {
            "text": "生死煩惱盡遠離 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "能斷一切苦與厄",
        "type": "lyrics",
        "segments": [
          {
            "text": "能斷一切苦與厄 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "與佛如來無差異",
        "type": "lyrics",
        "segments": [
          {
            "text": "與佛如來無差異",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_47",
    "title": "【曲目2：化城喻故事】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1112"
    ],
    "sessionLabel": "11/12(第1天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品",
    "videos": [
      {
        "title": "[功德品] 諸惡道險猶長遠‧黑區變亮區(法海)",
        "videoId": "y2cdRGMovd0",
        "url": "https://www.youtube.com/watch?v=y2cdRGMovd0&list=PLbIvC-A2H2ko"
      }
    ],
    "lines": [
      {
        "text": "諸惡道險猶長遠 愛無國界 吼 久受勤苦乃可度 難行能行 吼",
        "type": "lyrics",
        "segments": [
          {
            "text": "諸惡道險猶長遠 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "愛無國界 吼",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " 久受勤苦乃可度 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "難行能行 吼 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "當勤精進至寶所 令離(得令)生死入佛慧 小小螢火蟲 黑區變亮區",
        "type": "lyrics",
        "segments": [
          {
            "text": "當勤精進至寶所 令離(得令)生死入佛慧 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "小小螢火蟲 黑區變亮區 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_48",
    "title": "【莫三比克 曲目1：第八功德】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1112"
    ],
    "sessionLabel": "11/12(第1天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品",
    "videos": [
      {
        "title": "[功德品] 第八功德‧非洲",
        "videoId": "vZU-rtMuEoE",
        "url": "https://www.youtube.com/watch?v=vZU-rtMuEoE&list=PLbIvC-A2H2ko"
      }
    ],
    "lines": [
      {
        "text": "第八功德不思議",
        "type": "lyrics",
        "segments": [
          {
            "text": "第八功德不思議 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "種種方便令發(厚心)",
        "type": "lyrics",
        "segments": [
          {
            "text": "種種方便令發(厚心)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "信心既發令勇(厚猛)",
        "type": "lyrics",
        "segments": [
          {
            "text": "信心既發令勇(厚猛)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "守之不動令堅(厚定)",
        "type": "lyrics",
        "segments": [
          {
            "text": "守之不動令堅(厚定) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_49",
    "title": "【曲目2：髻珠喻經文】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1112"
    ],
    "sessionLabel": "11/12(第1天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品",
    "videos": [
      {
        "title": "[功德品] 身口意念應守護(莫三比克‧法海)",
        "videoId": "SCohDEBScvY",
        "url": "https://www.youtube.com/watch?v=SCohDEBScvY&list=PLbIvC-A2H2ko"
      }
    ],
    "lines": [
      {
        "text": "用愛傳法到非洲",
        "type": "lyrics",
        "segments": [
          {
            "text": "用愛傳法到非洲 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "開啟人人 心靈財富 吼、嘿",
        "type": "lyrics",
        "segments": [
          {
            "text": "開啟人人 心靈財富 吼、嘿 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "紮根教育 翻轉非洲 吼、嘿",
        "type": "lyrics",
        "segments": [
          {
            "text": "紮根教育 翻轉非洲 吼、嘿 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "身口意念(厚應)守(厚護)",
        "type": "lyrics",
        "segments": [
          {
            "text": "身口意念(厚應)守(厚護)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "慈心悲願(厚利)眾(厚生)",
        "type": "lyrics",
        "segments": [
          {
            "text": "慈心悲願(厚利)眾(厚生)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "無上妙法 (厚難)解(厚信)",
        "type": "lyrics",
        "segments": [
          {
            "text": "無上妙法 (厚難)解(厚信) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "譬如髻珠放光明",
        "type": "lyrics",
        "segments": [
          {
            "text": "譬如髻珠放光明 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "譬如髻珠放光明",
        "type": "lyrics",
        "segments": [
          {
            "text": "譬如髻珠放光明 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "譬如髻珠放光明",
        "type": "lyrics",
        "segments": [
          {
            "text": "譬如髻珠放光明 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_50",
    "title": "【台灣救災集錦 曲目：第五功德】",
    "formationKey": "fiveContinents1",
    "formationLabel": "10-1五大洲 (台灣/開經書)",
    "sessionKeys": [
      "1112"
    ],
    "sessionLabel": "11/12(第1天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品",
    "videos": [
      {
        "title": "[功德品] 第五功德‧台灣救災集錦",
        "videoId": "aNi9Y8qbZp0",
        "url": "https://www.youtube.com/watch?v=aNi9Y8qbZp0&list=PLbIvC-A2H2ko"
      }
    ],
    "lines": [
      {
        "text": "第五功德難思議",
        "type": "lyrics",
        "segments": [
          {
            "text": "第五功德難思議 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "持誦書寫刻不離",
        "type": "lyrics",
        "segments": [
          {
            "text": "持誦書寫刻不離 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "剎那恆持長相應",
        "type": "lyrics",
        "segments": [
          {
            "text": "剎那恆持長相應 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "眾生信服得歡喜",
        "type": "lyrics",
        "segments": [
          {
            "text": "眾生信服得歡喜 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_51",
    "title": "【曲目：衣珠喻手扎】",
    "formationKey": "fiveContinents1",
    "formationLabel": "10-1五大洲 (台灣/開經書)",
    "sessionKeys": [
      "1112"
    ],
    "sessionLabel": "11/12(第1天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品] 05台灣救災集錦_第五功德.mp3",
    "videos": [],
    "lines": [
      {
        "text": "上人：(合十)看他們真的很大膽啊,路整條都崩,只是隨便把竹子鋪著,你看畫面上看",
        "type": "dialogue",
        "segments": [
          {
            "text": "上人：",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(合十)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "看他們真的很大膽啊,路整條都崩,只是隨便把竹子鋪著,你看畫面上看 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "到嗎?那是懸崖啊!每一次哪裡有災難,我一定要說,拜託你們(法海呈現情境後定格),等到路",
        "type": "lyrics",
        "segments": [
          {
            "text": "到嗎?那是懸崖啊!每一次哪裡有災難,我一定要說,",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "拜託你們",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(法海呈現情境後定格)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": ",等到路",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "可以通了,拜託你們救災的人一定要為我照顧平安。",
        "type": "lyrics",
        "segments": [
          {
            "text": "可以通了,拜託你們救災的人一定要為我照顧平安。 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "諸佛菩薩大悲心",
        "type": "lyrics",
        "segments": [
          {
            "text": "諸佛菩薩大悲心  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "黃老師OS：哪裡有災難",
        "type": "dialogue",
        "segments": [
          {
            "text": "黃老師OS：哪裡有災難 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "慈濟人就在那裡",
        "type": "lyrics",
        "segments": [
          {
            "text": "慈濟人就在那裡 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "有人蓋房子",
        "type": "lyrics",
        "segments": [
          {
            "text": "有人蓋房子  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "有人送便當",
        "type": "lyrics",
        "segments": [
          {
            "text": "有人送便當 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "有人提水桶",
        "type": "lyrics",
        "segments": [
          {
            "text": "有人提水桶  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "有人修屋頂",
        "type": "lyrics",
        "segments": [
          {
            "text": "有人修屋頂  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "有人合十助念 有人搬隔屏",
        "type": "lyrics",
        "segments": [
          {
            "text": "有人合十助念 有人搬隔屏 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "有人扛米過懸崖",
        "type": "lyrics",
        "segments": [
          {
            "text": "有人扛米過懸崖 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "六十年來",
        "type": "lyrics",
        "segments": [
          {
            "text": "六十年來  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "有一群人",
        "type": "lyrics",
        "segments": [
          {
            "text": "有一群人  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "不斷奔向需要他們的地方",
        "type": "lyrics",
        "segments": [
          {
            "text": "不斷奔向需要他們的地方 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "走在最前",
        "type": "lyrics",
        "segments": [
          {
            "text": "走在最前  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "陪到最後",
        "type": "lyrics",
        "segments": [
          {
            "text": "陪到最後 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "咚咚(回正)走在最前(藍衣單手單腳) 咚咚陪到最後(藍衣環抱)",
        "type": "lyrics",
        "segments": [
          {
            "text": "咚咚",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(回正)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "走在最前",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(藍衣單手單腳)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "FF0000"
          },
          {
            "text": "咚咚",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "陪到最後",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(藍衣環抱)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "  ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "FF0000"
          }
        ]
      },
      {
        "text": "咚咚(全體朝向觀眾45 度)台灣愛心總動員(跑) 六度行 樂無窮",
        "type": "lyrics",
        "segments": [
          {
            "text": "咚咚",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(全體朝向觀眾45 度)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "台灣愛心總動",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "員",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(跑) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "六度行 樂無窮 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_52",
    "title": "【土耳其 曲目：第三功德】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1113"
    ],
    "sessionLabel": "11/13(第2天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品",
    "videos": [
      {
        "title": "[功德品] 第三功德‧約旦+土耳其",
        "videoId": "0UcRe5beSzw",
        "url": "https://www.youtube.com/watch?v=0UcRe5beSzw&list=PLGafJimf9RDw"
      }
    ],
    "lines": [
      {
        "text": "第三功德難思議",
        "type": "lyrics",
        "segments": [
          {
            "text": "第三功德難思議 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "自在度人顯願力",
        "type": "lyrics",
        "segments": [
          {
            "text": "自在度人顯願力 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "雖有煩擾無煩惱",
        "type": "lyrics",
        "segments": [
          {
            "text": "雖有煩擾無煩惱 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "雖有生死無畏懼",
        "type": "lyrics",
        "segments": [
          {
            "text": "雖有生死無畏懼",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_53",
    "title": "【南非 曲目1：第八功德】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1113"
    ],
    "sessionLabel": "11/13(第2天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品",
    "videos": [
      {
        "title": "[功德品] 第八功德‧非洲",
        "videoId": "vZU-rtMuEoE",
        "url": "https://www.youtube.com/watch?v=vZU-rtMuEoE&list=PLGafJimf9RDw"
      }
    ],
    "lines": [
      {
        "text": "第八功德不思議",
        "type": "lyrics",
        "segments": [
          {
            "text": "第八功德不思議 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "種種方便令發(厚心)",
        "type": "lyrics",
        "segments": [
          {
            "text": "種種方便令發(厚心)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "信心既發令勇(厚猛)",
        "type": "lyrics",
        "segments": [
          {
            "text": "信心既發令勇(厚猛)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "守之不動令堅(厚定)",
        "type": "lyrics",
        "segments": [
          {
            "text": "守之不動令堅(厚定) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_54",
    "title": "【曲目2：髻珠喻經文】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1113"
    ],
    "sessionLabel": "11/13(第2天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品",
    "videos": [
      {
        "title": "11/13 [功德品] 身口意念應守護(南非‧法海)",
        "videoId": "htAI4IbqJtE",
        "url": "https://www.youtube.com/watch?v=htAI4IbqJtE&list=PLGafJimf9RDw"
      }
    ],
    "lines": [
      {
        "text": "用愛傳法到非洲",
        "type": "lyrics",
        "segments": [
          {
            "text": "用愛傳法到非洲 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "自立更生 手心向下 吼、嘿",
        "type": "lyrics",
        "segments": [
          {
            "text": "自立更生 手心向下 吼、嘿 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "難行能行 跨國傳法 吼、嘿",
        "type": "lyrics",
        "segments": [
          {
            "text": "難行能行 跨國傳法 吼、嘿 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "身口意念(厚應)守(厚護)",
        "type": "lyrics",
        "segments": [
          {
            "text": "身口意念(厚應)守(厚護)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "慈心悲願(厚利)眾(厚生)",
        "type": "lyrics",
        "segments": [
          {
            "text": "慈心悲願(厚利)眾(厚生)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "無上妙法 (厚難)解(厚信)",
        "type": "lyrics",
        "segments": [
          {
            "text": "無上妙法 (厚難)解(厚信) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "譬如髻珠放光明",
        "type": "lyrics",
        "segments": [
          {
            "text": "譬如髻珠放光明 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "譬如髻珠放光明",
        "type": "lyrics",
        "segments": [
          {
            "text": "譬如髻珠放光明 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "譬如髻珠放光明",
        "type": "lyrics",
        "segments": [
          {
            "text": "譬如髻珠放光明 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_55",
    "title": "【印尼 曲目1：第九功德】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1113"
    ],
    "sessionLabel": "11/13(第2天)專屬曲目",
    "audio": "",
    "videos": [
      {
        "title": "[功德品] 第九功德‧印尼",
        "videoId": "CvAlUYsudqk",
        "url": "https://www.youtube.com/watch?v=CvAlUYsudqk&list=PLGafJimf9RDw"
      }
    ],
    "lines": [
      {
        "text": "第九功德難思議",
        "type": "lyrics",
        "segments": [
          {
            "text": "第九功德難思議 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "願力得登善慧地",
        "type": "lyrics",
        "segments": [
          {
            "text": "願力得登善慧地 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "辯才無礙得清淨",
        "type": "lyrics",
        "segments": [
          {
            "text": "辯才無礙得清淨 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "宿業重障一時(厚滅)",
        "type": "lyrics",
        "segments": [
          {
            "text": "宿業重障一時(厚滅) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_56",
    "title": "【曲目2：化城喻手扎】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1113"
    ],
    "sessionLabel": "11/13(第2天)專屬曲目",
    "audio": "",
    "videos": [
      {
        "title": "[功德品] 菩薩慈悲憫眾生‧印尼(法海)",
        "videoId": "xmX4NrnNqJA",
        "url": "https://www.youtube.com/watch?v=xmX4NrnNqJA&list=PLGafJimf9RDw"
      }
    ],
    "lines": [
      {
        "text": "菩薩慈悲愍眾生",
        "type": "lyrics",
        "segments": [
          {
            "text": "菩薩慈悲愍眾生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "廣行善法饒有情",
        "type": "lyrics",
        "segments": [
          {
            "text": "廣行善法饒有情 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "深修善緣正因法",
        "type": "lyrics",
        "segments": [
          {
            "text": "深修善緣正因法 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "深修善緣正因法",
        "type": "lyrics",
        "segments": [
          {
            "text": "深修善緣正因法 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "因成果熟得解脫",
        "type": "lyrics",
        "segments": [
          {
            "text": "因成果熟得解脫 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "求法立誓宏願深",
        "type": "lyrics",
        "segments": [
          {
            "text": "求法立誓宏願深 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "任重道遠續法脈",
        "type": "lyrics",
        "segments": [
          {
            "text": "任重道遠續法脈 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "願度眾生出苦輪",
        "type": "lyrics",
        "segments": [
          {
            "text": "願度眾生出苦輪 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "安邦定國在印尼",
        "type": "lyrics",
        "segments": [
          {
            "text": "安邦定國在印尼 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_57",
    "title": "【緬甸 米撲滿 曲目：第二功德】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1114"
    ],
    "sessionLabel": "11/14(第3天)專屬曲目",
    "audio": "Music/功德品/1114/11_14 [功德品",
    "videos": [
      {
        "title": "11/14 [功德品] 第二功德 緬甸米撲滿",
        "videoId": "yeEd_aeAv5k",
        "url": "https://www.youtube.com/watch?v=yeEd_aeAv5k&list=PLGRfIGuFCUAQ"
      }
    ],
    "lines": [
      {
        "text": "os 五毛錢的力量 來到緬甸 八分飽 兩分救人好 我沒有錢 但我也可以救人",
        "type": "os",
        "segments": [
          {
            "text": "os 五毛錢的力量 來到",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "緬甸",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " 八分飽 兩分救人",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "好",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " 我沒有錢 但我也可以救人  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "那我也可以救人啦(演員) 我也可以救人啦(東西一舉手) 我也可以救人啦(東西二舉手)",
        "type": "lyrics",
        "segments": [
          {
            "text": "那我也可",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "以救人啦",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(演員)",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": " 我也可以",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "救人啦",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(東西一舉手)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 我也可以",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "救人啦",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(東西二舉手)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "日存一把米(收手收腳)  日存一把米 一起來救人",
        "type": "lyrics",
        "segments": [
          {
            "text": "日存一把",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "米",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(收手收",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "腳)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " 日存一把米 一起來救人  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "丹茵鎮參加(東一跑) 葛瓦鎮也要參加(西一跑) 德巴村也參加(東西二跑)",
        "type": "lyrics",
        "segments": [
          {
            "text": "丹茵鎮參",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "加",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(東一跑) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "葛瓦鎮也要參",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "加",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(西一跑)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 德巴村也",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "參加",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(東",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "西二跑) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "從一個人到(收手收腳)一個村 帶動了兩百多個村 有了慈濟田(白衣高跪)  更有了慈濟路",
        "type": "lyrics",
        "segments": [
          {
            "text": "從一個人",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "到",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(收手收",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "腳)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "一個村 帶動了兩百多個村 有了",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "慈濟田",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(白衣高跪)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "  更有了慈濟路 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "一把米的精神 已經普及全球慈濟人的心中 一生無量(白衣坐跪)",
        "type": "lyrics",
        "segments": [
          {
            "text": "一把米的精神 已經普及全球慈濟人的心中 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "一生無量",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(白衣坐跪)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "第二功德難思(厚議) 一法能生百千(厚義)",
        "type": "lyrics",
        "segments": [
          {
            "text": "第二功德難思(厚議) 一法能生百千(厚義)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "百千義中復又(厚生)",
        "type": "lyrics",
        "segments": [
          {
            "text": "百千義中復又(厚生)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "如是輾轉無量義",
        "type": "lyrics",
        "segments": [
          {
            "text": "如是輾轉無量義 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "一理能徹萬里(厚徹) 一法能攝萬法(厚攝)",
        "type": "lyrics",
        "segments": [
          {
            "text": "一理能徹萬里(厚徹) 一法能攝萬法(厚攝)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "一言半句勤誦(厚習)",
        "type": "lyrics",
        "segments": [
          {
            "text": "一言半句勤誦(厚習)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "通達無量微妙理",
        "type": "lyrics",
        "segments": [
          {
            "text": "通達無量微妙",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "理",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_58",
    "title": "【八八風災 曲目：第七功德】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1114"
    ],
    "sessionLabel": "11/14(第3天)專屬曲目",
    "audio": "Music/功德品/1114/11_14 [功德品",
    "videos": [
      {
        "title": "[功德品] 第七功德‧莫拉克風災",
        "videoId": "mjPNSTARlmY",
        "url": "https://www.youtube.com/watch?v=mjPNSTARlmY&list=PLGRfIGuFCUAQ"
      }
    ],
    "lines": [
      {
        "text": "第七功德不思議",
        "type": "lyrics",
        "segments": [
          {
            "text": "第七功德不思議 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "六波羅(厚蜜)顯神(厚奇) 愛灑人間大悲(厚意)",
        "type": "lyrics",
        "segments": [
          {
            "text": "六波羅(厚蜜)顯神(厚奇) 愛灑人間大悲(厚意)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "令諸眾苦皆得離",
        "type": "lyrics",
        "segments": [
          {
            "text": "令諸眾苦皆得離 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_59",
    "title": "【曲目：十在心路】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1114"
    ],
    "sessionLabel": "11/14(第3天)專屬曲目",
    "audio": "Music/功德品/1114/11_14 [功德品] 02第七功德(八八風災).mp3",
    "videos": [],
    "lines": [
      {
        "text": "~~狂風暴雨聲~~~  路基流走了 路基沒有了~~",
        "type": "lyrics",
        "segments": [
          {
            "text": "~~狂風暴雨聲~~~  路基流走了 路基沒有了~~  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "在苦難中長養慈悲一定要在平地蓋永久屋，山林才能養息(在變數中考驗智慧)，我知道你們很",
        "type": "lyrics",
        "segments": [
          {
            "text": "在苦難中長養慈悲",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "一定要在平地蓋永久屋，山林才能養息",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(在變數中考驗智慧)",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "，我知道你們很",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "多人是租房子(在艱難中激發韌力)，我也知道你們很多人是磨手皮做粗工的(在繁瑣中學習耐性)，",
        "type": "lyrics",
        "segments": [
          {
            "text": "多人是租房子",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(在艱難中激發韌力)",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "，我也知道你們很多人是磨手皮做粗工的",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(在繁瑣中學習耐性)",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "，",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "但是，這一次慈濟想要蓋的永久(在複雜中欣賞優點)屋需要很多錢，你們~~ 我願意! (在理想",
        "type": "lyrics",
        "segments": [
          {
            "text": "但是，這一次慈濟想要蓋的永久",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(在複雜中欣賞優點)",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "屋需要很多錢，你們~~ ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "我願意!",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " (在理想",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "中追求進步) 點滴會聚大愛與情誼 讓人間沒有苦痛與悲泣 期待在農曆過年前500 多戶入住永",
        "type": "lyrics",
        "segments": [
          {
            "text": "中追求進步) 點滴會聚大愛與情誼 讓人間沒有苦痛與悲泣 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "期待在農曆過年前500 多戶入住永",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "久屋(白衣)搶晴天! (藍衣)戰雨天!八十八天完成永久屋，贈送八十八件(90 度送禮)入厝",
        "type": "lyrics",
        "segments": [
          {
            "text": "久屋",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(白衣)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "搶晴天!",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " (藍衣)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "戰雨天!",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "八十八天完成永久屋，贈送",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "八十八件",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(90 度送禮)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "入厝",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "禮，在大愛園區(回正)更要有教堂和學校，讓他們世世代代都能夠安居樂業",
        "type": "lyrics",
        "segments": [
          {
            "text": "禮，",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "在大愛園區",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "(回正)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "更要有教堂和學校，讓他們世世代代都能夠安居樂業 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "感恩 上人為我們興建永久屋，住在這邊比以前心更安，以前山是光禿禿的寸草不",
        "type": "lyrics",
        "segments": [
          {
            "text": "感恩 上人為我們興建永久屋，住在這邊比以前心更安，以前山是光禿禿的寸草不",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "生，上人說要讓山林養息，我就種了好幾百棵台灣櫸樹，16 年後已經成為一大片樹林",
        "type": "lyrics",
        "segments": [
          {
            "text": "生，上人說要讓山林養息，我就種了好幾百棵台灣櫸樹，16 年後已經成為一大片樹林",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "了，現在山都不會崩塌了，山林養息了!世代可以安居樂業了!大地恢復生機，家就安",
        "type": "lyrics",
        "segments": [
          {
            "text": "了，現在山都不會崩塌了，山林養息了!世代可以安居樂業了!大地恢復生機，家就安",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
      {
        "text": "全了! 傳頌生命(轉陸地中心)的尊貴與傳奇 咚~ 讓山林養息 咚~ 世代安居樂業",
        "type": "lyrics",
        "segments": [
          {
            "text": "全了!",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "傳頌生命",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(轉陸地中心)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "的尊貴與傳奇 咚~ ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "讓山林養息",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " 咚~ ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "世代安居樂業",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_60",
    "title": "【泰北 曲目：第四功德】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1114"
    ],
    "sessionLabel": "11/14(第3天)專屬曲目",
    "audio": "Music/功德品/1114/11_14 [功德品",
    "videos": [
      {
        "title": "[功德品] 第四功德‧泰北",
        "videoId": "_iO0oVSMR8s",
        "url": "https://www.youtube.com/watch?v=_iO0oVSMR8s&list=PLGRfIGuFCUAQ"
      }
    ],
    "lines": [
      {
        "text": "第四功德不思議",
        "type": "lyrics",
        "segments": [
          {
            "text": "第四功德不思議 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "諸佛護念於一身",
        "type": "lyrics",
        "segments": [
          {
            "text": "諸佛護念於一身 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "雖未自度能度他",
        "type": "lyrics",
        "segments": [
          {
            "text": "雖未自度能度他 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "與諸菩薩為道侶",
        "type": "lyrics",
        "segments": [
          {
            "text": "與諸菩薩為道侶 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "譬如國王新王子",
        "type": "lyrics",
        "segments": [
          {
            "text": "譬如國王新王子 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "稚小國事難領理",
        "type": "lyrics",
        "segments": [
          {
            "text": "稚小國事難領理 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "但為臣民所崇敬",
        "type": "lyrics",
        "segments": [
          {
            "text": "但為臣民所崇敬 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "王后愛重常共語",
        "type": "lyrics",
        "segments": [
          {
            "text": "王后愛重常共語 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_61",
    "title": "【辛巴威 曲目1：第八功德】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1114"
    ],
    "sessionLabel": "11/14(第3天)專屬曲目",
    "audio": "Music/功德品/1114/11_14 [功德品",
    "videos": [
      {
        "title": "[功德品] 第八功德‧非洲",
        "videoId": "vZU-rtMuEoE",
        "url": "https://www.youtube.com/watch?v=vZU-rtMuEoE&list=PLGRfIGuFCUAQ"
      }
    ],
    "lines": [
      {
        "text": "第八功德不思議",
        "type": "lyrics",
        "segments": [
          {
            "text": "第八功德不思議 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "種種方便令發(厚心)",
        "type": "lyrics",
        "segments": [
          {
            "text": "種種方便令發(厚心)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "信心既發令勇(厚猛)",
        "type": "lyrics",
        "segments": [
          {
            "text": "信心既發令勇(厚猛)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "守之不動令堅(厚定)",
        "type": "lyrics",
        "segments": [
          {
            "text": "守之不動令堅(厚定) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_62",
    "title": "【曲目2：髻珠喻經文】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1114"
    ],
    "sessionLabel": "11/14(第3天)專屬曲目",
    "audio": "Music/功德品/1114/11_14 [功德品",
    "videos": [
      {
        "title": "[功德品] 身口意念應守護(辛巴威)",
        "videoId": "hfwvSIDG0EE",
        "url": "https://www.youtube.com/watch?v=hfwvSIDG0EE&list=PLGRfIGuFCUAQ"
      }
    ],
    "lines": [
      {
        "text": "用愛傳法到非洲",
        "type": "lyrics",
        "segments": [
          {
            "text": "用愛傳法到非洲 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "掘井湧泉 熱食供應 吼、嘿",
        "type": "lyrics",
        "segments": [
          {
            "text": "掘井湧泉 熱食供應 吼、嘿 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "生命工程 生生世世 吼、嘿",
        "type": "lyrics",
        "segments": [
          {
            "text": "生命工程 生生世世 吼、嘿 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "身口意念(厚應)守(厚護)",
        "type": "lyrics",
        "segments": [
          {
            "text": "身口意念(厚應)守(厚護)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "慈心悲願(厚利)眾(厚生)",
        "type": "lyrics",
        "segments": [
          {
            "text": "慈心悲願(厚利)眾(厚生)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "無上妙法 (厚難)解(厚信)",
        "type": "lyrics",
        "segments": [
          {
            "text": "無上妙法 (厚難)解(厚信) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "譬如髻珠放光明",
        "type": "lyrics",
        "segments": [
          {
            "text": "譬如髻珠放光明 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "譬如髻珠放光明",
        "type": "lyrics",
        "segments": [
          {
            "text": "譬如髻珠放光明 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "譬如髻珠放光明",
        "type": "lyrics",
        "segments": [
          {
            "text": "譬如髻珠放光明 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_63",
    "title": "【曲目3：生生世世都在菩提中】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1114"
    ],
    "sessionLabel": "11/14(第3天)專屬曲目",
    "audio": "Music/功德品/1114/11_14 [功德品",
    "videos": [
      {
        "title": "[功德品] 生生世世都在菩提中(辛巴威)",
        "videoId": "cSjyuO_KRp8",
        "url": "https://www.youtube.com/watch?v=cSjyuO_KRp8&list=PLGRfIGuFCUAQ"
      }
    ],
    "lines": [
      {
        "text": "我要成為有力量的辛巴威人 陪伴他們 翻轉他們的貧窮",
        "type": "lyrics",
        "segments": [
          {
            "text": "我要成為有力量的辛巴威人 陪伴他們 翻轉他們的貧窮",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "立地藏王菩薩的願 但願眾生得離苦",
        "type": "lyrics",
        "segments": [
          {
            "text": "立地藏王菩薩的願 但願眾生得離苦 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "發觀世音菩薩的心 但願愛心廣大無邊",
        "type": "lyrics",
        "segments": [
          {
            "text": "發觀世音菩薩的心 但願愛心廣大無邊 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "發心立願 生生世世都在菩提中",
        "type": "lyrics",
        "segments": [
          {
            "text": "發心立願 生生世世都在菩提中 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "立願發心 但願生生世世都在菩提中",
        "type": "lyrics",
        "segments": [
          {
            "text": "立願發心 但願生生世世都在菩提中 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "朱居士像地藏王菩薩 庇護著辛巴威的苦難",
        "type": "lyrics",
        "segments": [
          {
            "text": "朱居士像地藏王菩薩 庇護著辛巴威的苦難",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_64",
    "title": "【921 曲目1：第九功德】",
    "formationKey": "fiveContinents1",
    "formationLabel": "10-1五大洲 (台灣/開經書)",
    "sessionKeys": [
      "1115"
    ],
    "sessionLabel": "11/15(第4天)專屬曲目",
    "audio": "",
    "videos": [
      {
        "title": "[功德品] 第九功德‧921地震",
        "videoId": "hUpDtkqTQNM",
        "url": "https://www.youtube.com/watch?v=hUpDtkqTQNM&list=PLcdQvmBAiLJ0"
      }
    ],
    "lines": [
      {
        "text": "第九功德難思議",
        "type": "lyrics",
        "segments": [
          {
            "text": "第九功德難思議 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "願力得登善慧地",
        "type": "lyrics",
        "segments": [
          {
            "text": "願力得登善慧地 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "辯才無礙得清淨",
        "type": "lyrics",
        "segments": [
          {
            "text": "辯才無礙得清淨 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "宿業重障一時(厚滅)",
        "type": "lyrics",
        "segments": [
          {
            "text": "宿業重障一時(厚滅) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_65",
    "title": "【曲目2：化城喻故事】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1115"
    ],
    "sessionLabel": "11/15(第4天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品",
    "videos": [],
    "lines": [
      {
        "text": "地湧菩薩",
        "type": "lyrics",
        "segments": [
          {
            "text": "地湧菩薩 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "若入是城可止息",
        "type": "lyrics",
        "segments": [
          {
            "text": "若入是城可止息 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "希望工程",
        "type": "lyrics",
        "segments": [
          {
            "text": "希望工程",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "疲極之眾心歡喜",
        "type": "lyrics",
        "segments": [
          {
            "text": "疲極之眾心歡喜 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "千年不倒",
        "type": "lyrics",
        "segments": [
          {
            "text": "千年不倒",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "讚歎頓生已度想",
        "type": "lyrics",
        "segments": [
          {
            "text": "讚歎頓生已度想 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "信願行",
        "type": "lyrics",
        "segments": [
          {
            "text": "信願行",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "悅樂更生安隱想",
        "type": "lyrics",
        "segments": [
          {
            "text": "悅樂更生安隱想 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_66",
    "title": "【曲目3：化城喻故事】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1115"
    ],
    "sessionLabel": "11/15(第4天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品",
    "videos": [],
    "lines": [
      {
        "text": "諸惡道險猶長遠 教育工程 (吼)",
        "type": "lyrics",
        "segments": [
          {
            "text": "諸惡道險猶長遠 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "教育工程",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " (",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "FF0000"
          },
          {
            "text": "吼)",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "久受勤苦乃可度 社會希望 (吼)",
        "type": "lyrics",
        "segments": [
          {
            "text": "久受勤苦乃可度 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "社會希望 ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          },
          {
            "text": "(",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "FF0000"
          },
          {
            "text": "吼)  ",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "當勤精進至寶所",
        "type": "lyrics",
        "segments": [
          {
            "text": "當勤精進至寶所 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "令離(得令)生死入佛慧",
        "type": "lyrics",
        "segments": [
          {
            "text": "令離(得令)生死入佛慧 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_67",
    "title": "【減災工程 曲目：許一個希望的未來】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1115"
    ],
    "sessionLabel": "11/15(第4天)專屬曲目",
    "audio": "",
    "videos": [
      {
        "title": "[功德品] 大愛為樑(減災希望工程)",
        "videoId": "Qu7wLnDXivU",
        "url": "https://www.youtube.com/watch?v=Qu7wLnDXivU&list=PLcdQvmBAiLJ0"
      }
    ],
    "lines": [
      {
        "text": "大愛為樑",
        "type": "lyrics",
        "segments": [
          {
            "text": "大愛為樑 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "智慧為牆",
        "type": "lyrics",
        "segments": [
          {
            "text": "智慧為牆 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "把握當下",
        "type": "lyrics",
        "segments": [
          {
            "text": "把握當下 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "成就希望的殿堂",
        "type": "lyrics",
        "segments": [
          {
            "text": "成就希望的殿堂 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_68",
    "title": "【報佛恩 曲目1：人間導師】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1115"
    ],
    "sessionLabel": "11/15(第4天)專屬曲目",
    "audio": "",
    "videos": [
      {
        "title": "[功德品] 報佛恩",
        "videoId": "KwsN8MKQxOE",
        "url": "https://www.youtube.com/watch?v=KwsN8MKQxOE&list=PLcdQvmBAiLJ0"
      }
    ],
    "lines": [
      {
        "text": "淨治身心 利濟有情",
        "type": "lyrics",
        "segments": [
          {
            "text": "淨治身心 利濟有情 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "弘正法 續慧命",
        "type": "lyrics",
        "segments": [
          {
            "text": "弘正法 續慧命 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "仰師德範 報法乳恩",
        "type": "lyrics",
        "segments": [
          {
            "text": "仰師德範 報法乳恩 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "為佛教 為眾生",
        "type": "lyrics",
        "segments": [
          {
            "text": "為佛教 為眾生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "仰師德範 報法乳恩",
        "type": "lyrics",
        "segments": [
          {
            "text": "仰師德範 報法乳恩 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "為佛教 為眾生",
        "type": "lyrics",
        "segments": [
          {
            "text": "為佛教 為眾生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_69",
    "title": "【曲目2：第十功德】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1115"
    ],
    "sessionLabel": "11/15(第4天)專屬曲目",
    "audio": "",
    "videos": [
      {
        "title": "[功德品] 飛天‧白衣走",
        "videoId": "eyAZbFSw39M",
        "url": "https://www.youtube.com/watch?v=eyAZbFSw39M&list=PLcdQvmBAiLJ0"
      },
      {
        "title": "[功德品] 飛天‧藍衣走",
        "videoId": "8FLAEwVIV4k",
        "url": "https://www.youtube.com/watch?v=8FLAEwVIV4k&list=PLcdQvmBAiLJ0"
      },
      {
        "title": "[功德品] 飛天‧不動",
        "videoId": "8zdJcA0VUMA",
        "url": "https://www.youtube.com/watch?v=8zdJcA0VUMA&list=PLcdQvmBAiLJ0"
      }
    ],
    "lines": [
      {
        "text": "如法修行得道果",
        "type": "lyrics",
        "segments": [
          {
            "text": "如法修行得道果  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "第十功德難思議  凡夫地時弘誓願",
        "type": "lyrics",
        "segments": [
          {
            "text": "第十功德難思議  凡夫地時弘誓願  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "厚集善根益一切",
        "type": "lyrics",
        "segments": [
          {
            "text": "厚集善根益一切   ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "洪潤枯涸演法義",
        "type": "lyrics",
        "segments": [
          {
            "text": "洪潤枯涸演法義  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "眾生有病法藥醫   慈被眾生恩澤潤",
        "type": "lyrics",
        "segments": [
          {
            "text": "眾生有病法藥醫   慈被眾生恩澤潤  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "道跡漸登法雲地",
        "type": "lyrics",
        "segments": [
          {
            "text": "道跡漸登法雲地 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "道跡漸登法~雲~地~",
        "type": "lyrics",
        "segments": [
          {
            "text": "道跡漸登法~雲~地~ ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_70",
    "title": "【六瑞相 曲目：六瑞相】",
    "formationKey": "sixRuiXiang",
    "formationLabel": "12-1六瑞相 (發願/行星/祈禱)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/終章/01.六瑞相.mp3",
    "videos": [],
    "lines": [
      {
        "text": "佛說法華演大法",
        "type": "lyrics",
        "segments": [
          {
            "text": "佛說法華演大法 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "六祥瑞相先現前",
        "type": "lyrics",
        "segments": [
          {
            "text": "六祥瑞相先現前 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "因緣具足法成就",
        "type": "lyrics",
        "segments": [
          {
            "text": "因緣具足法成就 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "教化凡夫轉聖賢",
        "type": "lyrics",
        "segments": [
          {
            "text": "教化凡夫轉聖賢 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "身心不動入三昧",
        "type": "lyrics",
        "segments": [
          {
            "text": "身心不動入三昧 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "無量義經融法髓",
        "type": "lyrics",
        "segments": [
          {
            "text": "無量義經融法髓 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "天雨四華柔適意",
        "type": "lyrics",
        "segments": [
          {
            "text": "天雨四華柔適意 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "地動涌震搖吼擊",
        "type": "lyrics",
        "segments": [
          {
            "text": "地動涌震搖吼擊 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "大眾愉悅心快然",
        "type": "lyrics",
        "segments": [
          {
            "text": "大眾愉悅心快然 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "道場安詳妙莊嚴",
        "type": "lyrics",
        "segments": [
          {
            "text": "道場安詳妙莊嚴 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "佛放眉間白毫光",
        "type": "lyrics",
        "segments": [
          {
            "text": "佛放眉間白毫光 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "遍照東方萬八千",
        "type": "lyrics",
        "segments": [
          {
            "text": "遍照東方萬八千 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "講者歡喜暢本懷",
        "type": "lyrics",
        "segments": [
          {
            "text": "講者歡喜暢本懷 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "隨自意說真實法",
        "type": "lyrics",
        "segments": [
          {
            "text": "隨自意說真實法 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "聞者虔誠心體會",
        "type": "lyrics",
        "segments": [
          {
            "text": "聞者虔誠心體會 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "真誠諦聽合佛心",
        "type": "lyrics",
        "segments": [
          {
            "text": "真誠諦聽合佛心 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_71",
    "title": "【發心立願 曲目：行願半世紀】",
    "formationKey": "sixRuiXiang",
    "formationLabel": "12-1六瑞相 (發願/行星/祈禱)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/終章/02.發心立願.mp3",
    "videos": [],
    "lines": [
      {
        "text": "靜思法脈傳心燈",
        "type": "lyrics",
        "segments": [
          {
            "text": "靜思法脈傳心燈 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "慈濟宗門利群生",
        "type": "lyrics",
        "segments": [
          {
            "text": "慈濟宗門利群生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "法華行經正道勤",
        "type": "lyrics",
        "segments": [
          {
            "text": "法華行經正道勤 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "普皆授記成佛因",
        "type": "lyrics",
        "segments": [
          {
            "text": "普皆授記成佛因 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "體悟佛心即為己心 領受師志奉為己志",
        "type": "lyrics",
        "segments": [
          {
            "text": "體悟佛心即為己心 領受師志奉為己志  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "生生世世誓為佛教 心心念念誠為眾生",
        "type": "lyrics",
        "segments": [
          {
            "text": "生生世世誓為佛教 心心念念誠為眾生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "生生世世誓為佛教 心心念念誠為眾生",
        "type": "lyrics",
        "segments": [
          {
            "text": "生生世世誓為佛教 心心念念誠為眾生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_72",
    "title": "【慈濟小行星 曲目：慈濟小行星】",
    "formationKey": "sixRuiXiang",
    "formationLabel": "12-1六瑞相 (發願/行星/祈禱)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/終章/03.慈濟小行星演繹版+開示.mp3",
    "videos": [],
    "lines": [
      {
        "text": "浩瀚的天空",
        "type": "lyrics",
        "segments": [
          {
            "text": "浩瀚的天空  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "有顆慈濟小行星",
        "type": "lyrics",
        "segments": [
          {
            "text": "有顆慈濟小行星 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "在無垠的宇宙 繞著太陽系運行",
        "type": "lyrics",
        "segments": [
          {
            "text": "在無垠的宇宙 繞著太陽系運行 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "用慈悲的眼",
        "type": "lyrics",
        "segments": [
          {
            "text": "用慈悲的眼  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "俯視著地球蒼生",
        "type": "lyrics",
        "segments": [
          {
            "text": "俯視著地球蒼生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "那是愛的無痕 無量義溫暖的心",
        "type": "lyrics",
        "segments": [
          {
            "text": "那是愛的無痕 無量義溫暖的心 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "距離地球三億公里 不同的年輪",
        "type": "lyrics",
        "segments": [
          {
            "text": "距離地球三億公里 不同的年輪  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "永恆不變的演繹著",
        "type": "lyrics",
        "segments": [
          {
            "text": "永恆不變的演繹著  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "法華的精神",
        "type": "lyrics",
        "segments": [
          {
            "text": "法華的精神 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "慈濟小行星",
        "type": "lyrics",
        "segments": [
          {
            "text": "慈濟小行星  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "化剎那 為永恆",
        "type": "lyrics",
        "segments": [
          {
            "text": "化剎那 為永恆 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_73",
    "title": "【祈禱 曲目：祈禱】",
    "formationKey": "sixRuiXiang",
    "formationLabel": "12-1六瑞相 (發願/行星/祈禱)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "Music/終章/04.祈禱三分版.mp3",
    "videos": [],
    "lines": [
      {
        "text": "我的心 在靜思中感恩 我的心念(舉高)充滿虔誠",
        "type": "lyrics",
        "segments": [
          {
            "text": "我的心 在靜思中感恩 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "我的心念",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(舉高)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "充滿虔誠  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "大家一起來祈禱(慢慢收) 從不同角落地點",
        "type": "lyrics",
        "segments": [
          {
            "text": "大家一起來祈禱",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(慢慢收)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 從不同角落地點 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "祈求平安吉祥滿人間",
        "type": "lyrics",
        "segments": [
          {
            "text": "祈求平安吉祥滿人間 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "用心(舉高) 祈禱  但願人人(慢慢收) 牽手心連心",
        "type": "lyrics",
        "segments": [
          {
            "text": "用心",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(舉高)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 祈禱 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "但願人人",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(慢慢收)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": " 牽手心連心 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "開啟光明大愛 長養智慧福德 娑婆世界現光明",
        "type": "lyrics",
        "segments": [
          {
            "text": "開啟光明大愛 長養智慧福德 娑婆世界現光明 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "我的心 在靜思中感恩 我的心念(舉高)上達諸佛心",
        "type": "lyrics",
        "segments": [
          {
            "text": "我的心 在靜思中感恩 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "我的心念",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "(舉高)",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "上達諸佛心 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "大家心口一念慢慢收)",
        "type": "lyrics",
        "segments": [
          {
            "text": "大家心口一念",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          },
          {
            "text": "慢慢收) ",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          }
        ]
      },
      {
        "text": "化解惡念結善緣 祈求天下無災 歲歲年年",
        "type": "lyrics",
        "segments": [
          {
            "text": "化解惡念結善緣 祈求天下無災 歲歲年年 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      }
    ]
  }
];

// Export if in node environment, otherwise make it global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LYRICS_OS_DATA;
}
