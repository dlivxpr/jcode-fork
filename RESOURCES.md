# jcode 架构学习资源

## Knowledge

- [本仓库 jcode-fork（dlivxpr/jcode-fork）+ 上游 1jehuang/jcode](https://github.com/1jehuang/jcode)
  一手源码，一切架构结论的最终依据。上游仓库是 hard fork 前追踪改动、判断「这代码是本地的还是上游的」的基准。
- [jcode 官方文档](https://jcode.sh/docs)
  上游官方文档入口（README 链接）。用于：用户级功能语义、配置项、行为定义。
- [omp 官方文档目录（can1357/oh-my-pi/docs）](https://github.com/can1357/oh-my-pi/tree/main/docs)
  omp 是 pi 的 Rust 移植（见其 `porting-from-pi-mono.md`），与 jcode 同物种（Rust 终端 coding-agent harness），文档 60+ 篇（`compaction.md`、`session.md`、`providers.md`、`rpc.md`、`tree.md` 等）。用于：理解同类 harness 的领域概念与设计取舍，对照 jcode 找对应物。注意：是 omp 的文档，不是 jcode 的，不能直接当作 jcode 事实引用。
- [earendil-works/pi](https://github.com/earendil-works/pi) + [pi.dev/docs](https://pi.dev/docs)
  设计空间的原点（TypeScript 实现，pi.dev）。用于：理解 coding-agent harness 的设计概念谱系（agent loop、harness、compaction、session）。
- [The Rust Book](https://doc.rust-lang.org/book/)
  系统补 Rust 概念时使用（模块系统见第 7 章、trait 见第 10 章、所有权见第 4 章）。
- [Asynchronous Programming in Rust](https://rust-lang.github.io/async-book/)
  jcode 大量使用 tokio async。读 agent loop、server、channel 之前补课用。
- [tokio 文档](https://docs.rs/tokio)
  jcode 的异步运行时（task、channel、select!、spawn）。
- [ratatui](https://ratatui.rs)
  jcode TUI 的底层渲染库（后续 TUI 课程再深入）。
- 仓库内约定文档：`docs/CRATE_OWNERSHIP_BOUNDARIES.md`（crate 拆分原则与依赖边界）、`CONTRIBUTING.md`、`AGENTS.md`（开发流程与验证方法）
  审核 AI 提交的 diff 时必须对照的仓库自有规范。

## Wisdom (Communities)

- [jcode Discord](https://discord.gg/nBe9vGyK9a)
  上游官方社区（README 徽章）。用于：hard fork 前了解上游动向、提问架构取舍。
- [r/rust](https://reddit.com/r/rust)
  一般 Rust 问题求助。
- 本地：用户日常使用 omp 作为 harness（本会话即运行在 omp 上），可对照亲身体验理解同类产品行为。

## Gaps

- 不存在面向初学者的 jcode 架构指南（本教学工作区正在产出它）。
- jcode 与 omp 的代码级血缘未经证实（jcode 历史以 squash 的 "Initial commit: J-Code coding agent" 开始）。若后续课程需要，可对比两仓库验证。
