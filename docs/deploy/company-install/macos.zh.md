# 在 macOS 上安装

[English](macos.md) | 中文

1. 按[校验文档](verify.zh.md)对照 `SHA256SUMS` 校验 DMG。
2. 挂载 DMG：`hdiutil attach "codez-<version>-mac-arm64-unsigned.dmg" -nobrowse -mountpoint /Volumes/CodeZ`。
3. 复制应用：`ditto "/Volumes/CodeZ/CodeZ.app" /Applications/CodeZ.app`。
4. 移除下载隔离属性：`xattr -dr com.apple.quarantine /Applications/CodeZ.app`。
5. 卸载镜像：`hdiutil detach /Volumes/CodeZ`。
6. 从“应用程序”启动 CodeZ，并完成[密钥设置](key.zh.md)。

跳过第 4 步时 macOS 会阻止首次启动。界面替代方式是右键应用并选择**打开**后确认；macOS 15 及更高版本还需在**系统设置 → 隐私与安全性 → 仍要打开**中批准。

在 Apple Silicon 上运行 x64 版本需先安装一次 Rosetta：`softwareupdate --install-rosetta --agree-to-license`。

首次启动会创建 `~/Library/Application Support/CodeZ/home`。安装验证完成前保留 DMG。
