// 大巨蛋演繹段歌詞與 OS 內容資料庫 (依據 1016 PDF 產生，支援多場次動態過濾與精確劇本排版)
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
        "text": "巴利文量義經/咚咚木魚聲：(拿花合十不開燈) 面甲舞台腳夾線",
        "type": "lyrics",
        "segments": [
          {
            "text": "巴利文量義經/咚咚木魚聲：",
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
            "text": "(拿花合十不開燈) ",
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
            "text": "面甲舞台腳夾線",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "BF4E14"
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
        "text": "法師：靈山法會不散(轉面向乙舞台圓心)",
        "type": "dialogue",
        "segments": [
          {
            "text": "法師：靈山法會",
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
            "text": "不散",
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
        "text": "(大聲唱頌) (第一波)靜寂清澄志玄虛漠 (第二波)守之不動億百千劫",
        "type": "lyrics",
        "segments": [
          {
            "text": "(大聲唱頌) (第一波)",
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
            "text": "靜寂清澄志玄虛漠 ",
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
            "text": "(第二波)",
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
            "text": "守之不動億百千劫 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "(第三波)無量法門悉現在前",
        "type": "lyrics",
        "segments": [
          {
            "text": "(第三波)",
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
            "text": "無量法門悉現在前 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "(第四波)得大智慧通達諸法",
        "type": "lyrics",
        "segments": [
          {
            "text": "(第四波)",
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
            "text": "得大智慧通達諸法 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "(慢慢收)曉了分別性相真實",
        "type": "lyrics",
        "segments": [
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
            "text": "曉了分別性相真實 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "(慢慢上)有無長短明現顯白",
        "type": "lyrics",
        "segments": [
          {
            "text": "(慢慢上)",
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
            "text": "有無長短明現顯白 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "(慢慢收)又能善知諸根性欲",
        "type": "lyrics",
        "segments": [
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
            "text": "又能善知諸根性欲 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "(右轉雙腳夾線)以陀羅尼無礙辯才",
        "type": "lyrics",
        "segments": [
          {
            "text": "(右轉雙腳夾線)",
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
            "text": "以陀羅尼無礙辯才 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "請佛轉法輪(開右手花、右手貼耳朵伸直朝天、頭轉看乙舞台圓心、頭千萬不要歪斜)",
        "type": "lyrics",
        "segments": [
          {
            "text": "請佛轉法",
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
            "text": "輪",
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
            "text": "(開右手花、右手貼耳朵伸直朝天、頭轉看乙舞台圓心、頭千萬不要歪斜) ",
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
    "id": "sec_2",
    "title": "【生】面甲舞台腳夾線",
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
        "text": "藍毘尼園 太子降誕 兜率乘願大因緣",
        "type": "lyrics",
        "segments": [
          {
            "text": "藍毘尼園 太子降誕 兜率乘願大因緣",
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
        "text": "侍衛：啟稟國王(記得轉面向甲舞台腳夾線) 母子均安",
        "type": "dialogue",
        "segments": [
          {
            "text": "侍衛：",
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
            "text": "啟稟國王",
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
            "text": "(記得轉面向甲舞台腳夾線)",
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
            "text": " 母子均安 ",
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
        "text": "恭喜國王、賀喜國王！",
        "type": "lyrics",
        "segments": [
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
        "text": "報～～～天臂城",
        "type": "lyrics",
        "segments": [
          {
            "text": "報～～～天臂城 ",
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
        "text": "前來祝賀！",
        "type": "lyrics",
        "segments": [
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
        "text": "報～～～拘薩羅國、摩竭陀國 前來獻禮！",
        "type": "lyrics",
        "segments": [
          {
            "text": "報～～～拘薩羅國、摩竭陀國 ",
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
        "text": "報～～～般闍羅國、迦尸國 前來祝賀！",
        "type": "lyrics",
        "segments": [
          {
            "text": "報～～～般闍羅國、迦尸國 ",
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
        "text": "報～～～鴦迦國、跋羅國 前來獻禮！",
        "type": "lyrics",
        "segments": [
          {
            "text": "報～～～鴦迦國、跋羅國 ",
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
      },
      {
        "text": "os 不行!我要打消他出家的念頭，我要給他最好的生活。國王!太子成年後理當娶妻生",
        "type": "os",
        "segments": [
          {
            "text": "os 不行!我要打消他出家的念頭，我要給他最好的生活。國王!太子成年後理當娶妻生",
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
        "text": "子，為太子舉行婚禮大開喜宴，難道我的一生就這樣度過了嗎?你將來要繼承王位(轉",
        "type": "lyrics",
        "segments": [
          {
            "text": "子，為太子舉行婚禮大開喜宴，難道我的一生就這樣度過了嗎?你將來要",
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
            "text": "(轉",
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
        "text": "面向乙舞台圓心)，應當去看看這片由你守護的國土",
        "type": "lyrics",
        "segments": [
          {
            "text": "面向乙舞台圓心)",
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
            "text": "，應當去看看這片由你守護的國土 ",
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
    "title": "【老 曲目：佛陀的一生．老苦】面乙舞台圓心腳頂線",
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
            "text": "os 老，苦",
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
            "text": "啊~~~~",
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
    "title": "【病 曲目：佛陀的一生．病苦】面乙舞台圓心腳頂線",
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
            "text": "os 病，苦",
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
            "text": "啊~~~~~~",
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
    "title": "【死 曲目：佛陀的一生．死苦】面乙舞台圓心腳頂線",
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
        "text": "北門前(大聲唱) 竹林間 修行道人相莊嚴 夜深人靜(面乙舞台圓心)離宮殿 不悟真理誓不還",
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
            "text": " 竹林間 修行道人相莊嚴 ",
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
            "text": "夜深人靜",
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
            "text": "(面乙舞台圓心)",
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
            "text": "離宮殿 不悟真理誓不還 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "os 我要為眾生尋求解脫之道(手放後轉面向甲舞台)。",
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
            "text": "(手放後轉面向甲舞台)",
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
            "text": "。 ",
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
    "id": "sec_6",
    "title": "【六度 曲目：佛陀的一生．轉法輪】面乙舞台圓心腳頂線",
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
        "text": "初轉法輪鹿野苑",
        "type": "lyrics",
        "segments": [
          {
            "text": "初轉法輪鹿野苑  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "五大比丘去又還",
        "type": "lyrics",
        "segments": [
          {
            "text": "五大比丘去又還  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "為求聲聞說四諦",
        "type": "lyrics",
        "segments": [
          {
            "text": "為求聲聞說四諦  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "苦集滅道顯義理",
        "type": "lyrics",
        "segments": [
          {
            "text": "苦集滅道顯義理 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "為應菩薩(轉面向乙舞台圓心)大根機  再說六度(合十)波羅蜜(去除無明行六度(轉))",
        "type": "lyrics",
        "segments": [
          {
            "text": "為應菩薩",
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
            "text": "大根機",
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
            "text": "再說六度",
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
            "text": "波羅",
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
            "text": "蜜",
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
            "text": "(去除無明行",
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
            "text": "六度",
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
      }
    ]
  },
  {
    "id": "sec_7",
    "title": "【靈鷲山上 曲目：靈鷲山上】面乙舞台圓心坐跪聽法",
    "formationKey": "circle",
    "formationLabel": "01圓形 (序/生老病死/六度)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "",
    "videos": [],
    "lines": [
      {
        "text": "(音樂前奏合掌高跪)法師：佛陀(坐跪)為一大事因緣來人間，教導眾生行菩薩道，從靈鷲法",
        "type": "lyrics",
        "segments": [
          {
            "text": "(音樂前奏合掌高跪)",
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
            "text": "法師：",
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
            "text": "佛陀",
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
            "text": "(坐跪)",
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
            "text": "為一大事因",
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
            "text": "緣來人間，教導眾生行菩薩道，從靈鷲法",
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
        "text": "脈，到慈濟一甲子的人間力行",
        "type": "lyrics",
        "segments": [
          {
            "text": "脈，到慈濟一甲子的人間力行 ",
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
        "text": "靈鷲山上",
        "type": "lyrics",
        "segments": [
          {
            "text": "靈鷲山上 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "法會不散",
        "type": "lyrics",
        "segments": [
          {
            "text": "法會不散 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "說法景象",
        "type": "lyrics",
        "segments": [
          {
            "text": "說法景象 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "經章躍然",
        "type": "lyrics",
        "segments": [
          {
            "text": "經章躍然 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "一幅幅(出右手正斜上並高跪)動人的畫面",
        "type": "lyrics",
        "segments": [
          {
            "text": "一幅幅",
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
            "text": "(出右手正斜上並高跪)",
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
            "text": "動人的畫面 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "一聲聲真誠的呼喚 千百(合十高跪)億劫以來 彷若實境再現 彷若實境(全體大聲唱且雙手平",
        "type": "lyrics",
        "segments": [
          {
            "text": "一聲聲真誠的呼喚 ",
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
            "text": "(合十高跪)",
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
            "text": "億劫以來 彷若實境再現 ",
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
            "text": "彷若實境",
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
            "text": "(全體大聲唱且雙手平",
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
        "text": "出)再現(雙手平上)",
        "type": "lyrics",
        "segments": [
          {
            "text": "出)",
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
            "text": "再現",
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
            "text": "(雙手平上)",
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
    "id": "sec_8",
    "title": "【鳩摩羅什、玄奘、鑑真】《聽到交響樂(呈現戰亂紛擾的時代)》【換行願隊形】",
    "formationKey": "xingYuan",
    "formationLabel": "02行願 (行願/開經偈)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "",
    "videos": [],
    "lines": [
      {
        "text": "鳩摩羅什譯經：我今稽首盡無疑 翻譯佛法 佛法永傳(轉向甲舞台東側)",
        "type": "lyrics",
        "segments": [
          {
            "text": "鳩摩羅什譯經：我今稽首盡無疑 翻譯佛法",
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
            "text": "佛法永傳",
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
        "text": "玄奘西行取經：西行取經五萬里，霜雪劫火證菩提，生死大海 誰作舟楫，無明長夜",
        "type": "lyrics",
        "segments": [
          {
            "text": "玄奘西行取經：西行取經五萬里，霜雪劫火證菩提，生死大海 誰作舟楫，無明長夜 ",
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
        "text": "誰為燈炬，西取佛法 佛法永傳 西取佛法 佛法永傳，沙河 漫漫 八百里，赤熱",
        "type": "lyrics",
        "segments": [
          {
            "text": "誰為燈炬，西取佛法 佛法永傳 西取佛法 佛法永傳，沙河 漫漫 八百里，赤熱 ",
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
        "text": "灼天 絕人跡 白日孤影寂 深宵魍魎泣 焦渴 命危 餘一息，不到天竺 絕不回頭",
        "type": "lyrics",
        "segments": [
          {
            "text": "灼天 絕人跡 白日孤影寂 深宵魍魎泣 焦渴 命危 餘一息，不到天竺 絕不回頭 ",
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
        "text": "寧向西方一步死 不朝東土半步生 矢志 矢志 終不移 ~~馬嘯聲~~西取佛法 佛法",
        "type": "lyrics",
        "segments": [
          {
            "text": "寧向西方一步死 不朝東土半步生 矢志 矢志 終不移 ",
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
            "text": "~~馬嘯聲~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "西取佛法",
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
            "text": "佛法",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "永傳(不動) 漫天黃沙散去 綠洲野馬泉",
        "type": "lyrics",
        "segments": [
          {
            "text": "永傳",
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
            "text": "(不動) ",
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
            "text": "漫天黃沙散去 綠洲野馬泉 ",
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
        "text": "鑑真東傳佛法：滄波萬里誠 真願東灜僧 我願捨身攜明燈 律法傳向東 山川異域，風",
        "type": "lyrics",
        "segments": [
          {
            "text": "鑑真東傳佛法：滄波萬里誠 真願東灜僧 我願捨身攜明燈 律法傳向東 山川異域，風",
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
        "text": "月同天 寄諸佛子，共結來緣 為法事也，何惜身命 狂風逐，巨浪撲  掀舟摧帆",
        "type": "lyrics",
        "segments": [
          {
            "text": "月同天 寄諸佛子，共結來緣 為法事也，何惜身命 狂風逐，巨浪撲  掀舟摧帆",
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
        "text": "幾翻覆 人無助，命擺佈 十二年月六番渡 縱然盲雙目 心光照前路 不至日本(500",
        "type": "lyrics",
        "segments": [
          {
            "text": "幾翻覆 人無助，命擺佈 十二年月六番渡 縱然盲雙目 心光",
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
            "text": "照前路 不至日本",
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
            "text": "(500",
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
        "text": "人上中央走道面甲) 本願不遂 生死以赴 何懼千百度 東傳佛法 佛法永傳(轉行願方向)",
        "type": "lyrics",
        "segments": [
          {
            "text": "人上中央走道面甲)",
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
            "text": " 本願不遂 生死以赴 何懼千百度 東傳佛法",
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
            "text": "佛法永傳",
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
            "text": "(轉行願方",
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
            "text": "向)",
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
    "id": "sec_9",
    "title": "【行願 曲目：行願】面行願方向",
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
            "text": "海濤(",
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
            "text": "厚",
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
            "text": "澎湃) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
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
            "text": "駭浪(",
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
            "text": "厚",
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
            "text": "洶湧) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
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
            "text": "心志(",
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
            "text": "厚",
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
            "text": "已付) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
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
            "text": "身隨之赴(",
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
            "text": "厚",
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
            "text": ")  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
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
            "text": "守之不動 ",
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
            "text": "去去去",
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
        "text": "億百千劫 (厚走)走走",
        "type": "lyrics",
        "segments": [
          {
            "text": "億百千劫 (",
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
            "text": "厚走",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": true,
            "isItalic": false,
            "color": "FF0000"
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
            "text": "走走",
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
        "text": "守之不動 行行行",
        "type": "lyrics",
        "segments": [
          {
            "text": "守之不動 ",
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
            "text": "行行行",
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
        "text": "億百千劫 (厚進)進進",
        "type": "lyrics",
        "segments": [
          {
            "text": "億百千劫 (",
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
            "text": "厚進",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": true,
            "isItalic": false,
            "color": "FF0000"
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
            "text": "進進",
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
        "text": "守之不動 信",
        "type": "lyrics",
        "segments": [
          {
            "text": "守之不動 ",
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
            "text": "信",
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
            "text": "   ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
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
            "text": "億百千劫 ",
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
            "text": "願",
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
        "text": "守之不動 行",
        "type": "lyrics",
        "segments": [
          {
            "text": "守之不動 ",
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
            "text": "行",
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
        "text": "佛 法 廣 傳 在 人 間  行~~願",
        "type": "lyrics",
        "segments": [
          {
            "text": "佛 法 廣 傳 在 人 間  行~~願 ",
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
    "id": "sec_10",
    "title": "【開經偈】面開經偈方向",
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
        "text": "~優人鼓聲三聲~千百(合十)億劫以來",
        "type": "lyrics",
        "segments": [
          {
            "text": "~優人鼓聲三",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "聲~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
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
            "text": ")",
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
            "text": "億劫以來   ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
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
      },
      {
        "text": "(結束關燈起立，東西一轉向甲舞台45 度；東西二原隊形轉向甲舞台；甲舞台上的千手迅速下舞台)",
        "type": "annotation",
        "segments": [
          {
            "text": "(結束關燈起立，東西一轉向甲舞台45 度；東西二原隊形轉向甲舞台；甲舞台上的千手迅速下舞台) ",
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
        "text": "我愛人人 人人愛我，這是我小時候的人生藍圖，在我小的時候常常都要躲空襲~空襲",
        "type": "lyrics",
        "segments": [
          {
            "text": "我愛人人 人人愛我，這是我小時候的人生藍圖，在我小的時候常常都要躲空襲",
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
            "text": "~空襲",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          }
        ]
      },
      {
        "text": "警報聲~(【換標準隊形】看甲舞台演出) 為什麼人要這樣互相殘殺，生命是如此脆弱，連",
        "type": "lyrics",
        "segments": [
          {
            "text": "警報聲~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "(",
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
            "text": "【換標準隊形】",
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
            "text": "看甲舞台演出) ",
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
            "text": "為什麼人要這樣互相殘殺，生命是如此脆弱，連",
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
        "text": "我父親也~~我的頭，我的頭好痛 好痛 好痛。人生無常，生從何來 死往何去，人生",
        "type": "lyrics",
        "segments": [
          {
            "text": "我父親也~~我的頭，我的頭好痛 好痛 好痛。人生無常，生從何來 死往何去，人生",
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
        "text": "何價 生命何義，我要探尋生命的價值。人生何義 生命何價 妙法蓮華經 似有龍天護",
        "type": "lyrics",
        "segments": [
          {
            "text": "何價 生命何義，我要探尋生命的價值。人生何義 生命何價 ",
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
            "text": "妙法蓮華經 ",
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
            "text": "似有龍天護",
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
        "text": "佑，上人心無畏懼，唯有精進修行",
        "type": "lyrics",
        "segments": [
          {
            "text": "佑，上人心無畏懼，唯有精進修行 ",
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
    "id": "sec_11",
    "title": "【扛天下米籮 無量義經．德行品】面甲舞台45 度",
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
        "text": "我很震撼(轉面向甲舞台45 度)!原來佛法可以生活化，原來菩薩就在人間，只要有人間菩",
        "type": "lyrics",
        "segments": [
          {
            "text": "我很震撼",
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
            "text": "(轉面向甲舞台45 度)",
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
            "text": "!原來佛法可以生活化，原來菩薩就在人間，只要有人間菩",
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
        "text": "薩，貧窮與苦難的人，就有機會得到救助，我要把佛法推向人間",
        "type": "lyrics",
        "segments": [
          {
            "text": "薩，貧窮與苦難的人，就有機會得到救助，我要把佛法推向人間 ",
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
        "text": "潤漬眾生",
        "type": "lyrics",
        "segments": [
          {
            "text": "潤漬眾生 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
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
        "text": "我決定要消滅貧窮(大聲) 扛天下米籮(大聲)",
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
            "text": "貧窮",
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
            "text": "(大聲)",
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
          },
          {
            "text": "扛天下米籮",
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
            "text": "(大聲)",
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
        "text": "讓人人力行菩薩道(大聲)",
        "type": "lyrics",
        "segments": [
          {
            "text": "讓人人",
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
            "text": "力行菩薩道",
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
            "text": "(大聲)",
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
    "id": "sec_12",
    "title": "【靜思家風】面法師45 度",
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
            "text": "多煮一些，吃完才會飽，啊油要多放一些，胃比較舒服。下一",
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
      },
      {
        "text": "戲劇《一攤血》~媽媽跟胎中的孩子不知是生還是死【換LOGO 隊形】理性 理性 理",
        "type": "lyrics",
        "segments": [
          {
            "text": "戲劇《一攤血》",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "~媽媽跟胎中的孩子",
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
            "text": "不知是生還是死",
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
            "text": "【換LOGO 隊形】",
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
            "text": "理性 理性 理",
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
        "text": "性。天主保佑您，法師平安。平安，您們好!為佛教為眾生，我相信做得到!",
        "type": "lyrics",
        "segments": [
          {
            "text": "性。天主保佑您，法師平安。平安，您們好!為佛教為眾生，我相信做得到! ",
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
        "text": "同年，印順導師要 上人前往嘉義的妙雲蘭若，但三十位家庭主婦連署慰留，師父 我",
        "type": "lyrics",
        "segments": [
          {
            "text": "同年，印順導師要 上人前往嘉義的妙雲蘭若，但三十位家庭主婦連署慰留，師父 ",
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
            "text": "我",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "EE0000"
          }
        ]
      },
      {
        "text": "們需要您(大聲唸並合十轉面向正確方向)，如果(開燈/需要者拿花)你們願意幫助我做救濟的工",
        "type": "lyrics",
        "segments": [
          {
            "text": "們需要您",
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
            "text": "(大聲唸並合十轉面向正確方向)",
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
            "text": "如果",
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
            "text": "你們願意幫助我做救濟的工",
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
        "text": "作，我就永遠不離開花蓮(跪/預備動作)",
        "type": "lyrics",
        "segments": [
          {
            "text": "作，我就永遠不離開",
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
            "text": "花蓮",
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
      }
    ]
  },
  {
    "id": "sec_13",
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
        "text": "~~音效 登~~ (浪坐跪抬頭)",
        "type": "lyrics",
        "segments": [
          {
            "text": "~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
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
            "text": "~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": " (浪坐跪抬頭)",
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
    "id": "sec_14",
    "title": "【菜市場的五毛錢】【換LOGO 無法船隊形】面特定方向",
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
        "text": "os 我希望成立救貧的功德會，我們沒有錢要怎麼救，我們六個人，每天多做一雙嬰兒",
        "type": "os",
        "segments": [
          {
            "text": "os 我希望成立救貧的功德會，我們沒有錢要怎麼救，我們六個人，每天多做一雙嬰兒",
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
        "text": "鞋，一年就有八千多元，可以幫助這位難產的婦人，你們每天只要節省五毛錢，我們",
        "type": "lyrics",
        "segments": [
          {
            "text": "鞋，一年就有八千多元，可以幫助這位難產的婦人，你們每天只要節省五毛錢，我們",
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
        "text": "一起來做善事，什麼啊!一個人只要捐五毛錢，唉喲！這簡單啦，我叫我媳婦買菜的",
        "type": "lyrics",
        "segments": [
          {
            "text": "一起來做善事，什麼啊!一個人只要捐五毛錢，唉喲！這簡單啦，我叫我媳婦買菜的",
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
        "text": "~~音效 登~~ (中央走道千手上) 菜市場吵雜聲",
        "type": "lyrics",
        "segments": [
          {
            "text": "~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
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
            "text": "~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": " (中央走道千手上)",
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
        "text": "為籌慈濟金菜市場的五毛錢，那一念，如果可以集合五百人，就是一個團體，就是一尊",
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
            "text": "菜市場的五毛錢，那一念，如果可以集合五百人，就是一個團體，就是一尊",
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
        "text": "千手觀音，可以及時救拔苦難(手放)",
        "type": "lyrics",
        "segments": [
          {
            "text": "千手觀音，可以及時",
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
    "id": "sec_15",
    "title": "【慈善ending 無量義經．德行品】面特定方向",
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
        "text": "os 唉唷 怎麼幫我們想的這麼周到，我們是全世界最大的家庭啦(一說完全體開燈、需拿燈",
        "type": "os",
        "segments": [
          {
            "text": "os 唉唷 怎麼幫我們想的這麼周到，我們是全世界",
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
            "text": "(一說完全體開燈、需拿燈",
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
        "text": "者拿燈、轉面向正確方向/需跪者跪、所有動作要快快快)",
        "type": "lyrics",
        "segments": [
          {
            "text": "者拿燈、轉面向正確方向/需跪者跪、",
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
            "text": "所有動作要快快快",
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
        "text": "喔，來把它放到米甕，這是功德會買的米，不能放在精舍的米甕裡面，一粒米都不",
        "type": "lyrics",
        "segments": [
          {
            "text": "喔，來把它放到米甕，這是功德會買的米，不能放在精舍的米甕裡面，一粒米都不",
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
        "text": "行，啊這功德會和精舍不都是一樣，在精舍吃的是精舍的米，貧戶領的是功德會買的",
        "type": "lyrics",
        "segments": [
          {
            "text": "行，啊這功德會和精舍不都是一樣，在精舍吃的是精舍的米，貧戶領的是功德會買的",
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
        "text": "米，要分清楚，我來跟大家說一個故事(大魚的故事~~)~~~~~~將來我若是成佛，必定",
        "type": "lyrics",
        "segments": [
          {
            "text": "米，要分清楚，我來跟大家說一個故事(大魚的故事~~)~~~~~~將來我若是成佛，必定",
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
        "text": "會先度你們五人，菩薩所緣(上舞台、不合十)，緣苦眾生，這是我的願!你吃我的肉，啃",
        "type": "lyrics",
        "segments": [
          {
            "text": "會先度你們五人，",
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
            "text": "(上舞台、不合十)",
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
            "text": "，緣苦眾生，這是我的願!你吃我的肉，啃",
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
        "text": "我的骨，彼此結下師徒法緣，但願(開燈、要跪的合掌跪)將來一起為天下的苦難人付出，",
        "type": "lyrics",
        "segments": [
          {
            "text": "我的骨，彼此結下師徒法緣，",
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
            "text": "但願",
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
            "text": "(開燈、要跪的合掌跪)",
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
            "text": "將來一起為天下的苦難人付出，",
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
        "text": "力行菩薩道(需坐跪者坐)",
        "type": "lyrics",
        "segments": [
          {
            "text": "力行",
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
            "text": "(需坐跪者坐)",
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
      },
      {
        "text": "~~ 慘叫聲~~ 42 歲張炳華搬運砂石時，不慎從卡車上摔落【直接換大小V】先面向甲舞",
        "type": "lyrics",
        "segments": [
          {
            "text": "~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": " 慘叫聲~~ ",
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
            "text": "42 歲張炳華搬運砂石時，不慎從卡車上摔落",
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
            "text": "【直接換大小V】",
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
            "text": "先面向甲舞",
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
        "text": "台；~~~~ 再不做來不及(面中央走道腳頂線)...我決定在花蓮蓋一座綜合醫院",
        "type": "lyrics",
        "segments": [
          {
            "text": "台；",
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
            "text": "~~~~ ",
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
            "text": "再不做來不及",
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
            "text": "(面中央走道腳頂線)",
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
            "text": "...我決定在花蓮蓋一座綜合醫院 ",
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
    "title": "【地藏經啟航 曲目：地藏經．啟航】面中央走道腳頂線",
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
        "text": "人間(兩手包覆耳朵如同戴全罩式耳機般)地獄悉現前",
        "type": "lyrics",
        "segments": [
          {
            "text": "人間",
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
            "text": "(兩手包覆耳朵如同戴全罩式耳機般)",
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
            "text": "地獄悉現前 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "貧病相因必須斷   促成建院的因緣",
        "type": "lyrics",
        "segments": [
          {
            "text": "貧病相因必須斷   促成建院的因緣 ",
            "isRed": false,
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
    "title": "【四弘誓願】面中央走道腳頂線",
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
        "text": "的精神來蓋醫院，永續慈善的活水，師父啊 您怎麼說 我們就怎麼做(上舞台後先轉甲舞",
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
            "text": "(上舞台後先轉甲舞",
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
        "text": "台)，慈濟人對師父行 聽說蓋醫院，需要六億到八億的預算，現在是募到多少錢了，老實",
        "type": "lyrics",
        "segments": [
          {
            "text": "台)",
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
            "text": "慈濟人對師父行 ",
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
            "text": "聽說蓋醫院，需要六億到八億的預算，現在是募到多少錢了，老實",
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
        "text": "說 三千萬還不到，啊 才三千萬，明天就要動土了，不過萬里長城(轉向)，也是從一塊",
        "type": "lyrics",
        "segments": [
          {
            "text": "說 三千萬還不到，啊 才三千萬，明天就要動土了，不過",
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
            "text": "，也是從一塊",
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
        "text": "磚開始",
        "type": "lyrics",
        "segments": [
          {
            "text": "磚開始 ",
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
        "text": "四 弘 誓 願",
        "type": "lyrics",
        "segments": [
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
    "id": "sec_18",
    "title": "【拉繩 曲目：髻珠喻經文手札】面中央走道腳頂線",
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
        "text": "萬捐款一一退還，這一鏟下去，每半個月需支付一次工資 人間菩薩 你就是我要找尋的",
        "type": "lyrics",
        "segments": [
          {
            "text": "萬捐款一一退還，這一鏟下去，每半個月需支付一次工資 ",
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
            "text": "你就是我要找尋的",
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
        "text": "良醫 大慈大悲，師父!我的身體裏藏著一顆不定時炸彈啊 身口意，不只你有，我的心臟",
        "type": "lyrics",
        "segments": [
          {
            "text": "良醫",
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
            "text": " 大慈大悲",
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
            "text": "，師父!我的身體裏藏著一顆不定時炸彈啊 ",
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
            "text": "身口意",
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
            "text": "，不只你有，我的心臟",
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
        "text": "病也是不定時炸彈 清淨拔苦入人群，無論生命有多長，我們更要分秒必爭 柔善能忍如大地",
        "type": "lyrics",
        "segments": [
          {
            "text": "病也是不定時炸彈 ",
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
            "text": "清淨拔苦入人群",
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
            "text": "，無論生命有多長，我們更要分秒必爭 ",
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
            "text": "柔善能忍如大地 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "不存驕慢心 使諸惡盡 善護有情 誓願度眾生 誓願斷煩惱 誓願學法門 誓願成佛道",
        "type": "lyrics",
        "segments": [
          {
            "text": "不存驕慢心 使諸惡盡 善護有情 誓願度眾生 誓願斷煩惱 誓願學法門 誓願成佛道 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "(轉面向乙舞台)",
        "type": "annotation",
        "segments": [
          {
            "text": "(轉面向乙舞台)",
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
    "id": "sec_19",
    "title": "【醫療德行品梵唄 曲目：德行品梵唄】面中央走道腳頂線",
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
        "text": "人生最苦 莫過於(該跪者高跪)病苦！人生最珍貴 莫過於生命！",
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
            "text": "(該跪者高跪)",
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
    "id": "sec_20",
    "title": "【花慈.中西醫精準醫療(羅倫佐) 曲目：我可以唱歌了】面中央走道腳頂線 11/12(第1 天專屬曲目)",
    "formationKey": "daChuanShi",
    "formationLabel": "07-1大船師 (拉繩/德行品/大醫王)",
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
    "id": "sec_21",
    "title": "【大埔無醫村 曲目：擁抱蒼生】11/12(第1 天專屬曲目) (一開始站大小V 朝甲45 度看演出)",
    "formationKey": "daChuanShi",
    "formationLabel": "07-1大船師 (拉繩/德行品/大醫王)",
    "sessionKeys": [
      "1112"
    ],
    "sessionLabel": "11/12(第1天)專屬曲目",
    "audio": "Music/慈善+醫療/16 大醫王.mp3",
    "videos": [],
    "lines": [
      {
        "text": "~~救護車聲~~~幸好有醫療站及時動手術，才能將生命搶救回來!多謝醫生這麼照顧我們",
        "type": "lyrics",
        "segments": [
          {
            "text": "~~救護車聲~~~",
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
            "text": "幸好有醫療站及時動手術，才能將生命搶救回來!多謝醫生這麼照顧我們",
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
        "text": "這些村民!很很感恩的!",
        "type": "lyrics",
        "segments": [
          {
            "text": "這些村民!很很感恩的! ",
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
        "text": "林英隆醫師:有意義的工作(回復兩腳頂線)齁 這 這是最 福氣啦，不管有錢沒錢，這就是",
        "type": "lyrics",
        "segments": [
          {
            "text": "林英隆醫師:",
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
            "text": "有意義的工作",
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
            "text": "(回復兩腳頂線)",
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
            "text": "齁 這 這是最 福氣啦",
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
            "text": "，不管有錢沒錢，這就是",
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
        "text": "心富勝于財富",
        "type": "lyrics",
        "segments": [
          {
            "text": "心富勝于財富 ",
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
        "text": "您在陌生的國度裡(開始大聲唱)",
        "type": "lyrics",
        "segments": [
          {
            "text": "您在陌生的國度裡",
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
            "text": "(開始大聲唱)",
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
        "text": "為受災的人送溫情",
        "type": "lyrics",
        "segments": [
          {
            "text": "為受災的人送溫情 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
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
        "text": "有誰能擁抱蒼生(收手收腳) 有誰能(出腳擁抱)擁抱蒼生(手上V 收腳) 【後接 鼓聲7 秒、大醫王】",
        "type": "lyrics",
        "segments": [
          {
            "text": "有誰能擁抱蒼生",
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
            "text": "(收手收腳) ",
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
            "text": "有誰能",
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
            "text": "(出腳擁抱)",
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
            "text": "擁抱蒼",
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
            "text": "(手上V 收腳)",
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
            "text": " 【",
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
            "text": "後接 ",
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
            "text": "鼓聲7 秒、",
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
            "text": "大醫王",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": true,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "】",
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
    "id": "sec_22",
    "title": "【北慈.疫情捨我其誰 曲目：醫子喻 白袍禮讚】面中央走道腳頂線  11/13(第2 天專屬曲目)",
    "formationKey": "daChuanShi",
    "formationLabel": "07-1大船師 (拉繩/德行品/大醫王)",
    "sessionKeys": [
      "1113"
    ],
    "sessionLabel": "11/13(第2天)專屬曲目",
    "audio": "Music/慈善+醫療/18北慈＿疫情捨我其誰.mp3",
    "videos": [],
    "lines": [
      {
        "text": "~匡~(壓縮救護車通道) 全球新型冠狀病毒肆虐，印度自四月起疫情急速升溫",
        "type": "lyrics",
        "segments": [
          {
            "text": "~匡~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "(壓縮救護車通道)",
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
            "text": " 全球新型冠狀病毒肆虐，印度自四月起疫情急速升溫 ",
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
        "text": "5 月單日超過四十萬人確診；~咳嗽聲不斷~ (退右/左腳跪右/左、戴口罩)",
        "type": "lyrics",
        "segments": [
          {
            "text": "5 月單日超過四十萬人確診；",
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
            "text": "~咳嗽聲不斷~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
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
            "text": "(退",
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
            "text": "右/左",
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
            "text": "腳跪",
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
            "text": "右/左",
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
            "text": "、戴口罩)",
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
        "text": "5/12，臺灣本土 16 例   5/16，本土病例新增至 205 例 (戴口罩後雙手放左/右膝)",
        "type": "lyrics",
        "segments": [
          {
            "text": "5/12，臺灣本土 16 例   5/16，本土病例新增至 205 例 ",
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
            "text": "(戴口罩後雙手放左/右膝) ",
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
        "text": "院長：迎戰病毒(抬頭)。捨我其(站起來)  誰(右/左手上摸 右/左腳出)",
        "type": "lyrics",
        "segments": [
          {
            "text": "院長：迎戰病毒",
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
            "text": "(抬頭)",
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
            "text": "。捨我其",
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
            "text": "(站起來) ",
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
            "text": " 誰",
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
            "text": "右/左",
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
            "text": "手上摸 ",
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
            "text": "右/左",
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
            "text": "腳出) ",
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
        "text": "院長：這是我們的使命(收腳回正) ，配合中央防疫，我們一定要盡力而為。",
        "type": "lyrics",
        "segments": [
          {
            "text": "院長：這是我們的使命",
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
            "text": "(收腳回正) ",
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
            "text": "，配合中央防疫，我們一定要盡力而為。 ",
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
        "text": "上人：我們要趕緊要穿好盔甲(壓縮回原位)，要保護好自己，才能夠照顧病人 。",
        "type": "dialogue",
        "segments": [
          {
            "text": "上人：我們要趕緊要穿好盔甲",
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
            "text": "(壓縮回原位)",
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
            "text": "，要保護好自己，才能夠照顧病人 。 ",
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
        "text": "新北衛生局：台北慈院收治重症病人 3-9 位",
        "type": "lyrics",
        "segments": [
          {
            "text": "新北衛生局：台北慈院收治重症病人 3-9 位 ",
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
        "text": "蘇主任：院長，加護病房一天進來十位 。",
        "type": "lyrics",
        "segments": [
          {
            "text": "蘇主任：院長，加護病房一天進來十位 。 ",
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
        "text": "院長：清空病房(小V 藍 左/右手左/右弓步低頭 向法師)，專責病房擴建(小V 白 雙手張開平舉)",
        "type": "lyrics",
        "segments": [
          {
            "text": "院長：清空病房",
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
            "text": "(小V 藍 ",
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
            "text": "左/右",
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
            "text": "手",
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
            "text": "左/右",
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
            "text": "弓步低頭 向法師)",
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
            "text": "，專責病房擴建",
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
            "text": "(小V 白 雙手張開平舉)",
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
        "text": "ICU 蘇主任：院長加護病房不夠用了一天 4-5 個插管",
        "type": "lyrics",
        "segments": [
          {
            "text": "ICU 蘇主任：院長加護病房不夠用了一天 4-5 個插管 ",
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
        "text": "院長：加護病房(大V 藍 左/右手左/右弓步低頭 向法師)再增建(大V 白 雙手張開平舉)",
        "type": "lyrics",
        "segments": [
          {
            "text": "院長：加護病房",
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
            "text": "(大V 藍 ",
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
            "text": "左/右",
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
            "text": "手",
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
            "text": "左/右",
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
            "text": "弓步低頭 向法師)",
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
            "text": "再增建",
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
            "text": "(大V 白 雙手張開平舉) ",
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
        "text": "蘇主任：葉克膜團隊(收腳回正)，俯臥治療團隊守護加護病房最後一道防線 。",
        "type": "lyrics",
        "segments": [
          {
            "text": "蘇主任：葉克膜團隊",
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
            "text": "(收腳回正)",
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
            "text": "，俯臥治療團隊守護加護病房最後一道防線 。 ",
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
        "text": "院長：快！(全體 不動) 快！(藍衣 左/右手左/右弓步低頭 向法師) 快！(白衣雙手張開平舉)",
        "type": "lyrics",
        "segments": [
          {
            "text": "院長：快！",
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
            "text": "(全體 不動)",
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
            "text": " 快！",
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
            "text": "(藍衣 ",
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
            "text": "左/右",
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
            "text": "手",
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
            "text": "左/右",
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
            "text": "弓步低頭 向法師)",
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
            "text": " 快！",
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
            "text": "(白衣雙手張開平舉) ",
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
        "text": "院長：增設社區篩檢站，就近篩檢。成立疫病門診 ，避免感染！機構視訊，線上看診。",
        "type": "lyrics",
        "segments": [
          {
            "text": "院長：增設社區篩檢站，就近篩檢。成立疫病門診 ，避免感染！機構視訊，線上看診。 ",
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
        "text": "叮咚！台北慈院可以。(收腳回正)",
        "type": "lyrics",
        "segments": [
          {
            "text": "叮咚！台北慈院可以。",
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
            "text": "(收腳回正)",
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
        "text": "叮咚！台北慈院可以。",
        "type": "lyrics",
        "segments": [
          {
            "text": "叮咚！台北慈院可以。 ",
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
        "text": "叮咚！台北慈院可以。",
        "type": "lyrics",
        "segments": [
          {
            "text": "叮咚！台北慈院可以。 ",
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
        "text": "叮咚！台北慈院可以。",
        "type": "lyrics",
        "segments": [
          {
            "text": "叮咚！台北慈院可以。 ",
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
        "text": "叮咚！台北慈院可以。(全體大聲喊 右/左手右/左腳握拳上)",
        "type": "lyrics",
        "segments": [
          {
            "text": "叮咚！",
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
            "text": "台北慈院可以",
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
            "text": "。",
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
            "text": "(全體大聲喊 ",
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
            "text": "右/左",
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
            "text": "手",
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
            "text": "右/左",
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
            "text": "腳握拳上",
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
            "text": ") ",
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
        "text": "病房阿長：院長(收手收腳)，病房已收滿了",
        "type": "lyrics",
        "segments": [
          {
            "text": "病房阿長：院長",
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
            "text": "(收手收腳)",
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
            "text": "，病房已收滿了 ",
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
        "text": "急診醫師：院長，急診室不斷湧進很多病人。",
        "type": "lyrics",
        "segments": [
          {
            "text": "急診醫師：院長，急診室不斷湧進很多病人。 ",
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
        "text": "院長：再擴建 (白衣右/左腳出挺胸抬頭雙手張開；藍衣不動)",
        "type": "lyrics",
        "segments": [
          {
            "text": "院長：再擴建 ",
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
            "text": "(白衣",
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
            "text": "右/左",
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
            "text": "腳出挺胸抬頭雙手張開；藍衣不動)",
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
        "text": "12A 擴建",
        "type": "lyrics",
        "segments": [
          {
            "text": "12A 擴建  ",
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
        "text": "12B 擴建  10B 擴建(小V 藍右/左手握拳上)  9A 擴建(大V 藍右/左手握拳上)",
        "type": "lyrics",
        "segments": [
          {
            "text": "12B 擴建  10B 擴建",
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
            "text": "(小V 藍",
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
            "text": "右/左",
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
            "text": "手握拳上) ",
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
            "text": " 9A 擴建",
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
            "text": "(大V 藍",
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
            "text": "右/左",
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
            "text": "手握拳上) ",
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
        "text": "院長：再接一個防疫旅館，119 送來的染疫病人，直入病房！",
        "type": "lyrics",
        "segments": [
          {
            "text": "院長：再接一個防疫旅館，119 送來的染疫病人，直入病房！ ",
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
        "text": "一個病房要有三個醫生，每天要專家會議(全體回正轉向甲舞台)，每個病人，病情要討論。集合眾人",
        "type": "lyrics",
        "segments": [
          {
            "text": "一個病房要有三個醫生，每天要專家會議",
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
            "text": "(全體回正轉向甲舞台)",
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
            "text": "，每個病人，病情要討論。集合眾人",
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
        "text": "的力量，竭力照顧每一位民眾",
        "type": "lyrics",
        "segments": [
          {
            "text": "的力量，竭力照顧每一位民眾 ",
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
        "text": "媽媽，妳怎麼不回家?我們要去打怪獸!照顧(轉向法師腳夾線)確診病人全體住宿43 天!",
        "type": "lyrics",
        "segments": [
          {
            "text": "媽媽，妳怎麼不回家?我們要去打怪獸!",
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
            "text": "照顧",
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
            "text": "(轉向法師腳夾線)",
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
            "text": "確診病人全體住宿43 天!",
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
            "text": "  ",
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
        "text": "~心電圖聲~ 上人：抬頭要向天懺悔(小V) 低頭(大V)要向大地說感恩(大V 手上、小V 回正)",
        "type": "lyrics",
        "segments": [
          {
            "text": "~心電圖聲~ ",
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
            "text": "上人：抬頭要向天",
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
            "text": "懺悔",
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
            "text": "(小V) ",
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
            "text": "低頭",
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
            "text": "要向",
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
            "text": "大地",
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
            "text": "說",
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
            "text": "感恩",
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
            "text": "(大V 手上、小V 回正)",
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
        "text": "啦! ~~匡~~(大V 收轉、小V 轉)",
        "type": "lyrics",
        "segments": [
          {
            "text": "啦! ",
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
            "text": "~~匡~~",
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
            "text": "(大V 收轉、小V 轉)",
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
            "isPurple": true,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "77206D"
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
        "text": "蘇文麟醫師:每天睡覺(手放抬頭)都會驚醒，有沒有(收腳回正)盡力救回每一個病人",
        "type": "lyrics",
        "segments": [
          {
            "text": "蘇文麟醫師:",
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
            "text": "每天睡覺",
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
            "text": "(手放抬頭)",
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
            "text": "都會驚醒，",
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
            "text": "有沒有",
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
            "text": "(收腳回正)",
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
            "text": "盡力救回每一個病人 ",
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
        "text": "趙有誠院長:希望(脫口罩)沒有人是求醫無門，希望每一個人都能得到像家人般的照顧",
        "type": "lyrics",
        "segments": [
          {
            "text": "趙有誠院長:",
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
            "text": "希望",
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
            "text": "(脫口",
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
            "text": "罩)",
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
            "text": "沒有人是求醫無門，希望每一個人都能得到像家人般的照顧 ",
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
        "text": "黃誌群老師:台北慈院110 年曾收治病人，人數全國第一，創下零院內感染紀錄，榮",
        "type": "lyrics",
        "segments": [
          {
            "text": "黃誌群老師:台北慈院110 年曾收治病人，人數全國第一，創下零院內感染紀錄，榮",
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
        "text": "獲中央防疫有功醫院貢獻卓越獎",
        "type": "lyrics",
        "segments": [
          {
            "text": "獲中央防疫有功醫院貢獻卓越獎 ",
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
    "id": "sec_23",
    "title": "【花慈.連體嬰 曲目：衣珠喻 故事】面中央走道腳頂線 11/13(第2 天專屬曲目)",
    "formationKey": "daChuanShi",
    "formationLabel": "07-1大船師 (拉繩/德行品/大醫王)",
    "sessionKeys": [
      "1113"
    ],
    "sessionLabel": "11/13(第2天)專屬曲目",
    "audio": "",
    "videos": [],
    "lines": [
      {
        "text": "(菲律賓os)(開綠燈)很有耐心，很有負責任的護理師",
        "type": "lyrics",
        "segments": [
          {
            "text": "(菲律賓os)",
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
            "text": "很有耐心，很有負責任的護理師 ",
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
        "text": "上人：師姑師伯的疼惜啊，教育的過程呢!都讓他們時時記得人間很多的愛啊，醫療",
        "type": "dialogue",
        "segments": [
          {
            "text": "上人：師姑師伯的疼惜啊，教育的過程呢!都讓他們時時記得人間很多的愛啊，醫療",
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
        "text": "科技能拔苦予樂讓她快樂的人生",
        "type": "lyrics",
        "segments": [
          {
            "text": "科技能拔苦予樂讓她快樂的人生",
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
        "text": "貧者省 懺自身 尋得(東右/西左拿花)寶珠現光明",
        "type": "lyrics",
        "segments": [
          {
            "text": "貧者省 懺自身 ",
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
            "text": "尋得",
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
            "text": "右/西左拿花)",
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
            "text": "寶珠現光明 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "人中勝 願皆成 從此吉(小V)祥(中V)萬(大V)事(定)亨(閃) 【後接 鼓聲7 秒、大醫王】",
        "type": "lyrics",
        "segments": [
          {
            "text": "人中勝 願皆成 ",
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
            "text": "從此吉",
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
            "text": "(小V",
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
            "text": "祥",
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
            "text": "(中V",
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
            "text": "萬",
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
            "text": "(大V",
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
            "text": "事",
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
            "text": "(定",
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
            "text": "亨",
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
            "text": "(閃)",
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
          },
          {
            "text": "【",
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
            "text": "後接 ",
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
            "text": "鼓聲7 秒、",
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
            "text": "大醫王",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": true,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "】",
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
    "id": "sec_24",
    "title": "【中慈.江永旭 曲目：藥師如來12 大願 終曲】面中央走道腳頂線 11/14(第3 天專屬曲目)",
    "formationKey": "daChuanShi",
    "formationLabel": "07-1大船師 (拉繩/德行品/大醫王)",
    "sessionKeys": [
      "1114"
    ],
    "sessionLabel": "11/14(第3天)專屬曲目",
    "audio": "",
    "videos": [],
    "lines": [
      {
        "text": "(一開始站適當方向看演出)",
        "type": "annotation",
        "segments": [
          {
            "text": "(一開始站適當方向看演出)",
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
        "text": "簡守信院長：永旭的世界(回復兩腳頂線)不再是天花板，他不僅走出來，還是一位口足畫",
        "type": "lyrics",
        "segments": [
          {
            "text": "簡守信院長：",
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
            "text": "永旭的世界",
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
            "text": "(回復兩腳頂線)",
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
            "text": "不再是天花板，他不僅走出來，還是一位口足畫",
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
        "text": "家，他也授證成為一位慈濟人，更用行動去關懷跟他一樣脊髓損傷的病患，活出了信",
        "type": "lyrics",
        "segments": [
          {
            "text": "家，他也授證成為一位慈濟人，更用行動去關懷跟他一樣脊髓損傷的病患，活出了信",
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
        "text": "心又有價值的人生",
        "type": "lyrics",
        "segments": [
          {
            "text": "心又有價值的人生 ",
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
        "text": "成就慧命的資~~糧~~【後接 鼓聲7 秒、大醫王】",
        "type": "lyrics",
        "segments": [
          {
            "text": "成就慧命的資~~糧~~",
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
            "text": "【",
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
            "text": "後接 ",
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
            "text": "鼓聲7 秒、",
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
            "text": "大醫王",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": true,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "】",
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
    "id": "sec_25",
    "title": "【北慈.八仙塵爆 曲目：火宅喻 手札】 面中央走道腳頂線 11/15(第4 天專屬曲目)",
    "formationKey": "daChuanShi",
    "formationLabel": "07-1大船師 (拉繩/德行品/大醫王)",
    "sessionKeys": [
      "1115"
    ],
    "sessionLabel": "11/15(第4天)專屬曲目",
    "audio": "Music/慈善+醫療/17 骨捐.mp3",
    "videos": [],
    "lines": [
      {
        "text": "os 更舒適!更透氣!比原來的好看多了!我們每個都要救!",
        "type": "os",
        "segments": [
          {
            "text": "os 更舒適!更透氣!比原來的好看多了!我們每個都要救! ",
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
        "text": "唐文華老師：一個都不能少(轉向甲舞台腳夾線)",
        "type": "lyrics",
        "segments": [
          {
            "text": "唐文華老師：",
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
            "text": "一個都不能少",
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
            "text": "(轉向甲舞台腳夾線)",
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
        "text": "須知三界是火宅(大V)",
        "type": "lyrics",
        "segments": [
          {
            "text": "須知三界是",
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
            "text": "火宅",
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
            "text": "(大",
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
            "text": "V)",
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
        "text": "須知三界是火宅(小V)",
        "type": "lyrics",
        "segments": [
          {
            "text": "須知三界是",
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
            "text": "火宅",
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
        "text": "os 謝謝慈濟給了我們孩子第二次生命(手放) 謝謝院長爸爸 謝謝所有的醫生和姊姊",
        "type": "os",
        "segments": [
          {
            "text": "os 謝謝慈濟給了我們孩子第二",
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
            "text": "次生命",
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
            "text": "(手放)",
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
            "text": " 謝謝院長爸爸 謝謝所有的醫生和姊姊 ",
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
        "text": "謝謝你們沒有放棄我 讓我還能擁抱(朝前出腳大抱)爸爸媽媽【後接 鼓聲7 秒、大醫王】",
        "type": "lyrics",
        "segments": [
          {
            "text": "謝謝你們沒有放棄我 讓我還",
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
            "text": "能擁抱",
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
            "text": "朝前出腳大抱)",
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
            "text": "爸爸媽媽【",
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
            "text": "後接 ",
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
            "text": "鼓聲7 秒、",
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
            "text": "大醫王",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": true,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "】 ",
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
    "title": "【大醫王 曲目：無量義經．德行品】海浪面中央走道腳頂線",
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
        "text": "os ~鼓聲7 秒(換隊形)~大醫王除了拯救他們的病痛，更不忘啟發他們心靈的良能，從臺",
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
            "text": " ~鼓聲7 秒",
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
            "text": "(換隊形)",
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
            "text": "~",
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
            "text": "大醫王除了拯救他們的病痛，更不忘啟發他們心靈的良能，從臺",
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
        "text": "灣出發擴展至全世界，讓善的循環永不間斷，每個病人都是我們的親人，病人也是我",
        "type": "lyrics",
        "segments": [
          {
            "text": "灣出發擴展至全世界，讓善的循環永不間斷，每個病人都是我們的親人，病人也是我",
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
        "text": "們的老師 我們共同的使命就是 守護生命(右手) 守護健康(左手)  守護愛 (~~~船雙手放)",
        "type": "lyrics",
        "segments": [
          {
            "text": "們的老師 我們共同的使命就是 ",
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
    "id": "sec_27",
    "title": "【骨捐】面中央走道腳頂線",
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
        "text": "唉 真的很難啊(記得轉面向中央走道腳頂線) 臺灣愛心的人 那麼多 我一定要 ~咚~我願意",
        "type": "lyrics",
        "segments": [
          {
            "text": "唉 ",
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
            "text": "真的很難啊",
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
            "text": "(記得轉面向中央走道腳頂線)",
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
            "text": " 臺灣愛心的人 那麼多 我一定要 ",
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
            "text": "~咚~",
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
            "text": "我願意",
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
        "text": "(小V)  ~咚~我願意(大V) ~咚~我願意(C 組)  來唷 來啦 來捐血 ~~~ 救人一命 無損己",
        "type": "lyrics",
        "segments": [
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
            "text": "  ",
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
            "text": "~咚~",
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
            "text": "我願意",
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
            "text": "~咚~",
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
            "text": "我願意",
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
            "text": " 來唷 來啦 來捐血 ~~~ 救人一命 無損己",
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
        "text": "身 慈濟和我在找一個人 那個人 可能就是你(轉向)",
        "type": "lyrics",
        "segments": [
          {
            "text": "身 慈濟和我在找一個人 那個人 可能",
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
    "id": "sec_28",
    "title": "【大體捐贈 曲目：無量義經．德行品】面中央走道腳頂線",
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
      },
      {
        "text": "os 來，喝酒【換教育隊形】!喝酒!喝酒!喝酒!喝酒!喝酒!心情不好喝酒就好了啦，這",
        "type": "os",
        "segments": [
          {
            "text": "os 來，",
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
            "text": "喝酒",
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
            "text": "【換教育隊形】",
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
            "text": "!喝酒!喝酒!喝酒!喝酒!喝酒!心情不好喝酒就好了啦，這",
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
        "text": "個孩子，還來不及參加畢業典禮，就已經被賣到西部了。如果讓他有一技之長，就可",
        "type": "lyrics",
        "segments": [
          {
            "text": "個孩子，還來不及參加畢業典禮，就已經被賣到西部了。如果讓他有一技之長，就可",
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
        "text": "以謀生，成為白衣大士更可以為部落服務(轉乙舞台圓心)",
        "type": "lyrics",
        "segments": [
          {
            "text": "以謀生，成為白衣大士",
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
            "text": "更可以為部落服務",
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
            "text": "(轉乙舞台圓心)",
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
        "text": "法師：所發(合十)慈悲  明諦不虛 苦既拔已  復為(東西二朝甲舞台腳夾線)說法",
        "type": "dialogue",
        "segments": [
          {
            "text": "法師：",
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
            "text": "所發",
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
            "text": "慈悲  明諦不虛 苦既拔已  ",
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
            "text": "復為",
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
            "text": "(東西二朝甲舞台腳夾線)",
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
            "text": "說法 ",
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
    "id": "sec_29",
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
      },
      {
        "text": "os 哇!你看!107 位學生ㄟ!嗯!喲!有2 萬多人前來祝福ㄟ。楊思標教授! ㄟ 他可是台",
        "type": "os",
        "segments": [
          {
            "text": "os 哇!你看!107 位學生ㄟ!嗯!喲!有2 萬多人前來祝福ㄟ。楊思標教授! ㄟ 他可是台",
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
        "text": "大醫學院院長。他啊!還當過台大醫院院長喔!他來當後山護專的校長真了不起。唉呦",
        "type": "lyrics",
        "segments": [
          {
            "text": "大醫學院院長。他啊!還當過台大醫院院長喔!他來當後山護專的校長真了不起。唉呦",
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
        "text": "實在令人敬佩啊 !(BGM 護專校歌  多少希望",
        "type": "lyrics",
        "segments": [
          {
            "text": "實在令人敬佩啊",
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
            "text": "(BGM 護專校歌  多少希望 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "依偎在我們的身旁 多少的祝福 寄託在我們肩上)",
        "type": "lyrics",
        "segments": [
          {
            "text": "依偎在我們的身旁 多少的祝福 寄託在我們肩上)",
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
        "text": "人生病最苦，妳們要像白衣大士和大醫王一樣，把病人當做親人，終生無悔的照顧",
        "type": "lyrics",
        "segments": [
          {
            "text": "人生病最苦，妳們要像白衣大士和大醫王一樣，把病人當做親人，終生無悔的照顧 ",
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
        "text": "生老病苦 需要雨露和陽光 慈懷柔腸 輕輕撫平那創傷",
        "type": "lyrics",
        "segments": [
          {
            "text": "生老病苦 需要雨露和陽光 慈懷柔腸 輕輕撫平那創傷 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "我們辦學的校風，要素食，要著校服，我小時候的老師，形象非常的端莊，到現在印",
        "type": "lyrics",
        "segments": [
          {
            "text": "我們辦學的校風，要素食，要著校服，我小時候的老師，形象非常的端莊，到現在印",
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
        "text": "象深刻。 穿制服?這!這很困難喔! 你學校只要辦得好，學生會以穿制服為榮。不僅",
        "type": "lyrics",
        "segments": [
          {
            "text": "象深刻。 穿制服?這!這很困難喔! 你學校只要辦得好，學生會以穿制服為榮。不僅",
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
        "text": "學生穿制服，老師也要穿制服(BGM 慈大校歌",
        "type": "lyrics",
        "segments": [
          {
            "text": "學生穿制服，老師也要穿制服",
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
            "text": "(BGM 慈大校歌 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "醫海遼闊 有緣同航)",
        "type": "lyrics",
        "segments": [
          {
            "text": "醫海遼闊 有緣同航)",
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
        "text": "以前遺體來源是無名屍。 上人 怎麼辦?大體完全沒有來源!",
        "type": "lyrics",
        "segments": [
          {
            "text": "以前遺體來源是無名屍。 上人 怎麼辦?大體完全沒有來源!  ",
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
        "text": "如果可以做到最尊重的處理方式，大體的來源我可以來呼籲",
        "type": "lyrics",
        "segments": [
          {
            "text": "如果可以做到最尊重的處理方式，大體的來源我可以來呼籲 ",
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
        "text": "上人!大體不再是泡在福馬林裡了，乾式沒有味道，大體的吊掛式改為平躺，放在學",
        "type": "lyrics",
        "segments": [
          {
            "text": "上人!大體不再是泡在福馬林裡了，乾式沒有味道，大體的吊掛式改為平躺，放在學",
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
        "text": "校最明亮的地方，發揮生命最後的使用權，讓醫學生可以從大體身上學到很多拯救更",
        "type": "lyrics",
        "segments": [
          {
            "text": "校最明亮的地方，發揮生命最後的使用權，讓醫學生可以從大體身上學到很多拯救更",
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
        "text": "多生病的人，那是最有價值的人生!ㄟ!什麼是大體捐贈啊?就是人往生後，將身體提",
        "type": "lyrics",
        "segments": [
          {
            "text": "多生病的人，那是最有價值的人生!ㄟ!什麼是大體捐贈啊?就是人往生後，將身體提",
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
        "text": "供給醫學生解剖啊!喔!原來是學習人體結構!對阿!可是傳統觀念就是要入土為安，對",
        "type": "lyrics",
        "segments": [
          {
            "text": "供給醫學生解剖啊!喔!原來是學習人體結構!對阿!可是傳統觀念就是要入土為安，對",
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
        "text": "丫!誰願意啊?",
        "type": "lyrics",
        "segments": [
          {
            "text": "丫!誰願意啊? ",
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
    "id": "sec_30",
    "title": "【大體老師 曲目：無量義經終曲】東西二朝甲舞台腳夾線",
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
        "text": "os 欸!來了一個車禍嚴重氣胸的病人，欸! 你會插管嗎?我!呃!大體老師的身上，有讓",
        "type": "os",
        "segments": [
          {
            "text": "os 欸!來了一個車禍嚴重氣胸的病人，欸! 你會插管嗎?我!呃!大體老師的身上，有讓",
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
        "text": "我練習過插管，我來。嗯!胸管放置成功。哇! (合十亮綠燈)病人呼吸平穩了!嗯，向大體",
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
            "text": "哇!",
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
            "text": " (合十亮綠燈)",
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
            "text": "病人呼吸平穩了!嗯，向大體",
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
        "text": "老師敬禮，感恩老師您奉獻身體成就我們。",
        "type": "lyrics",
        "segments": [
          {
            "text": "老師敬禮，感恩老師您奉獻身體成就我們。 ",
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
    "id": "sec_31",
    "title": "【慈大醫學院宣誓 曲目：慈大校歌】東西二朝法師腳夾線",
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
        "text": "os 我衷心的表明，我的生涯是服務人類。  病人的生命，就託付給你們了!",
        "type": "os",
        "segments": [
          {
            "text": "os 我衷心的表明，我的生涯是服務人類。  病人的生命，就託付給你們了! ",
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
        "text": "~~音效~~八仙塵爆傷患，已經送往台北慈濟醫院，放棄暑假 我可以支援，我在桃園",
        "type": "lyrics",
        "segments": [
          {
            "text": "~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "音效",
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
            "text": "~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "八仙塵爆傷患，已經送往台北慈濟醫院，放棄暑假 我可以支援，我在桃園 ",
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
        "text": "我也可以，我在臺中 我也可以，我在臺南 我也可以，放棄暑假 全力以赴",
        "type": "lyrics",
        "segments": [
          {
            "text": "我也可以，我在臺中 我也可以，我在臺南 我也可以，放棄暑假 全力以赴 ",
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
        "text": "菩薩安住於實相",
        "type": "lyrics",
        "segments": [
          {
            "text": "菩薩安住於實相  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "所發慈悲明不虛  於眾生所能拔苦",
        "type": "lyrics",
        "segments": [
          {
            "text": "所發慈悲明不虛  於眾生所能拔苦 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "苦既拔已復說法",
        "type": "lyrics",
        "segments": [
          {
            "text": "苦既拔已復說法 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "上人：立大願(東西二轉面向法師，外手拿花開綠燈放大腿邊)呢!總是要讓生命在你的手中得",
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
            "text": "立大願",
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
            "text": "(東西二轉面向法師，外手拿花開綠燈放大腿邊)",
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
            "text": "呢!總是要讓生命在你的手中得",
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
        "text": "救，期待你們立志為人醫",
        "type": "lyrics",
        "segments": [
          {
            "text": "救，期待你們立志為人醫 ",
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
    "id": "sec_32",
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
    "id": "sec_33",
    "title": "【慈小個案 曲目：種樹】東西二朝乙舞台圓心腳頂線",
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
        "text": "os 2000 年慈濟創辦中小學(拿花合十壓縮，到位時直接轉向法師並開燈)，完成完全教育，將品",
        "type": "os",
        "segments": [
          {
            "text": "os ",
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
            "text": "(拿花合十壓縮，到位",
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
            "text": "時直接轉向法師並開燈)",
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
        "text": "os ㄟ你們怎麼在掃廁所(收、轉甲舞台)啊，我們要操行很高才能掃廁所，廁所很乾淨",
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
            "text": "(收、轉甲舞台)",
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
            "text": "啊，我們要操行很高才能掃廁所，廁所很乾淨",
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
        "text": "耶，這是我們的榮耀。同學們，老師帶你們去水源部落關懷獨居老人~~不要小看自己 人有",
        "type": "lyrics",
        "segments": [
          {
            "text": "耶，這是我們的榮耀。同學們，老師帶你們去水源部落關懷獨居老人~~",
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
            "text": "不要小看自己 人有",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "無限可能",
        "type": "lyrics",
        "segments": [
          {
            "text": "無限可能 ",
            "isRed": false,
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
    "title": "【教育完全化 曲目：成長/感恩】東西二朝甲舞台腳夾線",
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
        "text": "os 慈濟的完全教育，以慈悲喜捨為校訓，畢業典禮即是教育人文(東西二朝甲舞台腳夾線)",
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
            "text": "(東西二朝甲舞台腳夾線)",
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
        "text": "的展現",
        "type": "lyrics",
        "segments": [
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
        "text": "曾經我的腳步  有您殷殷善誘和陪伴  當我走向新的旅程 滿心感恩不能忘",
        "type": "lyrics",
        "segments": [
          {
            "text": "曾經我的腳步  有您殷殷善誘和陪伴  當我走向新的旅程 滿心感恩不能忘 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "我終將張開翅膀 飛向更寬闊的遠方",
        "type": "lyrics",
        "segments": [
          {
            "text": "我終將張開翅膀 飛向更寬闊的遠方  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
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
        "text": "林語桐小菩薩：我有自信，可以通過考驗，在未來，我會更加努力，繼續做一個手心",
        "type": "lyrics",
        "segments": [
          {
            "text": "林語桐小菩薩：我有自信，可以通過考驗，在未來，我會更加努力，繼續做一個手心",
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
        "text": "向下的小菩薩",
        "type": "lyrics",
        "segments": [
          {
            "text": "向下的小菩薩 ",
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
        "text": "沈柏漢：很感恩，因為把握每一次能夠付出投入的機會，讓我的生命過得很充實、很",
        "type": "lyrics",
        "segments": [
          {
            "text": "沈柏漢：很感恩，因為把握每一次能夠付出投入的機會，讓我的生命過得很充實、很",
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
        "text": "快樂而且很有價值",
        "type": "lyrics",
        "segments": [
          {
            "text": "快樂而且很有價值 ",
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
        "text": "我們會是慈濟的延續(收、轉甲舞台)",
        "type": "lyrics",
        "segments": [
          {
            "text": "我們會是慈濟的延續",
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
            "text": "(收、轉甲舞台)",
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
    "id": "sec_35",
    "title": "【靜思語教學 曲目：藥草喻】東西二朝乙舞台圓心腳頂線 11/14、15(第3、4 天專屬曲目)",
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
        "text": "上人：這幾十年來(拿花合十、東西二朝乙舞台圓心腳頂線)社會很平靜，跟你們教聯會不是沒",
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
            "text": "這幾十年來",
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
            "text": "(拿花合十、東西二朝乙舞台圓心腳頂線)",
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
            "text": "社會很平靜，跟你們教聯會不是沒",
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
        "text": "關係喔!你們對學生那種的師生之情，學生被老師影響，改變了他的一生",
        "type": "lyrics",
        "segments": [
          {
            "text": "關係喔!你們對學生那種的師生之情，學生被老師影響，改變了他的一生",
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
            "text": "皆為菩薩行六度",
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
        "text": "os 慈濟世界!【換身分證隊形】步行在清朗芬芳路上，沐浴在佛法清泉流中……",
        "type": "os",
        "segments": [
          {
            "text": "os ",
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
            "text": "慈濟世界!",
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
            "text": "【換身分證隊形】",
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
            "text": "步行在清朗芬芳路上，沐浴在佛法清泉流中…… ",
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
    "id": "sec_36",
    "title": "【幸福人生講座 曲目：父母恩重難報經．因緣】開始面甲舞台45 度，後面法師45 度",
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
        "text": "os 師父啊!你知道嗎，我實在很害怕，你怕什麼?啊就一個仙仔和我講，說我們家的祖",
        "type": "os",
        "segments": [
          {
            "text": "os 師父啊!你知道嗎，我實在很害怕，你怕什麼?啊就一個仙仔和我講，說我們家的祖",
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
        "text": "先都在相告，啊就也不知道說，要抓哪一個，啊我 我很擔心 啊你難道沒有疼妳的子",
        "type": "lyrics",
        "segments": [
          {
            "text": "先都在相告，啊就也不知道說，要抓哪一個，啊我 我很擔心 啊你難道沒有疼妳的子",
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
        "text": "孫 當然疼愛啊 你不就是子孫的祖先 啊你們難道會對子孫不利 哪會 啊哪有可能去",
        "type": "lyrics",
        "segments": [
          {
            "text": "孫 當然疼愛啊 你不就是子孫的祖先 啊你們難道會對子孫不利 哪會 啊哪有可能去",
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
        "text": "害子孫 ~~~我們對祖先是慎終追遠，要懂得尋根，在平時(合十轉向法師45 度；1~9 排3 白",
        "type": "lyrics",
        "segments": [
          {
            "text": "害子孫 ~~~我們對祖先是慎終追遠，要懂得尋根，",
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
            "text": "(合十轉向法師45 度；1~9 排3 白",
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
        "text": "3 藍3 白高跪)，就要好好的回報父母恩",
        "type": "lyrics",
        "segments": [
          {
            "text": "3 藍3 白高跪)",
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
            "text": "，就要好好的回報父母恩",
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
        "text": "佛告阿難應諦聽(高跪→坐跪) 分別為你說分明(坐跪→高跪)",
        "type": "lyrics",
        "segments": [
          {
            "text": "佛告阿難應諦聽",
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
            "text": "(高跪→坐跪) ",
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
            "text": "分別為你說分明",
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
            "text": "(坐跪→高跪)  ",
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
        "text": "枯骨因緣溯前世 或是多生父母親(高跪→坐跪)",
        "type": "lyrics",
        "segments": [
          {
            "text": "枯骨因緣溯前世 或是多生父母",
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
            "text": "親",
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
            "text": "(高跪→坐跪)",
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
        "text": "父為子女苦營生(坐跪→高跪)  勞心勞力兩霜鬢",
        "type": "lyrics",
        "segments": [
          {
            "text": "父為子女苦營生",
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
            "text": "(坐跪→高跪) ",
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
            "text": " 勞心勞力兩霜鬢 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "養兒育女慈母心 一生茹苦又含辛",
        "type": "lyrics",
        "segments": [
          {
            "text": "養兒育女慈母心 一生茹苦又含辛 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "法師：對(合十)父母要 知恩 感恩 報恩",
        "type": "dialogue",
        "segments": [
          {
            "text": "法師：對",
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
            "text": "父母要 知恩 感恩 報恩 ",
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
    "id": "sec_37",
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
        "text": "古聖先賢孝為宗 萬善之門孝為基(跪的藍色不出腳) 禮敬尊親如活佛",
        "type": "lyrics",
        "segments": [
          {
            "text": "古聖先賢孝為宗 萬善之門孝為",
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
            "text": "基",
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
            "text": "(跪的藍色不出腳) ",
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
            "text": "禮敬尊親如活佛 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
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
        "text": "os (台語)七月鬼門開【換主機板隊形】(目犍連救母)",
        "type": "os",
        "segments": [
          {
            "text": "os (台語",
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
            "text": ")七月鬼門開",
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
            "text": "【換主機板隊形】",
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
            "text": "(目犍連救母) ",
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
    "id": "sec_38",
    "title": "【十戒 曲目：慈誠隊歌】面甲舞台45 度",
    "formationKey": "humanities2",
    "formationLabel": "09-2人文 (主機板)",
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
        "text": "os 慈誠隊!要守八戒(上演繹位置後面甲舞台)、佛教徒的五戒，還要加上不能抽菸、不能",
        "type": "os",
        "segments": [
          {
            "text": "os ",
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
            "text": "慈誠隊!要守八戒",
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
            "text": "(上演繹位置後",
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
            "text": "面甲舞台)",
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
            "text": "、佛教徒的五戒，還要加上不能抽菸、不能",
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
        "text": "吃檳榔、還有不賭博 不可以罵人、和睦家庭、要加上這三條戒。師父啊!啊人家佛陀",
        "type": "lyrics",
        "segments": [
          {
            "text": "吃檳榔、還有不賭博 不可以罵人、和睦家庭、要加上這三條戒。師父啊!啊人家佛陀",
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
        "text": "的五戒，又沒說不能抽菸啊，佛陀在世的時候，又沒有公賣局，啊你一支菸若抽了，",
        "type": "lyrics",
        "segments": [
          {
            "text": "的五戒，又沒說不能抽菸啊，佛陀在世的時候，又沒有公賣局，啊你一支菸若抽了，",
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
        "text": "就有十五種致癌的成份，如果把抽菸的錢存下來，可以買好幾塊磚，來建醫院 蓋學",
        "type": "lyrics",
        "segments": [
          {
            "text": "就有十五種致癌的成份，如果把抽菸的錢存下來，可以買好幾塊磚，來建醫院 蓋學",
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
        "text": "校，師父啊!菸對人體齁 有害齁，要我們戒掉是沒問題啦，不過，我們為什麼不能吃",
        "type": "lyrics",
        "segments": [
          {
            "text": "校，師父啊!菸對人體齁 有害齁，要我們戒掉是沒問題啦，不過，我們為什麼不能吃",
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
        "text": "檳榔，檳榔是素的耶，這是形象，外國人說我們臺灣人，這樣邊開車邊吐血，我們不",
        "type": "lyrics",
        "segments": [
          {
            "text": "檳榔，檳榔是素的耶，這是形象，外國人說我們臺灣人，這樣邊開車邊吐血，我們不",
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
        "text": "能讓這種國家的形象傳去國外，所以要戒檳榔，嗶~~~(演繹慈誠請依所站位置轉正確方向；其",
        "type": "lyrics",
        "segments": [
          {
            "text": "能讓這種國家的形象傳去國外，所以要戒檳榔，",
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
            "text": "嗶~~~",
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
            "text": "(演繹慈誠請依所站位置轉正確方向；其",
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
        "text": "餘法海面甲45)",
        "type": "lyrics",
        "segments": [
          {
            "text": "餘法海面甲45)",
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
        "text": "合心 和氣 互愛 協力(男眾下舞台全體面向甲舞台45 度)",
        "type": "lyrics",
        "segments": [
          {
            "text": "合心 和氣 互愛 協力",
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
            "text": "(男眾下舞台全體面向甲舞台45 度)",
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
    "id": "sec_39",
    "title": "【大愛台、經典 曲目：大愛讓世界亮起來】主機板箭頭方向",
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
            "text": "(轉面向箭頭方",
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
            "text": "向)",
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
            "text": "(合十開",
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
            "text": "綠燈)",
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
        "text": "感恩(白舉燈上、藍敬禮)的心 守著每一個(白敬禮、藍舉燈上)平安的夜晚",
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
            "text": "(白舉燈上、",
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
            "text": "藍敬禮)",
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
            "text": "(白敬禮、藍",
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
            "text": "舉燈上)",
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
        "text": "期待(白舉燈上、藍敬禮)明天 大愛(出右腳平推)讓世界(雙手舉高)亮起來(收右腳雙手閃)",
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
            "text": "(白舉燈上、",
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
            "text": "藍敬禮)",
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
      },
      {
        "text": "~咔嚓 咔嚓(轉面向乙舞台圓心)~遠親近鄰 厝邊相對面愛心店，愛 惦在這，這就是福啦，不是為",
        "type": "lyrics",
        "segments": [
          {
            "text": "~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "咔嚓 咔嚓",
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
            "text": "~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "遠親近鄰 厝邊相對面",
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
            "text": "愛心店，愛 惦在這，這就是福啦，不是為",
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
        "text": "了錢喔!是要淨化人心，全臺有七萬多家 (大聲說)咧，瑞氣滿人間啊，讓社會更祥和，",
        "type": "lyrics",
        "segments": [
          {
            "text": "了錢喔!是要淨化人心，全臺有七萬多家 ",
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
            "text": "(大聲說)",
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
            "text": "咧，瑞氣滿人間啊，讓社會更祥和，",
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
        "text": "愛心惦在這(大聲說；右手右腳做投竹筒動作) 厝邊相對面~咔嚓 咔嚓~ (收手腳轉面甲45) 有缘住置咧",
        "type": "lyrics",
        "segments": [
          {
            "text": "愛心惦在這",
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
            "text": "(大聲說；右手右腳做投竹筒動作)",
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
            "text": "厝邊相對面",
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
            "text": "~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "咔嚓 咔嚓",
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
            "text": "~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": " (收手腳轉面甲45)",
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
            "text": " 有缘住置咧 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "同街巷ㄟ! 他家在山上耶，哇 好高耶~咔嚓 咔嚓~你我親像一家人 電動病床、輪椅、還有洗",
        "type": "lyrics",
        "segments": [
          {
            "text": "同街巷",
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
            "text": "ㄟ! 他家在山上耶，哇 好高耶",
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
            "text": "~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "咔嚓 咔嚓",
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
            "text": "~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "你我親像一家人 ",
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
            "text": "電動病床、輪椅、還有洗",
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
        "text": "澡椅，都幫我們準備好了，免費服務送到家~咔嚓 咔嚓~ 遠親近鄰厝邊相對面，有這扶手就",
        "type": "lyrics",
        "segments": [
          {
            "text": "澡椅，都幫我們準備好了，免費服務送到家",
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
            "text": "~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "咔嚓 咔嚓",
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
            "text": "~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
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
            "text": "遠親近鄰厝邊相對面",
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
            "text": "，有這扶手就",
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
        "text": "不會跌倒了，看到扶手就好像 上人在牽我們走~咔嚓 咔嚓~ 有阮甲你來作伴醫療志工是軟",
        "type": "lyrics",
        "segments": [
          {
            "text": "不會跌倒了，看到扶手就好像 上人在牽我們走",
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
            "text": "~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "咔嚓 咔嚓",
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
            "text": "~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
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
            "text": "有阮甲你來作伴",
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
            "text": "醫療志工是軟",
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
        "text": "體中的軟體 咱來學唱生命的歌 一時的病痛是要怎麼辦，有我們和你來作伴，真心的愛是",
        "type": "lyrics",
        "segments": [
          {
            "text": "體中的軟體 ",
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
            "text": "咱來學唱生命的歌 ",
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
            "text": "一時的病痛是要怎麼辦，有我們和你來作伴，真心的愛是",
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
        "text": "最好的力量~咔嚓 咔嚓~ 看你歡喜笑阮著感恩啊 現在真正的老師就是媒體。科技發達，只要",
        "type": "lyrics",
        "segments": [
          {
            "text": "最好的力量",
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
            "text": "~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "咔嚓 咔嚓",
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
            "text": "~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
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
            "text": "看你歡喜笑阮著感恩啊 ",
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
            "text": "現在真正的老師就是媒體。科技發達，只要",
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
        "text": "有心，每天手指一點你隨叫，我隨到。",
        "type": "lyrics",
        "segments": [
          {
            "text": "有心，每天手指一點你隨叫，我隨到。 ",
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
    "title": "【大地的園丁 曲目：天空破了洞】主機板箭頭方向",
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
    "id": "sec_41",
    "title": "【法譬如水能洗垢 曲目：無量義經說法品】主機板箭頭方向",
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
        "text": "我們要用鼓掌的雙手 (僅有藍衣合十)來做環保(邊大聲喊邊內轉向箭頭方向)",
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
            "text": " (僅有藍衣合十)",
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
            "text": "(邊大聲喊邊內轉向箭頭方向) ",
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
        "text": "這樣鏗鏗鏘鏘(身體回正轉面甲45)倒下去的聲音，就像是金銀財寶的聲音，聽這聲音真歡",
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
            "text": "(身體回正轉面甲45)",
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
            "text": "倒下去的聲音，就像是金銀財寶的聲音，聽這聲音真歡",
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
        "text": "喜。喔!回收50 公斤的紙，等於可以救一棵20 年的大樹喔! 一棵大樹",
        "type": "lyrics",
        "segments": [
          {
            "text": "喜。喔!回收50 公斤的紙，等於可以救一棵20 年的大樹喔! ",
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
        "text": "唉呦! 你不知道若寶特瓶70 支，就可以做一條毛毯! 一條毛毯",
        "type": "lyrics",
        "segments": [
          {
            "text": "唉呦! 你不知道若寶特瓶70 支，就可以做一條毛毯! ",
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
        "text": "喔!這個環保磚是怎麼做的? 這環保磚就是咱喝過的紙杯，把它們洗洗乾淨，回收再",
        "type": "lyrics",
        "segments": [
          {
            "text": "喔!這個環保磚是怎麼做的? 這環保磚就是咱喝過的紙杯，把它們洗洗乾淨，回收再",
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
        "text": "利用，喔~好~神~奇~ 環保磚(邊唸邊轉向主機板方向)",
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
            "text": "(邊唸邊轉向主機板方向)",
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
        "text": "垃圾變黃金(白衣出右腳雙手平舉高) 黃金變愛心(藍衣出右腳雙手平舉高))",
        "type": "lyrics",
        "segments": [
          {
            "text": "垃圾變黃金",
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
            "text": "(白衣出右腳雙手平舉",
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
            "text": "高)",
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
            "text": "黃金變愛心",
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
            "text": "(藍衣出右腳雙手平舉高))",
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
        "text": "愛心化清流 (白衣左後轉180 度)  清流繞全球(藍衣左後轉180 度) 啊 繞(收右腳閃) ~全~球~",
        "type": "lyrics",
        "segments": [
          {
            "text": "愛心化清流",
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
            "text": "(白衣左後轉180 度)  ",
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
            "text": "清流繞全球",
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
            "text": "(藍",
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
            "text": "衣左後轉180 度)",
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
            "text": "啊 繞",
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
            "text": "(收右腳閃) ",
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
            "text": "~全~球~ ",
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
        "text": "水性是一水各異 我們今天有回收一台輪椅喔! 一兩天回收一張病床，我跟您說，咱后里有",
        "type": "lyrics",
        "segments": [
          {
            "text": "水性是一水各異 ",
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
            "text": "我們今天有回收一台輪椅喔! 一兩天回收一張病床，我跟您說，咱后里有",
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
        "text": "一個輔具百貨公司，喔 其實我們輔具慈濟已經做九年了喔!已經服務十三萬個家庭",
        "type": "lyrics",
        "segments": [
          {
            "text": "一個輔具百貨公司，喔 其實我們輔具慈濟已經做九年了喔!已經服務十三萬個家庭",
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
        "text": "喔! 哇! 有夠讚! (大聲喊、右後轉180 度向箭頭方向)",
        "type": "lyrics",
        "segments": [
          {
            "text": "喔! 哇! ",
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
            "text": " (大聲喊、右後轉180 度向箭頭方向)",
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
    "id": "sec_42",
    "title": "【慈悲科技上聯合國 曲目：無量義經說法品】 主機板箭頭方向",
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
      },
      {
        "text": "唐文華老師：濟貧教富 貧中之富【換五大洲隊形】一滴水入大海 永不乾涸 五毛錢的真諦……",
        "type": "lyrics",
        "segments": [
          {
            "text": "唐文華老師：",
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
            "text": "濟貧教富 貧中之富",
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
            "text": "【換五大洲隊形】",
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
            "text": "一滴水入大海 永不乾涸 五毛錢的真諦",
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
            "text": "…… ",
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
    "id": "sec_43",
    "title": "【貧中之富 樂生 曲目：超越天堂】甲舞台45 度  11/12、15(第1、4 天專屬曲目)",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1112",
      "1115"
    ],
    "sessionLabel": "11/12(第1天)、11/15(第4天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品] 01樂生療養院_超越天堂.mp3",
    "videos": [
      {
        "title": "[功德品] 樂生",
        "url": "https://www.youtube.com/watch?v=mGhnmtxZrn8&list=PLbIvC-A2H2ko",
        "videoId": "mGhnmtxZrn8"
      }
    ],
    "lines": [
      {
        "text": "這 是我們的家 ~樂生院拆遷的補償金我要全數捐出!做好事很有意義，人若多！就有",
        "type": "lyrics",
        "segments": [
          {
            "text": "這 是我們的家 ~樂生院拆遷的補償金我要全數捐出!做好事很有意義，人若多！就",
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
            "text": "有",
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
        "text": "夠力(雙手伸直交疊)",
        "type": "lyrics",
        "segments": [
          {
            "text": "夠力",
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
            "text": "(雙手伸直交疊)",
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
    "id": "sec_44",
    "title": "【第一功德】法師45 度",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "",
    "videos": [],
    "lines": [
      {
        "text": "(前奏合掌轉向法師45)第一功德難思議",
        "type": "lyrics",
        "segments": [
          {
            "text": "(前奏合掌轉向法師45)",
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
            "text": "第一功德難思議  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "道源功德由信起",
        "type": "lyrics",
        "segments": [
          {
            "text": "道源功德由信起 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "是經能令諸菩薩",
        "type": "lyrics",
        "segments": [
          {
            "text": "是經能令諸菩薩 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "未發心者能發(右手在右肩前握拳)心(右手伸直舉高)  結束轉向甲舞台45",
        "type": "lyrics",
        "segments": [
          {
            "text": "未發心者",
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
            "text": "能發",
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
            "text": "(右手在右肩前握拳",
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
            "text": "心",
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
            "text": "(右手伸直舉高)  結束轉向甲舞台45",
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
    "id": "sec_45",
    "title": "【富中之富  A 曲目：彌勒問】甲舞台45 度 11/13、15(第2、4 天專屬曲目)",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1113",
      "1115"
    ],
    "sessionLabel": "11/13(第2天)、11/15(第4天)專屬曲目",
    "audio": "Music/功德品/1112/[功德品] 富中之富-A 0811.wav",
    "videos": [
      {
        "title": "[功德品] 富中之富 A",
        "url": "https://www.youtube.com/watch?v=m2NvdK1rQpk&list=PLGafJimf9RDw",
        "videoId": "m2NvdK1rQpk"
      }
    ],
    "lines": [
      {
        "text": "os 那~什麼是富中之富(開綠燈)啊! 開啟心靈的富有啊! (西一：搭靜思堂)",
        "type": "os",
        "segments": [
          {
            "text": "os 那~什麼是",
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
            "text": "富中之富",
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
            "text": "啊! 開啟心靈的富有啊!",
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
        "text": "我見彼土諸菩薩(東二轉向非洲中心) 為求(東二法海指引、舉鋼筋道具)佛道行布施",
        "type": "lyrics",
        "segments": [
          {
            "text": "我見彼土諸菩薩",
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
            "text": "(東二轉向非洲中心)",
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
          },
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
            "text": "(東二法海指引、舉鋼筋道具)",
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
        "text": "像這幾位921 大地震聽到 上人說教育不能等，立即認養多所學校，為善不欲人知，",
        "type": "lyrics",
        "segments": [
          {
            "text": "像這幾位921 大地震聽到 上人說教育不能等，立即認養多所學校，為善不欲人知，",
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
        "text": "只求 上人「ㄇㄞˋ煩惱」",
        "type": "lyrics",
        "segments": [
          {
            "text": "只求 上人「ㄇㄞˋ煩惱」 ",
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
        "text": "車馬(東一：舉道具、法海指引；東二收)華蓋摩尼珠",
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
            "text": "(東一：舉道具、法海指引；東二收)",
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
        "text": "上人號召(東一法海指引)這些實業家，用他們的專業幫助苦難人。食、衣、住、行都考慮",
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
            "text": "這些實業家，用他們的專業幫助苦難人。食、衣、住、行都考慮",
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
        "text": "到了，實在是太貼心了。",
        "type": "lyrics",
        "segments": [
          {
            "text": "到了，實在是太貼心了。 ",
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
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "頭目髓腦亦樂施(西二：南美洲蔬果；全體藍衣指引)",
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
            "text": "(西二：南美洲蔬果；全體藍衣指引) ",
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
        "text": "台灣半導體(全體白衣合十)開路先鋒杜俊元!他還捐地蓋靜思堂ㄟ，生前大布施(大聲唸、白",
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
            "text": "開路先鋒杜俊元!他還捐地蓋靜思堂ㄟ，生前",
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
            "text": "大布施",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "FF0000"
          },
          {
            "text": "(",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": true,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "大聲唸、白",
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
        "text": "衣敬禮)，往生捐大體，發發揮生命的使用權(全體大聲唸，白衣邊唸邊起，全體唸完手回正)！大",
        "type": "lyrics",
        "segments": [
          {
            "text": "衣敬禮)",
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
            "text": "，往生捐大體，",
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
            "text": "發發揮生命的",
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
            "text": "使用",
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
            "text": "權",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "FF0000"
          },
          {
            "text": "(全體大聲唸，白衣邊唸邊起，全體唸完手回正)",
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
            "text": "大",
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
        "text": "成鋼鐵(西二：舉素食道具)推素14 年了耶!(西二法海指引)員工兩千人都吃素ㄟ！",
        "type": "lyrics",
        "segments": [
          {
            "text": "成鋼鐵",
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
            "text": "(西二：舉素食道具",
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
            "text": "推素14 年了耶!",
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
            "text": "(西二",
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
            "text": "法海指引)",
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
            "text": "員工兩千人都吃素ㄟ！ ",
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
            "text": "(西二",
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
            "text": "：舉五毛錢道具；法海收)",
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
        "text": "子的傳家寶(西二法海收、全體轉面向道具)耶!",
        "type": "lyrics",
        "segments": [
          {
            "text": "子的傳家寶",
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
            "text": "(西二法海收、全體轉面向道具)",
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
            "text": "耶! ",
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
        "text": "志工總動員 使命必達(大聲唸)",
        "type": "lyrics",
        "segments": [
          {
            "text": "志工總動員 ",
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
            "text": "(出/跪腳雙手上)",
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
    "id": "sec_46",
    "title": "【富中之富  B 曲目：彌勒問】甲舞台45 度 11/12、14(第1、3 天專屬曲目)",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1112",
      "1114"
    ],
    "sessionLabel": "11/12(第1天)、11/14(第3天)專屬曲目",
    "audio": "Music/功德品/1112/[功德品] 富中之富-A 0811.wav",
    "videos": [
      {
        "title": "[功德品] 富中之富 B",
        "url": "https://www.youtube.com/watch?v=14EMlfGGBXY&list=PLbIvC-A2H2ko",
        "videoId": "14EMlfGGBXY"
      }
    ],
    "lines": [
      {
        "text": "os 那~什麼是富中之富(開綠燈)啊! 開啟心靈的富有啊! (西一：搭靜思堂)",
        "type": "os",
        "segments": [
          {
            "text": "os 那~什麼是",
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
            "text": "富中之富",
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
            "text": "啊! 開啟心靈的富有啊!",
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
        "text": "我見彼土諸菩薩(東二轉向非洲中心) 為求(東二法海指引、舉舉勸募箱.大米.毛毯)佛道行布施",
        "type": "lyrics",
        "segments": [
          {
            "text": "我見彼土諸菩薩",
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
            "text": "(東二轉向非洲中心)",
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
          },
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
            "text": "(東二法海指引、舉舉勸募箱.大米.毛毯)",
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
        "text": "你看這些實業家的菩薩身影，個個放下身段！災區發放，幫災民扛大米ㄟ。還有新馬",
        "type": "lyrics",
        "segments": [
          {
            "text": "你看這些實業家的菩薩身影，個個放下身段！災區發放，幫災民扛大米ㄟ。還有新馬",
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
        "text": "實業家，放下事業，回報佛恩。",
        "type": "lyrics",
        "segments": [
          {
            "text": "實業家，放下事業，回報佛恩。 ",
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
        "text": "車馬(東一：舉道具、法海指引；東二收)華蓋摩尼珠",
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
            "text": "(東一：舉道具、法海指引；東二收)",
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
        "text": "你看!這些實業家夫人舉辦了一場又一場珠寶字畫義賣耶! 為善不欲人知，只求 上人",
        "type": "lyrics",
        "segments": [
          {
            "text": "你看!這些實業家夫人舉辦了一場又一場珠寶字畫義賣耶! 為善不欲人知，只求 上人 ",
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
        "text": "「ㄇㄞˋ煩惱」",
        "type": "lyrics",
        "segments": [
          {
            "text": "「ㄇㄞˋ煩惱」 ",
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
        "text": "溫居士(西一法海指引)參與 921 震災，他還捐了一萬多坪土地蓋靜思堂欸！他說，留財",
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
            "text": "一法海指引)",
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
            "text": "參與 921 震災，他還捐了一萬多坪土地蓋靜思堂欸！",
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
            "text": "他說，留財",
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
        "text": "產給子孫，不如留德給子孫，以善行做為傳家寶。",
        "type": "lyrics",
        "segments": [
          {
            "text": "產給子孫",
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
        "text": "頭目髓腦亦樂施(西二：南美洲蔬果；全體藍衣指引)",
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
            "text": "(西二：南美洲蔬果；全體藍衣指引) ",
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
        "text": "這位航運界(全體白衣合十)鉅子李爺爺，不僅孝順還樂善好施，生前大布施(大聲唸、白衣敬",
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
            "text": "鉅子李爺爺，不僅孝順還樂善好施，生前",
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
            "text": "大布施",
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
            "text": "(",
            "isRed": false,
            "isGreen": true,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": true,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "大聲唸、白衣敬",
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
        "text": "禮)，往生捐大體，發揮生命的使用權(全體大聲唸，白衣邊唸邊起，全體唸完手放回正)！大馬實",
        "type": "lyrics",
        "segments": [
          {
            "text": "禮)",
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
            "text": "，往生捐大體，發揮生命的",
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
            "text": "使用",
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
            "text": "權",
            "isRed": true,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "FF0000"
          },
          {
            "text": "(全體大聲唸，白衣邊唸邊起，全體唸完手放回正)",
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
            "text": "大馬實",
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
        "text": "業家(西二：舉素食道具)陳志遠(西二法海指引)，孝順又有愛心，尤其是他見到 上人之後，",
        "type": "lyrics",
        "segments": [
          {
            "text": "業家",
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
            "text": "(西二：舉素食道具",
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
            "text": "，孝順又有愛心，尤其是他見到 上人之後，",
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
        "text": "當天他就開始吃素了，到現在已經 11 年了耶！(西二法海收)",
        "type": "lyrics",
        "segments": [
          {
            "text": "當天他就開始吃素了，到現在已經 11 年了耶！",
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
            "text": "(西二",
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
            "text": "：舉五毛錢道具；法海收)",
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
        "text": "子的傳家寶(西二法海收、全體轉面向道具)耶!",
        "type": "lyrics",
        "segments": [
          {
            "text": "子的傳家寶",
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
            "text": "(西二法海收、全體轉面向道具)",
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
            "text": "耶! ",
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
        "text": "志工總動員 使命必達(大聲唸)",
        "type": "lyrics",
        "segments": [
          {
            "text": "志工總動員 ",
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
    "id": "sec_47",
    "title": "【五毛錢的力量(馬來西亞阿婆)】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1112",
      "1113",
      "1114",
      "1115"
    ],
    "sessionLabel": "",
    "audio": "",
    "videos": [],
    "lines": [
      {
        "text": "啊!我想到了(台灣上舞台；法海AB 開綠燈，白衣合掌拿燈、藍衣合掌)，今天的五毛錢還沒有丟",
        "type": "lyrics",
        "segments": [
          {
            "text": "啊!",
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
            "text": "我想到了",
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
            "text": "(台灣上舞台；法海AB 開綠燈，白衣合掌拿燈、藍衣合掌)",
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
            "text": "，今天的五毛錢還沒有丟",
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
        "text": "進去。上人啊!我要救人啦!原來日存五毛錢已成為她的習慣，種下生生世世我要救人",
        "type": "lyrics",
        "segments": [
          {
            "text": "進去。上人啊!我要救人啦!原來日存五毛錢已成為她的習慣，種下生生世世我要救人",
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
        "text": "的基因。",
        "type": "lyrics",
        "segments": [
          {
            "text": "的基因。 ",
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
    "id": "sec_48",
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
    "audio": "Music/功德品/1112/[功德品] 開經書_無量義經佛宅來.mp3",
    "videos": [
      {
        "title": "東班",
        "url": "https://youtu.be/p2KSIGqj5VE",
        "videoId": "p2KSIGqj5VE"
      },
      {
        "title": "西班",
        "url": "https://youtu.be/dyWGw6dC88I",
        "videoId": "dyWGw6dC88I"
      }
    ],
    "lines": [
      {
        "text": "前奏(白衣轉自己洲中心、跪；藍衣轉向乙舞台圓心)",
        "type": "lyrics",
        "segments": [
          {
            "text": "前奏",
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
            "text": "(白衣轉自己洲中心、跪；藍衣轉向乙舞台圓心) ",
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
        "text": "去到一切(藍合十面向法師45 度)眾生心(藍出外腳雙手平開頭轉觀眾45 度)",
        "type": "lyrics",
        "segments": [
          {
            "text": "去到一切",
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
            "text": "(藍合十面向法師45 度)",
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
            "text": "眾生心",
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
            "text": "(藍出外腳雙手平開頭轉觀眾45 度)",
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
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
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
      },
      {
        "text": "~~鼓聲7 秒~~(舞台上台灣迅速回五大洲位置後轉向各自演繹第一首功德曲目方向)",
        "type": "lyrics",
        "segments": [
          {
            "text": "~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "鼓聲7 秒~~",
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
            "text": "(舞台上台灣迅速回五大洲位置後轉向各自演繹第一首功德曲目方向)",
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
          }
        ]
      }
    ]
  },
  {
    "id": "sec_49",
    "title": "【黑區變亮區 曲目1：第六功德】甲舞台45 度",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1112"
    ],
    "sessionLabel": "11/12(第1天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品] 03A黑區&亮區_第六功德.mp3",
    "videos": [
      {
        "title": "[功德品] 第六功德‧黑區變亮區",
        "url": "https://www.youtube.com/watch?v=1SAdHJZAVuc&list=PLbIvC-A2H2ko",
        "videoId": "1SAdHJZAVuc"
      }
    ],
    "lines": [
      {
        "text": "第六功德不思議(手語版動作)",
        "type": "lyrics",
        "segments": [
          {
            "text": "第六功德不思議",
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
            "text": "(手語版動作)",
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
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "生死煩惱盡遠(厚離) 出右腳蹲，雙手於雙肩上方準備，「離」起立，雙手舉高扛",
        "type": "lyrics",
        "segments": [
          {
            "text": "生死煩惱盡遠(厚離)",
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
          },
          {
            "text": "出右腳蹲，雙手於雙肩上方準備，「離」起立，雙手舉高扛 ",
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
        "text": "歌曲：馬來西亞(回正面向甲舞台45 度)沙巴斗湖 許多年前 逃難的人來到在這裡",
        "type": "lyrics",
        "segments": [
          {
            "text": "歌曲：馬來西亞",
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
            "text": "(回正面向甲舞台45 度)",
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
            "text": "沙巴斗湖 許多年前 逃難的人來到在這裡 ",
            "isRed": false,
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
    "title": "【曲目2：化城喻故事】 法師45 度",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1112"
    ],
    "sessionLabel": "11/12(第1天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品] 03B黑區&亮區_化城喻故事.mp3",
    "videos": [
      {
        "title": "[功德品] 諸惡道險猶長遠‧黑區變亮區(法海)",
        "url": "https://www.youtube.com/watch?v=y2cdRGMovd0&list=PLbIvC-A2H2ko",
        "videoId": "y2cdRGMovd0"
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
        "text": "當勤精進至寶所 令離(得令)生死入佛慧 小小螢火蟲(藍衣收到胸前)",
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
            "text": "小小螢火蟲",
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
            "text": "(藍衣收到胸前)",
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
        "text": "黑區變亮區(藍衣邊前推邊關燈)",
        "type": "lyrics",
        "segments": [
          {
            "text": " 黑區變亮區",
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
            "text": "(藍衣邊前推邊關燈)",
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
    "id": "sec_51",
    "title": "【約旦 曲目1：第三功德】 第一句觀眾45 度，其餘甲舞台45 度",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1112"
    ],
    "sessionLabel": "11/12(第1天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品] 02A第三功德(約旦).mp3",
    "videos": [
      {
        "title": "[功德品] 第三功德‧約旦+土耳其",
        "url": "https://www.youtube.com/watch?v=0UcRe5beSzw&list=PLbIvC-A2H2ko",
        "videoId": "0UcRe5beSzw"
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
            "text": "雖有生死無畏懼 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "~(回正面向甲舞台45 度)機槍掃射(白衣關燈)/中彈聲~ 人間險難請救救我的孩子寸步艱",
        "type": "lyrics",
        "segments": [
          {
            "text": "~",
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
            "text": "(回正面向甲舞台45 度)",
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
            "text": "機槍掃射",
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
            "text": "(白衣關燈)",
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
            "text": "/中彈聲~ ",
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
            "text": "人間險難",
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
            "text": "請救救我的孩子",
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
            "text": "寸步艱",
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
    "id": "sec_52",
    "title": "【曲目2：啟航】",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1112"
    ],
    "sessionLabel": "11/12(第1天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品] 02B啟航(約旦).mp3",
    "videos": [
      {
        "title": "[功德品] 張起大愛的風帆‧約旦(法海)",
        "url": "https://www.youtube.com/watch?v=MD8To93EY0I&list=PLbIvC-A2H2ko",
        "videoId": "MD8To93EY0I"
      }
    ],
    "lines": [
      {
        "text": "上人：(合十)濟暉啊!不能停歇喔!我願意用我的血來供養難民，我盡形壽、獻身命，哪",
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
            "text": "濟暉啊!不能停歇喔!我願意用我的血來供養難民，我盡形壽、獻身命，哪",
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
        "text": "怕呢剝皮為紙、抽骨為筆、滴血為墨(開綠燈，手放) 慈父憫念尋子還",
        "type": "lyrics",
        "segments": [
          {
            "text": "怕呢剝皮為紙、抽骨為筆、",
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
            "text": "滴血為墨",
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
            "text": "(開綠燈，手放)",
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
            "text": "慈父憫念尋子還 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "前奏：白衣內轉向觀眾45 度、",
        "type": "lyrics",
        "segments": [
          {
            "text": "前奏：白衣內轉向觀眾45 度、 ",
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
        "text": "~~~~張起大愛(藍指引)的風當(帆)初領養的小王子(白內轉回眸)長大上學了",
        "type": "lyrics",
        "segments": [
          {
            "text": "~~~~張起大愛",
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
            "text": "(藍指引)",
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
            "text": "的風",
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
            "text": "當",
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
            "text": "(帆)",
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
            "text": "初領養的",
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
            "text": "(白內轉回眸)",
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
        "text": "耀眼金光燦爛",
        "type": "lyrics",
        "segments": [
          {
            "text": "耀眼金光燦爛",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "(阿拉伯語os 慈濟在世界各地的所作所為 讓我們感受並瞭解)",
        "type": "annotation",
        "segments": [
          {
            "text": "(阿拉伯語os 慈濟在世界各地的所作所為 讓我們感受並瞭解)  ",
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
        "text": "衝破巨浪(阿拉伯語os 慈濟帶給世界的正面理念) 向前航(白衣外手握拳在胸口)",
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
            "text": "(阿拉伯語os 慈濟帶給世界的正面理念) ",
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
            "text": "向",
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
            "text": "前航",
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
            "text": "(白",
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
            "text": "衣外手握拳在胸口)",
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
        "text": "救拔眾生(白衣上半身內轉雙手一起救拔)",
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
            "text": "(白衣上半身內轉雙手一起救拔)",
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
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "救拔眾生  到 彼 岸~~~(關燈)",
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
            "text": "彼 岸",
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
            "text": "~~~",
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
            "text": "(關燈)",
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
    "id": "sec_53",
    "title": "【台灣救災集錦 曲目：第五功德】甲舞台45 度",
    "formationKey": "fiveContinents1",
    "formationLabel": "10-1五大洲 (台灣/開經書)",
    "sessionKeys": [
      "1112"
    ],
    "sessionLabel": "11/12(第1天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品] 05台灣救災集錦_第五功德.mp3",
    "videos": [
      {
        "title": "[功德品] 第五功德‧台灣救災集錦",
        "url": "https://www.youtube.com/watch?v=aNi9Y8qbZp0&list=PLbIvC-A2H2ko",
        "videoId": "aNi9Y8qbZp0"
      }
    ],
    "lines": [
      {
        "text": "第五功德難思議(手語版動作)",
        "type": "lyrics",
        "segments": [
          {
            "text": "第五功德難思議",
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
            "text": "(手語版動作) ",
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
        "text": "持誦書寫刻不(厚離) (白衣:出右腳蹲，手於雙肩準備，「離」起立，雙手舉高扛；藍衣:出右腳雙手上，",
        "type": "lyrics",
        "segments": [
          {
            "text": "持誦書寫刻不(厚離)",
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
            "text": " (白衣:出右腳蹲，手於雙肩準備，「離」起立，雙手舉高扛；藍衣:出右腳雙手上，",
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
        "text": "「離」扛右肩轉向觀眾45 度)",
        "type": "lyrics",
        "segments": [
          {
            "text": "「離」扛右肩轉向觀眾45 度)",
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
        "text": "歌曲：每一場(回正面向甲舞台45 度)災難來臨之前 都有一個平安的家",
        "type": "lyrics",
        "segments": [
          {
            "text": "歌曲：每一場",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "404040"
          },
          {
            "text": "(回正面向甲舞台45 度)",
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
            "text": "災難來臨之前 都有一個平安的家",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "404040"
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
    "id": "sec_54",
    "title": "【曲目：衣珠喻手扎】甲舞台45 度",
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
        "text": "上人：(台灣白衣上舞台、其餘合十)看他們真的很大膽啊，路整條都崩，只是隨便把竹子鋪",
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
            "text": "(台灣白衣上舞台、其餘合十)",
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
            "text": "看他們真的很大膽啊，路整條都崩，只是隨便把竹子鋪",
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
        "text": "著，你看畫面上看到嗎?那是懸崖啊!每一次哪裡有災難，我一定要說，拜託你們(法海",
        "type": "lyrics",
        "segments": [
          {
            "text": "著，你看畫面上看到嗎?那是懸崖啊!每一次哪裡有災難，我一定要說，",
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
            "text": "(法海",
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
        "text": "呈現情境後定格、台灣內圈右腳後轉扛左肩、外圈逆時針雙手90 度給)，等到路可以通了，拜託你們",
        "type": "lyrics",
        "segments": [
          {
            "text": "呈現情境後定格、台灣內圈右腳後轉扛左肩、外圈逆時針雙手90 度給)",
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
            "text": "，等到路可以通了，拜託你們",
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
        "text": "救災的人一定要為我顧平安。諸佛菩薩大悲心(大聲唱)",
        "type": "lyrics",
        "segments": [
          {
            "text": "救災的人一定要為我顧平安。",
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
            "text": "諸佛菩薩大悲心",
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
        "text": "黃誌群老師：哪裡有災難 慈濟人就在那裡",
        "type": "lyrics",
        "segments": [
          {
            "text": "黃誌群老師：哪裡有災難 慈濟人就在那裡 ",
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
        "text": "咚!咚咚~咚咚(回正)走在最前",
        "type": "lyrics",
        "segments": [
          {
            "text": "咚!咚咚~咚咚",
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
            "text": " ",
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
        "text": "咚!咚咚陪到最後(內海藍衣環抱、外海轉向觀眾45 度)",
        "type": "lyrics",
        "segments": [
          {
            "text": "咚!咚咚",
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
            "text": "(內海藍衣環抱、外海轉向觀眾45 度)",
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
        "text": "咚!咚咚台灣愛心總動員(跑) 六度行 樂無窮",
        "type": "lyrics",
        "segments": [
          {
            "text": "咚!咚咚",
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
      },
      {
        "text": "【結束先換圓形，之後聽到咚咚咚時壓縮】",
        "type": "lyrics",
        "segments": [
          {
            "text": "【結束先換圓形，之後聽到咚咚咚時壓縮】 ",
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
        "text": "1.台灣白衣：",
        "type": "lyrics",
        "segments": [
          {
            "text": "1.台灣白衣： ",
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
        "text": "上人開示上舞台(舞台邊的藍衣要壓縮讓他們過)",
        "type": "lyrics",
        "segments": [
          {
            "text": "上人開示上舞台(舞台邊的藍衣要壓縮讓他們過) ",
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
        "text": "拜託你們：內圈白衣退右腳後轉扛左肩；外圈白衣雙手90 度給",
        "type": "lyrics",
        "segments": [
          {
            "text": "拜託你們：內圈白衣退右腳後轉扛左肩；外圈白衣雙手90 度給 ",
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
        "text": "第一次咚咚：回正",
        "type": "lyrics",
        "segments": [
          {
            "text": "第一次咚咚：回正 ",
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
        "text": "第二次咚咚：內圈右後轉回原方向",
        "type": "lyrics",
        "segments": [
          {
            "text": "第二次咚咚：內圈右後轉回原方向 ",
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
        "text": "第三次咚咚 台灣愛心總動「員」：出左腳跑",
        "type": "lyrics",
        "segments": [
          {
            "text": "第三次咚咚 台灣愛心總動「員」：出左腳跑 ",
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
        "text": "六度行：扛右肩",
        "type": "lyrics",
        "segments": [
          {
            "text": "六度行：扛右肩 ",
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
        "text": "樂無：右腳往前交叉步",
        "type": "lyrics",
        "segments": [
          {
            "text": "樂無：右腳往前交叉步 ",
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
        "text": "窮：右腳回，兩腳打直",
        "type": "lyrics",
        "segments": [
          {
            "text": "窮：右腳回，兩腳打直 ",
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
        "text": "2.法海白衣",
        "type": "lyrics",
        "segments": [
          {
            "text": "2.法海白衣 ",
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
        "text": "咚咚 走到最前：起立",
        "type": "lyrics",
        "segments": [
          {
            "text": "咚咚 走到最前：起立 ",
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
        "text": "咚咚 陪到最後：轉向觀眾45 度",
        "type": "lyrics",
        "segments": [
          {
            "text": "咚咚 陪到最後：轉向觀眾45 度 ",
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
        "text": "咚咚 台灣愛心總動「員」：出右腳跑",
        "type": "lyrics",
        "segments": [
          {
            "text": "咚咚 台灣愛心總動「員」：出右腳跑 ",
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
        "text": "六度行：退左腳，扛左肩",
        "type": "lyrics",
        "segments": [
          {
            "text": "六度行：退左腳，扛左肩 ",
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
        "text": "樂無窮：左手持續扛，右手平出，「窮」往上。",
        "type": "lyrics",
        "segments": [
          {
            "text": "樂無窮：左手持續扛，右手平出，「窮」往上。 ",
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
        "text": "3.法海藍衣",
        "type": "lyrics",
        "segments": [
          {
            "text": "3.法海藍衣 ",
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
        "text": "咚咚 走到最前：起立",
        "type": "lyrics",
        "segments": [
          {
            "text": "咚咚 走到最前：起立 ",
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
        "text": "咚咚 陪到最後：內海環抱；外海轉向觀眾45 度",
        "type": "lyrics",
        "segments": [
          {
            "text": "咚咚 陪到最後：內海環抱；外海轉向觀眾45 度 ",
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
        "text": "咚咚 台灣愛心總動「員」：出右腳跑",
        "type": "lyrics",
        "segments": [
          {
            "text": "咚咚 台灣愛心總動「員」：出右腳跑 ",
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
        "text": "六度行：內海回正；外海布施",
        "type": "lyrics",
        "segments": [
          {
            "text": "六度行：內海回正；外海布施 ",
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
        "text": "樂無窮：內海環抱「窮」退左腳弓步；外海雙手慢慢往上",
        "type": "lyrics",
        "segments": [
          {
            "text": "樂無窮：內海環抱「窮」退左腳弓步；外海雙手慢慢往上 ",
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
    "id": "sec_55",
    "title": "【土耳其 曲目：第三功德】第一句觀眾45 度，其餘甲舞台45 度",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1113"
    ],
    "sessionLabel": "11/13(第2天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品] 02A第三功德(約旦).mp3",
    "videos": [
      {
        "title": "[功德品] 第三功德‧約旦+土耳其",
        "url": "https://www.youtube.com/watch?v=0UcRe5beSzw&list=PLGafJimf9RDw",
        "videoId": "0UcRe5beSzw"
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
        "text": "(定格)雖有生死無畏懼",
        "type": "lyrics",
        "segments": [
          {
            "text": "(定格)",
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
      },
      {
        "text": "OS：2011 年敘利亞內戰爆發，超過290 萬難民逃往土耳其~~~",
        "type": "dialogue",
        "segments": [
          {
            "text": "OS：2011 年敘利亞內戰爆發，超過290 萬難民逃往土耳其~~~ ",
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
        "text": "古蘭經最後一句轉第八功德面向",
        "type": "lyrics",
        "segments": [
          {
            "text": "古蘭經最後一句轉第八功德面向 ",
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
    "id": "sec_56",
    "title": "【莫三比克 曲目1：第八功德】依不同區塊角度不同(不開燈)",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1113"
    ],
    "sessionLabel": "11/13(第2天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品] 04A莫三比克_第八功德.mp3",
    "videos": [
      {
        "title": "[功德品] 第八功德‧非洲",
        "url": "https://www.youtube.com/watch?v=vZU-rtMuEoE&list=PLGafJimf9RDw",
        "videoId": "vZU-rtMuEoE"
      }
    ],
    "lines": [
      {
        "text": "第八功德不思(厚議)",
        "type": "lyrics",
        "segments": [
          {
            "text": "第八功德不思(厚議)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
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
        "text": "信心既發令勇猛",
        "type": "lyrics",
        "segments": [
          {
            "text": "信心既發令勇猛  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "守之不動令堅定",
        "type": "lyrics",
        "segments": [
          {
            "text": "守之不動令堅定 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "~伊代風災演完~",
        "type": "lyrics",
        "segments": [
          {
            "text": "~伊代風災演完~",
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
            "isBoxed": false,
            "isBold": true,
            "isItalic": false,
            "color": "000000"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_57",
    "title": "【曲目2：髻珠喻經文】法師45 度",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1113"
    ],
    "sessionLabel": "11/13(第2天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品] 04B莫三比克_髻珠喻經文.mp3",
    "videos": [
      {
        "title": "11/13 [功德品] 身口意念應守護(南非‧法海)",
        "url": "https://www.youtube.com/watch?v=htAI4IbqJtE&list=PLGafJimf9RDw",
        "videoId": "htAI4IbqJtE"
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
        "text": "譬如髻珠放光明(不歡呼)",
        "type": "lyrics",
        "segments": [
          {
            "text": "譬如髻珠放光明",
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
            "text": "(不歡呼)",
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
        "text": "上人：(面向甲舞台45 度合十持花)我真的很開心!看到了這一群離我這麼遙遠地球的那一邊",
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
            "text": "(面向甲舞台45 度合十持花)",
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
            "text": "我真的很開心!看到了這一群離我這麼遙遠地球的那一邊",
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
        "text": "啦，整個人的膚色都是黑的，現在粒粒都是發光的、師父的黑珍珠(關燈)",
        "type": "lyrics",
        "segments": [
          {
            "text": "啦，整個人的膚色都是黑的，現在粒粒都是發光的、師父的黑珍珠",
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
            "text": "(關燈)",
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
    "id": "sec_58",
    "title": "【印尼 曲目1：第九功德】甲舞台45 度",
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
        "url": "https://www.youtube.com/watch?v=CvAlUYsudqk&list=PLGafJimf9RDw",
        "videoId": "CvAlUYsudqk"
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
        "text": "願力得登善慧地OS：1997 年亞洲金融風暴席捲印尼，企業倒閉，",
        "type": "lyrics",
        "segments": [
          {
            "text": "願力得登善慧地",
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
            "text": "OS：1997 年亞洲金融風暴席捲印尼，企業倒閉，",
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
        "text": "物價飆漲，失業人口激增，人民生活陷入困境，要求改革的聲浪愈來愈高",
        "type": "lyrics",
        "segments": [
          {
            "text": "物價飆漲，失業人口激增，人民生活陷入困境，要求改革的聲浪愈來愈高",
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
    "id": "sec_59",
    "title": "【曲目2：化城喻手扎】法師45 度",
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
        "url": "https://www.youtube.com/watch?v=xmX4NrnNqJA&list=PLGafJimf9RDw",
        "videoId": "xmX4NrnNqJA"
      }
    ],
    "lines": [
      {
        "text": "郭再源師兄：上人已經把法華經(轉法師45 度，藍衣開綠燈，白衣不開燈)舖在地上，讓我們",
        "type": "lyrics",
        "segments": [
          {
            "text": "郭再源師兄：",
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
            "text": "上人已經把法華經",
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
            "text": "(轉法師45 度，藍衣開綠燈，白衣不開燈)",
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
            "text": "舖在地上，讓我們",
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
        "text": "慈濟人做就對了!",
        "type": "lyrics",
        "segments": [
          {
            "text": "慈濟人做就對了!",
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
        "text": "菩薩慈悲(藍衣進「右腳」抬頭抱胸) 愍眾生藍衣一樣退左腳",
        "type": "lyrics",
        "segments": [
          {
            "text": "菩薩慈悲",
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
            "text": "(藍衣進「右腳」抬頭抱胸) ",
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
            "text": "愍眾生",
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
            "text": "藍衣一樣退左腳 ",
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
        "text": "廣行善法饒有情(轉向甲舞台45 度）",
        "type": "lyrics",
        "segments": [
          {
            "text": "廣行善法饒有情",
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
            "text": "(轉向甲舞台45 度）",
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
        "text": "因成果熟(藍衣轉向觀眾45 度）得解脫 求法立誓(白衣轉向法師45 度）宏願深",
        "type": "lyrics",
        "segments": [
          {
            "text": "因成果熟",
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
            "text": "(藍衣轉向觀眾45 度）",
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
            "text": "得解脫 求法立誓",
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
            "text": "(白衣轉向法師45 度）",
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
            "text": "宏願深  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "任重(藍衣收）道遠(藍衣轉向法師45 度）續法脈(藍衣單手蓋向甲舞台45 度）",
        "type": "lyrics",
        "segments": [
          {
            "text": "任重",
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
            "text": "(藍衣收）",
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
            "text": "道遠",
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
            "text": "(藍衣轉向法師45 度）",
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
            "text": "續法脈",
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
            "text": "(藍衣單手蓋向甲舞台45 度）",
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
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "願度眾生(藍衣面向甲舞台45 度划船）~~出苦輪",
        "type": "lyrics",
        "segments": [
          {
            "text": "願度眾生",
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
            "text": "(藍衣面向甲舞台45 度划船）",
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
            "text": "~~出苦輪  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "安邦定國(白衣轉向甲45 度)在印尼白衣外手外腳出（手掌向上）",
        "type": "lyrics",
        "segments": [
          {
            "text": "安邦定國",
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
            "text": "(白衣轉向甲45 度)",
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
            "text": "在印",
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
            "text": "尼",
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
            "text": "白衣外手外腳出（手掌向上）",
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
        "text": "【結束先換圓形，之後聽到咚咚咚時壓縮】",
        "type": "lyrics",
        "segments": [
          {
            "text": "【結束先換圓形，之後聽到咚咚咚時壓縮】 ",
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
      }
    ]
  },
  {
    "id": "sec_60",
    "title": "【緬甸 米撲滿 曲目：第二功德】甲舞台45 度",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1114"
    ],
    "sessionLabel": "11/14(第3天)專屬曲目",
    "audio": "Music/功德品/1114/11_14 [功德品] 01第二功德(緬甸米撲滿).mp3",
    "videos": [
      {
        "title": "11/14 [功德品] 第二功德 緬甸米撲滿",
        "url": "https://www.youtube.com/watch?v=yeEd_aeAv5k&list=PLGRfIGuFCUAQ",
        "videoId": "yeEd_aeAv5k"
      }
    ],
    "lines": [
      {
        "text": "os 五毛錢的力量 來到緬甸 八分飽 兩分救人好 我沒有錢 但我也可以救人",
        "type": "os",
        "segments": [
          {
            "text": "os 五毛錢的",
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
            "text": "力量 來到緬甸",
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
            "text": "那我也可以",
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
            "text": "(演員)",
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
            "text": " 我",
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
            "text": "也可以",
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
        "text": "日存一把米",
        "type": "lyrics",
        "segments": [
          {
            "text": "日存一把米  ",
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
        "text": "日存一把米 一起來救人(邊大聲說邊收手收腳)",
        "type": "lyrics",
        "segments": [
          {
            "text": "日存一把米 一起",
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
            "text": "來救人",
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
            "text": "(邊大聲說邊收手收腳)",
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
            "isBoxed": false,
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
            "text": "(收手收腳)",
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
        "text": "一把米的精神 已經普及全球慈濟人的心中 一生無量(大聲說；白衣坐跪)",
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
            "text": "(大聲說；白衣坐跪)",
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
        "text": "第二功德難思(厚議) (藍衣雙手倒米) 一法能生百千(厚義)",
        "type": "lyrics",
        "segments": [
          {
            "text": "第二功德難思(厚議)",
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
            "text": " (藍衣雙手倒米)",
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
            "text": " 一法能生百千(厚義) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "百千義中復又(厚生)  如是輾轉(藍衣雙手舉高垂直朝天掌心朝後)無量義(藍衣兩手朝前90 度鞠躬)",
        "type": "lyrics",
        "segments": [
          {
            "text": "百千義中復又(厚生)  如是輾轉",
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
            "text": "(藍衣雙手舉高垂直朝天掌心朝後)",
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
            "text": "無量義",
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
            "text": "(藍衣兩手朝前90 度鞠躬)",
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
        "text": "一理能徹萬里(厚徹)  一法能攝萬法(厚攝)",
        "type": "lyrics",
        "segments": [
          {
            "text": "一理能徹萬里(厚徹)  一法能攝萬法(厚攝) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "一言半句勤誦(厚習)  通達無量微妙(厚理)",
        "type": "lyrics",
        "segments": [
          {
            "text": "一言半句勤誦(厚習)  通達無量微妙(厚理) ",
            "isRed": false,
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
    "title": "【八八風災 曲目：第七功德】法師45 度",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1114"
    ],
    "sessionLabel": "11/14(第3天)專屬曲目",
    "audio": "Music/功德品/1114/11_14 [功德品] 02第七功德(八八風災).mp3",
    "videos": [
      {
        "title": "[功德品] 第七功德‧莫拉克風災",
        "url": "https://www.youtube.com/watch?v=mjPNSTARlmY&list=PLGRfIGuFCUAQ",
        "videoId": "mjPNSTARlmY"
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
            "text": "六波羅(厚蜜)顯神(厚奇) 愛灑人間大悲(厚意)   ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "令諸眾苦(藍衣雙手舉高垂直朝天掌心朝後)皆得離(藍衣兩手朝前90 度鞠躬)",
        "type": "lyrics",
        "segments": [
          {
            "text": "令諸眾苦",
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
            "text": "(藍衣雙手舉高垂直朝天掌心朝後)",
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
            "text": "皆得離",
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
            "text": "(藍衣兩手朝前90 度鞠躬)",
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
    "id": "sec_62",
    "title": "【曲目：十在心路】甲舞台45 度",
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
        "text": "~~狂風暴雨聲~~~  路基流掉 路基沒有了~~ 啊啊~~~~~",
        "type": "lyrics",
        "segments": [
          {
            "text": "~~狂風暴雨聲~~~",
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
            "text": "  路基流掉 路基沒有了~~ 啊啊~~~~~ ",
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
        "text": "在苦難中長養慈悲一定要在平地蓋永久屋，山林才能養息(在變數中考驗智慧)，我知道你們很多",
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
            "text": "，我知道你們很多",
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
        "text": "人是租房子(在艱難中激發韌力)，我也知道你們很多人是磨手皮做粗工的(在繁瑣中學習耐性)，但",
        "type": "lyrics",
        "segments": [
          {
            "text": "人是租房子",
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
            "text": "，但",
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
        "text": "是，這一次慈濟想要蓋的永久屋需要很多錢(在複雜中欣賞優點)，你們~~ 我願意! (在理想中追",
        "type": "lyrics",
        "segments": [
          {
            "text": "是，這一次慈濟想要蓋的永久屋需要很多錢",
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
            "text": "，你們~~ ",
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
            "text": " ",
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
            "text": "(在理想中追",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "求進步) 點滴會聚大愛與情誼 讓人間沒有苦痛與悲泣 期待在農曆過年前500 多戶都能入住永久屋(白",
        "type": "lyrics",
        "segments": [
          {
            "text": "求進步) 點滴會聚大愛與情誼 讓人間沒有苦痛與悲泣 ",
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
            "text": "期待在農曆過年前500 多戶都能入住永久屋",
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
            "text": "(白",
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
        "text": "衣)搶晴天! (藍衣)戰雨天!八十八天(回正)完成永久屋，贈送八十八件(白衣雙手與肩同寬白衣",
        "type": "lyrics",
        "segments": [
          {
            "text": "衣)",
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
            "text": "八十八天",
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
            "text": "完成永",
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
            "text": "久屋，贈送八十八件",
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
            "text": "(白衣雙手與肩同寬白衣",
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
        "text": "出右腳，雙手與肩同寬舉高給。藍90 度送禮)入厝禮，在大愛園區(回正)更要有教堂和學校，讓",
        "type": "lyrics",
        "segments": [
          {
            "text": "出右腳，雙手與肩同寬舉高給。藍90 度送禮)",
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
            "text": "入厝禮，",
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
            "isBoxed": true,
            "isBold": false,
            "isItalic": false,
            "color": "196B24"
          },
          {
            "text": "更要",
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
            "text": "有教堂和學校，讓",
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
        "text": "他們世世代代都能夠安居樂業。感恩 上人為我們興建永久屋，住在這邊比以前心更",
        "type": "lyrics",
        "segments": [
          {
            "text": "他們世世代代都能夠安居樂業。感恩 上人為我們興建永久屋，住在這邊比以前心更",
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
        "text": "安，以前山是光禿禿的寸草不生，上人說要讓山林養息，我就種了好幾百棵台灣櫸",
        "type": "lyrics",
        "segments": [
          {
            "text": "安，以前山是光禿禿的寸草不生，上人說要讓山林養息，我就種了好幾百棵台灣櫸",
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
        "text": "樹，16 年後已經成為一大片樹林了，現在山都不會崩塌了，山林養息了!世代可以安",
        "type": "lyrics",
        "segments": [
          {
            "text": "樹，16 年後已經成為一大片樹林了，現在山都不會崩塌了，山林養息了!世代可以安",
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
        "text": "居樂業了!大地恢復生機，家就安全了! 傳頌生命(全體轉向陸地中心)的尊貴(白衣合十出右弓腳",
        "type": "lyrics",
        "segments": [
          {
            "text": "居樂業了!大地恢復生機，家就安全了!",
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
            "text": "(全體轉向陸地中心",
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
            "text": "的尊貴",
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
            "text": "(白衣合十出右弓腳",
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
        "text": "平推；藍衣雙手平舉向上)與傳奇(白衣前腳伸直舉高；藍衣出右腳不弓步雙手環抱)",
        "type": "lyrics",
        "segments": [
          {
            "text": "平推；藍衣雙手平舉向上",
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
            "text": "與傳奇",
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
            "text": "(白衣前腳伸直舉高；藍衣出右腳不弓步雙手環抱) ",
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
        "text": "咚咚~ 讓山林養息 (白衣雙手交疊蓋；藍衣定格)",
        "type": "lyrics",
        "segments": [
          {
            "text": "咚咚~ ",
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
            "text": "(白衣雙手交疊蓋；藍衣定格) ",
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
        "text": "咚咚~ 世代 安居 樂業(白衣分三波(高、中、低)雙手舉高開花；藍衣「樂業」收腳雙手上舉開花)",
        "type": "lyrics",
        "segments": [
          {
            "text": "咚咚~ ",
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
            "text": "世代",
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
            "text": "安居",
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
            "text": "樂業",
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
            "text": "(白衣分三波(高、中、低)雙手舉高開花；藍衣「樂業」收腳雙手上舉開花)",
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
    "id": "sec_63",
    "title": "【泰北 曲目：第四功德】乙舞台圓心",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1114"
    ],
    "sessionLabel": "11/14(第3天)專屬曲目",
    "audio": "Music/功德品/1114/11_14 [功德品] 03第四功德(泰北).mp3",
    "videos": [
      {
        "title": "[功德品] 第四功德‧泰北",
        "url": "https://www.youtube.com/watch?v=_iO0oVSMR8s&list=PLGRfIGuFCUAQ",
        "videoId": "_iO0oVSMR8s"
      }
    ],
    "lines": [
      {
        "text": "【優人劇團演出】甲舞台45 度",
        "type": "lyrics",
        "segments": [
          {
            "text": "【優人劇團演出】",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": true,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "甲舞台45 度 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "BF4E14"
          }
        ]
      },
      {
        "text": "【泰北師生民族舞演出】os 泰國小孩舞蹈 轉向乙舞台圓心，開綠燈",
        "type": "lyrics",
        "segments": [
          {
            "text": "【泰北師生民族舞演出】",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": true,
            "isItalic": false,
            "color": "000000"
          },
          {
            "text": "os 泰國小孩舞蹈 ",
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
            "text": "轉向乙舞台圓心，開綠燈",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "BF4E14"
          },
          {
            "text": " ",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": true,
            "isItalic": false,
            "color": "000000"
          }
        ]
      },
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
        "text": "諸佛護念於一身(雙手環抱)",
        "type": "lyrics",
        "segments": [
          {
            "text": "諸佛護念",
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
            "text": "於一身",
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
            "text": "(雙手環抱)",
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
        "text": "雖未自度能度他(東班藍出左腳往左傾頭看右上、東班白出右腳往右傾頭看左上、西班藍出右腳往右傾頭",
        "type": "lyrics",
        "segments": [
          {
            "text": "雖未自度能度他",
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
            "text": "(東班藍出左腳往左傾頭看右上、東班白出右腳往右傾頭看左上、西班藍出右腳往右傾頭",
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
        "text": "看左上、西班白出左腳往左傾頭看右上)",
        "type": "lyrics",
        "segments": [
          {
            "text": "看左上、西班白出左腳往左傾頭看右上) ",
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
    "id": "sec_64",
    "title": "【辛巴威 曲目1：第八功德】依不同區塊角度不同(不開燈)",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1114"
    ],
    "sessionLabel": "11/14(第3天)專屬曲目",
    "audio": "Music/功德品/1114/11_14 [功德品] 04A第八功德(辛巴威).mp3",
    "videos": [
      {
        "title": "[功德品] 第八功德‧非洲",
        "url": "https://www.youtube.com/watch?v=vZU-rtMuEoE&list=PLGRfIGuFCUAQ",
        "videoId": "vZU-rtMuEoE"
      }
    ],
    "lines": [
      {
        "text": "第八功德不思(厚議)",
        "type": "lyrics",
        "segments": [
          {
            "text": "第八功德不思(厚議)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
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
        "text": "東二白衣專屬動作",
        "type": "lyrics",
        "segments": [
          {
            "text": "東二白衣專屬動作 ",
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
        "text": "第八功德：合十舉高",
        "type": "lyrics",
        "segments": [
          {
            "text": "第八功德：合十舉高 ",
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
        "text": "不思義：開右手花",
        "type": "lyrics",
        "segments": [
          {
            "text": "不思義：開右手花 ",
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
        "text": "種種：雙手大白牛往右胸口前拉",
        "type": "lyrics",
        "segments": [
          {
            "text": "種種：雙手大白牛往右胸口前拉 ",
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
        "text": "方便令「發心」：右手往中心用力往上",
        "type": "lyrics",
        "segments": [
          {
            "text": "方便令「發心」：右手往中心用力往上 ",
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
        "text": "os(轉甲45)媽媽!我的頭好癢。但是家裡沒有水。老師說，頭髮剪短才能去上課。要兩",
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
            "text": "(轉甲45)",
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
            "text": "媽媽!我的頭好癢。但是家裡沒有水。老師說，頭髮剪短才能去上課。要兩",
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
        "text": "塊美金，家裡哪有錢! 一百兆在這裡，只能買兩條香蕉或三個雞蛋，通貨膨脹、缺",
        "type": "lyrics",
        "segments": [
          {
            "text": "塊美金，家裡哪有錢! 一百兆在這裡，只能買兩條香蕉或三個雞蛋，通貨膨脹、缺",
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
        "text": "水，再加上飢荒，已經形成惡性循環。我們一起來幫助這些孩子吧!我願意! 電動工具",
        "type": "lyrics",
        "segments": [
          {
            "text": "水，再加上飢荒，已經形成惡性循環。我們一起來幫助這些孩子吧!我願意! ",
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
            "text": "電動工具",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "來剃頭 白癬 還要抹藥來治療 噴藥 前往村莊與學校 剃刀壞了 用愛付出如同胞 我們理髮超過十",
        "type": "lyrics",
        "segments": [
          {
            "text": "來剃頭",
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
            "text": " 白癬 ",
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
            "text": "還要抹藥來治療",
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
            "text": " 噴藥 ",
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
            "text": "前往村莊與學校",
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
            "text": " 剃刀壞了 ",
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
            "text": "用愛付出如同胞",
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
            "text": " 我們理髮超過十",
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
        "text": "萬人了，這些孩子都可以去學校了。還不夠，辛巴威的失業率很高，許多家庭養不起",
        "type": "lyrics",
        "segments": [
          {
            "text": "萬人了，這些孩子都可以去學校了。還不夠，辛巴威的失業率很高，許多家庭養不起",
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
        "text": "小孩，這樣怎麼上學，所以我們還要熱食供應。我願意!我們有飯吃了，可以上學",
        "type": "lyrics",
        "segments": [
          {
            "text": "小孩，這樣怎麼上學，所以我們還要熱食供應。我願意!我們有飯吃了，可以上學",
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
        "text": "了。是上課的鐘聲，去上課了。等一下，學校沒有水，沒辦法上課，大家都先去扛水",
        "type": "lyrics",
        "segments": [
          {
            "text": "了。是上課的鐘聲，去上課了。等一下，學校沒有水，沒辦法上課，大家都先去扛水",
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
        "text": "吧!是，水來了，水來了，大家快拿回去學校用。啊還有動物的排泄物在裏面，水這",
        "type": "lyrics",
        "segments": [
          {
            "text": "吧!是，水來了，水來了，大家快拿回去學校用。啊還有動物的排泄物在裏面，水這",
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
        "text": "麼髒，是要怎麼喝? 簡單啦，用兩塊布來過濾，再煮一煮就可以了。難怪霍亂常常發",
        "type": "lyrics",
        "segments": [
          {
            "text": "麼髒，是要怎麼喝? 簡單啦，用兩塊布來過濾，再煮一煮就可以了。難怪霍亂常常發",
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
        "text": "生，奪走無數人的性命，他們每天都和動物搶水，偏偏路上有蛇、獅群和猛獸，水中",
        "type": "lyrics",
        "segments": [
          {
            "text": "生，奪走無數人的性命，他們每天都和動物搶水，偏偏路上有蛇、獅群和猛獸，水中",
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
        "text": "又有鱷魚會傷人。啊!有人被蛇咬到了!沒水會死，取水也會死，喝了黑水早晚也會死",
        "type": "lyrics",
        "segments": [
          {
            "text": "又有鱷魚會傷人。啊!有人被蛇咬到了!沒水會死，取水也會死，喝了黑水早晚也會死 ",
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
        "text": "這裡的平均壽命只有37 歲。我，我發願要做辛巴威的「掘井人」，讓大家都能活到",
        "type": "lyrics",
        "segments": [
          {
            "text": "這裡的平均壽命只有37 歲。我，我發願要做辛巴威的「掘井人」，讓大家都能活到",
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
        "text": "60 歲。我願意! 生命工程，啟航! 專業團隊責任重 掘井是我們的專項 清涼甘露滿水桶 一年能救",
        "type": "lyrics",
        "segments": [
          {
            "text": "60 歲。我願意! 生命工程，啟航! ",
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
            "text": "專業團隊責任重 掘井是我們的專項 清涼甘露滿水桶 一年能救",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "幾千人 水來了!水來了!我們有水了!我們總共挖了4,715 口井耶(改開黃燈)，提供給800",
        "type": "lyrics",
        "segments": [
          {
            "text": "幾千人",
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
            "text": " 水來了!水來了!我們有水了!",
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
            "text": "我們總共挖了4,715 口井耶",
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
            "text": "(改開黃燈)",
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
            "text": "提供給800",
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
        "text": "萬人乾淨又安全的水源(合掌轉向陸地中心)",
        "type": "lyrics",
        "segments": [
          {
            "text": "萬人乾淨又安全的水源",
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
            "text": "(合掌轉向陸地中心)",
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
    "id": "sec_65",
    "title": "【曲目3：生生世世都在菩提中】陸地中心",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1114"
    ],
    "sessionLabel": "11/14(第3天)專屬曲目",
    "audio": "Music/功德品/1114/11_14 [功德品] 05生生世世都在菩提中(辛巴威).mp3",
    "videos": [
      {
        "title": "[功德品] 生生世世都在菩提中(辛巴威)",
        "url": "https://www.youtube.com/watch?v=cSjyuO_KRp8&list=PLGRfIGuFCUAQ",
        "videoId": "cSjyuO_KRp8"
      }
    ],
    "lines": [
      {
        "text": "(大聲唱)立地藏王菩薩的願 但願眾生得離苦就算眼睛失明，腳步也不能停(不唱) (發觀世音",
        "type": "lyrics",
        "segments": [
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
            "text": "立地藏王菩薩的願 但願眾生得離苦",
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
            "text": "就算眼",
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
            "text": "睛失明",
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
            "text": "，腳步也不能",
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
            "text": "停",
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
            "text": "(不唱)",
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
            "text": " (發觀世音",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "菩薩的心) 但願愛心廣大無 我染疫了，恐怕過不了這一關(邊)",
        "type": "lyrics",
        "segments": [
          {
            "text": "菩薩的",
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
            "text": "心) ",
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
            "text": "但願愛心廣大無 ",
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
            "text": "我染疫了",
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
            "text": "，恐怕過不了",
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
            "text": "這一關",
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
            "text": "(邊)",
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
            "text": "   ",
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
        "text": "明天發放記得叫醒我(發心立願)  師兄(生生世世都在菩提中)",
        "type": "lyrics",
        "segments": [
          {
            "text": "明天",
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
            "text": "發放",
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
            "text": "記得叫醒我",
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
            "text": "(發心立",
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
            "text": "願)  ",
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
            "text": "師兄",
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
            "text": "(生生世世都在菩提中)",
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
        "text": "我真心發願我的骨灰要撒在辛巴威這片土地上(立願發心)",
        "type": "lyrics",
        "segments": [
          {
            "text": "我真心發願我的骨灰要撒在辛巴威這片土地上",
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
            "text": "(立願發心)",
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
        "text": "五生五世都要出生在這裡 (但願生生世世都在菩提中)",
        "type": "lyrics",
        "segments": [
          {
            "text": "五生五世都要出生在這裡",
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
            "text": " (但願生生世世都在菩提中)",
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
        "text": "成為一位有力量的辛巴威人(立願)，翻轉世代的貧窮 (發心)",
        "type": "lyrics",
        "segments": [
          {
            "text": "成為",
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
            "text": "一位有力量的辛巴威人",
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
            "text": "(立願)",
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
            "text": "，翻轉世代的貧窮",
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
            "text": " (發心) ",
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
        "text": "(大聲唱)但願生生世世都在菩提中",
        "type": "lyrics",
        "segments": [
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
            "text": "但願生生世世都在菩提中  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "(大聲)生生世世 守護辛巴威(收、轉法師45、開綠燈放口袋)",
        "type": "lyrics",
        "segments": [
          {
            "text": "(大聲)",
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
            "text": "生生世世 守護辛巴",
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
            "text": "威",
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
            "text": "(收、轉法師45、開綠燈放口袋)",
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
    "id": "sec_66",
    "title": "【曲目2：髻珠喻經文】法師45 度",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1114"
    ],
    "sessionLabel": "11/14(第3天)專屬曲目",
    "audio": "Music/功德品/1114/11_14 [功德品] 04B髻珠喻經文(辛巴威).mp3",
    "videos": [
      {
        "title": "[功德品] 身口意念應守護(辛巴威)",
        "url": "https://www.youtube.com/watch?v=hfwvSIDG0EE&list=PLGRfIGuFCUAQ",
        "videoId": "hfwvSIDG0EE"
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
      },
      {
        "text": "上人：(面向甲舞台45 度合十持花)師父很感動啊!你發大心立大願如地藏菩薩走入了地獄，",
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
            "text": "(面向甲舞台45 度合十持花)",
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
            "text": "師父很感動啊!你發大心立大願如地藏菩薩走入了地獄，",
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
        "text": "為的是要救苦難眾生【結束先換圓形，之後聽到咚咚咚時壓縮】",
        "type": "lyrics",
        "segments": [
          {
            "text": "為的是要救苦難眾生",
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
            "text": "【結束先換圓形，之後聽到咚咚咚時壓縮】 ",
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
      }
    ]
  },
  {
    "id": "sec_67",
    "title": "【921 曲目1：第九功德】乙舞台圓心",
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
        "url": "https://www.youtube.com/watch?v=hUpDtkqTQNM&list=PLcdQvmBAiLJ0",
        "videoId": "hUpDtkqTQNM"
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
        "text": "願力得登(東一左腳、東二右腳、西一右腳、西二左腳)善慧地",
        "type": "lyrics",
        "segments": [
          {
            "text": "願力",
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
            "text": "得登",
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
            "text": "(東一左腳、東二右腳、西一右腳、西二左腳)",
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
            "text": "善慧地   ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "辯才無礙(台灣蓋；白衣退外腳扛外肩；藍衣出同腳往乙舞台弓步)      得清淨(白衣往台灣拋)",
        "type": "lyrics",
        "segments": [
          {
            "text": "辯才無礙",
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
            "text": "(台灣蓋；白衣退外腳扛外肩；藍衣出同腳往乙舞台弓步)      ",
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
            "text": "得清",
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
            "text": "淨",
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
            "text": "(白衣往台灣拋)",
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
        "text": "OS：上人(藍衣收腳變房子) 臺北的東星大樓倒塌了(台灣的北部中部倒；白衣直蹲、雙手在頭上撐",
        "type": "dialogue",
        "segments": [
          {
            "text": "OS：上人",
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
            "text": "(藍衣收腳變房子)",
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
            "text": " 臺北的東星大樓",
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
            "text": "倒塌了",
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
            "text": "(台灣的北部中部倒；白衣直蹲、雙手在頭上撐",
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
        "text": "住動作；藍衣出同腳往乙舞台倒、手不交疊)，上人 新莊博士的家也被震垮了(~~音效大家復位、轉",
        "type": "lyrics",
        "segments": [
          {
            "text": "住動作；藍衣出同腳往乙舞台倒、手不交疊)",
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
            "text": "，上人 新莊博士的家也被震垮了",
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
            "text": "(~~音效大家復位、轉",
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
        "text": "面向甲舞台45 度)，地震死傷很多，需要屍袋500 個，需要2000 個屍袋，屍袋追加到",
        "type": "lyrics",
        "segments": [
          {
            "text": "面向甲舞台45 度)",
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
            "text": "，地震死傷很多，需要屍袋500 個，需要2000 個屍袋，屍袋追加到",
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
        "text": "2500 個~~~~我們要當成自己的家來打造，每戶都要有12 坪的空間，才能讓大家有",
        "type": "lyrics",
        "segments": [
          {
            "text": "2500 個~~~~我們要當成自己的家來打造，每戶都要有12 坪的空間，才能讓大家有",
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
        "text": "「家的歸屬感」並且住得舒服，有尊嚴! 寒冬將至，我要為你們(轉面向法師45 度)蓋一",
        "type": "lyrics",
        "segments": [
          {
            "text": "「家的歸屬感」並且住得舒服，有尊嚴! 寒冬將至，",
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
            "text": "我要為你們",
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
            "text": "(轉面向法師45 度)",
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
            "text": "蓋一",
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
        "text": "個安身安心的家",
        "type": "lyrics",
        "segments": [
          {
            "text": "個安身安心的家",
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
    "id": "sec_68",
    "title": "【曲目2：化城喻故事】法師45 度",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1115"
    ],
    "sessionLabel": "11/15(第4天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品] 03B黑區&亮區_化城喻故事.mp3",
    "videos": [
      {
        "title": "[化城喻故事] 921地湧菩薩",
        "url": "https://www.youtube.com/watch?v=06ylKzGmhdQ",
        "videoId": "06ylKzGmhdQ"
      }
    ],
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
        "text": "若入是城可止(厚息) 希望工程",
        "type": "lyrics",
        "segments": [
          {
            "text": "若入是城可止(厚息) ",
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
        "text": "疲極之眾心歡(厚喜)",
        "type": "lyrics",
        "segments": [
          {
            "text": "疲極之眾心歡(厚喜)  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
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
        "text": "讚歎頓生已度(厚想) 信願行",
        "type": "lyrics",
        "segments": [
          {
            "text": "讚歎頓生已度(厚想) ",
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
        "text": "悅樂更生安隱(厚想)(結束轉面向甲舞台45 度)",
        "type": "lyrics",
        "segments": [
          {
            "text": "悅樂更生安隱(厚想)",
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
            "text": "(結束轉面向甲舞台45 度)",
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
        "text": "在帳棚內上課，孩子們 哪能安心讀書呢?懇請 上人也幫我們重建好嗎?",
        "type": "lyrics",
        "segments": [
          {
            "text": "在帳棚內上課，孩子們 哪能安心讀書呢?懇請 上人也幫我們重建好嗎? ",
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
        "text": "我要蓋一個千年不倒的學校! 師父 你勾那麼多間喔!啊你都勾大間的",
        "type": "lyrics",
        "segments": [
          {
            "text": "我要蓋一個千年不倒的學校! 師父 你勾那麼多間喔!啊你都勾大間的 ",
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
        "text": "學校是孩子的希望(全體開燈轉法師45 度)，教育不能等，慈濟必須承擔下來",
        "type": "lyrics",
        "segments": [
          {
            "text": "學校是孩子的希望",
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
            "text": "(全體開燈轉法師45 度)",
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
            "text": "，教育不能等，慈濟必須承擔下來",
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
    "id": "sec_69",
    "title": "【曲目3：化城喻故事】法師45 度",
    "formationKey": "fiveContinents2",
    "formationLabel": "10-2五大洲 (樂生/富中之富)",
    "sessionKeys": [
      "1115"
    ],
    "sessionLabel": "11/15(第4天)專屬曲目",
    "audio": "Music/功德品/1112/11_12 [功德品] 03B黑區&亮區_化城喻故事.mp3",
    "videos": [
      {
        "title": "[化城喻故事] 921地湧菩薩",
        "url": "https://www.youtube.com/watch?v=06ylKzGmhdQ",
        "videoId": "06ylKzGmhdQ"
      }
    ],
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
        "text": "令離(得令)生死入佛慧(結束轉面向甲舞台45 度)",
        "type": "lyrics",
        "segments": [
          {
            "text": "令離(得令)生死入佛慧",
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
            "text": "(結束轉面向甲舞台45 度)",
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
        "text": "師父!為什麼我們沒有錢?還要重建51 所希望工程呢?",
        "type": "lyrics",
        "segments": [
          {
            "text": "師父!為什麼我們沒有錢?還要重建51 所希望工程呢? ",
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
        "text": "我不知道錢在哪裡，但我知道 愛 在哪裡，我相信 人人有愛~~~~~~~",
        "type": "lyrics",
        "segments": [
          {
            "text": "我不知道錢在哪裡，但我知道 愛 在哪裡，我相信 人人有愛~~~~~~~ ",
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
        "text": "我們援建學校，是用蓋15 層大樓的鋼筋量來建的。2018 年2 月初花蓮強震，44 所學",
        "type": "lyrics",
        "segments": [
          {
            "text": "我們援建學校，是用蓋15 層大樓的鋼筋量來建的。2018 年2 月初花蓮強震，44 所學",
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
        "text": "校損壞，到了2024 年0403 花蓮大地震，受災學校更攀升到了102 所。哇!還好有 減",
        "type": "lyrics",
        "segments": [
          {
            "text": "校損壞，到了2024 年0403 花蓮大地震，受災學校更攀升到了102 所。哇!還好有 減",
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
        "text": "災希望工程，你看你看，國風國中的師生在這裡，非常安心地上課，嘿嘿 你看，不",
        "type": "lyrics",
        "segments": [
          {
            "text": "災希望工程，你看你看，國風國中的師生在這裡，非常安心地上課，嘿嘿 你看，不",
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
        "text": "只國風國中，這裡的避難收容中心，那也是減災希望工程蓋的耶，是化仁國中，對對",
        "type": "lyrics",
        "segments": [
          {
            "text": "只國風國中，這裡的避難收容中心，那也是減災希望工程蓋的耶，是化仁國中，對對",
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
        "text": "對，還有 還有啊，你看中原國小，這次也成為發放應急金(開綠燈、白衣拿燈、藍衣轉向觀",
        "type": "lyrics",
        "segments": [
          {
            "text": "對，還有 還有啊，你看中原國小，這次也成為發放",
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
            "text": "應急金",
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
            "text": "(開綠燈、白衣拿燈、藍衣轉向觀",
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
        "text": "眾、白衣背向陸地中心)的重要場地了",
        "type": "lyrics",
        "segments": [
          {
            "text": "眾、白衣背向陸地中心)",
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
            "text": "的重要場地了 ",
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
    "id": "sec_70",
    "title": "【減災工程 曲目：許一個希望的未來】白衣背向陸地中心; 藍衣觀眾45 度",
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
        "url": "https://www.youtube.com/watch?v=Qu7wLnDXivU&list=PLcdQvmBAiLJ0",
        "videoId": "Qu7wLnDXivU"
      }
    ],
    "lines": [
      {
        "text": "感恩慈濟援建的減災工程，像這次的0403 花蓮地震，就帶來了平安與希望(藍衣蹲下雙",
        "type": "lyrics",
        "segments": [
          {
            "text": "感恩慈濟援建的減災工程，像這次的0403 花蓮地震，就帶來了平安與",
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
            "text": "希望",
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
            "text": "(藍衣蹲下雙",
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
        "text": "肩扛、白衣出右腳往正前、身體轉左、右手拿花)",
        "type": "lyrics",
        "segments": [
          {
            "text": "肩扛、白衣出右腳往正前、身體轉左、右手拿花)",
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
        "text": "智慧(藍衣大白牛弓步)為牆",
        "type": "lyrics",
        "segments": [
          {
            "text": "智慧",
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
            "text": "(藍衣大白牛弓步)",
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
            "text": "為牆  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
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
      },
      {
        "text": "一開始在演”賤民村”時面向甲舞台45 度",
        "type": "lyrics",
        "segments": [
          {
            "text": "一開始在演”賤民村”時面向甲舞台45 度",
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
        "text": "os：讓正法(全體開燈合掌轉向法師45)重回佛陀的故鄉，教導人人行菩薩道，完成佛陀救",
        "type": "dialogue",
        "segments": [
          {
            "text": "os：讓",
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
            "text": "正法",
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
            "text": "(全體開燈合掌轉向法師45)",
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
            "text": "重回佛陀的故鄉，教導人人行菩薩道，完成佛陀救",
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
        "text": "度眾生的心願，這就是回報佛恩(白轉背向陸地中心)",
        "type": "lyrics",
        "segments": [
          {
            "text": "度眾生的心願，這就是",
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
            "text": "回報佛恩",
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
            "text": "(白轉背向陸地中心)",
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
    "id": "sec_71",
    "title": "【報佛恩 曲目1：人間導師】白衣背向陸地中心; 藍衣法師45 度",
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
        "url": "https://www.youtube.com/watch?v=KwsN8MKQxOE&list=PLcdQvmBAiLJ0",
        "videoId": "KwsN8MKQxOE"
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
        "text": "為佛教 為眾生(結束藍衣快速壓縮、開綠燈、合掌、直接朝向飛天方向)",
        "type": "lyrics",
        "segments": [
          {
            "text": "為佛教 為眾生",
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
            "text": "(結束藍衣快速壓縮、開綠燈、合掌、直接朝向飛天方向) ",
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
        "text": "上人：師父一個心願，期待回饋佛陀的故鄉，佛陀給我們的慧命，佛陀覺悟了，回歸",
        "type": "dialogue",
        "segments": [
          {
            "text": "上人：師父一個心願，期待回饋佛陀的故鄉，佛陀給我們的慧命，佛陀覺悟了，回歸",
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
        "text": "人間來教導我們，所以佛恩難報啊!",
        "type": "lyrics",
        "segments": [
          {
            "text": "人間來教導我們，所以佛恩難報啊!",
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
            "isBoxed": false,
            "isBold": true,
            "isItalic": false,
            "color": "000000"
          }
        ]
      }
    ]
  },
  {
    "id": "sec_72",
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
        "url": "https://www.youtube.com/watch?v=eyAZbFSw39M&list=PLcdQvmBAiLJ0",
        "videoId": "eyAZbFSw39M"
      },
      {
        "title": "[功德品] 飛天‧藍衣走",
        "url": "https://www.youtube.com/watch?v=8FLAEwVIV4k&list=PLcdQvmBAiLJ0",
        "videoId": "8FLAEwVIV4k"
      },
      {
        "title": "[功德品] 飛天‧不動",
        "url": "https://www.youtube.com/watch?v=8zdJcA0VUMA&list=PLcdQvmBAiLJ0",
        "videoId": "8zdJcA0VUMA"
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
      },
      {
        "text": "【結束先換圓形，之後聽到咚咚咚時壓縮】",
        "type": "lyrics",
        "segments": [
          {
            "text": "【結束先換圓形，之後聽到咚咚咚時壓縮】 ",
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
      }
    ]
  },
  {
    "id": "sec_73",
    "title": "【六瑞相 曲目：六瑞相】面甲舞台腳夾線",
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
        "text": "佛說法華演大法 大法 六祥瑞相先現前",
        "type": "lyrics",
        "segments": [
          {
            "text": "佛說法華演大法 大法 六祥瑞相先現前 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "因緣具足",
        "type": "lyrics",
        "segments": [
          {
            "text": "因緣具足 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "成就 法成就",
        "type": "lyrics",
        "segments": [
          {
            "text": "成就 法成就 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "凡夫  凡夫",
        "type": "lyrics",
        "segments": [
          {
            "text": "凡夫  凡夫  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
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
        "text": "身不動 心不動 身心不動入三昧",
        "type": "lyrics",
        "segments": [
          {
            "text": "身不動 心不動 身心不動入三昧 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
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
        "text": "無量義 融法髓",
        "type": "lyrics",
        "segments": [
          {
            "text": "無量義 融法髓  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "天雨四華",
        "type": "lyrics",
        "segments": [
          {
            "text": "天雨四華 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "柔適意 天雨四華 天雨 地動涌震搖吼擊",
        "type": "lyrics",
        "segments": [
          {
            "text": "柔適意 天雨四華 天雨 地動涌震搖吼擊 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "地動 地動 地動 地動 地動 搖~擊~",
        "type": "lyrics",
        "segments": [
          {
            "text": "地動 地動 地動 地動 地動 搖~擊~  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "諦聽",
        "type": "lyrics",
        "segments": [
          {
            "text": "諦聽 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "諦聽",
        "type": "lyrics",
        "segments": [
          {
            "text": "諦聽 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "真誠諦聽法華經 真誠諦聽合佛心",
        "type": "lyrics",
        "segments": [
          {
            "text": "真誠諦聽法華經 真誠諦聽合佛心 ",
            "isRed": false,
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
    "id": "sec_74",
    "title": "【發心立願 曲目：行願半世紀】面法師腳夾線",
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
        "text": "~~ 咚~~(合掌內轉面向甲舞台/法師腳夾線)",
        "type": "lyrics",
        "segments": [
          {
            "text": "~~ 咚~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "(合掌內轉面向甲舞台/法師腳夾線) ",
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
        "text": "~~ 咚~~佛心師志",
        "type": "lyrics",
        "segments": [
          {
            "text": "~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": " ",
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
            "text": "咚~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "佛心師志",
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
        "text": "~~ 咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚~~(手放小跑步到自己地標面向法師/甲舞台腳夾線)",
        "type": "lyrics",
        "segments": [
          {
            "text": "~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": " ",
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
            "text": "咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "(手放小跑步到自己地標面向法師/甲舞台腳夾線) ",
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
        "text": "~~ 噹 ~~(合掌內轉面向法師腳夾線)",
        "type": "lyrics",
        "segments": [
          {
            "text": "~~ 噹 ~~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": "(合掌內轉面向法師腳夾線) ",
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
        "text": "體悟佛心",
        "type": "lyrics",
        "segments": [
          {
            "text": "體悟佛心 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "人傷我痛(即為己心)  領受師志",
        "type": "lyrics",
        "segments": [
          {
            "text": "人傷我痛",
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
            "text": "(即為己心)  領受師志 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "守護生命(奉為己志)",
        "type": "lyrics",
        "segments": [
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
            "text": "(奉為己志) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "生生世世",
        "type": "lyrics",
        "segments": [
          {
            "text": "生生世世 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "扎根教育(誓為佛教)",
        "type": "lyrics",
        "segments": [
          {
            "text": "扎根教育",
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
            "text": "(誓為佛教) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "心心念念",
        "type": "lyrics",
        "segments": [
          {
            "text": "心心念念 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "人文傳法(誠為眾生)",
        "type": "lyrics",
        "segments": [
          {
            "text": "人文傳法",
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
            "text": "(誠為眾生) ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "生生世世",
        "type": "lyrics",
        "segments": [
          {
            "text": "生生世世 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "誓為佛教",
        "type": "lyrics",
        "segments": [
          {
            "text": "誓為佛教 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "心心念念",
        "type": "lyrics",
        "segments": [
          {
            "text": "心心念念 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "誠為眾生 ~ 咚咚咚咚~",
        "type": "lyrics",
        "segments": [
          {
            "text": "誠為眾生 ",
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
            "text": "~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
          },
          {
            "text": " ",
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
            "text": "咚咚咚咚~",
            "isRed": false,
            "isGreen": false,
            "isBlue": false,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "A02B93"
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
        "text": "願佛法興顯弘大乘",
        "type": "lyrics",
        "segments": [
          {
            "text": "願佛法興顯弘大乘  ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
            "isPurple": false,
            "isBoxed": false,
            "isBold": false,
            "isItalic": false,
            "color": "0000FF"
          }
        ]
      },
      {
        "text": "菩薩廣行無~量~義~   菩薩廣行無量義(收手收腳轉甲舞台)",
        "type": "lyrics",
        "segments": [
          {
            "text": "菩薩廣行無~量~義~   ",
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
            "text": "菩薩廣行",
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
            "text": "無量義",
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
            "text": "(收手收腳轉甲舞台)",
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
    "id": "sec_75",
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
        "text": "(不唱)浩瀚的天空",
        "type": "lyrics",
        "segments": [
          {
            "text": "(不唱)",
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
            "text": "浩瀚的天空 ",
            "isRed": false,
            "isGreen": false,
            "isBlue": true,
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
        "text": "上人：真的很感恩啦(合十拿花開綠燈)!慈濟不只是在地球啊,慈濟呢也是在宇宙間啦其中",
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
            "text": "真的很感恩",
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
            "text": "啦",
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
            "text": "(合十拿花開綠燈)",
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
            "text": "!慈濟不只是在地球啊,慈濟呢也是在宇宙間啦其中",
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
        "text": "的一顆小星星,但願我們人人啦!雖然是小星星啊!也是一閃一閃亮晶晶喔!但願我們有",
        "type": "lyrics",
        "segments": [
          {
            "text": "的一顆小星星,但願我們人人啦!雖然是小星星啊!也是一閃一閃亮晶晶喔!但願我們有",
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
        "text": "無量數的小星星會合起來,讓它呢一片的亮麗的星河啊!讓天地呢能調順平安啦!這都",
        "type": "lyrics",
        "segments": [
          {
            "text": "無量數的小星星會合起來,讓它呢一片的亮麗的星河啊!讓天地呢能調順平安啦!這都",
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
        "text": "是我們期待呢這樣的天地很祥和",
        "type": "lyrics",
        "segments": [
          {
            "text": "是我們期待呢這樣的天地很祥和 ",
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
        "text": "(大聲唱)慈濟小行星(藍衣持花舉高) 化剎那(白衣舉高、藍衣收於胸前)",
        "type": "lyrics",
        "segments": [
          {
            "text": "(大聲唱",
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
            "text": "慈濟小行星",
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
            "text": "(藍衣持花舉高)",
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
            "text": " 化剎那",
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
            "text": "(白衣舉高、藍衣收於胸前) ",
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
        "text": "為永恆(藍衣持花舉高)",
        "type": "lyrics",
        "segments": [
          {
            "text": "為永恆",
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
            "text": "(藍衣持花舉高)",
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
            "isRed": false,
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
    "id": "sec_76",
    "title": "【祈禱 曲目：祈禱】面乙舞台圓心",
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
        "text": "前奏轉乙舞台腳頂線，改開黃燈",
        "type": "lyrics",
        "segments": [
          {
            "text": "前奏轉乙舞台腳頂線，改開黃燈 ",
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
        "text": "上人：我天天啦都是在祈禱,我的祈禱就是淨化人心、祥和社會、天下無災難",
        "type": "dialogue",
        "segments": [
          {
            "text": "上人：我天天啦都是在祈禱,我的祈禱就是淨化人心、祥和社會、天下無災難 ",
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
        "text": "大家一起來祈禱(慢慢收) 從不同角落地點 祈求平安吉祥滿人(右併轉90 度)間(右併轉90 度)",
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
            "text": " 從不同角落地點 祈求平安吉祥",
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
            "text": "滿人",
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
            "text": "(右併轉90 度)",
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
            "text": "間",
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
            "text": "(右併轉90 度)",
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
        "text": "大家心口一念(慢慢收)",
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
            "text": "(慢慢收) ",
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
