# Mission: 读懂 jcode 架构，能指挥 AI 改造它并审核 AI 的代码

## Why
用户计划在 jcode（本仓库 dlivxpr/jcode-fork，上游 1jehuang/jcode）基础上 hard fork 出自己的 code agent。为此他需要看懂 jcode 的架构与设计决策，达到能向 AI 下达精确修改指令、独立审核 AI 提交的 diff 的水平。

## Success looks like
- 能指出任意功能对应的 crate/模块/文件（例如：工具注册在哪、agent 主循环在哪、provider 如何接入），并解释模块间依赖方向
- 能向 AI 下达带明确边界的修改指令（指定文件、类型、影响面、验证方式），AI 产出后能独立判断正确性与风险
- 能对 jcode 做一次真实的实验性修改（自选小功能），完成构建与运行时验证
- 能画出 jcode 的进程模型与一次请求的完整调用链（CLI → server → agent loop → tool/provider → TUI）

## Constraints
- Rust 只有基础语法水平，无应用级 Rust 经验；教学需边讲架构边补「读代码所需」的 Rust 知识
- Python 熟练（FastAPI/pandas/transformers），可用 Python 生态类比辅助理解
- 教学语言：简体中文；术语、路径、命令、代码保留英文
- 每节课要短、能快速完成、有立即的正反馈
- 时间预算：平均每天 1 小时、每周 5 天；单课含练习须在 1 小时内完成

## Out of scope
- 系统性学习 Rust 语言本身（只教读懂 jcode 所必需的 Rust 概念）
- TUI 渲染细节、telemetry-worker（TypeScript/Cloudflare）、iOS/desktop 客户端（初期不碰）
- 模型训练、prompt engineering 技巧（与架构无关的部分）
