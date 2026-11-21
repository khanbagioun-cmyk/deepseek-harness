# 虚拟机

[English](vm.md) | 中文

桌面应用需要带图形会话的完整 macOS 或 Windows 客户机。

- 安装前和[校验](verify.zh.md)后分别创建快照。
- 使用与客户机架构匹配的安装包。除非虚拟化层提供所需加速，否则不要在模拟 arm64 的虚拟机中运行 arm64 DMG。
- Windows 客户机至少 8 GB 内存和 30 GB 可用磁盘。macOS 客户机需要厂商支持的虚拟化栈和 8 GB 内存。
- 显式授予显示、麦克风和辅助功能权限；Computer Use 需要 macOS 辅助功能授权。
- Linux 虚拟机不能运行桌面应用，请改用 Web profile。

记录虚拟化平台、客户机系统版本、分配的 CPU/内存/磁盘和所用校验和。
