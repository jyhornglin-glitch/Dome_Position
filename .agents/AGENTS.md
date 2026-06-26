# Project Rules

- **Code-Only Git Sync (不同步資料)**: Git synchronization operations must only synchronize program files (code like `.py`, `.js` (excluding database files like `data.js` and `daydata.js`), `.html`, `.css`). Do not synchronize or commit data files (such as `.csv` files like `performers.csv`, `dayperformers.csv`, and generated data files like `data.js`, `daydata.js`).
- **Git 同步僅限程式**：Git 同步作業時，僅同步程式碼檔案（例如 `.py`, `.js`（不含資料庫 `data.js` 與 `daydata.js`）, `.html`, `.css`），絕對不要將資料檔案（例如 `.csv` 檔案如 `performers.csv`、`dayperformers.csv`，以及生成數據檔案 `data.js`、`daydata.js`）進行 commit 或 push 同步。
- **Local Testing & Explicit Sync Confirmation (本機測試與確認後同步)**: All modifications must be tested locally first. After executing any modification plan, you must confirm that a local test environment has been established. Do not automatically commit or push changes. Only after local testing and confirmation, and when the user explicitly instructs to synchronize, should you commit and push to the remote GitHub repository.
- **本機測試與明確指令同步**：所有修改都必須先在本機進行測試與驗證。修改計劃執行後，必須確認已建立本機測試環境。禁止自動進行 commit 與 push。必須在本機確認無誤，且使用者下達同步指令後，才可執行 Git 同步操作。
- **Plan-First Modification (先計劃後修改)**: For any modification task, an implementation plan must be created first. Modifications can only proceed after the user reviews and confirms the plan.
- **先做計劃後修改**：任何代碼或系統修改，都必須先撰寫並提出實作計劃（Implementation Plan）。經使用者確認與核准計劃後，才能開始進行實際代碼修改。
- **Traditional Chinese Responses (使用正體中文回答)**: All responses and communication with the user must be in Traditional Chinese.
- **使用正體中文回答**：與使用者溝通及所有回答，必須一律使用正體中文。

