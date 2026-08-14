# 用户先验知识基线：Python 强 / Rust 弱

2026-08-15 建立。用户自述：Python 熟练（FastAPI web 开发、pandas 数据处理、transformers 模型训练）；Rust 只学过基础语法，高阶概念（async、trait 系统、并发原语）不熟，未手写过 Rust 应用。学习动机已记录于 [[MISSION.md]]：读懂 jcode 架构 → 指挥 AI 修改 jcode → 审核 AI 提交的 diff → 未来 hard fork 自己的 code agent。

**Implications**
- 可用 Python 类比辅助理解（asyncio ↔ tokio、ABC ↔ trait、pydantic ↔ serde），但 Rust 独有概念（所有权、trait object、Arc/Mutex、async）必须在课内解释到位。
- 课程目标是"读懂与驾驭架构"，不是系统性 Rust 语言教学；Rust 知识只教到能读代码、审 diff 的程度。
- 评估理解的方式可以是"指出某功能在哪个 crate/文件"（定位题）而非写 Rust。
