# Project Rules

- **Exclude Specific Data Files in Git Sync (排除指定資料檔案不同步)**: Git synchronization operations must synchronize all files in the directory except for specific data files (`data.js`, `daydata.js`, `performers.csv`, and `dayperformers.csv`). These four files must be kept in the remote GitHub repository (not deleted) but any local modifications to them must not be synchronized or overwritten to remote.
- **Git 同步排除指定資料檔案**：Git 同步作業時，應同步資料夾內除了指定資料檔案（`data.js`、`daydata.js`、`performers.csv` 及 `dayperformers.csv`）以外的所有檔案。這四個檔案需繼續保留在遠端 GitHub 儲存庫（不予刪除），但本機對這四個檔案的任何後續修改絕對不要同步（覆蓋/取代）至遠端。
- **Local Testing & Explicit Sync Confirmation (本機測試與確認後同步)**: All modifications must be tested locally first. After executing any modification plan, you must confirm that a local test environment has been established. Do not automatically commit or push changes. Only after local testing and confirmation, and when the user explicitly instructs to synchronize, should you commit and push to the remote GitHub repository.
- **本機測試與明確指令同步**：所有修改都必須先在本機進行測試與驗證。修改計劃執行後，必須確認已建立本機測試環境。禁止自動進行 commit 與 push。必須在本機確認無誤，且使用者下達同步指令後，才可執行 Git 同步操作。
- **Plan-First Modification (先計劃後修改)**: For any modification task, an implementation plan must be created first. Modifications can only proceed after the user reviews and confirms the plan.
- **先做計劃後修改**：任何代碼或系統修改，都必須先撰寫並提出實作計劃（Implementation Plan）。經使用者確認與核准計劃後，才能開始進行實際代碼修改。
- **Traditional Chinese Responses (使用正體中文回答)**: All responses and communication with the user must be in Traditional Chinese.
- **使用正體中文回答**：與使用者溝通及所有回答，必須一律使用正體中文。

