# 在 Windows 上安装

[English](windows.md) | 中文

1. 按[校验文档](verify.zh.md)对照 `SHA256SUMS` 校验 EXE。
2. 移除下载标记：`Unblock-File .\codez-<version>-win-x64-unsigned.exe`。
3. 交互安装，或按用户静默安装：`Start-Process .\codez-<version>-win-x64-unsigned.exe -ArgumentList '/S' -Wait`。
4. 出现 SmartScreen 时选择**更多信息 → 仍要运行**。
5. 从开始菜单启动 CodeZ，并完成[密钥设置](key.zh.md)。

静默安装无需管理员权限。默认按用户安装位置为 `%LOCALAPPDATA%\Programs\CodeZ`；开始菜单快捷方式和卸载程序也在该目录。

首次启动会创建 `%APPDATA%\CodeZ\home`。安装验证完成前保留 EXE。
