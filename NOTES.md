# 教学笔记（内部备忘）

## 用户画像

- Python 熟练：FastAPI web 开发、pandas 数据处理、transformers 模型训练。
- Rust 弱：只学过基础语法，高阶概念（async、trait 系统、生命周期、Arc/Mutex 并发）不懂，没手写过 Rust 应用。
- 日常 harness 是 omp（本会话运行在 omp 环境里）；目标是 hard fork jcode（本仓库）做自己的 code agent。
- 用户明确表示「如果有需要的信息，随时来询问我」——愿意回答问题，但优先自行查证。

## 教学偏好

- 教学语言：简体中文；术语、路径、命令、代码保留英文。
- 可用 Python 类比辅助理解（如 workspace/crate/module ↔ 环境/包/模块），但 Rust 独有术语（trait、async、所有权）必须解释到位。
- 每节课要短、能快速完成、有立即正反馈；课内要有交互练习（quiz / 动手验证）。

## 课程路线（草稿）

1. （已规划）0001 架构地图：四层 crate 洋葱 + 进程模型 + `jcode run` 调用链
2. 候选：agent 主循环与一轮 turn 的生命周期（读 `agent.rs`）
3. 候选：工具系统（注册表、Tool trait、审批）
4. 候选：provider 抽象与流式响应
5. 候选：session 持久化与内存/compaction
6. 候选：selfdev 开发流程（AGENTS.md 的 daemon 坑）
7. 候选：hard fork 改造点盘点（改名、去遥测、换后端）

## 工作区约定

- 仓库根已存在 `assets/`（产品素材），教学组件统一放 `assets/lessons/`（styles.css、quiz.js 等）。
- 每节课链接参考文档（`reference/*.html`）而不是重复内容。
- 教学工作区文件（MISSION.md、lessons/、reference/、learning-records/、assets/lessons/）随会话提交 git（2026-08-15 用户确认）；`.omp/` 与 `AGENTS.md` 由用户/harness 管理，不代提交。

## 待确认

- 时间节奏：平均每天 1 小时、每周 5 天（2026-08-15 确认）。单课 + 练习须 ≤ 1 小时；间隔复习（spacing）放每天开头 5 分钟。
- 用户是否想加入社区（jcode Discord 等）——RESOURCES.md 已列，未表态。
